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
        private languageCache: { [key: string]: string };

        /**
         * 當前語系
         * @type {string}
         */
        private _nowLang: string | type.LanguageType;

        /**
         * 當前綁定的組件
         * @type {Map<cc.Label, string>}
         */
        private readonly _nowLanguageLabels: Map<cc.Label, string>;

        /**
         * 所有更新完後的label 都會保存至這,需要再次更換語系時使用
         * @type {Array<Map<cc.Label, string>>}
         * @private
         */
        private allLanguageLabel: Array<Map<cc.Label, string>>;

        /**
         * 當前所有語系樣式列表
         * @type {object}
         */
        private readonly _style: Map<string | fcc.type.LanguageType, fcc.IF.ILanguageStyle>;
        private configManager: fcc.IF.IConfigManager;
        private static _instance: IF.ILanguageManager;

        constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this._style = new Map<string | fcc.type.LanguageType, fcc.IF.ILanguageStyle>();  //初始各語系樣式
            this.allLanguageLabel = new Array<Map<cc.Label, string>>();                      //初始所有label
            this._nowLanguageLabels = new Map<cc.Label, string>();                            //初始當前綁定的所有label
            this.initDefaultStyle();                                                         //初始化預設語系樣式
            this._nowLang = this.configManager.language;                                     //初始當前語系
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
            this._style.set(type.LanguageType.TAIWAN, NTD);
            this._style.set(type.LanguageType.CHINESE, CNY);
            this._style.set(type.LanguageType.AMERICA, USD);
            this._style.set(type.LanguageType.INDONESIA, IDR);
            this._style.set(type.LanguageType.THAILAND, THB);
            this._style.set(type.LanguageType.MALAYSIA, MYR);
            this._style.set(type.LanguageType.VIETNAM, VND);
        }

        /**
         * 額外添加新的語系樣式
         */
        addStyle(key: string | type.LanguageType, style: IF.ILanguageStyle) {
            this._style.set(key, style)
        }

        /**
         * 更新語系,會更新當前所有已經綁定的 cc.Label
         * @param {string | fcc.type.LanguageType} language - 要更新的語系
         */
        updateLanguage(language: string | type.LanguageType) {
            if (this._nowLang != language) {
                this._nowLang = language;
                for (let map of this.allLanguageLabel) {
                    for (let label of map.keys()) {
                        let textKey = map.get(label);
                        this.updateText(label, textKey);
                    }
                }
                this.updateStyle(false);
            }
        }

        /**
         * 添加當前語系
         */
        setLanguage(): void {
            if (!this.languageCache) {
                this.reLoadNowLanguage();
            }
        }

        /**
         * 獲取當前語系
         * @return {string}
         */
        getLanguage(): string {
            return this._nowLang;
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
        reLoadNowLanguage(language?: string | type.LanguageType) {
            try {
                if (language) {
                    this.languageCache = window.language_Mode[language];
                } else {
                    this.languageCache = window.language_Mode[this._nowLang];
                }
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
            this._nowLanguageLabels.set(target, textKey);
            return this;
        }

        /**
         * 更新所有透過 updateText更新的組件,更新該組件樣是
         * 注意 : 須配合 updateText 一起使用
         * @param {boolean} save - 是否要保存 label組件,可配合updateLanguage()方法將已經綁定的label全部再次更換語系文字
         */
        updateStyle(save: boolean): void {

            let language: string | fcc.type.LanguageType = this._nowLang;

            if (!this._style.has(this._nowLang)) {
                language = type.LanguageType.AMERICA;
            }

            const fontFamily: string = this._style.get(language).fontFamily;
            const fontSize: number = this._style.get(language).fontSize;
            const lineHeight: number = this._style.get(language).lineHeight;

            for (let label of this._nowLanguageLabels.keys()) {
                label.fontFamily = fontFamily;
                label.fontSize = fontSize;
                label.lineHeight = lineHeight;
            }
            if (save) this.allLanguageLabel.push(this._nowLanguageLabels);
            this._nowLanguageLabels.clear();
        }
    }


}