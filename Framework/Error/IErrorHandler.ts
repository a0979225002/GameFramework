/// <reference path="./Enum/ErrorType.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)Error管理器 錯誤事件中介者
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IErrorHandler {

            /**
             * 確認錯誤類型
             * @summary - 責任鏈模式 : Overload
             * @throws (null,any) - return 該物件 or throw ("該物件為null")
             * @throws (fcc.type.ErrorType,string) - throw (`ErrorType + ${string}`)
             * @throws (string,any) - throw (`${string}`)
             * @param {string | fcc.type.ErrorType} message
             * @param obj
             */
            checkErrorType(message?: string | type.ErrorType, obj?: any): any;

            /**
             * 確認server回傳錯誤類型
             * @param {boolean} permanentState - 是否持續顯示
             * @param {string} message - 顯示錯誤訊息文字
             * @param {string} buttonText - 按鈕文字
             */
            checkServerError(permanentState: boolean, message: string, buttonText?: string): void;

            /**
             * 確認警告類型
             * @param {boolean} permanentState - 是否持續顯示
             * @param {string} message - 顯示錯誤訊息文字
             * @param {string} buttonText - 按鈕文字
             */
            checkWarning(permanentState: boolean, message: string, buttonText?: string): void;
        }
    }
}