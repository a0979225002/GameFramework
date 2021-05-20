import {AutoType} from "../../Config/Enum/ConfigEnum";
import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import AutoStateChangeObserver from "../GameObserver/AutoStateChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推撥管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
export default class AutoStateChangeNotification implements INotificationManager {

    private readonly observer: Set<AutoStateChangeObserver>;

    private static _instance: AutoStateChangeNotification;

    private constructor() {
        this.observer = new Set<AutoStateChangeObserver>();
    }

    /**
     * 懶漢加載,單例模式
     * @returns {AutoStateChangeNotification}
     */
    public static get instance(): AutoStateChangeNotification {
        if (!this._instance) {
            this._instance = new AutoStateChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: AutoStateChangeObserver) {

        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, "你已註冊過該scene方向更改監聽事件,請解查")
            return;
        }

        this.observer.add(observer);
    }

    unsubscribe(observer: AutoStateChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    notify(isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) {
        if (this.observer.size > 0) {
            for (let method of this.observer) {
                method.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
            }
        }
    }

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<AutoStateChangeObserver> {
        return this.observer;
    }


}