namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 遊戲初期設定
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IConfigManager {

            /**
             * 載入外部資源URL(只有開發模式中有效)
             * @type {string}
             * @private
             */
            externallyLoadURL: string;

            /**
             * 當前遊戲名稱
             * @type {number}
             * @private
             */
            gameNumber: number;

            /**
             * 初始背景音樂音量(該音量將會成為AudioManager內預設音量)
             * @type {number}
             * @private
             */
            musicVolume: number;

            /**
             * 初始將背景音樂靜音
             * @type {boolean}
             * @private
             */
            isMusicOnMute: boolean;

            /**
             * 初始效果音量(該音量將會成為AudioManager內預設音量)
             * @type {number}
             * @private
             */
            effectVolume: number;

            /**
             * 初始將效果音效靜音
             * @type {boolean}
             * @private
             */
            isEffectOnMute: boolean;

            /**
             * 初始當前語系(只有開發模式中有效)
             * 注意:目前此方法失效
             * @type {LanguageType}
             * @private
             */
            language: string;

            /**
             * 返回首頁URL
             */
            backHomeURL: string;

            /**
             * 是否要開啟Framework Debug模式
             * 注意:遊戲正式上線須關閉
             * @type {boolean}
             * @private
             */
            isFrameworkDebug: boolean;

            /**
             * cocos 框架 debug設定
             * @default : INFO
             */
            cocosDebugSetting: cc.debug.DebugMode;

            /**
             * 添加遊戲名稱
             * @param {number} name : 遊戲名稱
             * @returns {this}
             */
            setGameNumber(name: number): this;

            /**
             * 設置初始預設音量
             * @param {number} number : 音量 0~1
             * @returns {this}
             */
            setMusicVolume(number: number): this;

            /**
             * 設置初始預設效果音量
             * @param {number} number : 音量 0~1
             * @returns {this}
             */
            setEffectVolume(number: number): this;

            /**
             * 初始要從外部拿取資源的URL
             * 注意:此URL為開發中生效
             * @param {string} url : 獲取外部資源的URL
             * @returns {this}
             */
            setExternallyLoadURL(url: string): this;

            /**
             * 貫穿整個遊戲,到destroy前遊戲語系
             * 注意:當前使用無效
             * @param {LanguageType} languageType : 語系
             * @returns {this}
             */
            setLanguage(languageType: string): this;

            /**
             * 初始將背景音樂靜音
             * @param {boolean} OnMute : 是否靜音
             * @returns {this}
             */
            setMusicOnMute(OnMute: boolean): this;

            /**
             * 初始是否將效果音效靜音
             * @param {boolean} OnMute : 是否靜音
             * @returns {this}
             */
            setEffectOnMute(OnMute: boolean): this;

            /**
             * 是否要開啟Framework Debug模式
             * 注意:遊戲正式上線須關閉
             * @param {boolean} use
             * @returns {this}
             */
            setFrameWorkDebug(use: boolean): this;

            /**
             * cocos 框架 debug設定
             * @param {cc.debug.DebugMode} type - debug 樣式
             * @default : INFO
             * @return {this}
             */
            setCocosDebug(type: cc.debug.DebugMode): this;

            /**
             * 返回首頁URL
             * @param {string} url
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