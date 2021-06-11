import ABaseNotification from "../../ABaseNotification";
import {NotificationType} from "../../Enum/NotificationType";
import UserWinPointStateObserver from "../../ObserverType/GameObserver/UserWinPointStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
export default class UserWinPointStateNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {UserWinPointStateNotification}
     * @private
     */
    private static _instance: UserWinPointStateNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.USER_GET_WIN;
    }

    /**
     * 懶漢加載,單例模式
     * @returns {UserTotalBetChangeNotification}
     */
    public static get instance(): UserWinPointStateNotification {
        if (!this._instance) {
            this._instance = new UserWinPointStateNotification();
        }
        return this._instance;
    }

    subscribe(observer: UserWinPointStateObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 當用戶有贏分時推波當前贏分分數
     * @param {number} winPoint : 當前贏分分數
     * @param {number} level : 當前贏分等級
     */
    notify(winPoint: number, level: number) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(winPoint, level);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}