/// <reference path="../Enum/LoadType.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)資源管理者
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface ILoadResManager {
            /**
             * 初始加載物件
             */
            initialLoadState: Map<string, number>;

            /**
             * 次加載,可以在還未加載完成時,也能進入MainGame Scene
             */
            secondaryLoadState: Map<string, number>;

            /**
             * 外部資料加載資源狀態
             */
            scriptLoadState: Map<string, number>;

            /**
             * img物件保存
             */
            imgRes: Map<string, Map<string, cc.SpriteFrame>>;

            /**
             * spine 物件保存
             */
            spineRes: Map<string, sp.SkeletonData>;

            /**
             * 讀取後的文件檔案,保存位置
             */
            readFileRes: Map<string, Map<string, string>>;

            /**
             * 讀取後的Prefab,保存位置
             */
            prefabRes: Map<string, cc.Prefab>;

            /**
             * 音樂保存位置
             */
            musicRes: Map<string, cc.AudioClip>;

            /**
             * 場景保存位置
             */
            sceneRes: Map<string, cc.SceneAsset>;

            /**
             * 載入順序
             */
            currentLoadOrder: Array<IAssetData | IF.IOutSideData>


            /**
             * 外部腳本保存URL地址,單存判斷是否重複加載
             * @type {Set<string>}
             */
            scriptRes: Set<string>;

            /**
             * 主資源加載物件,監聽是否有callback,隨之返回該狀態
             * @param name - 加載物件名稱,由使用者自訂義加載名稱
             * @param progress - 加載進度
             * @param state - 該物件加載百分比
             */
            loadMainEventCallback(name: string, progress: number, state: number): void;

            /**
             * 次資源加載物件,監聽是否有callback,隨之返回該狀態
             * 注意,該狀態無總資源監聽回傳事件
             * @param {string} name - 加載物件名稱,由使用者自訂義加載名稱
             * @param {number} state - 該物件加載百分比
             */
            loadSecondaryEventCallback(name: string, state: number): void;

            /**
             * 外部資源加載完成返回
             * @param {string} name - 加載物件名稱(檔名)
             * @param {number} isError - 是否加載錯誤
             */
            loadScriptEventCallback(name: string, isError: boolean): void

            /**
             * 加載該資料夾底下所有資源 注意: 需存放於 resources中
             * @param {string} name - 自訂義拿取資源時的名稱
             * @param {LoadType} type - 要獲取的資源類型
             * @param {string} url - 要獲取的資源位置
             * @param {boolean} isLanguageUsed - 是否要使用語系位置
             * @return {this}
             */
            loadAsset(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;


            /**
             * 載入主要遠程外部Bundle
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {this}
             */
            loadMainOutSideAsset(outSideData: IF.IOutSideData): this;

            /**
             * 加載 該 assetBundle 底下資源
             * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
             * 注意:須於UI勾選配置為Bundle資料夾
             * @param {string} name - 自訂義拿取資源時的名稱
             * @param {LoadType} type - 要獲取的資源類型
             * @param {string} url - 要獲取的資源位置
             * @param {boolean} isLanguageUsed - 是否要使用語系位置
             */
            loadBundle(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;

            /**
             * 載入遠程外部Bundle
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {this}
             */
            loadOutSideAsset(outSideData: IF.IOutSideData):this;

            /**
             * 執行載入,不判斷載入資源資源進度
             * @param {fcc.IF.IAssetData} assetData - 需載入的資源資料
             */
            executeLoad(assetData: IF.IAssetData);

            /**
             * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
             * @param {(progress: number,isError?:boolean) => void} callFun
             * @param {string} methodName- 自訂義拿取資源時的名稱
             * @returns {this}: methodName 未使用情況,回傳 void
             */
            callback(callFun: (progress: number, isError?: boolean) => void, methodName?: string): this;

            /**
             * 加載外部腳本
             * @param name - 檔案名稱,不含副檔名
             * @param type - 檔案類型
             * @param url - 檔案URL,不含外部 URL
             * @param parameter - GET 參數
             * @returns {this}
             */
            loadExternalScript(name: string, type: type.LoadType, url: string, parameter?: string): this;

            /**
             * 查看該資源是否已加載完畢
             * @param name
             * @param isMainResources
             */
            getLoadState(name: string, isMainResources: boolean): boolean;

            /**
             * 清除資源
             * @param {string} type - 資源類型
             */
            remove(type: string): void;

        }
    }
}
