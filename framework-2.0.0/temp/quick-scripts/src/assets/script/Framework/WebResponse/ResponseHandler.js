"use strict";
cc._RF.push(module, '37e0fg5aYpEJbYOxFsHPhHi', 'ResponseHandler');
// script/Framework/WebResponse/ResponseHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(module) {
        this.module = new module();
    }
    ResponseHandler.prototype.setResultModel = function (module) {
        this.module = new module();
    };
    ResponseHandler.prototype.getResult = function () {
        return this.module;
    };
    return ResponseHandler;
}());
exports.default = ResponseHandler;

cc._RF.pop();