
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Config/Enum/ConfigEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28132FiMFVNxoAZKME8WtGq', 'ConfigEnum');
// script/Framework/Config/Enum/ConfigEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageType = exports.AutoType = void 0;
var AutoType;
(function (AutoType) {
    /**
     * 無限AUTO
     * @type {AutoType.auto}
     */
    AutoType[AutoType["auto"] = -1] = "auto";
    /**
     * 直到Free出現後,結束AUTO狀態
     * @type {AutoType.auto}
     */
    AutoType[AutoType["freeEnd"] = -2] = "freeEnd";
    /**
     * AUTO 50次
     * @type {AutoType.auto50}
     */
    AutoType[AutoType["auto50"] = 50] = "auto50";
    /**
     * AUTO 100次
     * @type {AutoType.auto100}
     */
    AutoType[AutoType["auto100"] = 100] = "auto100";
    /**
     * AUTO 500次
     * @type {AutoType.auto100}
     */
    AutoType[AutoType["auto500"] = 500] = "auto500";
    /**
     * AUTO 1000次
     * @type {AutoType.auto1000}
     */
    AutoType[AutoType["auto1000"] = 1000] = "auto1000";
})(AutoType = exports.AutoType || (exports.AutoType = {}));
var LanguageType;
(function (LanguageType) {
    /**
     * 台灣
     * @type {LanguageType.Taiwan}
     */
    LanguageType["Taiwan"] = "NTD";
    /**
     * 中國
     * @type {LanguageType.Chinese}
     */
    LanguageType["Chinese"] = "CNY";
    /**
     * 印度
     * @type {LanguageType.India}
     */
    LanguageType["India"] = "IND";
    /**
     * 泰國
     * @type {LanguageType.Thailand}
     */
    LanguageType["Thailand"] = "THB";
    /**
     * 美國
     * @type {LanguageType.America}
     */
    LanguageType["America"] = "USD";
    /**
     * 越南
     * @type {LanguageType.Vietnam}
     */
    LanguageType["Vietnam"] = "VND";
})(LanguageType = exports.LanguageType || (exports.LanguageType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvbmZpZ1xcRW51bVxcQ29uZmlnRW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFFBb0NYO0FBcENELFdBQVksUUFBUTtJQUNoQjs7O09BR0c7SUFDSCx3Q0FBUyxDQUFBO0lBRVQ7OztPQUdHO0lBQ0gsOENBQVksQ0FBQTtJQUVaOzs7T0FHRztJQUNILDRDQUFXLENBQUE7SUFFWDs7O09BR0c7SUFDSCwrQ0FBYSxDQUFBO0lBRWI7OztPQUdHO0lBQ0gsK0NBQWEsQ0FBQTtJQUViOzs7T0FHRztJQUNILGtEQUFlLENBQUE7QUFDbkIsQ0FBQyxFQXBDVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQW9DbkI7QUFFRCxJQUFZLFlBcUNYO0FBckNELFdBQVksWUFBWTtJQUNwQjs7O09BR0c7SUFDSCw4QkFBYyxDQUFBO0lBRWQ7OztPQUdHO0lBQ0gsK0JBQWUsQ0FBQTtJQUVmOzs7T0FHRztJQUNILDZCQUFhLENBQUE7SUFFYjs7O09BR0c7SUFDSCxnQ0FBZ0IsQ0FBQTtJQUVoQjs7O09BR0c7SUFDSCwrQkFBZSxDQUFBO0lBRWY7OztPQUdHO0lBQ0gsK0JBQWUsQ0FBQTtBQUVuQixDQUFDLEVBckNXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBcUN2QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEF1dG9UeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICog54Sh6ZmQQVVUT1xyXG4gICAgICogQHR5cGUge0F1dG9UeXBlLmF1dG99XHJcbiAgICAgKi9cclxuICAgIGF1dG8gPSAtMSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOebtOWIsEZyZWXlh7rnj77lvows57WQ5p2fQVVUT+eLgOaFi1xyXG4gICAgICogQHR5cGUge0F1dG9UeXBlLmF1dG99XHJcbiAgICAgKi9cclxuICAgIGZyZWVFbmQgPSAtMixcclxuXHJcbiAgICAvKipcclxuICAgICAqIEFVVE8gNTDmrKFcclxuICAgICAqIEB0eXBlIHtBdXRvVHlwZS5hdXRvNTB9XHJcbiAgICAgKi9cclxuICAgIGF1dG81MCA9IDUwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVVUTyAxMDDmrKFcclxuICAgICAqIEB0eXBlIHtBdXRvVHlwZS5hdXRvMTAwfVxyXG4gICAgICovXHJcbiAgICBhdXRvMTAwID0gMTAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVVUTyA1MDDmrKFcclxuICAgICAqIEB0eXBlIHtBdXRvVHlwZS5hdXRvMTAwfVxyXG4gICAgICovXHJcbiAgICBhdXRvNTAwID0gNTAwLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQVVUTyAxMDAw5qyhXHJcbiAgICAgKiBAdHlwZSB7QXV0b1R5cGUuYXV0bzEwMDB9XHJcbiAgICAgKi9cclxuICAgIGF1dG8xMDAwID0gMTAwMFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBMYW5ndWFnZVR5cGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDlj7DngaNcclxuICAgICAqIEB0eXBlIHtMYW5ndWFnZVR5cGUuVGFpd2FufVxyXG4gICAgICovXHJcbiAgICBUYWl3YW4gPSBcIk5URFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Lit5ZyLXHJcbiAgICAgKiBAdHlwZSB7TGFuZ3VhZ2VUeXBlLkNoaW5lc2V9XHJcbiAgICAgKi9cclxuICAgIENoaW5lc2UgPSBcIkNOWVwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y2w5bqmXHJcbiAgICAgKiBAdHlwZSB7TGFuZ3VhZ2VUeXBlLkluZGlhfVxyXG4gICAgICovXHJcbiAgICBJbmRpYSA9IFwiSU5EXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDms7DlnItcclxuICAgICAqIEB0eXBlIHtMYW5ndWFnZVR5cGUuVGhhaWxhbmR9XHJcbiAgICAgKi9cclxuICAgIFRoYWlsYW5kID0gXCJUSEJcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe+juWci1xyXG4gICAgICogQHR5cGUge0xhbmd1YWdlVHlwZS5BbWVyaWNhfVxyXG4gICAgICovXHJcbiAgICBBbWVyaWNhID0gXCJVU0RcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi2iuWNl1xyXG4gICAgICogQHR5cGUge0xhbmd1YWdlVHlwZS5WaWV0bmFtfVxyXG4gICAgICovXHJcbiAgICBWaWV0bmFtID0gXCJWTkRcIixcclxuXHJcbn0iXX0=