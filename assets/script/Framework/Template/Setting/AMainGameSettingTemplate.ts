const {ccclass} = cc._decorator;

@ccclass
export default abstract class AMainGameSettingTemplate extends cc.Component {

    protected onLoad() {

        this.setHistoryDetail();
        this.prefabInstantiate();
        this.gameProcedureSetting();
        this.audioSetting();
        this.onCreate();

    }

    /**
     * 自訂初始
     */
    protected abstract onCreate();

    /**
     * 建立詳情頁面
     */
    protected abstract setHistoryDetail();

    /**
     * 遊戲流程建立
     */
    protected abstract gameProcedureSetting();

    /**
     * 音樂初始設定
     */
    protected abstract audioSetting();

    /**
     * 實例化所有動態加載的prefab
     */
    protected abstract prefabInstantiate();


}