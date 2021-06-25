import {ErrorType} from "../Enum/ErrorManagerEnum";
import ErrorManager from "../ErrorManager";

export default class ServerError {
    private timeOut: number

    constructor() {

        this.timeOut = null;

    }

    checkErrorType(permanentState: boolean, message: string, buttonText: string) {

        if (this.timeOut != null) clearTimeout(this.timeOut);

        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager.instance.errorNode)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");

        if (!ErrorManager.instance.errorLabel)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");

        if (!ErrorManager.instance.errorButton)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");

        ErrorManager.errorState = true;
        ErrorManager.instance.errorNode.active = true;
        ErrorManager.instance.errorLabel.string = message;
        ErrorManager.instance.errorButton.active = ErrorManager.instance.isShowBackHomeButton;

        if (ErrorManager.instance.errorButton.active) {
            ErrorManager.instance.errorButtonLabel.string = buttonText;
        }

        if (!permanentState) {

            this.timeOut = window.setTimeout(() => {

                ErrorManager.errorState = false;
                ErrorManager.instance.errorNode.active = false;
                ErrorManager.instance.errorButton.active = false;
                this.timeOut = null;

            }, ErrorManager.instance.errorDelayTime);
        }
    }
}