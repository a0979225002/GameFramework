"use strict";
cc._RF.push(module, 'b10ab9fHSZOWLqqBfzlPWmL', 'LanguageMethod');
// script/Framework/GlobalMethod/LanguageMethod.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-12 下午 01:50
 * @Version 1.0
 */
var ConfigEnum_1 = require("../Config/Enum/ConfigEnum");
var WebRequestManager_1 = require("../WebRequest/WebRequestManager");
var LanguageMethod = /** @class */ (function () {
    function LanguageMethod() {
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
        };
    }
    Object.defineProperty(LanguageMethod, "instance", {
        //懶漢加載
        get: function () {
            if (!this._instance) {
                this._instance = new LanguageMethod();
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 更新當前語系Label樣式,只需傳入需匹配的label即可
     * @param {cc.Label} label
     * @returns {this}
     */
    LanguageMethod.prototype.updateLabelStyle = function (label) {
        var language = WebRequestManager_1.default.instance.UserLanguage;
        if (!this.lang_LabelSetting[language]) {
            language = ConfigEnum_1.LanguageType.America;
        }
        label.fontFamily = this.lang_LabelSetting[language].fontFamily;
        label.fontSize = this.lang_LabelSetting[language].fontSize;
        label.lineHeight = this.lang_LabelSetting[language].lineHeight;
        return this;
    };
    return LanguageMethod;
}());
exports.default = LanguageMethod;

cc._RF.pop();