import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 當server回傳結果時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-06-09 下午 05:51
 * @Version 1.0
 */
export default class ResponseResultObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (responseType:string) => void, self) {
        super(callFun, self);
    }

    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} responseType - json以保存完畢
     */
    pushNotification(responseType:string): void {
        super.pushNotification(responseType)
    }
}
