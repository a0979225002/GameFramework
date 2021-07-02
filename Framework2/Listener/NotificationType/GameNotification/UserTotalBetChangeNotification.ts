import ABaseNotification from "../../ABaseNotification";
import {NotificationType} from "../../Enum/NotificationType";
import UserTotalBetChangeObserver from "../../ObserverType/GameObserver/UserTotalBetChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
export default class UserTotalBetChangeNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {UserTotalBetChangeNotification}
     * @private
     */
    private static _instance: UserTotalBetChangeNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.USER_BET_CHANGE;
    }

    /**
     * 懶漢加載,單例模式
     * @returns {UserTotalBetChangeNotification}
     */
    public static get instance(): UserTotalBetChangeNotification {
        if (!this._instance) {
            this._instance = new UserTotalBetChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: UserTotalBetChangeObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播用戶更換的押住倍率 index
     * @param {number} beforeIndex - user更動前的押住 index
     * @param {number} afterIndex - user 更動後的押住 index
     */
    notify(beforeIndex: number, afterIndex: number) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(beforeIndex, afterIndex);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}