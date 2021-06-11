import ABaseObserver from "../../ABaseObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
export default class SpeedStateChangeObserver extends ABaseObserver {

    constructor(callFun: (isSpeedUp: boolean) => void, self) {
        super(callFun, self);
    }

    pushNotification(isSpeedUp: boolean) {
        super.pushNotification(isSpeedUp);
    }
}