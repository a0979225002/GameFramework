"use strict";
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