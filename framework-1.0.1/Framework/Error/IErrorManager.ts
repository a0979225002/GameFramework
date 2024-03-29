/// <reference path="./Enum/ErrorType.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 錯誤訊息管理器
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IErrorManager {

            /**
             * 綁定要顯示Error組件的物件
             */
            errorNode: cc.Node;
            /**
             *綁定警告訊息
             */
            warningNode: cc.Node;
            /**
             *綁定ErrorButton
             */
            errorButton: cc.Node;

            /**
             * 關閉視窗的 Button
             */
            closeButton:cc.Node;

            /**
             * 綁定警告要顯示的錯誤訊息
             */
            warningLabel: cc.Label;

            /**
             * 綁定要顯示錯誤訊息的Label
             */
            errorLabel: cc.Label;

            /**
             * 綁定錯誤訊息的按鈕
             */
            errorButtonLabel: cc.Label;

            /**
             * 顯示要顯示錯誤訊息的時間
             */
            errorDelayTime: number;

            /**
             * 顯示警告訊息的時間
             */
            warningDelayTime: number;

            /**
             * 是否顯示返回Button
             */
            isShowBackHomeButton: boolean;

            /**
             * 執行該類型之錯誤提示
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
            executeError(message: string | type.ErrorType, obj?: any): void;

            /**
             * 顯示錯誤視窗
             * @param {boolean} permanentState : 是否常駐
             * @param {string} message  : 錯誤訊息
             * @param {string} buttonText : button文字
             * @param {string} canShowButton : 是否強制顯示Button
             */
            showErrorDialog(permanentState: boolean, message: string, buttonText?: string,canShowButton?:boolean): void;

            /**
             * 顯示警告,將會調用已保存的警告Node
             * @param {boolean} permanentState : 是否常駐
             * @param {string} message  : 錯誤訊息
             * @param {string} buttonText : button文字
             */
            showWarningDialog(permanentState: boolean, message: string, buttonText?: string): void;

            /**
             * 添加要綁定的Error組件
             * @param node
             */
            setErrorNode(node: cc.Node): this;

            /**
             * 添加要綁定的關閉視窗的按鈕
             * @param {cc.Node} node
             * @return {this}
             */
            setCloseButtonNode(node:cc.Node):this;

            /**
             * 添加要顯示Error訊息的Label
             * @param label
             */
            setErrorLabel(label: cc.Label): this;

            /**
             * 添加errorButton綁定
             * @param node
             */
            setErrorButton(node: cc.Node): this;

            /**
             * 添加要顯示的時間,目前只對(ErrorType.bet)生效
             * @param time
             */
            setErrorDelayTime(time: number): this;

            /**
             * 添加警告要顯示的時間
             */
            setWarningDelayTime(time: number): this;

            /**
             * 添加要顯示警告的Node
             * @param node
             */
            setWarningNode(node: cc.Node): this;

            /**
             * 添加要顯示警告的Node
             * @param label
             */
            setWarningLabel(label: cc.Label): this;


            /**
             * 添加要顯示錯誤視窗中按鈕的label
             * @param {cc.Label} label
             * @return {this}
             */
            setErrorButtonLabel(label: cc.Label): this;
        }
    }
}
