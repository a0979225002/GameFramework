import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
export default class AutoStateChangeObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType) => void, self) {
        super(callFun, self);
    }

    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {fcc.type.AutoType} beforeAutoCount - 更改前的auto類型
     * @param {fcc.type.AutoType} afterAutoCount  - 更改後的auto類型
     */
    public pushNotification(isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType) {
        super.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
    }
}
