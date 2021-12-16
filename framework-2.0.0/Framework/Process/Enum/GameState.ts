namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲當下狀態
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum GameStateType {

            /**
             * 無狀態,待機狀態...
             * @type {GameStateType.STANDBY}
             */
            STANDBY = 'STANDBY',

            /**
             * 一般狀態遊戲中....
             * @type {GameStateType.PLAYING}
             */
            PLAYING = 'PLAYING',

            /**
             * 贏分顯示中....
             * @type {fcc.type.GameStateType.WINING}
             */
            WINING = "WINING",

            /**
             * 免費遊戲中....
             * @type {GameStateType.FREEING}
             */
            FREEING = 'FREEING',

        }

        /**
         * @Author XIAO-LI-PIN
         * @Description 框架預設的流程
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum ProcessType {
            FREE = 'FREE',
            NORMAL = 'NORMAL',
        }
    }
}
