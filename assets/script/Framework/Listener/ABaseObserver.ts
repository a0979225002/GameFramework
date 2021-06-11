/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-11 下午 05:03
 * @Version 1.0
 */
export default abstract class ABaseObserver implements IBaseObserver {

    private _isPermanent: boolean;
    private readonly _self: any;
    private readonly _callFun: (...any) => void;

    protected constructor(callFun: (...any) => void, self) {
        this._isPermanent = false;
        this._self = self;
        this._callFun = callFun;
    }

    public pushNotification(...any): void {
        this._callFun.call(this._self, ...any);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}