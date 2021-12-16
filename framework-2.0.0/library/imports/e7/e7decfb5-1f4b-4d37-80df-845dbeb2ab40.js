"use strict";
cc._RF.push(module, 'e7dec+1H0tNN4DfhF2+sqtA', 'NoLineFreeResult');
// script/Framework/WebResponse/SeverDataModel/FreeResult/NoLineFreeResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 無線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
var NoLineFreeResult = /** @class */ (function () {
    function NoLineFreeResult() {
        this._State = 0;
        this._Grid = new Array();
        this._ChangeState = 0;
        this._Change = new Array();
        this._GridWin = new Array();
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
    Object.defineProperty(NoLineFreeResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "ChangeState", {
        get: function () {
            return this._ChangeState;
        },
        set: function (value) {
            this._ChangeState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "Change", {
        get: function () {
            return this._Change;
        },
        set: function (value) {
            this._Change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "GridWin", {
        get: function () {
            return this._GridWin;
        },
        set: function (value) {
            this._GridWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "Count", {
        get: function () {
            return this._Count;
        },
        set: function (value) {
            this._Count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "FreeSpinWin", {
        get: function () {
            return this._FreeSpinWin;
        },
        set: function (value) {
            this._FreeSpinWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "LevelWin", {
        get: function () {
            return this._LevelWin;
        },
        set: function (value) {
            this._LevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "FreeToFree", {
        get: function () {
            return this._FreeToFree;
        },
        set: function (value) {
            this._FreeToFree = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineFreeResult.prototype, "FreeLevelWin", {
        get: function () {
            return this._FreeLevelWin;
        },
        set: function (value) {
            this._FreeLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return NoLineFreeResult;
}());
exports.default = NoLineFreeResult;

cc._RF.pop();