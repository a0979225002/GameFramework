import ABaseObserver from "../../ABaseObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 用戶更換的押住時,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:12
 * @Version 1.0
 */
export default class UserTotalBetChangeObserver extends ABaseObserver {

    constructor(callFun: (beforeIndex: number, afterIndex: number) => void, self) {
        super(callFun, self);
    }

    pushNotification(beforeIndex: number, afterIndex: number) {
        super.pushNotification(beforeIndex, afterIndex);
    }
}