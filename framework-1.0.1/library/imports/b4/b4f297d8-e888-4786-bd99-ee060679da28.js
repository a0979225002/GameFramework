"use strict";
cc._RF.push(module, 'b4f29fY6IhHhr2Z7gYGedoo', 'HasLineTableInfo');
// script/Framework/WebResponse/SeverDataModel/TableInfo/HasLineTableInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 有線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
var HasLineTableInfo = /** @class */ (function () {
    function HasLineTableInfo() {
        this._IsLines = 0;
        this._BetTimes = 0;
        this._Line = "";
        this._PayTable = {};
        this._LineGridPos = {};
        this._LineBet = new Array();
        this._LineTotalBet = new Array();
        this._Grid = new Array();
        this._UserPoint = 0;
        this._LevelWinPoint = new Array();
        Object.preventExtensions(this);
    }
    Object.defineProperty(HasLineTableInfo.prototype, "IsLines", {
        get: function () {
            return this._IsLines;
        },
        set: function (value) {
            this._IsLines = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "BetTimes", {
        get: function () {
            return this._BetTimes;
        },
        set: function (value) {
            this._BetTimes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "Line", {
        get: function () {
            return this._Line;
        },
        set: function (value) {
            this._Line = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "PayTable", {
        get: function () {
            return this._PayTable;
        },
        set: function (value) {
            this._PayTable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "LineGridPos", {
        get: function () {
            return this._LineGridPos;
        },
        set: function (value) {
            this._LineGridPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "LineBet", {
        get: function () {
            return this._LineBet;
        },
        set: function (value) {
            this._LineBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "LineTotalBet", {
        get: function () {
            return this._LineTotalBet;
        },
        set: function (value) {
            this._LineTotalBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "UserPoint", {
        get: function () {
            return this._UserPoint;
        },
        set: function (value) {
            this._UserPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineTableInfo.prototype, "LevelWinPoint", {
        get: function () {
            return this._LevelWinPoint;
        },
        set: function (value) {
            this._LevelWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    return HasLineTableInfo;
}());
exports.default = HasLineTableInfo;

cc._RF.pop();