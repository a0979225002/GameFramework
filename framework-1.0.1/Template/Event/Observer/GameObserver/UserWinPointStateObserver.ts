import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
export default class UserWinPointStateObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (winPoint: number, level: number) => void, self) {
        super(callFun, self);
    }

    /**
     * 當用戶有贏分時推播當前贏分分數
     * @param {number} winPoint - 當前贏分分數
     * @param {number} level - 當前贏分等級
     */
    pushNotification(winPoint: number, level: number) {
        super.pushNotification(winPoint, level);
    }
}
