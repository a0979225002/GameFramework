import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import SpeedStateChangeObserver from "../GameObserver/SpeedStateChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推撥管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
export default class SpeedStateChangeNotification implements INotificationManager {

    private readonly observer: Set<SpeedStateChangeObserver>;

    private static _instance: SpeedStateChangeNotification;

    private constructor() {
        this.observer = new Set<SpeedStateChangeObserver>();
    }

    /**
     * 懶漢加載,單例模式
     * @returns {SpeedStateChangeNotification}
     */
    public static get instance(): SpeedStateChangeNotification {
        if (!this._instance) {
            this._instance = new SpeedStateChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: SpeedStateChangeObserver, isPermanent: boolean) {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已將該類註冊過遊戲速度狀態改變時事件推撥事件了,請檢查`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: SpeedStateChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }

    }

    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp : 要開啟加速,還是關閉加速
     */
    notify(isSpeedUp: boolean) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isSpeedUp);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<SpeedStateChangeObserver> {
        return this.observer;
    }
}