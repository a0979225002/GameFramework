
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/ASlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd101ey/nmJNsaekEN0WCMDJ', 'ASlot');
// script/Framework/Slot/ASlot.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SpeedStateChangeNotification_1 = require("../Process/GameNotification/SpeedStateChangeNotification");
var SpeedStateChangeObserver_1 = require("../Process/GameObserver/SpeedStateChangeObserver");
var SlotGameManager_1 = require("../Process/SlotGameManager");
var StopNowStateNotification_1 = require("./SlotNotifivation/StopNowStateNotification");
var StopNowStateObserver_1 = require("./SlotObserver/StopNowStateObserver");
var ASlot = /** @class */ (function () {
    function ASlot(styleData) {
        this.isSpeedUp = SlotGameManager_1.default.instance.isSpeedUp;
        this.styleData = styleData;
        this.speed = 1;
        StopNowStateNotification_1.default
            .instance.subscribe(this.getStopNowStateObserver(), true);
        SpeedStateChangeNotification_1.default
            .instance.subscribe(this.getSpeedStateChangeObserver(), true);
    }
    /**
     * 即停監聽事件
     * @returns {StopNowStateObserver}
     * @private
     */
    ASlot.prototype.getStopNowStateObserver = function () {
        var _this = this;
        if (!this.isSlotImmediateStop) {
            this.stopNowStateObserver = new StopNowStateObserver_1.default(function () {
                _this.isSlotImmediateStop = true;
            }, this);
        }
        return this.stopNowStateObserver;
    };
    /**
     * 加速按鈕監聽事件
     * @private
     */
    ASlot.prototype.getSpeedStateChangeObserver = function () {
        var _this = this;
        if (!this.speedStateChangeObserver) {
            this.speedStateChangeObserver = new SpeedStateChangeObserver_1.default(function (isSpeedUp) {
                isSpeedUp ? _this.speed = _this.styleData.speedUpMultiple : _this.speed = 1;
            }, this);
        }
        return this.speedStateChangeObserver;
    };
    return ASlot;
}());
exports.default = ASlot;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXEFTbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUdBQW9HO0FBQ3BHLDZGQUF3RjtBQUN4Riw4REFBd0Q7QUFDeEQsd0ZBQW1GO0FBQ25GLDRFQUF1RTtBQUd2RTtJQTRCSSxlQUFzQixTQUFvQjtRQUV0QyxJQUFJLENBQUMsU0FBUyxHQUFHLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVmLGtDQUF3QjthQUNuQixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzlELHNDQUE0QjthQUN2QixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRXRFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssdUNBQXVCLEdBQS9CO1FBQUEsaUJBT0M7UUFORyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLDhCQUFvQixDQUFDO2dCQUNqRCxLQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1lBQ3BDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDJDQUEyQixHQUFuQztRQUFBLGlCQU9DO1FBTkcsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUNoQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxrQ0FBd0IsQ0FBQyxVQUFDLFNBQVM7Z0JBQ25FLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDN0UsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN6QyxDQUFDO0lBT0wsWUFBQztBQUFELENBekVBLEFBeUVDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BlZWRTdGF0ZUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vUHJvY2Vzcy9HYW1lTm90aWZpY2F0aW9uL1NwZWVkU3RhdGVDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vUHJvY2Vzcy9HYW1lT2JzZXJ2ZXIvU3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyXCI7XHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSAnLi4vUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXInXHJcbmltcG9ydCBTdG9wTm93U3RhdGVOb3RpZmljYXRpb24gZnJvbSBcIi4vU2xvdE5vdGlmaXZhdGlvbi9TdG9wTm93U3RhdGVOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFN0b3BOb3dTdGF0ZU9ic2VydmVyIGZyb20gXCIuL1Nsb3RPYnNlcnZlci9TdG9wTm93U3RhdGVPYnNlcnZlclwiO1xyXG5pbXBvcnQge1N0eWxlRGF0YX0gZnJvbSAnLi9TbG90U3R5bGVNYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQVNsb3QgaW1wbGVtZW50cyBJU2xvdCB7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0eWxlRGF0YTogU3R5bGVEYXRhO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L2/5ZCm6ZyA6KaB5Y2z5YGcXHJcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGlzU2xvdEltbWVkaWF0ZVN0b3A6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3nmoTliqDpgJ/ni4DmhYtcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgaXNTcGVlZFVwOiBib29sZWFuO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf6YCf546HIDog54Sh5Yqg6YCf54uA5oWLID0gMVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHNwZWVkOiBudW1iZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIHN0b3BOb3dTdGF0ZU9ic2VydmVyOiBTdG9wTm93U3RhdGVPYnNlcnZlcjtcclxuICAgIHByb3RlY3RlZCBzcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXI6IFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3Ioc3R5bGVEYXRhOiBTdHlsZURhdGEpIHtcclxuXHJcbiAgICAgICAgdGhpcy5pc1NwZWVkVXAgPSBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuaXNTcGVlZFVwO1xyXG4gICAgICAgIHRoaXMuc3R5bGVEYXRhID0gc3R5bGVEYXRhXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcblxyXG4gICAgICAgIFN0b3BOb3dTdGF0ZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0U3RvcE5vd1N0YXRlT2JzZXJ2ZXIoKSwgdHJ1ZSk7XHJcbiAgICAgICAgU3BlZWRTdGF0ZUNoYW5nZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuZ2V0U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyKCksIHRydWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWNs+WBnOebo+iBveS6i+S7tlxyXG4gICAgICogQHJldHVybnMge1N0b3BOb3dTdGF0ZU9ic2VydmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRTdG9wTm93U3RhdGVPYnNlcnZlcigpOiBTdG9wTm93U3RhdGVPYnNlcnZlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3ApIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wTm93U3RhdGVPYnNlcnZlciA9IG5ldyBTdG9wTm93U3RhdGVPYnNlcnZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3AgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RvcE5vd1N0YXRlT2JzZXJ2ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDpgJ/mjInpiJXnm6Pogb3kuovku7ZcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0U3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyKCk6IFNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkU3RhdGVDaGFuZ2VPYnNlcnZlciA9IG5ldyBTcGVlZFN0YXRlQ2hhbmdlT2JzZXJ2ZXIoKGlzU3BlZWRVcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNTcGVlZFVwID8gdGhpcy5zcGVlZCA9IHRoaXMuc3R5bGVEYXRhLnNwZWVkVXBNdWx0aXBsZSA6IHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlZWRTdGF0ZUNoYW5nZU9ic2VydmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBydW5TbG90QW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD47XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHNpbmVJblNsb3QoKTogUHJvbWlzZTx2b2lkPjtcclxuXHJcblxyXG59Il19