import {IConfigManager} from "../Config/IConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";

export default class WebRequestManager implements IWebRequestManager {

    private static _instance: IWebRequestManager;
    private configManager: IConfigManager;
    private _CocosDebug: boolean;
    private _CocosDebug2: number;
    private _LoginData: string;
    private _LoginState: string;
    private _Ratio: number;
    private _UserLanguage: string;
    private _WarningText: string;
    private _account: string;
    private _backHomeURL: string;
    private _loadLanguage: string;
    private _loadLanguageCount: string;
    private _loadLanguageDefaultURL: string;
    private _password: string;
    private _serverGameGroupID: string;
    private _serverHost: string;
    private _serverPort: number;
    private _serverZone: string;
    private _userChannel_Id: string;
    private _userCode: string;
    private _userGameMaker: string;
    private _userGame_id: string;
    private _userLang: string;
    private _userToken: string;
    private _whereRoom: string;


    constructor(configManager: IConfigManager) {

        // this.serverHost = "10.10.0.48";
        // this.CocosDebug = ;
        // this.CocosDebug2 = CocosDebug2;
        // this.LoginData = LoginData;
        // this.LoginState = LoginState;
        // this.Ratio = Ratio;
        // this.UserLanguage = UserLanguage;
        // this.WarningText = WarningText;
        // this.account = account;
        // this.backHomeURL = backHomeURL;
        // this.loadLanguage = loadLanguage;
        // this.loadLanguageCount = loadLanguageCount;
        // this.loadLanguageDefaultURL = loadLanguageDefaultURL;
        // this.password = password;
        // this.serverGameGroupID = serverGameGroupID;
        // this.serverPort = serverPort;
        // this.serverZone = serverZone;
        // this.userChannel_Id = userChannel_Id;
        // this.userCode = userCode;
        // this.userGameMaker = userGameMaker;
        // this.userGame_id = userGame_id;
        // this.userLang = userLang;
        // this.userToken = userToken;
        // this.whereRoom = whereRoom;
    }

    //單例
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new WebRequestManager(configManager);
        }
    }

    /**
     * 單例模式,一個遊戲開始到結束,只有一個ServerManager
     */
    public static get instance(): IWebRequestManager {

        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.WebRequestErrorFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }


    get CocosDebug(): boolean {
        return this._CocosDebug
    }

    set CocosDebug(value: boolean) {
        this._CocosDebug = value
    }

    get CocosDebug2(): number {
        return this._CocosDebug2
    }

    set CocosDebug2(value: number) {
        this._CocosDebug2 = value
    }

    get LoginData(): string {
        return this._LoginData
    }

    set LoginData(value: string) {
        this._LoginData = value
    }

    get LoginState(): string {
        return this._LoginState
    }

    set LoginState(value: string) {
        this._LoginState = value
    }

    get Ratio(): number {
        return this._Ratio
    }

    set Ratio(value: number) {
        this._Ratio = value
    }

    get UserLanguage(): string {
        return this._UserLanguage
    }

    set UserLanguage(value: string) {
        this._UserLanguage = value
    }

    get WarningText(): string {
        return this._WarningText
    }

    set WarningText(value: string) {
        this._WarningText = value
    }

    get account(): string {
        return this._account
    }

    set account(value: string) {
        this._account = value
    }

    get backHomeURL(): string {
        return this._backHomeURL
    }

    set backHomeURL(value: string) {
        this._backHomeURL = value
    }

    get loadLanguage(): string {
        return this._loadLanguage
    }

    set loadLanguage(value: string) {
        this._loadLanguage = value
    }

    get loadLanguageCount(): string {
        return this._loadLanguageCount
    }

    set loadLanguageCount(value: string) {
        this._loadLanguageCount = value
    }

    get loadLanguageDefaultURL(): string {
        return this._loadLanguageDefaultURL
    }

    set loadLanguageDefaultURL(value: string) {
        this._loadLanguageDefaultURL = value
    }

    get password(): string {
        return this._password
    }

    set password(value: string) {
        this._password = value
    }

    get serverGameGroupID(): string {
        return this._serverGameGroupID
    }

    set serverGameGroupID(value: string) {
        this._serverGameGroupID = value
    }

    get serverHost(): string {
        return this._serverHost
    }

    set serverHost(value: string) {
        this._serverHost = value
    }

    get serverPort(): number {
        return this._serverPort
    }

    set serverPort(value: number) {
        this._serverPort = value
    }

    get serverZone(): string {
        return this._serverZone
    }

    set serverZone(value: string) {
        this._serverZone = value
    }

    get userChannel_Id(): string {
        return this._userChannel_Id
    }

    set userChannel_Id(value: string) {
        this._userChannel_Id = value
    }

    get userCode(): string {
        return this._userCode
    }

    set userCode(value: string) {
        this._userCode = value
    }

    get userGameMaker(): string {
        return this._userGameMaker
    }

    set userGameMaker(value: string) {
        this._userGameMaker = value
    }

    get userGame_id(): string {
        return this._userGame_id
    }

    set userGame_id(value: string) {
        this._userGame_id = value
    }

    get userLang(): string {
        return this._userLang
    }

    set userLang(value: string) {
        this._userLang = value
    }

    get userToken(): string {
        return this._userToken
    }

    set userToken(value: string) {
        this._userToken = value
    }

    get whereRoom(): string {
        return this._whereRoom
    }

    set whereRoom(value: string) {
        this._whereRoom = value
    }
}