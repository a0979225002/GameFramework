import {AutoType} from "../../../Process/Enum/AutoType";
import {GameState} from "../../../Process/Enum/GameState";
import AutoStateChangeNotification
    from "../../../Listener/NotificationType/GameNotification/AutoStateChangeNotification";
import SpeedStateChangeNotification
    from "../../../Listener/NotificationType/GameNotification/SpeedStateChangeNotification";
import AutoStateChangeObserver from "../../../Listener/ObserverType/GameObserver/AutoStateChangeObserver";
import SlotProcessManager from "../../../Process/SlotProcessManager";
import StopNowStateNotification from "../../../Listener/NotificationType/GameNotification/StopNowStateNotification";
import {ResponseType} from "../../../WebResponse/Enum/ResponseType";
import {WebResponseManager} from "../../../WebResponse/WebResponseManager";
import OverrideComponent from "../../OverrideComponent";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
 * @Date 2021-05-26 上午 11:29
 * @Version 1.0
 */
export default abstract class AMainGameEvent extends OverrideComponent {
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
    protected tableInfo: ITableInfoModel;

    protected onLoad(): void {
        this.isShowTotalBetFrame = false;                                           //當前是否開啟總押注視窗
        this.keyboardListener = false;                                              //當前是否常壓空白建
        this.tableInfo =
            WebResponseManager
                .instance<ITableInfoModel>()
                .getResult(ResponseType.TABLE_INFO);
        AutoStateChangeNotification                                                 //自動按鈕推播事件綁定
            .instance.subscribe(this.getAutoStateChangeObserver(), true);
        this.makeTotalBetButtonToListener();                                        //總押注視窗中按鈕監聽事件
        this.onCreate();                                                            //初始自訂狀態
    }

    protected start(): void {
        this.languageSetting();             //更換字體樣式與語系
    }

    /**
     * 初始自訂狀態
     * 注意:盡量不要使用cocos 內的onLoad();此方法包含在其中
     * @protected
     */
    protected abstract onCreate(): void;

    /**
     * 如果有需要更換字體樣式與語系,請在這裡使用
     * @protected
     */
    protected abstract languageSetting(): void;

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
     * 自行添加押注視窗內所有押注按鈕監聽
     * @protected
     */
    protected abstract makeTotalBetButtonToListener(): void;

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
     * @param {boolean} isAutomaticState :
     * @param {AutoType} autoType
     * @protected
     */
    protected abstract autoEvent(isAutomaticState: boolean, autoType: AutoType): void;

    /**
     * 遊戲開始執行流程前事件
     * @return {boolean} - 返回 false 將會中止流程
     * @protected
     */
    protected abstract startEvent(): boolean;

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
     * 觸控按壓時監聽
     * @private
     */
    protected startButtonOnTouchStart(): void {
        this.unschedule(this.longTouchTimer);//清除計時器事件
        //如果該遊戲正在自動模式,將先取消自動狀態
        if (SlotProcessManager.instance.isAutoState) {
            //推播auto事件
            this.autoNotify(false, SlotProcessManager.instance.autoType);
            return;
        }
        this.scheduleOnce(this.longTouchTimer, 0.5);
    }

    /**
     * 長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
     * @returns {Promise<void>}
     * @private
     */
    private async longTouchTimer(): Promise<void> {
        //推播auto事件
        this.autoNotify(true, SlotProcessManager.instance.autoType);
        if (SlotProcessManager.instance.isAutoState) {
            await this.startButtonEvent();
        }
    }

    /**
     * 推播auto事件
     * @private
     */
    private autoNotify(isAuto: boolean, autoType: AutoType): void {
        AutoStateChangeNotification
            .instance.notify(isAuto, autoType, autoType);
    }

    /**
     * start監聽抬起時狀態
     * 取消長壓計時器事件,並進入開始遊戲事件
     * @private
     */
    protected async startButtonOnTouchEnd(): Promise<void> {
        this.unschedule(this.longTouchTimer);
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
                    this.autoEvent(isAutomaticState, afterAutoCount);
                    if (isAutomaticState) {
                        await this.startButtonEvent();
                    }
                }, this);
        }
        return this._autoStateChangeObserver;
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
            if (SlotProcessManager.instance.gameState != GameState.STANDBY && SlotProcessManager.instance.gameState != GameState.FREEING) {
                //推播即停事件
                StopNowStateNotification.instance.notify();
                return;
            }
            // //判斷當前是金額足夠
            // let nowUserBetIndex = SlotProcessManager.instance.userBetPoint.LineBet;
            // let userBet = this.tableInfo.LineTotalBet[nowUserBetIndex];
            // //如果用戶金額不足的情況
            // if (SlotProcessManager.instance.userMoney - userBet < 0) {
            //     ErrorManager.instance.serverError(false, SocketSetting.t("S_9003"));
            //     return;
            // }
            if (!this.startEvent()) return;
            await SlotProcessManager.instance.play();
            this.endEvent();
        } while (SlotProcessManager.instance.isAutoState || SlotProcessManager.instance.gameState === GameState.FREEING);
    }

    /**
     * 自動按鈕監聽事件
     * 如果當前押注視窗開啟中,將更換為關閉視窗方法
     * 正常情況,推播當前auto狀態事件
     * @private
     */
    protected async autoButtonEventListener(): Promise<void> {
        this.unschedule(this.longTouchTimer);//將長案事件失效
        //如果當前押注視窗開啟中,將更換為關閉視窗方法
        if (this.isShowTotalBetFrame) {
            this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
            this.totalBetFrameTouchEvent(false);
            return;
        }
        let isAuto = SlotProcessManager.instance.isAutoState;
        this.autoNotify(!isAuto, SlotProcessManager.instance.autoType);
    }

    /**
     * 加速按鈕監聽事件
     * @protected
     */
    protected speedUpButtonEventListener(): void {

        let isSpeedUp = SlotProcessManager.instance.isSpeedUp;

        SpeedStateChangeNotification.instance.notify(!isSpeedUp);

        this.speedUpEvent(SlotProcessManager.instance.isSpeedUp);

    }

    /**
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected totalBetFrameTouchEventListener(): void {
        //如果當前在遊戲中,將無法打開總押注視窗
        if (SlotProcessManager.instance.gameState != GameState.STANDBY) {
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
        if (SlotProcessManager.instance.gameState != GameState.STANDBY) {
            this.warningEvent();
            return;
        }
        this.menuEvent();
    }
}