import {NotificationType} from "../../Enum/NotificationType";
import ABaseNotification from "../../ABaseNotification";
import ScrollFocusStateObserver from "../../ObserverType/GameObserver/ScrollFocusStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
export default class ScrollFocusStateNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {ScrollFocusStateNotification}
     * @private
     */
    private static _instance: ScrollFocusStateNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.SCROLL_FOCUS_STATE;
    }

    /**
     * 懶漢加載,單例模式
     * @returns {ScrollFocusStateNotification}
     */
    public static get instance(): ScrollFocusStateNotification {
        if (!this._instance) {
            this._instance = new ScrollFocusStateNotification();
        }
        return this._instance;
    }

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