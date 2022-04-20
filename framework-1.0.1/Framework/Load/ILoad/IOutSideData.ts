namespace fcc {

    export namespace IF {

        /**
         * @Author 蕭立品
         * @Description 外部讀取資訊
         * @Date 2022-04-19 下午 04:34
         * @Version 1.0
         */
        export interface IOutSideData {

            /**
             * 自訂義名稱
             */
            name: string,

            /**
             * bundle名稱
             */
            bundleName: string,

            /**
             * Bundle URL 資源位置
             */
            bundleURL: string,

            /**
             * 載入資源類型
             */
            loadType: type.LoadType,

            /**
             * 當前是否為有語系的加載
             */
            isLanguageUsed: boolean,

            /**
             * 資源位置
             */
            url: string,

            /**
             * 版本資訊
             */
            version: string,

            /**
             * 資源類型
             */
            assetMode: fcc.type.ASSET_MODE,
        }
    }
}
