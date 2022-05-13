/// <reference path="../Audio/AudioManager.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Event/EventManager.ts" />
/// <reference path="../Load/LoadResManager.ts" />
/// <reference path="../Scene/SceneManager.ts" />
/// <reference path="../Slot/SlotStyleManager.ts" />
/// <reference path="./IConfig/ISlotConfigManager.ts" />
/// <reference path="../Language/Enum/LanguageType.ts" />
/// <reference path="Enum/AutoType.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲初始設定,並透過builder加載所有Manager
     * @Date 2021-05-13 上午 10:24
     * @Version 1.1
     */
    export class SlotConfigManager implements IF.ISlotConfigManager {

        private static _instance: IF.ISlotConfigManager;

        /**
         * 載入外部資源URL
         * @type {string}
         * @private
         */
        private _externallyLoadURL: string;

        /**
         * 當前遊戲名稱
         * @type {string}
         * @private
         */
        private _gameNumber: string;

        /**
         * 是否在遊戲進入後開啟auto狀態
         * @type {boolean}
         * @private
         */
        private _isAuto: boolean;

        /**
         * 初始遊戲最初的auto次數
         * @type {AutoType}
         * @private
         */
        private _autoCount: type.AutoType;

        /**
         * 是否在遊戲進入後是加速的狀態
         * @type {boolean}
         * @private
         */
        private _isSpeedUp: boolean;

        /**
         * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
         * @type {number}
         * @private
         */
        private _musicVolume: number;

        /**
         * 初始將背景音樂靜音
         * @type {boolean}
         * @private
         */
        private _isMusicOnMute: boolean;

        /**
         * 初始效果音量(該音量將會成為AudioManager內預設音量)
         * @type {number}
         * @private
         */
        private _effectVolume: number;

        /**
         * 初始將效果音效靜音
         * @type {boolean}
         * @private
         */
        private _isEffectOnMute: boolean;

        /**
         * 當前語系
         * @type {LanguageType}
         * @private
         */
        private _language: type.LanguageType | string;
        /**
         * 返回首頁URL
         */
        private _backHomeURL: string;

        /**
         * 是否要開啟Framework Debug模式
         * 注意:遊戲正式上線須關閉
         * @type {boolean}
         * @private
         */
        private _isFrameworkDebug: boolean;

        /**
         * cocos 框架 debug設定
         * @default : INFO
         */
        private _cocosDebugSetting: cc.debug.DebugMode;

        private constructor() {
            this._gameNumber = null;                                //該遊戲名稱
            this._externallyLoadURL = "";                           //載入外部資源URL
            this._isAuto = false;                                   //是否自動
            this._isSpeedUp = false;                                //是否加速
            this._autoCount = type.AutoType.AUTO;                   //初始自動狀態
            this._musicVolume = 1;                                  //遊戲音量
            this._effectVolume = 1;                                 //效果音量
            this._isMusicOnMute = false;                            //是否將音樂靜音
            this._isEffectOnMute = false;                           //是否將音效靜音
            this._language = type.LanguageType.CHINESE              //初始當前語系,將依據該語系,載入所有耦合圖檔
            this._backHomeURL = "";                                 //初始返回首頁URL
            this._cocosDebugSetting = cc.debug.DebugMode.INFO       //設置cocos debug 模式
            this._isFrameworkDebug = true;                          //是否要開啟框架的Debug模式
        }

        /**
         * 懶漢加載
         * 初始化,只讓一個專案只有一次產生此class
         * @returns {SlotConfigManager}
         */
        public static get instance(): IF.ISlotConfigManager {
            if (!this._instance) {
                this._instance = new SlotConfigManager();
            }
            return this._instance;
        }

        /**
         * 添加遊戲名稱
         * @param {string} name - 遊戲名稱
         * @default null
         * @returns {this}
         */
        setGameNumber(name: string): this {

            this._gameNumber = name;

            return this;
        }

        /**
         * 設置初始預設音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        setMusicVolume(number: number): this {
            this._musicVolume = number
            return this;
        }

        /**
         * 設置初始預設效果音量
         * @param {number} number - 音量 0~1
         * @default 1
         * @returns {this}
         */
        setEffectVolume(number: number): this {
            this._effectVolume = number;
            return this;
        }

        /**
         * 初始將背景音樂靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        setMusicOnMute(OnMute: boolean): this {

            this._isMusicOnMute = OnMute;

            return this;
        }

        /**
         * 初始是否將效果音效靜音
         * @param {boolean} OnMute - 是否靜音
         * @default false
         * @returns {this}
         */
        public setEffectOnMute(OnMute: boolean): this {

            this._isEffectOnMute = OnMute;

            return this;
        }

        /**
         * 初始遊戲最初的auto次數
         * @param {AutoType} type
         * @default type.AutoType.AUTO
         * @returns {this}
         */
        setAutoCont(type: type.AutoType): this {
            this._autoCount = type;
            return this;
        }


        /**
         * 初始要從外部拿取資源的URL
         * @param {string} url : 獲取外部資源的URL
         * @default ""
         * @returns {this}
         */
        setExternallyLoadURL(url: string): this {
            this._externallyLoadURL = url;
            return this;
        }

        /**
         * 初始語系
         * @param {LanguageType} languageType - 語系
         * @default LanguageType.CHINESE
         * @returns {this}
         */
        setLanguage(languageType: string): this {
            this._language = languageType;
            return this;
        }

        /**
         * 初始進入遊戲時Auto狀態
         * @param {boolean} isAuto - 是否在遊戲進入後開啟auto狀態
         * @default false
         * @returns {this}
         */
        setAutoState(isAuto: boolean): this {
            this._isAuto = isAuto;
            return this;
        }

        /**
         * 是否在遊戲進入後是加速的狀態
         * @param {boolean} isSpeedUp
         * @default false
         * @returns {this}
         */
        setSpeedState(isSpeedUp: boolean): this {

            this._isSpeedUp = isSpeedUp;

            return this;
        }

        /**
         * 是否要開啟Framework Debug模式
         * 注意:遊戲正式上線須關閉
         * @param {boolean} use
         * @default true
         * @returns {this}
         */
        setFrameWorkDebug(use: boolean) {
            this._isFrameworkDebug = use;
            return this;
        }

        /**
         * cocos 框架 debug設定
         * @param {cc.debug.DebugMode} type - debug 樣式
         * @default - cc.debug.DebugMode.INFO
         * @return {this}
         */
        setCocosDebug(type: cc.debug.DebugMode): this {
            this._cocosDebugSetting = type;
            return this;
        }

        /**
         * 返回首頁URL
         * @param {string} url
         * @default null
         * @returns {this}
         */
        setBackHomeURL(url: string): this {
            this._backHomeURL = url;
            return this;
        }

        /**
         * 實例化所有Manager class;
         */
        public build() {
            cc.debug["_resetDebugSetting"](this._cocosDebugSetting);
            ErrorManager.setInstance(this);
            AudioManager.setInstance(this);
            LanguageManager.setInstance(this);
            EventManager.setInstance(this);
            LoadResManager.setInstance(this);
            FSMManager.setInstance(this);
            SceneManager.setInstance(this);
            SlotStyleManager.setInstance(this);
        }

// get -----------------------------------------------------------------

        get externallyLoadURL(): string {
            return this._externallyLoadURL;
        }

        get gameNumber(): string {
            return this._gameNumber;
        }

        get isAuto(): boolean {
            return this._isAuto;
        }

        get autoCount(): number {
            return this._autoCount;
        }

        get isSpeedUp(): boolean {
            return this._isSpeedUp;
        }

        get musicVolume(): number {
            return this._musicVolume;
        }

        get effectVolume(): number {
            return this._effectVolume;
        }

        get language(): type.LanguageType | string {
            return this._language;
        }

        get isFrameworkDebug(): boolean {
            return this._isFrameworkDebug;
        }

        get isEffectOnMute(): boolean {
            return this._isEffectOnMute
        }

        get isMusicOnMute(): boolean {
            return this._isMusicOnMute;
        }

        get backHomeURL(): string {
            return this._backHomeURL;
        }

        get cocosDebugSetting(): cc.debug.DebugMode {
            return this._cocosDebugSetting;
        }
    }
}
