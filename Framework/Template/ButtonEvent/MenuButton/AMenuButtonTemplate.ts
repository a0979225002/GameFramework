import Button from '../../../Global/Button'
import AMenuButtonEvent from './AMenuButtonEvent'

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,場景方向單向,按鈕事件監聽綁定
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
export default abstract class AMenuButtonTemplate extends AMenuButtonEvent {

    protected abstract musicButton: cc.Button;
    protected abstract effectButton: cc.Button;
    protected abstract betUpButton: cc.Button;
    protected abstract betDownButton: cc.Button;
    protected abstract autoButton: cc.Button;
    protected abstract auto50Button: cc.Button;
    protected abstract auto100Button: cc.Button;
    protected abstract auto500Button: cc.Button;
    protected abstract auto1000Button: cc.Button;
    protected abstract autoFreeEndButton: cc.Button;
    protected abstract gobackButton: cc.Button;
    protected abstract goHomeButton: cc.Button;
    protected abstract recordButton: cc.Button;
    protected abstract settingButton: cc.Button;
    protected abstract descriptionPageButton: cc.Button;

    protected onLoad() {

        Button.addButtonEvent(this.musicButton, "musicEvent", this);

    }


}