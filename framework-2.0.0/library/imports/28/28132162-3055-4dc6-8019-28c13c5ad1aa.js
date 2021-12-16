"use strict";
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