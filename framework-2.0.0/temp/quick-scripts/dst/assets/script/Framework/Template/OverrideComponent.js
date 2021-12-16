
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/OverrideComponent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c24a3Y6hQVM151WiIqSVbyD', 'OverrideComponent');
// script/Framework/Template/OverrideComponent.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description (Override)擴展計時器方法,讓該class保存當前被計時器綁定且尚未釋放的方法
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */
var OverrideComponent = /** @class */ (function (_super) {
    __extends(OverrideComponent, _super);
    function OverrideComponent() {
        var _this = _super.call(this) || this;
        _this.scheduleTag = new Array();
        return _this;
    }
    /**
     * 獲取當前使用中的計時器
     * @returns {Array<Function>}
     */
    OverrideComponent.prototype.getScheduleTag = function () {
        return this.scheduleTag;
    };
    /**
     * 獲取當前還尚未釋放的計時器數量
     * @returns {number}
     */
    OverrideComponent.prototype.getScheduleAmount = function () {
        return this.scheduleTag.length;
    };
    /**
     * 可選循環次數計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback : 返回方法
     * @param {number} interval : 間格時間
     * @param {number} repeat : 重複次數
     * @param {number} delay : 延遲時間
     */
    OverrideComponent.prototype.schedule = function (callback, interval, repeat, delay) {
        _super.prototype.schedule.call(this, this.checkScheduleRepeat(callback, repeat), interval, repeat, delay);
        this.scheduleTag.push(callback);
    };
    /**
     * 確認當前計時器是否有使用重複次數
     * @protected
     */
    OverrideComponent.prototype.checkScheduleRepeat = function (callback, repeat) {
        var _this = this;
        if (repeat > 0) {
            callback.prototype = function () {
                repeat--;
                if (repeat < 0)
                    _this.unschedule(callback);
                callback.apply(_this);
            };
        }
        else {
            return callback;
        }
        return callback.prototype;
    };
    /**
     * 單次計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback : 返回方法
     * @param {number} delay : 延遲時間
     */
    OverrideComponent.prototype.scheduleOnce = function (callback, delay) {
        var _this = this;
        callback.prototype = function () {
            _this.unschedule(callback.prototype);
            callback.apply(_this);
        };
        this.schedule(callback.prototype, 0, 0, delay);
    };
    /**
     * 清除單個計時器方法,額外新增刪除使用中的計時器紀錄,與原版cocos使用上並無差別
     * @param {Function} callback
     */
    OverrideComponent.prototype.unschedule = function (callback) {
        _super.prototype.unschedule.call(this, this.checkScheduleTag(callback));
        var index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            this.scheduleTag.splice(index, 1);
        }
    };
    /**
     * 判斷當前方法是否正在等待計時器callback中
     * @param {Function} callback :以綁定計時器的方法
     * @returns {number} : 返回當前this.getScheduleTag[]執行中的index位置,如果該陣列內無該方法,返回-1
     * @protected
     */
    OverrideComponent.prototype.checkScheduleCallFunIndex = function (callback) {
        var index;
        if (this.getScheduleTag().indexOf(callback) != -1) {
            index = this.scheduleTag.indexOf(callback);
        }
        else if (this.getScheduleTag().indexOf(callback.prototype) != -1) {
            index = this.scheduleTag.indexOf(callback.prototype);
        }
        else {
            return -1;
        }
        return index;
    };
    /**
     * 確認當前該方法以甚麼形式執行的,原型練 or 基礎方法
     * @param {Function} callback
     * @returns {Function} : 返回當前this.getScheduleTag[]內的該方法,如果該陣列內無該方法,返回undefined
     * @protected
     */
    OverrideComponent.prototype.checkScheduleTag = function (callback) {
        var fun = undefined;
        var index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            fun = this.scheduleTag[index];
        }
        return fun;
    };
    /**
     * 清除當前所有使用中的計時器,額外新增清空計時器數量方法,與原版cocos使用上並無差別
     */
    OverrideComponent.prototype.unscheduleAllCallbacks = function () {
        _super.prototype.unscheduleAllCallbacks.call(this);
        this.scheduleTag.length = 0;
    };
    return OverrideComponent;
}(cc.Component));
exports.default = OverrideComponent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxPdmVycmlkZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBQStDLHFDQUFZO0lBT3ZEO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssRUFBWSxDQUFDOztJQUM3QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMENBQWMsR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNkNBQWlCLEdBQWpCO1FBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUNuQyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsb0NBQVEsR0FBUixVQUFTLFFBQWtCLEVBQUUsUUFBaUIsRUFBRSxNQUFlLEVBQUUsS0FBYztRQUMzRSxpQkFBTSxRQUFRLFlBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDTywrQ0FBbUIsR0FBN0IsVUFBOEIsUUFBUSxFQUFFLE1BQU07UUFBOUMsaUJBV0M7UUFWRyxJQUFHLE1BQU0sR0FBQyxDQUFDLEVBQUM7WUFDUixRQUFRLENBQUMsU0FBUyxHQUFHO2dCQUNqQixNQUFNLEVBQUUsQ0FBQztnQkFDVCxJQUFHLE1BQU0sR0FBQyxDQUFDO29CQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3RDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFBO1NBQ0o7YUFBSztZQUNGLE9BQU8sUUFBUSxDQUFDO1NBQ25CO1FBQ0QsT0FBTyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0NBQVksR0FBWixVQUFhLFFBQWtCLEVBQUUsS0FBYztRQUEvQyxpQkFNQztRQUxHLFFBQVEsQ0FBQyxTQUFTLEdBQUc7WUFDakIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDcEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0NBQVUsR0FBVixVQUFXLFFBQWtCO1FBQ3pCLGlCQUFNLFVBQVUsWUFBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBRyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxxREFBeUIsR0FBbkMsVUFBb0MsUUFBaUI7UUFDakQsSUFBSSxLQUFhLENBQUM7UUFDbEIsSUFBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFFLENBQUMsQ0FBQyxFQUFDO1lBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5QzthQUFLLElBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUUsQ0FBQyxDQUFDLEVBQUM7WUFDM0QsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RDthQUFLO1lBQ0YsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUNiO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sNENBQWdCLEdBQTFCLFVBQTJCLFFBQWlCO1FBQ3hDLElBQUksR0FBRyxHQUFZLFNBQVMsQ0FBQztRQUM3QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsSUFBRyxLQUFLLEdBQUMsQ0FBQyxDQUFDLEVBQUM7WUFDUixHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0RBQXNCLEdBQXRCO1FBQ0ksaUJBQU0sc0JBQXNCLFdBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0ExSEEsQUEwSEMsQ0ExSDhDLEVBQUUsQ0FBQyxTQUFTLEdBMEgxRCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiAoT3ZlcnJpZGUp5pO05bGV6KiI5pmC5Zmo5pa55rOVLOiuk+ipsmNsYXNz5L+d5a2Y55W25YmN6KKr6KiI5pmC5Zmo57aB5a6a5LiU5bCa5pyq6YeL5pS+55qE5pa55rOVXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjgg5LiK5Y2IIDEwOjExXHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnJpZGVDb21wb25lbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLyoqXHJcbiAgICAgKiDkv53lrZjnlbbliY3kvb/nlKjkuK3nmoToqIjmmYLlmajmlrnms5Us5aaC5p6c6Kmy6KiI5pmC5Zmo5Z+36KGM5a6MLOacg+iHquWLlea4heepuuipsuaWueazlVxyXG4gICAgICogQHR5cGUge0FycmF5PEZ1bmN0aW9uPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2NoZWR1bGVUYWc6IEFycmF5PEZ1bmN0aW9uPjtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZVRhZyA9IG5ldyBBcnJheTxGdW5jdGlvbj4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPlueVtuWJjeS9v+eUqOS4reeahOioiOaZguWZqFxyXG4gICAgICogQHJldHVybnMge0FycmF5PEZ1bmN0aW9uPn1cclxuICAgICAqL1xyXG4gICAgZ2V0U2NoZWR1bGVUYWcoKTogQXJyYXk8RnVuY3Rpb24+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPlueVtuWJjemChOWwmuacqumHi+aUvueahOioiOaZguWZqOaVuOmHj1xyXG4gICAgICogQHJldHVybnMge251bWJlcn1cclxuICAgICAqL1xyXG4gICAgZ2V0U2NoZWR1bGVBbW91bnQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2hlZHVsZVRhZy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlj6/pgbjlvqrnkrDmrKHmlbjoqIjmmYLlmags6aGN5aSW5paw5aKe5aKe5Yqg5L+d5a2Y5L2/55So5Lit55qE6KiI5pmC5Zmo5pa55rOVLOiIh+WOn+eJiGNvY29z5L2/55So5LiK5Lim54Sh5beu5YilXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayA6IOi/lOWbnuaWueazlVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGludGVydmFsIDog6ZaT5qC85pmC6ZaTXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVwZWF0IDog6YeN6KSH5qyh5pW4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsYXkgOiDlu7bpgbLmmYLplpNcclxuICAgICAqL1xyXG4gICAgc2NoZWR1bGUoY2FsbGJhY2s6IEZ1bmN0aW9uLCBpbnRlcnZhbD86IG51bWJlciwgcmVwZWF0PzogbnVtYmVyLCBkZWxheT86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyLnNjaGVkdWxlKHRoaXMuY2hlY2tTY2hlZHVsZVJlcGVhdChjYWxsYmFjayxyZXBlYXQpLCBpbnRlcnZhbCwgcmVwZWF0LCBkZWxheSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZVRhZy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeiuuiqjeeVtuWJjeioiOaZguWZqOaYr+WQpuacieS9v+eUqOmHjeikh+asoeaVuFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlY2tTY2hlZHVsZVJlcGVhdChjYWxsYmFjaywgcmVwZWF0KTpGdW5jdGlvbntcclxuICAgICAgICBpZihyZXBlYXQ+MCl7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLnByb3RvdHlwZSA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICByZXBlYXQtLTtcclxuICAgICAgICAgICAgICAgIGlmKHJlcGVhdDwwKXRoaXMudW5zY2hlZHVsZShjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2sucHJvdG90eXBlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zau5qyh6KiI5pmC5ZmoLOmhjeWkluaWsOWinuWinuWKoOS/neWtmOS9v+eUqOS4reeahOioiOaZguWZqOaWueazlSzoiIfljp/niYhjb2Nvc+S9v+eUqOS4iuS4pueEoeW3ruWIpVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgOiDov5Tlm57mlrnms5VcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWxheSA6IOW7tumBsuaZgumWk1xyXG4gICAgICovXHJcbiAgICBzY2hlZHVsZU9uY2UoY2FsbGJhY2s6IEZ1bmN0aW9uLCBkZWxheT86IG51bWJlcikge1xyXG4gICAgICAgIGNhbGxiYWNrLnByb3RvdHlwZSA9ICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZShjYWxsYmFjay5wcm90b3R5cGUpO1xyXG4gICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZShjYWxsYmFjay5wcm90b3R5cGUsIDAsIDAsIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOWWruWAi+ioiOaZguWZqOaWueazlSzpoY3lpJbmlrDlop7liKrpmaTkvb/nlKjkuK3nmoToqIjmmYLlmajntIDpjIQs6IiH5Y6f54mIY29jb3Pkvb/nlKjkuIrkuKbnhKHlt67liKVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHVuc2NoZWR1bGUoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIudW5zY2hlZHVsZSh0aGlzLmNoZWNrU2NoZWR1bGVUYWcoY2FsbGJhY2spKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoZWNrU2NoZWR1bGVDYWxsRnVuSW5kZXgoY2FsbGJhY2spO1xyXG4gICAgICAgIGlmKGluZGV4Pi0xKXtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVRhZy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWt+eVtuWJjeaWueazleaYr+WQpuato+WcqOetieW+heioiOaZguWZqGNhbGxiYWNr5LitXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayA65Lul57aB5a6a6KiI5pmC5Zmo55qE5pa55rOVXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSA6IOi/lOWbnueVtuWJjXRoaXMuZ2V0U2NoZWR1bGVUYWdbXeWft+ihjOS4reeahGluZGV45L2N572uLOWmguaenOipsumZo+WIl+WFp+eEoeipsuaWueazlSzov5Tlm54tMVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlY2tTY2hlZHVsZUNhbGxGdW5JbmRleChjYWxsYmFjazpGdW5jdGlvbik6bnVtYmVye1xyXG4gICAgICAgIGxldCBpbmRleCA6bnVtYmVyO1xyXG4gICAgICAgIGlmKHRoaXMuZ2V0U2NoZWR1bGVUYWcoKS5pbmRleE9mKGNhbGxiYWNrKSE9LTEpe1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuc2NoZWR1bGVUYWcuaW5kZXhPZihjYWxsYmFjayk7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5nZXRTY2hlZHVsZVRhZygpLmluZGV4T2YoY2FsbGJhY2sucHJvdG90eXBlKSE9LTEpe1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuc2NoZWR1bGVUYWcuaW5kZXhPZihjYWxsYmFjay5wcm90b3R5cGUpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnorroqo3nlbbliY3oqbLmlrnms5Xku6XnlJrpurzlvaLlvI/ln7fooYznmoQs5Y6f5Z6L57e0IG9yIOWfuuekjuaWueazlVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcclxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gOiDov5Tlm57nlbbliY10aGlzLmdldFNjaGVkdWxlVGFnW13lhafnmoToqbLmlrnms5Us5aaC5p6c6Kmy6Zmj5YiX5YWn54Sh6Kmy5pa55rOVLOi/lOWbnnVuZGVmaW5lZFxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgY2hlY2tTY2hlZHVsZVRhZyhjYWxsYmFjazpGdW5jdGlvbik6RnVuY3Rpb257XHJcbiAgICAgICAgbGV0IGZ1bjpGdW5jdGlvbiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmNoZWNrU2NoZWR1bGVDYWxsRnVuSW5kZXgoY2FsbGJhY2spO1xyXG4gICAgICAgIGlmKGluZGV4Pi0xKXtcclxuICAgICAgICAgICAgZnVuID0gdGhpcy5zY2hlZHVsZVRhZ1tpbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmdW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaTnlbbliY3miYDmnInkvb/nlKjkuK3nmoToqIjmmYLlmags6aGN5aSW5paw5aKe5riF56m66KiI5pmC5Zmo5pW46YeP5pa55rOVLOiIh+WOn+eJiGNvY29z5L2/55So5LiK5Lim54Sh5beu5YilXHJcbiAgICAgKi9cclxuICAgIHVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKSB7XHJcbiAgICAgICAgc3VwZXIudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVUYWcubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSJdfQ==