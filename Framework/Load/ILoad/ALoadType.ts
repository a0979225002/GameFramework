/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Global/Util.ts" />
namespace fcc {

    export namespace ABS {

        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入各類cocos資源
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export abstract class ALoadType implements IF.ILoadType {

            protected type: any;
            protected url: string;
            protected dataName: string;
            protected folder: string
            private beforeProgress: number;
            private assetBundle: cc.AssetManager.Bundle

            protected constructor(dataName: string, type: cc.Asset, url: string, folder: string) {

                this.type = type;               //當前要獲取的資源類型
                this.url = url;                 //獲取的地址
                this.dataName = dataName;       //要拿取資源的key
                this.folder = folder            //父資料夾名稱,默認 resources
                this.beforeProgress = 0;        //當前上次的載入進度
                this.assetBundle = cc.assetManager.getBundle(this.folder);
            }

            /**
             * 加載資源方法
             */
            public loadResources() {
                if (this.type !== cc.SceneAsset) {
                    this.assetBundle
                        .loadDir(
                            this.url,
                            this.type,
                            this.loadResProgress.bind(this),
                            this.loadResCallBack.bind(this)
                        );
                } else {
                    //載入scene資源,如果名稱錯誤會scene名稱錯誤會無法拿取資源
                    //載入scene資源,無須URL地址,但是2.4.X需要放在Resource底下
                    this.assetBundle
                        .loadScene(
                            this.dataName,
                            cc.SceneAsset,
                            this.loadResProgress.bind(this),
                            this.loadResCallBack.bind(this)
                        );
                }
            }

            /**
             * 回傳該加載的資源
             * @param {Error} error - 錯誤訊息
             * @param {[] | cc.SceneAsset} assets - 資源
             * @private
             */
            private loadResCallBack(error: Error, assets: [] | cc.SceneAsset) {
                if (error) {
                    ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, error);
                } else if (!(assets instanceof cc.SceneAsset) && assets.length == 0) {
                    ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `無載入任何資源 ${this.url} `);
                }
                this.setResToManager(this.dataName, assets);
            }

            /**
             * 回傳當前載入進度
             * @param {number} complete - 以載入完畢的數量
             * @param {number} TotalAmount - 總數量
             * @private
             */
            private loadResProgress(complete: number, TotalAmount: number) {
                //獲取百分比
                let progress = global.Util.roundDown((complete / TotalAmount), 2);

                if (progress > this.beforeProgress) {

                    //不從這裡判斷狀態,目的解決異步操作
                    //當資源都載入到LoadManager時才回傳以載入完成的狀態
                    if (progress >= 1) {
                        progress = 0.99
                    }
                    //回傳上次與這次之間增加了多少進度
                    this.updateManagerState(this.dataName, progress, (progress - this.beforeProgress));
                    this.beforeProgress = progress;
                }
            }

            /**
             * 載入完成後回調
             * @protected
             */
            protected updateProgressEnd() {
                //目的解決異步操作
                //當資源都載入到LoadManager時才回傳以載入完成的狀態
                if (this.folder === "resources") {
                    LoadResManager.instance.initialLoadState.set(this.dataName, 1);
                    LoadResManager.instance.loadMainEventCallback(this.dataName, 0.01, 1);
                } else {
                    LoadResManager.instance.secondaryLoadState.set(this.dataName, 1);
                    LoadResManager.instance.loadSecondaryEventCallback(this.dataName, 1);
                }
            }

            /**
             * 更新當前進度
             * @param {string} key - 該資源名稱
             * @param {number} state - 當前進度
             * @param {number} update - 更上次進度比起,新增了多少進度
             * @protected
             */
            protected updateManagerState(key: string, state: number, update: number) {
                if (this.folder === "resources") {
                    LoadResManager.instance.initialLoadState.set(key, state);
                    LoadResManager.instance.loadMainEventCallback(key, update, state);
                } else {
                    LoadResManager.instance.secondaryLoadState.set(key, state);
                    LoadResManager.instance.loadSecondaryEventCallback(key, state);
                }
            }

            /**
             * 將資源保存在管理器中
             * @param {string} dataName - 自訂義該資源名稱
             * @param asset - 資源
             * @protected
             */
            protected abstract setResToManager(dataName: string, asset: any): void;

        }
    }
}