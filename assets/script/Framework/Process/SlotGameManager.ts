import {AutoType} from '../Config/Enum/ConfigEnum'
import {UserBetPoint, ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {GameEventType} from '../Listener/Enum/gameEventType'
import {ServerEventType} from '../Listener/Enum/ServerEventType'
import EventManager from '../Listener/EventManager'
import {GameState, GameType} from './Enum/GameState'
import GameProcessFactory from "./GameProcessFactory";
import {IGameProcessFactory} from "./IProcedure/IGameProcessFactory";
import ISlotGameManager from './IProcedure/ISlotGameManager'

/**
 * @Author XIAO-LI-PIN
 * @Description (介面)遊戲管理器,管理當前流程,遊戲當前狀態
 * @Date 2021-05-14 下午 03:44
 * @Version 1.1
 */
export default class SlotGameManager implements ISlotGameManager {

    private static _instance: ISlotGameManager
    private configManager: ISlotConfigManager;
    private _gameState: GameState;
    private _autoCount: AutoType;
    private _isAutoState: boolean;
    private _isSpeedUp: boolean;
    private _automaticRemainingCount: number;
    private _userMoney: number;
    private readonly _userBetPoint: UserBetPoint;
    private _isResultOk: boolean;
    private inExecution: boolean
    private gameProcessFactory: IGameProcessFactory;
    private readonly userMoneyCallFun: Set<(money: number) => void>;
    private readonly userTotalBetCallFun: Set<(beforeIndex: number, afterIndex: number) => void>;
    private readonly userWinPointCallFun: Set<(winPoint: number, level: number) => void>;
    private readonly autoCallFun: Set<(isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void>;

    private constructor(configManager: ISlotConfigManager) {

        this.configManager = configManager;                                                             //獲取ConfigManger,雙向綁定
        this.gameProcessFactory = new GameProcessFactory(this);                                         //初始化流程工廠
        this._gameState = GameState.STANDBY;                                                            //初始遊戲狀態
        this._autoCount = this.configManager.autoCount;                                                 //初始自動次數
        this._isAutoState = this.configManager.isAuto;                                                  //初始自否自動
        this._isSpeedUp = this.configManager.isSpeedUp;                                                 //初始是否加速
        this._automaticRemainingCount = this.configManager.autoCount;                                   //初始自動剩餘次數
        this._userBetPoint = this.configManager.userBet;                                                //初始玩家押住
        this._isResultOk = false;                                                                       //初始尚未獲取server 該局資料
        this.inExecution = false;                                                                       //初始尚未開使執行流程
        this.userMoneyCallFun = new Set<(money: number) => void>();                                     //初始監聽玩家金額改變時,回乎的綁定的事件
        this.userTotalBetCallFun = new Set<(beforeIndex: number, afterIndex: number) => void>();        //初始當用戶改變押住金額時,回乎的綁定的事件
        this.userWinPointCallFun = new Set<(winPoint: number) => void>();                               //初始獲獎時,回乎的綁定事件
        this.autoCallFun = new Set<(isAutomaticState: boolean, autoType: AutoType) => void>();          //初始當前自動模式,當用戶點擊自動按鈕時,回乎的綁定事件
        this.userMoneyUpdateEventListener();                                                            //用戶金額改變時監聽事件
        this.userTotalBetUpdateEventListener();                                                         //用戶改變押住金額時監聽事件
        this.userWinPointUpdateEventListener();                                                         //用戶獲獎時,監聽事件
        this.autoStateUpdateEventListener();                                                            //自動狀態變更時,監聽事件

    }

    //單例
    public static setInstance(configManager: ISlotConfigManager) {
        if (!this._instance) {
            this._instance = new SlotGameManager(configManager);
        }
    }


    //單例
    public static get instance(): ISlotGameManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.GameProcedureFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    setProcess(gameType: GameType | string, process: IProcess): this {
        this.gameProcessFactory.setProcess(gameType, process);
        return this;
    }

    setInitialProcess(process: IProcess) {
        this.gameProcessFactory.process = process;
    }

    changeProcess(gameType: GameType | string) {
        this.gameProcessFactory.changeProcess(gameType);
    }

    public play(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            if (!this.inExecution) {
                this.processState(true);//流程開始
                await this.gameProcessFactory.useProcess();
                this.processState(false);//流程循環結束
                resolve();
            } else {
                ErrorManager.instance.executeError(ErrorType.ProcedureFW, "流程尚未結束,請勿重複執行");
            }
        });
    };

    /**
     * 遊戲流程狀態
     * @param {boolean} state : 流程開始 or 流程結束
     * @private
     */
    private processState(state: boolean) {
        if (state) {
            this._isResultOk = false;
            this.inExecution = true;
        } else {
            this.inExecution = false;
            this._isResultOk = false;
            // if (this._gameState == GameState.FREEING) return;
            // this._gameState = GameState.STANDBY;
        }
    }

    /**
     * 更新當前玩家押注金額
     * @param {number} betIndex
     */
    updateUserBetPoint(betIndex: number) {

        this._userBetPoint.LineBet = betIndex;

    }

    private userMoneyUpdateEventListener() {

        EventManager.instance.serverEventListener(ServerEventType.UPDATE_POINTS, (money: number) => {

            this._userMoney = money;

            if (this.userMoneyCallFun.size != 0) {

                for (let method of this.userMoneyCallFun) {
                    method(money);
                }
            }
        }, false)
    }

    /**
     * 監聽:如果server有更新當前玩家的金額時,將會自動執行該callback function
     * @param {() => void} callFun
     */
    userMoneyEventListener(callFun: (money: number) => void) {

        if (this.userMoneyCallFun.has(callFun)) {
            ErrorManager.instance.executeError(ErrorType.ProcedureFW, "回傳function重複使用,不要重複添加function");
            return;
        }
        this.userMoneyCallFun.add(callFun)
    }

    private userTotalBetUpdateEventListener() {

        EventManager.instance.gameEventListener(GameEventType.USER_TOTAL_BET, (afterIndex: number) => {

            let beforeIndex = this.userBetPoint.LineBet;
            this.userBetPoint.LineBet = afterIndex;

            if (this.userTotalBetCallFun.size != 0) {

                for (let method of this.userTotalBetCallFun) {
                    method(beforeIndex, afterIndex);
                }
            }
        }, false);
    }

    /**
     * 由使用者實現事件發送,更新有綁定更換遊戲押注分數的 node
     * @param {(betIndex: number) => void} callFun
     */
    userTotalBetEventListener(callFun: (beforeIndex: number, afterIndex: number) => void) {

        if (this.userTotalBetCallFun.has(callFun)) {
            ErrorManager.instance.executeError(ErrorType.ProcedureFW, "回傳function重複使用,不要重複添加function");
            return;
        }
        this.userTotalBetCallFun.add(callFun);
    }

    private userWinPointUpdateEventListener() {

        EventManager.instance.gameEventListener(GameEventType.WIN_POINT, (winPoint: number, level: number) => {

            if (this.userTotalBetCallFun.size != 0) {

                for (let method of this.userWinPointCallFun) {
                    method(winPoint, level);
                }
            }
        }, false);
    }

    /**
     * 接收Game流程有獲獎時,回傳監聽事件
     * @param {(winPoint: number) => void} callFun
     */
    userWinPointEventListener(callFun: (winPoint: number, level: number) => void) {

        if (this.userWinPointCallFun.has(callFun)) {
            ErrorManager.instance.executeError(ErrorType.ProcedureFW, "回傳function重複使用,不要重複添加function");
            return;
        }
        this.userWinPointCallFun.add(callFun);
    }

    /**
     * 如果USER 有點擊AUTO按鈕,會回傳事件 ,將更新 AUTO狀態
     * 並將以綁定的回傳事件發送給關注者
     * @private
     */
    private autoStateUpdateEventListener() {

        EventManager.instance.gameEventListener(GameEventType.AUTO, (isAutomaticState: boolean, afterAutoType: AutoType) => {

            if (isAutomaticState) {
                this._isAutoState = isAutomaticState;
            } else {
                this.updateAuto();
            }

            let beforeAutoCount = this._autoCount;

            if (this._autoCount != afterAutoType && afterAutoType) {
                this._autoCount = afterAutoType;
            }

            if (this.userTotalBetCallFun.size != 0) {

                for (let method of this.autoCallFun) {
                    method(this._isAutoState, beforeAutoCount, this._autoCount);
                }
            }

        }, false);
    }

    /**
     * 添加關注AUTO事件改變時的回傳
     * @param {(isAutomaticState: boolean, autoType: AutoType) => void} callFun
     */
    autoStateEventListener(callFun: (isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void) {

        if (this.autoCallFun.has(callFun)) {
            ErrorManager.instance.executeError(ErrorType.ProcedureFW, "回傳function重複使用,不要重複添加function");
            return;
        }

        this.autoCallFun.add(callFun);

    }

    /**
     * 更新當前auto次數
     */
    updateAutoCount(autoType: AutoType) {

        this._autoCount = autoType;

    }

    /**
     * 更動當前自動狀態
     * 如果是自動狀態,將會更動為非自動
     * 如果是非自動狀態,將會更動自動
     */
    updateAuto() {
        this._isAutoState = !this._isAutoState;
        if (this._isAutoState) {
            this._automaticRemainingCount = this._autoCount;
        }
    }

    /**
     * 更新當前速度
     * 如果是加速狀態,將會更動為不加速
     * 如果無加速狀態,將會更動加速狀態
     */
    updateSpeed() {

        this._isSpeedUp = !this._isSpeedUp;

    }

    /**
     * 清除所有狀態,返回預設模式
     */
    remake() {
        //TODO
    }

    public set gameState(value: GameState) {
        this._gameState = value
    }

    public get gameState(): GameState {
        return this._gameState
    }

    public get autoType(): AutoType {
        return this._autoCount
    }

    public get isAutoState(): boolean {
        return this._isAutoState
    }

    public get isSpeedUp(): boolean {
        return this._isSpeedUp
    }

    public get automaticRemainingCount(): number {
        return this._automaticRemainingCount
    }

    public get userBetPoint(): UserBetPoint {
        return this._userBetPoint
    }

    public get userMoney(): number {
        return this._userMoney
    }


    get isResultOk(): boolean {
        return this._isResultOk;
    }

    set isResultOk(value: boolean) {
        this._isResultOk = value;
    }
}