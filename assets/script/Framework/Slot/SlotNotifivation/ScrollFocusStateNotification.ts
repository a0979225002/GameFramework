import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import ScrollFocusStateObserver from "../SlotObserver/ScrollFocusStateObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推撥管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
export default class ScrollFocusStateNotification implements INotificationManager {

    private readonly observer: Set<ScrollFocusStateObserver>;

    private static _instance: ScrollFocusStateNotification;

    private constructor() {
        this.observer = new Set<ScrollFocusStateObserver>();
    }

    /**
     * 懶漢加載,單例模式
     * @returns {ScrollFocusStateNotification}
     */
    public static get instance(): ScrollFocusStateNotification {
        if (!this._instance) {
            this._instance = new ScrollFocusStateNotification();
        }
        return this._instance;
    }

    subscribe(observer: ScrollFocusStateObserver, isPermanent: boolean) {

        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, `${observer} 該類已經註冊過瞇牌時的狀態事件,請檢查`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);

    }

    unsubscribe(observer: ScrollFocusStateObserver) {

        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.GameProcessFW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    }

    /**
     * 推送瞇排事件
     * @param {number} index : 需要操作哪個列
     * @param {boolean} isShow : 要顯示還關閉
     */
    notify(index:number,isShow: boolean) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(index, isShow);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }

    getSubscribeCount(): number {
        return this.observer.size;
    }

    getAllSubscribe(): Set<ScrollFocusStateObserver> {
        return this.observer;
    }
}