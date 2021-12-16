
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Listener/EventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ab64qm/mJLz77wPd5JZMfk', 'EventManager');
// script/Framework/Listener/EventManager.ts

"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var EventManager = /** @class */ (function () {
    function EventManager(configManager) {
        this.configManager = configManager;
        this._eventCount = 0;
        this._eventsCurrentlyBeing = new Map();
        EventManager.serverTarget = new cc.EventTarget();
        EventManager.gameTarget = new cc.EventTarget();
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    EventManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new EventManager(configManager);
        }
    };
    Object.defineProperty(EventManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.ListenerFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "eventCount", {
        get: function () {
            return this._eventCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventManager.prototype, "eventsCurrentlyBeing", {
        get: function () {
            return this._eventsCurrentlyBeing;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加事件
     * @param eventTarget
     * @param {string} eventName
     * @param {any} any : 要回傳的物件
     */
    EventManager.prototype.setEvent = function (eventTarget, eventName) {
        var any = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            any[_i - 2] = arguments[_i];
        }
        any ? eventTarget.emit.apply(eventTarget, __spread([eventName], any)) : eventTarget.emit(eventName);
    };
    /**
     * game監聽回傳接收
     * @param {string} eventName
     * @param {Function} callFun
     * @param isOnce
     */
    EventManager.prototype.gameEventListener = function (eventName, callFun, isOnce) {
        this._eventCount += 1;
        this._eventsCurrentlyBeing.set("gameEvent", eventName);
        if (isOnce) {
            EventManager.gameTarget.once(eventName, callFun);
        }
        else {
            EventManager.gameTarget.on(eventName, callFun);
        }
    };
    /**
     * server監聽回傳接收
     * @param {string} eventName
     * @param {Function} callFun
     * @param isOnce
     */
    EventManager.prototype.serverEventListener = function (eventName, callFun, isOnce) {
        this._eventCount += 1;
        this._eventsCurrentlyBeing.set("severEvent", eventName);
        if (isOnce) {
            EventManager.serverTarget.once(eventName, callFun);
        }
        else {
            EventManager.serverTarget.on(eventName, callFun);
        }
    };
    /**
     * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
     * @param {ServerEventType | GameEventType} eventName
     * @param {cc.EventTarget} eventTarget
     * @param callFun?{Function} : 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
     * @param target?{Object}:調用回調的目標（此對象），如果未指定，則僅刪除沒有目標的回調
     */
    EventManager.prototype.destroyEvent = function (eventName, eventTarget, callFun, target) {
        eventTarget.off(eventName, callFun, target);
    };
    /**
     * 是否該事件持續監聽中
     */
    EventManager.prototype.hasListening = function (eventName, eventTarget) {
        return eventTarget.hasEventListener(eventName);
    };
    return EventManager;
}());
exports.default = EventManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExpc3RlbmVyXFxFdmVudE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLG1FQUF5RDtBQUN6RCxzREFBaUQ7QUFLakQ7SUF1Qkksc0JBQW9CLGFBQTZCO1FBRTdDLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBMkMsQ0FBQztRQUNoRixZQUFZLENBQUMsWUFBWSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFbkQsQ0FBQztJQUVEOzs7T0FHRztJQUNXLHdCQUFXLEdBQXpCLFVBQTBCLGFBQTZCO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBS0Qsc0JBQWtCLHdCQUFRO1FBSDFCOztXQUVHO2FBQ0g7WUFFSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDakIsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNwRSxPQUFPO2FBQ1Y7WUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxvQ0FBVTthQUFyQjtZQUVJLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtRQUUzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLDhDQUFvQjthQUEvQjtZQUVJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFBO1FBRXJDLENBQUM7OztPQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSSwrQkFBUSxHQUFmLFVBQWdCLFdBQTJCLEVBQUUsU0FBMEM7UUFBRSxhQUFXO2FBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztZQUFYLDRCQUFXOztRQUVoRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLE9BQWhCLFdBQVcsWUFBTSxTQUFTLEdBQUssR0FBRyxHQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTVFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLHdDQUFpQixHQUF4QixVQUF5QixTQUF3QixFQUFFLE9BQWlDLEVBQUUsTUFBZTtRQUVqRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUV2RCxJQUFJLE1BQU0sRUFBRTtZQUNSLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNwRDthQUFNO1lBQ0gsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksMENBQW1CLEdBQTFCLFVBQTJCLFNBQTBCLEVBQUUsT0FBaUMsRUFBRSxNQUFlO1FBRXJHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRXhELElBQUksTUFBTSxFQUFFO1lBQ1IsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3REO2FBQU07WUFDSCxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDcEQ7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksbUNBQVksR0FBbkIsVUFBb0IsU0FBMEMsRUFBRSxXQUEyQixFQUFFLE9BQWtCLEVBQUUsTUFBZTtRQUU1SCxXQUFXLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQVksR0FBbkIsVUFBb0IsU0FBMEMsRUFBRSxXQUEyQjtRQUV2RixPQUFPLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXpJQSxBQXlJQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJQ29uZmlnTWFuYWdlcn0gZnJvbSBcIi4uL0NvbmZpZy9JQ29uZmlnL0lDb25maWdNYW5hZ2VyXCI7XHJcbmltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQge0dhbWVFdmVudFR5cGV9IGZyb20gJy4vRW51bS9nYW1lRXZlbnRUeXBlJ1xyXG5pbXBvcnQge1NlcnZlckV2ZW50VHlwZX0gZnJvbSAnLi9FbnVtL1NlcnZlckV2ZW50VHlwZSdcclxuaW1wb3J0IElFdmVudE1hbmFnZXIgZnJvbSAnLi9JRXZlbnRNYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRNYW5hZ2VyIGltcGxlbWVudHMgSUV2ZW50TWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJRXZlbnRNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBjb25maWdNYW5hZ2VyOiBJQ29uZmlnTWFuYWdlcjtcclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu257i95pW46YePXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgX2V2ZW50Q291bnQ6IG51bWJlclxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YGK5oiy5YWn5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2VydmVyVGFyZ2V0OiBjYy5FdmVudFRhcmdldFxyXG4gICAgLyoqXHJcbiAgICAgKiDkvLrmnI3lmajlm57lgrPkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lVGFyZ2V0OiBjYy5FdmVudFRhcmdldFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W25YmN5q2j5Zyo55uj6IG96YKj5Lqb5LqL5Lu2O1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ldmVudHNDdXJyZW50bHlCZWluZzogTWFwPHN0cmluZywgU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZT5cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzQ3VycmVudGx5QmVpbmcgPSBuZXcgTWFwPHN0cmluZywgU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZT4oKTtcclxuICAgICAgICBFdmVudE1hbmFnZXIuc2VydmVyVGFyZ2V0ID0gbmV3IGNjLkV2ZW50VGFyZ2V0KCk7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmdhbWVUYXJnZXQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5oe25ryi5Yqg6LyJXHJcbiAgICAgKiAg5Yid5aeL5YyWLOWPquiuk+S4gOWAi+WwiOahiOeUoueUn+S4gOasoeipsmNsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2UoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEV2ZW50TWFuYWdlcihjb25maWdNYW5hZ2VyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg542y5Y+W5bey57aT5Yid5aeL5YyW55qE6Z2c5oWL5a+m5L6LY2xhc3NcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogSUV2ZW50TWFuYWdlciB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTGlzdGVuZXJGVywgXCLoqbLpoZ7lsJrmnKrlr6bkvovljJZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGV2ZW50Q291bnQoKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50Q291bnRcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBldmVudHNDdXJyZW50bHlCZWluZygpOiBNYXA8c3RyaW5nLCBTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlPiB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudHNDdXJyZW50bHlCZWluZ1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50VGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYW55IDog6KaB5Zue5YKz55qE54mp5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRFdmVudChldmVudFRhcmdldDogY2MuRXZlbnRUYXJnZXQsIGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZSwgLi4uYW55OiBhbnkpIHtcclxuXHJcbiAgICAgICAgYW55ID8gZXZlbnRUYXJnZXQuZW1pdChldmVudE5hbWUsIC4uLmFueSkgOiBldmVudFRhcmdldC5lbWl0KGV2ZW50TmFtZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2FtZeebo+iBveWbnuWCs+aOpeaUtlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbEZ1blxyXG4gICAgICogQHBhcmFtIGlzT25jZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2FtZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBHYW1lRXZlbnRUeXBlLCBjYWxsRnVuOiAoLi4udGFyZ2V0OiBhbnkpID0+IHZvaWQsIGlzT25jZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudENvdW50ICs9IDE7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzQ3VycmVudGx5QmVpbmcuc2V0KFwiZ2FtZUV2ZW50XCIsIGV2ZW50TmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChpc09uY2UpIHtcclxuICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmdhbWVUYXJnZXQub25jZShldmVudE5hbWUsIGNhbGxGdW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5nYW1lVGFyZ2V0Lm9uKGV2ZW50TmFtZSwgY2FsbEZ1bik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2VydmVy55uj6IG95Zue5YKz5o6l5pS2XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsRnVuXHJcbiAgICAgKiBAcGFyYW0gaXNPbmNlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXJ2ZXJFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlLCBjYWxsRnVuOiAoLi4udGFyZ2V0OiBhbnkpID0+IHZvaWQsIGlzT25jZTogYm9vbGVhbikge1xyXG5cclxuICAgICAgICB0aGlzLl9ldmVudENvdW50ICs9IDE7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzQ3VycmVudGx5QmVpbmcuc2V0KFwic2V2ZXJFdmVudFwiLCBldmVudE5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZXJ2ZXJUYXJnZXQub25jZShldmVudE5hbWUsIGNhbGxGdW4pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZXJ2ZXJUYXJnZXQub24oZXZlbnROYW1lLCBjYWxsRnVuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKrpmaTkuYvliY3nlKjlkIzpoZ7lnovvvIzlm57oqr/vvIznm67mqJnmiJYgdXNlQ2FwdHVyZSDoqLvlhornmoTkuovku7bnm6Pogb3lmajvvIzlpoLmnpzlj6rlgrPpgZ4gdHlwZe+8jOWwh+acg+WIqumZpCB0eXBlIOmhnuWei+eahOaJgOacieS6i+S7tuebo+iBveWZqOOAglxyXG4gICAgICogQHBhcmFtIHtTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7Y2MuRXZlbnRUYXJnZXR9IGV2ZW50VGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gY2FsbEZ1bj97RnVuY3Rpb259IDog6KaB5Yiq6Zmk55qE5pa55rOVLOWmguaenOacquWCs+WPg+aVuCzlsIfpu5joqo3lhajpg6jnm7jpl5znmoRjYWxsRnVu5LiA5Lim5Yiq6ZmkXHJcbiAgICAgKiBAcGFyYW0gdGFyZ2V0P3tPYmplY3R9Ouiqv+eUqOWbnuiqv+eahOebruaome+8iOatpOWwjeixoe+8ie+8jOWmguaenOacquaMh+Wumu+8jOWJh+WDheWIqumZpOaykuacieebruaomeeahOWbnuiqv1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGVzdHJveUV2ZW50KGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZSwgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0LCBjYWxsRnVuPzogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCkge1xyXG5cclxuICAgICAgICBldmVudFRhcmdldC5vZmYoZXZlbnROYW1lLCBjYWxsRnVuLCB0YXJnZXQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuipsuS6i+S7tuaMgee6jOebo+iBveS4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaGFzTGlzdGVuaW5nKGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZSwgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0KTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIHJldHVybiBldmVudFRhcmdldC5oYXNFdmVudExpc3RlbmVyKGV2ZW50TmFtZSk7XHJcblxyXG4gICAgfVxyXG59Il19