import ResponseResultObserver from "../../Observer/ResponseObserver/ResponseResultObserver";
import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : server Response結束時
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
export default class ResponseResultNotification extends fcc.ABS.ABaseNotification {

    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.RESPONSE_RESULT
    }

    /**
     * 訂閱該事件
     * @param {ResponseResultObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: ResponseResultObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} responseType - json以保存完畢
     */
    notify(responseType: string): void {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(responseType);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}
