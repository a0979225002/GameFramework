import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
export default class UserMoneyChangeObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (money: number) => void, self) {
        super(callFun, self);
    }

    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    pushNotification(money: number) {
        super.pushNotification(money);
    }
}
