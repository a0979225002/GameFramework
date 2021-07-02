/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-09 下午 05:51
 * @Version 1.0
 */
export default class ResponseResultObserver implements IBaseObserver {
    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (isResultOk: boolean) => void;

    constructor(callFun: (isResultOk: boolean) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(isResultOk: boolean) {
        this.callFun.call(this.self, isResultOk);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}