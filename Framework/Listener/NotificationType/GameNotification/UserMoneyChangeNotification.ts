import UserMoneyChangeObserver from "../../ObserverType/GameObserver/UserMoenyChangeObserver";
import ABaseNotification from "../../ABaseNotification";
import {NotificationType} from "../../Enum/NotificationType";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶金額變更時事件推播管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
export default class UserMoneyChangeNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {UserMoneyChangeNotification}
     * @private
     */
    private static _instance: UserMoneyChangeNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.USER_MONEY_CHANGE;
    }

    /**
     * 懶漢加載,單例模式
     * @returns {UserMoneyChangeNotification}
     */
    public static get instance(): UserMoneyChangeNotification {
        if (!this._instance) {
            this._instance = new UserMoneyChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: UserMoneyChangeObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    notify(money: number) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(money);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}