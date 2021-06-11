import {SceneDirectionType} from "../../../Scene/Enum/SceneStyle";
import ABaseNotification from "../../ABaseNotification";
import {NotificationType} from "../../Enum/NotificationType";
import SceneDirectionChangeObserver from "../../ObserverType/SceneObserver/SceneDirectionChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 場景方向改變通知管理器
 * @Date 2021-05-19 下午 01:57
 * @Version 1.0
 */
export default class SceneDirectionChangeNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {SceneDirectionChangeNotification}
     * @private
     */
    private static _instance: SceneDirectionChangeNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.SCENE_DIRECTION_CHANGE
    }

    /**
     * 懶漢加載,單例模式
     * @returns {SceneDirectionChangeNotification}
     */
    public static get instance(): SceneDirectionChangeNotification {
        if (!this._instance) {
            this._instance = new SceneDirectionChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: SceneDirectionChangeObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 用戶更換方向時推送通知
     * @param {SceneDirectionType} type : 當前用戶方向
     */
    notify(type: SceneDirectionType) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(type);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}