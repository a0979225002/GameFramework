/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-17 上午 11:41
 * @Version 1.0
 */
import {FreeResultType} from "../../WebResponse/Enum/FreeResultType";
import {ResultType} from "../../WebResponse/Enum/ResultType";
import {TableInfoType} from "../../WebResponse/Enum/TableInfoType";
import {AutoType} from "../Enum/ConfigEnum";
import {IConfigManager} from "./IConfigManager";

export interface UserBetPoint {
    LineBet: number
}

export interface ISlotConfigManager extends IConfigManager {

    /**
     * 前往 {MainGame Scene} 的scene名稱
     * @type {string}
     * @private
     */
    mainScene: string;

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
     * 初始遊戲開始前的用戶押注倍率
     * @type {UserBetPoint}
     * @private
     */
    userBet: UserBetPoint;

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
     * 添加MainScene 名稱
     * @param {string} name : mainScene 檔案名稱
     * @returns {this}
     */
    setMainScene(name: string): this;

    /**
     * 初始遊戲最初的auto次數
     * @param {AutoType} type
     * @returns {this}
     */
    setAutoCont(type: AutoType): this;

    /**
     * 設置初始User倍率
     * @param {UserBetPoint | number} lineBet : 參數可以直接使用倍率的index or 給予 實例化的UserBetPoint Object
     * @returns {this}
     */
    setUserBet(lineBet: UserBetPoint | number): this;


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
}