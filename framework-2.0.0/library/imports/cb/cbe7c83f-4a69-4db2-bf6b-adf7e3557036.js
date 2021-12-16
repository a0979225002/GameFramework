"use strict";
cc._RF.push(module, 'cbe7cg/SmlNsr9rrffjVXA2', 'WarningError');
// script/Framework/Error/ErrorType/WarningError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../ErrorManager");
var WarningError = /** @class */ (function () {
    function WarningError() {
        this.timeout = null;
    }
    WarningError.prototype.checkErrorType = function (permanentState, message, buttonText) {
        if (this.timeout != null)
            clearTimeout(this.timeout);
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.warningNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager warningNode為空");
        if (!ErrorManager_1.default.instance.warningLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager warningLabel為空");
        if (ErrorManager_1.default.instance.warningDelayTime == 0) {
            ErrorManager_1.default.instance.executeError("\u7576\u524DDelayTime = 0 : \u8ACB\u7D66\u4E88\u503C", ErrorManager_1.default.instance.errorDelayTime);
        }
        ErrorManager_1.default.warningState = true;
        ErrorManager_1.default.instance.warningNode.active = true;
        ErrorManager_1.default.instance.warningLabel.string = message;
        if (permanentState)
            return;
        this.timeout = window.setTimeout(function () {
            ErrorManager_1.default.warningState = false;
            ErrorManager_1.default.instance.warningNode.active = false;
        }, ErrorManager_1.default.instance.warningDelayTime);
    };
    /**
     * 顯示金額不足無法下注
     * @param obj 顯示在label的文字
     */
    WarningError.prototype.showErrorBet = function (obj) {
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.errorNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorNode為空");
        if (!ErrorManager_1.default.instance.errorLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorLabel為空");
        if (!ErrorManager_1.default.instance.errorButton)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorButton為空");
        if (ErrorManager_1.default.instance.errorDelayTime == 0) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorDelayTime為空 無法顯示");
        }
        if (ErrorManager_1.default.errorState)
            return;
        ErrorManager_1.default.errorState = true;
        ErrorManager_1.default.instance.errorNode.active = true;
        ErrorManager_1.default.instance.errorLabel.string = obj;
        window.setTimeout(function () {
            ErrorManager_1.default.errorState = false;
            ErrorManager_1.default.instance.errorNode.active = false;
        }, ErrorManager_1.default.instance.errorDelayTime);
    };
    return WarningError;
}());
exports.default = WarningError;

cc._RF.pop();