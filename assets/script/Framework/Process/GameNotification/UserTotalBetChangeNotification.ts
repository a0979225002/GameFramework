import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import UserTotalBetChangeObserver from "../GameObserver/UserTotalBetChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
export default class UserTotalBetChangeNotification implements INotificationManager {

    private readonly observer: Set<UserTotalBetChangeObserver>;

    private static _instance: UserTotalBetChangeNotification;

    private constructor() {
        this.observer = new Set<UserTotalBetChangeObserver>();
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
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已註冊過用戶更換的押住金額監聽事件,請檢察`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: UserTotalBetChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    /**
     * 推波用戶更換的押住金額index
     * @param {number} beforeIndex
     * @param {number} afterIndex
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

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<UserTotalBetChangeObserver> {
        return this.observer;
    }
}