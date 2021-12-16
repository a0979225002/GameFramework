
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/FreeResult/NoLineFreeResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcRnJlZVJlc3VsdFxcTm9MaW5lRnJlZVJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUE2Rkk7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNwQyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBSSxtQ0FBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFB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LE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtMLHVCQUFDO0FBQUQsQ0F4T0EsQUF3T0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDnhKHnt5rlhY3osrvni4DmhYvlsIHljIVcclxuICogQERhdGUgMjAyMS0wNi0wMyDkuIvljYggMTI6MDRcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb0xpbmVGcmVlUmVzdWx0IGltcGxlbWVudHMgSU5vTGluZUZyZWVSZXN1bHRNb2RlbCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAwOiDmirzms6jmiJDlip8gMTog6Z2e5YWN6LK75pmC6ZaT5oq85rOoXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfU3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMTXmoLznmoTos4fmlplcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR3JpZDogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pyJ6ay854mMIDA65rKS5pyJIDE65pyJXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmdlU3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMTXmoLznmoTos4fmlpkg5o+b5ZyWIDA65LiN5o+bIDE65o+bXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0NoYW5nZTogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog5ZOq5bm+5qC86LSPIDA65rKS6LSPIDE66LSPXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dyaWRXaW46IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOe4vei0j+W+l+mHkemhjSAoMDrovLjkuoYg5aSn5pa8MDrotI/kuoYgKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1RvdGFsV2luUG9pbnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOi0j+WIhuW+jClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Vc2VyUG9pbnRBZnRlcjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXkuIvkvobpgYrmiLLni4DmhYsoMDrkuIDoiKwgMTrlhY3osrvpgYrmiLIgMjrlsI/pgYrmiLIpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWJqemkmOWFjeiyu+mBiuaIsuasoeaVuCAoMDrmspLmnIkgMX45OeasoSlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Db3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLntK/oqIjotI/liIZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9GcmVlU3BpbldpbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnnofniYwwOuS4jeeUqCAxOueeh+eJjOaViOaenFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Mb29rQXQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjiAgMTA65YWN6LK7LeeEoSAxMTrlhY3osrst5aSn542OIDEyOuWFjeiyuy3lt6jnjY4gMTM65YWN6LK7Lei2hee0muW3qOeNjiAyMDrlsI/pgYrmiLIt54ShIDIxOuWwj+mBiuaIsi3lpKfnjY4gMjI65bCP6YGK5oiyLeW3qOeNjiAyMzrlsI/pgYrmiLIt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGV2ZWxXaW46IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5YaN5Lit5YWN6LK76YGK5oiy5qyh5pW4IDA654ShIDF+OTk65qyhXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfRnJlZVRvRnJlZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlkITlsYDkuLvpgYrmiLIg5Zm06Yyi5pWI5p6cIDA654ShIDE65LiA6IisLeWkp+eNjiAyOuS4gOiIrC3lt6jnjY4gMzrkuIDoiKwt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQmFzZUxldmVsV2luOiBudW1iZXJcclxuICAgIC8qKlxyXG4gICAgICog5YWN6LK76YGK5oiy57WQ5p6cIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0ZyZWVMZXZlbFdpbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmdlU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fR3JpZFdpbiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVG90YWxXaW5Qb2ludCA9IDA7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QWZ0ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuX0dhbWVTdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX0ZyZWVTcGluV2luID0gMDtcclxuICAgICAgICB0aGlzLl9Mb29rQXQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0xldmVsV2luID0gMDtcclxuICAgICAgICB0aGlzLl9GcmVlVG9GcmVlID0gMDtcclxuICAgICAgICB0aGlzLl9CYXNlTGV2ZWxXaW4gPSAwO1xyXG4gICAgICAgIHRoaXMuX0ZyZWVMZXZlbFdpbiA9IDA7XHJcbiAgICAgICAgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9TdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgU3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1N0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEdyaWQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEdyaWQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9HcmlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENoYW5nZVN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NoYW5nZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDaGFuZ2VTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmdlU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgQ2hhbmdlKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IENoYW5nZSh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHcmlkV2luKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHcmlkV2luKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBUb3RhbFdpblBvaW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1RvdGFsV2luUG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFRvdGFsV2luUG9pbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1RvdGFsV2luUG9pbnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVXNlclBvaW50QWZ0ZXIoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVXNlclBvaW50QWZ0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFVzZXJQb2ludEFmdGVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Vc2VyUG9pbnRBZnRlciA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHYW1lU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR2FtZVN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHYW1lU3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0dhbWVTdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Db3VudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0NvdW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZyZWVTcGluV2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0ZyZWVTcGluV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBGcmVlU3Bpbldpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fRnJlZVNwaW5XaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTG9va0F0KCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Mb29rQXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExvb2tBdCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xvb2tBdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9MZXZlbFdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGV2ZWxXaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0xldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZyZWVUb0ZyZWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRnJlZVRvRnJlZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgRnJlZVRvRnJlZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fRnJlZVRvRnJlZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlTGV2ZWxXaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQmFzZUxldmVsV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlTGV2ZWxXaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0Jhc2VMZXZlbFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBGcmVlTGV2ZWxXaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRnJlZUxldmVsV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBGcmVlTGV2ZWxXaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0ZyZWVMZXZlbFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19