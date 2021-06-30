import Button from '../../Global/Button'
import OverrideComponent from "../BaseTemplate/OverrideComponent";

export default abstract class AErrorFrameTemplate extends OverrideComponent {

    protected abstract errorLabel: cc.Label;
    protected abstract errorButtonLabel: cc.Label;
    protected abstract errorButton: cc.Button;

    protected abstract onCreat();

    protected abstract errorButtonTouchEvent();

    protected abstract languageSetting();

    protected onLoad() {

        this.onCreat();
        Button.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this);

    }

}