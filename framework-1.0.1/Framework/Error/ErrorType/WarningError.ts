/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="../ErrorManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示警告錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class WarningError implements IF.IShowErrorDialog {

        private timeout: number
        private errorManager:IF.IErrorManager;

        constructor(errorManager:IF.IErrorManager) {
            this.timeout = null;
            this.errorManager = errorManager;
        }


        /**
         * 顯示警告 Dialog
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        showError(permanentState: boolean, message: string, buttonText: string) {

            if (this.timeout != null) clearTimeout(this.timeout);

            //確認當前有無該物件,如無該物件,將會throw中斷

            if (!this.errorManager.warningNode)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager warningNode為空");

            if (!this.errorManager.warningLabel)
                this.errorManager.executeError(type.ErrorType.UNDEFINED_FW, "ErrorManager warningLabel為空");

            if (this.errorManager.warningDelayTime == 0) {
                this.errorManager.executeError(`當前DelayTime = 0 : 請給予值`);
            }

            ErrorManager.warningState = true;
            this.errorManager.warningNode.active = true;
            this.errorManager.warningLabel.string = message;

            if (permanentState) return;

            this.timeout = window.setTimeout(() => {

                ErrorManager.warningState = false;
                this.errorManager.warningNode.active = false;

            }, this.errorManager.warningDelayTime);
        }
    }
}
