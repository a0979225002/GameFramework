import SlotRowEndObserver from "../../Observer/GameObserver/SlotRowEndObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 監聽SLOT所有列,當該列結束時,推播事件
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
export default class SlotRowEndNotification extends fcc.ABS.ABaseNotification {

    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.SLOT_ROW_END;
    }

    /**
     * 訂閱該事件
     * @param {UserWinPointStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: SlotRowEndObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * SLOT哪一列已經執行結束
     * @param {number} rowIndex - 第幾列結束
     * @param {boolean} isAllRowEnd - 是否全軸一起停止
     */
    notify(rowIndex: number, isAllRowEnd: boolean) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(rowIndex, isAllRowEnd);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}
