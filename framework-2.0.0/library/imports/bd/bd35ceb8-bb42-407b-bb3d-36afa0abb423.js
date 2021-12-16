"use strict";
cc._RF.push(module, 'bd35c64u0JAe7s9Nq+gq7Qj', 'ErrorHandler');
// script/Framework/Error/ErrorHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectError_1 = require("./ErrorType/ObjectError");
var ServerError_1 = require("./ErrorType/ServerError");
var WarningError_1 = require("./ErrorType/WarningError");
/**
 * Error 中介者
 */
var ErrorHandler = /** @class */ (function () {
    function ErrorHandler() {
        this.objectError = new ObjectError_1.default();
        this.serverError = new ServerError_1.default();
        this.warningError = new WarningError_1.default();
    }
    ErrorHandler.prototype.checkErrorType = function (message, obj) {
        return this.objectError.checkErrorType(message, obj);
    };
    ErrorHandler.prototype.checkServerError = function (permanentState, message, buttonText) {
        this.serverError.checkErrorType(permanentState, message, buttonText);
    };
    ErrorHandler.prototype.checkWarning = function (permanentState, message, buttonText) {
        this.warningError.checkErrorType(permanentState, message, buttonText);
    };
    return ErrorHandler;
}());
exports.default = ErrorHandler;

cc._RF.pop();