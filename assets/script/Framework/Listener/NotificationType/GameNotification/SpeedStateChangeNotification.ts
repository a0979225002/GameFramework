import {NotificationType} from "../../Enum/NotificationType";
import ABaseNotification from "../../ABaseNotification";
import SpeedStateChangeObserver from "../../ObserverType/GameObserver/SpeedStateChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推播管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
export default class SpeedStateChangeNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {SpeedStateChangeNotification}
     * @private
     */
    private static _instance: SpeedStateChangeNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.SPEED_CHANGE;
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
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
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
}