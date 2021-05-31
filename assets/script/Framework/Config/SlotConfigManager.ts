import AudioManager from '../Audio/AudioManager'
import ErrorManager from '../Error/ErrorManager'
import EventManager from '../Listener/EventManager'
import LoadResManager from '../LoadResources/LoadResManager'
import SlotGameManager from '../Process/SlotGameManager'
import SceneManager from '../Scene/SceneManager'
import SlotStyleManager from '../Slot/SlotStyleManager'
import WebRequestManager from '../WebRequest/WebRequestManager'
import {FreeResultType} from '../WebResponse/Enum/FreeResultType'
import {ResultType} from '../WebResponse/Enum/ResultType'
import {ResponseType} from '../WebResponse/Enum/ResponseType';
import {WebResponseManager} from '../WebResponse/WebResponseManager'
import {AutoType, LanguageType} from "./Enum/ConfigEnum";
import {ISlotConfigManager, UserBetPoint} from "./IConfig/ISlotConfigManager";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始設定,並透過builder加載所有Manager
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
export default class SlotConfigManager implements ISlotConfigManager {

    private static _instance: ISlotConfigManager;

    /**
     * 載入外部資源URL(只有開發模式中有效)
     * @type {string}
     * @private
     */
    private _externallyLoadURL: string;

    /**
     * 當前遊戲名稱
     * @type {number}
     * @private
     */
    private _gameNumber: number;

    /**
     * 是否在遊戲進入後開啟auto狀態
     * @type {boolean}
     * @private
     */
    private _isAuto: boolean;

    /**
     * 初始遊戲最初的auto次數
     * @type {AutoType}
     * @private
     */
    private _autoCount: AutoType;

    /**
     * 是否在遊戲進入後是加速的狀態
     * @type {boolean}
     * @private
     */
    private _isSpeedUp: boolean;

    /**
     * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
     * @type {number}
     * @private
     */
    private _musicVolume: number;

    /**
     * 初始將背景音樂靜音
     * @type {boolean}
     * @private
     */
    private _isMusicOnMute: boolean;

    /**
     * 初始效果音量(該音量將會成為AudioManager內預設音量)
     * @type {number}
     * @private
     */
    private _effectVolume: number;

    /**
     * 初始將效果音效靜音
     * @type {boolean}
     * @private
     */
    private _isEffectOnMute: boolean;

    /**
     * 初始遊戲開始前的用戶押注倍率
     * @type {UserBetPoint}
     * @private
     */
    private _userBet: UserBetPoint;

    /**
     * 初始當前語系(只有開發模式中有效)
     * 注意:目前此方法失效
     * @type {LanguageType}
     * @private
     */
    private _language: LanguageType;

    /**
     * server回傳的TableInfoType類型,做綁定 model用
     * @type {ResponseType}
     * @private
     */
    private _tableInfoType: ResponseType

    /**
     * server回傳的ResultType類型,做綁定 model用
     * @type {FreeResultType}
     * @private
     */
    private _resultType: ResultType

    /**
     * server回傳的FreeResultType類型,做綁定 model用
     * @type {FreeResultType}
     * @private
     */
    private _freeResultType: FreeResultType

    /**
     * 返回首頁URL
     */
    private _backHomeURL: string;

    /**
     * 是否要開啟Framework Debug模式
     * 注意:遊戲正式上線須關閉
     * @type {boolean}
     * @private
     */
    private _isFrameworkDebug: boolean;

    private constructor() {

        this._gameNumber = null;                                //該遊戲名稱
        this._externallyLoadURL = ""                            //預設測試使用
        this._isAuto = false;                                   //是否自動
        this._isSpeedUp = false;                                //是否加速
        this._autoCount = AutoType.auto;                        //初始自動狀態
        this._musicVolume = 1;                                  //遊戲音量
        this._effectVolume = 1;                                 //效果音量
        this._isMusicOnMute = false                             //是否打開背景音效
        this._isEffectOnMute = false                            //是否打開效果音校
        this._userBet = {LineBet: 0};                           //初始user倍率
        this._language = LanguageType.Chinese                   //初始當前語系,將依據該語系,載入所有耦合圖檔
        this._backHomeURL = undefined                           //初始返回首頁URL
        this._isFrameworkDebug = false;                         //是否要開啟框架的Debug模式

    }

    /**
     * 懶漢加載
     * 初始化,只讓一個專案只有一次產生此class
     * @returns {SlotConfigManager}
     */
    public static get instance(): ISlotConfigManager {
        if (!this._instance) {
            this._instance = new SlotConfigManager();
        }

        return this._instance;
    }

    /**
     * 添加遊戲名稱
     * @param {number} name : 遊戲名稱
     * @returns {this}
     */
    setGameNumber(name: number) {

        this._gameNumber = name;

        return this;
    }

    /**
     * 設置初始預設音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    setMusicVolume(number: number) {
        this._musicVolume = number

        return this;
    }

    /**
     * 設置初始預設效果音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    setEffectVolume(number: number) {
        this._effectVolume = number;
        return this;
    }

    /**
     * 設置初始User倍率
     * @param {UserBetPoint | number} lineBet : 參數可以直接使用倍率的index or 給予 實例化的UserBetPoint Object
     * @returns {this}
     */
    setUserBet(lineBet: UserBetPoint | number) {

        if (lineBet instanceof Object) {

            this._userBet = lineBet;

        } else {
            this._userBet = {
                LineBet: lineBet,
            };
        }
        return this;
    }

    /**
     * 初始遊戲最初的auto次數
     * @param {AutoType} type
     * @returns {this}
     */
    setAutoCont(type: AutoType) {
        this._autoCount = type;
        return this;
    }


    /**
     * 初始要從外部拿取資源的URL
     * 注意:此URL為開發中生效
     * @param {string} url : 獲取外部資源的URL
     * @returns {this}
     */
    setExternallyLoadURL(url: string): this {
        this._externallyLoadURL = url;
        return this;
    }

    /**
     * 貫穿整個遊戲,到destroy前遊戲語系
     * 注意:當前使用無效
     * @param {LanguageType} languageType : 語系
     * @returns {this}
     */
    setLanguage(languageType: LanguageType): this {

        this._language = languageType;
        return this;
    }

    /**
     * 初始進入遊戲時Auto狀態
     * @param {boolean} isAuto : 是否在遊戲進入後開啟auto狀態
     * @returns {this}
     */
    setAutoState(isAuto: boolean): this {
        this._isAuto = isAuto;
        return this;
    }

    /**
     * 是否在遊戲進入後是加速的狀態
     * @param {boolean} isSpeedUp
     * @returns {this}
     */
    setSpeedState(isSpeedUp: boolean): this {

        this._isSpeedUp = isSpeedUp;

        return this;
    }

    /**
     * 初始將背景音樂靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    setMusicOnMute(OnMute: boolean): this {

        this._isMusicOnMute = OnMute;

        return this;
    }

    /**
     * 初始是否將效果音效靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    public setEffectOnMute(OnMute: boolean): this {

        this._isEffectOnMute = OnMute;

        return this;
    }

    /**
     * server回傳的TableInfoType類型,做綁定 model用
     * @param {ResponseType} tableInfoType
     * @returns {this}
     */
    public setTableInfo(tableInfoType: ResponseType): this {
        this._tableInfoType = tableInfoType;
        return this
    }

    /**
     * server回傳的ResultType類型,做綁定 model用
     * @param {ResultType} resultType
     * @returns {this}
     */
    public setBetResult(resultType: ResultType): this {
        this._resultType = resultType;
        return this;
    }

    /**
     * server回傳的FreeResultType類型,做綁定 model用
     * @param {FreeResultType} freeType
     * @returns {this}
     */
    public setFreeResult(freeType: FreeResultType): this {
        this._freeResultType = freeType;
        return this
    }

    /**
     * 是否要開啟Framework Debug模式
     * 注意:遊戲正式上線須關閉
     * @param {boolean} use
     * @returns {this}
     */
    setFrameWorkDebug(use: boolean) {
        this._isFrameworkDebug = use;
        return this;
    }

    setBackHomeURL(url: string): this {
        this._backHomeURL = url;
        return this;
    }


    /**
     * 實例化所有Manager class;
     */
    public builder() {
        AudioManager.setInstance(this);
        ErrorManager.setInstance(this);
        EventManager.setInstance(this);
        LoadResManager.setInstance(this);
        SlotGameManager.setInstance(this);
        SceneManager.setInstance(this);
        SlotStyleManager.setInstance(this);
        WebResponseManager.setInstance(this);
        WebRequestManager.setInstance(this);
    }

// get -----------------------------------------------------------------

    get userBet(): UserBetPoint {

        return this._userBet;
    }

    get externallyLoadURL(): string {
        return this._externallyLoadURL;
    }

    get gameNumber(): number {
        return this._gameNumber;
    }

    get isAuto(): boolean {
        return this._isAuto;
    }

    get autoCount(): number {
        return this._autoCount;
    }

    get isSpeedUp(): boolean {
        return this._isSpeedUp;
    }

    get musicVolume(): number {
        return this._musicVolume;
    }

    get effectVolume(): number {
        return this._effectVolume;
    }

    get language(): LanguageType {
        return this._language;
    }

    get isFrameworkDebug(): boolean {
        return this._isFrameworkDebug;
    }

    get isEffectOnMute(): boolean {
        return this._isEffectOnMute
    }

    get isMusicOnMute(): boolean {
        return this._isMusicOnMute;
    }

    get tableInfoType(): ResponseType {
        return this._tableInfoType;
    }

    get freeResultType(): FreeResultType {
        return this._freeResultType;
    }

    get resultType(): ResultType {
        return this._resultType;
    }

    get backHomeURL(): string {
        return this._backHomeURL;
    }
}