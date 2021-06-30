import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import LoadResManager from "../../Load/LoadResManager";
import OverrideComponent from "../BaseTemplate/OverrideComponent";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-11 下午 05:41
 * @Version 1.0
 */
export default abstract class ALoadingFrameTemplate extends OverrideComponent {

    protected abstract loadingDialogNode: cc.Node;
    protected abstract progressBar: cc.ProgressBar;
    protected abstract progressText: cc.Label;
    protected progressValue: number;
    protected timeOut: number;
    protected addProgressValue;
    private timer: number;

    protected abstract onCreate();

    protected onLoad() {
        this.loadingInitialize();
        this.onCreate();
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

            if (LoadResManager.instance.secondaryLoadState.get(resName) == 1) {
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

        if (!LoadResManager.instance.secondaryLoadState.has(resName)) {
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, `${resName}該無該資源`);
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        if (LoadResManager.instance.secondaryLoadState.get(resName) == 1) {
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        return true;
    }

}