"use strict";
cc._RF.push(module, '2654927J0JHo5iOJof3afTd', 'HasLineResult');
// script/Framework/WebResponse/SeverDataModel/NormalResult/HasLineResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 有線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
var HasLineResult = /** @class */ (function () {
    function HasLineResult() {
        this._State = 0;
        this._Grid = new Array();
        this._Change = new Array();
        this._ChangeState = 0;
        this._LineWin = new Array();
        this._LineGrid = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array();
        this._UserPointBefore = 0;
        this._BaseLevelWin = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(HasLineResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "Change", {
        get: function () {
            return this._Change;
        },
        set: function (value) {
            this._Change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "ChangeState", {
        get: function () {
            return this._ChangeState;
        },
        set: function (value) {
            this._ChangeState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "FreeSpinCount", {
        get: function () {
            return this._FreeSpinCount;
        },
        set: function (value) {
            this._FreeSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "UserPointBefore", {
        get: function () {
            return this._UserPointBefore;
        },
        set: function (value) {
            this._UserPointBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return HasLineResult;
}());
exports.default = HasLineResult;

cc._RF.pop();