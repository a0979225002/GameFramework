/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
export default class ScrollFocusStateObserver implements IObserver {
    private _isPermanent: boolean;

    private readonly self: any;
    private readonly callFun: (index: number, isShow: boolean) => void;

    constructor(callFun: (index: number, isShow: boolean) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(index: number, isShow: boolean) {
        this.callFun.call(this.self, index, isShow);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}