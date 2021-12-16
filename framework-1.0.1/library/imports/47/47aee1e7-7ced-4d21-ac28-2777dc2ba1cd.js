"use strict";
cc._RF.push(module, '47aeeHnfO1NIawoJ3fcK6HN', 'NoLineTableInfo');
// script/Framework/WebResponse/SeverDataModel/TableInfo/NoLineTableInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 無線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
var NoLineTableInfo = /** @class */ (function () {
    function NoLineTableInfo() {
        this._IsLines = 0;
        this._BetTimes = 0;
        this._Line = "";
        this._PayTable = {};
        this._LineBet = new Array();
        this._LineTotalBet = new Array();
        this._Grid = new Array();
        this._UserPoint = 0;
        this._LevelWinPoint = new Array();
        this._EventMode = 0;
        this._EventRequire = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(NoLineTableInfo.prototype, "IsLines", {
        get: function () {
            return this._IsLines;
        },
        set: function (value) {
            this._IsLines = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "BetTimes", {
        get: function () {
            return this._BetTimes;
        },
        set: function (value) {
            this._BetTimes = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "Line", {
        get: function () {
            return this._Line;
        },
        set: function (value) {
            this._Line = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "PayTable", {
        get: function () {
            return this._PayTable;
        },
        set: function (value) {
            this._PayTable = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "LineBet", {
        get: function () {
            return this._LineBet;
        },
        set: function (value) {
            this._LineBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "LineTotalBet", {
        get: function () {
            return this._LineTotalBet;
        },
        set: function (value) {
            this._LineTotalBet = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "UserPoint", {
        get: function () {
            return this._UserPoint;
        },
        set: function (value) {
            this._UserPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "LevelWinPoint", {
        get: function () {
            return this._LevelWinPoint;
        },
        set: function (value) {
            this._LevelWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "EventMode", {
        get: function () {
            return this._EventMode;
        },
        set: function (value) {
            this._EventMode = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineTableInfo.prototype, "EventRequire", {
        get: function () {
            return this._EventRequire;
        },
        set: function (value) {
            this._EventRequire = value;
        },
        enumerable: false,
        configurable: true
    });
    return NoLineTableInfo;
}());
exports.default = NoLineTableInfo;

cc._RF.pop();