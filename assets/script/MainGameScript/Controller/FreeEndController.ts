import AudioManager, {Music, EffectStop, Effect} from '../../Framework/Audio/AudioManager'
import {Loading} from "./LoadingDialogController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FreeEndController extends cc.Component {

    @property(cc.Label)
    private totalWinPoint: cc.Label = null;

    private startNum: number;
    private isCanRunPoint: boolean;
    private point: number;
    private time: number;
    private numberFormat: Intl.NumberFormat
    private resolve: (value: (PromiseLike<void> | void)) => void
    public static instance :FreeEndController;

    protected onLoad() {
        FreeEndController.instance = this;
        this.node.active = false;
        this.numberFormat = new Intl.NumberFormat();

    }

    private initializeFreeEnd() {
        this.resolve = null;
        this.startNum = 0;
        this.totalWinPoint.string = "";
    }
    @Loading("prefab")
    public showFreeEnd(point: number, time: number): Promise<void> {

        this.initializeFreeEnd();
        this.node.active = true;
        this.point = point;
        this.time = time;

        return new Promise<void>(resolve => {
            this.runPoint();
            this.resolve = resolve;
        })
    }

    @EffectStop("runPoint")
    private closeFreeEnd() {
        this.startNum = this.point;
        this.isCanRunPoint = false;
        this.totalWinPoint.string = "$" + this.numberFormat.format(this.startNum);

        setTimeout(() => {
            this.node.active = false;
            AudioManager.instance.musicPlay("NBS");
            this.resolve();
        }, 3000)
    }

    @Effect("runPoint")
    @Music("FGBigWin")
    private runPoint() {
        this.isCanRunPoint = true;
    }

    protected update(dt: number) {

        if (this.isCanRunPoint) {

            this.startNum += this.point / this.time * dt;

            if (this.startNum > this.point) {
                this.closeFreeEnd();
                return;
            }

            let nowPoint = this.numberFormat.format(Math.floor(this.startNum * 10) / 10);
            if (nowPoint.indexOf(".") == -1) {
                nowPoint = nowPoint + ".0"
            }
            this.totalWinPoint.string = `$${nowPoint}`;
        }
    }
}