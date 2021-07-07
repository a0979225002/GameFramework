export enum ErrorType {

    /**
     * 參數錯誤
     * @type {ErrorType.TYPE_FW}
     */
    TYPE_FW = "傳入的Type 錯誤 ,請檢察該Type是否非FarmWork內的Type",

    /**
     * 執行流程錯誤
     * @type {ErrorType.IS_RUNNING_FW}
     */
    IS_RUNNING_FW = "遊戲正在執行中,請勿重複呼叫",

    /**
     * 空變數錯誤
     * @type {ErrorType.UNDEFINED_FW}
     */
    UNDEFINED_FW = "變數為undefined,流程無法繼續",

    /**
     * 加載資源類有錯誤
     * @type {ErrorType.LOAD_FW}
     */
    LOAD_FW = "加載的資源有問題",

    /**
     * 動畫類有錯誤
     * @type {ErrorType.ANIMATION_FW}
     */
    ANIMATION_FW = "Animation 類中方法有錯誤 : ",

    /**
     * server 請求錯誤
     * @type {ErrorType.WEB_REQUEST_FW}
     */
    WEB_REQUEST_FW = "WebRequest 類有錯誤 : ",

    /**
     * server 響應錯誤
     * @type {ErrorType.WEB_RESPONESE_FW}
     */
    WEB_RESPONESE_FW = "WebResponse 類有錯誤 : ",

    /**
     * 音樂類錯誤
     * @type {ErrorType.AUDIO_FW}
     */
    AUDIO_FW = "AUDIO 類有錯誤 :",

    /**
     * 場景類錯誤
     * @type {ErrorType.SCENE_FW}
     */
    SCENE_FW = "Scene 類有錯誤 :",

    /**
     * 流程類錯誤
     * @type {ErrorType.PROCESS_FW}
     */
    PROCESS_FW = "process 類有錯誤 :",

    /**
     * 監聽事件類有錯誤
     * @type {ErrorType.LISTENER_FW}
     */
    LISTENER_FW = "Event 類有錯誤 :",

    /**
     * 老虎機樣式類有錯誤
     * @type {ErrorType.SLOT_STYLE_FW}
     */
    SLOT_STYLE_FW = "SlotStyleFW類有錯誤 :",
}