import {AutoType} from "../../Config/Enum/ConfigEnum";

/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推撥給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
export default class AutoStateChangeObserver implements IObserver {

    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void;

    constructor(callFun: (isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) {
        this.callFun.call(this.self, isAutomaticState, beforeAutoCount, afterAutoCount);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}