import {AutoType} from "../../Config/Enum/ConfigEnum";
import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import AutoStateChangeObserver from "../GameObserver/AutoStateChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
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

    /**
     * 訂閱該事件
     * @param {AutoStateChangeObserver} observer : 關注者
     * @param {boolean} isPermanent : 是否常駐
     */
    subscribe(observer: AutoStateChangeObserver, isPermanent: boolean) {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已註冊過自動狀態改變時事件,請檢查`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: AutoStateChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {AutoType} beforeAutoCount - 更改前的auto類型
     * @param {AutoType} afterAutoCount  - 更改後的auto類型
     */
    notify(isAutomaticState: boolean, beforeAutoCount: AutoType, afterAutoCount: AutoType) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
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