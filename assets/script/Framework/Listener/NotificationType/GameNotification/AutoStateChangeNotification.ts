import {AutoType} from "../../../Config/Enum/AutoType";
import {NotificationType} from "../../Enum/NotificationType";
import ABaseNotification from "../../ABaseNotification";
import AutoStateChangeObserver from "../../ObserverType/GameObserver/AutoStateChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
export default class AutoStateChangeNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {AutoStateChangeNotification}
     * @private
     */
    private static _instance: AutoStateChangeNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.AUTO_CHANGE;
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

    subscribe(observer: AutoStateChangeObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
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
}