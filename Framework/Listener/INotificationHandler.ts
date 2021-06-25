/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-10 下午 04:03
 * @Version 1.0
 */
interface INotificationHandler<T extends IBaseNotification> {

    /**
     * 添加推撥者
     * @param {IBaseNotification} notification
     * @return {this}
     */
    setNotification(notification: T): this;

    /**
     * 獲取以綁定的推播者
     * @param {string} type
     * @return
     */
    getNotification(type: string): T;

    /**
     * 查看當前所有以綁定的通知
     */
    checkAllNotifications():Map<String,T>;

}