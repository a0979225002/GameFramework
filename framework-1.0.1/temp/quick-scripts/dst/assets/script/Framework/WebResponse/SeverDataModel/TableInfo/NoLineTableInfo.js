
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/TableInfo/NoLineTableInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcVGFibGVJbmZvXFxOb0xpbmVUYWJsZUluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBeURJO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsc0JBQUksb0NBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksaUNBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBUyxLQUFhO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0NBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFvQjtZQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixLQUFvQjtZQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGlDQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBb0I7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxzQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQ0FBYTthQUFqQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQixDQUFDO2FBRUQsVUFBa0IsS0FBb0I7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxzQ0FBUzthQUFiO1lBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7YUFFRCxVQUFjLEtBQWE7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtMLHNCQUFDO0FBQUQsQ0FoS0EsQUFnS0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDnhKHnt5rpoZ7pgYrmiLLos4foqIpcclxuICogQERhdGUgMjAyMS0wNi0wMyDkuIvljYggMTI6MDFcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0xpbmVUYWJsZUluZm8gaW1wbGVtZW50cyBJTm9MaW5lVGFibGVJbmZvTW9kdWxlIHtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm54K657ea6YGK5oiyKDA654Sh57eaIDE65pyJ57eaKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfSXNMaW5lczogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmirzms6gg5LmY5Lul55qE5YCN5pW4KOaciee3mueJiOacrOeCuuiHquW3seeahOe3muaVuCDnhKHpmZDniYjmnKzngrrlm7rlrprlgI3mlbgpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9CZXRUaW1lczogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlub7nt5rpgYrmiLJcclxuICAgICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmU6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICog6LOg546H6KGoXHJcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9QYXlUYWJsZTogb2JqZWN0O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/nt5rmirzms6hbMC4x44CBMC4y44CBMC4z44CBMC4044CBMC4144CBMeOAgTLjgIEz44CBNOOAgTVdXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZUJldDogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog57i95oq85rOoWzIuNeOAgTXjgIE3LjXjgIExMOOAgTEyLjXjgIEyNeOAgTUw44CBNzXjgIExMDDjgIExMjVdXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZVRvdGFsQmV0OiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNeagvOeahOizh+aWmSDpoa/npLrnlKhcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9HcmlkOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDnjqnlrrbnj77mnInph5HpoY1cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1VzZXJQb2ludDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAwOuWkp+eNjiDnuL3mirzms6jlgI3mlbggMTrlt6jnjY4g57i95oq85rOo5YCN5pW4IDI66LaF57Sa5beo542OIOe4veaKvOazqOWAjeaVuFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xldmVsV2luUG9pbnQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOa0u+WLleaooeW8jyAwIOaykuaciSAxMSDovYnnm6RcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0V2ZW50TW9kZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmtLvli5XovYnmlbjpnIDmsYJcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0V2ZW50UmVxdWlyZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX0lzTGluZXMgPSAwO1xyXG4gICAgICAgIHRoaXMuX0JldFRpbWVzID0gMDtcclxuICAgICAgICB0aGlzLl9MaW5lID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9QYXlUYWJsZSA9IHt9O1xyXG4gICAgICAgIHRoaXMuX0xpbmVCZXQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0xpbmVUb3RhbEJldCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50ID0gMDtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpblBvaW50ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9FdmVudE1vZGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0V2ZW50UmVxdWlyZSA9IDA7XHJcbiAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgSXNMaW5lcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Jc0xpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBJc0xpbmVzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Jc0xpbmVzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJldFRpbWVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0JldFRpbWVzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCZXRUaW1lcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQmV0VGltZXMgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9MaW5lID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFBheVRhYmxlKCk6IG9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1BheVRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBQYXlUYWJsZSh2YWx1ZTogb2JqZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fUGF5VGFibGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZUJldCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGluZUJldDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGluZUJldCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVCZXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZVRvdGFsQmV0KCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lVG90YWxCZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExpbmVUb3RhbEJldCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVUb3RhbEJldCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHcmlkKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHcmlkKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBVc2VyUG9pbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVXNlclBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBVc2VyUG9pbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMZXZlbFdpblBvaW50KCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MZXZlbFdpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMZXZlbFdpblBvaW50KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTGV2ZWxXaW5Qb2ludCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFdmVudE1vZGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXZlbnRNb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBFdmVudE1vZGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0V2ZW50TW9kZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBFdmVudFJlcXVpcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRXZlbnRSZXF1aXJlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBFdmVudFJlcXVpcmUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0V2ZW50UmVxdWlyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19