import ErrorManager from "../Error/ErrorManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-10 上午 11:12
 * @Version 1.0
 */
export default abstract class ABaseNotification implements IBaseNotification {

    /**
     * (抽象)NotificationHandler 用來獲取這個class的標籤
     * 詳細由子類實現
     */
    public abstract readonly TAG_NAME: string;

    /**
     * 觀察者
     * @type {Set<IBaseObserver>}
     * @protected
     */
    protected readonly observer: Set<IBaseObserver>;

    /**
     * 推播者
     * @type {IBaseNotification}
     */
    public static instance: IBaseNotification;

    /**
     * (抽象)推播事件,參數由子類詳細實現
     * @param any
     */
    public abstract notify(...any): void;

    protected constructor() {
        this.observer = new Set<IBaseObserver>();
    }

    /**
     * 訂閱該事件
     * @param {IBaseObserver} observer - 關注者
     * @param {boolean} isPermanent - 是否常駐
     */
    public subscribe(observer: IBaseObserver, isPermanent: boolean): void {
        if (this.observer.has(observer)) {
            ErrorManager.instance.executeError(ErrorType.SCENE_FW, `${observer} 該IBaseObserver已註冊過自動狀態改變時事件,請檢查`)
            return;
        }
        observer.isPermanent = isPermanent;
        this.observer.add(observer);
    };

    /**
     * 移除訂閱
     * @param {IBaseObserver} observer - 關注者
     */
    public unsubscribe(observer: IBaseObserver): void {
        if (this.observer.has(observer)) {
            this.observer.delete(observer);
        } else {
            ErrorManager.instance.executeError(ErrorType.PROCESS_FW, `${observer} : 該觀察類尚未綁定過,無須移除觀察對象`);
        }
    };

    /**
     * 移除所有訂閱
     */
    removeAll(): void {
        this.observer.clear();
    }

    /**
     * 獲取該事件所有訂閱數量
     */
    public getSubscribeCount(): number {
        return this.observer.size;
    };

    /**
     * 獲取該事件所有訂閱者
     */
    public getAllSubscribe(): Set<IBaseObserver> {
        return this.observer;
    };
}