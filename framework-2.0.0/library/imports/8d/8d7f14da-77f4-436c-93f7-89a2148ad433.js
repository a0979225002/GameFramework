"use strict";
cc._RF.push(module, '8d7f1Tad/RDbJP3iaIUitQz', 'ServerError');
// script/Framework/Error/ErrorType/ServerError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../ErrorManager");
var ServerError = /** @class */ (function () {
    function ServerError() {
        this.timeOut = null;
    }
    ServerError.prototype.checkErrorType = function (permanentState, message, buttonText) {
        var _this = this;
        if (this.timeOut != null)
            clearTimeout(this.timeOut);
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.errorNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorNode為空");
        if (!ErrorManager_1.default.instance.errorLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorLabel為空");
        if (!ErrorManager_1.default.instance.errorButton)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorButton為空");
        ErrorManager_1.default.errorState = true;
        ErrorManager_1.default.instance.errorNode.active = true;
        ErrorManager_1.default.instance.errorLabel.string = message;
        ErrorManager_1.default.instance.errorButton.active = ErrorManager_1.default.instance.isShowBackHomeButton;
        if (ErrorManager_1.default.instance.errorButton.active) {
            ErrorManager_1.default.instance.errorButtonLabel.string = buttonText;
        }
        if (!permanentState) {
            this.timeOut = window.setTimeout(function () {
                ErrorManager_1.default.errorState = false;
                ErrorManager_1.default.instance.errorNode.active = false;
                ErrorManager_1.default.instance.errorButton.active = false;
                _this.timeOut = null;
            }, ErrorManager_1.default.instance.errorDelayTime);
        }
    };
    return ServerError;
}());
exports.default = ServerError;

cc._RF.pop();