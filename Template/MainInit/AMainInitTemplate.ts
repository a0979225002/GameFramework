import AGenericTemplate from "../BaseTemplate/AGenericTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 進入主遊戲時需初始的操作
 * @Date 2021-07-01 下午 20:24
 * @Version 0.0.3
 */
export default abstract class AMainInitTemplate extends AGenericTemplate {

    protected onLoad() {
        this.setHistoryDetail();        //建立詳單頁面
        this.prefabInstantiate();       //實例化所有動態加載的prefab
        this.onCreate();                //自訂初始
    }

    /**
     * 建立詳單頁面
     */
    protected abstract setHistoryDetail();

    /**
     * 實例化所有動態加載的prefab
     */
    protected abstract prefabInstantiate();

}