import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import UserMoneyChangeObserver from "../GameObserver/UserMoenyChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶金額變更時事件推撥管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
export default class UserMoneyChangeNotification implements INotificationManager {

    private readonly observer: Set<UserMoneyChangeObserver>;
    private static _instance: UserMoneyChangeNotification;

    private constructor() {
        this.observer = new Set<UserMoneyChangeObserver>();
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

    subscribe(observer: UserMoneyChangeObserver) {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, "你已註冊過該scene方向更改監聽事件,請解查")
            return;
        }
        this.observer.add(observer);
    }

    unsubscribe(observer: UserMoneyChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    notify(money: number) {
        if (this.observer.size > 0) {
            for (let method of this.observer) {
                method.pushNotification(money);
            }
        }
    }

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<UserMoneyChangeObserver> {
        return this.observer;
    }

}