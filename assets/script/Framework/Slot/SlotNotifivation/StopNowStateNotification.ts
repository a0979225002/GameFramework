import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import StopNowStateObserver from "../SlotObserver/StopNowStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推撥管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
export default class StopNowStateNotification implements INotificationManager {

    private readonly observer: Set<StopNowStateObserver>;
    private static _instance: StopNowStateNotification;

    private constructor() {
        this.observer = new Set<StopNowStateObserver>();
    }

    /**
     * 懶漢加載,單例模式
     * @returns {StopNowStateNotification}
     */
    public static get instance(): StopNowStateNotification {
        if (!this._instance) {
            this._instance = new StopNowStateNotification();
        }
        return this._instance;
    }


    subscribe(observer: StopNowStateObserver, isPermanent: boolean) {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已註冊過即停事件,請檢查`);
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: StopNowStateObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    /**
     * 即停事件推撥
     */
    notify() {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification();
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<StopNowStateObserver> {
        return this.observer;
    }

}