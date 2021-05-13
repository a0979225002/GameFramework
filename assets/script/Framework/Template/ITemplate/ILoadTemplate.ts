interface ILoadTemplate {

    /**
     * 初始化當前遊戲
     */
    configSetting();

    /**
     * 執行個人自定義設定
     */
    onCreat();

    /**
     * 載入主資源
     */
    onLoadResources();

    /**
     * 載入次資源
     */
    loadAssetBundle();

    /**
     * 載入外部資源
     */
    loadExternalScript();

    /**
     * 更新讀取條文字動畫
     */
    updateProgressText();

}