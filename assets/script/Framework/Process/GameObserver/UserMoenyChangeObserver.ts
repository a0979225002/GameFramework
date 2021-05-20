/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推撥給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
export default class UserMoneyChangeObserver implements IObserver {

    private readonly self: any;
    private readonly callFun: (money: number) => void;

    constructor(callFun: (money: number) => void, self) {
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(money: number) {
        this.callFun.call(this.self, money);
    }
}