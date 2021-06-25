import Language from "../Framework/Global/Language";
import AErrorFrameTemplate from '../Framework/Template/Error/AErrorFrameTemplate'
import {socketJS} from '../Socket/Socket'
import ErrorManager from "../Framework/Error/ErrorManager";
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;

@ccclass
class ErrorController extends AErrorFrameTemplate {

    @property(cc.Label)
    protected errorLabel: cc.Label = null;
    @property(cc.Label)
    protected errorButtonLabel: cc.Label = null;
    @property(cc.Button)
    protected errorButton: cc.Button = null;

    public onCreat() {
        this.node.active = false;
        ErrorManager
            .instance
            .setErrorNode(this.node)
            .setErrorLabel(this.errorLabel)
            .setErrorButton(this.errorButton.node)
            .setErrorButtonLabel(this.errorButtonLabel);

    }

    protected languageSetting() {
        Language
            .setLabel(this.errorButtonLabel)
            .setLabel(this.errorLabel)
            .updateStyle();
    }

    public errorButtonTouchEvent() {
        socketJS.backHome();
    }


}