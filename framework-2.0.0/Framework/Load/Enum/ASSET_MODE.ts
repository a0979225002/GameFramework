namespace fcc {

    export namespace type {

        /**
         * @Author 蕭立品
         * @Description 加載類型
         * @Date 2022-04-19 下午 03:39
         * @Version 1.0
         */
        export enum ASSET_MODE {

            /**
             * 主資源
             * @type {ASSET_MODE.RESOURCES}
             */
            RESOURCES,

            /**
             * 內部Bundle資源
             * @type {ASSET_MODE.IN_SIDE_BUNDLE}
             */
            IN_SIDE_BUNDLE,

            /**
             * 外部資源,主要加載
             * @type {ASSET_MODE.OUT_SIDE_ASSET}
             */
            OUT_SIDE_MAIN_ASSET,

            /**
             * 外部資源
             * @type {ASSET_MODE.OUT_SIDE_ASSET}
             */
            OUT_SIDE_ASSET,
        }
    }
}
