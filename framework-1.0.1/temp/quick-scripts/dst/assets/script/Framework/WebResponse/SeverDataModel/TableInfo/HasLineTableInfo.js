
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/TableInfo/HasLineTableInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcVGFibGVJbmZvXFxIYXNMaW5lVGFibGVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQW9ESTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUMxQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELHNCQUFJLHFDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBYTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFRO2FBQVo7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQUVELFVBQWEsS0FBYTtZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBTzthQUFYO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLEtBQW9CO1lBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMENBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQWlCLEtBQW9CO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBUyxLQUFvQjtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDJDQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFrQixLQUFvQjtZQUNsQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDOzs7T0FKQTtJQUtMLHVCQUFDO0FBQUQsQ0FoSkEsQUFnSkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDmnInnt5rpoZ7pgYrmiLLos4foqIpcclxuICogQERhdGUgMjAyMS0wNi0wMyDkuIvljYggMTI6MDFcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNMaW5lVGFibGVJbmZvIGltcGxlbWVudHMgSUhhc0xpbmVUYWJsZUluZm9Nb2R1bGUge1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbngrrnt5rpgYrmiLIoMDrnhKHnt5ogMTrmnInnt5opXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Jc0xpbmVzOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOaKvOazqCDkuZjku6XnmoTlgI3mlbgo5pyJ57ea54mI5pys54K66Ieq5bex55qE57ea5pW4IOeEoemZkOeJiOacrOeCuuWbuuWumuWAjeaVuClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0JldFRpbWVzOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOW5vue3mumBiuaIslxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZTogc3RyaW5nO1xyXG4gICAgLyoqXHJcbiAgICAgKiDos6DnjofooahcclxuICAgICAqIEB0eXBlIHtvYmplY3R9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1BheVRhYmxlOiBvYmplY3Q7XHJcbiAgICAvKipcclxuICAgICAqIOizoOeOh+ihqFxyXG4gICAgICogQHR5cGUge09iamVjdH1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZUdyaWRQb3M6IE9iamVjdDtcclxuICAgIC8qKlxyXG4gICAgICog5q+P57ea5oq85rOoWzAuMeOAgTAuMuOAgTAuM+OAgTAuNOOAgTAuNeOAgTHjgIEy44CBM+OAgTTjgIE1XVxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmVCZXQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOe4veaKvOazqFsyLjXjgIE144CBNy4144CBMTDjgIExMi4144CBMjXjgIE1MOOAgTc144CBMTAw44CBMTI1XVxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmVUb3RhbEJldDogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm54K657ea6YGK5oiyKDA654Sh57eaIDE65pyJ57eaKVxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dyaWQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfVXNlclBvaW50OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIDA65aSn542OIOe4veaKvOazqOWAjeaVuCAxOuW3qOeNjiDnuL3mirzms6jlgI3mlbggMjrotoXntJrlt6jnjY4g57i95oq85rOo5YCN5pW4XHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGV2ZWxXaW5Qb2ludDogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9Jc0xpbmVzID0gMDtcclxuICAgICAgICB0aGlzLl9CZXRUaW1lcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fTGluZSA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5fUGF5VGFibGUgPSB7fTtcclxuICAgICAgICB0aGlzLl9MaW5lR3JpZFBvcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX0xpbmVCZXQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0xpbmVUb3RhbEJldCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpblBvaW50ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgSXNMaW5lcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Jc0xpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJc0xpbmVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Jc0xpbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJldFRpbWVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0JldFRpbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCZXRUaW1lcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQmV0VGltZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9MaW5lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBheVRhYmxlKCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BheVRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBQYXlUYWJsZSh2YWx1ZTogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fUGF5VGFibGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZUdyaWRQb3MoKTogT2JqZWN0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGluZUdyaWRQb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExpbmVHcmlkUG9zKHZhbHVlOiBPYmplY3QpIHtcclxuICAgICAgICB0aGlzLl9MaW5lR3JpZFBvcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMaW5lQmV0KCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lQmV0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lQmV0KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTGluZUJldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMaW5lVG90YWxCZXQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xpbmVUb3RhbEJldDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGluZVRvdGFsQmV0KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTGluZVRvdGFsQmV0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEdyaWQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEdyaWQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9HcmlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVzZXJQb2ludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Vc2VyUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFVzZXJQb2ludCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExldmVsV2luUG9pbnQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xldmVsV2luUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExldmVsV2luUG9pbnQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpblBvaW50ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=