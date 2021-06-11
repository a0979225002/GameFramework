/**
 * @Author XIAO-LI-PIN
 * @Description (介面)通知事件管理器
 * @Date 2021-05-19 下午 02:00
 * @Version 1.0
 */
interface IBaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     */
    readonly TAG_NAME: string;

    /**
     * 訂閱該事件
     * @param {IBaseObserver} observer - 關注者
     * @param {boolean} isPermanent - 是否常駐
     */
    subscribe(observer: IBaseObserver, isPermanent: boolean): void;

    /**
     * 移除訂閱
     * @param {IBaseObserver} observer - 關注者
     */
    unsubscribe(observer: IBaseObserver): void;

    /**
     * 清除所有訂閱
     */
    removeAll():void;

    /**
     * 發送通知
     * @param any - 發送參數
     */
    notify(...any): void;

    /**
     * 獲取該事件所有訂閱數量
     */
    getSubscribeCount(): number;

    /**
     * 獲取該事件所有訂閱者
     */
    getAllSubscribe(): Set<any>;

}