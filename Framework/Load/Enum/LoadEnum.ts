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
             * 圖片類型
             * @type {fcc.type.LoadType.img}
             */
            img,

            /**
             * 骨骼动画類型
             * @type {fcc.type.LoadType.spine}
             */
            spine,

            /**
             * 預載資源類型
             * @type {fcc.type.LoadType.prefab}
             */
            prefab,

            /**
             * 音樂類型
             * @type {fcc.type.LoadType.music}
             */
            music,

            /**
             * 文字類型(注意:目前只接收 .CSV 檔案)
             * @type {fcc.type.LoadType.text}
             */
            text,

            /**
             * 場景類型(注意:動態載入資源需放入resource資料夾內 or bundle資料夾內)
             * @type {fcc.type.LoadType.scene}
             */
            scene,

            /**
             * 外部URL腳本
             * @type {fcc.type.LoadType.script}
             */
            script,

            /**
             * 外部URL CSS
             * @type {fcc.type.LoadType.script}
             */
            css,
        }
    }
}