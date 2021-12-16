"use strict";
cc._RF.push(module, '0b223wFuPRHxoCFNFidKGPn', 'HasLineFreeResult');
// script/Framework/WebResponse/SeverDataModel/FreeResult/HasLineFreeResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 有線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
var HasLineFreeResult = /** @class */ (function () {
    function HasLineFreeResult() {
        this._State = 0;
        this._Grid = new Array();
        this._ChangeState = 0;
        this._Change = new Array();
        this._LineWin = new Array();
        this._LineGrid = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._Count = 0;
        this._FreeSpinWin = 0;
        this._LookAt = new Array();
        this._LevelWin = 0;
        this._FreeToFree = 0;
        this._BaseLevelWin = 0;
        this._FreeLevelWin = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(HasLineFreeResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "ChangeState", {
        get: function () {
            return this._ChangeState;
        },
        set: function (value) {
            this._ChangeState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Change", {
        get: function () {
            return this._Change;
        },
        set: function (value) {
            this._Change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Count", {
        get: function () {
            return this._Count;
        },
        set: function (value) {
            this._Count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeSpinWin", {
        get: function () {
            return this._FreeSpinWin;
        },
        set: function (value) {
            this._FreeSpinWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LevelWin", {
        get: function () {
            return this._LevelWin;
        },
        set: function (value) {
            this._LevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeToFree", {
        get: function () {
            return this._FreeToFree;
        },
        set: function (value) {
            this._FreeToFree = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeLevelWin", {
        get: function () {
            return this._FreeLevelWin;
        },
        set: function (value) {
            this._FreeLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return HasLineFreeResult;
}());
exports.default = HasLineFreeResult;

cc._RF.pop();