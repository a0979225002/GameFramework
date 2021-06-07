import {LanguageType} from "../../Config/Enum/ConfigEnum";
import {ISlotClientDataModel} from "./IModel/ISlotClientDataModel";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-07 上午 11:08
 * @Version 1.0
 */
export default class SlotClientDataModel implements ISlotClientDataModel {

    private _serverHost: string;
    private _serverPort: number;
    private _account: string;
    private _password: string;
    private _loginState: number;
    private _whereRoom: string;
    private _serverZone: string;
    private _userCode: string;
    private _userChannelID: string;
    private _userGameID: string;
    private _userToken: string;
    private _userLang: string;
    private _userGameMaker: string;
    private _backHomeURL: string;
    private _loadLanguageDefaultURL: string;
    private _loadLanguageURL: string;
    private _userLanguage: LanguageType;

    constructor() {
        this._serverHost = "210.241.243.206";
        this._serverPort = 8080;
        this._account = "";
        this._password = "";
        this._loginState = 2;
        this._whereRoom = "lobby";
        this._serverZone = "H5Game";
        this._userCode = "";
        this._userChannelID = "";
        this._userGameID = "";
        this._userToken = "";
        this._userLang = "";
        this._userGameMaker = "";
        this._backHomeURL = "";
        this._loadLanguageDefaultURL = "";
        this._loadLanguageURL = "";
        this._userLanguage = LanguageType.Chinese;
        Object.preventExtensions(this);
    }

    /**
     * 測試使用 : sever URL
     * @default : 210.241.243.206;
     * @param {string} serverHost
     * @returns {this}
     */
    setServerHost(serverHost: string): this {
        this._serverHost = serverHost;
        return this;
    }

    setServerPort(serverPort: number): this {
        this._serverPort = serverPort;
        return this;
    }

    setAccount(account: string): this {
        this._account = account;
        return this;
    }

    setPassword(password: string): this {
        this._password = password;
        return this;
    }

    setLoginState(loginState: number): this {
        this._loginState = loginState;
        return this;
    }

    setWhereRoom(whereRoom: string): this {
        this._whereRoom = whereRoom;
        return this;
    }

    setServerZone(serverZone: string): this {
        this._serverZone = serverZone;
        return this;
    }

    setUserCode(userCode: string): this {
        this._userCode = userCode;
        return this;
    }

    setUserChannelID(userChannelID: string): this {
        this._userChannelID = userChannelID;
        return this;
    }

    setUserGameID(userGameID: string): this {
        this._userGameID = userGameID;
        return this;
    }

    setUserToken(userToken: string): this {
        this._userToken = userToken;
        return this;
    }

    setUserLang(userLang: string): this {
        this._userLang = userLang;
        return this;
    }

    setUserGameMaker(userGameMaker: string): this {
        this._userGameMaker = userGameMaker;
        return this;
    }

    setBackHomeURL(backHomeURL: string): this {
        this._backHomeURL = backHomeURL;
        return this;
    }

    setLoadLanguageDefaultURL(loadLanguageDefaultURL: string): this {
        this._loadLanguageDefaultURL = loadLanguageDefaultURL;
        return this;
    }

    setLoadLanguageURL(loadLanguageURL: string): this {
        this._loadLanguageURL = loadLanguageURL;
        return this;
    }

    setUserLanguage(userLanguage: LanguageType): this {
        this._userLanguage = userLanguage;
        return this;
    }

    get serverHost(): string {
        return this._serverHost;
    }

    get serverPort(): number {
        return this._serverPort;
    }

    get account(): string {
        return this._account;
    }

    get password(): string {
        return this._password;
    }

    get loginState(): number {
        return this._loginState;
    }

    get whereRoom(): string {
        return this._whereRoom;
    }

    get serverZone(): string {
        return this._serverZone;
    }

    get userCode(): string {
        return this._userCode;
    }

    get userChannelID(): string {
        return this._userChannelID;
    }

    get userGameID(): string {
        return this._userGameID;
    }

    get userToken(): string {
        return this._userToken;
    }

    get userLang(): string {
        return this._userLang;
    }

    get userGameMaker(): string {
        return this._userGameMaker;
    }

    get backHomeURL(): string {
        return this._backHomeURL;
    }

    get loadLanguageDefaultURL(): string {
        return this._loadLanguageDefaultURL;
    }

    get loadLanguageURL(): string {
        return this._loadLanguageURL;
    }

    get userLanguage(): LanguageType {
        return this._userLanguage;
    }
}