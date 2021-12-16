
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorType/FrameWorkError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvclR5cGVcXEZyYW1lV29ya0Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQStEO0FBQy9ELDZEQUFtRDtBQUNuRCwrQ0FBMEM7QUFHMUM7SUFJSTtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxzQkFBWSxDQUFBO0lBRXhDLENBQUM7SUFFRCx1Q0FBYyxHQUFkLFVBQWUsT0FBMkIsRUFBRSxHQUFRO1FBRWhELElBQUksMkJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO1lBRTdDLFFBQVEsT0FBTyxFQUFFO2dCQUNiLEtBQUssNEJBQVMsQ0FBQyxXQUFXO29CQUN0QixNQUFNLElBQUksS0FBSyxDQUFJLDRCQUFTLENBQUMsV0FBVyxTQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUN2RCxLQUFLLDRCQUFTLENBQUMsV0FBVztvQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBSSw0QkFBUyxDQUFDLFdBQVcsU0FBSSxHQUFLLENBQUMsQ0FBQztnQkFDdkQsS0FBSyw0QkFBUyxDQUFDLE1BQU07b0JBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxNQUFNLFNBQUksR0FBSyxDQUFDLENBQUM7Z0JBQ2xELEtBQUssNEJBQVMsQ0FBQyxnQkFBZ0I7b0JBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxnQkFBZ0IsU0FBSSxHQUFLLENBQUMsQ0FBQztnQkFDNUQsS0FBSyw0QkFBUyxDQUFDLFdBQVc7b0JBQ3RCLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxXQUFXLFNBQUksR0FBSyxDQUFDLENBQUM7Z0JBQ3ZELEtBQUssNEJBQVMsQ0FBQyxpQkFBaUI7b0JBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxpQkFBaUIsU0FBSSxHQUFLLENBQUMsQ0FBQztnQkFDN0QsS0FBSyw0QkFBUyxDQUFDLFFBQVE7b0JBQ25CLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxRQUFRLFNBQUksR0FBSyxDQUFDLENBQUM7Z0JBQ3BELEtBQUssNEJBQVMsQ0FBQyxPQUFPO29CQUNsQixNQUFNLElBQUksS0FBSyxDQUFJLDRCQUFTLENBQUMsT0FBTyxTQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLDRCQUFTLENBQUMsa0JBQWtCO29CQUM3QixNQUFNLElBQUksS0FBSyxDQUFJLDRCQUFTLENBQUMsa0JBQWtCLFNBQUksR0FBSyxDQUFDLENBQUM7Z0JBQzlELEtBQUssNEJBQVMsQ0FBQyxPQUFPO29CQUNsQixNQUFNLElBQUksS0FBSyxDQUFJLDRCQUFTLENBQUMsT0FBTyxTQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUNuRCxLQUFLLDRCQUFTLENBQUMsV0FBVztvQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBSSw0QkFBUyxDQUFDLFdBQVcsU0FBSSxHQUFLLENBQUMsQ0FBQztnQkFDdkQsS0FBSyw0QkFBUyxDQUFDLFVBQVU7b0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUksNEJBQVMsQ0FBQyxVQUFVLFNBQUksR0FBSyxDQUFDLENBQUM7Z0JBQ3RELEtBQUssNEJBQVMsQ0FBQyxhQUFhO29CQUN4QixNQUFNLElBQUksS0FBSyxDQUFJLDRCQUFTLENBQUMsYUFBYSxTQUFJLEdBQUssQ0FBQyxDQUFDO2dCQUN6RCxLQUFLLDRCQUFTLENBQUMsV0FBVztvQkFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBSSw0QkFBUyxDQUFDLFdBQVcsU0FBSSxHQUFLLENBQUMsQ0FBQztnQkFDdkQ7b0JBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDakQ7U0FFSjthQUFNO1lBRUgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1NBRTFDO0lBQ0wsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTbG90Q29uZmlnTWFuYWdlciBmcm9tIFwiLi4vLi4vQ29uZmlnL1Nsb3RDb25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBVbmtub3duRXJyb3IgZnJvbSBcIi4vVW5rbm93bkVycm9yXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJhbWVXb3JrRXJyb3Ige1xyXG5cclxuICAgIHByaXZhdGUgdW5rbm93bkVycm9yOiBVbmtub3duRXJyb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudW5rbm93bkVycm9yID0gbmV3IFVua25vd25FcnJvclxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0Vycm9yVHlwZShtZXNzYWdlOiBzdHJpbmcgfCBFcnJvclR5cGUsIG9iajogYW55KSB7XHJcblxyXG4gICAgICAgIGlmIChTbG90Q29uZmlnTWFuYWdlci5pbnN0YW5jZS5pc0ZyYW1ld29ya0RlYnVnKSB7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgRXJyb3JUeXBlLklzUnVubmluZ0ZXOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtFcnJvclR5cGUuSXNSdW5uaW5nRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuVW5kZWZpbmVkRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0Vycm9yVHlwZS5VbmRlZmluZWRGV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVycm9yVHlwZS5UeXBlRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0Vycm9yVHlwZS5UeXBlRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuQW5pbWF0aW9uRXJyb3JGVzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RXJyb3JUeXBlLkFuaW1hdGlvbkVycm9yRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuTG9hZEVycm9yRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0Vycm9yVHlwZS5Mb2FkRXJyb3JGV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEVycm9yVHlwZS5XZWJSZXF1ZXN0RXJyb3JGVzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RXJyb3JUeXBlLldlYlJlcXVlc3RFcnJvckZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRXJyb3JUeXBlLlByZWZhYkZXOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtFcnJvclR5cGUuUHJlZmFiRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuTXVzaWNGVzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RXJyb3JUeXBlLk11c2ljRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuV2ViUmVzcG9uc2VFcnJvckZXOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtFcnJvclR5cGUuV2ViUmVzcG9uc2VFcnJvckZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRXJyb3JUeXBlLlNjZW5lRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0Vycm9yVHlwZS5TY2VuZUZXfSAke29ian1gKTtcclxuICAgICAgICAgICAgICAgIGNhc2UgRXJyb3JUeXBlLlByb2NlZHVyZUZXOlxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtFcnJvclR5cGUuUHJvY2VkdXJlRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuTGlzdGVuZXJGVzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RXJyb3JUeXBlLkxpc3RlbmVyRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuR2FtZVByb2Nlc3NGVzpcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7RXJyb3JUeXBlLkdhbWVQcm9jZXNzRld9ICR7b2JqfWApO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBFcnJvclR5cGUuU2xvdFN0eWxlRlc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke0Vycm9yVHlwZS5TbG90U3R5bGVGV30gJHtvYmp9YCk7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0IDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVua25vd25FcnJvci5jaGVja0Vycm9yVHlwZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnInkvovlpJbpjK/oqqQs5L2G5L2g5pyq6ZaL5ZWf5qGG5p62RGVidWcs54Sh5rOV5p+l55yLXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=