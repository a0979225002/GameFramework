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
        private errorManager: IF.IErrorManager;

        constructor(errorManager: IF.IErrorManager) {
            this.timeOut = null;
            this.errorManager = errorManager;
        }

        /**
         *  顯示server回傳的錯誤事件
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         * @param {string} canShowButton : 是否強制顯示Button
         */
        showError(permanentState: boolean, message: string, buttonText: string, canShowButton?: boolean) {
            if (this.timeOut != null) clearTimeout(this.timeOut);
            cc.Tween.stopAllByTarget(this.errorManager.errorNode);
            this.errorManager.errorButton.getComponent(cc.Button)
                .interactable = false;
            this.errorManager.errorNode.active = false;
            this.errorManager.closeButton.active = false;

            //確認當前有無該物件,如無該物件,將會throw中斷
            if (!this.errorManager.errorNode)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorNode為空");

            if (!this.errorManager.errorLabel)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorLabel為空");

            if (!this.errorManager.errorButton)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager errorButton為空");

            ErrorManager.errorState = true;
            cc.tween(this.errorManager.errorNode)
                .set({opacity: 0, scale: 1.3})
                .call(() => {
                    this.errorManager.errorNode.active = true;
                })
                .to(0.3, {opacity: 255, scale: 1}, {easing: "sineIn"})
                .call(() => {
                    this.errorManager.errorButton.getComponent(cc.Button)
                        .interactable = true;
                })
                .start();

            this.errorManager.errorLabel.string = message;

            if (!permanentState) {
                this.errorManager.errorButton.active = false;
            } else if (canShowButton) {
                this.errorManager.errorButton.active = canShowButton;
                this.errorManager.errorButtonLabel.string = buttonText;
            } else if (this.errorManager.isShowBackHomeButton) {
                this.errorManager.errorButton.active = this.errorManager.isShowBackHomeButton;
                this.errorManager.errorButtonLabel.string = buttonText;
            } else {
                this.errorManager.errorButton.active = false;
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
