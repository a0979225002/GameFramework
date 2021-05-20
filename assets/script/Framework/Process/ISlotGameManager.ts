import {AutoType} from '../Config/Enum/ConfigEnum'
import {UserBetPoint} from "../Config/IConfig/ISlotConfigManager";
import {GameState, GameType} from "./Enum/GameState";

/**
 * @Author XIAO-LI-PIN
 * @Description (介面)遊戲管理器,管理當前流程,遊戲當前狀態
 * @Date 2021-05-14 下午 03:44
 * @Version 1.1
 */
export default interface ISlotGameManager {

    /**
     * 當前遊戲狀態
     */
    gameState: GameState;

    /**
     * 當前自動模式
     */
    autoType: AutoType;

    /**
     * 當前自動狀態
     */
    isAutoState: boolean;

    /**
     * 當前加速狀態
     */
    isSpeedUp: boolean;

    /**
     * 當前自動剩餘次數
     */
    automaticRemainingCount: number;

    /**
     * 當前玩家金額
     */
    userMoney: number;

    /**
     * 當前押注資訊,回傳server資訊
     */
    userBetPoint: UserBetPoint;

    /**
     * 是否Server有回傳
     */
    isResultOk: boolean;

    /**
     * 執行設定好的流程
     */
    play(): Promise<void>;

    /**
     * 設定流程
     * @param {GameType} gameType
     * @param {ISlotGameProcess} process
     */
    setProcess(gameType: GameType | string, process: IProcess): this;


    /**
     * 更換流程
     * @param {GameType} gameType
     */
    changeProcess(gameType: GameType | string);

    /**
     * 設定初始流程
     * @param {IProcess} process
     */
    setInitialProcess(process: IProcess);

    /**
     * 更新當前玩家押注金額
     * @param {number} betIndex
     */
    updateUserBetPoint(betIndex: number);

    /**
     * 更新當前auto次數
     */
    updateAutoCount(autoType: AutoType);

    /**
     * 更動當前自動狀態
     * 如果是自動狀態,將會更動為非自動
     * 如果是非自動狀態,將會更動自動
     */
    updateAuto();

    /**
     * 更新當前速度
     * 如果是加速狀態,將會更動為不加速
     * 如果無加速狀態,將會更動加速狀態
     */
    updateSpeed();

    /**
     * 監聽:如果server有更新當前玩家的金額時,將會自動執行該callback function
     * @param {() => void} callFun
     */
    userMoneyEventListener(callFun: (money: number) => void);

    /**
     * 監聽: 如果user有更換押注金額,將會執行保存的callBack Function
     * @param {(betIndex: number) => void} callFun
     */
    userTotalBetEventListener(callFun: (beforeIndex: number, afterIndex: number) => void)

    /**
     * 接收Game流程有獲獎時,回傳監聽事件
     * @param {(winPoint: number) => void} callFun
     */
    userWinPointEventListener(callFun: (winPoint: number, level: number) => void);


    /**
     * 添加關注AUTO事件改變時的回傳
     * @param {(isAutomaticState: boolean, autoType: AutoType) => void} callFun
     */
    autoStateEventListener(callFun: (isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void);

    /**
     * 清除所有狀態,返回預設模式
     */
    remake();

}