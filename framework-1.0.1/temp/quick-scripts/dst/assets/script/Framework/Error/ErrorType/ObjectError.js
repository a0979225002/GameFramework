
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorType/ObjectError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b2270UCDhGPYXqTtTevNYB', 'ObjectError');
// script/Framework/Error/ErrorType/ObjectError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FrameWorkError_1 = require("./FrameWorkError");
var ObjectError = /** @class */ (function () {
    function ObjectError() {
        this.frameWorkError = new FrameWorkError_1.default();
    }
    ObjectError.prototype.checkErrorType = function (message, obj) {
        if (typeof message === "string") {
            this.frameWorkError.checkErrorType(message, obj);
        }
        else if (message === null) {
            return this.checkObjectType(obj);
        }
    };
    ObjectError.prototype.checkObjectType = function (obj) {
        if (obj && obj != 0) {
            console.log("1");
            return typeof obj;
        }
        else {
            throw Error("\u8A72\u8B8A\u6578\u70BAnull");
        }
    };
    return ObjectError;
}());
exports.default = ObjectError;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvclR5cGVcXE9iamVjdEVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbURBQThDO0FBRTlDO0lBSUk7UUFFSSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksd0JBQWMsRUFBRSxDQUFDO0lBRS9DLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsT0FBMkIsRUFBRSxHQUFTO1FBRWpELElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBRTdCLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztTQUVwRDthQUFNLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUV6QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7U0FFcEM7SUFFTCxDQUFDO0lBRUQscUNBQWUsR0FBZixVQUFnQixHQUFRO1FBRXBCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLE9BQU8sR0FBRyxDQUFDO1NBRXJCO2FBQU07WUFFSCxNQUFNLEtBQUssQ0FBQyw4QkFBVSxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEZyYW1lV29ya0Vycm9yIGZyb20gXCIuL0ZyYW1lV29ya0Vycm9yXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3RFcnJvciB7XHJcblxyXG4gICAgcHJpdmF0ZSBmcmFtZVdvcmtFcnJvcjogRnJhbWVXb3JrRXJyb3I7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZnJhbWVXb3JrRXJyb3IgPSBuZXcgRnJhbWVXb3JrRXJyb3IoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFcnJvclR5cGUobWVzc2FnZTogc3RyaW5nIHwgRXJyb3JUeXBlLCBvYmo/OiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdlID09PSBcInN0cmluZ1wiKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZyYW1lV29ya0Vycm9yLmNoZWNrRXJyb3JUeXBlKG1lc3NhZ2UsIG9iaik7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAobWVzc2FnZSA9PT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tPYmplY3RUeXBlKG9iaik7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tPYmplY3RUeXBlKG9iajogYW55KSB7XHJcblxyXG4gICAgICAgIGlmIChvYmogJiYgb2JqICE9IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIxXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGDoqbLorormlbjngrpudWxsYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdfQ==