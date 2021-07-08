import OverrideComponent from "./OverrideComponent";

const {ccclass} = cc._decorator;

/**
 * 通用模板
 */
@ccclass
export default abstract class AGenericTemplate extends OverrideComponent {

    /**
     * 自訂義初始狀態
     */
    protected abstract onCreate();

    /**
     * 語系設置
     */
    protected abstract languageSetting();

    protected onLoad() {
        this.onCreate();
    }

    protected start() {

        this.languageSetting();

    }

}