/**
 * @Author XIAO-LI-PIN
 * @Description 所有的通知推波實作接繼承這個介面
 * @Date 2021-05-19 下午 12:05
 * @Version 1.0
 */
interface IBaseObserver {

     isPermanent: boolean;

    /**
     * 推波通知
     */
    pushNotification(...any): void;

}