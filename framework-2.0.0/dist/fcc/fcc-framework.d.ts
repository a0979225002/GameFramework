/// <reference types="../@types/creator" />
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 各種錯誤類型
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum ErrorType {
            /**
             * 參數錯誤
             * @type {ErrorType.TYPE_FW}
             */
            TYPE_FW = "\u50B3\u5165\u7684Type \u932F\u8AA4 ,\u8ACB\u6AA2\u5BDF\u8A72Type\u662F\u5426\u975EFarmWork\u5167\u7684Type",
            /**
             * 執行流程錯誤
             * @type {ErrorType.IS_RUNNING_FW}
             */
            IS_RUNNING_FW = "\u904A\u6232\u6B63\u5728\u57F7\u884C\u4E2D,\u8ACB\u52FF\u91CD\u8907\u547C\u53EB",
            /**
             * 空變數錯誤
             * @type {ErrorType.UNDEFINED_FW}
             */
            UNDEFINED_FW = "\u8B8A\u6578\u70BAundefined,\u6D41\u7A0B\u7121\u6CD5\u7E7C\u7E8C",
            /**
             * 加載資源類有錯誤
             * @type {ErrorType.LOAD_FW}
             */
            LOAD_FW = "\u52A0\u8F09\u7684\u8CC7\u6E90\u6709\u554F\u984C",
            /**
             * 動畫類有錯誤
             * @type {ErrorType.ANIMATION_FW}
             */
            ANIMATION_FW = "Animation \u985E\u4E2D\u65B9\u6CD5\u6709\u932F\u8AA4 : ",
            /**
             * server 請求錯誤
             * @type {ErrorType.WEB_REQUEST_FW}
             */
            WEB_REQUEST_FW = "WebRequest \u985E\u6709\u932F\u8AA4 : ",
            /**
             * server 響應錯誤
             * @type {ErrorType.WEB_RESPONSE_FW}
             */
            WEB_RESPONSE_FW = "WebResponse \u985E\u6709\u932F\u8AA4 : ",
            /**
             * 音樂類錯誤
             * @type {ErrorType.AUDIO_FW}
             */
            AUDIO_FW = "AUDIO \u985E\u6709\u932F\u8AA4 :",
            /**
             * 場景類錯誤
             * @type {ErrorType.SCENE_FW}
             */
            SCENE_FW = "Scene \u985E\u6709\u932F\u8AA4 :",
            /**
             * 流程類錯誤
             * @type {ErrorType.PROCESS_FW}
             */
            PROCESS_FW = "process \u985E\u6709\u932F\u8AA4 :",
            /**
             * 監聽事件類有錯誤
             * @type {ErrorType.LISTENER_FW}
             */
            LISTENER_FW = "Event \u985E\u6709\u932F\u8AA4 :",
            /**
             * 老虎機樣式類有錯誤
             * @type {ErrorType.SLOT_STYLE_FW}
             */
            SLOT_STYLE_FW = "SlotStyleFW\u985E\u6709\u932F\u8AA4 :",
            /**
             * 模板類有錯誤
             */
            TEMPLATE_FW = "\u6A21\u677F\u985E\u6709\u932F\u8AA4 :"
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 無從判斷該錯誤類型
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class UnknownError {
        private configManager;
        constructor(configManager: IF.IConfigManager);
        checkErrorType(message?: string | type.ErrorType, obj?: any): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為框架錯誤
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class FrameWorkError {
        private unknownError;
        private configManager;
        constructor(configManager: IF.IConfigManager);
        checkErrorType(message: string | type.ErrorType, obj: any): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為物件錯誤
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ObjectError {
        private frameWorkError;
        constructor(configManager: IF.IConfigManager);
        checkErrorType(message: string | type.ErrorType, obj?: any): any;
        checkObjectType(obj: any): "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function";
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示server回傳的錯誤
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ServerError implements IF.IShowErrorDialog {
        private timeOut;
        private errorManager;
        constructor(errorManager: IF.IErrorManager);
        /**
         *  顯示server回傳的錯誤事件
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         * @param {string} canShowButton : 是否強制顯示Button
         */
        showError(permanentState: boolean, message: string, buttonText: string, canShowButton?: boolean): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示警告錯誤
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class WarningError implements IF.IShowErrorDialog {
        private timeout;
        private errorManager;
        constructor(errorManager: IF.IErrorManager);
        /**
         * 顯示警告 Dialog
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        showError(permanentState: boolean, message: string, buttonText: string): void;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)Error管理器 錯誤事件中介者
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IErrorHandler {
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
            checkErrorType(message?: string | type.ErrorType, obj?: any): any;
            /**
             * 確認server回傳錯誤類型
             * @param {boolean} permanentState - 是否持續顯示
             * @param {string} message - 顯示錯誤訊息文字
             * @param {string} buttonText - 按鈕文字
             * @param {string} canShowButton : 是否強制顯示Button
             */
            checkServerError(permanentState: boolean, message: string, buttonText?: string, canShowButton?: boolean): void;
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
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description Error管理器 錯誤事件中介者
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ErrorHandler implements IF.IErrorHandler {
        private objectError;
        private serverError;
        private warningError;
        constructor(configManager: IF.IConfigManager, errorManager: IF.IErrorManager);
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
        checkErrorType(message: string | type.ErrorType, obj?: any): any;
        /**
         * 確認server回傳錯誤類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         * @param {string} canShowButton : 是否強制顯示Button
         */
        checkServerError(permanentState: boolean, message: string, buttonText?: string, canShowButton?: boolean): void;
        /**
         * 確認警告類型
         * @param {boolean} permanentState - 是否持續顯示
         * @param {string} message - 顯示錯誤訊息文字
         * @param {string} buttonText - 按鈕文字
         */
        checkWarning(permanentState: boolean, message: string, buttonText?: string): void;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 錯誤訊息管理器
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IErrorManager {
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
            closeButton: cc.Node;
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
            showErrorDialog(permanentState: boolean, message: string, buttonText?: string, canShowButton?: boolean): void;
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
            setCloseButtonNode(node: cc.Node): this;
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
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 錯誤管理器 : 框架錯誤管理
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ErrorManager implements IF.IErrorManager {
        private static _instance;
        private static _errorState;
        private static _warningState;
        private configManager;
        private handler;
        private _errorDelayTime;
        private _errorLabel;
        private _errorNode;
        private _warningLabel;
        private _warningNode;
        private readonly _isShowBackHomeButton;
        private _errorButton;
        private _errorButtonLabel;
        private _closeButton;
        private _warningDelayTime;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.IErrorManager;
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
        executeError(message: string | type.ErrorType, obj: any): any;
        /**
         * 顯示錯誤視窗
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         * @param {string} canShowButton : 是否強制顯示Button
         */
        showErrorDialog(permanentState: boolean, message: string, buttonText?: string, canShowButton?: boolean): void;
        /**
         * 顯示警告,將會調用已保存的警告Node
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        showWarningDialog(permanentState: boolean, message: string, buttonText?: string): void;
        /**
         * 添加要綁定的Error組件
         * @param node
         */
        setErrorNode(node: cc.Node): this;
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
         * 添加要綁定的關閉視窗的按鈕
         * @param {cc.Node} node
         * @return {this}
         */
        setCloseButtonNode(node: cc.Node): this;
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
        static get errorState(): boolean;
        /**
         * 當前 error dialog 狀態
         * @param {boolean} value
         */
        static set errorState(value: boolean);
        static get warningState(): boolean;
        /**
         * 當前 warning dialog 狀態
         * @param {boolean} value
         */
        static set warningState(value: boolean);
        get errorNode(): cc.Node;
        get warningNode(): cc.Node;
        get errorButton(): cc.Node;
        get warningLabel(): cc.Label;
        get errorLabel(): cc.Label;
        get errorDelayTime(): number;
        get warningDelayTime(): number;
        get isShowBackHomeButton(): boolean;
        get errorButtonLabel(): cc.Label;
        get closeButton(): cc.Node;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 音樂撥放疊加時,各種狀態設定
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum AudioStateType {
            /**
             *檢測到該音樂正在撥放時,清除正在撥放的音樂,後重新播放該音樂
             * @type {AudioStateType.CLEAR_TO_REPLAY}
             */
            CLEAR_TO_REPLAY = "CLEAR_TO_REPLAY",
            /**
             * 檢測到該音樂正在撥放時,將直接離開
             * @type {AudioStateType.NOT_PLAYING}
             */
            NOT_PLAYING = "NOT_PLAYING",
            /**
             * 檢測到該音樂正在撥放時,將可疊加撥放
             * @type {AudioStateType.SUPERIMPOSE}
             */
            SUPERIMPOSE = "SUPERIMPOSE"
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)音樂工廠類,派發音樂事件
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IAudioFactory {
            /**
             * 保存該背景音樂撥放模式設定
             * @param {string} name :音樂檔名稱
             * @param {number} volume : 音量
             * @param {boolean} loop : 是否循環
             */
            settingMusic(name: string, volume?: number, loop?: boolean): void;
            /**
             * 保存該效果音效撥放模式設定
             * @param {string} name :音樂檔名稱
             * @param {fcc.type.AudioStateType} canSuperimpose : 是否疊加撥放
             * @param {number} volume : 音量
             * @param {boolean} loop : 是否循環
             */
            settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): void;
            /**
             * 撥放背景音樂
             * 如果拿取不到享元撥放資料,將拿取預設資料
             * @param {string} name
             */
            musicPlay(name: string): void;
            /**
             * 撥放效果音效
             * 如果拿取不到享元撥放資料,將拿取預設資料
             * @param {string} name
             */
            effectPlay(name: string): void;
            /**
             * 停止背景音樂
             */
            musicStop(): void;
            /**
             * 暫停背景音樂
             */
            musicPause(): void;
            /**
             * 停止效果音校
             * @param {string} name
             */
            effectStop(name: string): any;
            /**
             * 停止所有效果音效
             */
            effectStopAll(): void;
            /**
             * 獲取該音樂撥放模式,如果返回NUll將照原預設
             * @param {string} name
             * @returns {Map<string, string | fcc.type.AudioStateType |boolean | number>}
             */
            getMusicState(name: string): Map<string, string | type.AudioStateType | boolean | number>;
            /**
             * 獲取該音效撥放模式,如果返回NUll將照原預設
             * @param {string} name
             * @returns {Map<string, string | fcc.type.AudioStateType | boolean | number>}
             */
            getEffectState(name: string): Map<string, string | type.AudioStateType | boolean | number>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)音樂管理類
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IAudioManager {
            /**
             * 當前是否靜音
             */
            musicOnMute: boolean;
            /**
             * 當前是否靜音
             */
            effectOnMute: boolean;
            /**
             * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
             * ```
             *      預設參數:
             *          volume : 默認為 Config 內的音量參數
             *          loop : 默認 false
             * ```
             * @param {string} name - 音樂名稱
             * @param {number} volume - 音量 0~1
             * @param {boolean} loop - 是否重複撥放
             * @return {this}
             */
            settingMusic(name: string, volume?: number, loop?: boolean): this;
            /**
             * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
             * ```
             *      預設參數:
             *          canSuperimpose : fcc.type.AudioStateType.NOT_PLAYING
             *          volume : 默認為 Config 內的音量參數
             *          loop :默認為 false
             * ```
             * @param {string} name : 音效檔名
             * @param {AudioStateType} canSuperimpose : 能否疊加
             * @param {number} volume : 音量 0~1
             * @param {boolean} loop : 是否重複撥放
             * @return {this}
             */
            settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): this;
            /**
             * 撥放音樂,將會依照當初設定的參數進行播放
             * 若無發現可用參數設定,依照默認參數撥放
             * @param {string} name - 音樂檔名
             */
            musicPlay(name: string): void;
            /**
             * 撥放音效,將會依照當初設定的參數進行播放
             * 若無發現可用參數設定,依照默認參數撥放
             * @param {string} name - 音效檔名
             */
            effectPlay(name: string): void;
            /**
             * 停止音樂
             */
            musicStop(): void;
            /**
             * 暫停音樂
             */
            musicPause(): void;
            /**
             * 停止音效
             * @param {string} name - 音效檔名
             */
            effectStop(name: string): void;
            /**
             * 停止所有音效
             */
            effectStopAll(): void;
            /**
             * 獲取撥放的狀態
             * ```
             *      return data:
             *          volume : number
             *          loop : boolean
             * ```
             * @param {string} name - 音效檔名
             * @return {Map<string, string | boolean | number>} - 撥放設定參數
             */
            getMusicState(name: string): Map<string, string | boolean | number>;
            /**
             * 獲取撥放的狀態
             * ```
             *      return data:
             *          volume : number
             *          canSuperimpose : fcc.type.AudioStateType
             *          loop : boolean
             * ```
             * @param {string} name - 音樂檔名
             * @return {Map<string, string | fcc.type.AudioStateType |boolean | number>} -
             */
            getEffectState(name: string): Map<string, string | boolean | number>;
            /**
             * 更新當前是否靜音模式
             * @return {boolean} 當前是否靜音
             */
            updateMusicOnMute(): boolean;
            /**
             * 更新當前是否靜音模式
             * @return {boolean} 當前是否靜音
             */
            updateEffectOnMute(): boolean;
        }
    }
}
declare namespace fcc {
    namespace global {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:操作數字{number}類方法
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        class Util {
            private static formatting;
            /**
             * 四捨五入到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要四捨五入到哪一位
             * @return {number}
             */
            static roundOff(float: number, number: number): number;
            /**
             * 無條件捨去到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要無條件捨去到哪一位
             * @return {number}
             */
            static roundDown(float: number, number: number): number;
            /**
             * 無條件進位到小數點第N位
             * @param {number} float - 浮點數
             * @param {number} number - 要無條件進位到哪一位
             * @return {number}
             */
            static roundUp(float: number, number: number): number;
            /**
             * 檢查該數字為小數有幾位
             * @example input(1.03) -> output(2)
             * @param {number}float - 浮點數
             * @return {number}
             */
            static decimalsCount(float: number): number;
            /**
             * 將該數字轉字串並判斷是否能使用(K)單位取代零
             * @example input(1000) -> output(1K)
             * @param {number} number 需要格式化的數字
             * @return {string} - 格式化後的字串數字
             */
            static numberFormat(number: number): string;
            /**
             * 將該數字格式化,每三個0前方給予','標記
             * @example input(1000000) -> output(1,000,000)
             * @param {number} number - 需要格式化的數字
             * @return {string} - 格式化後的字串數字
             */
            static format(number: number): string;
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 各種類型資源
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum LoadType {
            /**
             * 單一圖片
             */
            /**
             * 圖輯類型
             * @type {fcc.type.LoadType.IMG}
             */
            IMG = "IMG",
            /**
             * 圖輯類型
             * @type {fcc.type.LoadType.IMG_ATLAS}
             */
            IMG_ATLAS = "IMG_ATLAS",
            /**
             * 骨骼动画類型
             * @type {fcc.type.LoadType.SPINE}
             */
            SPINE = "SPINE",
            /**
             * 預載資源類型
             * @type {fcc.type.LoadType.PREFAB}
             */
            PREFAB = "PREFAB",
            /**
             * 音樂類型
             * @type {fcc.type.LoadType.MUSIC}
             */
            MUSIC = "MUSIC",
            /**
             * 文字類型(注意:目前只接收 .CSV 檔案)
             * @type {fcc.type.LoadType.TEXT}
             */
            TEXT = "TEXT",
            /**
             * 場景類型(注意:動態載入資源需放入resource資料夾內 or bundle資料夾內)
             * @type {fcc.type.LoadType.SCENE}
             */
            SCENE = "SCENE",
            /**
             * 外部URL腳本
             * @type {fcc.type.LoadType.SCRIPT}
             */
            SCRIPT = "SCRIPT",
            /**
             * 外部URL CSS
             * @type {fcc.type.LoadType.SCRIPT}
             */
            CSS = "CSS"
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author 蕭立品
         * @Description 加載類型
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum ASSET_MODE {
            /**
             * 主資源
             * @type {ASSET_MODE.RESOURCES}
             */
            RESOURCES = 0,
            /**
             * 內部Bundle資源
             * @type {ASSET_MODE.IN_SIDE_BUNDLE}
             */
            IN_SIDE_BUNDLE = 1,
            /**
             * 外部資源,主要加載
             * @type {ASSET_MODE.OUT_SIDE_ASSET}
             */
            OUT_SIDE_MAIN_ASSET = 2,
            /**
             * 外部資源
             * @type {ASSET_MODE.OUT_SIDE_ASSET}
             */
            OUT_SIDE_ASSET = 3
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)資源管理者
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ILoadResManager {
            /**
             * 初始加載物件
             */
            initialLoadState: Map<string, number>;
            /**
             * 次加載,可以在還未加載完成時,也能進入MainGame Scene
             */
            secondaryLoadState: Map<string, number>;
            /**
             * 外部資料加載資源狀態
             */
            scriptLoadState: Map<string, number>;
            /**
             * img物件保存
             */
            imgRes: Map<string, Map<string, cc.SpriteFrame>>;
            /**
             * spine 物件保存
             */
            spineRes: Map<string, sp.SkeletonData>;
            /**
             * 讀取後的文件檔案,保存位置
             */
            readFileRes: Map<string, Map<string, string>>;
            /**
             * 讀取後的Prefab,保存位置
             */
            prefabRes: Map<string, cc.Prefab>;
            /**
             * 音樂保存位置
             */
            musicRes: Map<string, cc.AudioClip>;
            /**
             * 場景保存位置
             */
            sceneRes: Map<string, cc.SceneAsset>;
            /**
             * 載入順序
             */
            currentLoadOrder: Array<IAssetData | IF.IOutSideData>;
            /**
             * 外部腳本保存URL地址,單存判斷是否重複加載
             * @type {Set<string>}
             */
            scriptRes: Set<string>;
            /**
             * 主資源加載物件,監聽是否有callback,隨之返回該狀態
             * @param name - 加載物件名稱,由使用者自訂義加載名稱
             * @param progress - 加載進度
             * @param state - 該物件加載百分比
             */
            loadMainEventCallback(name: string, progress: number, state: number): void;
            /**
             * 次資源加載物件,監聽是否有callback,隨之返回該狀態
             * 注意,該狀態無總資源監聽回傳事件
             * @param {string} name - 加載物件名稱,由使用者自訂義加載名稱
             * @param {number} state - 該物件加載百分比
             */
            loadSecondaryEventCallback(name: string, state: number): void;
            /**
             * 外部資源加載完成返回
             * @param {string} name - 加載物件名稱(檔名)
             * @param {number} isError - 是否加載錯誤
             */
            loadScriptEventCallback(name: string, isError: boolean): void;
            /**
             * 加載該資料夾底下所有資源 注意: 需存放於 resources中
             * @param {string} name - 自訂義拿取資源時的名稱
             * @param {LoadType} type - 要獲取的資源類型
             * @param {string} url - 要獲取的資源位置
             * @param {boolean} isLanguageUsed - 是否要使用語系位置
             * @return {this}
             */
            loadAsset(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;
            /**
             * 載入主要遠程外部Bundle
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {this}
             */
            loadMainOutSideAsset(outSideData: IF.IOutSideData): this;
            /**
             * 加載 該 assetBundle 底下資源
             * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
             * 注意:須於UI勾選配置為Bundle資料夾
             * @param {string} name - 自訂義拿取資源時的名稱
             * @param {LoadType} type - 要獲取的資源類型
             * @param {string} url - 要獲取的資源位置
             * @param {boolean} isLanguageUsed - 是否要使用語系位置
             */
            loadBundle(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;
            /**
             * 載入遠程外部Bundle
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {this}
             */
            loadOutSideAsset(outSideData: IF.IOutSideData): this;
            /**
             * 執行載入,不判斷載入資源資源進度
             * @param {fcc.IF.IAssetData} assetData - 需載入的資源資料
             */
            executeLoad(assetData: IF.IAssetData): any;
            /**
             * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
             * @param {(progress: number,isError?:boolean) => void} callFun
             * @param {string} methodName- 自訂義拿取資源時的名稱
             * @returns {this}: methodName 未使用情況,回傳 void
             */
            callback(callFun: (progress: number, isError?: boolean) => void, methodName?: string): this;
            /**
             * 加載外部腳本
             * @param name - 檔案名稱,不含副檔名
             * @param type - 檔案類型
             * @param url - 檔案URL,不含外部 URL
             * @param parameter - GET 參數
             * @returns {this}
             */
            loadExternalScript(name: string, type: type.LoadType, url: string, parameter?: string): this;
            /**
             * 查看該資源是否已加載完畢
             * @param name
             * @param isMainResources
             */
            getLoadState(name: string, isMainResources: boolean): boolean;
            /**
             * 清除資源
             * @param {string} type - 資源類型
             */
            remove(type: string): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 載入各類資源工廠
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ILoadFactory {
            /**
             * 檢測當前Type,做各自對應的加載動作
             * @param name
             * @param type
             * @param url
             */
            executeLoad(name: string, type: type.LoadType, url: string): void;
            /**
             * 執行Bundle載入動作
             * @param name
             * @param type
             * @param url
             */
            executeLoadBundle(name: string, type: type.LoadType, url: string): void;
            /**
             * 加載外部腳本
             * @param name - 檔案名稱,不含副檔名
             * @param type - 檔案類型
             * @param url - 檔案url,不含外部 url
             * @param parameter - get 參數
             */
            executeLoadExternalScript(name: string, type: type.LoadType, url: string, parameter: string): void;
            /**
             * 加載主要外部資源
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {Promise<void>}
             */
            executeMainLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
            /**
             * 外部加載資源
             * @param {fcc.IF.IOutSideData} outSideData
             * @returns {Promise<void>}
             */
            executeLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)EventTarget 事件
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IEventManager {
            /**
             * 事件總數量
             */
            eventCount: number;
            /**
             * 當前正在監聽那些事件;
             */
            eventsCurrentlyBeing: Map<string, string>;
            /**
             * 添加事件
             * @param {string} eventName - 事件名稱
             * @param parameter
             */
            emitEvent(eventName: type.ServerEventType | string, ...parameter: any): void;
            /**
             * server監聽回傳接收
             * @param {string} eventName - 事件名稱
             * @param {Function} callFun - 返回方法
             * @param isPermanent - 是否常駐
             * @param {any} self - 調用回哪個對象
             */
            eventListener(eventName: string, callFun: (...parameter: any) => void, isPermanent?: boolean, self?: any): void;
            /**
             * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
             * @param {ServerEventType | GameEventType} eventName - 事件名稱
             * @param callFun?{Function} - 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
             */
            destroyEvent(eventName: string, callFun?: Function): void;
            /**
             * 是否該事件持續監聽中
             * @param {string} eventName - 事件名稱
             * @return {boolean}
             */
            hasListening(eventName: type.ServerEventType | string): boolean;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 事件管理器,當前綁定的事件,事件數量
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class EventManager implements IF.IEventManager {
        private static _instance;
        private configManager;
        /**
         * 事件總數量
         */
        private _eventCount;
        /**
         * 遊戲內事件
         */
        target: cc.EventTarget;
        /**
         * 當前正在監聽那些事件;
         */
        private readonly _eventsCurrentlyBeing;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.IEventManager;
        /**
         * 添加事件
         * @param {string} eventName - 事件名稱
         * @param {any} any : 要回傳的物件
         */
        emitEvent(eventName: type.ServerEventType | string, ...any: any): void;
        /**
         * server監聽回傳接收
         * @param {string} eventName - 事件名稱
         * @param {Function} callFun - 返回方法
         * @param isPermanent - 是否常駐
         * @param {any} self - 調用回哪個對象
         */
        eventListener(eventName: string, callFun: (...parameter: any) => void, isPermanent?: boolean, self?: any): void;
        /**
         * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
         * @param {ServerEventType | GameEventType} eventName - 事件名稱
         * @param callFun?{Function} - 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
         */
        destroyEvent(eventName: string, callFun?: Function): void;
        /**
         * 是否該事件持續監聽中
         * @param {string} eventName - 事件名稱
         * @return {boolean}
         */
        hasListening(eventName: string): boolean;
        get eventCount(): number;
        get eventsCurrentlyBeing(): Map<string, string>;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲場景樣式
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum SceneStyleType {
            /**
             * 自動模式,將會配合玩家自動切換直式或橫式
             * @type {SceneStyleType.AUTO}
             */
            AUTO = "AUTO",
            /**
             * 橫式樣式
             * @type {SceneStyleType.HORIZONTAL}
             */
            HORIZONTAL = "HORIZONTAL",
            /**
             * 直式樣式
             * @type {SceneStyleType.VERTICAL}
             */
            VERTICAL = "VERTICAL"
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author 蕭立品
         * @Description 當前方向
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum SceneDirectionType {
            /**
             * 直向
             * @type {SceneDirectionType.PORTRAIT}
             */
            PORTRAIT = "PORTRAIT",
            /**
             * 橫向
             * @type {SceneDirectionType.LANDSCAPE}
             */
            LANDSCAPE = "LANDSCAPE"
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 場景管理器
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ISceneManager {
            /**
             *
             */
            sceneDirection: type.SceneDirectionType;
            /**
             * cavers 設計寬度
             * @param {number} width - 寬度
             * @returns {this}
             */
            setDesignWidth(width: number): this;
            /**
             * cavers 設計高度
             * @param {number} height - 高度
             * @return {this}
             */
            setDesignHeight(height: number): this;
            /**
             * 更新當前示配寬高,會保存上次的scene更動模式
             * 如不添加 style 參數 ,第一次將會使用預設模式更動,
             * 如果已經更動過,將會使用你上次的style樣式
             * @param {SceneStyleType | Function} style : 可自定義更動樣式,但實作(介面)ISceneStyle
             * @return {this}
             */
            updateSize(style?: type.SceneStyleType | ISceneStyle): this;
            /**
             * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
             * 將會比照上次更動的樣式進行更動
             * 如果需求更動樣式,須先更新 updateSize()
             * @param {number} time : 更新的頻率 單位毫秒 ms
             */
            startListener(time: number): void;
            /**
             * 更換場景
             * @param {string} name - 場景資源名稱為你Res動態加載的自訂義的scene名稱
             */
            changeScene(name: string): void;
            /**
             * 清除該scene所有動作
             * @param scene{cc.Component} - 要清除的scene class
             */
            removeScene(scene: cc.Component): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 監聽當前遊戲,玩家是否有更動寬高
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneSizeChangeListener {
        private _isCanUpdateScene;
        private configManager;
        private sceneManager;
        constructor(configManager: IF.IConfigManager, sceneManager: IF.ISceneManager);
        /**
         * 監聽是否要更動scene寬高
         * @param {number} delayTime - 更新頻率
         */
        designSceneEventListener(delayTime: number): void;
        /**
         * 依照designSceneEventListener()參數中的delay時間,更新cavers
         * @param {number} time - 更新頻率
         * @return {Promise<void>}
         * @private
         */
        private makeDesignScene;
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author XIAO-LI-PIN
         * @Description TODO
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        abstract class ABaseNotification implements IF.IBaseNotification {
            /**
             * (抽象)NotificationHandler 用來獲取這個class的標籤
             * 詳細由子類實現
             */
            abstract readonly TAG_NAME: string;
            /**
             * 觀察者
             * @type {Set<IBaseObserver>}
             * @protected
             */
            protected readonly observer: Set<IF.IBaseObserver>;
            /**
             * (抽象)推播事件,參數由子類詳細實現
             * @param any
             */
            abstract notify(...any: any[]): void;
            protected constructor();
            /**
             * 訂閱該事件
             * @param {IBaseObserver} observer - 關注者
             * @param {boolean} isPermanent - 是否常駐
             */
            subscribe(observer: IF.IBaseObserver, isPermanent: boolean): void;
            /**
             * 移除訂閱
             * @param {IBaseObserver} observer - 關注者
             */
            unsubscribe(observer: IF.IBaseObserver): void;
            /**
             * 移除所有訂閱
             */
            removeAll(): void;
            /**
             * 獲取該事件所有訂閱數量
             */
            getSubscribeCount(): number;
            /**
             * 獲取該事件所有訂閱者
             */
            getAllSubscribe(): Set<IF.IBaseObserver>;
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 推播事件
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum NotificationType {
            /**
             * 自動狀態改變時
             * @type {fcc.type.NotificationType.AUTO_CHANGE}
             */
            AUTO_CHANGE = "AUTO_CHANGE",
            /**
             * 當前遊戲速度狀態改變時
             * @type {fcc.type.NotificationType.SPEED_CHANGE}
             */
            SPEED_CHANGE = "SPEED_CHANGE",
            /**
             * 用戶金額變更時
             * @type {fcc.type.NotificationType.USER_MONEY_CHANGE}
             */
            USER_MONEY_CHANGE = "USER_MONEY_CHANGE",
            /**
             * 用戶更換的押住金額時
             * @type {fcc.type.NotificationType.USER_BET_CHANGE}
             */
            USER_BET_CHANGE = "USER_BET_CHANGE",
            /**
             * 用戶贏分時
             * @type {fcc.type.NotificationType.USER_GET_WIN}
             */
            USER_GET_WIN = "USER_GET_WIN",
            /**
             * 用戶改變mobile方向時
             * @type {fcc.type.NotificationType.SCENE_DIRECTION_CHANGE}
             */
            SCENE_DIRECTION_CHANGE = "SCENE_DIRECTION_CHANGE",
            /**
             * server 回傳結果時
             * @type {fcc.type.NotificationType.RESPONSE_RESULT}
             */
            RESPONSE_RESULT = "RESPONSE_RESULT",
            /**
             * 瞇排事件時
             * @type {fcc.type.NotificationType.SCROLL_FOCUS_STATE}
             */
            SCROLL_FOCUS_STATE = "SCROLL_FOCUS_STATE",
            /**
             * 監聽SLOT所有列,當該列結束時,推播事件
             * @type {fcc.type.NotificationType.AUTO_CHANGE}
             */
            SLOT_ROW_END = "SLOT_ROW_END",
            /**
             * 即停事件
             */
            STOP_NOW = "STOP_NOW"
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變觀察者,當有事件推送時,將會將該事件推播給綁定者
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneDirectionChangeObserver implements IF.IBaseObserver {
        private _isPermanent;
        private readonly self;
        private readonly callFun;
        constructor(callFun: (type: type.SceneDirectionType) => void, self: any);
        pushNotification(type: type.SceneDirectionType): void;
        get isPermanent(): boolean;
        set isPermanent(value: boolean);
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變通知管理器
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneDirectionChangeNotification extends ABS.ABaseNotification {
        /**
         * NotificationHandler 用來獲取這個class的標籤
         * @type {string}
         */
        readonly TAG_NAME: string;
        constructor();
        /**
         * 訂閱該事件
         * @param {AutoStateChangeObserver} observer - 推撥接收者
         * @param {boolean} isPermanent - 是否常駐監聽
         */
        subscribe(observer: SceneDirectionChangeObserver, isPermanent: boolean): void;
        /**
         * 用戶更換方向時推送通知
         * @param {SceneDirectionType} type - 當前用戶方向
         */
        notify(type: type.SceneDirectionType): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 自動模式 : 依照玩家當前的使用方式,自動更新為橫式 or 直式
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class AutoStyle implements IF.ISceneStyle {
        private sceneManager;
        private readonly eventLock;
        constructor(sceneManager: IF.ISceneManager);
        executionStyle(width: number, height: number): void;
        /**
         * 更新管理器內的 sceneDirection 變數,並推撥已更新當前場景方向的事件
         *
         * 注意 : 如果當前方向不變,卻更新了遊戲是配度,是不會推波事件的
         *       只有方向改變才會推送推波事件
         */
        updateSceneDirection(): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 橫式樣式更新
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class HorizontalStyle implements IF.ISceneStyle {
        private curDR;
        executionStyle(width: number, height: number): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 直式樣式更新
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class VerticalStyle implements IF.ISceneStyle {
        executionStyle(width: number, height: number): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 依照初始設定對應的更新模式,更新當前遊戲場景
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneStyleHandler {
        private autoStyle;
        private horizontalStyle;
        private verticalStyle;
        private readonly sceneManager;
        constructor(sceneManager: IF.ISceneManager);
        /**
         * 匹對對應的更新類,做相對應的更新
         * @param {fcc.type.SceneStyleType | fcc.IF.ISceneStyle} sceneStyle - 對應的的樣式 or 自訂義樣式
         * @param {number} width - 寬
         * @param {number} height - 高
         */
        getStyle(sceneStyle: type.SceneStyleType | IF.ISceneStyle, width: number, height: number): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneManager implements IF.ISceneManager {
        private configManager;
        private static _instance;
        private style;
        private _designWidth;
        private _designHeight;
        private sceneSizeChangeListener;
        private sceneStyleHandler;
        private _sceneDirection;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         * @param {fcc.IF.IConfigManager} configManager
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.ISceneManager;
        /**
         * cavers 設計寬度
         * @param {number} width - 寬度
         * @return {this}
         */
        setDesignWidth(width: number): this;
        /**
         * cavers 設計高度
         * @param {number} height - 高度
         * @return {this}
         */
        setDesignHeight(height: number): this;
        /**
         * 更新當前示配寬高,會保存上次的scene更動模式
         * 如不添加參數,第一次將會使用預設模式更動
         * @param {SceneStyleType | Function} style - 可自定義更動樣式,但需實作(介面)ISceneStyle
         * @return {this}
         */
        updateSize(style?: type.SceneStyleType | IF.ISceneStyle): this;
        /**
         * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
         * 將會比照上次更動的樣式進行更動
         * 如果需求更動樣式,須先更新 updateSize()
         * @param {number} time : 更新的頻率 單位毫秒 ms
         */
        startListener(time: number): void;
        /**
         * 更換場景
         * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
         */
        changeScene(name: string): void;
        /**
         * 清除該scene所有動作
         * @param scene{cc.Component} - 要清除的scene class
         */
        removeScene(scene: cc.Component): void;
        get sceneDirection(): type.SceneDirectionType;
        set sceneDirection(value: type.SceneDirectionType);
    }
}
declare namespace fcc {
    namespace IF {
        interface ISlotStyleManager {
            readonly slot: Map<string, fcc.IF.IBaseSlotTemplate<IF.IBaseSlotSetting>>;
            readonly slotStyle: Map<string, IF.IBaseSlotSetting>;
            /**
             * 添加老虎機主流程 需繼承 ISlot
             * @param {T} slotTemplate
             * @return {this}
             */
            setSlotTemplate<T extends ABaseSlotTemplate<fcc.IF.IBaseSlotSetting>>(slotTemplate: new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => T): this;
            /**
             * 添加slot主事件樣式設定
             * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
             * @return {T}
             */
            setSlotStyle<T extends IF.IBaseSlotSetting>(slotSetting?: new (slotStyleManager: IF.ISlotStyleManager) => T): T;
            /**
             * 初始所有操作,並實例化  綁定的 slot Class
             */
            build(slotSetting: IF.IBaseSlotSetting): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SlotStyleManager implements IF.ISlotStyleManager {
        private static _instance;
        private readonly configManager;
        private template;
        private readonly _slot;
        private readonly _slotStyle;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.ISlotStyleManager;
        /**
         * 添加執行流程的class 需繼承 ABaseSlotTemplate
         * @param {{new(styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager): T}} slotTemplate
         * @return {this}
         */
        setSlotTemplate<T extends ABaseSlotTemplate<fcc.IF.IBaseSlotSetting>>(slotTemplate: new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => T): this;
        /**
         * 添加slot主事件樣式設定
         * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
         * @return {T}
         */
        setSlotStyle<T extends IF.IBaseSlotSetting>(slotSetting?: new (slotStyleManager: IF.ISlotStyleManager) => T): T;
        /**
         * 初始化Slot : 將Slot設定參數給予Slot做初始處理
         */
        build(slotSetting: IF.IBaseSlotSetting): void;
        get slot(): Map<string, fcc.IF.IBaseSlotTemplate<IF.IBaseSlotSetting>>;
        get slotStyle(): Map<string, fcc.IF.IBaseSlotSetting>;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 老虎機類遊戲初期設定
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ISlotConfigManager extends IConfigManager {
            /**
             * 是否在遊戲進入後開啟auto狀態
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isAuto: boolean;
            /**
             * 初始遊戲最初的auto次數
             * @type {AutoType}
             * @default type.AutoType.AUTO
             * @private
             */
            readonly autoCount: number;
            /**
             * 初始開始遊戲前是否是加速狀態
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isSpeedUp: boolean;
            /**
             * 初始遊戲最初的auto次數
             * @param {AutoType} type
             * @default type.AutoType.AUTO
             * @returns {this}
             */
            setAutoCont(type: number): this;
            /**
             * 初始進入遊戲時Auto狀態
             * @param {boolean} isAuto - 是否在遊戲進入後開啟auto狀態
             * @default false
             * @returns {this}
             */
            setAutoState(isAuto: boolean): this;
            /**
             * 是否在遊戲進入後是加速的狀態
             * @param {boolean} isSpeedUp
             * @default false
             * @returns {this}
             */
            setSpeedState(isSpeedUp: boolean): this;
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description TODO
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum LanguageType {
            /**
             * 台灣
             * @type {LanguageType.TAIWAN}
             */
            TAIWAN = "NTD",
            /**
             * 中國
             * @type {LanguageType.CHINESE}
             */
            CHINESE = "CNY",
            /**
             * 泰國
             * @type {LanguageType.THAILAND}
             */
            THAILAND = "THB",
            /**
             * 美國
             * @type {LanguageType.AMERICA}
             */
            AMERICA = "USD",
            /**
             * 越南
             * @type {LanguageType.VIETNAM}
             */
            VIETNAM = "VND",
            /**
             * 印尼
             */
            INDONESIA = "IDR",
            /**
             * 印度
             */
            INDIA = "INR",
            /**
             * 日本
             * @type {fcc.type.LanguageType.JAPAN}
             */
            JAPAN = "JPY",
            /**
             * 韓國
             * @type {fcc.type.LanguageType.KOREA}
             */
            KOREA = "KWR",
            /**
             * 馬來西亞
             */
            MALAYSIA = "MYR"
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲自動狀態種類
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum AutoType {
            /**
             * 無限AUTO
             * @type {AutoType.AUTO}
             */
            AUTO = -1,
            /**
             * 直到Free出現後,結束AUTO狀態
             * @type {AutoType.AUTO}
             */
            FREE_END = -2,
            /**
             * AUTO 50次
             * @type {AutoType.AUTO_50}
             */
            AUTO_50 = 50,
            /**
             * AUTO 100次
             * @type {AutoType.AUTO_100}
             */
            AUTO_100 = 100,
            /**
             * AUTO 500次
             * @type {AutoType.AUTO_100}
             */
            AUTO_500 = 500,
            /**
             * AUTO 1000次
             * @type {AutoType.AUTO_1000}
             */
            AUTO_1000 = 1000
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲初始設定,並透過builder加載所有Manager
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SlotConfigManager implements IF.ISlotConfigManager {
        private static _instance;
        /**
         * 載入外部資源URL
         * @type {string}
         * @private
         */
        private _externallyLoadURL;
        /**
         * 當前遊戲名稱
         * @type {string}
         * @private
         */
        private _gameNumber;
        /**
         * 是否在遊戲進入後開啟auto狀態
         * @type {boolean}
         * @private
         */
        private _isAuto;
        /**
         * 初始遊戲最初的auto次數
         * @type {AutoType}
         * @private
         */
        private _autoCount;
        /**
         * 是否在遊戲進入後是加速的狀態
         * @type {boolean}
         * @private
         */
        private _isSpeedUp;
        /**
         * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
         * @type {number}
         * @private
         */
        private _musicVolume;
        /**
         * 初始將背景音樂靜音
         * @type {boolean}
         * @private
         */
        private _isMusicOnMute;
        /**
         * 初始效果音量(該音量將會成為AudioManager內預設音量)
         * @type {number}
         * @private
         */
        private _effectVolume;
        /**
         * 初始將效果音效靜音
         * @type {boolean}
         * @private
         */
        private _isEffectOnMute;
        /**
         * 當前語系
         * @type {LanguageType}
         * @private
         */
        private _language;
        /**
         * 返回首頁URL
         */
        private _backHomeURL;
        /**
         * 是否要開啟Framework Debug模式
         * 注意:遊戲正式上線須關閉
         * @type {boolean}
         * @private
         */
        private _isFrameworkDebug;
        /**
         * cocos 框架 debug設定
         * @default : INFO
         */
        private _cocosDebugSetting;
        private constructor();
        /**
         * 懶漢加載
         * 初始化,只讓一個專案只有一次產生此class
         * @returns {SlotConfigManager}
         */
        static get instance(): IF.ISlotConfigManager;
        /**
         * 添加遊戲名稱
         * @param {string} name - 遊戲名稱
         * @default null
         * @returns {this}
         */
        setGameNumber(name: string): this;
        /**
         * 設置初始預設音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        setMusicVolume(number: number): this;
        /**
         * 設置初始預設效果音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        setEffectVolume(number: number): this;
        /**
         * 初始將背景音樂靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        setMusicOnMute(OnMute: boolean): this;
        /**
         * 初始是否將效果音效靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        setEffectOnMute(OnMute: boolean): this;
        /**
         * 初始遊戲最初的auto次數
         * @param {AutoType} type
         * @default type.AutoType.AUTO
         * @returns {this}
         */
        setAutoCont(type: type.AutoType): this;
        /**
         * 初始要從外部拿取資源的URL
         * @param {string} url : 獲取外部資源的URL
         * @default ""
         * @returns {this}
         */
        setExternallyLoadURL(url: string): this;
        /**
         * 初始語系
         * @param {LanguageType} languageType - 語系
         * @default LanguageType.CHINESE
         * @returns {this}
         */
        setLanguage(languageType: string): this;
        /**
         * 初始進入遊戲時Auto狀態
         * @param {boolean} isAuto - 是否在遊戲進入後開啟auto狀態
         * @default false
         * @returns {this}
         */
        setAutoState(isAuto: boolean): this;
        /**
         * 是否在遊戲進入後是加速的狀態
         * @param {boolean} isSpeedUp
         * @default false
         * @returns {this}
         */
        setSpeedState(isSpeedUp: boolean): this;
        /**
         * 是否要開啟Framework Debug模式
         * 注意:遊戲正式上線須關閉
         * @param {boolean} use
         * @default true
         * @returns {this}
         */
        setFrameWorkDebug(use: boolean): this;
        /**
         * cocos 框架 debug設定
         * @param {cc.debug.DebugMode} type - debug 樣式
         * @default - cc.debug.DebugMode.INFO
         * @return {this}
         */
        setCocosDebug(type: cc.debug.DebugMode): this;
        /**
         * 返回首頁URL
         * @param {string} url
         * @default null
         * @returns {this}
         */
        setBackHomeURL(url: string): this;
        /**
         * 實例化所有Manager class;
         */
        build(): void;
        get externallyLoadURL(): string;
        get gameNumber(): string;
        get isAuto(): boolean;
        get autoCount(): number;
        get isSpeedUp(): boolean;
        get musicVolume(): number;
        get effectVolume(): number;
        get language(): type.LanguageType | string;
        get isFrameworkDebug(): boolean;
        get isEffectOnMute(): boolean;
        get isMusicOnMute(): boolean;
        get backHomeURL(): string;
        get cocosDebugSetting(): cc.debug.DebugMode;
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入外部腳本
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        abstract class ALoadScriptType {
            protected scriptName: string;
            protected type: string;
            protected url: string;
            protected parameter: string;
            protected static head: HTMLHeadElement;
            protected constructor(scriptName: string, type: string, url: string, parameter: string);
            abstract loadScript(): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 加載外部css資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class CSSLoad extends ABS.ALoadScriptType {
        private readonly linkElem;
        constructor(scriptName: string, type: string, url: string, parameter: string);
        loadScript(): void;
    }
}
declare namespace fcc {
    class ScriptLoad extends ABS.ALoadScriptType {
        /**
         * @Author XIAO-LI-PIN
         * @Description 載入外部 js 腳本
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        private readonly linkElem;
        constructor(scriptName: string, type: string, url: string, parameter: string);
        loadScript(): void;
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入各類cocos資源
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        abstract class ALoadType implements IF.ILoadType {
            protected type: any;
            protected url: string;
            protected dataName: string;
            protected folder: string;
            protected isMainLoad: boolean;
            private beforeProgress;
            private assetBundle;
            constructor(loadConfig: IF.ILoadConfig);
            /**
             * 加載資源方法
             */
            loadResources(): void;
            /**
             * 回傳該加載的資源
             * @param {Error} error - 錯誤訊息
             * @param {[] | cc.SceneAsset} assets - 資源
             * @private
             */
            private loadResCallBack;
            /**
             * 回傳當前載入進度
             * @param {number} complete - 以載入完畢的數量
             * @param {number} TotalAmount - 總數量
             * @private
             */
            private loadResProgress;
            /**
             * 載入完成後回調
             * @protected
             */
            protected updateProgressEnd(): void;
            /**
             * 繼續加載
             */
            private continueLoad;
            /**
             * 更新當前進度
             * @param {string} key - 該資源名稱
             * @param {number} state - 當前進度
             * @param {number} update - 更上次進度比起,新增了多少進度
             * @protected
             */
            protected updateManagerState(key: string, state: number, update: number): void;
            /**
             * 將資源保存在管理器中
             * @param {string} dataName - 自訂義該資源名稱
             * @param asset - 資源
             * @protected
             */
            protected abstract setResToManager(dataName: string, asset: any): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ImgLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SpriteAtlas} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.SpriteFrame[]): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入音樂資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class MusicLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<cc.AudioClip>): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class PrefabLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<cc.Prefab>): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入場景資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SceneLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: any): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入骨骼动画資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SpineLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {sp.SkeletonData} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<sp.SkeletonData>): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入文本資源,目前只能載入.CSV 檔案
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class TextLoad extends ABS.ALoadType {
        /**
         *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
         *  因此需自行檢查回傳資料是否正確
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.TextAsset} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.TextAsset): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入各類資源工廠
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class LoadTypeFactory implements IF.ILoadFactory {
        private assetBundles;
        private configManager;
        private loadResManager;
        constructor(loadResManager: IF.ILoadResManager, configManager: IF.IConfigManager);
        /**
         * 載入外部Bundle
         */
        loadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        /**
         * 次資源加載
         * @param {string} dataName - 檔案名稱
         * @param {fcc.type.LoadType} type - 檔案類型
         * @param {string} url - 檔案位置
         * @return {Promise<void>}
         */
        loadInSideBundle(dataName: string, type: type.LoadType, url: string): Promise<void>;
        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        executeLoad(dataName: string, type: type.LoadType, url: string): void;
        /**
         * 執行Bundle載入動作
         * @param dataName - 自訂義資源名稱
         * @param type - 資源類型
         * @param url - 資源位置
         */
        executeLoadBundle(dataName: string, type: type.LoadType, url: string): Promise<void>;
        /**
         * 載入外部資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        executeLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        /**
         * 加載主要外部資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        executeMainLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        /**
         * 確認當前資源類型,給相對應class 處理
         * @param {fcc.IF.ILoadConfig} loadConfig
         * @private
         */
        private checkLoadType;
        /**
         * 加載外部腳本
         * @param name - 檔案名稱,不含副檔名
         * @param type - 檔案類型
         * @param url - 檔案url,不含外部 url
         * @param parameter - get 參數
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string, parameter: string): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 處理個別類型資源載入
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class LoadTypeHandler implements IF.ILoadFactory {
        private factory;
        private loadResManager;
        constructor(loadResManager: IF.ILoadResManager, configManager: IF.IConfigManager);
        /**
         * 檢測當前Type,做各自對應的加載動作
         * @param name
         * @param type
         * @param url
         */
        executeLoad(name: string, type: type.LoadType, url: string): void;
        /**
         * 執行Bundle載入動作
         * @param name
         * @param type
         * @param url
         */
        executeLoadBundle(name: string, type: type.LoadType, url: string): Promise<void>;
        /**
         * 加載主要外部資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        executeMainLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        /**
         * 外部加載資源
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {Promise<void>}
         */
        executeLoadOutSideBundle(outSideData: IF.IOutSideData): Promise<void>;
        /**
         * 檢查重複命名
         * @param {string} name
         * @private
         */
        private checkRepeatTheName;
        /**
         * 加載外部腳本
         * @param name - 檔案名稱,不含副檔名
         * @param type - 檔案類型
         * @param url - 檔案url,不含外部 url
         * @param parameter - get 參數
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string, parameter: string): void;
    }
}
declare namespace fcc {
    namespace IF {
        interface IAssetData {
            /**
             * 資源自訂義名稱
             */
            name: string;
            /**
             * 資源類型
             */
            loadType: fcc.type.LoadType;
            /**
             * 資源位置
             */
            url: string;
            /**
             * 當前是否為外部資源
             */
            assetMode: type.ASSET_MODE;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 資源管理者 : 加載資源,保存資源,或取當前加載進度
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class LoadResManager implements IF.ILoadResManager {
        private configManager;
        private static _instance;
        /**
         * 初始加載物件進度
         */
        private _initialLoadState;
        /**
         * 次加載,可以在還未加載完成時,也能進入MainGame Scene
         */
        private _secondaryLoadState;
        /**
         * 外部資料加載資源狀態
         * @type {Map<string, number>}
         * @private
         */
        private readonly _scriptLoadState;
        /**
         * img物件保存
         */
        private _imgRes;
        /**
         * spine 物件保存
         */
        private _spineRes;
        /**
         * 讀取後的文件檔案,保存位置
         */
        private _readFileRes;
        /**
         * 讀取後的Prefab,保存位置
         */
        private _prefabRes;
        /**
         * 音樂保存位置
         */
        private _musicRes;
        /**
         * 外部腳本保存URL地址,單存判斷是否重複加載
         * @type {Set<string>}
         */
        private _scriptRes;
        /**
         * 場景保存位置
         */
        private _sceneRes;
        /**
         * 載入順序
         */
        currentLoadOrder: Array<IF.IAssetData | IF.IOutSideData>;
        private readonly loadTypeHandler;
        private callFun;
        private count;
        private allProgress;
        private beforeProgress;
        private allProgressEndCount;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.ILoadResManager;
        /**
         * 主資源加載物件,監聽是否有callback,隨之返回該狀態
         * @param name - 加載物件名稱,由使用者自訂義加載名稱
         * @param progress - 加載進度
         * @param state - 該物件加載百分比
         */
        loadMainEventCallback(name: string, progress: number, state: number): void;
        /**
         * 次資源加載物件,監聽是否有callback,隨之返回該狀態
         * 注意,該狀態無總資源監聽回傳事件
         * @param {string} name - 加載物件名稱,由使用者自訂義加載名稱
         * @param {number} state - 該物件加載百分比
         */
        loadSecondaryEventCallback(name: string, state: number): void;
        /**
         * 外部資源加載完成返回
         * @param {string} name - 加載物件名稱(檔名)
         * @param {number} isError - 是否加載錯誤
         */
        loadScriptEventCallback(name: string, isError: boolean): void;
        /**
         * 單一資源返回判斷,用戶是否有添加callback參數
         * @param {string} name - 加載物件名稱
         * @param {number} state - 該物件加載百分比
         * @param isError - 是否有錯誤回傳(外部加載腳本用)
         * @private
         */
        private onlyResEventCallback;
        /**
         * 加載該資料夾底下所有資源 注意: 需存放於 resources中
         * @param {string} name - 自訂義拿取資源時的名稱
         * @param {LoadType} loadType - 要獲取的資源類型
         * @param {string} url - 要獲取的資源位置
         * @param {boolean} isLanguageUsed - 是否要使用語系位置
         * @return {this}
         */
        loadAsset(name: string, loadType: type.LoadType, url: string, isLanguageUsed?: boolean): this;
        /**
         * 加載 該 assetBundle 底下資源
         * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
         * 注意:須於UI勾選配置為Bundle資料夾
         * @param {string} name - 自訂義拿取資源時的名稱
         * @param {LoadType} loadType - 要獲取的資源類型
         * @param {string} url - 要獲取的資源位置
         * @param {boolean} isLanguageUsed - 是否要使用語系位置
         */
        loadBundle(name: string, loadType: type.LoadType, url: string, isLanguageUsed?: boolean): this;
        /**
         * 載入遠程外部Bundle
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {this}
         */
        loadMainOutSideAsset(outSideData: IF.IOutSideData): this;
        /**
         * 載入遠程外部Bundle
         * @param {fcc.IF.IOutSideData} outSideData
         * @returns {this}
         */
        loadOutSideAsset(outSideData: IF.IOutSideData): this;
        /**
         * 執行載入,不判斷載入資源資源進度
         * @param {fcc.IF.IAssetData | IF.IOutSideData} assetData - 需載入的資源資料
         */
        executeLoad(assetData: IF.IAssetData | IF.IOutSideData): void;
        /**
         * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
         * @param {(progress: number,isError?:boolean) => void} callFun
         * @param {string} resName - 檔案名稱
         * @returns {this}: methodName 未使用情況,回傳 void
         */
        callback(callFun: (progress: number, isError?: boolean) => void, resName?: string): this;
        /**
         * 查看該資源是否已加載完畢
         * @param name
         * @param isMainResources
         */
        getLoadState(name: string, isMainResources: boolean): boolean;
        /**
         * 加載外部腳本
         * @param name - 檔案名稱,不含副檔名
         * @param type - 檔案類型
         * @param url - 檔案URL,不含外部 URL
         * @param parameter - GET 參數
         * @returns {this}
         */
        loadExternalScript(name: string, type: type.LoadType, url: string, parameter?: string): this;
        /**
         * 清除資源
         * @param {string} type - 資源類型
         */
        remove(type: string): void;
        set initialLoadState(value: Map<string, number>);
        set secondaryLoadState(value: Map<string, number>);
        set imgRes(value: Map<string, Map<string, cc.SpriteFrame>>);
        set spineRes(value: Map<string, sp.SkeletonData>);
        set readFileRes(value: Map<string, Map<string, string>>);
        set prefabRes(value: Map<string, cc.Prefab>);
        set musicRes(value: Map<string, cc.AudioClip>);
        set scriptRes(value: Set<string>);
        set sceneRes(value: Map<string, cc.SceneAsset>);
        get initialLoadState(): Map<string, number>;
        get secondaryLoadState(): Map<string, number>;
        get scriptLoadState(): Map<string, number>;
        get imgRes(): Map<string, Map<string, cc.SpriteFrame>>;
        get spineRes(): Map<string, sp.SkeletonData>;
        get readFileRes(): Map<string, Map<string, string>>;
        get prefabRes(): Map<string, cc.Prefab>;
        get musicRes(): Map<string, cc.AudioClip>;
        get scriptRes(): Set<string>;
        get sceneRes(): Map<string, cc.SceneAsset>;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂撥放|暫停控制器,跟音效類稍微不同,只保存當下一個MusicID
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class MusicController implements IF.IAudioType {
        private musicID;
        constructor();
        /**
         * 撥放背景音樂,並配合享元資料,作相對應的撥放模式處理
         * @param {string} name
         * @param {Map<string, any>} data
         */
        play(name: string, data: Map<string, any>): void;
        /**
         *停止背景音樂
         */
        stop(): void;
        /**
         * 暫停背景音樂
         */
        pause(): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 效果音效撥放|暫停控制器
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class EffectController implements IF.IAudioType {
        private effectID;
        constructor();
        /**
         * 撥放效果音效,並配合享元資料,作相對應的撥放模式處理
         * @param {string} name
         * @param {Map<string, any>} data : 撥放模式資料
         */
        play(name: string, data: Map<string, any>): void;
        /**
         * 停止該音樂,並清除該Map effectID
         * @param {string} name
         */
        stop(name: string): void;
        /**
         * 停止所有音效,並清除整個Map effectID
         */
        stopAll(): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂工廠類,派發音樂事件
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class AudioFactory implements IF.IAudioFactory {
        private readonly musicVolume;
        private readonly effectVolume;
        private readonly canSuperimpose;
        private musicOnMute;
        private effectOnMute;
        private readonly loop;
        private readonly musicData;
        private readonly effectData;
        private musicNormalData;
        private effectNormalData;
        private musicController;
        private effectController;
        private audioManager;
        private configManager;
        constructor(audioManager: IF.IAudioManager, configManager: IF.IConfigManager);
        /**
         * 初始化享元預設撥放模式
         */
        private initializeData;
        /**
         * 保存該背景音樂撥放模式設定
         * @param {string} name - 音樂檔名稱
         * @param {number} volume - 音量
         * @param {boolean} loop - 是否循環
         */
        settingMusic(name: string, volume?: number, loop?: boolean): void;
        /**
         * 保存該效果音效撥放模式設定
         * @param {string} name -音樂檔名稱
         * @param {AudioStateType} canSuperimpose - 是否疊加撥放
         * @param {number} volume - 音量
         * @param {boolean} loop - 是否循環
         */
        settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): void;
        /**
         * 撥放背景音樂
         * 如果拿取不到享元撥放資料,將拿取預設資料
         * @param {string} name - 音樂檔名
         */
        musicPlay(name: string): void;
        /**
         * 撥放效果音效
         * 如果拿取不到享元撥放資料,將拿取預設資料
         * @param {string} name - 音樂檔名
         */
        effectPlay(name: string): void;
        /**
         * 停止背景音樂
         */
        musicStop(): void;
        /**
         * 暫停背景音樂
         */
        musicPause(): void;
        /**
         * 停止效果音校
         * @param {string} name - 音樂檔名
         */
        effectStop(name: string): void;
        /**
         * 停止所有效果音效
         */
        effectStopAll(): void;
        /**
         * 獲取該音樂撥放模式,如果返回NUll將照原預設
         * @param {string} name - 音樂檔名
         * @returns {Map<string, string | boolean | number>}
         */
        getMusicState(name: string): Map<string, string | number | boolean>;
        /**
         * 獲取該音效撥放模式,如果返回NUll將照原預設
         * @param {string} name - 音樂檔名
         * @returns {Map<string, string | boolean | number>}
         */
        getEffectState(name: string): Map<string, string | number | boolean>;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class AudioManager implements IF.IAudioManager {
        private configManager;
        private static _instance;
        private factory;
        private _musicOnMute;
        private _effectOnMute;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.IAudioManager;
        /**
         * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
         * ```
         *      預設參數:
         *          volume : 默認為 Config 內的音量參數
         *          loop : 默認 false
         * ```
         * @param {string} name - 音樂名稱
         * @param {number} volume - 音量 0~1
         * @param {boolean} loop - 是否重複撥放
         * @return {this}
         */
        settingMusic(name: string, volume?: number, loop?: boolean): this;
        /**
         * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
         * ```
         *      預設參數:
         *          canSuperimpose : fcc.type.AudioStateType.NOT_PLAYING
         *          volume : 默認為 Config 內的音量參數
         *          loop :默認為 false
         * ```
         * @param {string} name : 音效檔名
         * @param {AudioStateType} canSuperimpose : 能否疊加
         * @param {number} volume : 音量 0~1
         * @param {boolean} loop : 是否重複撥放
         * @return {this}
         */
        settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): this;
        /**
         * 撥放音樂,將會依照當初設定的參數進行播放
         * 若無發現可用參數設定,依照默認參數撥放
         * @param {string} name - 音樂檔名
         */
        musicPlay(name: string): void;
        /**
         * 撥放音效,將會依照當初設定的參數進行播放
         * 若無發現可用參數設定,依照默認參數撥放
         * @param {string} name - 音效檔名
         */
        effectPlay(name: string): void;
        /**
         * 停止音樂
         */
        musicStop(): void;
        /**
         * 暫停音樂
         */
        musicPause(): void;
        /**
         * 停止音效
         * @param {string} name - 音效檔名
         */
        effectStop(name: string): void;
        /**
         * 停止所有音效
         */
        effectStopAll(): void;
        /**
         * 獲取撥放的狀態
         * ```
         *      return data:
         *          volume : number
         *          loop : boolean
         * ```
         * @param {string} name - 音效檔名
         * @return {Map<string, string | boolean | number>} - 撥放設定參數
         */
        getMusicState(name: string): Map<string, string | boolean | number>;
        /**
         * 獲取撥放的狀態
         * ```
         *      return data:
         *          volume : number
         *          canSuperimpose : fcc.type.AudioStateType
         *          loop : boolean
         * ```
         * @param {string} name - 音樂檔名
         * @return {Map<string, string | fcc.type.AudioStateType |boolean | number>} -
         */
        getEffectState(name: string): Map<string, string | type.AudioStateType | boolean | number>;
        /**
         * 更新當前是否靜音模式
         * @return {boolean} 當前是否靜音
         */
        updateEffectOnMute(): boolean;
        /**
         * 更新當前是否靜音模式
         * @return {boolean} 當前是否靜音
         */
        updateMusicOnMute(): boolean;
        /**
         * 當前是否靜音背景音樂
         * @returns {boolean}
         */
        get effectOnMute(): boolean;
        /**
         * 當前是否靜音效果音效
         * @returns {boolean}
         */
        get musicOnMute(): boolean;
    }
    /**
     * 裝飾器
     * 撥放背景音樂
     * @param name {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function Music(name: string): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    /**
     * 裝飾器
     * 停止背景音樂
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function MusicStop(): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    /**
     * 裝飾器
     * 撥放效果音效
     * @param name[] {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function Effect(...name: string[]): (target: any, key: string, descriptor: PropertyDescriptor) => void;
    /**
     * 裝飾器
     * 暫停效果音效
     * @param name[] {string} : 音樂檔名
     * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
     * @constructor
     */
    function EffectStop(...name: string[]): (target: any, key: string, descriptor: PropertyDescriptor) => void;
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 語系管理器 : 保存當前語言本,語系樣式
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class LanguageManager implements IF.ILanguageManager {
        /**
         * 當前語言文字緩存
         * @type {{[p: string]: string}}
         */
        private languageCache;
        /**
         * 當前語系
         * @type {string}
         */
        private _nowLang;
        /**
         * 當前綁定的組件
         * @type {Map<cc.Label, string>}
         */
        private readonly _nowLanguageLabels;
        /**
         * 所有更新完後的label 都會保存至這,需要再次更換語系時使用
         * @type {Array<Map<cc.Label, string>>}
         * @private
         */
        private readonly allLanguageLabel;
        /**
         * 當前所有語系樣式列表
         * @type {object}
         */
        private readonly _style;
        private configManager;
        private static _instance;
        constructor(configManager: IF.IConfigManager);
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.ILanguageManager;
        /**
         * 添加默認樣式
         * @private
         */
        private initDefaultStyle;
        /**
         * 額外添加新的語系樣式
         * @param {string | fcc.type.LanguageType} key - 國家簡寫
         * @param {fcc.IF.ILanguageStyle} style - 新樣式
         */
        addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;
        /**
         * 更新語系,會更新當前所有已經綁定的 cc.Label
         * @param {string | fcc.type.LanguageType} language - 要更新的語系
         */
        updateLanguage(language: string | type.LanguageType): void;
        /**
         * 添加當前語系,拿取 window.language_Mode 內物件,作保存
         */
        setLanguage(languageObject: object): void;
        /**
         * 獲取當前語系
         * @return {string}
         */
        getLanguage(): string;
        /**
         * 獲取當前語系數據,返回該key對應的文字
         * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字 |(空參數)獲取當前語系數據,返回所有數據
         * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
         */
        getText(key: string): string;
        /**
         * 獲取當前語系緩存
         * @return {object}
         */
        getAllText(): object;
        /**
         * 重新獲取語系,並更新緩衝內
         * @param {object} languageObject - 語系資源
         * @param {string | fcc.type.LanguageType} language - 有參數為強制更新該參數語系,無參為當前拿取當前語系更新緩衝
         */
        reTakeLanguageBuffer(languageObject: object, language?: string | type.LanguageType): void;
        /**
         * TODO 清除無用的語系緩存
         */
        removeStringBuffer(): void;
        /**
         * 更新文字該label文字
         * @param {cc.Label} target - 要更新的目標
         * @param {string?} textKey - 要更新的文字 key
         * @return {this}
         */
        updateText(target: cc.Label, textKey?: string): this;
        /**
         * 更新所有透過 updateText更新的組件,更新該組件樣是
         * 注意 : 須配合 updateText 一起使用
         * @param {boolean} save - 是否要保存 label組件,可配合updateLanguage()方法將已經綁定的label全部再次更換語系文字
         * @param {number} customFontSize - 強制更新字定義的大小
         */
        updateStyle(save: boolean, customFontSize?: number): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 綁定自己需要的所有推撥者
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class NotificationManager<T extends IF.IBaseNotification> implements IF.INotificationManager<T> {
        /**
         * 保存使用中的推撥者
         * @type {Map<string, IBaseNotification>}
         * @protected
         */
        protected readonly notificationToMap: Map<string, T>;
        /**
         * 懶漢加載
         * @type {NotificationManager<any>}
         * @private
         */
        private static _instance;
        private constructor();
        /**
         * 懶漢加載
         * @return {INotificationHandler<T>}
         */
        static instance<T extends IF.IBaseNotification>(): IF.INotificationManager<T>;
        /**
         * 添加推撥者
         * @param {T} notification - 推撥者
         * @return {this}
         */
        setNotification(notification: T): this;
        /**
         * 獲取以綁定的推播者
         * @param {string} type - 事件名稱
         * @return
         */
        getNotification(type: string): T;
        /**
         * 查看該事件是否已經加入管理器中
         * @param {string} type - 事件名稱
         * @return {boolean}
         */
        hasNotification(type: string): boolean;
        /**
         * 拿取所有以綁定的推播
         * @return {Map<String, T>}
         */
        getAllNotifications(): Map<String, T>;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IPool {
            /**
             * 獲取緩存池內物件
             * @return {cc.Node}
             */
            get(): cc.Node;
            /**
             * 獲取該對象池內物件大小
             * @return {number}
             */
            size(): number;
            /**
             * 將物件返回對象池中
             * @param node - 要返回的物件
             * @param nodePool 是否放入NodePool中
             */
            put(node: cc.Node, nodePool?: boolean): any;
            clear(): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class CCNodePool implements IF.IPool {
        private pool;
        private readonly prefab;
        private readonly name;
        /**
         *
         * @param {string} name
         * @param {cc.Prefab | cc.Node} nodeOrPrefab - 要建立的物件
         * @param {number} count 初始化個數
         */
        constructor(name: string, nodeOrPrefab: cc.Prefab | cc.Node, count: number);
        getName(): string;
        get(): cc.Node;
        getNode(): cc.Node | cc.Prefab;
        size(): number;
        put(node: cc.Node): void;
        clear(): void;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class SelfPool implements IF.IPool {
        private list;
        private readonly pool;
        constructor(pool: CCNodePool);
        get(): cc.Node;
        getPool(): CCNodePool;
        size(): number;
        /**
         * 將物件返回對象池中
         * @param node
         * @param nodePool 是否放入NodePool中
         */
        put(node: cc.Node, nodePool?: boolean): void;
        clear(): void;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 緩存池管理器
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class NodePoolManager {
        private static _instance;
        static get instance(): NodePoolManager;
        /**
         * 對象池表
         * @type {Map<string, SelfPool>}
         * @private
         */
        private pools;
        /**
         * 保存node物件name名,使清除物件時,可透過該node物件的name名,查找對應的pool池的key
         * @type {Map<cc.Node, string>}
         * @private
         */
        private nameMap;
        /**
         * 初始該物件保存至緩存池中
         * @param {string} name 自訂物件名稱
         * @param {cc.Prefab | cc.Node} nodeOrPrefab - 要建立的物件
         * @param {number} count - 數量
         */
        init(name: string, nodeOrPrefab: cc.Prefab | cc.Node, count: number): void;
        /**
         * 獲取該緩存池
         * @param {string} key
         * @return {CCNodePool}
         */
        getPool(key: string): CCNodePool;
        /**
         * 獲取緩存池內物件
         * @param {string} key - 當初自訂義名稱
         * @return {cc.Node}
         */
        get(key: string): cc.Node;
        /**
         * 回收進對象池
         * @param {cc.Node} node - 要回收的物件
         * @param {boolean} nodePool - 是否要回收進對象池
         */
        put(node: cc.Node, nodePool: boolean): void;
        /**
         * 清除該對象池內所有物件
         * @param {string} name
         */
        clear(name: string): void;
        /**
         * 清除所有緩存池內所有物件
         */
        clearAll(): void;
    }
}
declare namespace fcc {
    /**
     * 遊戲初始設定,並透過builder加載所有Manager
     * @return {fcc.IF.IConfigManager}
     * @private
     */
    const configMgr: IF.ISlotConfigManager;
    /**
     * 物件池管理器
     */
    const nodePoolMgr: NodePoolManager;
    /**
     * 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @return {fcc.IF.IAudioManager}
     */
    let audioMgr: IF.IAudioManager;
    /**
     * 框架錯誤管理
     * @return {fcc.IF.IErrorManager}
     */
    let errorMgr: IF.IErrorManager;
    /**
     * 語系管理器 : 保存當前語言本,語系樣式
     * @return {fcc.IF.ILanguageManager}
     */
    let languageMgr: IF.ILanguageManager;
    /**
     * 事件管理器,當前綁定的事件,事件數量
     * @return {fcc.IF.IEventManager}
     */
    let eventMgr: IF.IEventManager;
    /**
     * 資源管理者 : 加載資源,保存資源,獲取當前加載進度
     * @return {fcc.IF.ILoadResManager}
     */
    let loadMgr: IF.ILoadResManager;
    /**
     * 狀態機管理器 : 遊戲狀態機
     * @return {IF.IBaseFSM}
     */
    let FSMMgr: IF.IBaseFSM;
    /**
     * 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @return {fcc.IF.ISceneManager}
     */
    let sceneMgr: IF.ISceneManager;
    /**
     * 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     */
    let slotStyleMgr: IF.ISlotStyleManager;
    /**
     * 自訂義通知事件管理器,當前綁定的通知,通知數量
     * @return {fcc.IF.INotificationManager<T>}
     */
    function notificationMgr<T extends IF.IBaseNotification>(): IF.INotificationManager<T>;
}
/**
 * @Author 蕭立品
 * @Description 狀態機管理器
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    class FSMManager implements IF.IBaseFSM {
        private static _instance;
        private configManager;
        /**
         * 當前是否流程是否在執行中
         * @type {boolean}
         * @private
         */
        private isExecutingState;
        /**
         * 各狀態處理
         */
        stateHandler: StateHandler;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        static setInstance(): void;
        static get instance(): fcc.IF.IBaseFSM;
        /**
         * 添加初始狀態
         * @param {string} stateName - 狀態
         */
        initialState(stateName: string): void;
        /**
         * 初始化狀態動作,執行綁定的流程內的onCreate方法
         * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
         */
        initStateAction(stateName?: string): void;
        /**
         * 改變流程
         * @param {string} nextState - 下一個狀態
         */
        changeState(nextState: string): void;
        /**
         * 返回上一個狀態
         * @param {boolean} canReAction - 是否要重新執行動作
         */
        previousMoveState(canReAction: boolean): void;
        /**
         * 獲取當前狀態內容
         * @returns {IProcess}
         */
        getCurrentStateContent(): fcc.IF.IStateAction;
        /**
         * 拿取所有流程
         * @return {Map<string, IF.IBaseProcessTransition>}
         */
        getAllProcess(): Map<string, fcc.IF.IBaseProcessTransition>;
        /**
         * 獲取當前狀態
         * @return {string}
         */
        getCurrentState(): string;
        /**
         * 獲取上個狀態
         * @return {string}
         */
        getPreviousState(): string;
        /**
         * 獲取當前狀態紀錄
         * @return {Array<string>}
         */
        getStateRecord(): Array<string>;
        /**
         * 清空當前所有歷史的狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearStateRecord(): Array<string>;
        /**
         * 當前是否正在執行中
         * @return {boolean}
         */
        isExecution(): boolean;
        /**
         * 流程狀態開始
         * @param {string} startName - 要開始的狀態
         * @return {Promise<void>}
         */
        start(startName: string): Promise<void>;
        /**
         * 流程狀態釋放
         */
        exit(): void;
        /**
         * 創建狀態與流程
         * @return {fcc.IF.IBaseStateBuilder}
         */
        builder(): fcc.IF.IBaseStateBuilder;
    }
    /**
     * 裝飾器註冊FSM狀態
     * @param {string} state
     * @returns {Function}
     * @constructor
     */
    function FSMState(state: string): Function;
}
/**
 * @Author 蕭立品
 * @Description 狀態流程跳轉class,設定當前狀態與下一個可移動的狀態
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    class ProcessTransition implements IF.IBaseProcessTransition {
        /**
         * 當前狀態
         * @type {string}
         * @private
         */
        private readonly _currentState;
        /**
         * 下個可用狀態
         * @type {Set<string>}
         * @private
         */
        private readonly _nextState;
        constructor(currentState: string, nextState: Set<string>);
        /**
         * 是否可以前往下個流程
         * @return {boolean}
         */
        canReachNext(nextState: string): boolean;
        get currentState(): string;
    }
}
/**
 * @Author 蕭立品
 * @Description 狀態建構封裝
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    class StateBuilder {
        /**
         * 最大保存的狀態記錄數量
         * @type {number}
         * @default - 5
         * @private
         */
        private maxStateRecordCount;
        /**
         * 狀態處理器
         * @type {fcc.StateHandler}
         * @private
         */
        private stateHandler;
        constructor(stateHandler: StateHandler);
        /**
         * 設置最大保存的狀態記錄
         * @param {number} count - 最大保存數量
         * @default : 5
         */
        setMaxStateRecordCount(count: number): this;
        /**
         * 添加狀態
         * @param {string} stateName - 自訂義狀態名稱
         * @param {IF.IStateAction} state - 執行的狀態內容 class
         */
        setState(stateName: string, state: fcc.IF.IStateAction): this;
        /**
         * 建構狀態流程
         * @param {IF.IBaseProcessTransition} process
         */
        build(...process: IF.IBaseProcessTransition[]): void;
    }
}
/**
 * @Author 蕭立品
 * @Description 狀態確認處理
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    class StateHandler implements IF.IBaseFSM {
        /**
         * 當前所有狀態容器
         * @type {Map<string, null>}
         * @private
         */
        stateActionContainer: Map<string, IF.IStateAction>;
        /**
         * 當前流程容器
         * @type {Map<string, fcc.IF.IStateAction>}
         * @private
         */
        readonly processContainer: Map<string, IF.IBaseProcessTransition>;
        /**
         * 狀態紀錄器
         * @type {IF.IBaseStatusRecorder}
         * @private
         */
        stateRecorder: IF.IBaseStatusRecorder;
        /**
         * 流程開始
         * @type {(value: (PromiseLike<void> | void)) => void}
         * @private
         */
        private resolve;
        constructor();
        /**
         * 添加初始狀態
         * @param {string} stateName - 狀態
         */
        initialState(stateName: string): void;
        /**
         * 初始化狀態動作,執行綁定的流程內的onCreate方法
         * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
         */
        initStateAction(stateName?: string): void;
        /**
         * 改變流程
         * @param {string} nextState - 下一個狀態
         */
        changeState(nextState: string): void;
        /**
         * 返回上一個狀態
         * @param {boolean} canReAction - 是否要重新執行動作
         */
        previousMoveState(canReAction: boolean): void;
        /**
         * 獲取當前狀態內容
         * @returns {IProcess}
         */
        getCurrentStateContent(): fcc.IF.IStateAction;
        /**
         * 拿取所有流程
         * @return {Map<string, IF.IBaseProcessTransition>}
         */
        getAllProcess(): Map<string, IF.IBaseProcessTransition>;
        /**
         * 獲取當前狀態
         * @return {string}
         */
        getCurrentState(): string;
        /**
         * 獲取上個狀態
         * @return {string}
         */
        getPreviousState(): string;
        /**
         * 獲取當前狀態紀錄
         * @return {Array<string>}
         */
        getStateRecord(): Array<string>;
        /**
         * 清空當前所有歷史狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearStateRecord(): Array<string>;
        /**
         * 當前是否正在執行中
         * @return {boolean}
         */
        isExecution(): boolean;
        /**
         * 流程狀態開始
         * @param {string} startName - 要開始的狀態
         * @return {Promise<void>}
         */
        start(startName: string): Promise<void>;
        /**
         * 流程狀態釋放
         */
        exit(): void;
        builder(): fcc.IF.IBaseStateBuilder;
    }
}
/**
 * @Author 蕭立品
 * @Description 狀態紀錄器
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    class StatusRecorder implements IF.IBaseStatusRecorder {
        /**
         * 保存使用過的狀態
         * @type {Array<string>}
         * @private
         */
        private record;
        /**
         * 當前的狀態指針位置
         * @type {number}
         * @private
         */
        private statePointer;
        /**
         * 最大紀錄數量
         * @type {number}
         * @private
         */
        private readonly maxRecordCount;
        /**
         * 當前狀態
         * @type {string}
         * @private
         */
        private currentState;
        /**
         * 上一個狀態
         * @type {string}
         * @private
         */
        private previousState;
        constructor(maxRecordCount: number);
        /**
         * 更新狀態紀錄
         * @param {string} nextState - 要更新的狀態
         */
        updateStateRecord(nextState: string): void;
        /**
         * 更新為上個狀態
         * @return {boolean} - 是否還能返回上個動作
         */
        updatePreviousState(): boolean;
        /**
         * 當前狀態
         * @return {string}
         */
        getCurrentState(): string;
        /**
         * 上一個狀態
         * @return {string}
         */
        getPreviousState(): string;
        /**
         * 獲取當前狀態記錄
         * @return {Array<string>}
         */
        getNowStateRecords(): Array<string>;
        /**
         * 清空當前所有歷史狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearRecord(): Array<string>;
    }
}
declare namespace fcc {
    namespace global {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:按鈕類方法
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        class Button {
            /**
             * 對該button添加監聽事件
             * @param {cc.Button} button - 按鈕組件
             * @param {string} methodName - 該按鈕綁定的方法名稱
             * @param self - 該方法存在的位置
             * @param customEventData - 回傳值
             */
            static addButtonEvent(button: cc.Button, methodName: string, self: any, customEventData?: any): void;
            /**
             * 禁用button
             * @param {cc.Button} button - 按鈕組件
             */
            static disableButton(button: cc.Button): void;
            /**
             * 啟用button
             * @param {cc.Button}button - 按鈕組件
             */
            static enableButton(button: cc.Button): void;
            /**
             * 對該node 添加 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture : "是否關閉多點觸控功能"
             */
            static addTouchStartEvent(node: cc.Node, method: Function, self: any, useCapture?: boolean): void;
            /**
             * 對該node 關閉 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {Function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture - 是否關閉多點觸控功能
             */
            static offTouchStartEvent(node: cc.Node, method: Function, self: any, useCapture?: boolean): void;
        }
    }
}
declare namespace fcc {
    namespace global {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:Prefab方法
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        class Prefab {
            /**
             * 尋訪該node底下一層節點內所有物件
             * @param {cc.Node} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static getNodeOneChildren(node: cc.Node): Map<string, cc.Node>;
            /**
             * 尋訪該node底下兩層子節點
             * @param {node : 物件} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static getNodeTowChildren(node: cc.Node): Map<string, cc.Node>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description (介面) 語言樣是樣式表
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ILanguageStyle {
            fontSize: number;
            lineHeight: number;
            textScale: {
                default: number;
                title: number;
                text: number;
            };
            fontFamily: string;
        }
        /**
         * @Author 蕭立品
         * @Description (介面)語系管理
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ILanguageManager {
            /**
             * 額外添加新的語系樣式
             * @param {string | fcc.type.LanguageType} key - 國家簡寫
             * @param {fcc.IF.ILanguageStyle} style - 新樣式
             */
            addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;
            /**
             * 更新語系,會更新當前所有已經綁定的 cc.Label
             * @param {string | fcc.type.LanguageType} language - 要更新的語系
             */
            updateLanguage(language: string | type.LanguageType): void;
            /**
             * 重新獲取語系,並更新緩衝內
             * @param {object} languageObject - 語系資源
             * @param {string | fcc.type.LanguageType} language - 有參數為強制更新該參數語系,無參為當前拿取當前語系更新緩衝
             */
            reTakeLanguageBuffer(languageObject: object, language?: string | type.LanguageType): any;
            /**
             * 更新文字該label文字
             * @param {cc.Label} target - 要更新的目標
             * @param {string?} textKey - 要更新的文字 key
             * @return {this}
             */
            updateText(target: cc.Label, textKey?: string): this;
            /**
             * 更新所有透過 updateText更新的組件,更新該組件樣是
             * 注意 : 須配合 updateText 一起使用
             * @param {boolean} save - 是否要保存 label組件,可配合updateLanguage()方法將已經綁定的label全部再次更換語系文字
             * @param {number} customFontSize - 強制更新字定義的大小
             */
            updateStyle(save: boolean, customFontSize?: number): void;
            /**
             * 清除無用的語系緩存
             */
            removeStringBuffer(language?: string | type.LanguageType): void;
            /**
             * 添加當前語系
             */
            setLanguage(languageObject: object): void;
            /**
             * 獲取當前語系數據,返回該key對應的文字
             * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字
             * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
             */
            getText(key: string): string;
            /**
             * 獲取當前語系緩存
             * @return {object}
             */
            getAllText(): object;
            /**
             * 獲取當前語系
             * @return {string}
             */
            getLanguage(): string;
        }
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 通用對象池
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ObjectPool<T> {
        private buffList;
        private key;
        constructor(key: string);
        get(func: () => T): T;
        put(obj: T): void;
        size(): number;
        destroy(): void;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 對象池管理器
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class PoolManager {
        private static _instance;
        static get instance(): PoolManager;
        private map;
        get(key: any, func: () => any): any;
        put(key: any, obj: any): void;
        size(key: string): number;
        destroy(): void;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class TSObjectPool<T> {
        private pool;
        private readonly className;
        constructor(className: string, type: {
            new (): T;
        }, count?: number);
        getClassName(): string;
        get<T>(type: {
            new (): T;
        }): T;
        put(instance: T): void;
        clear(): void;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class TSPoolManager {
        private pools;
        private static _instance;
        static get instance(): TSPoolManager;
        init<T>(key: string, type: {
            new (): T;
        }, count?: number): void;
        /**
         * 获得被销毁的对象
         * @param key
         */
        get<T>(key: string, type: {
            new (): T;
        }, count?: number): T;
        put(key: string, obj: any): void;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)綁定自己需要的所有推撥者
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface INotificationManager<T extends IBaseNotification> {
            /**
             * 添加推撥者
             * @param {T} notification - 推撥者
             * @return {this}
             */
            setNotification(notification: T): this;
            /**
             * 獲取以綁定的推播者
             * @param {string} type - 事件名稱
             * @return
             */
            getNotification(type: string): T;
            /**
             * 查看該事件是否已經加入管理器中
             * @param {string} type - 事件名稱
             * @return {boolean}
             */
            hasNotification(type: string): boolean;
            /**
             * 查看當前所有以綁定的通知
             */
            getAllNotifications(): Map<String, T>;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 執行老虎機主要方法(基礎類)
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    abstract class ABaseSlotTemplate<T extends fcc.IF.IBaseSlotSetting> implements fcc.IF.IBaseSlotTemplate<T> {
        protected constructor(styleData: T, configManager: fcc.IF.IConfigManager);
        /**
         * 初始化該輪所有狀態
         */
        abstract initializeState(): void;
        /**
         * Loop 老虎機方法
         * @return {Promise<void>}
         */
        abstract runSlotAnimation(): Promise<void>;
        /**
         * 啟動老虎機時過場動畫方法
         * @return {Promise<void>}
         */
        abstract sineInSlot(): Promise<void>;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)執行老虎機主要方法
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IBaseSlotTemplate<T extends fcc.IF.IBaseSlotSetting> {
            /**
             * 初始化該輪所有狀態
             */
            initializeState(): void;
            /**
             * Loop 老虎機方法
             * @return {Promise<void>}
             */
            runSlotAnimation(): Promise<void>;
            /**
             * 啟動老虎機時過場動畫方法
             * @return {Promise<void>}
             */
            sineInSlot(): Promise<void>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)音樂控制器,由音樂工廠做相對應呼叫對應的控制器
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IAudioType {
            /**
             * 撥放音樂
             * @param {string} name : 資源名稱
             * @param {Map<string, any>} data : 該音樂撥放數據
             */
            play(name: string, data: Map<string, any>): void;
            /**
             * 停止該音樂
             * @param {string} name
             */
            stop(name?: string): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IShowErrorDialog {
            /**
             * 顯示錯誤
             * @param {boolean} permanentState - 是否持續顯示
             * @param {string} message - 顯示錯誤訊息文字
             * @param {string} buttonText - 按鈕文字
             */
            showError(permanentState: boolean, message: string, buttonText: string): any;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)一般遊戲初期設定
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IConfigManager {
            /**
             * 載入外部資源URL
             * @type {string}
             * @default ""
             * @private
             */
            readonly externallyLoadURL: string;
            /**
             * 當前遊戲名稱
             * @type {string}
             * @default null
             * @private
             */
            readonly gameNumber: string;
            /**
             * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
             * @type {number}
             * @default 1
             * @private
             */
            readonly musicVolume: number;
            /**
             * 初始將背景音樂靜音
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isMusicOnMute: boolean;
            /**
             * 初始效果音量(該音量將會成為AudioManager內預設音量)
             * @type {number}
             * @default 1
             * @private
             */
            readonly effectVolume: number;
            /**
             * 初始將效果音效靜音
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isEffectOnMute: boolean;
            /**
             * 初始當前語系
             * @type {LanguageType}
             * @default LanguageType.CHINESE
             * @private
             */
            readonly language: string | type.LanguageType;
            /**
             * 返回首頁URL
             * @default null
             */
            readonly backHomeURL: string;
            /**
             * 是否要開啟Framework Debug模式
             * 注意:遊戲正式上線須關閉
             * @type {boolean}
             * @default true
             * @private
             */
            readonly isFrameworkDebug: boolean;
            /**
             * cocos 框架 debug設定
             * @default - cc.debug.DebugMode.INFO
             */
            readonly cocosDebugSetting: cc.debug.DebugMode;
            /**
             * 添加遊戲名稱
             * @param {string} name - 遊戲名稱
             * @default null
             * @returns {this}
             */
            setGameNumber(name: string): this;
            /**
             * 設置初始預設音量
             * @param {number} number - 音量 0~1
             * @default 1
             * @returns {this}
             */
            setMusicVolume(number: number): this;
            /**
             * 設置初始預設效果音量
             * @param {number} number - 音量 0~1
             * @default 1
             * @returns {this}
             */
            setEffectVolume(number: number): this;
            /**
             * 初始要從外部拿取資源的URL
             * @param {string} url : 獲取外部資源的URL
             * @default ""
             * @returns {this}
             */
            setExternallyLoadURL(url: string): this;
            /**
             * 初始語系
             * @param {LanguageType} languageType - 語系
             * @default LanguageType.CHINESE
             * @returns {this}
             */
            setLanguage(languageType: string | type.LanguageType): this;
            /**
             * 初始將背景音樂靜音
             * @param {boolean} OnMute - 是否靜音
             * @default false
             * @returns {this}
             */
            setMusicOnMute(OnMute: boolean): this;
            /**
             * 初始是否將效果音效靜音
             * @param {boolean} OnMute - 是否靜音
             * @default false
             * @returns {this}
             */
            setEffectOnMute(OnMute: boolean): this;
            /**
             * 是否要開啟Framework Debug模式
             * 注意:遊戲正式上線須關閉
             * @param {boolean} use
             * @default true
             * @returns {this}
             */
            setFrameWorkDebug(use: boolean): this;
            /**
             * cocos 框架 debug設定
             * @param {cc.debug.DebugMode} type - debug 樣式
             * @default - cc.debug.DebugMode.INFO
             * @return {this}
             */
            setCocosDebug(type: cc.debug.DebugMode): this;
            /**
             * 返回首頁URL
             * @param {string} url
             * @default null
             * @returns {this}
             */
            setBackHomeURL(url: string): this;
            /**
             * 實例化所有Manager class;
             */
            build(): void;
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description server 回傳事件 型
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        enum ServerEventType {
            /**
             *  一般獲獎回傳
             */
            BET_RESULT = "BET_RESULT",
            /**
             * 免費模式獲獎
             */
            FREE_SPIN_RESULT = "FREE_SPIN_RESULT",
            /**
             * 底層進遊戲 通知Loading頁面 可以顯示主遊戲場景
             */
            CAN_PLAY_GAME = "CAN_PLAY_GAME",
            /**
             * 獲取遊戲歷史結果
             */
            GET_GAME_HISTORY_RESULT = "GET_GAME_HISTORY_RESULT",
            /**
             * 獲取遊戲祥單
             */
            GET_HISTORY_DETAIL_RESULT = "GET_HISTORY_DETAIL_RESULT",
            /**
             * 該局遊戲序號
             */
            GROUP_ID = "GROUP_ID",
            /**
             * 進入遊戲後初始資訊
             */
            TABLE_INFO = "TABLE_INFO",
            /**
             * 各種錯誤訊息
             */
            WARNING = "WARNING"
        }
    }
}
/**
 * @Author 蕭立品
 * @Description (介面) 狀態機管理器
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface IBaseFSM {
            /**
             * 添加初始狀態
             * @param {string} stateName - 狀態
             */
            initialState(stateName: string): void;
            /**
             * 初始化狀態動作,執行綁定的流程內的onCreate方法
             * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
             */
            initStateAction(stateName?: string): void;
            /**
             * 改變流程
             * @param {string} nextState - 下一個狀態
             */
            changeState(nextState: string): void;
            /**
             * 返回上一個狀態
             * @param {boolean} canReAction - 是否要重新執行動作
             */
            previousMoveState(canReAction: boolean): void;
            /**
             * 獲取當前狀態內容
             * @returns {IProcess}
             */
            getCurrentStateContent(): IF.IStateAction;
            /**
             * 拿取所有流程
             * @return {Map<string, IF.IBaseProcessTransition>}
             */
            getAllProcess(): Map<string, IF.IBaseProcessTransition>;
            /**
             * 獲取當前狀態
             * @return {string}
             */
            getCurrentState(): string;
            /**
             * 獲取上個狀態
             * @return {string}
             */
            getPreviousState(): string;
            /**
             * 獲取當前狀態紀錄
             * @return {Array<string>}
             */
            getStateRecord(): Array<string>;
            /**
             * 清空當前所有歷史的狀態
             * @return {Array<string>} - 清除的紀錄
             */
            clearStateRecord(): Array<string>;
            /**
             * 當前是否正在執行中
             * @return {boolean}
             */
            isExecution(): boolean;
            /**
             * 流程狀態開始
             * @param {string} startName - 要開始的狀態
             * @return {Promise<void>}
             */
            start(startName: string): Promise<void>;
            /**
             * 流程狀態釋放
             */
            exit(): void;
            /**
             * 創建狀態與流程
             * @return {fcc.IF.IBaseStateBuilder}
             */
            builder(): IF.IBaseStateBuilder;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description (介面) 狀態流程跳轉class,設定當前狀態與下一個可移動的狀態
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface IBaseProcessTransition {
            /**
             * 當前狀態
             * @type {string}
             * @private
             */
            currentState: string;
            /**
             * 是否可以前往下個流程
             * @return {boolean}
             */
            canReachNext(nextState: string): boolean;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface IBaseStateBuilder {
            /**
             * 設置最大保存的狀態記錄
             * @param {number} count - 最大保存數量
             */
            setMaxStateRecordCount(count: number): this;
            /**
             * 添加狀態
             * @param {string} stateName - 自訂義狀態名稱
             * @param {IF.IStateAction} state - 執行的狀態內容 class
             */
            setState(stateName: string, state: IF.IStateAction): this;
            /**
             * 建構狀態流程
             * @param {IF.IBaseProcessTransition} process
             */
            build(...process: IF.IBaseProcessTransition[]): void;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description (介面) 狀態紀錄器
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface IBaseStatusRecorder {
            /**
             * 更新狀態紀錄
             * @param {string} nextState - 要更新的狀態
             */
            updateStateRecord(nextState: string): void;
            /**
             * 更新為上個狀態
             * @return {boolean} - 是否還能返回上個動作
             */
            updatePreviousState(): boolean;
            /**
             * 當前狀態
             * @return {string}
             */
            getCurrentState(): string;
            /**
             * 上一個狀態
             * @return {string}
             */
            getPreviousState(): string;
            /**
             * 獲取當前狀態記錄
             * @return {Array<string>}
             */
            getNowStateRecords(): Array<string>;
            /**
             * 清空當前所有歷史狀態
             * @return {Array<string>} - 清除的紀錄
             */
            clearRecord(): Array<string>;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description 狀態內容
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface IStateAction {
            /**
             * 初始化
             */
            onCreate(): void;
            /**
             * 離開狀態時
             */
            onExit(): void;
            /**
             * 開始執行
             */
            onExecution(): void;
            /**
             * 強制結束
             */
            onForcedEnd(): void;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022/9/13 下午5:18:45
 * @Version framework-2.0.0 : 1.4.3
 */
declare namespace fcc {
    namespace IF {
        interface ILoadConfig {
            type: type.LoadType;
            /**
             * 要拿取資源的key
             */
            dataName: string;
            /**
             * 當前要獲取的資源類型
             */
            ccType: any;
            /**
             * 獲取的地址
             */
            url: string;
            /**
             * 父資料夾名稱
             */
            folder: string;
            /**
             * 是否是主資源,判斷用
             */
            isMainLoad: boolean;
        }
    }
}
declare namespace fcc {
    namespace IF {
        interface ILoadType {
            /**
             * 加載資源方法
             */
            loadResources(): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description 外部讀取資訊
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IOutSideData {
            /**
             * 自訂義名稱
             */
            name: string;
            /**
             * bundle名稱
             */
            bundleName: string;
            /**
             * Bundle URL 資源位置
             */
            bundleURL: string;
            /**
             * 載入資源類型
             */
            loadType: type.LoadType;
            /**
             * 當前是否為有語系的加載
             */
            isLanguageUsed: boolean;
            /**
             * 資源位置
             */
            url: string;
            /**
             * 版本資訊
             */
            version: string;
            /**
             * 資源類型
             */
            assetMode: fcc.type.ASSET_MODE;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class ImgAtlasLoad extends ABS.ALoadType {
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SpriteAtlas} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.SpriteAtlas): void;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)通知事件管理器
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IBaseNotification {
            /**
             * NotificationHandler 用來獲取這個class的標籤
             */
            readonly TAG_NAME: string;
            /**
             * 訂閱該事件
             * @param {IBaseObserver} observer - 關注者
             * @param {boolean} isPermanent - 是否常駐
             */
            subscribe(observer: IBaseObserver, isPermanent: boolean): void;
            /**
             * 移除訂閱
             * @param {IBaseObserver} observer - 關注者
             */
            unsubscribe(observer: IBaseObserver): void;
            /**
             * 清除所有訂閱
             */
            removeAll(): void;
            /**
             * 發送通知
             * @param any - 發送參數
             */
            notify(...any: any[]): void;
            /**
             * 獲取該事件所有訂閱數量
             */
            getSubscribeCount(): number;
            /**
             * 獲取該事件所有訂閱者
             */
            getAllSubscribe(): Set<any>;
        }
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author XIAO-LI-PIN
         * @Description 推撥持有者,可綁定於該推播者底下,當有事件推播時,將會推播給該class
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        abstract class ABaseObserver implements IF.IBaseObserver {
            /**
             * 是否常駐推撥
             * @type {boolean}
             * @private
             */
            private _isPermanent;
            /**
             * 推撥事件指向的 this
             * @type {any}
             * @private
             */
            private readonly _self;
            /**
             * 返回方法
             * @type {(...any) => void} - 正確參數數量由子類實現
             * @private
             */
            private readonly _callFun;
            protected constructor(callFun: (...any: any[]) => void, self: any);
            /**
             * 推播事件
             * @param any - 正確參數數量由子類實現
             */
            pushNotification(...any: any[]): void;
            /**
             * 是否常駐推撥
             * @return {boolean}
             */
            get isPermanent(): boolean;
            /**
             * 是否常駐推撥
             * @param {boolean} value
             */
            set isPermanent(value: boolean);
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description 所有的通知推波實作接繼承這個介面
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IBaseObserver {
            isPermanent: boolean;
            /**
             * 推波通知
             */
            pushNotification(...any: any[]): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 對應該樣式,更新當前場景
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface ISceneStyle {
            executionStyle(width: number, height: number): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)所有類型Slot接收封包的父類
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IBaseSlotResultModel {
            /**
             * 0: 押注成功 1: 非免費時間押注
             */
            State: number;
        }
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author 蕭立品
         * @Description 所有SLOT設定檔的父類
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        abstract class ABaseSlotSetting implements IF.IBaseSlotSetting {
            /**
             * 該樣式標籤
             * @type {string}
             * @private
             */
            private _tag;
            /**
             * 非加速模式,每列停止的時間間格
             * @type {number}
             * @private
             */
            private _columnIntervalTime;
            /**
             * 所有格子,執行動畫的所有格子
             * Map<列數,該列所有格子>
             * @type {Map<number, Array<cc.Node>>}
             * @private
             */
            private _gridNodeToMap;
            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @type {Array<cc.Node>}
             * @private
             */
            private _slotColumnToTween;
            /**
             * 遊戲每格格子間的速度
             * @type {number}
             * @private
             */
            private _slotGirdSpeed;
            /**
             * 老虎機每格格子高度
             * @type {number}
             * @private
             */
            private _slotGridHeight;
            /**
             * 該老虎機 每列的格子數量
             * @type {number}
             * @private
             */
            private _slotRowGridCount;
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @type {number}
             * @private
             */
            private _slotTurnCount;
            /**
             * 加速時的加速倍率
             * @type {number}
             * @private
             */
            private _speedUpMultiple;
            /**
             * 漸入時TWEEN動畫類型
             * @type {string}
             * @private
             */
            private _sineInEasing;
            /**
             * 淡出時TWEEN 動畫類型
             * @type {string}
             * @private
             */
            private _sineOutEasing;
            /**
             *  瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             * @type {number}
             * @private
             */
            private _lookAtSpeed;
            /**
             * SLOT 停軸間格,依照你SLOT 列數 各列間的停軸間格
             * @type {number}
             * @private
             */
            private _slotRowTime;
            /**
             * 各軸瞇排時間
             * @type {number}
             * @private
             */
            private _lookAtTime;
            /**
             * 添加儲存SERVER答案的Model
             * @type {fcc.IF.IBaseSlotResultModel}
             * @private
             */
            protected _resultModel: IF.IBaseSlotResultModel;
            private _stopNowSpeedMultiple;
            private readonly _slotStyleManager;
            constructor(slotStyleManager: IF.ISlotStyleManager);
            /**
             * 該樣式標籤
             * @param {string} tag
             * @return {this}
             */
            setTag(tag: string): this;
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            setSlotTurnCount(count: number): this;
            /**
             * 老虎機每隔格子高度
             * @param {number} height
             * @return {this}
             */
            setSlotGridHeight(height: number): this;
            /**
             * 遊戲每格格子間的速度
             * @param {number} time
             * @return {this}
             */
            setSlotGirdSpeed(time: number): this;
            /**
             * 加速時的加速被率
             * @param {number} multiple
             * @return {this}
             */
            setSpeedUpMultiple(multiple: number): this;
            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            setStopNowSpeedMultiple(multiple: number): this;
            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            setSlotRowGridCount(gridCount: number): this;
            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            setColumnIntervalTime(time: number): this;
            /**
             * 要執行輪播動化轉動老虎機的node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            setSlotColumnToTween(node: Array<cc.Node>): this;
            /**
             * 所有格子,做循環老虎機時,需更動該Node的位置
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            setGridNodeToMap(node: Map<number, Array<cc.Node>>): this;
            /**
             * 進場 緩動 easing效果
             * @param {string} easing
             * @return {this}
             */
            setSineInEasing(easing: string): this;
            /**
             * 退場 緩動 easing效果
             * @param {string} easing
             * @return {this}
             */
            setSineOutEasing(easing: string): this;
            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             */
            setLookAtSpeed(time: number): this;
            /**
             * slot 各列停軸時間
             * 依照你SLOT 列數 各列間的停軸間格
             * @param {Array<number>} time - 各軸間格時間
             * @return {this}
             */
            setSlotRowTime(time: number): this;
            /**
             * 瞇排時間
             * @param {number} time
             * @return {this}
             */
            setLookAtTime(time: number): this;
            /**
             * 添加儲存SERVER答案的Model
             * @param {fcc.IF.IBaseSlotResultModel} resultModel - server回傳的答案model
             * @return {this}
             */
            setResultModel(resultModel: IF.IBaseSlotResultModel): this;
            /**
             * 設定結束
             */
            complete(): void;
            /**
             * 非加速模式,每列停止的時間間格
             * @return {number}
             */
            get columnIntervalTime(): number;
            /**
             * 所有格子,做循環老虎機時,需更動該Node的位置
             * @return {Map<number, Array<cc.Node>>}
             */
            get gridNodeToMap(): Map<number, Array<cc.Node>>;
            /**
             * 要執行輪播動化轉動老虎機的node
             * @return {Array<cc.Node>}
             */
            get slotColumnToTween(): Array<cc.Node>;
            /**
             * 遊戲每格格子間的速度
             * @return {number}
             */
            get slotGirdSpeed(): number;
            /**
             * 老虎機每隔格子高度
             * @return {number}
             */
            get slotGridHeight(): number;
            /**
             * 該老虎機 每列的格子數量
             * @return {number}
             */
            get slotRowGridCount(): number;
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @return {number}
             */
            get slotTurnCount(): number;
            /**
             * 加速時的加速被率
             * @return {number}
             */
            get speedUpMultiple(): number;
            /**
             * 急停時的加速倍率
             * @return {number}
             */
            get stopNowSpeedMultiple(): number;
            get slotStyleManager(): fcc.IF.ISlotStyleManager;
            /**
             * 該樣式標籤
             * @return {string}
             */
            get tag(): string;
            /**
             * SERVER答案的Model
             * @return {IF.IBaseSlotResultModel}
             */
            get resultModel(): IF.IBaseSlotResultModel;
            /**
             * 進場 緩動 easing效果
             * @return {string}
             */
            get sineInEasing(): string;
            /**
             * 退場 緩動 easing效果
             * @return {string}
             */
            get sineOutEasing(): string;
            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             */
            get lookAtSpeed(): number;
            /**
             * SLOT 停軸間格,依照你SLOT 列數 各列間的停軸間格
             * @return {number}
             */
            get slotRowTime(): number;
            /**
             * 各軸瞇排時間
             * @return {number}
             */
            get lookAtTime(): number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)Slot參數設定
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IBaseSlotSetting {
            /**
             * 該樣式標籤
             */
            tag: string;
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            slotTurnCount: number;
            /**
             * 老虎機每格格子高度
             * @param {number} height
             * @return {this}
             */
            slotGridHeight: number;
            /**
             * 遊戲每格格子間的速度
             * @param {number} time
             * @return {this}
             */
            slotGirdSpeed: number;
            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            slotRowGridCount: number;
            /**
             * 加速時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            speedUpMultiple: number;
            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            stopNowSpeedMultiple: number;
            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            slotColumnToTween: Array<cc.Node>;
            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            columnIntervalTime: number;
            /**
             * 所有格子,執行動畫的所有格子
             * Map<列數,該列所有格子>
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            gridNodeToMap: Map<number, Array<cc.Node>>;
            /**
             * 漸入時TWEEN動畫類型
             */
            sineInEasing: string;
            /**
             * 淡出時TWEEN 動畫類型
             */
            sineOutEasing: string;
            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             */
            lookAtSpeed: number;
            /**
             * 添加儲存SERVER答案的Model
             */
            resultModel: IBaseSlotResultModel;
            /**
             * 該樣式標籤
             * @param {string} tag
             * @return {this}
             */
            setTag(tag: string): this;
            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            setSlotTurnCount(count: number): this;
            /**
             * 老虎機每格格子高度
             * @param {number} height
             * @return {this}
             */
            setSlotGridHeight(height: number): this;
            /**
             * 老虎機一般狀態速度
             * @param {number} time
             * @return {this}
             */
            setSlotGirdSpeed(time: number): this;
            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            setSlotRowGridCount(gridCount: number): this;
            /**
             * 加速時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            setSpeedUpMultiple(multiple: number): this;
            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            setStopNowSpeedMultiple(multiple: number): this;
            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            setSlotColumnToTween(node: Array<cc.Node>): this;
            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            setColumnIntervalTime(time: number): this;
            /**
             * 所有格子,執行動畫的所有格子
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            setGridNodeToMap(node: Map<number, Array<cc.Node>>): this;
            /**
             * 漸入時TWEEN動畫類型
             */
            setSineInEasing(easing: string): this;
            /**
             * 淡出時TWEEN 動畫類型
             */
            setSineOutEasing(easing: string): this;
            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             * @param {number} time - 單位 秒
             * @return {this}
             */
            setLookAtSpeed(time: number): this;
            /**
             * 添加儲存SERVER答案的Model
             */
            setResultModel(resultModel: IBaseSlotResultModel): this;
            /**
             * 設定完成,將設定class轉交Manager執行建構
             */
            complete(): any;
        }
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時與顯示答案時的圖片一致,且可對各列分別給予停軸時間
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class NormalSetting extends ABS.ABaseSlotSetting {
        /**
         * 更換圖片的所有格子
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        private _gridSpriteToMap;
        /**
         * slot 所有靜態格子圖片
         * @param {Map<string, cc.SpriteFrame>} img
         * @return {this}
         */
        private _gridImg;
        /**
         * 添加儲存SERVER答案的Model
         * @type {fcc.IF.IBaseSlotResultModel}
         * @private
         */
        protected _resultModel: fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult;
        /**
         * slot 所有靜態格子圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        setGridImg(img: Map<string, cc.SpriteFrame>): this;
        /**
         * 所有格子的圖片,做循環老虎雞時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        setGirdSpriteToMap(sprite: Map<number, Array<cc.Sprite>>): this;
        /**
         * 更換圖片的所有格子
         * @return {Map<number, Array<cc.Sprite>>}
         */
        get gridSpriteToMap(): Map<number, Array<cc.Sprite>>;
        /**
         * 添加儲存SERVER答案的Model
         * @param {fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult} resultModel
         * @return {this}
         */
        setResultModel(resultModel: fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult): this;
        /**
         * slot 所有靜態格子圖片
         * @return {Map<string, cc.SpriteFrame>}
         */
        get gridImg(): Map<string, cc.SpriteFrame>;
        /**
         * 添加儲存SERVER答案的Model
         * @return {fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult}
         */
        get resultModel(): fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時使用模糊圖片,且可對各列分別給予停軸時間
     * @Date 2022/9/13 下午5:18:45
     * @Version framework-2.0.0 : 1.4.3
     */
    class NormalBlurImageSetting extends NormalSetting {
        /**
         * slot 所有模糊圖片
         * @type {Map<string, cc.SpriteFrame>}
         * @private
         */
        private _symbolBlurImg;
        /**
         * slot 所有模糊圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        setSymbolBlurImg(img: Map<string, cc.SpriteFrame>): this;
        get symbolBlurImg(): Map<string, cc.SpriteFrame>;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)擴展類有線免費狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IExtendHasLineFreeResult extends IBaseSlotResultModel {
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 剩餘免費遊戲次數 (0:沒有 1~99次)
             */
            Count: number;
            /**
             * 免費遊戲累計贏分
             */
            FreeSpinWin: number;
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 黏性圖標編號
             */
            StickySymbol: number;
            /**
             * 黏性圖標位置
             */
            StickyChange: Array<number>;
            /**
             * 每條線贏分
             */
            LineWin: Array<number>;
            /**
             * 每條線贏幾格
             */
            LineGrid: Array<number>;
            /**
             * 再中免費遊戲次數 0:無 1~99:次
             */
            FreeToFree: number;
            /**
             * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            FreeLevelWin: number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * 台灣黑熊玩法免費模式RoundDetail內部資料
         */
        type IFormosanBearStyleFreeRoundDetailData = {
            FreeSpinCount: number;
            GameMode: number;
            GridAfter: Array<number>;
            GridBefore: Array<number>;
            LineGrid: Array<number>;
            LineWin: Array<number>;
            LookAt: Array<number>;
            RoundLevelWin: number;
            RoundWin: string;
            ScatterPos: Array<number>;
            TotalWin: string;
            ScatterWin: number;
            StickyReels: Array<number>;
        };
        /**
         * 台灣黑熊玩法免費模式RoundDetailObject物件
         */
        interface IFormosanBearStyleFreeRoundDetailObject {
            [name: string]: IFormosanBearStyleFreeRoundDetailData;
        }
        /**
         * @Author 蕭立品
         * @Description 台灣黑熊樣式,免費模式回傳參數
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IFormosanBearStyleFreeResult extends IBaseSlotResultModel {
            TotalWinPoint: number;
            UserPointBefore: number;
            UserPointAfter: number;
            GameState: number;
            LevelWin: number;
            RoundDetail: IFormosanBearStyleFreeRoundDetailObject;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)有線類免費狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IHasLineFreeResultModule extends IBaseSlotResultModel {
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 剩餘免費遊戲次數 (0:沒有 1~99次)
             */
            Count: number;
            /**
             * 免費遊戲累計贏分
             */
            FreeSpinWin: number;
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有鬼牌 0:沒有 1:有
             */
            ChangeState: number;
            /**
             * 15格的資料 換圖 0:不換 1:換
             */
            Change: Array<number>;
            /**
             * 每條線贏分
             */
            LineWin: Array<number>;
            /**
             * 每條線贏幾格
             */
            LineGrid: Array<number>;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
             */
            LevelWin: number;
            /**
             * 再中免費遊戲次數 0:無 1~99:次
             */
            FreeToFree: number;
            /**
             * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            FreeLevelWin: number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)無線類免費狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface INoLineFreeResultModel extends IBaseSlotResultModel {
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 剩餘免費遊戲次數 (0:沒有 1~99次)
             */
            Count: number;
            /**
             * 免費遊戲累計贏分
             */
            FreeSpinWin: number;
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有鬼牌 0:沒有 1:有
             */
            ChangeState: number;
            /**
             * 15格的資料 換圖 0:不換 1:換
             */
            Change: Array<number>;
            /**
             * 哪幾格贏 0:沒贏 1:贏
             */
            GridWin: Array<number>;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
             */
            LevelWin: number;
            /**
             * 再中免費遊戲次數 0:無 1~99:次
             */
            FreeToFree: number;
            /**
             * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            FreeLevelWin: number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description 擴展有線Slot遊戲狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IExtendHasLineResult extends IBaseSlotResultModel {
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 玩家現有金額(押注後)
             */
            UserPointBefore: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有神秘寶箱 0:沒有 1:有
             */
            SecretState: number;
            /**
             * 神秘寶箱位置 0:沒有 1:有
             */
            SecretChange: Array<number>;
            /**
             * 神秘寶箱格子圖案
             */
            SecretSymbol: number;
            /**
             * 每條線贏分
             */
            LineWin: Array<number>;
            /**
             * 每條線贏幾格
             */
            LineGrid: Array<number>;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 免費遊戲次數 (0:沒有 1~99次)
             */
            FreeSpinCount: number;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 活動轉數
             */
            BonusEventCount: number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * 台灣黑熊玩法RoundDetail內部資料
         */
        type IFormosanBearStyleRoundDetailData = {
            CloneReels: Array<number>;
            FreeSpinCount: number;
            GameMode: number;
            GridAfter: Array<number>;
            GridBefore: Array<number>;
            IsClone: boolean;
            LineGrid: Array<number>;
            LineWin: Array<number>;
            LookAt: Array<number>;
            RoundLevelWin: number;
            RoundWin: string;
            ScatterPos: Array<number>;
            ScatterWin: number;
            TotalWin: string;
        };
        /**
         * 台灣黑熊玩法RoundDetailObject物件
         */
        interface IFormosanBearStyleRoundDetailObject {
            [name: string]: IFormosanBearStyleRoundDetailData;
        }
        /**
         * @Author 蕭立品
         * @Description 台灣黑熊樣式,一般模式,回傳參數
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IFormosanBearStyleResult extends IBaseSlotResultModel {
            TotalWinPoint: number;
            UserPointBefore: number;
            UserPointAfter: number;
            GameState: number;
            LevelWin: number;
            RoundDetail: IFormosanBearStyleRoundDetailObject;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description 有線Slot遊戲狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3
         */
        interface IHasLineResultModule extends IBaseSlotResultModel {
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 玩家現有金額(押注後)
             */
            UserPointBefore: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有鬼牌擴展 0:沒有 1:有
             */
            ChangeState: number;
            /**
             * 15格的資料 換圖 0:不換 1:換
             */
            Change: Array<number>;
            /**
             * 每條線贏分
             */
            LineWin: Array<number>;
            /**
             * 每條線贏幾格
             */
            LineGrid: Array<number>;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 免費遊戲次數 (0:沒有 1~99次)
             */
            FreeSpinCount: number;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description 無線Slot遊戲狀態封包
         * @Date 2022/9/13 下午5:18:45
         * @Version framework-2.0.0 : 1.4.3.3
         */
        interface INoLineResultModel extends IBaseSlotResultModel {
            /**
             * 總贏得金額 (0:輸了 大於0:贏了 )
             */
            TotalWinPoint: number;
            /**
             * 玩家現有金額(贏分後)
             */
            UserPointAfter: number;
            /**
             * 玩家現有金額(押注後)
             */
            UserPointBefore: number;
            /**
             * 15格的資料
             */
            Grid: Array<number>;
            /**
             * 瞇牌0:不用 1:瞇牌效果
             */
            LookAt: Array<number>;
            /**
             * 是否有鬼牌擴展 0:沒有 1:有
             */
            ChangeState: number;
            /**
             * 15格的資料 換圖 0:不換 1:換
             */
            Change: Array<number>;
            /**
             * 哪幾格贏 0:沒贏 1:贏
             */
            GridWin: Array<number>;
            /**
             * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
             */
            GameState: number;
            /**
             * 免費遊戲次數 (0:沒有 1~99次)
             */
            FreeSpinCount: number;
            /**
             * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
             */
            BaseLevelWin: number;
            /**
             * 活動轉數
             */
            BonusEventCount: number;
        }
    }
}
