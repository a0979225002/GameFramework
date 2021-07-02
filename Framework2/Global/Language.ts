import WebRequestManager from "../WebRequest/WebRequestManager";
import {LanguageType} from "../Config/Enum/LanguageType";


export interface ILanguageParameter {
    CNY: ILanguageStyle;
    NTD: ILanguageStyle;
    USD: ILanguageStyle;
    VND: ILanguageStyle;
    THB: ILanguageStyle;
}

export interface ILanguageStyle {
    fontSize: number,
    lineHeight: number,
    textScale: {
        default: number,
        title: number,
        text: number,
    }
    fontFamily: string;
}

/**
 * @Author XIAO-LI-PIN
 * @Description (工具類)各語系樣式變更設定
 * @Date 2021-05-12 下午 01:50
 * @Version 1.0
 */
export default class Language {

    private static labelNodeToArray: Array<cc.Label> = new Array<cc.Label>();

    //初始化該語系狀態
    private static languageParameters: ILanguageParameter = {
        CNY: {
            fontSize: 36,
            lineHeight: 46,
            textScale: {
                default: 1,
                title: 1.2,
                text: 0.8
            },
            fontFamily: "微軟正黑體"
        },
        NTD: {
            fontSize: 36,
            lineHeight: 46,
            textScale: {
                default: 1,
                title: 1.2,
                text: 0.8
            },
            fontFamily: "微軟正黑體"
        },
        USD: {
            fontSize: 30,
            lineHeight: 40,
            textScale: {
                default: 1,
                title: 1.2,
                text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        },
        VND: {
            fontSize: 30,
            lineHeight: 40,
            textScale: {
                default: 1,
                title: 1.2,
                text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        },
        THB: {
            fontSize: 30,
            lineHeight: 46,
            textScale: {
                default: 1,
                title: 1.2,
                text: 0.8
            },
            fontFamily: "Arial Unicode MS,Arial"
        }
    }

    /**
     * 獲取該語系樣式參數
     * @param {string} language - 語系
     * @return {ILanguageStyle}
     * @private
     */
    public static getLanguageParameter(language: string): ILanguageStyle {
        return this.languageParameters[language];
    }

    /**
     * 添加需要更改語系樣式的label
     * @param {cc.Label} label - 需更換Style 的 label 組件
     * @returns {this}
     */
    public static setLabel(label: cc.Label): typeof Language{
        this.labelNodeToArray.push(label);
        return this;
    }

    /**
     * 更新所有以綁定的Label匹配的語系樣式
     */
    public static updateStyle(): void {

        let language: string = WebRequestManager.instance.UserLanguage;

        if (!this.languageParameters[language]) {
            language = LanguageType.AMERICA;
        }

        const fontFamily: string = this.getLanguageParameter(language).fontFamily;
        const fontSize: number = this.getLanguageParameter(language).fontSize;
        const lineHeight: number = this.getLanguageParameter(language).lineHeight;

        for (let label of this.labelNodeToArray) {
            label.fontFamily = fontFamily;
            label.fontSize = fontSize;
            label.lineHeight = lineHeight;
        }
        this.labelNodeToArray.length = 0;
    }
}