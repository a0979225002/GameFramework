import LanguageMethod from "../Framework/GlobalMethod/LanguageMethod";
import AErrorFrameTemplate from '../Framework/Template/Error/AErrorFrameTemplate'
import {socketJS} from '../Socket/Socket'
import ErrorManager from "../Framework/Error/ErrorManager";

const {ccclass, property} = cc._decorator;

@ccclass
class ErrorController extends AErrorFrameTemplate {
    
    @property(cc.Label)
    protected errorLabel : cc.Label = null;
    @property(cc.Label)
    protected errorButtonLabel : cc.Label = null;
    @property(cc.Button)
    protected errorButton : cc.Button = null;
    
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

        LanguageMethod.instance
            .updateLabelStyle(this.errorButtonLabel)
            .updateLabelStyle(this.errorLabel);
    }
    
    public errorButtonTouchEvent() {
        socketJS.backHome();
    }


}