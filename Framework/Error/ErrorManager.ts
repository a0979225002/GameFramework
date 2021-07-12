/// <reference path="./Enum/ErrorType.ts" />
/// <reference path="./ErrorHandler.ts" />
/// <reference path="./IErrorHandler.ts" />
/// <reference path="./IErrorManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 錯誤管理器 : 框架錯誤管理
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class ErrorManager implements IF.IErrorManager {
        private static _instance: IF.IErrorManager;
        private static _errorState: boolean;
        private static _warningState: boolean;
        private configManager: IF.IConfigManager;
        private handler: IF.IErrorHandler;
        private _errorDelayTime: number;
        private _errorLabel: cc.Label;
        private _errorNode: cc.Node;
        private _warningLabel: cc.Label;
        private _warningNode: cc.Node;
        private readonly _isShowBackHomeButton: boolean;
        private _errorButton: cc.Node;
        private _errorButtonLabel: cc.Label
        private _warningDelayTime: number;

        private constructor(configManager: IF.IConfigManager) {
            this.handler = new ErrorHandler(configManager, this);
            this.configManager = configManager;
            this._errorNode = null;
            this._errorLabel = null;
            this._errorDelayTime = 2000;                                            //錯誤訊息顯示時間 : 2秒
            this._warningDelayTime = 1000;                                          //警告訊息顯示時間 : 1秒
            ErrorManager._errorState = false;                                       //當前是否正在顯示 Error
            ErrorManager._warningState = false;                                     //當前是否正在顯示警告
            this._isShowBackHomeButton = !!this.configManager.backHomeURL;          //檢查當前是否回首頁URL,將之賦予true:false
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new ErrorManager(configManager);
                errorMgr = this._instance;
            }
        }

        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.IErrorManager {
            if (!this._instance) {
                throw new Error(`ErrorManager類錯誤 :  該類尚未實例化`)
            }
            return this._instance;
        }

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
        executeError(message: string | type.ErrorType, obj: any) {
            return this.handler.checkErrorType(message, obj);
        }

        /**
         * 顯示錯誤視窗
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        showErrorDialog(permanentState: boolean, message: string, buttonText?: string) {
            this.handler.checkServerError(permanentState, message, buttonText);
        }

        /**
         * 顯示警告,將會調用已保存的警告Node
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        showWarningDialog(permanentState: boolean, message: string, buttonText?: string) {
            this.handler.checkWarning(permanentState, message, buttonText);
        }

        /**
         * 添加要綁定的Error組件
         * @param node
         */
        setErrorNode(node: cc.Node): this {

            this._errorNode = node;

            return this;
        }

        /**
         * 添加要顯示Error訊息的Label
         * @param label
         */
        setErrorLabel(label: cc.Label): this {

            this._errorLabel = label;

            return this;
        }

        /**
         * 添加errorButton綁定
         * @param node
         */
        setErrorButton(node: cc.Node): this {

            this._errorButton = node;

            return this;
        }

        /**
         * 添加要顯示的時間,目前只對(ErrorType.bet)生效
         * @param time
         */
        setErrorDelayTime(time: number): this {

            this._errorDelayTime = time;

            return this;
        }

        /**
         * 添加警告要顯示的時間
         */
        setWarningDelayTime(time: number): this {

            this._warningDelayTime = time;

            return this;
        }

        /**
         * 添加要顯示警告的Node
         * @param node
         */
        setWarningNode(node: cc.Node): this {

            this._warningNode = node;

            return this;
        }

        /**
         * 添加要顯示警告的Node
         * @param label
         */
        setWarningLabel(label: cc.Label): this {

            this._warningLabel = label;

            return this;
        }

        /**
         * 添加要顯示錯誤視窗中按鈕的label
         * @param {cc.Label} label
         * @return {this}
         */
        public setErrorButtonLabel(label: cc.Label): this {

            this._errorButtonLabel = label;

            return this;
        }

        static get errorState(): boolean {
            return this._errorState;
        }

        /**
         * 當前 error dialog 狀態
         * @param {boolean} value
         */
        static set errorState(value: boolean) {
            this._errorState = value;
        }


        static get warningState(): boolean {
            return this._warningState;
        }

        /**
         * 當前 warning dialog 狀態
         * @param {boolean} value
         */
        static set warningState(value: boolean) {
            this._warningState = value;
        }

        get errorNode(): cc.Node {
            return this._errorNode;
        }


        get warningNode(): cc.Node {
            return this._warningNode;
        }


        get errorButton(): cc.Node {
            return this._errorButton;
        }

        get warningLabel(): cc.Label {
            return this._warningLabel;
        }

        get errorLabel(): cc.Label {
            return this._errorLabel;
        }


        get errorDelayTime(): number {
            return this._errorDelayTime;
        }


        get warningDelayTime(): number {
            return this._warningDelayTime;
        }


        get isShowBackHomeButton(): boolean {

            return this._isShowBackHomeButton;
        }

        get errorButtonLabel(): cc.Label {
            return this._errorButtonLabel;
        }
    }
}