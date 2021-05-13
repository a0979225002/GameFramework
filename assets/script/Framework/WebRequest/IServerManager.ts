interface IServerManager {

    serverHost: string,                //serverIP 210.241.243.206
    serverPort: number,                //"8080"
    account: string,                   //ppg015~020
    password: string,                  //123456
    CocosDebug: boolean,
    CocosDebug2: number,
    LoginState: string,                // 0註冊 1登入 2遊客 3 測試人員記錄測試
    whereRoom: string,                 //房間名稱
    serverZone: string,                //server的樓
    userCode: string,
    userChannel_Id: string,
    userGame_id: string,
    userToken: string,
    userLang: string,
    userGameMaker: string,
    backHomeURL: string,
    loadLanguageDefaultURL: string,
    loadLanguage: string,
    loadLanguageCount: string,
    LoginData: string,
    UserLanguage: string,
    WarningText: string
    Ratio: number,
    serverGameGroupID: string,

}