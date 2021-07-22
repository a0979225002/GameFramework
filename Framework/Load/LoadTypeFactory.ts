/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadType.ts" />
/// <reference path="./LoadScriptType/CSSLoad.ts" />
/// <reference path="./LoadScriptType/ScriptLoad.ts" />
/// <reference path="./LoadType/ImgLoad.ts" />
/// <reference path="./LoadType/MusicLoad.ts" />
/// <reference path="./LoadType/PrefabLoad.ts" />
/// <reference path="./LoadType/SceneLoad.ts" />
/// <reference path="./LoadType/SpineLoad.ts" />
/// <reference path="./LoadType/TextLoad.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入各類資源工廠
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class LoadTypeFactory implements IF.ILoadFactory {

        private isLoadBundle: boolean;
        private assetBundle: cc.AssetManager.Bundle
        private promise: Promise<unknown>
        private readonly assetMethod: Array<Function>;
        private configManager: IF.IConfigManager;
        private loadResManager: IF.ILoadResManager;

        constructor(loadResManager: IF.ILoadResManager, configManager: IF.IConfigManager) {
            this.assetMethod = new Array<Function>();
            this.configManager = configManager;
            this.loadResManager = loadResManager;
        }

        /**
         * 次資源加載
         * @param {string} dataName - 檔案名稱
         * @param {fcc.type.LoadType} type - 檔案類型
         * @param {string} url - 檔案位置
         * @return {Promise<void>}
         */
        loadBundle(dataName: string, type: type.LoadType, url: string): Promise<void> {

            if (this.assetBundle) return;
            this.promise = new Promise<void>(() => {
            });

            //加載Bundle資源時須先加載Bundle清單
            return new Promise<void>((resolve) => {
                if (!this.isLoadBundle) {
                    this.isLoadBundle = true;
                    cc.assetManager.loadBundle("secondaryRes", (error, bundle) => {
                        if (error) {
                            ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, error)
                        }
                        this.assetBundle = bundle;
                        resolve();
                    })
                } else if (!this.assetBundle && this.isLoadBundle) {
                    this.assetMethod.push(this.checkLoadType.bind(this, dataName, type, url, "secondaryRes"));
                }
            });
        }

        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        public executeLoad(dataName: string, type: type.LoadType, url: string) {
            this.checkLoadType(dataName, type, url, "resources");
        }

        /**
         * 執行Bundle載入動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        async executeLoadBundle(dataName: string, type: type.LoadType, url: string) {

            await this.loadBundle(dataName, type, url);
            this.checkLoadType(dataName, type, url, "secondaryRes");

            if (this.assetMethod.length != 0) {
                while (this.assetMethod.length) {
                    this.assetMethod[0]();
                    this.assetMethod.shift();
                }
            }
        }

        /**
         * 確認當前資源類型,給相對應class 處理
         * @param {string} dataName - 自訂義資源名稱
         * @param {fcc.type.LoadType} type - 資源類型
         * @param {string} url - 資源位置
         * @param {string} folder - 資源父類資料夾,默認 resource
         * @private
         */
        private checkLoadType(dataName: string, type: type.LoadType, url: string, folder: string) {
            switch (type) {
                case fcc.type.LoadType.IMG:
                    new ImgLoad(dataName, cc.SpriteAtlas, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.MUSIC:
                    new MusicLoad(dataName, cc.AudioClip, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.PREFAB:
                    new PrefabLoad(dataName, cc.Prefab, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.SPINE:
                    new SpineLoad(dataName, sp.SkeletonData, url, folder).loadResources();
                    break;
                case fcc.type.LoadType.SCENE:
                    new SceneLoad(dataName, cc.SceneAsset, null, folder).loadResources();
                    break;
                case fcc.type.LoadType.TEXT:
                    new TextLoad(dataName, cc.TextAsset, url, folder).loadResources();
                    break;
                default :
                    ErrorManager.instance.executeError(fcc.type.ErrorType.TYPE_FW, "資源類型錯誤,尚無此類型載入方法");
            }
        }

        /**
         * 加載外部腳本
         * @param name - 檔案名稱,不含副檔名
         * @param type - 檔案類型
         * @param url - 檔案url,不含外部 url
         * @param parameter - get 參數
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string, parameter: string) {
            switch (type) {
                case fcc.type.LoadType.CSS:
                    new CSSLoad(name, "text/css", url,parameter).loadScript();
                    break
                case fcc.type.LoadType.SCRIPT:
                    new ScriptLoad(name, "text/javascript", url,parameter).loadScript();
                    break
                default:
                    ErrorManager.instance.executeError(fcc.type.ErrorType.TYPE_FW, "LoadType 無法偵測");
            }
        }
    }
}
