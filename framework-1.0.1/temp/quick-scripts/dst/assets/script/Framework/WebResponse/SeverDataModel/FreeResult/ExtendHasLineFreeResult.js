
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/FreeResult/ExtendHasLineFreeResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcRnJlZVJlc3VsdFxcRXh0ZW5kSGFzTGluZUZyZWVSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBK0ZJO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUVuQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUdELHNCQUFJLDBDQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVB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QkFBSSxpREFBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtMLDhCQUFDO0FBQUQsQ0E1T0EsQUE0T0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpu4/mgKfmnInnt5rlhY3osrvni4DmhYvlsIHljIVcclxuICogQERhdGUgMjAyMS0wNi0wMyDkuIvljYggMDQ6NTFcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRlbmRIYXNMaW5lRnJlZVJlc3VsdCBpbXBsZW1lbnRzIElFeHRlbmRIYXNMaW5lRnJlZVJlc3VsdHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIDA6IOaKvOazqOaIkOWKnyAxOiDpnZ7lhY3osrvmmYLplpPmirzms6hcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9TdGF0ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAxNeagvOeahOizh+aWmVxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9HcmlkOiBBcnJheTxudW1iZXI+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6buP5oCn5ZyW5qiZ57eo6JmfXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9TdGlja3lTeW1ib2w6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOm7j+aAp+WcluaomeS9jee9rlxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1N0aWNreUNoYW5nZTogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+ainee3mui0j+WIhlxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmVXaW46IEFycmF5PG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/mop3nt5rotI/lub7moLxcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9MaW5lR3JpZDogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe4vei0j+W+l+mHkemhjSAoMDrovLjkuoYg5aSn5pa8MDrotI/kuoYgKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1RvdGFsV2luUG9pbnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOi0j+WIhuW+jClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Vc2VyUG9pbnRBZnRlcjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXkuIvkvobpgYrmiLLni4DmhYsoMDrkuIDoiKwgMTrlhY3osrvpgYrmiLIgMjrlsI/pgYrmiLIpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWJqemkmOWFjeiyu+mBiuaIsuasoeaVuCAoMDrmspLmnIkgMX45OeasoSlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Db3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLntK/oqIjotI/liIZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9GcmVlU3BpbldpbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnnofniYwwOuS4jeeUqCAxOueeh+eJjOaViOaenFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Mb29rQXQ6IEFycmF5PG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlho3kuK3lhY3osrvpgYrmiLLmrKHmlbggMDrnhKEgMX45OTrmrKFcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9GcmVlVG9GcmVlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWQhOWxgOS4u+mBiuaIsiDlmbTpjKLmlYjmnpwgMDrnhKEgMTrkuIDoiKwt5aSn542OIDI65LiA6IisLeW3qOeNjiAzOuS4gOiIrC3otoXntJrlt6jnjY5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9CYXNlTGV2ZWxXaW46IG51bWJlclxyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLntZDmnpwg5Zm06Yyi5pWI5p6cIDA654ShIDE65LiA6IisLeWkp+eNjiAyOuS4gOiIrC3lt6jnjY4gMzrkuIDoiKwt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfRnJlZUxldmVsV2luOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX1N0YXRlID0gMDtcclxuICAgICAgICB0aGlzLl9HcmlkID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9TdGlja3lTeW1ib2wgPSAwO1xyXG4gICAgICAgIHRoaXMuX1N0aWNreUNoYW5nZSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fTGluZVdpbiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fTGluZUdyaWQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX1RvdGFsV2luUG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEFmdGVyID0gMDtcclxuICAgICAgICB0aGlzLl9HYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9GcmVlU3BpbldpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5fRnJlZVRvRnJlZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gMDtcclxuICAgICAgICB0aGlzLl9GcmVlTGV2ZWxXaW4gPSAwO1xyXG4gICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0IFN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgR3JpZCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgR3JpZCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0dyaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU3RpY2t5U3ltYm9sKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0aWNreVN5bWJvbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgU3RpY2t5U3ltYm9sKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGlja3lTeW1ib2wgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU3RpY2t5Q2hhbmdlKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGlja3lDaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFN0aWNreUNoYW5nZSh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX1N0aWNreUNoYW5nZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMaW5lV2luKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lV2luKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTGluZVdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMaW5lR3JpZCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGluZUdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExpbmVHcmlkKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTGluZUdyaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVG90YWxXaW5Qb2ludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Ub3RhbFdpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUb3RhbFdpblBvaW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Ub3RhbFdpblBvaW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVzZXJQb2ludEFmdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJQb2ludEFmdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBVc2VyUG9pbnRBZnRlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QWZ0ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgR2FtZVN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dhbWVTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgR2FtZVN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9HYW1lU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Db3VudCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGcmVlU3BpbldpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlU3BpbldpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRnJlZVNwaW5XaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0ZyZWVTcGluV2luID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExvb2tBdCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTG9va0F0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMb29rQXQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9Mb29rQXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRnJlZVRvRnJlZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlVG9GcmVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBGcmVlVG9GcmVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9GcmVlVG9GcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJhc2VMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEJhc2VMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZyZWVMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEZyZWVMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fRnJlZUxldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=