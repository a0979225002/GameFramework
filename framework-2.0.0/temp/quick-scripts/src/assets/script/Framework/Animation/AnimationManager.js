"use strict";
cc._RF.push(module, '3be5bnHcvRJ6Zls13bLS4eH', 'AnimationManager');
// script/Framework/Animation/AnimationManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManager_1 = require("../Error/ErrorManager");
var AnimationHandler_1 = require("./AnimationHandler");
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var AnimationManager = /** @class */ (function () {
    function AnimationManager() {
        this._spineName = new Map();
        this._handler = new AnimationHandler_1.default();
    }
    Object.defineProperty(AnimationManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new AnimationManager;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    AnimationManager.prototype.getSpineName = function (resName, key) {
        if (this._spineName.has(resName)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.AnimationErrorFW, "resources 資源名錯誤");
        }
        else if (this._spineName.get(resName).has("" + key)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.AnimationErrorFW, "尚未獲取資源,請查看 AnimationManager.instance.spineName");
        }
        return this.spineName.get(resName).get("" + key);
    };
    Object.defineProperty(AnimationManager.prototype, "spineName", {
        get: function () {
            return this._spineName;
        },
        set: function (value) {
            this._spineName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnimationManager.prototype, "handler", {
        get: function () {
            return this._handler;
        },
        enumerable: false,
        configurable: true
    });
    return AnimationManager;
}());
exports.default = AnimationManager;

cc._RF.pop();