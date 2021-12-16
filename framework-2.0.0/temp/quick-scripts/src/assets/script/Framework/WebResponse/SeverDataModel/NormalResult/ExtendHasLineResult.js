"use strict";
cc._RF.push(module, 'ef3a948q/JE0om9fbpPM2py', 'ExtendHasLineResult');
// script/Framework/WebResponse/SeverDataModel/NormalResult/ExtendHasLineResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線一般狀態封包
 * @Date 2021-06-03 下午 04:50
 * @Version 1.0
 */
var ExtendHasLineResult = /** @class */ (function () {
    function ExtendHasLineResult() {
        this._State = 0;
        this._Grid = new Array();
        this._SecretState = 0;
        this._SecretChange = new Array();
        this._SecretSymbol = 0;
        this._LineWin = new Array();
        this._LineGrid = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array();
        this._UserPointBefore = 0;
        this._BaseLevelWin = 0;
        this._BonusEventCount = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(ExtendHasLineResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretState", {
        get: function () {
            return this._SecretState;
        },
        set: function (value) {
            this._SecretState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretChange", {
        get: function () {
            return this._SecretChange;
        },
        set: function (value) {
            this._SecretChange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretSymbol", {
        get: function () {
            return this._SecretSymbol;
        },
        set: function (value) {
            this._SecretSymbol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "FreeSpinCount", {
        get: function () {
            return this._FreeSpinCount;
        },
        set: function (value) {
            this._FreeSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "UserPointBefore", {
        get: function () {
            return this._UserPointBefore;
        },
        set: function (value) {
            this._UserPointBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "BonusEventCount", {
        get: function () {
            return this._BonusEventCount;
        },
        set: function (value) {
            this._BonusEventCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return ExtendHasLineResult;
}());
exports.default = ExtendHasLineResult;

cc._RF.pop();