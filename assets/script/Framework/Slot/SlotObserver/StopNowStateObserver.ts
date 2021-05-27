/**
 * @Author XIAO-LI-PIN
 * @Description 即停狀態通知時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
export default class StopNowStateObserver implements IObserver {
    private _isPermanent: boolean;

    private readonly self: any;
    private readonly callFun: () => void;

    constructor(callFun: () => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification() {
        this.callFun.call(this.self);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}