/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./Enum/LoadEnum.ts" />
/// <reference path="./ILoad/ILoadFactory.ts" />
/// <reference path="./ILoad/ILoadResManager.ts" />
/// <reference path="./LoadTypeFactory.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 處理個別類型資源載入
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class LoadTypeHandler implements IF.ILoadFactory {

        private factory: LoadTypeFactory;
        private loadResManager: IF.ILoadResManager;

        constructor(loadResManager: IF.ILoadResManager) {
            this.loadResManager = loadResManager;
            this.factory = new LoadTypeFactory();
        }

        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param name
         * @param type
         * @param url
         */
        public executeLoad(name: string, type: type.LoadType, url: string) {
            this.checkRepeatTheName(name);
            this.loadResManager.initialLoadState.set(name, null);
            this.factory.executeLoad(name, type, url);
        }

        /**
         * 執行Bundle載入動作
         * @param name
         * @param type
         * @param url
         */
        public async executeLoadBundle(name: string, type: type.LoadType, url: string) {

            this.checkRepeatTheName(name);
            this.loadResManager.secondaryLoadState.set(name, null);
            await this.factory.executeLoadBundle(name, type, url);
        }

        /**
         * 檢查重複命名
         * @param {string} name
         * @private
         */
        private checkRepeatTheName(name: string) {

            if (this.loadResManager.initialLoadState.has(name)) {
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `${name} 此(主資源)已載入過了,或名稱重複,請檢察`);
            }
            if (this.loadResManager.secondaryLoadState.has(name)) {
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `${name} 此(次資源)已載入過了,或名稱重複,請檢察`);
            }
        }

        /**
         * 加載外部腳本
         * @param {string} name
         * @param {LoadType} type
         * @param {string} url
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string) {
            this.factory.executeLoadExternalScript(name, type, url);
        }
    }
}