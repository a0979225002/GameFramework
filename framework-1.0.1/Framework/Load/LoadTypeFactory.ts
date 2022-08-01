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

        private assetBundles: Map<string, cc.AssetManager.Bundle>;
        private configManager: IF.IConfigManager;
        private loadResManager: IF.ILoadResManager;

        constructor(loadResManager: IF.ILoadResManager, configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this.loadResManager = loadResManager;
            this.assetBundles = new Map<string, cc.AssetManager.Bundle>();
        }

        /**
         * 載入外部Bundle
         */
        loadOutSideBundle(outSideData: IF.IOutSideData) {
            //加載Bundle資源時須先加載Bundle清單
            return new Promise<void>((resolve) => {
                if (this.assetBundles.has(outSideData.bundleName)) return resolve();
                const version = {
                    version: outSideData.version,
                }

                cc.assetManager.loadBundle(outSideData.bundleURL, version, (error, bundle) => {
                    if (error) {
                        ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, error)
                    }
                    this.assetBundles.set(outSideData.bundleName, bundle);
                    resolve();
                })
            });
        }

        /**
         * 次資源加載
         * @param {string} dataName - 檔案名稱
         * @param {fcc.type.LoadType} type - 檔案類型
         * @param {string} url - 檔案位置
         * @return {Promise<void>}
         */
        loadInSideBundle(dataName: string, type: type.LoadType, url: string): Promise<void> {
            //加載Bundle資源時須先加載Bundle清單
            return new Promise<void>((resolve) => {
                if (this.assetBundles.has("secondaryRes")) return resolve();
                cc.assetManager.loadBundle("secondaryRes", (error, bundle) => {
                    if (error) {
                        ErrorManager.instance.executeError(fcc.type.ErrorType.LOAD_FW, error)
                    }
                    this.assetBundles.set("secondaryRes", bundle);
                    resolve();
                })
            });
        }

        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        public executeLoad(dataName: string, type: type.LoadType, url: string) {
            const config: IF.ILoadConfig = {
                dataName: dataName,
                type: type,
                url: url,
                folder: "resources",
                isMainLoad: true,
                ccType: undefined,
            }
            this.checkLoadType(config);
        }

        /**
         * 執行Bundle載入動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        public async executeLoadBundle(dataName: string, type: type.LoadType, url: string) {
            await this.loadInSideBundle(dataName, type, url);
            const config: IF.ILoadConfig = {
                dataName: dataName,
                type: type,
                url: url,
                folder: "secondaryRes",
                isMainLoad: false,
                ccType: undefined,
            }
            this.checkLoadType(config);
        }

        /**
         * 載入外部資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        public async executeLoadOutSideBundle(outSideData: IF.IOutSideData) {
            await this.loadOutSideBundle(outSideData);
            const config: IF.ILoadConfig = {
                dataName: outSideData.name,
                type: outSideData.loadType,
                url: outSideData.url,
                folder: outSideData.bundleName,
                isMainLoad: false,
                ccType: undefined,
            }
            this.checkLoadType(config);
        }

        /**
         * 加載主要外部資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        public async executeMainLoadOutSideBundle(outSideData: IF.IOutSideData) {
            await this.loadOutSideBundle(outSideData);
            const config: IF.ILoadConfig = {
                dataName: outSideData.name,
                type: outSideData.loadType,
                url: outSideData.url,
                folder: outSideData.bundleName,
                isMainLoad: true,
                ccType: undefined,
            }
            this.checkLoadType(config);
        }

        /**
         * 確認當前資源類型,給相對應class 處理
         * @param {fcc.IF.ILoadConfig} loadConfig
         * @private
         */
        private checkLoadType(loadConfig: IF.ILoadConfig) {
            switch (loadConfig.type) {
                case fcc.type.LoadType.IMG:
                    loadConfig.ccType = cc.SpriteFrame;
                    new ImgLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.IMG_ATLAS:
                    loadConfig.ccType = cc.SpriteAtlas;
                    new ImgAtlasLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.MUSIC:
                    loadConfig.ccType = cc.AudioClip;
                    new MusicLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.PREFAB:
                    loadConfig.ccType = cc.Prefab;
                    new PrefabLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.SPINE:
                    loadConfig.ccType = sp.SkeletonData;
                    new SpineLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.SCENE:
                    loadConfig.ccType = cc.SceneAsset;
                    new SceneLoad(loadConfig).loadResources();
                    break;
                case fcc.type.LoadType.TEXT:
                    loadConfig.ccType = cc.TextAsset;
                    new TextLoad(loadConfig).loadResources();
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
                    new CSSLoad(name, "text/css", url, parameter).loadScript();
                    break
                case fcc.type.LoadType.SCRIPT:
                    new ScriptLoad(name, "text/javascript", url, parameter).loadScript();
                    break
                default:
                    ErrorManager.instance.executeError(fcc.type.ErrorType.TYPE_FW, "LoadType 無法偵測");
            }
        }
    }
}
