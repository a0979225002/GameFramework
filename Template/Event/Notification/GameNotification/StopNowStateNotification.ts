import StopNowStateObserver from "../../Observer/GameObserver/StopNowStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
export default class StopNowStateNotification extends fcc.ABS.ABaseNotification {

    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.STOP_NOW
    }

    /**
     * 訂閱該事件
     * @param {StopNowStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: StopNowStateObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播即停狀態事件
     */
    notify() {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification();
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}