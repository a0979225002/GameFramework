"use strict";
cc._RF.push(module, '7c550GVT1tG86YHL9H8bPp0', 'Test01');
// Test/Generics/Test01.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test03 = exports.Test02 = void 0;
var NoLineResult_1 = require("../../script/Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 01:37
 * @Version 1.0
 */
var Test01 = /** @class */ (function () {
    function Test01() {
    }
    Object.defineProperty(Test01.prototype, "module", {
        get: function () {
            return this._module;
        },
        set: function (value) {
            this._module = value;
        },
        enumerable: false,
        configurable: true
    });
    return Test01;
}());
exports.default = Test01;
var Test02 = /** @class */ (function () {
    function Test02() {
    }
    Test02.setResult = function (module) {
        this.module = new module();
    };
    Test02.getResult = function () {
        return this.module;
    };
    return Test02;
}());
exports.Test02 = Test02;
var Test03 = /** @class */ (function () {
    function Test03() {
        Test02.setResult(NoLineResult_1.default);
        Test02.getResult();
    }
    return Test03;
}());
exports.Test03 = Test03;

cc._RF.pop();