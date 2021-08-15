import UserTotalBetChangeObserver from "../../Observer/GameObserver/UserTotalBetChangeObserver";
import {fcc} from "../../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
export default class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {

    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.USER_BET_CHANGE;
    }

    /**
     * 訂閱該事件
     * @param {UserTotalBetChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
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
