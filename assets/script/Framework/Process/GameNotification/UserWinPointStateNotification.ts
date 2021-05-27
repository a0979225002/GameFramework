import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import UserWinPointStateObserver from "../GameObserver/UserWinPointStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
export default class UserWinPointStateNotification implements INotificationManager {

    private readonly observer: Set<UserWinPointStateObserver>;

    private static _instance: UserWinPointStateNotification;

    private constructor() {
        this.observer = new Set<UserWinPointStateObserver>();
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
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已註冊過用戶贏分時狀態推播事件,請檢察`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: UserWinPointStateObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
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

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<UserWinPointStateObserver> {
        return this.observer;
    }
}