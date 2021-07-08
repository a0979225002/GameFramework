import {Effect, EffectStop} from '../../Framework/Audio/AudioManager'
import ALookAtTemplate from '../../Framework/Template/LookAtFrame/ALookAtTemplate'

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollFocusController extends ALookAtTemplate {

    @property(cc.Animation)
    protected allLookAtEffect: cc.Animation[] = [];
    private readonly showMaxHeight: number = 490;
    private readonly hideMinHeight: number = 160;

    protected onCreate() {
        for (let effect of this.allLookAtEffect) {
            effect.node.active = false;
        }
    }

    @EffectStop("slottrunFast")
    protected removeLookAtEffect(index: number) {
        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, {height: this.hideMinHeight})
            .call(() => {
                this.allLookAtEffect[index].node.active = false;
            })
            .start();
    }

    @Effect("slottrunFast")
    public showLookAtEffect(index: number) {
        this.allLookAtEffect[index].node.active = true;
        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, {height: this.showMaxHeight})
            .start();
    }
}