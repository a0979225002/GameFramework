/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-12 下午 01:50
 * @Version 1.0
 */
import {LanguageType} from "../Config/Enum/ConfigEnum";
import WebRequestManager from "../WebRequest/WebRequestManager";

export default class LanguageMethod {

    private static _instance: LanguageMethod;
    private readonly lang_LabelSetting: { USD: { fontFamily: string; fontSize: number; lineHeight: number; txtSacle: { default: number; Title: number; Text: number } }; VND: { fontFamily: string; fontSize: number; lineHeight: number; txtSacle: { default: number; Title: number; Text: number } }; CNY: { fontFamily: string; fontSize: number; lineHeight: number; txtSacle: { default: number; Title: number; Text: number } }; NTD: { fontFamily: string; fontSize: number; lineHeight: number; txtSacle: { default: number; Title: number; Text: number } }; THB: { fontFamily: string; fontSize: number; lineHeight: number; txtSacle: { default: number; Title: number; Text: number } } };

    //懶漢加載
    public static get instance(): LanguageMethod {

        if (!this._instance) {
            this._instance = new LanguageMethod();
        }
        return this._instance
    }

    private constructor() {
        //初始化該語系狀態
        this.lang_LabelSetting = {
            CNY: {
                fontSize: 36,
                lineHeight: 46,
                txtSacle: {
                    default: 1,
                    Title: 1.2,
                    Text: 0.8
                },
                fontFamily: "微軟正黑體"
            },
            NTD: {
                fontSize: 36,
                lineHeight: 46,
                txtSacle: {
                    default: 1,
                    Title: 1.2,
                    Text: 0.8
                },
                fontFamily: "微軟正黑體"
            },
            USD: {
                fontSize: 30,
                lineHeight: 40,
                txtSacle: {
                    default: 1,
                    Title: 1.2,
                    Text: 0.8
                },
                fontFamily: "Arial Unicode MS,Arial"
            },
            VND: {
                fontSize: 30,
                lineHeight: 40,
                txtSacle: {
                    default: 1,
                    Title: 1.2,
                    Text: 0.8
                },
                fontFamily: "Arial Unicode MS,Arial"
            },
            THB: {
                fontSize: 30,
                lineHeight: 46,
                txtSacle: {
                    default: 1,
                    Title: 1.2,
                    Text: 0.8
                },
                fontFamily: "Arial Unicode MS,Arial"
            }
        }
    }

    /**
     * 更新當前語系Label樣式,只需傳入需匹配的label即可
     * @param {cc.Label} label
     * @returns {this}
     */
    public updateLabelStyle(label: cc.Label) {

        let language = WebRequestManager.instance.UserLanguage;

        if (!this.lang_LabelSetting[language]) {
            language = LanguageType.America;
        }
        label.fontFamily = this.lang_LabelSetting[language].fontFamily;
        label.fontSize = this.lang_LabelSetting[language].fontSize;
        label.lineHeight = this.lang_LabelSetting[language].lineHeight;
        return this;
    }
}