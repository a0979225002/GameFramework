import AGenericTemplate from "../../BaseTemplate/AGenericTemplate";
import AutoStateChangeObserver from "../../Event/Observer/GameObserver/AutoStateChangeObserver";
import AutoStateChangeNotification from "../../Event/Notification/GameNotification/AutoStateChangeNotification";
import StopNowStateNotification from "../../Event/Notification/GameNotification/StopNowStateNotification";
import UserMoneyChangeObserver from "../../Event/Observer/GameObserver/UserMoenyChangeObserver";
import SpeedStateChangeNotification from "../../Event/Notification/GameNotification/SpeedStateChangeNotification";
import UserMoneyChangeNotification from "../../Event/Notification/GameNotification/UserMoneyChangeNotification";
import {fcc} from "../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
 * ```
 *      事件:
 *          推撥 {StopNowStateNotification} : 即停的推播事件
 *          推撥 {SpeedStateChangeNotification} : 加速的推播事件
 *          推撥 {AutoStateChangeNotification} : 自動狀態更動推播事件
 *          接收 {UserMoneyChangeObserver} : 玩家金額變更時推播事件
 *              callback : this.userMoney = money;
 *          接收 {AutoStateChangeNotification} : 自動狀態更動推播事件
 *              callback :  this.autoEvent(isAutomaticState, afterAutoCount);
 *                          if (isAutomaticState) {
 *                              await this.startButtonEvent();
 *                          }
 * ```
 * @Date 2021-05-26 上午 11:29
 * @Version 1.0
 */
export default abstract class AMainGameButtonTemplate extends AGenericTemplate {
    /**
     * 當前是否開啟總押注視窗
     * @type {boolean}
     * @protected
     */
    protected isShowTotalBetFrame: boolean;
    /**
     * 當前是否常壓空白建
     * @type {boolean}
     * @protected
     */
    protected keyboardListener: boolean;

    /**
     * 自動狀態事件綁定者
     * @type {AutoStateChangeObserver}
     * @private
     */
    private _autoStateChangeObserver: AutoStateChangeObserver;

    /**
     * 當前遊戲速度
     */
    protected nowSpeed: boolean;

    /**
     * 是否正在自動狀態中
     * @type {boolean}
     * @private
     */
    protected isAutoState: boolean;

    /**
     * 當前Auto次數
     * @type {number}
     * @protected
     */
    protected nowAutoType: number;

    /**
     * 長壓時間 單位 : 秒
     * @type {number}
     * @default 0.5
     * @protected
     */
    protected longTouchTime: number;

    /**
     * 當前玩家剩餘金額
     * @type {number}
     * @protected
     */
    protected userMoney: number;

    /**
     * 監聽玩家金額變更時給予通知
     * @type {UserMoneyChangeObserver}
     * @private
     */
    private _userMoneyChangeObserver: UserMoneyChangeObserver;

    /**
     * 確認當前user分數是否可以玩下輪遊戲
     * @return {boolean}
     * @protected
     */
    protected abstract checkUserPointCanPlayGame(): boolean;

    protected onLoad(): void {
        this.isShowTotalBetFrame = false;                                           //當前是否開啟總押注視窗
        this.keyboardListener = false;                                              //當前是否常壓空白建
        this.nowAutoType = fcc.configMgr.autoCount;                                 //初始自動類型
        this.longTouchTime = 0.5;                                                   //默認長壓時間0.5秒
        this.nowSpeed = fcc.configMgr.isSpeedUp;                                    //初始當前遊戲速度
        this.addNotification();                                                     //添加玩家金額 /自動遊戲事件 監聽
        super.onLoad();
    }

    /**
     * 打開開始遊戲事件監聽
     */
    public abstract startButtonOnEnable(): void;

    /**
     * 關閉開始遊戲事件監聽
     */
    public abstract startButtonDisable(): void;

    /**
     * 點擊 (打開或關閉) 總押注視窗按鈕
     * @param {boolean} isShowTotalBetFrame : 打開或關閉
     * @protected
     */
    protected abstract totalBetFrameTouchEvent(isShowTotalBetFrame: boolean): void;

    /**
     * 當下是否(開啟或關閉)加速狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isSpeedUp : 開啟或關閉
     * @protected
     */
    protected abstract speedUpEvent(isSpeedUp: boolean): void;

    /**
     * 當下是否(開啟或關閉)自動狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isAutomaticState
     * @param {fcc.type.AutoType} autoType
     * @protected
     */
    protected abstract autoEvent(isAutomaticState: boolean, autoType: fcc.type.AutoType): void;

    /**
     * 遊戲開始執行流程前事件
     * @protected
     */
    protected abstract startEvent(): void;

    /**
     * 遊戲開始執行流程完成後事件
     * @protected
     */
    protected abstract endEvent(): void;

    /**
     * 打開遊戲菜單
     * @protected
     */
    protected abstract menuEvent(): void;

    /**
     * 警告事件
     * @protected
     */
    protected abstract warningEvent(): void;

    /**
     * 添加Notification接收事件
     * @private
     */
    private addNotification(): void {

        /*自動按鈕推播事件綁定*/
        fcc.notificationMgr<AutoStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .subscribe(this.getAutoStateChangeObserver(), true);

        /*玩家金額更新推播事件*/
        fcc.notificationMgr<UserMoneyChangeNotification>()
            .getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE)
            .subscribe(this.getUserMoneyChangeObserver(), true);

    }

    /**
     * 觸控按壓時監聽
     * @private
     */
    protected startButtonOnTouchStart(): void {
        this.unschedule(this.longTouchTimer);//清除計時器事件
        //如果該遊戲正在自動模式,將先取消自動狀態
        if (this.isAutoState) {
            //推播auto事件
            this.autoNotify(false, this.nowAutoType);
            return;
        }
        this.scheduleOnce(this.longTouchTimer, this.longTouchTime);
    }

    /**
     * 長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
     * @returns {Promise<void>}
     * @private
     */
    protected async longTouchTimer(): Promise<void> {
        //推播auto事件
        this.autoNotify(true, this.nowAutoType);
        if (fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) {
            await this.startButtonEvent();
        }
    }

    /**
     * 推播auto事件
     * @param {boolean} isAutoState - 當前自動狀態
     * @param {AutoType} autoType - 當前 auto類型
     * @private
     */
    private autoNotify(isAutoState: boolean, autoType: fcc.type.AutoType): void {
        fcc.notificationMgr<AutoStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .notify(isAutoState, autoType, autoType);
    }

    /**
     * start監聽抬起時狀態
     * 取消長壓計時器事件,並進入開始遊戲事件
     * @private
     */
    protected async startButtonOnTouchEnd(): Promise<void> {
        this.unschedule(this.longTouchTimer);
        if (this.isAutoState) return;
        await this.startButtonEvent();
    }

    /**
     * 鍵盤空白鍵壓下時監聽
     * @param event
     * @private
     */
    protected keyboardSpaceTouchStart(event): void {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (!this.keyboardListener) {
                    this.keyboardListener = true;
                    this.startButtonOnTouchStart();
                }
                break;
        }
    }

    /**
     * 鍵盤空白鍵抬起時監聽
     * @param event
     * @private
     */
    protected async keyboardSpaceTouchEnd(event): Promise<void> {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                await this.startButtonOnTouchEnd();
                this.keyboardListener = false;
                break;
        }
    }

    /**
     * 自動狀態監聽者
     * 如有需求可自行override or 獲取監聽對象做關閉操作
     * @returns {AutoStateChangeObserver}
     * @protected
     */
    protected getAutoStateChangeObserver(): AutoStateChangeObserver {
        if (!this._autoStateChangeObserver) {
            this._autoStateChangeObserver =
                new AutoStateChangeObserver(async (isAutomaticState, beforeAutoCount, afterAutoCount) => {
                    this.nowAutoType = afterAutoCount;
                    this.isAutoState = isAutomaticState;
                    this.autoEvent(isAutomaticState, afterAutoCount);
                    if (isAutomaticState && fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) {
                        await this.startButtonEvent();
                    }
                }, this);
        }
        return this._autoStateChangeObserver;
    }

    /**
     * 更新玩家金額
     */
    protected getUserMoneyChangeObserver(): UserMoneyChangeObserver {
        if (!this._userMoneyChangeObserver) {
            this._userMoneyChangeObserver =
                new UserMoneyChangeObserver(money => {
                    this.userMoney = money;
                }, this);
        }
        return this._userMoneyChangeObserver;
    }

    /**
     * 開始遊戲監聽事件
     * @returns {Promise<void>}
     * @protected
     */
    protected async startButtonEvent(): Promise<void> {
        do {
            //如果當下總押注視窗開啟中,更改為執行關閉總押注視窗
            if (this.isShowTotalBetFrame) {
                this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                this.totalBetFrameTouchEvent(false);
                return;
            }
            //如果遊戲為執行中狀態,將可以即停操作
            if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY &&
                fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) {
                //推播即停事件
                fcc.notificationMgr<StopNowStateNotification>()
                    .getNotification(fcc.type.NotificationType.STOP_NOW)
                    .notify();
                return;
            }
            if (!this.checkUserPointCanPlayGame()) return;
            this.startEvent();
            await fcc.processMgr.play();
            this.endEvent();
        } while (this.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING);
    }

    /**
     * 自動按鈕監聽事件
     * 如果當前押注視窗開啟中,將更換為關閉視窗方法
     * 正常情況,推播當前auto狀態事件
     * @private
     */
    protected autoButtonEventListener(): void {
        this.unschedule(this.longTouchTimer);//將長案事件失效
        //如果當前押注視窗開啟中,將更換為關閉視窗方法
        if (this.isShowTotalBetFrame) {
            this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
            this.totalBetFrameTouchEvent(false);
            return;
        }
        this.isAutoState = !this.isAutoState;
        this.autoNotify(this.isAutoState, this.nowAutoType);
    }

    /**
     * 加速按鈕監聽事件
     * @protected
     */
    protected speedUpButtonEventListener(): void {

        this.nowSpeed = !this.nowSpeed;

        fcc.notificationMgr<SpeedStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .notify(this.nowSpeed);

        this.speedUpEvent(this.nowSpeed);
    }

    /**
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected totalBetFrameTouchEventListener(): void {
        //如果當前在遊戲中,將無法打開總押注視窗
        if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY) {
            this.warningEvent();
            return;
        }
        this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
        this.totalBetFrameTouchEvent(this.isShowTotalBetFrame);
    }

    /**
     * menu按鈕監聽事件
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected menuButtonEventListener(): void {
        this.unschedule(this.longTouchTimer);//清除計時器事件
        if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY) {
            this.warningEvent();
            return;
        }
        this.menuEvent();
    }
}
