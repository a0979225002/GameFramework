import AMenuButtonTemplate from "./AMenuButtonTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,主遊戲雙按鈕配置
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
export default abstract class AMenuDoubleButtonTemplate extends AMenuButtonTemplate {

    /**
     * 背景音樂按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButtonH: cc.Button;

    /**
     * 背景音樂按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButtonV: cc.Button;

    /**
     * 效果音樂按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButtonH: cc.Button;

    /**
     * 效果音樂按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButtonV: cc.Button;

    /**
     * 押住籌碼提高按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButtonH: cc.Button;

    /**
     * 押住籌碼提高按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButtonV: cc.Button;

    /**
     * 押住籌碼降低按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButtonH: cc.Button;

    /**
     * 押住籌碼降低按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButtonV: cc.Button;

    /**
     * 自動按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButtonH: cc.Button;

    /**
     * 自動按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButtonV: cc.Button;

    /**
     * 自動50次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50ButtonH: cc.Button;

    /**
     * 自動50次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50ButtonV: cc.Button;

    /**
     * 自動100次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100ButtonH: cc.Button;

    /**
     * 自動100次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100ButtonV: cc.Button;

    /**
     * 自動500次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500ButtonH: cc.Button;

    /**
     * 自動500次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500ButtonV: cc.Button;

    /**
     * 自動1000次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000ButtonH: cc.Button;

    /**
     * 自動1000次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000ButtonV: cc.Button;

    /**
     * 自動直到免費後停止按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButtonH: cc.Button;


    /**
     * 自動直到免費後停止按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButtonV: cc.Button;

    /**
     * 離開菜單頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonH: cc.Button;

    /**
     * 離開菜單頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonV: cc.Button;

    /**
     * 離開遊戲按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButtonH: cc.Button;

    /**
     * 離開遊戲按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButtonV: cc.Button;

    /**
     * 進入紀錄頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButtonH: cc.Button;

    /**
     * 進入紀錄頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButtonV: cc.Button;

    /**
     * 進入設定頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButtonH: cc.Button;

    /**
     * 進入設定頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButtonV: cc.Button;

    /**
     * 進入說明頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButtonH: cc.Button;

    /**
     * 進入說明頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButtonV: cc.Button;

    protected onLoad() {
        super.onLoad();
        /*背景音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.musicButtonH,
                "musicEventListener",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.musicButtonV,
                "musicEventListener",
                this
            );

        /*效果音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.effectButtonH,
                "effectEventListener",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.effectButtonV,
                "effectEventListener",
                this
            );

        /*押住籌碼提高按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.betUpButtonH,
                "betUpEventListener",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.betUpButtonV,
                "betUpEventListener",
                this
            );

        /*押住籌碼降低按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.betDownButtonH,
                "betDownEventListener",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.betDownButtonV,
                "betDownEventListener",
                this
            );

        /*自動50次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto50ButtonH,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_50
            );
        fcc.global.Button
            .addButtonEvent(
                this.auto50ButtonV,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_50
            );

        /*自動100次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto100ButtonH,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_100
            );
        fcc.global.Button
            .addButtonEvent(
                this.auto100ButtonV,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_100
            );

        /*自動500次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto500ButtonH,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_500
            );
        fcc.global.Button
            .addButtonEvent(
                this.auto500ButtonV,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_500
            );

        /*自動1000次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.auto1000ButtonH,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO_1000
            );
        fcc.global.Button
            .addButtonEvent(
                this.auto1000ButtonV,
                "autoButtonEventListener",
                this, fcc.type.AutoType.AUTO_1000
            );

        /*自動直到免費後停止按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.autoFreeEndButtonH,
                "autoButtonEventListener",
                this, fcc.type.AutoType.FREE_END
            );
        fcc.global.Button
            .addButtonEvent(
                this.autoFreeEndButtonV,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.FREE_END
            );

        /*自動按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.autoButtonH,
                "autoButtonEventListener",
                this,
                fcc.type.AutoType.AUTO
            );
        fcc.global.Button
            .addButtonEvent(
                this.autoButtonV,
                "autoButtonEventListener",
                this, fcc.type.AutoType.AUTO
            );

        /*返回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goBackButtonH,
                "goBackTouchEvent",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.goBackButtonV,
                "goBackTouchEvent",
                this
            );

        /*返回首頁事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goHomeButtonH,
                "goHomeTouchEvent",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.goHomeButtonV,
                "goHomeTouchEvent",
                this
            );

        /*紀錄頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.recordButtonH,
                "recordPageTouchEvent",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.recordButtonV,
                "recordPageTouchEvent",
                this
            );

        /*設定頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.settingButtonH,
                "settingPageTouchEvent",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.settingButtonV,
                "settingPageTouchEvent",
                this
            );

        /*說明頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.descriptionPageButtonH,
                "descriptionPageEvent",
                this
            );
        fcc.global.Button
            .addButtonEvent(
                this.descriptionPageButtonV,
                "descriptionPageEvent",
                this
            );

        this.onCreate();
    }
}