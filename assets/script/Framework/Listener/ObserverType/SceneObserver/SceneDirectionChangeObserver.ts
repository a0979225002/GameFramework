import {SceneDirectionType} from "../../../Scene/Enum/SceneStyle";

/**
 * @Author XIAO-LI-PIN
 * @Description 場景方向改變觀察者,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-19 下午 01:46
 * @Version 1.0
 */
export default class SceneDirectionChangeObserver implements IBaseObserver {
    private _isPermanent: boolean;
    private readonly self: any;
    private readonly callFun: (type: SceneDirectionType) => void;

    constructor(callFun: (type: SceneDirectionType) => void, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }

    pushNotification(type: SceneDirectionType) {
        this.callFun.call(this.self, type);
    }

    get isPermanent(): boolean {
        return this._isPermanent;
    }

    set isPermanent(value: boolean) {
        this._isPermanent = value;
    }
}