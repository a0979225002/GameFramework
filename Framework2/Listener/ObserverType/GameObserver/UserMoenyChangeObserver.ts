import ABaseObserver from "../../ABaseObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
export default class UserMoneyChangeObserver extends ABaseObserver {

    constructor(callFun: (money: number) => void, self) {
        super(callFun, self);
    }

    pushNotification(money: number) {
        super.pushNotification(money);
    }
}