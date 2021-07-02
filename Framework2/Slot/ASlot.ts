import SpeedStateChangeNotification from "../Listener/NotificationType/GameNotification/SpeedStateChangeNotification";
import SpeedStateChangeObserver from "../Listener/ObserverType/GameObserver/SpeedStateChangeObserver";
import SlotProcessManager from '../Process/SlotProcessManager'
import StopNowStateNotification from "../Listener/NotificationType/GameNotification/StopNowStateNotification";
import StopNowStateObserver from "../Listener/ObserverType/GameObserver/StopNowStateObserver";
import {StyleData} from './SlotStyleManager'

export default abstract class ASlot implements ISlot {

    protected styleData: StyleData;

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
     * 加速速率 : 無加速狀態 = 1
     * @type {number}
     * @protected
     */
    protected speed: number;

    protected stopNowStateObserver: StopNowStateObserver;
    protected speedStateChangeObserver: SpeedStateChangeObserver;

    protected constructor(styleData: StyleData) {

        this.isSpeedUp = SlotProcessManager.instance.isSpeedUp;
        this.styleData = styleData
        this.speed = 1;

        StopNowStateNotification
            .instance.subscribe(this.getStopNowStateObserver(), true);
        SpeedStateChangeNotification
            .instance.subscribe(this.getSpeedStateChangeObserver(), true);

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
                isSpeedUp ? this.speed = this.styleData.speedUpMultiple : this.speed = 1;
            }, this);
        }
        return this.speedStateChangeObserver;
    }

    public abstract runSlotAnimation(): Promise<void>;

    public abstract sineInSlot(): Promise<void>;


}