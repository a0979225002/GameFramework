
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Animation/AnimationManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEFuaW1hdGlvblxcQW5pbWF0aW9uTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFnRDtBQUNoRCx1REFBaUQ7QUFDakQsbUVBQXdEO0FBRXhEO0lBT0k7UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUErQixDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwwQkFBZ0IsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFJRCxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO2dCQUVmLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQzthQUV6QztZQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVELHVDQUFZLEdBQVosVUFBYSxPQUFjLEVBQUMsR0FBaUI7UUFFekMsSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBQztZQUU1QixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsQ0FBQyxDQUFBO1NBRW5GO2FBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFLLENBQUMsRUFBQztZQUVoRCxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxnQkFBZ0IsRUFBQyxnREFBZ0QsQ0FBQyxDQUFBO1NBQ2xIO1FBRUQsT0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBRyxHQUFLLENBQUMsQ0FBQztJQUV0RCxDQUFDO0lBR0Qsc0JBQUksdUNBQVM7YUFJYjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQTtRQUMxQixDQUFDO2FBTkQsVUFBYyxLQUF1QztZQUNqRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQTtRQUMzQixDQUFDOzs7T0FBQTtJQU1ELHNCQUFJLHFDQUFPO2FBQVg7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7SUFDTCx1QkFBQztBQUFELENBcERBLEFBb0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gJy4uL0Vycm9yL0Vycm9yTWFuYWdlcidcclxuaW1wb3J0IEFuaW1hdGlvbkhhbmRsZXIgZnJvbSAnLi9BbmltYXRpb25IYW5kbGVyJ1xyXG5pbXBvcnQge0Vycm9yVHlwZX0gZnJvbSAnLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0aW9uTWFuYWdlciBpbXBsZW1lbnRzIElBbmltYXRpb25NYW5hZ2Vye1xyXG5cclxuICAgIHByaXZhdGUgX3NwaW5lTmFtZTogTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2UgOiBBbmltYXRpb25NYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBfaGFuZGxlcjogSUFuaW1hdGlvbkhhbmRsZXJcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl9zcGluZU5hbWUgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nPj4oKTtcclxuICAgICAgICB0aGlzLl9oYW5kbGVyID0gbmV3IEFuaW1hdGlvbkhhbmRsZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKTogQW5pbWF0aW9uTWFuYWdlcntcclxuICAgICAgICBpZighdGhpcy5faW5zdGFuY2Upe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgQW5pbWF0aW9uTWFuYWdlcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3BpbmVOYW1lKHJlc05hbWU6c3RyaW5nLGtleTpzdHJpbmd8bnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYodGhpcy5fc3BpbmVOYW1lLmhhcyhyZXNOYW1lKSl7XHJcblxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5BbmltYXRpb25FcnJvckZXLFwicmVzb3VyY2VzIOizh+a6kOWQjemMr+iqpFwiKVxyXG5cclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9zcGluZU5hbWUuZ2V0KHJlc05hbWUpLmhhcyhgJHtrZXl9YCkpe1xyXG5cclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuQW5pbWF0aW9uRXJyb3JGVyxcIuWwmuacqueNsuWPluizh+a6kCzoq4vmn6XnnIsgQW5pbWF0aW9uTWFuYWdlci5pbnN0YW5jZS5zcGluZU5hbWVcIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAgdGhpcy5zcGluZU5hbWUuZ2V0KHJlc05hbWUpLmdldChgJHtrZXl9YCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXQgc3BpbmVOYW1lKHZhbHVlOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+Pikge1xyXG4gICAgICAgIHRoaXMuX3NwaW5lTmFtZSA9IHZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNwaW5lTmFtZSgpOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmc+PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwaW5lTmFtZVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYW5kbGVyKCk6IElBbmltYXRpb25IYW5kbGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGFuZGxlclxyXG4gICAgfVxyXG59XHJcbiJdfQ==