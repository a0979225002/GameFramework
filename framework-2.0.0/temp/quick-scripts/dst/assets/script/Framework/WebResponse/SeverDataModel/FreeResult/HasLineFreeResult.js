
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/SeverDataModel/FreeResult/HasLineFreeResult.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b223wFuPRHxoCFNFidKGPn', 'HasLineFreeResult');
// script/Framework/WebResponse/SeverDataModel/FreeResult/HasLineFreeResult.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 有線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
var HasLineFreeResult = /** @class */ (function () {
    function HasLineFreeResult() {
        this._State = 0;
        this._Grid = new Array();
        this._ChangeState = 0;
        this._Change = new Array();
        this._LineWin = new Array();
        this._LineGrid = new Array();
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
    Object.defineProperty(HasLineFreeResult.prototype, "State", {
        get: function () {
            return this._State;
        },
        set: function (value) {
            this._State = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Grid", {
        get: function () {
            return this._Grid;
        },
        set: function (value) {
            this._Grid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "ChangeState", {
        get: function () {
            return this._ChangeState;
        },
        set: function (value) {
            this._ChangeState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Change", {
        get: function () {
            return this._Change;
        },
        set: function (value) {
            this._Change = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LineWin", {
        get: function () {
            return this._LineWin;
        },
        set: function (value) {
            this._LineWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LineGrid", {
        get: function () {
            return this._LineGrid;
        },
        set: function (value) {
            this._LineGrid = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "TotalWinPoint", {
        get: function () {
            return this._TotalWinPoint;
        },
        set: function (value) {
            this._TotalWinPoint = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "UserPointAfter", {
        get: function () {
            return this._UserPointAfter;
        },
        set: function (value) {
            this._UserPointAfter = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "GameState", {
        get: function () {
            return this._GameState;
        },
        set: function (value) {
            this._GameState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "Count", {
        get: function () {
            return this._Count;
        },
        set: function (value) {
            this._Count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeSpinWin", {
        get: function () {
            return this._FreeSpinWin;
        },
        set: function (value) {
            this._FreeSpinWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LookAt", {
        get: function () {
            return this._LookAt;
        },
        set: function (value) {
            this._LookAt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "LevelWin", {
        get: function () {
            return this._LevelWin;
        },
        set: function (value) {
            this._LevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeToFree", {
        get: function () {
            return this._FreeToFree;
        },
        set: function (value) {
            this._FreeToFree = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "BaseLevelWin", {
        get: function () {
            return this._BaseLevelWin;
        },
        set: function (value) {
            this._BaseLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HasLineFreeResult.prototype, "FreeLevelWin", {
        get: function () {
            return this._FreeLevelWin;
        },
        set: function (value) {
            this._FreeLevelWin = value;
        },
        enumerable: false,
        configurable: true
    });
    return HasLineFreeResult;
}());
exports.default = HasLineFreeResult;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxTZXZlckRhdGFNb2RlbFxcRnJlZVJlc3VsdFxcSGFzTGluZUZyZWVSZXN1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBb0dJO1FBRUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksS0FBSyxFQUFVLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLEtBQUssRUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG1DQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBb0I7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwwQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkscUNBQU07YUFBVjtZQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBVyxLQUFvQjtZQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHNDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzthQUVELFVBQVksS0FBb0I7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx1Q0FBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQW9CO1lBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNENBQWE7YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDL0IsQ0FBQzthQUVELFVBQWtCLEtBQWE7WUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw2Q0FBYzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFBbUIsS0FBYTtZQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUNqQyxDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzthQUVELFVBQWMsS0FBYTtZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9DQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzthQUVELFVBQVUsS0FBYTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQzthQUVELFVBQWdCLEtBQWE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQ0FBTTthQUFWO1lBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFXLEtBQW9CO1lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksdUNBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUpBO0lBTUQsc0JBQUkseUNBQVU7YUFBZDtZQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBZSxLQUFhO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksMkNBQVk7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQWlCLEtBQWE7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSwyQ0FBWTthQUFoQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBaUIsS0FBYTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDOzs7T0FKQTtJQUtMLHdCQUFDO0FBQUQsQ0F4UEEsQUF3UEMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDmnInnt5rlhY3osrvni4DmhYvlsIHljIVcclxuICogQERhdGUgMjAyMS0wNi0wMyDkuIvljYggMTI6MDRcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIYXNMaW5lRnJlZVJlc3VsdCBpbXBsZW1lbnRzIElIYXNMaW5lRnJlZVJlc3VsdE1vZHVsZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAwOiDmirzms6jmiJDlip8gMTog6Z2e5YWN6LK75pmC6ZaT5oq85rOoXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfU3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMTXmoLznmoTos4fmlplcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR3JpZDogQXJyYXk8bnVtYmVyPjtcclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5pyJ6ay854mMIDA65rKS5pyJIDE65pyJXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQ2hhbmdlU3RhdGU6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogMTXmoLznmoTos4fmlpkg5o+b5ZyWIDA65LiN5o+bIDE65o+bXHJcbiAgICAgKiBAdHlwZSB7QXJyYXk8bnVtYmVyPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0NoYW5nZTogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+ainee3mui0j+WIhlxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0xpbmVXaW46IEFycmF5PG51bWJlcj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmr4/mop3nt5rotI/lub7moLxcclxuICAgICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9MaW5lR3JpZDogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe4vei0j+W+l+mHkemhjSAoMDrovLjkuoYg5aSn5pa8MDrotI/kuoYgKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX1RvdGFsV2luUG9pbnQ6IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog546p5a6254++5pyJ6YeR6aGNKOi0j+WIhuW+jClcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Vc2VyUG9pbnRBZnRlcjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXkuIvkvobpgYrmiLLni4DmhYsoMDrkuIDoiKwgMTrlhY3osrvpgYrmiLIgMjrlsI/pgYrmiLIpXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfR2FtZVN0YXRlOiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIOWJqemkmOWFjeiyu+mBiuaIsuasoeaVuCAoMDrmspLmnIkgMX45OeasoSlcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Db3VudDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvpgYrmiLLntK/oqIjotI/liIZcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9GcmVlU3BpbldpbjogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDnnofniYwwOuS4jeeUqCAxOueeh+eJjOaViOaenFxyXG4gICAgICogQHR5cGUge0FycmF5PG51bWJlcj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIF9Mb29rQXQ6IEFycmF5PG51bWJlcj47XHJcbiAgICAvKipcclxuICAgICAqIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjiAgMTA65YWN6LK7LeeEoSAxMTrlhY3osrst5aSn542OIDEyOuWFjeiyuy3lt6jnjY4gMTM65YWN6LK7Lei2hee0muW3qOeNjiAyMDrlsI/pgYrmiLIt54ShIDIxOuWwj+mBiuaIsi3lpKfnjY4gMjI65bCP6YGK5oiyLeW3qOeNjiAyMzrlsI/pgYrmiLIt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfTGV2ZWxXaW46IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICog5YaN5Lit5YWN6LK76YGK5oiy5qyh5pW4IDA654ShIDF+OTk65qyhXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfRnJlZVRvRnJlZTogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlkITlsYDkuLvpgYrmiLIg5Zm06Yyi5pWI5p6cIDA654ShIDE65LiA6IisLeWkp+eNjiAyOuS4gOiIrC3lt6jnjY4gMzrkuIDoiKwt6LaF57Sa5beo542OXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBfQmFzZUxldmVsV2luOiBudW1iZXJcclxuICAgIC8qKlxyXG4gICAgICog5YWN6LK76YGK5oiy57WQ5p6cIOWZtOmMouaViOaenCAwOueEoSAxOuS4gOiIrC3lpKfnjY4gMjrkuIDoiKwt5beo542OIDM65LiA6IisLei2hee0muW3qOeNjlxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX0ZyZWVMZXZlbFdpbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fQ2hhbmdlU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZSA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fTGluZVdpbiA9IG5ldyBBcnJheTxudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5fTGluZUdyaWQgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIHRoaXMuX1RvdGFsV2luUG9pbnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEFmdGVyID0gMDtcclxuICAgICAgICB0aGlzLl9HYW1lU3RhdGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLl9GcmVlU3BpbldpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gbmV3IEFycmF5PG51bWJlcj4oKTtcclxuICAgICAgICB0aGlzLl9MZXZlbFdpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5fRnJlZVRvRnJlZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gMDtcclxuICAgICAgICB0aGlzLl9GcmVlTGV2ZWxXaW4gPSAwO1xyXG4gICAgICAgIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgU3RhdGUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IFN0YXRlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9TdGF0ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBHcmlkKCk6IEFycmF5PG51bWJlcj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBHcmlkKHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fR3JpZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBDaGFuZ2VTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9DaGFuZ2VTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgQ2hhbmdlU3RhdGUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX0NoYW5nZVN0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENoYW5nZSgpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fQ2hhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDaGFuZ2UodmFsdWU6IEFycmF5PG51bWJlcj4pIHtcclxuICAgICAgICB0aGlzLl9DaGFuZ2UgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZVdpbigpOiBBcnJheTxudW1iZXI+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fTGluZVdpbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTGluZVdpbih2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVXaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgTGluZUdyaWQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xpbmVHcmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMaW5lR3JpZCh2YWx1ZTogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIHRoaXMuX0xpbmVHcmlkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IFRvdGFsV2luUG9pbnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fVG90YWxXaW5Qb2ludDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVG90YWxXaW5Qb2ludCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fVG90YWxXaW5Qb2ludCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBVc2VyUG9pbnRBZnRlcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9Vc2VyUG9pbnRBZnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgVXNlclBvaW50QWZ0ZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX1VzZXJQb2ludEFmdGVyID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEdhbWVTdGF0ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9HYW1lU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEdhbWVTdGF0ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fR2FtZVN0YXRlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IENvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0NvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQ291bnQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRnJlZVNwaW5XaW4oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fRnJlZVNwaW5XaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEZyZWVTcGluV2luKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9GcmVlU3BpbldpbiA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBMb29rQXQoKTogQXJyYXk8bnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xvb2tBdDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgTG9va0F0KHZhbHVlOiBBcnJheTxudW1iZXI+KSB7XHJcbiAgICAgICAgdGhpcy5fTG9va0F0ID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IExldmVsV2luKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX0xldmVsV2luO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fTGV2ZWxXaW4gPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgRnJlZVRvRnJlZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlVG9GcmVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBGcmVlVG9GcmVlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9GcmVlVG9GcmVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEJhc2VMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9CYXNlTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEJhc2VMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fQmFzZUxldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IEZyZWVMZXZlbFdpbigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9GcmVlTGV2ZWxXaW47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IEZyZWVMZXZlbFdpbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fRnJlZUxldmVsV2luID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=