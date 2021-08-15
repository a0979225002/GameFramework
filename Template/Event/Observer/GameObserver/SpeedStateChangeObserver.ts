import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
export default class SpeedStateChangeObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (isSpeedUp: boolean) => void, self) {
        super(callFun, self);
    }

    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
     */
    pushNotification(isSpeedUp: boolean) {
        super.pushNotification(isSpeedUp);
    }
}
