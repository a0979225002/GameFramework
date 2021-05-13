import {Effect, EffectStop} from '../../Framework/Audio/AudioManager'
import ALookAtTemplate from '../../Framework/Template/LookAtFrame/ALookAtTemplate'

const {ccclass, property} = cc._decorator;

@ccclass
export default class ScrollFrameController extends ALookAtTemplate {

    @property(cc.Animation)
    public allLookAtEffect: cc.Animation[] = [];
    private showHeight: number;
    private removeHeight: number;

    protected onCreate() {

        this.showHeight = 490;
        this.removeHeight = 160;

        for (let effect of this.allLookAtEffect) {
            effect.node.active = false;
        }
    }

    @EffectStop("slottrunFast")
    protected removeLookAtEffect(index: number) {

        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, {height: this.removeHeight})
            .call(() => {
                this.allLookAtEffect[index].node.active = false;
            })
            .start();

    }

    @Effect("slottrunFast")
    public showLookAtEffect(index: number) {
        this.allLookAtEffect[index].node.active = true;
        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, {height: this.showHeight})
            .start();
    }
}