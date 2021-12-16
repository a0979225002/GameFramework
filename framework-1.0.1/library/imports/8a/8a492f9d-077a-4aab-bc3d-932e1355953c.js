"use strict";
cc._RF.push(module, '8a492+dB3pKq7w9ky4TVZU8', 'FrameWorkError');
// script/Framework/Error/ErrorType/FrameWorkError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlotConfigManager_1 = require("../../Config/SlotConfigManager");
var ErrorManagerEnum_1 = require("../Enum/ErrorManagerEnum");
var UnknownError_1 = require("./UnknownError");
var FrameWorkError = /** @class */ (function () {
    function FrameWorkError() {
        this.unknownError = new UnknownError_1.default;
    }
    FrameWorkError.prototype.checkErrorType = function (message, obj) {
        if (SlotConfigManager_1.default.instance.isFrameworkDebug) {
            switch (message) {
                case ErrorManagerEnum_1.ErrorType.IsRunningFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.IsRunningFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.UndefinedFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.UndefinedFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.TypeFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.TypeFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.AnimationErrorFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.AnimationErrorFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.LoadErrorFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.LoadErrorFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.WebRequestErrorFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.WebRequestErrorFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.PrefabFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.PrefabFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.MusicFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.MusicFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.WebResponseErrorFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.SceneFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.SceneFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.ProcedureFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.ProcedureFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.ListenerFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.ListenerFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.GameProcessFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.GameProcessFW + " " + obj);
                case ErrorManagerEnum_1.ErrorType.SlotStyleFW:
                    throw new Error(ErrorManagerEnum_1.ErrorType.SlotStyleFW + " " + obj);
                default:
                    this.unknownError.checkErrorType(message);
            }
        }
        else {
            console.log("有例外錯誤,但你未開啟框架Debug,無法查看");
        }
    };
    return FrameWorkError;
}());
exports.default = FrameWorkError;

cc._RF.pop();