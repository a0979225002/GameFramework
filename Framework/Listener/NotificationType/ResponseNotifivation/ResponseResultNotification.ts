import ABaseNotification from "../../ABaseNotification";
import {NotificationType} from "../../Enum/NotificationType";
import ResponseResultObserver from "../../ObserverType/ResponseObserver/ResponseResultObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
export default class ResponseResultNotification extends ABaseNotification {

    /**
     * NotificationHandler 用來獲取這個class的標籤
     * @type {string}
     */
    public readonly TAG_NAME: string;

    /**
     * 懶漢加載
     * @type {ResponseResultNotification}
     * @private
     */
    private static _instance: ResponseResultNotification;

    private constructor() {
        super();
        this.TAG_NAME = NotificationType.RESPONSE_RESULT
    }

    /**
     * 懶漢加載,單例模式
     * @returns {ResponseResultNotification}
     */
    public static get instance(): ResponseResultNotification {
        if (!this._instance) {
            this._instance = new ResponseResultNotification();
        }
        return this._instance;
    }

    subscribe(observer: ResponseResultObserver, isPermanent: boolean) {
        super.subscribe(observer, isPermanent);
    }

    /**
     * 推播該局Server是否已回傳正確答案
     * @param {boolean} isResultOk - 初始化 or 回傳成功
     */
    notify(isResultOk: boolean): void {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isResultOk);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }

}