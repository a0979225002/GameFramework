import AudioManager, {Music, EffectStop, Effect} from '../../Framework/Audio/AudioManager'
import {Loading} from "./LoadingDialogController";

const {ccclass, property} = cc._decorator;

let self: FreeEndController;

@ccclass
class FreeEndController extends cc.Component {

    @property(cc.Label)
    private totalWinPoint: cc.Label = null;

    private startNum: number;
    private isCanRunPoint: boolean;
    private point: number;
    private time: number;
    private numberFormat: Intl.NumberFormat
    private resolve: (value: (PromiseLike<void> | void)) => void

    protected onLoad() {
        self = this;
        this.node.active = false;
        this.numberFormat = new Intl.NumberFormat();

    }

    private initializeFreeEnd() {
        self.resolve = null;
        self.startNum = 0;
        self.totalWinPoint.string = "";
    }
    @Loading("prefab")
    public showFreeEnd(point: number, time: number): Promise<void> {

        self.initializeFreeEnd();
        self.node.active = true;
        self.point = point;
        self.time = time;

        return new Promise<void>(resolve => {
            self.runPoint();
            self.resolve = resolve;
        })
    }

    @EffectStop("runPoint")
    private closeFreeEnd() {
        self.startNum = self.point;
        self.isCanRunPoint = false;
        self.totalWinPoint.string = "$" + self.numberFormat.format(self.startNum);

        setTimeout(() => {
            self.node.active = false;
            AudioManager.instance.musicPlay("NBS");
            self.resolve();
        }, 3000)
    }

    @Effect("runPoint")
    @Music("FGBigWin")
    private runPoint() {
        self.isCanRunPoint = true;
    }

    protected update(dt: number) {

        if (self.isCanRunPoint) {

            self.startNum += self.point / self.time * dt;

            if (self.startNum > self.point) {
                self.closeFreeEnd();
                return;
            }

            let nowPoint = self.numberFormat.format(Math.floor(self.startNum * 10) / 10);
            if (nowPoint.indexOf(".") == -1) {
                nowPoint = nowPoint + ".0"
            }
            self.totalWinPoint.string = `$${nowPoint}`;

        }
    }
}

export default new FreeEndController();