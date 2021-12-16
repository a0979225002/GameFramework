
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GlobalMethod/LanguageMethod.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdsb2JhbE1ldGhvZFxcTGFuZ3VhZ2VNZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNILHdEQUF1RDtBQUN2RCxxRUFBZ0U7QUFFaEU7SUFjSTtRQUNJLFVBQVU7UUFDVixJQUFJLENBQUMsaUJBQWlCLEdBQUc7WUFDckIsR0FBRyxFQUFFO2dCQUNELFFBQVEsRUFBRSxFQUFFO2dCQUNaLFVBQVUsRUFBRSxFQUFFO2dCQUNkLFFBQVEsRUFBRTtvQkFDTixPQUFPLEVBQUUsQ0FBQztvQkFDVixLQUFLLEVBQUUsR0FBRztvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjtnQkFDRCxVQUFVLEVBQUUsT0FBTzthQUN0QjtZQUNELEdBQUcsRUFBRTtnQkFDRCxRQUFRLEVBQUUsRUFBRTtnQkFDWixVQUFVLEVBQUUsRUFBRTtnQkFDZCxRQUFRLEVBQUU7b0JBQ04sT0FBTyxFQUFFLENBQUM7b0JBQ1YsS0FBSyxFQUFFLEdBQUc7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1o7Z0JBQ0QsVUFBVSxFQUFFLE9BQU87YUFDdEI7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFO29CQUNOLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFVBQVUsRUFBRSx3QkFBd0I7YUFDdkM7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFO29CQUNOLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFVBQVUsRUFBRSx3QkFBd0I7YUFDdkM7WUFDRCxHQUFHLEVBQUU7Z0JBQ0QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFO29CQUNOLE9BQU8sRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxHQUFHO29CQUNWLElBQUksRUFBRSxHQUFHO2lCQUNaO2dCQUNELFVBQVUsRUFBRSx3QkFBd0I7YUFDdkM7U0FDSixDQUFBO0lBQ0wsQ0FBQztJQTlERCxzQkFBa0IsMEJBQVE7UUFEMUIsTUFBTTthQUNOO1lBRUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzthQUN6QztZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQTtRQUN6QixDQUFDOzs7T0FBQTtJQTBERDs7OztPQUlHO0lBQ0kseUNBQWdCLEdBQXZCLFVBQXdCLEtBQWU7UUFFbkMsSUFBSSxRQUFRLEdBQUcsMkJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ25DLFFBQVEsR0FBRyx5QkFBWSxDQUFDLE9BQU8sQ0FBQztTQUNuQztRQUNELEtBQUssQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztRQUMvRCxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDM0QsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQy9ELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCxxQkFBQztBQUFELENBdkZBLEFBdUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gVE9ET1xyXG4gKiBARGF0ZSAyMDIxLTA1LTEyIOS4i+WNiCAwMTo1MFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmltcG9ydCB7TGFuZ3VhZ2VUeXBlfSBmcm9tIFwiLi4vQ29uZmlnL0VudW0vQ29uZmlnRW51bVwiO1xyXG5pbXBvcnQgV2ViUmVxdWVzdE1hbmFnZXIgZnJvbSBcIi4uL1dlYlJlcXVlc3QvV2ViUmVxdWVzdE1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlTWV0aG9kIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IExhbmd1YWdlTWV0aG9kO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBsYW5nX0xhYmVsU2V0dGluZzogeyBVU0Q6IHsgZm9udEZhbWlseTogc3RyaW5nOyBmb250U2l6ZTogbnVtYmVyOyBsaW5lSGVpZ2h0OiBudW1iZXI7IHR4dFNhY2xlOiB7IGRlZmF1bHQ6IG51bWJlcjsgVGl0bGU6IG51bWJlcjsgVGV4dDogbnVtYmVyIH0gfTsgVk5EOiB7IGZvbnRGYW1pbHk6IHN0cmluZzsgZm9udFNpemU6IG51bWJlcjsgbGluZUhlaWdodDogbnVtYmVyOyB0eHRTYWNsZTogeyBkZWZhdWx0OiBudW1iZXI7IFRpdGxlOiBudW1iZXI7IFRleHQ6IG51bWJlciB9IH07IENOWTogeyBmb250RmFtaWx5OiBzdHJpbmc7IGZvbnRTaXplOiBudW1iZXI7IGxpbmVIZWlnaHQ6IG51bWJlcjsgdHh0U2FjbGU6IHsgZGVmYXVsdDogbnVtYmVyOyBUaXRsZTogbnVtYmVyOyBUZXh0OiBudW1iZXIgfSB9OyBOVEQ6IHsgZm9udEZhbWlseTogc3RyaW5nOyBmb250U2l6ZTogbnVtYmVyOyBsaW5lSGVpZ2h0OiBudW1iZXI7IHR4dFNhY2xlOiB7IGRlZmF1bHQ6IG51bWJlcjsgVGl0bGU6IG51bWJlcjsgVGV4dDogbnVtYmVyIH0gfTsgVEhCOiB7IGZvbnRGYW1pbHk6IHN0cmluZzsgZm9udFNpemU6IG51bWJlcjsgbGluZUhlaWdodDogbnVtYmVyOyB0eHRTYWNsZTogeyBkZWZhdWx0OiBudW1iZXI7IFRpdGxlOiBudW1iZXI7IFRleHQ6IG51bWJlciB9IH0gfTtcclxuXHJcbiAgICAvL+aHtua8ouWKoOi8iVxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogTGFuZ3VhZ2VNZXRob2Qge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IExhbmd1YWdlTWV0aG9kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgLy/liJ3lp4vljJboqbLoqp7ns7vni4DmhYtcclxuICAgICAgICB0aGlzLmxhbmdfTGFiZWxTZXR0aW5nID0ge1xyXG4gICAgICAgICAgICBDTlk6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQ2LFxyXG4gICAgICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCLlvq7ou5/mraPpu5Hpq5RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBOVEQ6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQ2LFxyXG4gICAgICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCLlvq7ou5/mraPpu5Hpq5RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBVU0Q6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAzMCxcclxuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDQwLFxyXG4gICAgICAgICAgICAgICAgdHh0U2FjbGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIFRpdGxlOiAxLjIsXHJcbiAgICAgICAgICAgICAgICAgICAgVGV4dDogMC44XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCBVbmljb2RlIE1TLEFyaWFsXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgVk5EOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMzAsXHJcbiAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiA0MCxcclxuICAgICAgICAgICAgICAgIHR4dFNhY2xlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogMSxcclxuICAgICAgICAgICAgICAgICAgICBUaXRsZTogMS4yLFxyXG4gICAgICAgICAgICAgICAgICAgIFRleHQ6IDAuOFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwgVW5pY29kZSBNUyxBcmlhbFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFRIQjoge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IDMwLFxyXG4gICAgICAgICAgICAgICAgbGluZUhlaWdodDogNDYsXHJcbiAgICAgICAgICAgICAgICB0eHRTYWNsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgVGl0bGU6IDEuMixcclxuICAgICAgICAgICAgICAgICAgICBUZXh0OiAwLjhcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsIFVuaWNvZGUgTVMsQXJpYWxcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw55W25YmN6Kqe57O7TGFiZWzmqKPlvI8s5Y+q6ZyA5YKz5YWl6ZyA5Yy56YWN55qEbGFiZWzljbPlj69cclxuICAgICAqIEBwYXJhbSB7Y2MuTGFiZWx9IGxhYmVsXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZUxhYmVsU3R5bGUobGFiZWw6IGNjLkxhYmVsKSB7XHJcblxyXG4gICAgICAgIGxldCBsYW5ndWFnZSA9IFdlYlJlcXVlc3RNYW5hZ2VyLmluc3RhbmNlLlVzZXJMYW5ndWFnZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmxhbmdfTGFiZWxTZXR0aW5nW2xhbmd1YWdlXSkge1xyXG4gICAgICAgICAgICBsYW5ndWFnZSA9IExhbmd1YWdlVHlwZS5BbWVyaWNhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsYWJlbC5mb250RmFtaWx5ID0gdGhpcy5sYW5nX0xhYmVsU2V0dGluZ1tsYW5ndWFnZV0uZm9udEZhbWlseTtcclxuICAgICAgICBsYWJlbC5mb250U2l6ZSA9IHRoaXMubGFuZ19MYWJlbFNldHRpbmdbbGFuZ3VhZ2VdLmZvbnRTaXplO1xyXG4gICAgICAgIGxhYmVsLmxpbmVIZWlnaHQgPSB0aGlzLmxhbmdfTGFiZWxTZXR0aW5nW2xhbmd1YWdlXS5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59Il19