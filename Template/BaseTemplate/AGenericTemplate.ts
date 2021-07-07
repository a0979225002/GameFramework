import OverrideComponent from "./OverrideComponent";

/**
 * @Author XIAO-LI-PIN
 * @Description 通用模板
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class AGenericTemplate extends OverrideComponent {

    /**
     * 自訂義初始狀態
     */
    protected abstract onCreate(): void;

    /**
     * 語系設置
     */
    protected languageSetting(): void {};

    protected start(): void {
        this.languageSetting();
    }
}