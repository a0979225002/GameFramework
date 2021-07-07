namespace fcc {

    const CNY: IF.ILanguageStyle = {
        fontSize: 36,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "微軟正黑體"
    }
    const NTD: IF.ILanguageStyle = {
        fontSize: 36,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "微軟正黑體"
    }
    const USD: IF.ILanguageStyle = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    }
    const VND: IF.ILanguageStyle = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    }
    const THB: IF.ILanguageStyle = {
        fontSize: 30,
        lineHeight: 46,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    }
    const IDR: IF.ILanguageStyle = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    }
    const MYR: IF.ILanguageStyle = {
        fontSize: 30,
        lineHeight: 40,
        textScale: {
            default: 1,
            title: 1.2,
            text: 0.8
        },
        fontFamily: "Arial Unicode MS,Arial"
    }


    /**
     * @Author 蕭立品
     * @Description 語系管理器 : 保存當前語言本,語系樣式
     * @Date 2021-06-28 下午 12:06
     * @Version 1.0
     */
    export class LanguageManager implements IF.ILanguageManager {

        /**
         * 當前語言文字緩存
         * @type {{[p: string]: string}}
         */
        languageCache: { [key: string]: string };

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
        private labelCache: cc.Label[];

        /**
         * 當前所有語系樣式列表
         * @type {object}
         */
        style: Map<string | fcc.type.LanguageType, fcc.IF.ILanguageStyle>;

        private configManager: fcc.IF.IConfigManager;
        private static _instance: IF.ILanguageManager;

        constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this.style = new Map<string | fcc.type.LanguageType, fcc.IF.ILanguageStyle>();  //初始各語系樣式
            this.nowLanguageLabel = new Map<cc.Label, string>();                            //初始當前綁定的所有label
            this.initDefaultStyle();                                                        //初始化預設語系樣式
            this.nowLang = this.configManager.language;                                     //初始當前語系
        }


        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new LanguageManager(configManager);
                languageMgr = this._instance;
            }
        }

        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.ILanguageManager {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.AUDIO_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }


        /**
         * 添加默認樣式
         * @private
         */
        private initDefaultStyle() {
            this.style.set(type.LanguageType.TAIWAN, NTD);
            this.style.set(type.LanguageType.CHINESE, CNY);
            this.style.set(type.LanguageType.AMERICA, USD);
            this.style.set(type.LanguageType.INDONESIA, IDR);
            this.style.set(type.LanguageType.TAIWAN, NTD);
            this.style.set(type.LanguageType.MALAYSIA, MYR);
            this.style.set(type.LanguageType.VIETNAM, VND);
        }

        /**
         * 額外添加新的語系樣式
         */
        addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle) {
            this.style.set(key, style)
        }

        /**
         * 更新語系,會更新當前所有已經綁定的 cc.Label
         * @param {string | fcc.type.LanguageType} language - 要更新的語系
         */
        updateLanguage(language: string | type.LanguageType) {
            if (this.nowLang != language) {
                this.nowLang = language;
                for (let label of this.nowLanguageLabel.keys()) {
                    let textKey = this.nowLanguageLabel.get(label);
                    this.updateText(label, textKey);
                }
            }
        }

        /**
         * 添加當前語系
         */
        setLanguage() {
            if (!this.languageCache) {
                this.reLoadNowLanguage();
            }
        }

        /**
         * 獲取當前語系
         * @return {string}
         */
        getLanguage(): string {
            return this.nowLang;
        }

        /**
         * 獲取當前語系數據,返回該key對應的文字
         * @param {string | undefined} key - 拿取當前緩存語系文本的某一段文字 |(空參數)獲取當前語系數據,返回所有數據
         * @return {string} - 返回該段文字,如果找不到鍵值,默認返回 key
         */
        getText(key: string): string {
            return this.languageCache[key];
        }

        getAllText(): object {
            return this.languageCache;
        }


        /**
         * 重新載入語系
         */
        reLoadNowLanguage() {
            try {
                this.languageCache = window.language_Mode[this.nowLang];
            } catch (e) {
                console.log("window.language_Mode 查找不到該語系", e);
            }
        }

        /**
         * TODO 清除無用的語系緩存
         */
        removeStringBuffer() {
            //TODO
        }

        updateText(target: cc.Label, textKey: string): this {
            target.string = this.getText(textKey);
            this.labelCache.push(target);
            return this;
        }

        /**
         * 更新所有透過 updateText更新的組件,更新該組件樣是
         * 注意 : 須配合 updateText 一起使用
         */
        updateStyle(): void {

            let language: string | fcc.type.LanguageType = this.nowLang;

            if (!this.style.has(this.nowLang)) {
                language = type.LanguageType.AMERICA;
            }

            const fontFamily: string = this.style.get(language).fontFamily;
            const fontSize: number = this.style.get(language).fontSize;
            const lineHeight: number = this.style.get(language).lineHeight;

            for (let label of this.labelCache) {
                label.fontFamily = fontFamily;
                label.fontSize = fontSize;
                label.lineHeight = lineHeight;
            }
            this.labelCache.length = 0;
        }
    }
}