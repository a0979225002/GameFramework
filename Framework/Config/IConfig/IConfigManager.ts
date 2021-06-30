namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)一般遊戲初期設定
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IConfigManager {

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