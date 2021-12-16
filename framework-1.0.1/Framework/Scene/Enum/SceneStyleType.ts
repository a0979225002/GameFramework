namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲場景樣式
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum SceneStyleType {

            /**
             * 自動模式,將會配合玩家自動切換直式或橫式
             * @type {SceneStyleType.AUTO}
             */
            AUTO = 'AUTO',

            /**
             * 橫式樣式
             * @type {SceneStyleType.HORIZONTAL}
             */
            HORIZONTAL = 'HORIZONTAL',

            /**
             * 直式樣式
             * @type {SceneStyleType.VERTICAL}
             */
            VERTICAL = 'VERTICAL'

        }
    }
}