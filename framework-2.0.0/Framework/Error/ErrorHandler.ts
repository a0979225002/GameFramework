/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorType/ObjectError.ts" />
/// <reference path="./ErrorType/ServerError.ts" />
/// <reference path="./ErrorType/WarningError.ts" />
/// <reference path="./IErrorHandler.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description Error管理器 錯誤事件中介者
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class ErrorHandler implements IF.IErrorHandler {

        private objectError: ObjectError;
        private serverError: ServerError;
        private warningError: WarningError;


        constructor(configManager: IF.IConfigManager, errorManager: IF.IErrorManager) {
            this.objectError = new ObjectError(configManager);
            this.serverError = new ServerError(errorManager);
            this.warningError = new WarningError(errorManager);
        }

        /**
         * 確認錯誤類型
         * @summary - 責任鏈模式 : Overload
         * @throws (null,any) - return 該物件 or throw ("該物件為null")
         * ```
         *      參數:
         *          (null,any) - return 該物件 or throw ("該物件為null")
         *          (fcc.type.ErrorType,string) - throw (`ErrorType + ${string}`)
         *          (string) - throw (`${string}`)
         * ```
         * @param {string | fcc.type.ErrorType} message
         * @param obj
         */
        checkErrorType(message: string | type.ErrorType, obj?: any) {
            return this.objectError.checkErrorType(message, obj);
        }

        /**
         * 確認server回傳錯誤類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         * @param {string} canShowButton : 是否強制顯示Button
         */
        public checkServerError(permanentState: boolean, message: string, buttonText?: string,canShowButton?:boolean) {
            this.serverError.showError(permanentState, message, buttonText,canShowButton);
        }

        /**
         * 確認警告類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        public checkWarning(permanentState: boolean, message: string, buttonText?: string) {
            this.warningError.showError(permanentState, message, buttonText);
        }
    }
}
