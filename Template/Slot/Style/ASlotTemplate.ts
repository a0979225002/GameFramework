import StopNowStateObserver from "../../Event/Observer/GameObserver/StopNowStateObserver";
import SpeedStateChangeObserver from "../../Event/Observer/GameObserver/SpeedStateChangeObserver";
import StopNowStateNotification from "../../Event/Notification/GameNotification/StopNowStateNotification";
import SpeedStateChangeNotification from "../../Event/Notification/GameNotification/SpeedStateChangeNotification";
import ResponseResultObserver from "../../Event/Observer/ResponseObserver/ResponseResultObserver";
import ResponseResultNotification from "../../Event/Notification/ResponseNotifivation/ResponseResultNotification";

/**
 * @Author XIAO-LI-PIN
 * @Description slot 模板
 * @NOTE 需事先綁定 StopNowStateNotification 和 SpeedStateChangeNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class ASlotTemplate implements fcc.IF.ISlot {

    /**
     * 由 fcc.slotStyleMgr build 實現
     * @type {fcc.IF.ISlotSetting}
     * @protected
     */
    protected styleData: fcc.IF.ISlotSetting;

    /**
     * 使否需要即停
     * @type {boolean}
     * @protected
     */
    protected isSlotImmediateStop: boolean;

    /**
     * 當前的加速狀態
     * @type {boolean}
     * @protected
     */
    protected isSpeedUp: boolean;

    /**
     * 當前加速速率 : 無加速狀態 = 1
     * @type {number}
     * @protected
     */
    protected speedRatio: number;

    /**
     * 即停狀態通知時,該事件推播給綁定者
     * @type {StopNowStateObserver}
     * @protected
     */
    protected stopNowStateObserver: StopNowStateObserver;

    /**
     * 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
     * @type {SpeedStateChangeObserver}
     * @protected
     */
    protected speedStateChangeObserver: SpeedStateChangeObserver;

    /**
     * 當server回傳該局答案時,當有事件推送時,將會將該事件推播給綁定者
     * @type {ResponseResultObserver}
     * @private
     */
    private responseResultObserver: ResponseResultObserver;

    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    public abstract runSlotAnimation(): Promise<void>;

    /**
     * 啟動老虎機時過場動畫方法
     * @return {Promise<void>}
     */
    public abstract sineInSlot(): Promise<void>;

    /**
     * 初始化該輪所有狀態
     */
    public abstract initializeState(): void;

    /**
     * 是否server已經回傳結果
     * @type {boolean}
     * @protected
     */
    protected isResultOK: boolean;

    protected constructor(styleData: fcc.IF.ISlotSetting, configManager: fcc.IF.ISlotConfigManager) {
        this.isSpeedUp = configManager.isSpeedUp;                               //初始當前是否為加速
        this.styleData = styleData                                              //拿取老虎機樣式資料
        this.speedRatio = this.isSpeedUp ? 1 : styleData.speedUpMultiple;            //初始當前速率
        this.isResultOK = false;                                                //初始server對該輪回傳的結果的狀態
        this.addNotification();                                                 //添加監聽事件
    }

    /**
     * 添加推播事件
     */
    addNotification() {
        /*即停監聽*/
        fcc.notificationMgr<StopNowStateNotification>()
            .getNotification(fcc.type.NotificationType.STOP_NOW)
            .subscribe(this.getStopNowStateObserver(), true);

        /*當前加速倍率監聽*/
        fcc.notificationMgr<SpeedStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .subscribe(this.getSpeedStateChangeObserver(), true);

        /*當前server是否已經回傳結果*/
        fcc.notificationMgr<ResponseResultNotification>()
            .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
            .subscribe(this.getResponseResultObserver(), true);
    }

    /**
     * 即停監聽事件
     * @returns {StopNowStateObserver}
     * @private
     */
    private getStopNowStateObserver(): StopNowStateObserver {
        if (!this.isSlotImmediateStop) {
            this.stopNowStateObserver = new StopNowStateObserver(() => {
                this.isSlotImmediateStop = true;
            }, this);
        }
        return this.stopNowStateObserver;
    }

    /**
     * 加速按鈕監聽事件
     * @private
     */
    private getSpeedStateChangeObserver(): SpeedStateChangeObserver {
        if (!this.speedStateChangeObserver) {
            this.speedStateChangeObserver = new SpeedStateChangeObserver((isSpeedUp) => {
                isSpeedUp ? this.speedRatio = this.styleData.speedUpMultiple : this.speedRatio = 1;
            }, this);
        }
        return this.speedStateChangeObserver;
    }

    /**
     * Server是否回傳答案事件
     * @return {ResponseResultObserver}
     * @private
     */
    private getResponseResultObserver(): ResponseResultObserver {
        if (!this.responseResultObserver) {
            this.responseResultObserver = new ResponseResultObserver((responseType) => {
                if(responseType == fcc.type.ServerEventType.BET_RESULT || responseType == fcc.type.ServerEventType.FREE_SPIN_RESULT){
                    this.isResultOK = true;
                }
            }, this);
        }
        return this.responseResultObserver;
    }
}
