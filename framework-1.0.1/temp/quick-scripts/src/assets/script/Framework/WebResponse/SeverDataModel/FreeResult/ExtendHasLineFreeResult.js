"use strict";
cc._RF.push(module, 'd4ceaVKk6JM/aVH8VAkNM8Z', 'ExtendHasLineFreeResult');
// script/Framework/WebResponse/SeverDataModel/FreeResult/ExtendHasLineFreeResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 黏性有線免費狀態封包
 * @Date 2021-06-03 下午 04:51
 * @Version 1.0
 */
var ExtendHasLineFreeResult = /** @class */ (function () {
    function ExtendHasLineFreeResult() {
        this._State = 0;
        this._Grid = new Array();
        this._StickySymbol = 0;
        this._StickyChange = new Array();
        this._LineWin = new Array();
        this._LineGrid = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._Count = 0;
        this._FreeSpinWin = 0;
        this._LookAt = new Array();
        this._FreeToFree = 0;
        this._BaseLevelWin = 0;
        this._FreeLevelWin = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "StickySymbol", {
        get: function () {
            return this._StickySymbol;
        },
        set: function (value) {
            this._StickySymbol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "StickyChange", {
        get: function () {
            return this._StickyChange;
        },
        set: function (value) {
            this._StickyChange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "Count", {
        get: function () {
            return this._Count;
        },
        set: function (value) {
            this._Count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "FreeSpinWin", {
        get: function () {
            return this._FreeSpinWin;
        },
        set: function (value) {
            this._FreeSpinWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "FreeToFree", {
        get: function () {
            return this._FreeToFree;
        },
        set: function (value) {
            this._FreeToFree = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineFreeResult.prototype, "FreeLevelWin", {
        get: function () {
            return this._FreeLevelWin;
        },
        set: function (value) {
            this._FreeLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return ExtendHasLineFreeResult;
}());
exports.default = ExtendHasLineFreeResult;

cc._RF.pop();