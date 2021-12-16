
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvckhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1REFBa0Q7QUFDbEQsdURBQWlEO0FBQ2pELHlEQUFtRDtBQUduRDs7R0FFRztBQUNIO0lBTUk7UUFFSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkscUJBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxxQkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLHNCQUFZLEVBQUUsQ0FBQztJQUUzQyxDQUFDO0lBRUQscUNBQWMsR0FBZCxVQUFlLE9BQTJCLEVBQUUsR0FBUztRQUVqRCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztJQUV6RCxDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLGNBQXVCLEVBQUUsT0FBZSxFQUFFLFVBQW1CO1FBRWpGLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLGNBQXVCLEVBQUUsT0FBZSxFQUFFLFVBQW1CO1FBRTdFLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFFMUUsQ0FBQztJQUVMLG1CQUFDO0FBQUQsQ0FoQ0EsQUFnQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IE9iamVjdEVycm9yIGZyb20gXCIuL0Vycm9yVHlwZS9PYmplY3RFcnJvclwiO1xyXG5pbXBvcnQgU2VydmVyRXJyb3IgZnJvbSAnLi9FcnJvclR5cGUvU2VydmVyRXJyb3InXHJcbmltcG9ydCBXYXJuaW5nRXJyb3IgZnJvbSAnLi9FcnJvclR5cGUvV2FybmluZ0Vycm9yJ1xyXG5pbXBvcnQgSUVycm9ySGFuZGxlciBmcm9tIFwiLi9JRXJyb3JIYW5kbGVyXCI7XHJcblxyXG4vKipcclxuICogRXJyb3Ig5Lit5LuL6ICFXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvckhhbmRsZXIgaW1wbGVtZW50cyBJRXJyb3JIYW5kbGVyIHtcclxuXHJcbiAgICBwcml2YXRlIG9iamVjdEVycm9yOiBPYmplY3RFcnJvcjtcclxuICAgIHByaXZhdGUgc2VydmVyRXJyb3I6IFNlcnZlckVycm9yO1xyXG4gICAgcHJpdmF0ZSB3YXJuaW5nRXJyb3I6IFdhcm5pbmdFcnJvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vYmplY3RFcnJvciA9IG5ldyBPYmplY3RFcnJvcigpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyRXJyb3IgPSBuZXcgU2VydmVyRXJyb3IoKTtcclxuICAgICAgICB0aGlzLndhcm5pbmdFcnJvciA9IG5ldyBXYXJuaW5nRXJyb3IoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFcnJvclR5cGUobWVzc2FnZTogc3RyaW5nIHwgRXJyb3JUeXBlLCBvYmo/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0RXJyb3IuY2hlY2tFcnJvclR5cGUobWVzc2FnZSwgb2JqKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrU2VydmVyRXJyb3IocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dD86IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlckVycm9yLmNoZWNrRXJyb3JUeXBlKHBlcm1hbmVudFN0YXRlLCBtZXNzYWdlLCBidXR0b25UZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrV2FybmluZyhwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMud2FybmluZ0Vycm9yLmNoZWNrRXJyb3JUeXBlKHBlcm1hbmVudFN0YXRlLCBtZXNzYWdlLCBidXR0b25UZXh0KTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19