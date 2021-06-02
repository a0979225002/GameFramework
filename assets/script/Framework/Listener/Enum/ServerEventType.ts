export enum ServerEventType {
    /**
     *  一般獲獎回傳
     */
    BET_RESULT = "BET_RESULT",

    /**
     * 免費模式獲獎
     */
    FREE_SPIN_RESULT = "FREE_SPIN_RESULT",

    /**
     * 底層進遊戲 通知Loading頁面 可以顯示主遊戲場景
     */
    CAN_PLAY_GAME = "CAN_PLAY_GAME",

    /**
     * 獲取遊戲歷史結果
     */
    GET_GAME_HISTORY_RESULT = "GET_GAME_HISTORY_RESULT",

    /**
     * 獲取遊戲祥單
     */
    GET_HISTORY_DETAIL_RESULT = "GET_HISTORY_DETAIL_RESULT",

    /**
     * 該局遊戲序號
     */
    GROUP_ID = "GROUP_ID",

    /**
     * 進入遊戲後初始資訊
     */
    TABLE_INFO = "TABLE_INFO",

    /**
     * 各種錯誤訊息
     */
    WARNING = "WARNING",
}