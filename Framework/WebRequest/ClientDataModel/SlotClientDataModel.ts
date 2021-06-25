import {ISlotClientDataModel} from "./IModel/ISlotClientDataModel";
import {LanguageType} from "../../Config/Enum/LanguageType";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-07 上午 11:08
 * @Version 1.0
 */
export default class SlotClientDataModel implements ISlotClientDataModel {

    /**
     * sever URL
     * @type {string}
     * @private
     */
    private _serverHost: string;

    /**
     * server Port
     * @type {number}
     * @private
     */
    private _serverPort: number;

    /**
     * 帳號
     * @type {string}
     * @private
     */
    private _account: string;

    /**
     * 密碼
     * @type {string}
     * @private
     */
    private _password: string;

    /**
     * 0:註冊 1:登入 2:遊客 3:測試人員記錄測試
     * @type {number}
     * @private
     */
    private _loginState: number;

    /**
     * server房間
     * @type {string}
     * @private
     */
    private _whereRoom: string;

    /**
     * 環境:H5Demo(試玩),H5Game(正式)
     * @type {string}
     * @private
     */
    private _serverZone: string;

    /**
     * Index.php 設定 : TODO
     * @type {string}
     * @private
     */
    private _userCode: string;

    /**
     * Index.php 設定 : TODO
     * @type {string}
     * @private
     */
    private _userChannelID: string;

    /**
     * Index.php 設定 : TODO
     * @type {string}
     * @private
     */
    private _userGameID: string;

    /**
     * 玩家Token
     * @type {string}
     * @private
     */
    private _userToken: string;

    /**
     * Index.php 設定 : 語系
     * @type {string}
     * @private
     */
    private _userLang: string;

    /**
     * Index.php 設定 : TODO
     * @type {string}
     * @private
     */
    private _userGameMaker: string;

    /**
     * Index.php 設定 : 返回頁面URL
     * @type {string}
     * @private
     */
    private _backHomeURL: string;

    /**
     * 初始加載遊戲語系:路徑
     * @type {string}
     * @private
     */
    private _loadLanguageDefaultURL: string;

    /**
     * 二次加載主遊戲語系:路徑
     * @type {string}
     * @private
     */
    private _loadLanguageURL: string;

    /**
     * Index.php 設定 : 當前語系
     * @type {LanguageType}
     * @private
     */
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
        this._userLanguage = LanguageType.CHINESE;
        Object.preventExtensions(this);
    }

    /**
     * 測試使用 : sever URL
     * @Test : 210.241.243.206
     * @param {string} serverHost
     * @returns {this}
     */
    setServerHost(serverHost: string): this {
        this._serverHost = serverHost;
        return this;
    }

    /**
     * 測試使用 : server Port
     * @Test : 8080
     * @param {number} serverPort
     * @returns {this}
     */
    setServerPort(serverPort: number): this {
        this._serverPort = serverPort;
        return this;
    }

    /**
     * 測試使用 : 測試帳號 "ppg015~020”
     * @Test : ""
     * @param {string} account
     * @returns {this}
     */
    setAccount(account: string): this {
        this._account = account;
        return this;
    }

    /**
     * 測試使用 : 測試密碼 “123456”
     * @Test : ""
     * @param {string} password
     * @returns {this}
     */
    setPassword(password: string): this {
        this._password = password;
        return this;
    }

    /**
     * 測試使用 : 0:註冊 1:登入 2:遊客 3:測試人員記錄測試
     * @Test : 2
     * @param {number} loginState
     * @returns {this}
     */
    setLoginState(loginState: number): this {
        this._loginState = loginState;
        return this;
    }

    /**
     * 測試使用 : server房間
     * @Test : "lobby"
     * @param {string} whereRoom
     * @returns {this}
     */
    setWhereRoom(whereRoom: string): this {
        this._whereRoom = whereRoom;
        return this;
    }

    /**
     * 測試使用 : 環境:H5Demo(試玩),H5Game(正式)
     * @Test : "H5Game"
     * @param {string} serverZone
     * @returns {this}
     */
    setServerZone(serverZone: string): this {
        this._serverZone = serverZone;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @Test : ""
     * @param {string} userCode
     * @returns {this}
     */
    setUserCode(userCode: string): this {
        this._userCode = userCode;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @Test : ""
     * @param {string} userChannelID
     * @returns {this}
     */
    setUserChannelID(userChannelID: string): this {
        this._userChannelID = userChannelID;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @Test : ""
     * @param {string} userGameID
     * @returns {this}
     */
    setUserGameID(userGameID: string): this {
        this._userGameID = userGameID;
        return this;
    }

    /**
     * 測試使用 : 玩家Token
     * @Test : ""
     * @param {string} userToken
     * @returns {this}
     */
    setUserToken(userToken: string): this {
        this._userToken = userToken;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : 語系
     * @Test : ""
     * @param {string} userLang
     * @returns {this}
     */
    setUserLang(userLang: string): this {
        this._userLang = userLang;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @Test : ""
     * @param {string} userGameMaker
     * @returns {this}
     */
    setUserGameMaker(userGameMaker: string): this {
        this._userGameMaker = userGameMaker;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : 返回頁面URL
     * @Test : ""
     * @param {string} backHomeURL
     * @returns {this}
     */
    setBackHomeURL(backHomeURL: string): this {
        this._backHomeURL = backHomeURL;
        return this;
    }

    /**
     * 測試使用 : 初始加載遊戲語系:路徑
     * @Test : ""
     * @param {string} loadLanguageDefaultURL
     * @returns {this}
     */
    setLoadLanguageDefaultURL(loadLanguageDefaultURL: string): this {
        this._loadLanguageDefaultURL = loadLanguageDefaultURL;
        return this;
    }

    /**
     * 測試使用 : 二次加載主遊戲語系:路徑
     * @Test : ""
     * @param {string} loadLanguageURL
     * @returns {this}
     */
    setLoadLanguageURL(loadLanguageURL: string): this {
        this._loadLanguageURL = loadLanguageURL;
        return this;
    }

    /**
     * 測試使用 : Index.php 設定 : 當前語系
     * @Test : "LanguageType.Chinese"
     * @param {LanguageType} userLanguage
     * @returns {this}
     */
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