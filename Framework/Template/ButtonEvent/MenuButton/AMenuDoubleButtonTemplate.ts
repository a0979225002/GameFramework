import {AutoType} from '../../../Process/Enum/AutoType'
import Button from '../../../Global/Button'
import AMenuButtonEvent from './AMenuButtonEvent'

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,場景方向雙向,按鈕事件監聽綁定(H and V 頁面 兩倍按鈕)
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */

export default abstract class AMenuDoubleButtonTemplate extends AMenuButtonEvent {

    protected abstract musicButtonH: cc.Button;
    protected abstract musicButtonV: cc.Button;
    protected abstract effectButtonH: cc.Button;
    protected abstract effectButtonV: cc.Button;
    protected abstract betUpButtonH: cc.Button;
    protected abstract betUpButtonV: cc.Button;
    protected abstract betDownButtonH: cc.Button;
    protected abstract betDownButtonV: cc.Button;
    protected abstract autoButtonH: cc.Button;
    protected abstract autoButtonV: cc.Button;
    protected abstract auto50ButtonH: cc.Button;
    protected abstract auto50ButtonV: cc.Button;
    protected abstract auto100ButtonH: cc.Button;
    protected abstract auto100ButtonV: cc.Button;
    protected abstract auto500ButtonH: cc.Button;
    protected abstract auto500ButtonV: cc.Button;
    protected abstract auto1000ButtonH: cc.Button;
    protected abstract auto1000ButtonV: cc.Button;
    protected abstract autoFreeEndButtonH: cc.Button;
    protected abstract autoFreeEndButtonV: cc.Button;
    protected abstract goBackButtonH: cc.Button;
    protected abstract goBackButtonV: cc.Button;
    protected abstract goHomeButtonH: cc.Button;
    protected abstract goHomeButtonV: cc.Button;
    protected abstract recordButtonH: cc.Button;
    protected abstract recordButtonV: cc.Button;
    protected abstract settingButtonH: cc.Button;
    protected abstract settingButtonV: cc.Button;
    protected abstract descriptionPageButtonH: cc.Button;
    protected abstract descriptionPageButtonV: cc.Button;

    protected onLoad() {
        super.onLoad();
        //音樂按鈕
        Button.addButtonEvent(this.musicButtonH, "musicEventListener", this);
        Button.addButtonEvent(this.musicButtonV, "musicEventListener", this);

        //效果音按鈕
        Button.addButtonEvent(this.effectButtonH, "effectEventListener", this);
        Button.addButtonEvent(this.effectButtonV, "effectEventListener", this);

        //押住按鈕
        Button.addButtonEvent(this.betUpButtonH, "betUpEventListener", this);
        Button.addButtonEvent(this.betUpButtonV, "betUpEventListener", this);
        Button.addButtonEvent(this.betDownButtonH, "betDownEventListener", this);
        Button.addButtonEvent(this.betDownButtonV, "betDownEventListener", this);

        //自動按鈕
        Button.addButtonEvent(
            this.auto50ButtonH, "autoButtonEventListener", this, AutoType.AUTO_50);
        Button.addButtonEvent(
            this.auto50ButtonV, "autoButtonEventListener", this, AutoType.AUTO_50);
        Button.addButtonEvent(
            this.auto100ButtonH, "autoButtonEventListener", this, AutoType.AUTO_100);
        Button.addButtonEvent(
            this.auto100ButtonV, "autoButtonEventListener", this, AutoType.AUTO_100);
        Button.addButtonEvent(
            this.auto500ButtonH, "autoButtonEventListener", this, AutoType.AUTO_500);
        Button.addButtonEvent(
            this.auto500ButtonV, "autoButtonEventListener", this, AutoType.AUTO_500);
        Button.addButtonEvent(
            this.auto1000ButtonH, "autoButtonEventListener", this, AutoType.AUTO_1000);
        Button.addButtonEvent(
            this.auto1000ButtonV, "autoButtonEventListener", this, AutoType.AUTO_1000);
        Button.addButtonEvent(
            this.autoFreeEndButtonH, "autoButtonEventListener", this, AutoType.FREE_END);
        Button.addButtonEvent(
            this.autoFreeEndButtonV, "autoButtonEventListener", this, AutoType.FREE_END);
        Button.addButtonEvent(
            this.autoButtonH, "autoButtonEventListener", this, AutoType.AUTO);
        Button.addButtonEvent(
            this.autoButtonV, "autoButtonEventListener", this, AutoType.AUTO);

        //返回上一頁按鈕
        Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
        Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);

        //返回首頁
        Button.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this);
        Button.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this);

        //紀錄頁按鈕
        Button.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this);
        Button.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this);

        //設定頁按鈕
        Button.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this);
        Button.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this);

        //說明頁按鈕
        Button.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this);
        Button.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this);
    }

}