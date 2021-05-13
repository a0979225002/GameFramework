import ConfigManager from '../Config/ConfigManager'
import {AutoType} from '../Config/Enum/ConfigEnum'
import {UserBetPoint} from '../Config/IConfigManager'
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {GameEventType} from '../Listener/Enum/gameEventType'
import {ServerEventType} from '../Listener/Enum/ServerEventType'
import EventManager from '../Listener/EventManager'
import {WebResponseManager} from '../WebResponse/WebResponseManager'
import {GameState, ProcedureState, GameType} from './Enum/GameState'
import IGameManager from './IProcedure/IGameManager'

export default class GameManager implements IGameManager {

    private static _instance: IGameManager
    private _gameState: GameState;
    private _procedureState: ProcedureState;
    private _autoCount: AutoType;
    private _isAutoState: boolean;
    private _isSpeedUp: boolean;
    private _automaticRemainingCount: number;
    private _userMoney: number
    private readonly _userBetPoint: UserBetPoint;
    private _isResultOk: boolean;
    private _normalProcess: IGameProcess;
    private _freeProcess: IGameProcess;
    private inExecution: boolean
    private readonly userMoneyCallFun: Set<(money: number) => void>;
    private readonly userTotalBetCallFun: Set<(beforeIndex: number, afterIndex: number) => void>;
    private readonly userWinPointCallFun: Set<(winPoint: number, level: number) => void>;
    private readonly autoCallFun: Set<(isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void>;

    private constructor() {

        this._gameState = GameState.STANDBY;
        this._procedureState = null;
        this._autoCount = ConfigManager.instance.autoCount;
        this._isAutoState = ConfigManager.instance.isAuto;
        this._isSpeedUp = ConfigManager.instance.isSpeedUp;
        this._automaticRemainingCount = ConfigManager.instance.autoCount;
        this._userBetPoint = ConfigManager.instance.userBet;
        this._isResultOk = false;
        this.inExecution = false;
        this.userMoneyCallFun = new Set<(money: number) => void>();
        this.userTotalBetCallFun = new Set<(beforeIndex: number, afterIndex: number) => void>();
        this.userWinPointCallFun = new Set<(winPoint: number) => void>();
        this.autoCallFun = new Set<(isAutomaticState: boolean, autoType: AutoType) => void>();
        this.userMoneyUpdateEventListener();
        this.userTotalBetUpdateEventListener();
        this.userWinPointUpdateEventListener();
        this.autoStateUpdateEventListener();
    }

    //單例
    public static get instance(): IGameManager {

        if (!this._instance) {
            this._instance = new GameManager();
        }
        return this._instance;
    }

    setProcess(gameType: GameType, process: IGameProcess) {

        switch (gameType) {
            case GameType.NORMAL:
                this._normalProcess = process;
                break;
            case GameType.FREE:
                this._freeProcess = process;
                break;
            default:
                ErrorManager.instance.executeError(ErrorType.Procedure, "class 錯誤,需要有繼承 IGameProcess 的Class")
        }
    }

    public play(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            if (!this.inExecution) {
                this.processState(true);//流程開始
                await this.checkNowState();
                this.processState(false);//流程循環結束
                resolve();
            } else {
                ErrorManager.instance.executeError(ErrorType.Procedure, "流程尚未結束,請勿重複執行");
            }
        });
    };

    private async checkNowState() {
        if (WebResponseManager.instance.result.FreeSpinCount > 0) {
            this.gameState = GameState.FREEING;
            await this._freeProcess.start();

        } else if (WebResponseManager.instance.freeResult.FreeToFree > 0) {

            this.gameState = GameState.FREEING;
            await this._freeProcess.start();

        } else if (WebResponseManager.instance.freeResult.Count > 0) {

            this.gameState = GameState.FREEING;
            await this._freeProcess.start();

        } else {
            this.gameState = GameState.PLAYING;
            await this._normalProcess.start();
        }
    }

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
            if (this._gameState == GameState.FREEING) return;
            this._gameState = GameState.STANDBY;
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
            ErrorManager.instance.executeError(ErrorType.Procedure, "回傳function重複使用,不要重複添加function");
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
            ErrorManager.instance.executeError(ErrorType.Procedure, "回傳function重複使用,不要重複添加function");
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
            ErrorManager.instance.executeError(ErrorType.Procedure, "回傳function重複使用,不要重複添加function");
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
            ErrorManager.instance.executeError(ErrorType.Procedure, "回傳function重複使用,不要重複添加function");
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

    }

    public set gameState(value: GameState) {
        this._gameState = value
    }

    public set procedureState(value: ProcedureState) {
        this._procedureState = value
    }

    public get gameState(): GameState {
        return this._gameState
    }

    public get procedureState(): ProcedureState {
        return this._procedureState
    }

    public get autoCount(): AutoType {
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

    public set userMoney(value: number) {
        this._userMoney = value
    }

    public get userMoney(): number {
        return this._userMoney
    }

    public get isResultOk(): boolean {
        return this._isResultOk
    }

    public set isResultOk(value: boolean) {
        this._isResultOk = value
    }

}