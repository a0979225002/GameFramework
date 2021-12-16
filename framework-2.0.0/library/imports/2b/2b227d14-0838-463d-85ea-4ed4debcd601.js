"use strict";
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