import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import {fcc} from "../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @FIXME: 程式碼須修復
 * @Description 進度讀取diaLog模板
 * @Date 2021-05-11 下午 05:41
 * @Version 1.0
 */
export default abstract class ALoadingFrameTemplate extends AGenericTemplate {

    protected abstract loadingDialogNode: cc.Node;
    protected abstract progressBar: cc.ProgressBar;
    protected abstract progressText: cc.Label;
    protected progressValue: number;
    protected timeOut: number;
    protected addProgressValue;
    private timer: number;

    protected onLoad() {
        this.loadingInitialize();
        super.onLoad();
    }

    /**
     * 初始化讀取條
     * @private
     */
    private loadingInitialize() {
        this.loadingDialogNode.active = true    //打開組件
        this.loadingDialogNode.opacity = 255    //初使讀取條視窗透明度為0
        this.timer = null;                      //初始setInterval 計時器
        this.progressText.string = ""           //初始進度條"..."字串為空
        this.progressValue = 0;                 //初始進度條 = 0;
        this.timeOut = 50;                      //初始每跑一次的停留時間
        this.addProgressValue = 0.005           //初始每跑一次初始進度值
    }

    public runProgress(resName: string): Promise<void> {
        this.loadingInitialize();
        return new Promise<void>(resolve => {
            if (!this.checkHasRes(resName, resolve)) return;
            this.progressTimer("", resName, resolve);
        })
    }

    private progressTimer(progressText: string, resName: string, resolve: (value: (PromiseLike<void> | void)) => void) {

        this.timer = window.setInterval(() => {
            if (this.progressValue > 1) {
                this.progressValue = 0;
            }

            if (progressText.length > 3) {
                progressText = "";
            }

            this.progressText.string = progressText;
            this.progressBar.progress = this.progressValue;
            this.progressValue = this.progressValue + this.progressValue;
            progressText += ".";

            if (fcc.loadMgr.secondaryLoadState.get(resName) == 1) {
                if (this.progressValue >= 1) {
                    this.closeLoadingDiaLog(resolve);
                }
                if (this.addProgressValue != 0.1) this.addProgressValue = 0.05;
            }
        }, this.timeOut)
    }

    private closeLoadingDiaLog(resolve: (value: (PromiseLike<void> | void)) => void) {

        cc.tween(this.loadingDialogNode)
            .to(0.2, {opacity: 0})
            .call(() => {
                this.loadingDialogNode.active = false;
                resolve();
            })
    }


    /**
     * 確認當下該資源是否正在加載
     * @param {string} resName
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @returns {boolean}
     * @private
     */
    private checkHasRes(resName: string, resolve: (value: (PromiseLike<void> | void)) => void): boolean {

        if (!fcc.loadMgr.secondaryLoadState.has(resName)) {
            fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, `${resName}該無該資源`);
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        if (fcc.loadMgr.secondaryLoadState.get(resName) == 1) {
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        return true;
    }
}
