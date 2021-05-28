import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import ALoadingDialogTemplate from "../../Framework/Template/LoadingDialog/ALoadingDialogTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-11 下午 05:48
 * @Version 1.0
 */
@ccclass
export default class LoadingDialogController extends ALoadingDialogTemplate {

    @property(cc.Node)
    protected loadingDialogNode: cc.Node = null;
    @property(cc.ProgressBar)
    protected progressBar: cc.ProgressBar = null;
    @property(cc.Label)
    protected progressText: cc.Label = null;

    public static instance: LoadingDialogController;

    protected onCreate() {
        LoadingDialogController.instance = this;
        this.loadingDialogNode.active = false;
    }
}

//裝飾器
export function Loading(resName: string) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = async function (...any) {
            await LoadingDialogController.instance.runProgress(resName);
            return method.call(this, ...any);
        }
    }
}