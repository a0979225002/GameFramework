import {FreeResultType} from '../WebResponse/Enum/FreeResultType'
import {ResultType} from '../WebResponse/Enum/ResultType'
import {TableInfoType} from '../WebResponse/Enum/TableInfoType'
import {AutoType, LanguageType} from "./Enum/ConfigEnum";

export interface UserBetPoint {
    LineBet: number
}

export interface IConfigManager {

    /**
     * 前往 {MainGame Scene} 的scene名稱
     * @type {string}
     * @private
     */
    mainScene: string;

    /**
     * 載入外部資源URL(只有開發模式中有效)
     * @type {string}
     * @private
     */
    externallyLoadURL: string;

    /**
     * 當前遊戲名稱
     * @type {number}
     * @private
     */
    gameNumber: number;

    /**
     * 是否在遊戲進入後開啟auto狀態
     * @type {boolean}
     * @private
     */
    isAuto: boolean;

    /**
     * 初始遊戲最初的auto次數
     * @type {AutoType}
     * @private
     */
    autoCount: number;

    /**
     * 初始開始遊戲前是否是加速狀態
     * @type {boolean}
     * @private
     */
    isSpeedUp: boolean;

    /**
     * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
     * @type {number}
     * @private
     */
    musicVolume: number;

    /**
     * 初始將背景音樂靜音
     * @type {boolean}
     * @private
     */
    isMusicOnMute: boolean;

    /**
     * 初始效果音量(該音量將會成為AudioManager內預設音量)
     * @type {number}
     * @private
     */
    effectVolume: number;

    /**
     * 初始將效果音效靜音
     * @type {boolean}
     * @private
     */
    isEffectOnMute: boolean;

    /**
     * 初始遊戲開始前的用戶押注倍率
     * @type {UserBetPoint}
     * @private
     */
    userBet: UserBetPoint;

    /**
     * 初始當前語系(只有開發模式中有效)
     * 注意:目前此方法失效
     * @type {LanguageType}
     * @private
     */
    language: LanguageType;

    /**
     * server回傳的TableInfoType類型,做綁定 model用
     * @type {TableInfoType}
     * @private
     */
    tableInfoType: TableInfoType;

    /**
     * server回傳的ResultType類型,做綁定 model用
     * @type {FreeResultType}
     * @private
     */
    resultType: ResultType;

    /**
     * server回傳的FreeResultType類型,做綁定 model用
     * @type {FreeResultType}
     * @private
     */
    freeResultType: FreeResultType;

    /**
     * 是否要開啟Framework Debug模式
     * 注意:遊戲正式上線須關閉
     * @type {boolean}
     * @private
     */
    isFrameworkDebug: boolean;

    /**
     * 添加MainScene 名稱
     * @param {string} name : mainScene 檔案名稱
     * @returns {this}
     */
    setMainScene(name: string): this;

    /**
     * 添加遊戲名稱
     * @param {number} name : 遊戲名稱
     * @returns {this}
     */
    setGameNumber(name: number): this;

    /**
     * 設置初始預設音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    setMusicVolume(number: number): this;

    /**
     * 設置初始預設效果音量
     * @param {number} number : 音量 0~1
     * @returns {this}
     */
    setEffectVolume(number: number): this;

    /**
     * 設置初始User倍率
     * @param {UserBetPoint | number} lineBet : 參數可以直接使用倍率的index or 給予 實例化的UserBetPoint Object
     * @returns {this}
     */
    setUserBet(lineBet: UserBetPoint | number): this;

    /**
     * 初始遊戲最初的auto次數
     * @param {AutoType} type
     * @returns {this}
     */
    setAutoCont(type: AutoType): this;

    /**
     * 初始要從外部拿取資源的URL
     * 注意:此URL為開發中生效
     * @param {string} url : 獲取外部資源的URL
     * @returns {this}
     */
    setExternallyLoadURL(url: string): this;

    /**
     * 貫穿整個遊戲,到destroy前遊戲語系
     * 注意:當前使用無效
     * @param {LanguageType} languageType : 語系
     * @returns {this}
     */
    setLanguage(languageType: LanguageType): this;

    /**
     * 初始進入遊戲時Auto狀態
     * @param {boolean} isAuto : 是否在遊戲進入後開啟auto狀態
     * @returns {this}
     */
    setAutoState(isAuto: boolean): this;

    /**
     * 是否在遊戲進入後是加速的狀態
     * @param {boolean} isSpeedUp
     * @returns {this}
     */
    setSpeedState(isSpeedUp: boolean): this;

    /**
     * 初始將背景音樂靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    setMusicOnMute(OnMute: boolean): this;

    /**
     * 初始是否將效果音效靜音
     * @param {boolean} OnMute : 是否靜音
     * @returns {this}
     */
    setEffectOnMute(OnMute: boolean): this;

    /**
     * server回傳的TableInfoType類型,做綁定 model用
     * @param {TableInfoType} tableInfoType
     * @returns {this}
     */
    setTableInfo(tableInfoType: TableInfoType);

    /**
     * server回傳的ResultType類型,做綁定 model用
     * @param {ResultType} resultType
     * @returns {this}
     */
    setBetResult(resultType: ResultType);

    /**
     * server回傳的FreeResultType類型,做綁定 model用
     * @param {FreeResultType} freeType
     * @returns {this}
     */
    setFreeResult(freeType: FreeResultType);

    /**
     * 是否要開啟Framework Debug模式
     * 注意:遊戲正式上線須關閉
     * @param {boolean} use
     * @returns {this}
     */
    setFrameWorkDebug(use: boolean): this;

    /**
     * 實例化所有Manager class;
     */
    builder();

}