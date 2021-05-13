import {AutoType} from '../../Config/Enum/ConfigEnum'
import ButtonMethod from '../../GlobalMethod/ButtonMethod'
import AMenuButtonEvent from './AMenuButtonEvent'

const {ccclass} = cc._decorator;

@ccclass
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
        ButtonMethod.addButtonEvent(this.musicButtonH, "musicEventListener", this);
        ButtonMethod.addButtonEvent(this.musicButtonV, "musicEventListener", this);

        //效果音按鈕
        ButtonMethod.addButtonEvent(this.effectButtonH, "effectEventListener", this);
        ButtonMethod.addButtonEvent(this.effectButtonV, "effectEventListener", this);

        //押住按鈕
        ButtonMethod.addButtonEvent(this.betUpButtonH, "betUpEventListener", this);
        ButtonMethod.addButtonEvent(this.betUpButtonV, "betUpEventListener", this);
        ButtonMethod.addButtonEvent(this.betDownButtonH, "betDownEventListener", this);
        ButtonMethod.addButtonEvent(this.betDownButtonV, "betDownEventListener", this);

        //自動按鈕
        ButtonMethod.addButtonEvent(
            this.auto50ButtonH, "autoButtonEventListener", this, AutoType.auto50);
        ButtonMethod.addButtonEvent(
            this.auto50ButtonV, "autoButtonEventListener", this, AutoType.auto50);
        ButtonMethod.addButtonEvent(
            this.auto100ButtonH, "autoButtonEventListener", this, AutoType.auto100);
        ButtonMethod.addButtonEvent(
            this.auto100ButtonV, "autoButtonEventListener", this, AutoType.auto100);
        ButtonMethod.addButtonEvent(
            this.auto500ButtonH, "autoButtonEventListener", this, AutoType.auto500);
        ButtonMethod.addButtonEvent(
            this.auto500ButtonV, "autoButtonEventListener", this, AutoType.auto500);
        ButtonMethod.addButtonEvent(
            this.auto1000ButtonH, "autoButtonEventListener", this, AutoType.auto1000);
        ButtonMethod.addButtonEvent(
            this.auto1000ButtonV, "autoButtonEventListener", this, AutoType.auto1000);
        ButtonMethod.addButtonEvent(
            this.autoFreeEndButtonH, "autoButtonEventListener", this, AutoType.freeEnd);
        ButtonMethod.addButtonEvent(
            this.autoFreeEndButtonV, "autoButtonEventListener", this, AutoType.freeEnd);
        ButtonMethod.addButtonEvent(
            this.autoButtonH, "autoButtonEventListener", this, AutoType.auto);
        ButtonMethod.addButtonEvent(
            this.autoButtonV, "autoButtonEventListener", this, AutoType.auto);

        //返回上一頁按鈕
        ButtonMethod.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
        ButtonMethod.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);

        //返回首頁
        ButtonMethod.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this);
        ButtonMethod.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this);

        //紀錄頁按鈕
        ButtonMethod.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this);
        ButtonMethod.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this);

        //設定頁按鈕
        ButtonMethod.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this);
        ButtonMethod.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this);

        //說明頁按鈕
        ButtonMethod.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this);
        ButtonMethod.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this);


        this.onCreate();

    }

}