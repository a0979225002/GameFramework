namespace fcc {

    export namespace type {

        /**
         * @Author XIAO-LI-PIN
         * @Description 各種錯誤類型
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export enum ErrorType {
            TYPE_FW = "傳入的Type 錯誤 ,請檢察該Type是否非FarmWork內的Type",
            IS_RUNNING_FW = "遊戲正在執行中,請勿重複呼叫",
            UNDEFINED_FW = "變數為undefined,流程無法繼續",
            LOAD_FW = "加載的資源有問題",
            ANIMATION_FW = "Animation 類中方法有錯誤 : ",
            WEB_REQUEST_FW = "WebRequest 類有錯誤 : ",
            WEB_RESPONSE_FW = "WebResponse 類有錯誤 : ",
            PREFAB_FW = "Prefab 類有錯誤 :",
            AUDIO_FW = "AUDIO 類有錯誤 :",
            SCENE_FW = "Scene 類有錯誤 :",
            PROCESS_FW = "process 類有錯誤 :",
            LISTENER_FW = "Event 類有錯誤 :",
            SlotStyleFW = "SlotStyleFW類有錯誤 : ",
        }
    }
}