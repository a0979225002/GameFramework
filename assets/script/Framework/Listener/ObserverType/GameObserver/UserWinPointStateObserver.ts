import ABaseObserver from "../../ABaseObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
export default class UserWinPointStateObserver extends ABaseObserver {

    constructor(callFun: (winPoint: number, level: number) => void, self) {
        super(callFun, self);
    }

    pushNotification(winPoint: number, level: number) {
        super.pushNotification(winPoint, level);
    }
}