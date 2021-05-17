import {Music, Effect} from '../../Framework/Audio/AudioManager'
import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {Loading} from "./LoadingDialogController";

const {ccclass, property} = cc._decorator;

let self: FreeOpenController;

@ccclass
class FreeOpenController extends AGenericTemplate {

    @property(cc.Label)
    private freeCountLabel: cc.Label = null;

    @property(cc.Animation)
    private freeAnimation: cc.Animation = null;

    private freeCount = 0;
    private count: number = 0;

    private resolve: (value: (PromiseLike<void> | void)) => void
    private timer: number;

    public onCreate() {

        self = this;
        this.initialFreeOpen();

    }

    /**
     * 跑Free 總共次數動畫
     * @private
     */
    @Effect("GetWin")
    private freeCountAnimation() {

        if (SlotGameManager.instance.isAutoState && SlotGameManager.instance.autoType != AutoType.freeEnd) {
            self.timer = 3;
        } else {
            self.timer = 10;
        }

        if (WebResponseManager.instance.freeResult.FreeToFree != 0) {
            self.timer = 1;
        }

        self.schedule(this.addCountTimer, 0.016 * 5);

    }

    private addCountTimer() {

        self.count++;

        if (self.count > self.freeCount) {
            self.touchEndListener();

            self.scheduleOnce(self.removeFreeOpeningAnimation, self.timer)

            self.unschedule(self.addCountTimer);

            return;
        }
        self.freeCountLabel.string = String(this.count);
    }

    private touchEndListener() {

        self.freeAnimation.node.once(cc.Node.EventType.TOUCH_END, self.removeFreeOpeningAnimation, self);
        cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, self.keyboardEvent, self);
    }

    private keyboardEvent(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                self.removeFreeOpeningAnimation();
                break;
        }
    }

    /**
     * 打開free 開場動畫
     * @param {number} freeCount
     * @return {Promise<void>}
     */
    @Loading("prefab")
    public showFreeOpeningAnimation(freeCount: number): Promise<void> {

        self.playFreeAnimation(freeCount);

        self.freeAnimation.once('finished', this.freeCountAnimation, self);

        return new Promise(resolve => {

            self.resolve = resolve;

        })
    }

    @Music("GetFG")
    private playFreeAnimation(freeCount: number) {
        self.node.active = true;
        self.freeCount = freeCount;
        self.freeAnimation.play();
    }

    /**
     * 關閉free開場動畫
     */
    @Music("FBS")
    public removeFreeOpeningAnimation() {

        cc.tween(self.node)
            .to(0.4, {opacity: 0})
            .call(() => {

                self.initialFreeOpen();
                self.resolve();
            })
            .start();
    }

    private initialFreeOpen() {

        self.freeAnimation.node.off(cc.Node.EventType.TOUCH_END, self.removeFreeOpeningAnimation, self);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, self.keyboardEvent, self)
        self.unschedule(self.removeFreeOpeningAnimation);

        self.freeCountLabel.string = "";
        self.count = 0;
        self.node.active = false;
        self.freeAnimation.node.width = 0;
        self.freeAnimation.node.height = 0;
        self.node.opacity = 255;

    }

    public languageSetting() {

    }
}

export default new FreeOpenController();