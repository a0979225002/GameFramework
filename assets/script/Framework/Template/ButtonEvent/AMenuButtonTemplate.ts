import ButtonMethod from '../../GlobalMethod/ButtonMethod'
import AMenuButtonEvent from './AMenuButtonEvent'

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

        ButtonMethod.addButtonEvent(this.musicButton, "musicEvent", this);

        this.onCreate();
    }


}