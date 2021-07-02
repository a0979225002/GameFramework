import ABaseObserver from "../../ABaseObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 即停狀態通知時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
export default class StopNowStateObserver extends ABaseObserver {

    constructor(callFun: () => void, self) {
        super(callFun, self);
    }

    pushNotification() {
        super.pushNotification();
    }
}