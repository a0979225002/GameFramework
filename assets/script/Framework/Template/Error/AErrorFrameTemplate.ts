import ButtonMethod from '../../GlobalMethod/ButtonMethod'
import OverrideComponent from "../OverrideComponent";

const {ccclass} = cc._decorator;

@ccclass
export default abstract class AErrorFrameTemplate extends OverrideComponent {

    protected abstract errorLabel: cc.Label;
    protected abstract errorButtonLabel: cc.Label;
    protected abstract errorButton: cc.Button;

    protected abstract onCreat();

    protected abstract errorButtonTouchEvent();

    protected abstract languageSetting();

    protected onLoad() {

        this.onCreat();
        ButtonMethod.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this);

    }

}