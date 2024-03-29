namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 各種類型資源
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum LoadType {

            /**
             * 單一圖片
             */
            /**
             * 圖輯類型
             * @type {fcc.type.LoadType.IMG}
             */
            IMG = "IMG",

            /**
             * 圖輯類型
             * @type {fcc.type.LoadType.IMG_ATLAS}
             */
            IMG_ATLAS = "IMG_ATLAS",

            /**
             * 骨骼动画類型
             * @type {fcc.type.LoadType.SPINE}
             */
            SPINE = "SPINE",

            /**
             * 預載資源類型
             * @type {fcc.type.LoadType.PREFAB}
             */
            PREFAB = "PREFAB",

            /**
             * 音樂類型
             * @type {fcc.type.LoadType.MUSIC}
             */
            MUSIC = "MUSIC",

            /**
             * 文字類型(注意:目前只接收 .CSV 檔案)
             * @type {fcc.type.LoadType.TEXT}
             */
            TEXT = "TEXT",

            /**
             * 場景類型(注意:動態載入資源需放入resource資料夾內 or bundle資料夾內)
             * @type {fcc.type.LoadType.SCENE}
             */
            SCENE = "SCENE",

            /**
             * 外部URL腳本
             * @type {fcc.type.LoadType.SCRIPT}
             */
            SCRIPT = "SCRIPT",

            /**
             * 外部URL CSS
             * @type {fcc.type.LoadType.SCRIPT}
             */
            CSS = "CSS",
        }
    }
}
