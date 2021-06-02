/**
 * @Author XIAO-LI-PIN
 * @Description (介面)通知事件管理器
 * @Date 2021-05-19 下午 02:00
 * @Version 1.0
 */
interface INotificationManager {

    /**
     * 訂閱該事件
     * @param {IObserver} observer : 關注者
     * @param {boolean} isPermanent : 是否常駐
     */
    subscribe(observer:IObserver,isPermanent:boolean):void;

    /**
     * 移除訂閱
     * @param {IObserver} observer : 關注者
     */
    unsubscribe(observer:IObserver):void;

    /**
     * 發送通知
     * @param any
     */
    notify(...any):void;

    /**
     * 獲取該事件所有訂閱數量
     */
    getSubscribeCount():number;

    /**
     * 獲取該事件所有訂閱者
     */
    getAllSubscribe():Set<any>;

}