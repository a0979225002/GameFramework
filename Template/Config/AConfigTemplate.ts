import OverrideComponent from "../BaseTemplate/OverrideComponent";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
export default abstract class AConfigTemplate extends OverrideComponent {
    /**
     * 自訂義
     * @protected
     */
    protected abstract onCreat();

    /**
     * 初始化當前遊戲
     */
    protected abstract configSetting();

    /**
     * 綁定遊戲 network response module;
     */
    protected abstract responseDataModelSetting();

    /**
     * 音樂撥放樣式設定
     */
    protected abstract audioSetting();

    protected onLoad() {
        this.configSetting();                   //所有動作中需最先執行,遊戲初始設定
        this.responseDataModelSetting();        //遊戲初始接收module 創建
        this.onCreat();
    }
}