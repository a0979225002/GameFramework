"use strict";
cc._RF.push(module, '1bfcfZ+GRVJY61tK2ZBlF9M', 'UnknownError');
// script/Framework/Error/ErrorType/UnknownError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnknownError = /** @class */ (function () {
    function UnknownError() {
    }
    UnknownError.prototype.checkErrorType = function (message, obj) {
        throw new Error("\u4F8B\u5916\u932F\u8AA4 : " + message);
    };
    return UnknownError;
}());
exports.default = UnknownError;

cc._RF.pop();