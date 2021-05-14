import {GameEventType} from '../Listener/Enum/gameEventType'
import EventManager from '../Listener/EventManager'
import SlotGameManager from '../Procedure/SlotGameManager'
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

    protected constructor(styleData: StyleData) {

        this.isSpeedUp = SlotGameManager.instance.isSpeedUp;
        this.styleData = styleData
        this.speed = 1;
        this.immediateStopEventListener();
        this.speedUpEventListener();

    }

    private immediateStopEventListener() {

        EventManager.instance.gameEventListener(GameEventType.IMMEDIATE_STOP, () => {

            this.isSlotImmediateStop = true;

        }, false);
    }

    private speedUpEventListener() {

        EventManager.instance.gameEventListener(GameEventType.SPEED_UP, (speedState: boolean) => {

            //更新加速率,如果關閉加速模式莫認為 1 一般倍率
            speedState ? this.speed = this.styleData.speedUpMultiple : this.speed = 1;

        }, false);
    }

    public abstract runSlotAnimation(): Promise<void>;

    public abstract sineInSlot(): Promise<void>;


}