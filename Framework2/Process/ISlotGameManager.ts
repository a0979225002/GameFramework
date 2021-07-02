import {AutoType} from '../Config/Enum/AutoType'

import {GameState, GameType} from "./Enum/GameState";
import AutoStateChangeObserver from "../Listener/ObserverType/GameObserver/AutoStateChangeObserver";
import SpeedStateChangeObserver from "../Listener/ObserverType/GameObserver/SpeedStateChangeObserver";
import UserMoneyChangeObserver from "../Listener/ObserverType/GameObserver/UserMoenyChangeObserver";
import UserTotalBetChangeObserver from "../Listener/ObserverType/GameObserver/UserTotalBetChangeObserver";

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
    userBetPoint: IUserBetPoint;

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
    changeProcess(gameType: GameType | string): void;

    /**
     * 設定初始流程
     * @param processName
     */
    setInitialProcess(processName: string | GameType): void;


    /**
     * 拿取Framework內用戶更新金額時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     * @returns {UserMoneyChangeObserver}
     */
    getUserMoneyChangeObserver(): UserMoneyChangeObserver;

    /**
     * 拿取Framework內用戶更換押注時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     * @returns {UserTotalBetChangeObserver}
     */
    getUserTotalBetChangeObserver(): UserTotalBetChangeObserver;

    /**
     * 拿取Framework內用戶更新auto狀態時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     * @returns {AutoStateChangeObserver}
     */
    getAutoStateChangeObserver(): AutoStateChangeObserver;

    /**
     * 拿取Framework內用戶更新加速狀態時,推播給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     * @returns {SpeedStateChangeObserver}
     */
    getSpeedStateChangeObserver(): SpeedStateChangeObserver;

    /**
     * 更新當前玩家押注金額
     * 如需同步,建議使用推播事件更新
     * @param {number} betIndex
     * @returns {UserBetPoint} : 當前用戶押注的回傳server物件狀態
     */
    updateUserBetPoint(betIndex: number): IUserBetPoint;

    /**
     * 更新當前auto次數
     * 如果需要同步所有auto,建議使用推播事件更新
     * @param {AutoType} autoType
     * @returns {AutoType} : 當前auto類型
     */
    updateAutoCount(autoType: AutoType): AutoType;

    /**
     * 更動當前自動狀態
     * 如果是自動狀態,將會更動為非自動
     * 如果是非自動狀態,將會更動自動
     * 如果需要同步所有auto狀態,建議綁定推播事件更新
     * @returns {boolean} : 是否需要自動
     */
    updateAuto(): boolean;

    /**
     * 更新當前速度
     * 如果是加速狀態,將會更動為不加速
     * 如果無加速狀態,將會更動加速狀態
     * 如果需要同步所有auto狀態,建議綁定推播事件更新
     * @returns {boolean} : 是否需要加速
     */
    updateSpeed(): boolean;

    /**
     * 清除堵塞狀態
     * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
     */
    remake(): void;

}