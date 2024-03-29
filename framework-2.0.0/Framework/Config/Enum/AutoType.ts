namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲自動狀態種類
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum AutoType {
            /**
             * 無限AUTO
             * @type {AutoType.AUTO}
             */
            AUTO = -1,

            /**
             * 直到Free出現後,結束AUTO狀態
             * @type {AutoType.AUTO}
             */
            FREE_END = -2,

            /**
             * AUTO 50次
             * @type {AutoType.AUTO_50}
             */
            AUTO_50 = 50,

            /**
             * AUTO 100次
             * @type {AutoType.AUTO_100}
             */
            AUTO_100 = 100,

            /**
             * AUTO 500次
             * @type {AutoType.AUTO_100}
             */
            AUTO_500 = 500,

            /**
             * AUTO 1000次
             * @type {AutoType.AUTO_1000}
             */
            AUTO_1000 = 1000
        }
    }
}