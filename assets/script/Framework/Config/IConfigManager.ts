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
     * server回傳的ResultType類型,做綁定 model用
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
     * @param name
     */
    setMainScene(name: string): this;

    /**
     * 添加遊戲名稱
     * @param name
     */
    setGameNumber(name: number): this;

    /**
     * 設置初始默認音量
     * @param number
     */
    setMusicVolume(number: number): this;

    /**
     * 設置初始默認效果音量
     * @param number
     */
    setEffectVolume(number: number): this;

    /**
     * 設置初始User倍率
     * @param lineBet Object | number
     */
    setUserBet(lineBet: object | number): this;

    /**
     * 開始Debug模式
     * @param use
     */
    setFrameWorkDebug(use: boolean): this;

    /**
     * 添加Auto狀態
     * @param type
     */
    setAutoCont(type: AutoType): this;

    /**
     * 初始要從外部拿取資源的URL
     * @param url
     */
    setExternallyLoadURL(url: string): this;

    /**
     * 貫穿整個遊戲,到destroy前遊戲語系(test 使用,正式上線,會拿取 webResponse 資源)
     * @param languageType
     */
    setLanguage(languageType: LanguageType): this;

    /**
     * 自定義,遊戲初始背景音量
     * @param volume
     */
    setMusicVolume(volume: number): this;

    /**
     * 自定義,遊戲初始效果音量
     * @param volume
     */
    setEffectVolume(volume: number): this;

    /**
     * 初始當前遊戲Auto狀態
     * @param isAuto
     */
    setAutoState(isAuto: boolean): this;

    /**
     * 初始當前加速狀態
     * @param isSpeedUp
     */
    setSpeedState(isSpeedUp: boolean): this;

    /**
     * 初始是否打開背景音樂
     * @return {this}
     * @param OnMute
     */
    setMusicOnMute(OnMute: boolean): this;

    /**
     * 初始是否打開效果音樂
     * @return {this}
     * @param OnMute
     */
    setEffectOnMute(OnMute: boolean): this;

    /**
     * server回傳的TableInfoType類型,做綁定 model用
     * @param {TableInfoType} tableInfoType
     */
    setTableInfo(tableInfoType: TableInfoType);

    /**
     *  server回傳的FreeResult類型,做綁定 model用
     * @param {FreeResultType} freeType
     */
    setFreeResult(freeType: FreeResultType);

    /**
     *  server回傳的ResultType類型,做綁定 model用
     * @param {ResultType} resultType
     */
    setBetResult(resultType: ResultType);

    /**
     * 初始所有manager();
     */
    builder();

}