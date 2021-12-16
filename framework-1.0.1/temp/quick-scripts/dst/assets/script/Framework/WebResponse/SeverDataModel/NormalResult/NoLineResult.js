
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3528bb3IV1Ks5bkNr3GjbFM', 'NoLineResult');
// script/Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
var NoLineResult = /** @class */ (function () {
    function NoLineResult() {
        this._State = 0;
        this._Grid = new Array();
        this._ChangeState = 0;
        this._Change = new Array();
        this._GridWin = new Array();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array();
        this._UserPointBefore = 0;
        this._LevelWin = 0;
        this._BaseLevelWin = 0;
        this._BonusEventCount = 0;
        Object.preventExtensions(this);
    }
    Object.defineProperty(NoLineResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "ChangeState", {
        get: function () {
            return this._ChangeState;
        },
        set: function (value) {
            this._ChangeState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "Change", {
        get: function () {
            return this._Change;
        },
        set: function (value) {
            this._Change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "GridWin", {
        get: function () {
            return this._GridWin;
        },
        set: function (value) {
            this._GridWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "FreeSpinCount", {
        get: function () {
            return this._FreeSpinCount;
        },
        set: function (value) {
            this._FreeSpinCount = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "UserPointBefore", {
        get: function () {
            return this._UserPointBefore;
        },
        set: function (value) {
            this._UserPointBefore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "LevelWin", {
        get: function () {
            return this._LevelWin;
        },
        set: function (value) {
            this._LevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NoLineResult.prototype, "BonusEventCount", {
        get: function () {
            return this._BonusEventCount;
        },
        set: function (value) {
            this._BonusEventCount = value;
        },
        enumerable: false,
        configurable: true
    });
    return NoLineResult;
}());
exports.default = NoLineResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcTm9ybWFsUmVzdWx0XFxOb0xpbmVSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBdUZJO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUMxQixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLCtCQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixD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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g54Sh57ea5LiA6Iis54uA5oWL5bCB5YyFXHJcbiAqIEBEYXRlIDIwMjEtMDUtMzEg5LiL5Y2IIDAxOjQxXHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9MaW5lUmVzdWx0IGltcGxlbWVudHMgSU5vTGluZVJlc3VsdE1vZGVsIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIDA6IOaKvOazqOaIkOWKnyAxOumBiuaIsueLgOaFi+S4jeespiAyOui2hemBjlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1N0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIDE15qC855qE6LOH5paZXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dyaWQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuaciemsvOeJjOaTtOWxlSAwOuaykuaciSAxOuaciVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0NoYW5nZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIDE15qC855qE6LOH5paZIOaPm+WcliAwOuS4jeaPmyAxOuaPm1xyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9DaGFuZ2U6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOWTquW5vuagvOi0jyAwOuaykui0jyAxOui0j1xyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9HcmlkV2luOiBBcnJheTxudW1iZXI+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDnuL3otI/lvpfph5HpoY0gKDA66Ly45LqGIOWkp+aWvDA66LSP5LqGIClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Ub3RhbFdpblBvaW50OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjSjotI/liIblvowpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfVXNlclBvaW50QWZ0ZXI6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5o6l5LiL5L6G6YGK5oiy54uA5oWLKDA65LiA6IisIDE65YWN6LK76YGK5oiyIDI65bCP6YGK5oiyKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0dhbWVTdGF0ZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLmrKHmlbggKDA65rKS5pyJIDF+OTnmrKEpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfRnJlZVNwaW5Db3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnnofniYwwOuS4jeeUqCAxOueeh+eJjOaViOaenFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Mb29rQXQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOeOqeWutuePvuaciemHkemhjSjmirzms6jlvowpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfVXNlclBvaW50QmVmb3JlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjiAgMTE65YWN6LK7LeWkp+eNjiAxMjrlhY3osrst5beo542OIDEzOuWFjeiyuy3otoXntJrlt6jnjY4gMjE65bCP6YGK5oiyLeWkp+eNjiAyMjrlsI/pgYrmiLIt5beo542OIDIzOuWwj+mBiuaIsi3otoXntJrlt6jnjY5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9MZXZlbFdpbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlmbTpjKLmlYjmnpwgMDrnhKEgMTrkuIDoiKwt5aSn542OIDI65LiA6IisLeW3qOeNjiAzOuS4gOiIrC3otoXntJrlt6jnjY5cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9CYXNlTGV2ZWxXaW46IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5rS75YuV6L2J5pW4XHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQm9udXNFdmVudENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0dyaWQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZVN0YXRlID0gMDtcclxuICAgICAgICB0aGlzLl9DaGFuZ2UgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX0dyaWRXaW4gPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX1RvdGFsV2luUG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEFmdGVyID0gMDtcclxuICAgICAgICB0aGlzLl9HYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0ZyZWVTcGluQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX0xvb2tBdCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QmVmb3JlID0gMDtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gMDtcclxuICAgICAgICB0aGlzLl9Cb251c0V2ZW50Q291bnQgPSAwO1xyXG4gICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHcmlkKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHcmlkKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDaGFuZ2VTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFuZ2VTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ2hhbmdlU3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZVN0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENoYW5nZSgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDaGFuZ2UodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9DaGFuZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgR3JpZFdpbigpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fR3JpZFdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgR3JpZFdpbih2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0dyaWRXaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVG90YWxXaW5Qb2ludCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Ub3RhbFdpblBvaW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBUb3RhbFdpblBvaW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Ub3RhbFdpblBvaW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFVzZXJQb2ludEFmdGVyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJQb2ludEFmdGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBVc2VyUG9pbnRBZnRlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVXNlclBvaW50QWZ0ZXIgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgR2FtZVN0YXRlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0dhbWVTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgR2FtZVN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9HYW1lU3RhdGUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRnJlZVNwaW5Db3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlU3BpbkNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBGcmVlU3BpbkNvdW50KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9GcmVlU3BpbkNvdW50ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExvb2tBdCgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTG9va0F0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMb29rQXQodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9Mb29rQXQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgVXNlclBvaW50QmVmb3JlKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX1VzZXJQb2ludEJlZm9yZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVXNlclBvaW50QmVmb3JlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9Vc2VyUG9pbnRCZWZvcmUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGV2ZWxXaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IExldmVsV2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCYXNlTGV2ZWxXaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQmFzZUxldmVsV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCYXNlTGV2ZWxXaW4odmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0Jhc2VMZXZlbFdpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBCb251c0V2ZW50Q291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQm9udXNFdmVudENvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBCb251c0V2ZW50Q291bnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0JvbnVzRXZlbnRDb3VudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19