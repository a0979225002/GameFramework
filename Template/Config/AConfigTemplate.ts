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
    protected abstract configSetting():void;

    /**
     * 綁定遊戲 network response module;
     */
    protected abstract responseDataModelSetting():void;

    /**
     * 音樂撥放樣式設定
     */
    protected abstract audioSetting():void;

    /**
     * 遊戲流程設定
     * @protected
     */
    protected abstract processSetting():void;

    protected onLoad() {
        this.configSetting();                   //所有動作中需最先執行,遊戲初始設定
        this.responseDataModelSetting();        //遊戲初始接收module 創建
        this.processSetting();                  //遊戲流程創建
        super.onLoad();
    }
}