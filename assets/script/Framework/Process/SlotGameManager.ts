import {AutoType} from '../Config/Enum/ConfigEnum'
import {UserBetPoint, ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {GameState, GameType} from './Enum/GameState'
import AutoStateChangeNotification from "./GameNotification/AutoStateChangeNotification";
import SpeedStateChangeNotification from "./GameNotification/SpeedStateChangeNotification";
import UserMoneyChangeNotification from "./GameNotification/UserMoneyChangeNotification";
import UserTotalBetChangeNotification from "./GameNotification/UserTotalBetChangeNotification";
import AutoStateChangeObserver from "./GameObserver/AutoStateChangeObserver";
import SpeedStateChangeObserver from "./GameObserver/SpeedStateChangeObserver";
import UserMoneyChangeObserver from "./GameObserver/UserMoenyChangeObserver";
import UserTotalBetChangeObserver from "./GameObserver/UserTotalBetChangeObserver";
import GameProcessFactory from "./GameProcessFactory";
import {IGameProcessFactory} from "./IGameProcessFactory";
import ISlotGameManager from './ISlotGameManager'

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
    private _autoType: AutoType;
    private _isAutoState: boolean;
    private _isSpeedUp: boolean;
    private _automaticRemainingCount: number;
    private _userMoney: number;
    private readonly _userBetPoint: UserBetPoint;
    private _isResultOk: boolean;
    private inExecution: boolean
    private gameProcessFactory: IGameProcessFactory;
    private userMoneyChangeObserver: UserMoneyChangeObserver;
    private userTotalBetChangeObserver: UserTotalBetChangeObserver;
    private autoStateChangeObserver: AutoStateChangeObserver;
    private speedStateChangeObserver: SpeedStateChangeObserver;

    private constructor(configManager: ISlotConfigManager) {

        this.configManager = configManager;                                                             //獲取ConfigManger,雙向綁定
        this.gameProcessFactory = new GameProcessFactory(this);                                         //初始化流程工廠
        this._gameState = GameState.STANDBY;                                                            //初始遊戲狀態
        this._autoType = this.configManager.autoCount;                                                  //初始自動次數
        this._isAutoState = this.configManager.isAuto;                                                  //初始自否自動
        this._isSpeedUp = this.configManager.isSpeedUp;                                                 //初始是否加速
        this._automaticRemainingCount = this.configManager.autoCount;                                   //初始自動剩餘次數
        this._userBetPoint = this.configManager.userBet;                                                //初始玩家押住
        this._isResultOk = false;                                                                       //初始尚未獲取server 該局資料
        this.inExecution = false;                                                                       //初始尚未開使執行流程
        UserMoneyChangeNotification                                                                     //訂閱用戶更新金額時,回傳推撥事件
            .instance.subscribe(this.getUserMoneyChangeObserver(), true);
        UserTotalBetChangeNotification                                                                  //訂閱用戶更新更換押注時,回傳推撥事件
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
        AutoStateChangeNotification                                                                     //訂閱用戶更動自動狀態時,回傳推撥事件
            .instance.subscribe(this.getAutoStateChangeObserver(), true);
        SpeedStateChangeNotification                                                                    //訂閱用戶更新自動狀態時,回傳推撥事件
            .instance.subscribe(this.getSpeedStateChangeObserver(), true);
    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案只有一次產生此class
     */
    public static setInstance(configManager: ISlotConfigManager) {
        if (!this._instance) {
            this._instance = new SlotGameManager(configManager);
        }
    }


    /**
     * 獲取已經單例加載後的實例化class
     * @returns {ISlotGameManager}
     */
    public static get instance(): ISlotGameManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, "該類尚未實例化");
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
     * 遊戲流程開始與結束時的狀態
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
        }
    }

    /**
     * 拿取Framework內用戶更新金額時,推撥給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    public getUserMoneyChangeObserver(): UserMoneyChangeObserver {
        if (!this.userMoneyChangeObserver) {
            this.userMoneyChangeObserver = new UserMoneyChangeObserver((money) => {
                this._userMoney = money;
            }, this);
        }
        return this.userMoneyChangeObserver;
    }

    /**
     * 拿取Framework內用戶更換押注時,推撥給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    public getUserTotalBetChangeObserver(): UserTotalBetChangeObserver {
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver((beforeIndex, afterIndex) => {
                this._userBetPoint.LineBet = afterIndex;
            }, this);
        }
        return this.userTotalBetChangeObserver;
    }

    /**
     * 拿取Framework內用戶更新auto狀態時,推撥給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    public getAutoStateChangeObserver(): AutoStateChangeObserver {
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver((isAutomaticState, beforeAutoCount, afterAutoCount) => {
                this._autoType = afterAutoCount;
                this._isAutoState = isAutomaticState;
            }, this);
        }
        return this.autoStateChangeObserver;
    }

    /**
     * 拿取Framework內用戶更新加速狀態時,推撥給框架的綁定者
     * 注意:如果取消框架內的訂閱者,框架內的參數將無法自動更新,需手動自行更新
     */
    public getSpeedStateChangeObserver(): SpeedStateChangeObserver {
        if (!this.speedStateChangeObserver) {
            this.speedStateChangeObserver = new SpeedStateChangeObserver((isSpeedUp) => {
                this._isSpeedUp = isSpeedUp;
            }, this);
        }
        return this.speedStateChangeObserver;
    }

    /**
     * 更新當前玩家押注金額
     * 如需同步,建議使用推撥事件更新
     * @param {number} betIndex
     * @returns {UserBetPoint}
     */
    updateUserBetPoint(betIndex: number): UserBetPoint {
        this._userBetPoint.LineBet = betIndex;
        return this._userBetPoint;
    }

    /**
     * 更新當前auto次數
     * 如果需要同步所有auto次數,建議使用推撥事件更新
     * @param {AutoType} autoType
     * @returns {AutoType}
     */
    updateAutoCount(autoType: AutoType): AutoType {
        this._autoType = autoType;
        return this._autoType;
    }

    /**
     * 更動當前自動狀態
     * 如果是自動狀態,將會更動為非自動
     * 如果是非自動狀態,將會更動自動
     * 如果需要同步所有auto狀態,建議綁定推撥事件更新
     * @returns {boolean}
     */
    updateAuto(): boolean {
        this._isAutoState = !this._isAutoState;
        if (this._isAutoState) {
            this._automaticRemainingCount = this._autoType;
        }
        return this.isAutoState;
    }

    /**
     * 更新當前速度
     * 如果是加速狀態,將會更動為不加速
     * 如果無加速狀態,將會更動加速狀態
     * 如果需要同步所有auto狀態,建議綁定推撥事件更新
     * @returns {boolean}
     */
    updateSpeed(): boolean {
        this._isSpeedUp = !this._isSpeedUp;
        return this._isSpeedUp;
    }

    /**
     * 清除堵塞狀態
     * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
     */
    remake() {
        this.processState(false);
    }

    public set gameState(value: GameState) {
        this._gameState = value
    }

    public get gameState(): GameState {
        return this._gameState
    }

    public get autoType(): AutoType {
        return this._autoType
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