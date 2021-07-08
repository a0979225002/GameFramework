import AMenuButtonTemplate from "./AMenuButtonTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,單一按鈕配置
 * @Example 單一方向遊戲
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
export default abstract class AMenuDoubleButtonTemplate extends AMenuButtonTemplate {

    /**
     * 背景音樂按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButton: cc.Button;

    /**
     * 效果音樂按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButton: cc.Button;

    /**
     * 押住籌碼提高按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButton: cc.Button;

    /**
     * 押住籌碼降低按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButton: cc.Button;

    /**
     * 自動按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButton: cc.Button;

    /**
     * 自動50次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50Button: cc.Button;

    /**
     * 自動100次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100Button: cc.Button;

    /**
     * 自動500次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500Button: cc.Button;

    /**
     * 自動1000次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000Button: cc.Button;

    /**
     * 自動直到免費後停止按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButton: cc.Button;

    /**
     * 離開菜單頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButton: cc.Button;

    /**
     * 離開遊戲按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButton: cc.Button;

    /**
     * 進入紀錄頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButton: cc.Button;

    /**
     * 進入設定頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButton: cc.Button;

    /**
     * 進入說明頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButton: cc.Button;


    protected onLoad():void {
        super.onLoad();
        /*背景音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.musicButton,
                "musicEventListener",
                this
            );

        /*效果音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.effectButton,
                "effectEventListener",
                this
            );

        /*押住籌碼提高按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.betUpButton,
                "betUpEventListener",
                this
            );

        /*押住籌碼降低按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.betDownButton,
                "betDownEventListener",
                this
            );

        /*自動50次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto50Button,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_50
            );

        /*自動100次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto100Button,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_100
            );

        /*自動500次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto500Button,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_500
            );

        /*自動1000次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto1000Button,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_1000
            );

        /*自動直到免費後停止按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.autoFreeEndButton,
                "autoButtonEventListener",
                this, fcc.type.AutoType.FREE_END
            );

        /*自動按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.autoButton,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO
            );

        /*返回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goBackButton,
                "goBackTouchEvent",
                this
            );

        /*返回首頁事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goHomeButton,
                "goHomeTouchEvent",
                this
            );

        /*紀錄頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.recordButton,
                "recordPageTouchEvent",
                this
            );

        /*設定頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.settingButton,
                "settingPageTouchEvent",
                this
            );

        /*說明頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.descriptionPageButton,
                "descriptionPageEvent",
                this
            );

        this.onCreate();
    }
}