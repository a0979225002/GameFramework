import AGenericTemplate from "../BaseTemplate/AGenericTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
export default abstract class AConfigTemplate extends AGenericTemplate {

    /**
     * 初始化當前遊戲
     */
    protected abstract configSetting(): void;


    /**
     * 初始Client參數
     * @protected
     */
    protected abstract initClient(): void;


    /**
     * 音樂撥放樣式設定
     */
    protected abstract audioSetting(): void;

    /**
     * 遊戲流程創建
     * @protected
     */
    protected abstract processCreate(): void;

    protected onLoad() {
        this.initClient();                  //初始Client參數
        this.configSetting();               //所有動作中需最先執行,遊戲初始設定
        this.audioSetting();                //音樂撥放樣式設定
        this.processCreate();               //遊戲流程創建
        super.onLoad();
    }
}
