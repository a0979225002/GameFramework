
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/NormalResult/ExtendHasLineResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef3a948q/JE0om9fbpPM2py', 'ExtendHasLineResult');
// script/Framework/WebResponse/SeverDataModel/NormalResult/ExtendHasLineResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線一般狀態封包
 * @Date 2021-06-03 下午 04:50
 * @Version 1.0
 */
var ExtendHasLineResult = /** @class */ (function () {
    function ExtendHasLineResult() {
        this._State = 0;
        this._Grid = new Array();
        this._SecretState = 0;
        this._SecretChange = new Array();
        this._SecretSymbol = 0;
        this._LineWin = new Array();
        this._LineGrid = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array();
        this._UserPointBefore = 0;
        this._BaseLevelWin = 0;
        this._BonusEventCount = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(ExtendHasLineResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretState", {
        get: function () {
            return this._SecretState;
        },
        set: function (value) {
            this._SecretState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretChange", {
        get: function () {
            return this._SecretChange;
        },
        set: function (value) {
            this._SecretChange = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "SecretSymbol", {
        get: function () {
            return this._SecretSymbol;
        },
        set: function (value) {
            this._SecretSymbol = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "FreeSpinCount", {
        get: function () {
            return this._FreeSpinCount;
        },
        set: function (value) {
            this._FreeSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "UserPointBefore", {
        get: function () {
            return this._UserPointBefore;
        },
        set: function (value) {
            this._UserPointBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExtendHasLineResult.prototype, "BonusEventCount", {
        get: function () {
            return this._BonusEventCount;
        },
        set: function (value) {
            this._BonusEventCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return ExtendHasLineResult;
}());
exports.default = ExtendHasLineResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcTm9ybWFsUmVzdWx0XFxFeHRlbmRIYXNMaW5lUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQXVGSTtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0JBQUksc0NBQUs7YUFBVDtZQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO2FBRUQs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QUpBO0lBTUQsc0JBQUksZ0RBQWU7YUFBbkI7WUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO2FBRUQsVUFBb0IsS0FBYTtZQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUpBO0lBS0wsMEJBQUM7QUFBRCxDQWpPQSxBQWlPQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOaTtOWxlemhnuaciee3muS4gOiIrOeLgOaFi+WwgeWMhVxyXG4gKiBARGF0ZSAyMDIxLTA2LTAzIOS4i+WNiCAwNDo1MFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dGVuZEhhc0xpbmVSZXN1bHQgaW1wbGVtZW50cyBJRXh0ZW5kSGFzTGluZVJlc3VsdHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIDA6IOaKvOazqOaIkOWKnyAxOumBiuaIsueLgOaFi+S4jeespiAyOui2hemBjlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1N0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIDE15qC855qE6LOH5paZXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dyaWQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuacieelnuenmOWvtueusSAwOuaykuaciSAxOuaciVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfU2VjcmV0U3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog56We56eY5a+2566x5L2N572uIDA65rKS5pyJIDE65pyJ56We56eY5a+2566x5L2N572uIDA65rKS5pyJIDE65pyJXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfU2VjcmV0Q2hhbmdlOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDnpZ7np5jlr7bnrrHmoLzlrZDlnJbmoYhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfU2VjcmV0U3ltYm9sOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOavj+ainee3mui0j+WIhlxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9MaW5lV2luOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/mop3nt5rotI/lub7moLxcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGluZUdyaWQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOe4vei0j+W+l+mHkemhjSAoMDrovLjkuoYg5aSn5pa8MDrotI/kuoYgKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1RvdGFsV2luUG9pbnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOi0j+WIhuW+jClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Vc2VyUG9pbnRBZnRlcjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXkuIvkvobpgYrmiLLni4DmhYsoMDrkuIDoiKwgMTrlhY3osrvpgYrmiLIgMjrlsI/pgYrmiLIpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWFjeiyu+mBiuaIsuasoeaVuCAoMDrmspLmnIkgMX45OeasoSlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9GcmVlU3BpbkNvdW50OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOeeh+eJjDA65LiN55SoIDE6556H54mM5pWI5p6cXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xvb2tBdDogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOaKvOazqOW+jClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Vc2VyUG9pbnRCZWZvcmU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5Zm06Yyi5pWI5p6cIDA654ShIDE65LiA6IisLeWkp+eNjiAyOuS4gOiIrC3lt6jnjY4gMzrkuIDoiKwt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQmFzZUxldmVsV2luOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOa0u+WLlei9ieaVuFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Cb251c0V2ZW50Q291bnQ6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fU2VjcmV0U3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX1NlY3JldENoYW5nZSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fU2VjcmV0U3ltYm9sID0gMDtcclxuICAgICAgICB0aGlzLl9MaW5lV2luID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9MaW5lR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVG90YWxXaW5Qb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QWZ0ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX0dhbWVTdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fRnJlZVNwaW5Db3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9Vc2VyUG9pbnRCZWZvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0Jhc2VMZXZlbFdpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fQm9udXNFdmVudENvdW50ID0gMDtcclxuICAgICAgICBPYmplY3QucHJldmVudEV4dGVuc2lvbnModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgR3JpZCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgR3JpZCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0dyaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU2VjcmV0U3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU2VjcmV0U3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFNlY3JldFN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TZWNyZXRTdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTZWNyZXRDaGFuZ2UoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1NlY3JldENoYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgU2VjcmV0Q2hhbmdlKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fU2VjcmV0Q2hhbmdlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFNlY3JldFN5bWJvbCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TZWNyZXRTeW1ib2w7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFNlY3JldFN5bWJvbCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fU2VjcmV0U3ltYm9sID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExpbmVXaW4oKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xpbmVXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExpbmVXaW4odmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9MaW5lV2luID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExpbmVHcmlkKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MaW5lR3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGluZUdyaWQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9MaW5lR3JpZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUb3RhbFdpblBvaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RvdGFsV2luUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRvdGFsV2luUG9pbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1RvdGFsV2luUG9pbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVXNlclBvaW50QWZ0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVXNlclBvaW50QWZ0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFVzZXJQb2ludEFmdGVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Vc2VyUG9pbnRBZnRlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHYW1lU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2FtZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHYW1lU3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0dhbWVTdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGcmVlU3BpbkNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZyZWVTcGluQ291bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEZyZWVTcGluQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0ZyZWVTcGluQ291bnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTG9va0F0KCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Mb29rQXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExvb2tBdCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xvb2tBdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBVc2VyUG9pbnRCZWZvcmUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVXNlclBvaW50QmVmb3JlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBVc2VyUG9pbnRCZWZvcmUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEJlZm9yZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlTGV2ZWxXaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQmFzZUxldmVsV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlTGV2ZWxXaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0Jhc2VMZXZlbFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCb251c0V2ZW50Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQm9udXNFdmVudENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCb251c0V2ZW50Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0JvbnVzRXZlbnRDb3VudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19