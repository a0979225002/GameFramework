import ScrollFocusStateObserver from "../../Observer/GameObserver/ScrollFocusStateObserver";
import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
export default class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {

    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.SCROLL_FOCUS_STATE;
    }

    /**
     * 訂閱該事件
     * @param {ScrollFocusStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: ScrollFocusStateObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    notify(index: number, isShow: boolean) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(index, isShow);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}
