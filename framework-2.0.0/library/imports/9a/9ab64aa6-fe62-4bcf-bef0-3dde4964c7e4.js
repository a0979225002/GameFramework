"use strict";
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