import {NotificationType} from "../../Enum/NotificationType";
import ABaseNotification from "../../ABaseNotification";
import StopNowStateObserver from "../../ObserverType/GameObserver/StopNowStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
export default class StopNowStateNotification extends ABaseNotification {

    public readonly TAG_NAME: string;
    private static _instance: StopNowStateNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.SCENE_DIRECTION_CHANGE
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
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播即停狀態事件
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
}