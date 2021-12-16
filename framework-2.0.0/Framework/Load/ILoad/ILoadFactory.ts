/// <reference path="../Enum/LoadType.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 載入各類資源工廠
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface ILoadFactory {

            /**
             * 檢測當前Type,做各自對應的加載動作
             * @param name
             * @param type
             * @param url
             */
            executeLoad(name: string, type: type.LoadType, url: string): void;


            /**
             * 執行Bundle載入動作
             * @param name
             * @param type
             * @param url
             */
            executeLoadBundle(name: string, type: type.LoadType, url: string): void;

            /**
             * 加載外部腳本
             * @param name - 檔案名稱,不含副檔名
             * @param type - 檔案類型
             * @param url - 檔案url,不含外部 url
             * @param parameter - get 參數
             */
            executeLoadExternalScript(name: string, type: type.LoadType, url: string,parameter:string): void;
        }
    }
}
