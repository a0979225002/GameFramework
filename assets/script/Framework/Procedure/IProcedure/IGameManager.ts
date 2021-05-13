import {AutoType} from '../../Config/Enum/ConfigEnum'
import {UserBetPoint} from '../../Config/IConfigManager'
import {GameState, ProcedureState, GameType} from '../Enum/GameState'

export default interface IGameManager {

    gameState: GameState;
    procedureState: ProcedureState;
    autoCount: AutoType;
    isAutoState: boolean;
    isSpeedUp: boolean;
    automaticRemainingCount: number;
    userMoney: number;
    userBetPoint: UserBetPoint;
    isResultOk: boolean;

    /**
     * 執行設定好的流程
     */
    play(): Promise<void>;

    /**
     * 設定流程
     * @param {GameType} gameType
     * @param {IGameProcess} process
     */
    setProcess(gameType: GameType, process: IGameProcess);

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