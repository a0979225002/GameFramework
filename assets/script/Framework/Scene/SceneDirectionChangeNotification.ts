import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {SceneDirectionType} from "./Enum/SceneStyle";
import SceneDirectionChangeObserver from "./SceneDirectionChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 場景方向改變通知管理器
 * @Date 2021-05-19 下午 01:57
 * @Version 1.0
 */
export default class SceneDirectionChangeNotification implements INotificationManager {

    private readonly observer: Set<SceneDirectionChangeObserver>;

    private static _instance: SceneDirectionChangeNotification;

    constructor() {
        this.observer = new Set<SceneDirectionChangeObserver>();
    }

    /**
     * 懶漢加載,單利模式
     * @returns {SceneDirectionChangeNotification}
     */
    public static get instance(): SceneDirectionChangeNotification {
        if (!this._instance) {
            this._instance = new SceneDirectionChangeNotification();
        }
        return this._instance;
    }

    subscribe(observer: SceneDirectionChangeObserver) {

        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, "你已註冊過該scene方向更改監聽事件,請解查")
            return;
        }

        this.observer.add(observer);
    }

    unsubscribe(observer: SceneDirectionChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }
    }

    notify(type: SceneDirectionType) {
        if (this.observer.size > 0) {
            for (let method of this.observer) {
                method.pushNotification(type);
            }
        }
    }

    getToSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<SceneDirectionChangeObserver> {
        return this.observer;
    }
}