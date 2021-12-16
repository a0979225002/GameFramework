
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/Slot/ASlotInitializeTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74fb9qfl55NT7tis9vkr4um', 'ASlotInitializeTemplate');
// script/Framework/Template/Slot/ASlotInitializeTemplate.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ServerEventType_1 = require("../../Listener/Enum/ServerEventType");
var EventManager_1 = require("../../Listener/EventManager");
var SlotGameManager_1 = require("../../Process/SlotGameManager");
var ResponseType_1 = require("../../WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../WebResponse/WebResponseManager");
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
var ASlotInitializeTemplate = /** @class */ (function (_super) {
    __extends(ASlotInitializeTemplate, _super);
    function ASlotInitializeTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ASlotInitializeTemplate.prototype.onLoad = function () {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.onCreate();
        this.slotInitialize();
        this.slotStyleSetting();
        this.normalResultResponse();
        this.freeResultEvenResponse();
    };
    /**
     * 一般狀態回傳事件接收器
     */
    ASlotInitializeTemplate.prototype.normalResultResponse = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.BET_RESULT, function (target) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.normalResult[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, name + "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBBetResultModule Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.normalResult[name] = target[name];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            cc.log(_this.normalResult);
            SlotGameManager_1.default.instance.isResultOk = true;
        }, false);
    };
    /**
     * free回傳 game 事件接收器
     * @private
     */
    ASlotInitializeTemplate.prototype.freeResultEvenResponse = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.FREE_SPIN_RESULT, function (target) {
            var e_2, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.freeResult[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, name + "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBFreeResultModule Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.freeResult[name] = target[name];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
            cc.log(_this.freeResult);
            SlotGameManager_1.default.instance.isResultOk = true;
        }, false);
    };
    ASlotInitializeTemplate = __decorate([
        ccclass
    ], ASlotInitializeTemplate);
    return ASlotInitializeTemplate;
}(OverrideComponent_1.default));
exports.default = ASlotInitializeTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxTbG90XFxBU2xvdEluaXRpYWxpemVUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUE0RDtBQUM1RCx5REFBb0Q7QUFDcEQsdUVBQW9FO0FBQ3BFLDREQUF1RDtBQUN2RCxpRUFBNEQ7QUFDNUQsb0VBQWlFO0FBQ2pFLDJFQUF3RTtBQUN4RSwwREFBcUQ7QUFFOUMsSUFBQSxPQUFPLEdBQUksRUFBRSxDQUFDLFVBQVUsUUFBakIsQ0FBa0I7QUFHaEM7SUFBOEQsMkNBQWlCO0lBQS9FOztJQXlGQSxDQUFDO0lBOURhLHdDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVk7WUFDYix1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFvQjtpQkFDNUIsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsSUFBSSxDQUFDLFVBQVU7WUFDWCx1Q0FBa0I7aUJBQ2IsUUFBUSxFQUF3QjtpQkFDaEMsU0FBUyxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBR0Q7O09BRUc7SUFDSyxzREFBb0IsR0FBNUI7UUFBQSxpQkFpQkM7UUFmRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxpQ0FBZSxDQUFDLFVBQVUsRUFBRSxVQUFDLE1BQWM7OztnQkFDakYsS0FBaUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBakMsSUFBSSxJQUFJLFdBQUE7b0JBQ1QsSUFBSSxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDdkMsSUFBSTs0QkFDQSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxrQkFBa0IsRUFBSyxJQUFJLHNLQUFnRCxDQUFDLENBQUE7eUJBQzVIO3dCQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2xCO3FCQUNKO3lCQUFNO3dCQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUMxQztpQkFDSjs7Ozs7Ozs7O1lBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssd0RBQXNCLEdBQTlCO1FBQUEsaUJBZ0JDO1FBZkcsc0JBQVksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsaUNBQWUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLE1BQWM7OztnQkFDdkYsS0FBaUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBakMsSUFBSSxJQUFJLFdBQUE7b0JBQ1QsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDckMsSUFBSTs0QkFDQSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxrQkFBa0IsRUFBSyxJQUFJLHVLQUFpRCxDQUFDLENBQUM7eUJBQzlIO3dCQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQ2xCO3FCQUNKO3lCQUFNO3dCQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN4QztpQkFDSjs7Ozs7Ozs7O1lBQ0QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIseUJBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDZCxDQUFDO0lBdkZ5Qix1QkFBdUI7UUFEcEQsT0FBTztPQUNzQix1QkFBdUIsQ0F5RnBEO0lBQUQsOEJBQUM7Q0F6RkQsQUF5RkMsQ0F6RjZELDJCQUFpQixHQXlGOUU7a0JBekY2Qix1QkFBdUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IHtTZXJ2ZXJFdmVudFR5cGV9IGZyb20gXCIuLi8uLi9MaXN0ZW5lci9FbnVtL1NlcnZlckV2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9MaXN0ZW5lci9FdmVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFNsb3RHYW1lTWFuYWdlciBmcm9tIFwiLi4vLi4vUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSBcIi4uLy4uL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlclwiO1xyXG5pbXBvcnQgT3ZlcnJpZGVDb21wb25lbnQgZnJvbSBcIi4uL092ZXJyaWRlQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQVNsb3RJbml0aWFsaXplVGVtcGxhdGUgZXh0ZW5kcyBPdmVycmlkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgLy9zbG90IOeahOWIl1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNsb3RSb3c6IEFycmF5PGNjLk5vZGU+O1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdyaWROb2RlVG9NYXA6IE1hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+PjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnaXJkU3ByaXRlVG9NYXA6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+O1xyXG4gICAgcHJvdGVjdGVkIG5vcm1hbFJlc3VsdDogSVNsb3RSZXN1bHRNb2RlbDtcclxuICAgIHByb3RlY3RlZCBmcmVlUmVzdWx0OiBJU2xvdEZyZWVSZXN1bHRNb2RlbDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25DcmVhdGUoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFNsb3RTdHlsZSDliJ3oqK3lrpos5aaC54Sh56ym5ZCI55qE5Yqf6IO95qij5byPIOWPr+e5vOaJv+aKveixoemhniBBU2xvdCDoh6rlrprnvqnkvb/nlKhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHNsb3RTdHlsZVNldHRpbmcoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOaJgOaciWdyaWQg6Zqo5qmf5ZyW54mHXHJcbiAgICAgKiDlpoLmnpzmr4/liJfnmoQzfjXmoLzmoLzlrZDpnIDopoHpoa/npLogVGFibGVJbmZvIOWbnuWCs+WbnuS+hueahOWIneWni2dyaWTnrZTmoYhcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzbG90SW5pdGlhbGl6ZSgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRBbGxHcmlkTm9kZSgpOiBNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj47XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldEFsbEdyaWRTcHJpdGUoKTogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj47XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vcm1hbFJlc3VsdCA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPElTbG90UmVzdWx0TW9kZWw+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLk5PUk1BTCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnJlZVJlc3VsdCA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPElTbG90RnJlZVJlc3VsdE1vZGVsPigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5GUkVFKTtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zbG90SW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgIHRoaXMuc2xvdFN0eWxlU2V0dGluZygpO1xyXG4gICAgICAgIHRoaXMubm9ybWFsUmVzdWx0UmVzcG9uc2UoKTtcclxuICAgICAgICB0aGlzLmZyZWVSZXN1bHRFdmVuUmVzcG9uc2UoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuIDoiKzni4DmhYvlm57lgrPkuovku7bmjqXmlLblmahcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBub3JtYWxSZXN1bHRSZXNwb25zZSgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNlcnZlckV2ZW50TGlzdGVuZXIoU2VydmVyRXZlbnRUeXBlLkJFVF9SRVNVTFQsICh0YXJnZXQ6IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vcm1hbFJlc3VsdFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuV2ViUmVzcG9uc2VFcnJvckZXLCBgJHtuYW1lfeWPg+aVuOacquWuo+WRijrnhKHms5Xkv53lrZjlm57lgrPlgLws5aaC5p6c6Kmy5Y+D5pW454K65b+F6KaBLOiri+abtOaPm0JldFJlc3VsdE1vZHVsZSBUeXBlYClcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub3JtYWxSZXN1bHRbbmFtZV0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKHRoaXMubm9ybWFsUmVzdWx0KTtcclxuICAgICAgICAgICAgU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmlzUmVzdWx0T2sgPSB0cnVlO1xyXG4gICAgICAgIH0sIGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZyZWXlm57lgrMgZ2FtZSDkuovku7bmjqXmlLblmahcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZnJlZVJlc3VsdEV2ZW5SZXNwb25zZSgpIHtcclxuICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uuc2VydmVyRXZlbnRMaXN0ZW5lcihTZXJ2ZXJFdmVudFR5cGUuRlJFRV9TUElOX1JFU1VMVCwgKHRhcmdldDogb2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgb2YgT2JqZWN0LmtleXModGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVJlc3VsdFtuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuV2ViUmVzcG9uc2VFcnJvckZXLCBgJHtuYW1lfeWPg+aVuOacquWuo+WRijrnhKHms5Xkv53lrZjlm57lgrPlgLws5aaC5p6c6Kmy5Y+D5pW454K65b+F6KaBLOiri+abtOaPm0ZyZWVSZXN1bHRNb2R1bGUgVHlwZWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZyZWVSZXN1bHRbbmFtZV0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MubG9nKHRoaXMuZnJlZVJlc3VsdCk7XHJcbiAgICAgICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc1Jlc3VsdE9rID0gdHJ1ZTtcclxuICAgICAgICB9LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG59Il19