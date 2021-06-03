import {Music, Effect} from '../../Framework/Audio/AudioManager'
import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineFreeResult from "../../Framework/WebResponse/Model/FreeResult/NoLineFreeResult";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {Loading} from "./LoadingDialogController";


const {ccclass, property} = cc._decorator;

@ccclass
export default class FreeOpenController extends AGenericTemplate {

    @property(cc.Label)
    private freeCountLabel: cc.Label = null;
    @property(cc.Animation)
    private freeAnimation: cc.Animation = null;
    private freeCount = 0;
    private count: number = 0;
    private resolve: (value: (PromiseLike<void> | void)) => void
    private timer: number;
    private CLOSING : boolean;
    private freeResult:INoLineFreeResultModel;
    public static instance: FreeOpenController;

    public onCreate() {
        FreeOpenController.instance = this;
        this.freeResult =
            WebResponseManager
                .instance<NoLineFreeResult>()
                .getResult(ResponseType.FREE);
        this.initialFreeOpen();
    }

    private initialFreeOpen() {
        this.CLOSING = false;
        this.freeCountLabel.string = "";
        this.count = 0;
        this.node.active = false;
        this.freeAnimation.node.width = 0;
        this.freeAnimation.node.height = 0;
        this.node.opacity = 255;
    }

    /**
     * 打開free 開場動畫
     * @param {number} freeCount
     * @return {Promise<void>}
     */
    @Loading("prefab")
    public showFreeOpeningAnimation(freeCount: number): Promise<void> {
        cc.log("showFreeOpeningAnimation")
        this.playFreeAnimation(freeCount);
        this.freeAnimation.once('finished', this.freeCountAnimation, this);
        return new Promise(resolve => {
            this.resolve = resolve;
        })
    }

    /**
     * 跑Free 總共次數動畫
     * @private
     */
    @Effect("GetWin")
    private freeCountAnimation() {
        cc.log("freeCountAnimation")
        if (SlotGameManager.instance.isAutoState && SlotGameManager.instance.autoType != AutoType.freeEnd) {
            this.timer = 3;
        } else {
            this.timer = 10;
        }
        if (this.freeResult.FreeToFree != 0) {
            this.timer = 1;
        }
        this.schedule(this.addCountTimer, 0.016 * 5);
    }

    private addCountTimer() {
        this.count++;
        if (this.count > this.freeCount) {
            this.touchEndListener();
            this.unschedule(this.addCountTimer);
            this.scheduleOnce(this.removeFreeOpeningAnimation, this.timer)
            return;
        }
        this.freeCountLabel.string = String(this.count);
    }

    private touchEndListener() {
        this.freeAnimation.node.once(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
    }

    private keyboardEvent(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.removeFreeOpeningAnimation();
                break;
        }
    }


    @Music("GetFG")
    private playFreeAnimation(freeCount: number) {
        this.node.active = true;
        this.freeCount = freeCount;
        this.freeAnimation.play();
    }

    /**
     * 關閉free開場動畫
     */
    @Music("FBS")
    private removeFreeOpeningAnimation() {
        this.unscheduleAllCallbacks();
        this.freeAnimation.node.off(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
        cc.tween(this.node)
            .to(0.4, {opacity: 0})
            .call(() => {
                cc.log("removeFreeOpeningAnimationCallBack")
                this.initialFreeOpen();
                this.resolve();
            })
            .start();
    }


    public languageSetting() {
    }
}