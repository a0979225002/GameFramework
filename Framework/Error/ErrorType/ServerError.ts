/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示server回傳的錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class ServerError implements IF.IShowErrorDialog {
        private timeOut: number
        private errorManager:IF.IErrorManager;

        constructor(errorManager:IF.IErrorManager) {
            this.timeOut = null;
            this.errorManager = errorManager;
        }

        /**
         *  顯示server回傳的錯誤事件
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        showError(permanentState: boolean, message: string, buttonText: string) {

            if (this.timeOut != null) clearTimeout(this.timeOut);

            //確認當前有無該物件,如無該物件,將會throw中斷
            if (!this.errorManager.errorNode)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");

            if (!this.errorManager.errorLabel)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");

            if (!this.errorManager.errorButton)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");

            ErrorManager.errorState = true;
            this.errorManager.errorNode.active = true;
            this.errorManager.errorLabel.string = message;
            this.errorManager.errorButton.active = this.errorManager.isShowBackHomeButton;

            if (this.errorManager.errorButton.active) {
                this.errorManager.errorButtonLabel.string = buttonText;
            }

            if (!permanentState) {
                this.timeOut = window.setTimeout(() => {
                    ErrorManager.errorState = false;
                    this.errorManager.errorNode.active = false;
                    this.errorManager.errorButton.active = false;
                    this.timeOut = null;

                }, this.errorManager.errorDelayTime);
            }
        }
    }
}