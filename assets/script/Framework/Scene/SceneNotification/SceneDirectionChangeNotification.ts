import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import {SceneDirectionType} from "../Enum/SceneStyle";
import SceneDirectionChangeObserver from "../SceneObserver/SceneDirectionChangeObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 場景方向改變通知管理器
 * @Date 2021-05-19 下午 01:57
 * @Version 1.0
 */
export default class SceneDirectionChangeNotification implements INotificationManager {

    private readonly observer: Set<SceneDirectionChangeObserver>;

    private static _instance: SceneDirectionChangeNotification;

    private constructor() {
        this.observer = new Set<SceneDirectionChangeObserver>();
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

    /**
     * 添加scene,更換方向時,推播事件
     * @param {SceneDirectionChangeObserver} observer : 推撥對象
     * @param {boolean} isPermanent
     */
    subscribe(observer: SceneDirectionChangeObserver, isPermanent: boolean) {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已註冊過該scene方向更改監聽事件,請檢察`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    }

    unsubscribe(observer: SceneDirectionChangeObserver) {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        }else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW,`${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

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

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<SceneDirectionChangeObserver> {
        return this.observer;
    }
}