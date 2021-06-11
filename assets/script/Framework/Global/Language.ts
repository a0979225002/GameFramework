import {LanguageType} from "../Config/Enum/ConfigEnum";
import WebRequestManager from "../WebRequest/WebRequestManager";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-12 下午 01:50
 * @Version 1.0
 */
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

export default class Language {

    //初始化該語系狀態
    static languageParameters: ILanguageParameter = {
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

    private static getLanguageParameter(language: string): ILanguageStyle {
        return this.languageParameters[language];
    }

    /**
     * 更新當前語系Label樣式,只需傳入需匹配的label即可
     * @param {cc.Label} label
     * @returns {this}
     */
    public static updateLabelStyle(label: cc.Label) {
        let language: string = WebRequestManager.instance.UserLanguage;
        if (!this.languageParameters[language]) {
            language = LanguageType.America;
        }

        label.fontFamily = this.getLanguageParameter(language).fontFamily;
        label.fontSize = this.getLanguageParameter(language).fontSize;
        label.lineHeight = this.getLanguageParameter(language).lineHeight;
        return this;
    }
}