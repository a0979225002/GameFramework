"use strict";
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