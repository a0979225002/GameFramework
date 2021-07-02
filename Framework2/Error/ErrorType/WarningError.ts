import {ErrorType} from "../Enum/ErrorManagerEnum";
import ErrorManager from "../ErrorManager";

export default class WarningError {

    private timeout: number

    constructor() {

        this.timeout = null;

    }

    checkErrorType(permanentState: boolean, message: string, buttonText: string) {

        if (this.timeout != null) clearTimeout(this.timeout);

        //確認當前有無該物件,如無該物件,將會throw中斷

        if (!ErrorManager.instance.warningNode)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager warningNode為空");

        if (!ErrorManager.instance.warningLabel)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager warningLabel為空");

        if (ErrorManager.instance.warningDelayTime == 0) {

            ErrorManager.instance.executeError(`當前DelayTime = 0 : 請給予值`, ErrorManager.instance.errorDelayTime);

        }

        ErrorManager.warningState = true;
        ErrorManager.instance.warningNode.active = true;
        ErrorManager.instance.warningLabel.string = message;

        if (permanentState) return;

        this.timeout = window.setTimeout(() => {

            ErrorManager.warningState = false;
            ErrorManager.instance.warningNode.active = false;

        }, ErrorManager.instance.warningDelayTime);
    }

    /**
     * 顯示金額不足無法下注
     * @param obj 顯示在label的文字
     */
    showErrorBet(obj: string) {

        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager.instance.errorNode)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");

        if (!ErrorManager.instance.errorLabel)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");

        if (!ErrorManager.instance.errorButton)
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");

        if (ErrorManager.instance.errorDelayTime == 0) {
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "ErrorManager errorDelayTime為空 無法顯示");
        }

        if (ErrorManager.errorState) return;

        ErrorManager.errorState = true;
        ErrorManager.instance.errorNode.active = true;
        ErrorManager.instance.errorLabel.string = obj;

        window.setTimeout(() => {

            ErrorManager.errorState = false;
            ErrorManager.instance.errorNode.active = false;

        }, ErrorManager.instance.errorDelayTime)
    }
}