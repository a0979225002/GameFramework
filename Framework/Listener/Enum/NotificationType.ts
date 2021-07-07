namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 推播事件
         * @Date 2021-06-10 下午 04:59
         * @Version 1.0
         */
        export enum NotificationType {

            /**
             * 自動狀態改變時
             * @type {fcc.type.NotificationType.AUTO_CHANGE}
             */
            AUTO_CHANGE = "AUTO_CHANGE",

            /**
             * 當前遊戲速度狀態改變時
             * @type {fcc.type.NotificationType.SPEED_CHANGE}
             */
            SPEED_CHANGE = "SPEED_CHANGE",

            /**
             * 用戶金額變更時
             * @type {fcc.type.NotificationType.USER_MONEY_CHANGE}
             */
            USER_MONEY_CHANGE = "USER_MONEY_CHANGE",

            /**
             * 用戶更換的押住金額時
             * @type {fcc.type.NotificationType.USER_BET_CHANGE}
             */
            USER_BET_CHANGE = "USER_BET_CHANGE",

            /**
             * 用戶贏分時
             * @type {fcc.type.NotificationType.USER_GET_WIN}
             */
            USER_GET_WIN = "USER_GET_WIN",

            /**
             * 用戶改變mobile方向時
             * @type {fcc.type.NotificationType.SCENE_DIRECTION_CHANGE}
             */
            SCENE_DIRECTION_CHANGE = "SCENE_DIRECTION_CHANGE",

            /**
             * server 回傳結果時
             * @type {fcc.type.NotificationType.RESPONSE_RESULT}
             */
            RESPONSE_RESULT = "RESPONSE_RESULT",

            /**
             * 瞇排事件時
             * @type {fcc.type.NotificationType.SCROLL_FOCUS_STATE}
             */
            SCROLL_FOCUS_STATE = "SCROLL_FOCUS_STATE",

            /**
             * 即停事件
             */
            STOP_NOW = "STOP_NOW",
        }
    }
}