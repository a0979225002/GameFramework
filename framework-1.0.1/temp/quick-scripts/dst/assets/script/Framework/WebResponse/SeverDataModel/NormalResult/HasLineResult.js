
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/NormalResult/HasLineResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcTm9ybWFsUmVzdWx0XFxIYXNMaW5lUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQWlGSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELHNCQUFJLGdDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLCtCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBb0I7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxpQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFXLEtBQW9CO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksc0NBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBb0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxtQ0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQW9CO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksd0NBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5Q0FBYzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFBbUIsS0FBYTtZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFhO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQy9CLENBQUM7YUFFRCxVQUFrQixLQUFhO1lBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksaUNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBVyxLQUFvQjtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBDQUFlO2FBQW5CO1lBQ0ksT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDakMsQ0FBQzthQUVELFVBQW9CLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHVDQUFZO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFpQixLQUFhO1lBQzFCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUpBO0lBS0wsb0JBQUM7QUFBRCxDQTFNQSxBQTBNQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOaciee3muS4gOiIrOeLgOaFi+WwgeWMhVxyXG4gKiBARGF0ZSAyMDIxLTA1LTMxIOS4i+WNiCAwMTo0MVxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhhc0xpbmVSZXN1bHQgaW1wbGVtZW50cyBJSGFzTGluZVJlc3VsdE1vZHVsZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAwOiDmirzms6jmiJDlip8gMTrpgYrmiLLni4DmhYvkuI3nrKYgMjrotoXpgY5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9TdGF0ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNeagvOeahOizh+aWmVxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9HcmlkOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmmK/lkKbmnInprLzniYzmk7TlsZUgMDrmspLmnIkgMTrmnIlcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmdlOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNeagvOeahOizh+aWmSDmj5vlnJYgMDrkuI3mj5sgMTrmj5tcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9DaGFuZ2VTdGF0ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/mop3nt5rotI/liIZcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZVdpbjogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog5q+P5qKd57ea6LSP5bm+5qC8XHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmVHcmlkOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDnuL3otI/lvpfph5HpoY0gKDA66Ly45LqGIOWkp+aWvDA66LSP5LqGIClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Ub3RhbFdpblBvaW50OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjSjotI/liIblvowpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfVXNlclBvaW50QWZ0ZXI6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5o6l5LiL5L6G6YGK5oiy54uA5oWLKDA65LiA6IisIDE65YWN6LK76YGK5oiyIDI65bCP6YGK5oiyKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dhbWVTdGF0ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLmrKHmlbggKDA65rKS5pyJIDF+OTnmrKEpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfRnJlZVNwaW5Db3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnnofniYwwOuS4jeeUqCAxOueeh+eJjOaViOaenFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Mb29rQXQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjSjmirzms6jlvowpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfVXNlclBvaW50QmVmb3JlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0Jhc2VMZXZlbFdpbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX1N0YXRlID0gMDtcclxuICAgICAgICB0aGlzLl9HcmlkID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9DaGFuZ2UgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLl9MaW5lV2luID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9MaW5lR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVG90YWxXaW5Qb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QWZ0ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX0dhbWVTdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fRnJlZVNwaW5Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9Vc2VyUG9pbnRCZWZvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0Jhc2VMZXZlbFdpbiA9IDA7XHJcbiAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXQgU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHcmlkKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHcmlkKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDaGFuZ2UoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ2hhbmdlKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmdlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENoYW5nZVN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5nZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDaGFuZ2VTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmdlU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZVdpbigpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGluZVdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGluZVdpbih2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVXaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZUdyaWQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xpbmVHcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lR3JpZCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVHcmlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRvdGFsV2luUG9pbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVG90YWxXaW5Qb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVG90YWxXaW5Qb2ludCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVG90YWxXaW5Qb2ludCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBVc2VyUG9pbnRBZnRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Vc2VyUG9pbnRBZnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVXNlclBvaW50QWZ0ZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEFmdGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEdhbWVTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HYW1lU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEdhbWVTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fR2FtZVN0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZyZWVTcGluQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRnJlZVNwaW5Db3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRnJlZVNwaW5Db3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fRnJlZVNwaW5Db3VudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMb29rQXQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xvb2tBdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTG9va0F0KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVzZXJQb2ludEJlZm9yZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Vc2VyUG9pbnRCZWZvcmU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFVzZXJQb2ludEJlZm9yZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QmVmb3JlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJhc2VMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEJhc2VMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=