import OverrideComponent from "../BaseTemplate/OverrideComponent";

export default abstract class ASettingTemplate extends OverrideComponent {

    protected onLoad() {

        this.setHistoryDetail();
        this.prefabInstantiate();
        this.gameProcessSetting();
        this.audioSetting();
        this.onCreate();
    }

    /**
     * 自訂初始
     */
    protected abstract onCreate();

    /**
     * 建立詳單頁面
     */
    protected abstract setHistoryDetail();

    /**
     * 遊戲流程建立
     */
    protected abstract gameProcessSetting();

    /**
     * 音樂初始設定
     */
    protected abstract audioSetting();

    /**
     * 實例化所有動態加載的prefab
     */
    protected abstract prefabInstantiate();


}