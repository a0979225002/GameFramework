export enum ErrorType {

    server,
    warning,
    bet,
    unknown,
    TypeFW = "傳入的Type 錯誤 ,請檢察該Type是否非FarmWork內的Type",
    IsRunningFW = "遊戲正在執行中,請勿重複呼叫",
    UndefinedFW = "變數為undefined,流程無法繼續",
    LoadErrorFW = "加載的資源有問題",
    AnimationErrorFW = "Animation 類中方法有錯誤 : ",
    WebRequestErrorFW = "WebRequest 類有錯誤 : ",
    WebResponseErrorFW = "WebResponse 類有錯誤 : ",
    PrefabFW = "Prefab 類有錯誤 :",
    MusicFW = "Music 類有錯誤 :",
    SceneFW = "Scene 類有錯誤 :",
    ProcedureFW = "Procedure 類有錯誤 :",
    ListenerFW = "Event 類有錯誤 :",
    GameProcessFW = "GameProcess類有錯誤 : ",
    SlotStyleFW = "SlotStyleFW類有錯誤 : ",

}