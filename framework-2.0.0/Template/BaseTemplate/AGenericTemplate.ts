import BaseComponent from "./BaseComponent";

/**
 * @Author XIAO-LI-PIN
 * @Description 通用模板
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class AGenericTemplate extends BaseComponent {

    /**
     * 自訂義初始狀態
     */
    protected abstract onCreate(): void;

    /**
     * 語系設置
     */
    protected languageSetting(): void {
    };

    protected onLoad() {
        this.onCreate();
        this.initialNotification();
    }

    protected start(): void {
        this.languageSetting();
        this.initialUIView();
    }

    /**
     * 初始UI物件
     * @protected
     */
    protected initialUIView() {
    };

    /**
     * 初始推播監聽
     * @protected
     */
    protected initialNotification() {
    };
}
