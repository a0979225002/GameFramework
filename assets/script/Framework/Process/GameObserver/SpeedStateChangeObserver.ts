/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
export default class SpeedStateChangeObserver implements IObserver {

    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (isSpeedUp: boolean) => void;

    constructor(callFun: (isSpeedUp: boolean) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(isSpeedUp: boolean) {
        this.callFun.call(this.self, isSpeedUp);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}