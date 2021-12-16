"use strict";
cc._RF.push(module, '44849e7N+1M3qrtrh6NfHts', 'Util');
// script/Framework/GlobalMethod/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * 四捨五入到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要四捨五入到哪一位
     */
    Util.myRound = function (float, number) {
        return Math.round(Math.round(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 無條件捨去到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件捨去到哪一位
     */
    Util.myFloor = function (float, number) {
        return Math.floor(Math.floor(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 無條件進位到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件進位到哪一位
     */
    Util.myCeil = function (float, number) {
        return Math.ceil(Math.ceil(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 檢查該數字為小數有幾位
     * @param {number}float : 浮點數
     */
    Util.decimalsCount = function (float) {
        var decimalsIndex = String(float).indexOf('.') + 1;
        var count = String(float).length - decimalsIndex;
        if (decimalsIndex == 0) {
            return 0;
        }
        else {
            return count;
        }
    };
    return Util;
}());
exports.default = Util;

cc._RF.pop();