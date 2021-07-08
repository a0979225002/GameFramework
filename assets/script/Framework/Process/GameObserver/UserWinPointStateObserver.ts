/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
export default class UserWinPointStateObserver implements IObserver {

    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (winPoint: number, level: number) => void;

    constructor(callFun: (winPoint: number, level: number) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(winPoint: number, level: number) {
        this.callFun.call(this.self, winPoint, level);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}