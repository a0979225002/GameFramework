/// <reference types="../@types/creator" />
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 各種錯誤類型
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum ErrorType {
            TYPE_FW = "\u50B3\u5165\u7684Type \u932F\u8AA4 ,\u8ACB\u6AA2\u5BDF\u8A72Type\u662F\u5426\u975EFarmWork\u5167\u7684Type",
            IS_RUNNING_FW = "\u904A\u6232\u6B63\u5728\u57F7\u884C\u4E2D,\u8ACB\u52FF\u91CD\u8907\u547C\u53EB",
            UNDEFINED_FW = "\u8B8A\u6578\u70BAundefined,\u6D41\u7A0B\u7121\u6CD5\u7E7C\u7E8C",
            LOAD_FW = "\u52A0\u8F09\u7684\u8CC7\u6E90\u6709\u554F\u984C",
            ANIMATION_FW = "Animation \u985E\u4E2D\u65B9\u6CD5\u6709\u932F\u8AA4 : ",
            WEB_REQUEST_FW = "WebRequest \u985E\u6709\u932F\u8AA4 : ",
            WEB_RESPONSE_FW = "WebResponse \u985E\u6709\u932F\u8AA4 : ",
            PREFAB_FW = "Prefab \u985E\u6709\u932F\u8AA4 :",
            AUDIO_FW = "AUDIO \u985E\u6709\u932F\u8AA4 :",
            SCENE_FW = "Scene \u985E\u6709\u932F\u8AA4 :",
            PROCESS_FW = "process \u985E\u6709\u932F\u8AA4 :",
            LISTENER_FW = "Event \u985E\u6709\u932F\u8AA4 :",
            SlotStyleFW = "SlotStyleFW\u985E\u6709\u932F\u8AA4 : "
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 無從判斷該錯誤類型
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         */
        showError(permanentState: boolean, message: string, buttonText: string): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 顯示警告錯誤
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
        /**
         * XXX :
         * 當前暫時無使用,一樣保留
         * 顯示金額不足無法下注
         * @param obj 顯示在label的文字
         */
        showErrorBet(obj: string): void;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)Error管理器 錯誤事件中介者
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IErrorHandler {
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
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description Error管理器 錯誤事件中介者
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * @throws (fcc.type.ErrorType,string) - throw (`ErrorType + ${string}`)
         * @throws (string,any) - throw (`${string}`)
         * @param {string | fcc.type.ErrorType} message
         * @param obj
         */
        checkErrorType(message: string | type.ErrorType, obj?: any): any;
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
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 錯誤訊息管理器
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 責任鏈模式
             * 顯示錯誤訊息,能做多個物件檢測
             * @param{string | }message
             * @param obj
             */
            executeError(message: string | type.ErrorType, obj?: any): void;
            /**
             * 顯示錯誤視窗
             * @param {boolean} permanentState : 是否常駐
             * @param {string} message  : 錯誤訊息
             * @param {string} buttonText : button文字
             */
            serverError(permanentState: boolean, message: string, buttonText?: string): void;
            /**
             * 顯示警告,將會調用已保存的警告Node
             * @param {boolean} permanentState : 是否常駐
             * @param {string} message  : 錯誤訊息
             * @param {string} buttonText : button文字
             */
            warning(permanentState: boolean, message: string, buttonText?: string): void;
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * 責任鏈模式
         * 顯示錯誤訊息,能做多個物件檢測
         * @param{string | ErrorType }message
         * @param obj
         */
        executeError(message: string | type.ErrorType, obj: any): any;
        /**
         * 顯示錯誤視窗
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        serverError(permanentState: boolean, message: string, buttonText?: string): void;
        /**
         * 顯示警告,將會調用已保存的警告Node
         * @param {boolean} permanentState - 是否常駐
         * @param {string} message  - 錯誤訊息
         * @param {string} buttonText - button文字
         */
        warning(permanentState: boolean, message: string, buttonText?: string): void;
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
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 動畫處理,處理後的動畫回傳給予manager保存
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class AnimationHandler implements IF.IAnimationHandler {
        private readonly animationManager;
        constructor(animationManager: IF.IAnimationManager);
        /**
         * 更新動畫管理器內的spineName數據
         * @param resName
         * @param keyName
         * @param spineName
         */
        updateSpineAnimationName(resName: string, keyName: string, spineName: string): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description TODO : 動畫管理器
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class AnimationManager implements IF.IAnimationManager {
        private _spineName;
        private static _instance;
        private readonly _handler;
        private readonly configManager;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        static setInstance(configManager: IF.IConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.IAnimationManager;
        getSpineName(resName: string, key: string | number): string;
        set spineName(value: Map<string, Map<string, string>>);
        get spineName(): Map<string, Map<string, string>>;
        get handler(): IF.IAnimationHandler;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 音樂撥放疊加時,各種狀態設定
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum AudioStateType {
            /**
             *檢測到該音樂正在撥放時,清除正在撥放的音樂,後重新播放該音樂
             * @type {AudioStateType.CLEAR_TO_REPLAY}
             */
            CLEAR_TO_REPLAY = "CLEAR_TO_REPLAY",
            /**
             * 檢測到該音樂正在撥放時,不做任何事情
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 額外對該音樂做設定,你可以不做設定,將會依照默認設定自動設定
             * volume : 默認為 Config 內的音量參數
             * loop : 默認 false
             * @param {string} name : 音樂名稱
             * @param {number} volume : 音量 0~1
             * @param {boolean} loop : 是否重複撥放
             * @return {this}
             */
            settingMusic(name: string, volume?: number, loop?: boolean): this;
            /**
             * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
             * canSuperimpose : 默認 false
             * volume : 默認為 Config 內的音量參數
             * loop :默認為 false
             * @param {string} name : 音效檔名
             * @param {AudioStateType} canSuperimpose : 是否疊加
             * @param {number} volume : 音量 0~1
             * @param {boolean} loop : 是否重複撥放
             * @return {this}
             */
            settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): this;
            /**
             * 撥放音樂,將會依照當初設定的參數進行播放
             * 若無參數設定撥放模式,依照默認參數撥放
             * @param {string} name : 音樂檔名
             */
            musicPlay(name: string): void;
            /**
             * 撥放音效,將會依照當初設定的參數進行播放
             * 若無參數設定撥放模式,依照默認參數撥放
             * @param {string} name : 音效檔名
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
             * @param {string} name : 音效檔名
             */
            effectStop(name: string): void;
            /**
             * 停止所有音效
             */
            effectStopAll(): void;
            /**
             * 獲取撥放的狀態
             * @param {string} name : 音樂檔名
             * @return {Map<string, string | boolean | number>} : 撥放設定參數
             */
            getMusicState(name: string): Map<string, string | boolean | number>;
            /**
             * 獲取撥放的狀態
             * @param {string} name : 音效檔名
             * @return {Map<string, string | boolean | number>} : 撥放設定參數
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum LoadType {
            /**
             * 圖片類型
             * @type {fcc.type.LoadType.img}
             */
            img = 0,
            /**
             * 骨骼动画類型
             * @type {fcc.type.LoadType.spine}
             */
            spine = 1,
            /**
             * 預載資源類型
             * @type {fcc.type.LoadType.prefab}
             */
            prefab = 2,
            /**
             * 音樂類型
             * @type {fcc.type.LoadType.music}
             */
            music = 3,
            /**
             * 文字類型(注意:目前只接收 .CSV 檔案)
             * @type {fcc.type.LoadType.text}
             */
            text = 4,
            /**
             * 場景類型(注意:動態載入資源需放入resource資料夾內 or bundle資料夾內)
             * @type {fcc.type.LoadType.scene}
             */
            scene = 5,
            /**
             * 外部URL腳本
             * @type {fcc.type.LoadType.script}
             */
            script = 6,
            /**
             * 外部URL CSS
             * @type {fcc.type.LoadType.script}
             */
            css = 7
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)資源管理者
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 外部腳本保存URL地址,單存判斷是否重複加載
             * @type {Set<string>}
             */
            scriptRes: Set<string>;
            /**
             * 主資源加載物件,監聽是否有callback,隨之返回該狀態
             * @param name
             * @param progress 又加載了多少
             * @param state 該物件加載到幾趴
             */
            loadMainEventCallback(name: string, progress: number, state: number): void;
            /**
             * 次資源加載物件,監聽是否有callback,隨之返回該狀態
             * 注意,該狀態無總資源監聽回傳事件
             * @param {string} name
             * @param {number} state
             */
            loadSecondaryEventCallback(name: string, state: number): void;
            /**
             * 加載該資料夾底下所有資源
             * 注意: 需存放於 resources中
             * @param {string} name
             * @param {LoadType} type
             * @param {string} url
             * @param {boolean} isLanguageUsed
             * @returns {this}
             */
            loadAsset(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;
            /**
             * 加載該 assetBundle 底下資源
             * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
             * 注意:須於UI勾選配置為Bundle資料夾
             * @param {string} name
             * @param {LoadType} type
             * @param {string} url
             * @returns {this}
             */
            loadBundle(name: string, type: type.LoadType, url: string): this;
            /**
             * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
             * @param {(progress: number) => void} callFun
             * @param {string} methodName
             * @returns {this}: methodName 未使用情況,回傳 void
             */
            callback(callFun: (progress: number) => void, methodName?: string): this;
            /**
             * 載入外部腳本
             * @param {string} name
             * @param {LoadType} type
             * @param {string} url
             * @returns {this}
             */
            loadExternalScript(name: string, type: type.LoadType, url: string): this;
            /**
             * 查看該資源是否已加載完畢
             * @param name
             * @param isMainResources
             */
            getLoadState(name: string, isMainResources: boolean): boolean;
            /**
             * 重置
             */
            reset(): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 載入各類資源工廠
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * @param name
             * @param type
             * @param url
             */
            executeLoadExternalScript(name: string, type: type.LoadType, url: string): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)EventTarget 事件
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 發射事件
             * @param eventTarget
             * @param {string} eventName
             * @param {any} any : 要回傳的物件
             */
            emit(eventName: string, ...any: any): void;
            /**
             * server監聽回傳接收
             * @param {string} eventName
             * @param {Function} callFun
             * @param {boolean} isOnce : 是否使用一次性監聽
             */
            eventListener(eventName: string, callFun: (target?: any) => void, isOnce: boolean): void;
            /**
             * 刪除事件,綁定的回傳也一並刪除
             * @param {ServerEventType | GameEventType} eventName
             * @param {cc.EventTarget} eventTarget
             * @param callFun
             * @param target
             */
            destroyEvent(eventName: string, callFun?: Function, target?: Object): void;
            /**
             * 該事件是否持續監聽中
             * @param {ServerEventType | GameEventType} eventName
             * @param eventTarget
             * @return {boolean}
             */
            hasListening(eventName: type.ServerEventType | string, eventTarget: any): boolean;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 事件管理器,當前綁定的事件,事件數量
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class EventManager extends cc.EventTarget implements IF.IEventManager {
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
         * @param eventTarget
         * @param {string} eventName
         * @param {any} any : 要回傳的物件
         */
        emitEvent(eventName: type.ServerEventType | string, ...any: any): void;
        /**
         * server監聽回傳接收
         * @param {string} eventName
         * @param {Function} callFun
         * @param isOnce
         */
        eventListener(eventName: string, callFun: (...target: any) => void, isOnce: boolean): void;
        /**
         * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
         * @param {ServerEventType | GameEventType} eventName
         * @param {cc.EventTarget} eventTarget
         * @param callFun?{Function} : 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
         * @param target?{Object}:調用回調的目標（此對象），如果未指定，則僅刪除沒有目標的回調
         */
        destroyEvent(eventName: string, callFun?: Function, target?: Object): void;
        /**
         * 是否該事件持續監聽中
         */
        hasListening(eventName: string, eventTarget: cc.EventTarget): boolean;
        get eventCount(): number;
        get eventsCurrentlyBeing(): Map<string, string>;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class ProcessManager implements IF.IProcessManager {
        private static _instance;
        private configManager;
        /**
         * 當前遊戲狀態
         * @type {fcc.type.GameStateType}
         * @default - type.GameStateType.STANDBY
         * @private
         */
        private _gameState;
        /**
         * 是否當前流程執行中
         * @type {boolean}
         * @private
         */
        private isStartProcess;
        /**
         * 流程工廠
         * @type {fcc.IF.IGameProcessFactory}
         * @private
         */
        private gameProcessFactory;
        private constructor();
        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        static setInstance(configManager: IF.ISlotConfigManager): void;
        /**
         *  獲取已經初始化的靜態實例class
         */
        static get instance(): IF.IProcessManager;
        /**
         * 設定流程
         * @param {fcc.type.ProcessType | string} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {fcc.IF.IProcess} process - 流程
         * @return {this}
         */
        setProcess(processName: type.ProcessType | string, process: IF.IProcess): this;
        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        initProcess(processName?: string | fcc.type.ProcessType): void;
        /**
         * 設定初始要執行的流程
         * @param processName - 流程名稱
         */
        setDefaultProcess(processName: type.ProcessType | string): void;
        /**
         * 更換流程
         * @param {fcc.type.ProcessType | string} processName - 要更換的流程名稱
         */
        changeProcess(processName: type.ProcessType | string): void;
        /**
         * 執行設定好的流程
         */
        play(): Promise<void>;
        /**
         * 改變當前流程進行狀態
         * @param {boolean} state
         */
        private updateProcessState;
        /**
         * 清除堵塞狀態
         * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
         */
        remake(): void;
        set gameState(value: type.GameStateType);
        get gameState(): type.GameStateType;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲場景樣式
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISceneManager {
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 推播者
             * @type {IBaseNotification}
             */
            static instance: IF.IBaseNotification;
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
         * @Description TODO
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum NotificationType {
            AUTO_CHANGE = "AUTO_CHANGE",
            SPEED_CHANGE = "SPEED_CHANGE",
            USER_MONEY_CHANGE = "USER_MONEY_CHANGE",
            USER_BET_CHANGE = "USER_BET_CHANGE",
            USER_GET_WIN = "USER_GET_WIN",
            SCENE_DIRECTION_CHANGE = "SceneDirectionChangeNotification",
            RESPONSE_RESULT = "ResponseResultNotification",
            SCROLL_FOCUS_STATE = "ScrollFocusStateNotification"
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變觀察者,當有事件推送時,將會將該事件推播給綁定者
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SceneDirectionChangeNotification extends ABS.ABaseNotification {
        /**
         * NotificationHandler 用來獲取這個class的標籤
         * @type {string}
         */
        readonly TAG_NAME: string;
        /**
         * 懶漢加載
         * @type {SceneDirectionChangeNotification}
         * @private
         */
        private static _instance;
        private constructor();
        /**
         * 懶漢加載,單例模式
         * @returns {SceneDirectionChangeNotification}
         */
        static get instance(): SceneDirectionChangeNotification;
        subscribe(observer: SceneDirectionChangeObserver, isPermanent: boolean): void;
        /**
         * 用戶更換方向時推送通知
         * @param {SceneDirectionType} type : 當前用戶方向
         */
        notify(type: type.SceneDirectionType): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 自動模式 : 依照玩家當前的使用方式,自動更新為橫式 or 直式
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class AutoStyle implements IF.ISceneStyle {
        private sceneManager;
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class VerticalStyle implements IF.ISceneStyle {
        executionStyle(width: number, height: number): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 依照初始設定對應的更新模式,更新當前遊戲場景
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SceneStyleHandler {
        private autoStyle;
        private horizontalStyle;
        private verticalStyle;
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
            readonly slot: IF.ISlot;
            /**
             * 添加老虎機主流程 需繼承 ISlot
             * @return {this}
             */
            setSlotTemplate<T extends new (styleData: IF.ISlotSetting) => IF.ISlot>(slotTemplate: T): this;
            /**
             * 添加slot主事件樣式設定
             */
            setSlotStyle<T extends IF.ISlotSetting>(slotSetting?: new (slotStyleManager: IF.ISlotStyleManager) => T): T;
            /**
             * 初始所有操作,並實例化  綁定的 slot Class
             */
            build(slotSetting: IF.ISlotSetting): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SlotStyleManager implements IF.ISlotStyleManager {
        private static _instance;
        private configManager;
        private template;
        private _slot;
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
         * 添加執行流程的class 需繼承 ISlot
         * @param {ASlot} slotTemplate
         * @return {this}
         */
        setSlotTemplate<T extends new (styleData: IF.ISlotSetting) => IF.ISlot>(slotTemplate: T): this;
        setSlotStyle<T extends IF.ISlotSetting>(slotSetting?: new (slotStyleManager: IF.ISlotStyleManager) => T): T;
        /**
         * 初始化Slot : 將Slot設定參數給予Slot做初始處理
         */
        build(slotSetting: IF.ISlotSetting): void;
        get slot(): IF.ISlot;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲自動狀態種類
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 老虎機類遊戲初期設定
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * 馬來西亞
             */
            MALAYSIA = "MYR"
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲初始設定,並透過builder加載所有Manager
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * @type {number}
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
         * @param {number} name - 遊戲名稱
         * @default null
         * @returns {this}
         */
        setGameNumber(name: number): this;
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
        get gameNumber(): number;
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        abstract class ALoadScriptType {
            protected scriptName: string;
            protected type: string;
            protected url: string;
            protected static head: HTMLHeadElement;
            protected constructor(scriptName: string, type: string, url: string);
            abstract loadScript(): void;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 加載外部css資源
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class CSSLoad extends ABS.ALoadScriptType {
        private readonly linkElem;
        constructor(scriptName: string, type: string, url: string);
        loadScript(): void;
    }
}
declare namespace fcc {
    class ScriptLoad extends ABS.ALoadScriptType {
        /**
         * @Author XIAO-LI-PIN
         * @Description 載入外部 js 腳本
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        private readonly linkElem;
        constructor(scriptName: string, type: string, url: string);
        loadScript(): void;
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author XIAO-LI-PIN
         * @Description (抽象類)載入各類cocos資源
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        abstract class ALoadType implements IF.ILoadType {
            protected type: any;
            protected url: string;
            protected dataName: string;
            protected folder: string;
            private beforeProgress;
            private assetBundle;
            protected constructor(dataName: string, type: cc.Asset, url: string, folder: string);
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class ImgLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
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
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入音樂資源
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class MusicLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class PrefabLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SceneLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SpineLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<sp.SkeletonData>): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入文本資源,目前只能載入.CSV 檔案
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class TextLoad extends ABS.ALoadType {
        constructor(dataName: string, type: any, url: string, folder: string);
        /**
         *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
         *  因此需自行檢查回傳資料是否正確
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.TextAsset): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 載入各類資源工廠
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class LoadTypeFactory implements IF.ILoadFactory {
        private isLoadBundle;
        private assetBundle;
        private promise;
        private readonly assetMethod;
        constructor();
        loadBundle(dataName: string, type: type.LoadType, url: string): Promise<void>;
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
         * 確認當前資源類型,給相對應class 處理
         * @param {string} dataName - 自訂義資源名稱
         * @param {fcc.type.LoadType} type - 資源類型
         * @param {string} url - 資源位置
         * @param {string} folder - 資源父類資料夾,默認 resource
         * @private
         */
        private checkLoadType;
        /**
         * 加載外部腳本
         * @param name - 檔名
         * @param type - 檔案類型
         * @param url - url地址
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 處理個別類型資源載入
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class LoadTypeHandler implements IF.ILoadFactory {
        private factory;
        private loadResManager;
        constructor(loadResManager: IF.ILoadResManager);
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
         * 檢查重複命名
         * @param {string} name
         * @private
         */
        private checkRepeatTheName;
        /**
         * 加載外部腳本
         * @param {string} name
         * @param {LoadType} type
         * @param {string} url
         */
        executeLoadExternalScript(name: string, type: type.LoadType, url: string): void;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 資源管理者 : 加載資源,保存資源,或取當前加載進度
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * @param name
         * @param progress 又加載了多少
         * @param state 該物件加載到幾趴
         */
        loadMainEventCallback(name: string, progress: number, state: number): void;
        /**
         * 次資源加載物件,監聽是否有callback,隨之返回該狀態
         * 注意,該狀態無總資源監聽回傳事件
         * @param {string} name
         * @param {number} state
         */
        loadSecondaryEventCallback(name: string, state: number): void;
        /**
         * 單一資源返回判斷,用戶是否有添加callback參數
         * @param {string} name
         * @param {number} state
         * @private
         */
        private onlyResEventCallback;
        /**
         * 加載該資料夾底下所有資源 注意: 需存放於 resources中
         * @param {string} name : 自訂義拿取資源時的名稱
         * @param {LoadType} type : 要獲取的資源類型
         * @param {string} url : 要獲取的資源位置
         * @param {boolean} isLanguageUsed : 是否要使用語系位置
         * @return {this}
         */
        loadAsset(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;
        /**
         * 加載 該 assetBundle 底下資源
         * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
         * 注意:須於UI勾選配置為Bundle資料夾
         * @param {string} name : 自訂義拿取資源時的名稱
         * @param {LoadType} type : 要獲取的資源類型
         * @param {string} url : 要獲取的資源位置
         * @param {boolean} isLanguageUsed : 是否要使用語系位置
         */
        loadBundle(name: string, type: type.LoadType, url: string, isLanguageUsed?: boolean): this;
        /**
         * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
         * @param callFun
         * @param resName
         */
        callback(callFun: (progress: number) => void, resName?: string): this;
        /**
         * 查看該資源是否已加載完畢
         * @param name
         * @param isMainResources
         */
        getLoadState(name: string, isMainResources: boolean): boolean;
        /**
         * 加載外部腳本
         * @param name
         * @param type
         * @param url
         */
        loadExternalScript(name: string, type: type.LoadType, url: string): this;
        /**
         * 重置
         */
        reset(): void;
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
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
         * volume : 默認為 Config 內的音量參數
         * loop : 默認 false
         * @param {string} name : 音樂名稱
         * @param {number} volume : 音量 0~1
         * @param {boolean} loop : 是否重複撥放
         * @return {this}
         */
        settingMusic(name: string, volume?: number, loop?: boolean): this;
        /**
         * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
         * canSuperimpose : 默認 AudioStateType.CLEAR_TO_REPLAY
         * volume : 默認為 Config 內的音量參數
         * loop :默認為 false
         * @param {string} name : 音效檔名
         * @param {AudioStateType} canSuperimpose : 能否疊加
         * @param {number} volume : 音量 0~1
         * @param {boolean} loop : 是否重複撥放
         * @return {this}
         */
        settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): this;
        /**
         * 撥放音樂,將會依照當初設定的參數進行播放
         * 若無參數設定撥放模式,依照默認參數撥放
         * @param {string} name : 音樂檔名
         */
        musicPlay(name: string): void;
        /**
         * 撥放音效,將會依照當初設定的參數進行播放
         * 若無參數設定撥放模式,依照默認參數撥放
         * @param {string} name : 音效檔名
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
         * @param {string} name : 音效檔名
         */
        effectStop(name: string): void;
        /**
         * 停止所有音效
         */
        effectStopAll(): void;
        /**
         * 獲取撥放的狀態
         * @param {string} name : 音效檔名
         * @return {Map<string, string | boolean | number>} : 撥放設定參數
         */
        getMusicState(name: string): Map<string, string | boolean | number>;
        /**
         * 獲取撥放的狀態
         * @param {string} name : 音樂檔名
         * @return {Map<string, string | fcc.type.AudioStateType |boolean | number>} : 撥放設定參數
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
    function Music(name: any): (target: any, key: string, descriptor: PropertyDescriptor) => void;
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
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class LanguageManager implements IF.ILanguageManager {
        /**
         * 當前語言文字緩存
         * @type {{[p: string]: string}}
         */
        languageCache: {
            [key: string]: string;
        };
        /**
         * 當前語系
         * @type {string}
         */
        nowLang: string | type.LanguageType;
        /**
         * 當前綁定的組件
         * @type {Map<cc.Label, string>}
         */
        nowLanguageLabel: Map<cc.Label, string>;
        /**
         * 語系組件緩存
         */
        private labelCache;
        /**
         * 當前所有語系樣式列表
         * @type {object}
         */
        style: Map<string | fcc.type.LanguageType, fcc.IF.ILanguageStyle>;
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
         */
        addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;
        /**
         * 更新語系,會更新當前所有已經綁定的 cc.Label
         * @param {string | fcc.type.LanguageType} language - 要更新的語系
         */
        updateLanguage(language: string | type.LanguageType): void;
        /**
         * 添加當前語系
         */
        setLanguage(): void;
        /**
         * 獲取當前語系
         * @return {string}
         */
        getLanguage(): string;
        /**
         * 獲取當前語系數據,返回該key對應的文字
         * @param {string} key - 拿取當前緩存語系文本的某一段文字
         * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
         */
        getText(key: string): string;
        /**
         * 獲取當前語系數據,返回所有數據
         * @return {object}
         */
        getText(): object;
        /**
         * 重新載入語系
         */
        reLoadNowLanguage(): void;
        /**
         * TODO 清除無用的語系緩存
         */
        removeStringBuffer(): void;
        updateText(target: cc.Label, textKey: string): this;
        /**
         * 更新所有透過 updateText更新的組件,更新該組件樣是
         * 注意 : 須配合 updateText 一起使用
         */
        updateStyle(): void;
    }
}
declare namespace fcc {
    /**
     * 遊戲初始設定,並透過builder加載所有Manager
     * @return {fcc.IF.IConfigManager}
     * @private
     */
    let configMgr: IF.IConfigManager;
    /**
     * TODO : 動畫管理器
     * @return {fcc.IF.IAnimationManager}
     * @private
     */
    let animationMgr: IF.IAnimationManager;
    /**
     * 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @return {fcc.IF.IAudioManager}
     * @private
     */
    let audioMgr: IF.IAudioManager;
    /**
     * 框架錯誤管理
     * @return {fcc.IF.IErrorManager}
     * @private
     */
    let errorMgr: IF.IErrorManager;
    /**
     * 語系管理器 : 保存當前語言本,語系樣式
     * @return {fcc.IF.ILanguageManager}
     * @private
     */
    let languageMgr: IF.ILanguageManager;
    /**
     * 事件管理器,當前綁定的事件,事件數量
     * @return {fcc.IF.IEventManager}
     * @private
     */
    let eventMgr: IF.IEventManager;
    /**
     * 資源管理者 : 加載資源,保存資源,或取當前加載進度
     * @return {fcc.IF.ILoadResManager}
     * @constructor
     * @private
     */
    let loadMgr: IF.ILoadResManager;
    /**
     * 網路管理 : 傳送封包,接收封包
     * @return {fcc.IF.ILoadResManager}
     * @private
     */
    function networkMgr(): null;
    /**
     * 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @return {fcc.IF.IProcessManager}
     * @private
     */
    let processMgr: IF.IProcessManager;
    /**
     * 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @return {fcc.IF.ISceneManager}
     * @private
     */
    let sceneMgr: IF.ISceneManager;
    /**
     * 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     */
    let slotStyleMgr: IF.ISlotStyleManager;
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 動畫類處理
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IAnimationHandler {
            /**
             * 更新動畫管理器內的spine數據
             * @param resName
             * @param keyName
             * @param spineName
             */
            updateSpineAnimationName(resName: string, keyName: string, spineName: string): any;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 動畫類管理器
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IAnimationManager {
            handler: IAnimationHandler;
            spineName: Map<string, Map<string, string>>;
            getSpineName(resName: string, key: string): string;
        }
    }
}
declare namespace fcc {
    namespace global {
        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:按鈕類方法
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        class Button {
            /**
             * 對該button添加監聽事件
             * @param {cc.Button} buttonNode - 按鈕組件
             * @param {string} methodName - 該按鈕綁定的方法名稱
             * @param self - 該方法存在的位置
             * @param customEventData - 回傳值
             */
            static addButtonEvent(buttonNode: cc.Button, methodName: string, self: any, customEventData?: any): void;
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        class Prefab {
            /**
             * 加載單一一個Prefab,並對該Prefab添加Script
             * @param {cc.Node} parentScene - 父類node
             * @param {string} PrefabURL - 該prefab resources底下的url位置
             * @param {string} ScriptName - 要對該prefab添加的script
             */
            static onlyPrefabInit(parentScene: cc.Node, PrefabURL: string, ScriptName: string): void;
            /**
             * 加載Resources底下全部Prefab,並將該prefab轉成node物件
             * @param {string} url - 要載入的資料夾地址
             * @param {Map<string, cc.Node>} prefabMap 要將所有node物件存放的位置
             */
            static allPrefabInit(url: string, prefabMap: Map<string, cc.Node>): void;
            /**
             * 尋訪該node底下一層節點內所有物件
             * @param {cc.Node} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static loadNodeOneChildren(node: cc.Node): Map<string, cc.Node>;
            /**
             * 尋訪該node底下兩層子節點
             * @param {node : 物件} node - 父節點
             * @return {Map<string, cc.Node>} - Map(key: 該子類node URL, value:該子類node物件)
             */
            static loadNodeTowChildren(node: cc.Node): Map<string, cc.Node>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description (介面) 語言種類
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ILanguageParameter {
            CNY: ILanguageStyle;
            NTD: ILanguageStyle;
            USD: ILanguageStyle;
            VND: ILanguageStyle;
            THB: ILanguageStyle;
        }
        /**
         * @Author 蕭立品
         * @Description (介面) 語言樣是樣式表
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ILanguageManager {
            /**
             * 當前語系
             */
            nowLang: string | type.LanguageType;
            /**
             * 當前綁定的組件
             */
            nowLanguageLabel: Map<cc.Label, string>;
            /**
             * 當前所有語系樣式列表
             */
            style: Map<string | type.LanguageType, IF.ILanguageStyle>;
            /**
             * 額外添加新的語系樣式
             * @param {string | fcc.type.LanguageType} key - 額外語系鍵值
             * @param {fcc.IF.ILanguageStyle} style - 新樣式
             */
            addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle): void;
            /**
             * 更新語系,會更新當前所有已經綁定的 cc.Label
             * @param {string | fcc.type.LanguageType} language - 要更新的語系
             */
            updateLanguage(language: string | type.LanguageType): void;
            /**
             * 重新載入語系
             */
            reLoadNowLanguage(): any;
            /**
             * 更新文字,會順便更新當前語系樣式
             * @param {cc.Label} target - 要更新的目標
             * @param {string} textKey -
             * @return {this}
             */
            updateText(target: cc.Label, textKey: string): this;
            /**
             * 更新所有透過 updateText更新的組件,更新該組件樣是
             * 注意 : 須配合 updateText 一起使用
             */
            updateStyle(): void;
            /**
             * 清除無用的語系緩存
             */
            removeStringBuffer(): void;
            /**
             * 獲取當前語系數據,返回該key對應的文字
             * @param {string} key - 拿取當前緩存語系文本的某一段文字
             * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
             */
            getText(key: string): string;
            /**
             * 獲取當前語系數據,返回所有數據
             * @return {object}
             */
            getText(): object;
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
     * @Author XIAO-LI-PIN
     * @Description TODO
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    abstract class ABaseObserver implements IF.IBaseObserver {
        private _isPermanent;
        private readonly _self;
        private readonly _callFun;
        protected constructor(callFun: (...any: any[]) => void, self: any);
        pushNotification(...any: any[]): void;
        get isPermanent(): boolean;
        set isPermanent(value: boolean);
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)通知事件管理器
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description TODO
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface INotificationHandler<T extends IBaseNotification> {
            /**
             * 添加推撥者
             * @param {IBaseNotification} notification
             * @return {this}
             */
            setNotification(notification: T): this;
            /**
             * 獲取以綁定的推播者
             * @param {string} type
             * @return
             */
            getNotification(type: string): T;
            /**
             * 查看當前所有以綁定的通知
             */
            checkAllNotifications(): Map<String, T>;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 綁定自己需要的所有推撥者
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class NotificationHandler<T extends IF.IBaseNotification> implements IF.INotificationHandler<T> {
        /**
         * 保存使用中的推撥者
         * @type {Map<string, IBaseNotification>}
         * @protected
         */
        protected readonly notificationToMap: Map<string, T>;
        /**
         * 懶漢加載
         * @type {NotificationHandler<any>}
         * @private
         */
        private static _instance;
        private constructor();
        /**
         * 懶漢加載
         * @return {INotificationHandler<T>}
         */
        static instance<T extends IF.IBaseNotification>(): IF.INotificationHandler<T>;
        /**
         * 添加推撥者
         * @param {IBaseNotification} notification
         * @return {this}
         */
        setNotification(notification: T): this;
        /**
         * 獲取以綁定的推播者
         * @param {string} type
         * @return {IBaseNotification}
         */
        getNotification(type: string): T;
        checkAllNotifications(): Map<String, T>;
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description 遊戲當下狀態
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum GameStateType {
            /**
             * 無狀態,待機狀態...
             * @type {GameStateType.STANDBY}
             */
            STANDBY = "STANDBY",
            /**
             * 一般狀態遊戲中....
             * @type {GameStateType.PLAYING}
             */
            PLAYING = "PLAYING",
            /**
             * 免費遊戲中....
             * @type {GameStateType.FREEING}
             */
            FREEING = "FREEING"
        }
        /**
         * @Author XIAO-LI-PIN
         * @Description 框架預設的流程
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        enum ProcessType {
            FREE = "FREE",
            NORMAL = "NORMAL"
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)遊戲管理器,管理當前流程,遊戲當前狀態
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IProcessManager {
            /**
             * 當前遊戲狀態
             * @type {fcc.type.GameStateType}
             * @default - type.GameStateType.STANDBY
             * @private
             */
            gameState: type.GameStateType;
            /**
             * 設定流程
             * @param {fcc.type.ProcessType | string} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @param {fcc.IF.IProcess} process - 流程
             * @return {this}
             */
            setProcess(processName: type.ProcessType | string, process: IProcess): this;
            /**
             * 初始流程,執行綁定的流程內的onCreate方法
             * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
             */
            initProcess(processName?: string | fcc.type.ProcessType): void;
            /**
             * 設定初始要執行的流程
             * @param processName - 流程名稱
             */
            setDefaultProcess(processName: string | type.ProcessType): void;
            /**
             * 更換流程
             * @param {fcc.type.ProcessType | string} processName - 原本設定的流程名稱
             */
            changeProcess(processName: type.ProcessType | string): void;
            /**
             * 執行設定好的流程
             */
            play(): Promise<void>;
            /**
             * 清除堵塞狀態
             * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
             */
            remake(): void;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)更新,獲取,加入,變更,使用等..流程工廠
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IGameProcessFactory {
            /**
             * 當前流程
             */
            process: IProcess;
            /**
             * 初始流程,執行綁定的流程內的onCreate方法
             * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
             */
            initProcess(processName?: string | type.ProcessType): void;
            /**
             * 添加流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @param {IProcess} process - 流程 class
             */
            setProcess(processName: string | type.ProcessType, process: IProcess): any;
            /**
             * 獲取該流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @returns {IProcess}
             */
            getProcess(processName: string | type.ProcessType): IProcess;
            /**
             * 拿取全部已經綁定的流程
             * @return {Map<string, fcc.IF.IProcess>}
             */
            getAllProcess(): Map<string, IF.IProcess>;
            /**
             * 改變流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             */
            changeProcess(processName: string | type.ProcessType): any;
            /**
             * 執行流程
             * @returns {Promise<void>}
             */
            useProcess(): Promise<void>;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 流程工廠 : 更新,獲取,加入,變更等.. 注意:此 class 由 manager 實例化,如果無特殊需求,請勿使用
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class GameProcessFactory implements IF.IGameProcessFactory {
        private gameManager;
        private readonly processToMap;
        process: IF.IProcess;
        constructor(gameManager: IF.IProcessManager);
        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        initProcess(processName?: string | fcc.type.ProcessType): void;
        /**
         * 添加流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {IProcess} process - 流程 class
         */
        setProcess(processName: string | type.ProcessType, process: IF.IProcess): void;
        /**
         * 獲取該流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @returns {IProcess}
         */
        getProcess(processName: string | type.ProcessType): IF.IProcess;
        /**
         * 拿取全部已經綁定的流程
         * @return {Map<string, fcc.IF.IProcess>}
         */
        getAllProcess(): Map<string, IF.IProcess>;
        /**
         * 改變流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         */
        changeProcess(processName: string | type.ProcessType): void;
        /**
         * 執行流程
         * @returns {Promise<void>}
         */
        useProcess(): Promise<void>;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SmartFoxLink {
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)執行老虎機主要方法
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISlot {
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
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Author XIAO-LI-PIN
         * @Description (介面)一般遊戲初期設定
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
             * @type {number}
             * @default null
             * @private
             */
            readonly gameNumber: number;
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
             * @param {number} name - 遊戲名稱
             * @default null
             * @returns {this}
             */
            setGameNumber(name: number): this;
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
    namespace IF {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
    namespace type {
        /**
         * 待刪除
         */
        enum GameEventType {
            TEST = "TEST"
        }
    }
}
declare namespace fcc {
    namespace type {
        /**
         * @Author XIAO-LI-PIN
         * @Description server 回傳事件 型
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description 所有的通知推波實作接繼承這個介面
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
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
         * @Author XIAO-LI-PIN
         * @Description (介面)所有執行容器接繼承於他
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IExecutionContainer {
            /**
             * 更換流程
             */
            onChangeStatus(): void;
            /**
             * 初始化流程
             * @returns {Promise<void>}
             */
            onCreate(): any;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)一般遊戲程序執行容器
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IGameProcedureExecutionContainer extends IExecutionContainer {
            /**
             * 執行流程
             * @returns {Promise<void>}
             */
            onExecution(): Promise<void>;
            /**
             * 流程結束時
             * @returns {Promise<void>}
             */
            onEnd(): Promise<void>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)老虎機程式流程執行容器
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISlotProcedureExecutionContainer extends IExecutionContainer {
            /**
             * 自訂流程開始時判斷
             * @returns {Promise<void>}
             */
            onCustomizeStart(): Promise<void>;
            /**
             * 老虎機開始前漸入執行
             * @returns {Promise<void>}
             */
            onSineInGrid(): Promise<void>;
            /**
             * 老虎機轉動
             * @returns {Promise<void>}
             */
            onRunGrid(): Promise<void>;
            /**
             * 老虎機漸出停止
             * @returns {Promise<void>}
             */
            onSineOutGrid(): Promise<void>;
            /**
             * 顯示結果動畫
             * @returns {Promise<void>}
             */
            onShowAnswer(): Promise<void>;
            /**
             * 自訂義結束
             * @returns {Promise<void>}
             */
            onCustomizeEnd(): Promise<void>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)一般流程
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IGameProcess extends IProcess {
            /**
             * 執行流程
             * @returns {this}
             */
            onExecution(): this;
            /**
             * 流程結束時
             * @returns {this}
             */
            onEnd(): this;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)所有的流程父類
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface IProcess {
            /**
             * 儲存使用者綁定的流程方法
             */
            readonly process: Set<() => Promise<void> | void>;
            /**
             * 流程容器
             */
            readonly executionContainer: IF.IExecutionContainer;
            /**
             * 更換流程
             */
            onChangeStatus(): this;
            /**
             * 將所有綁定的流程方法依序執行
             * @returns {Promise<void>}
             */
            start(): Promise<void>;
        }
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)老虎機流程
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISlotGameProcess extends IProcess {
            /**
             * 初始化 : 自訂開始遊戲前的效果
             * @example - 按鈕,背景…等
             * @return {this}
             */
            onCustomizeStart(): this;
            /**
             * 老虎機運行前,漸入效果
             * @return {this}
             */
            onSineInGrid(): this;
            /**
             * 遊戲持續執行動作
             * @return {this}
             */
            onRunning(): this;
            /**
             * 自訂義停止後事件
             * @example - 更換音樂,更換背景圖案,校正回歸流程狀態...等
             * @return {this}
             */
            onCustomizeEnd(): this;
            /**
             * 顯示結果
             * @returns {this}
             */
            onShowAnswer(): this;
        }
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 任何遊戲皆可用流程
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class GameProcess implements IF.IGameProcess {
        /**
         * 保存使用者綁定的流程方法
         * @type {Set<Function>}
         * @private
         */
        private readonly _process;
        /**
         * 流程容器
         * @type {IGameProcedureExecutionContainer}
         * @private
         */
        private readonly _executionContainer;
        constructor(container: IF.IGameProcedureExecutionContainer);
        /**
         * 執行流程
         * @return {this}
         */
        onExecution(): this;
        /**
         * 流程結束時
         * @return {this}
         */
        onEnd(): this;
        /**
         * 更換流程
         * @return {this}
         */
        onChangeStatus(): this;
        /**
         * 將所有綁定的流程方法依序執行
         * @return {Promise<void>}
         */
        start(): Promise<void>;
        get process(): Set<() => (Promise<void> | void)>;
        get executionContainer(): fcc.IF.IGameProcedureExecutionContainer;
    }
}
declare namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機流程
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SlotGameProcess implements IF.ISlotGameProcess {
        /**
         * 保存使用者綁定的流程方法
         * @type {Set<Function>}
         * @private
         */
        private readonly _process;
        /**
         * 流程容器
         * @type {ISlotProcedureExecutionContainer}
         * @private
         */
        private readonly _executionContainer;
        constructor(container: IF.ISlotProcedureExecutionContainer);
        /**
         * 初始化 : 自訂開始遊戲前的效果
         * @example - 按鈕,背景…等
         * @return {this}
         */
        onCustomizeStart(): this;
        /**
         * 老虎機運行前,漸入效果
         * @return {this}
         */
        onSineInGrid(): this;
        /**
         * 遊戲持續執行動作
         * @return {this}
         */
        onRunning(): this;
        /**
         * 自訂義停止後事件
         * @example - 更換音樂,更換背景圖案,校正回歸流程狀態...等
         * @return {this}
         */
        onCustomizeEnd(): this;
        /**
         * 顯示結果
         * @return {this}
         */
        onShowAnswer(): this;
        /**
         * 更換流程
         * @example - fcc.processManager.changeProcess(GameType.NORMAL);
         * @return {this}
         */
        onChangeStatus(): this;
        /**
         * 開始執行
         * @return {Promise<void>}
         */
        start(): Promise<void>;
        get executionContainer(): fcc.IF.ISlotProcedureExecutionContainer;
        get process(): Set<() => (Promise<void> | void)>;
    }
}
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 對應該樣式,更新當前場景
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISceneStyle {
            executionStyle(width: number, height: number): void;
        }
    }
}
declare namespace fcc {
    namespace ABS {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        abstract class ASlotSetting implements IF.ISlotSetting {
            private _columnIntervalTime;
            private _gridNodeToMap;
            private _slotColumnToTween;
            private _slotGirdSpeed;
            private _slotGridHeight;
            private _slotRowGridCount;
            private _slotTurnCount;
            private _speedUpMultiple;
            private readonly _slotStyleManager;
            constructor(slotStyleManager: IF.ISlotStyleManager);
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
             * 老虎機一般狀態速度
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
            complete(): void;
            get columnIntervalTime(): number;
            get gridNodeToMap(): Map<number, Array<cc.Node>>;
            get slotColumnToTween(): Array<cc.Node>;
            get slotGirdSpeed(): number;
            get slotGridHeight(): number;
            get slotRowGridCount(): number;
            get slotTurnCount(): number;
            get speedUpMultiple(): number;
            get slotStyleManager(): fcc.IF.ISlotStyleManager;
        }
    }
}
/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021/7/1 下午5:10:06
 * "@Version 0.3
 */
declare namespace fcc {
    namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)參數設定
         * @Date 2021/7/1 下午5:10:06
         * "@Version 0.3
         */
        interface ISlotSetting {
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
             * 老虎機一般狀態速度
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
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            gridNodeToMap: Map<number, Array<cc.Node>>;
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
             * 設定完成
             */
            complete(): any;
        }
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SlotImgSetting extends ABS.ASlotSetting {
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
        get gridSpriteToMap(): Map<number, Array<cc.Sprite>>;
        get gridImg(): Map<string, cc.SpriteFrame>;
    }
}
declare namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021/7/1 下午5:10:06
     * "@Version 0.3
     */
    class SlotSpinSetting extends ABS.ASlotSetting {
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
         * slot 所有 spine 格子圖片
         */
        private _girdSpine;
        /**
         * slot 所有 spine 格子圖片
         */
        private _girdSpineToMap;
        /**
         * slot 所有靜態格子圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        setGridImg(img: Map<string, cc.SpriteFrame>): this;
        /**
         * 所有格子的圖片,做循環老虎機時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        setGirdSpriteToMap(sprite: Map<number, Array<cc.Sprite>>): this;
        /**
         * 所有格子的spin,做循環老虎機時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        setGirdSpineToMap(sprite: Map<number, Array<sp.Skeleton>>): this;
    }
}
