
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/WarningController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '81955WZXNJB7b3epDfviW/N', 'WarningController');
// script/MainGameScript/Controller/WarningController.ts

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var WarningController = /** @class */ (function (_super) {
    __extends(WarningController, _super);
    function WarningController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.warningH = null;
        _this.warningV = null;
        _this.warningTextH = null;
        _this.warningTextV = null;
        return _this;
    }
    WarningController_1 = WarningController;
    WarningController.prototype.onCreate = function () {
        WarningController_1.instance = this;
        this.timer = null;
        this.warningH.active = false;
        this.warningV.active = false;
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.SceneDirectionObserverListener(), true); //註冊直橫式監聽
    };
    WarningController.prototype.languageSetting = function () {
        this.warningTextH.string = SocketSetting_1.default.t("S_9017");
        this.warningTextV.string = SocketSetting_1.default.t("S_9017");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.warningTextH)
            .updateLabelStyle(this.warningTextV);
    };
    WarningController.prototype.showWarning = function () {
        var _this = this;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        else {
            this.checkScene(SceneManager_1.default.instance.sceneDirection);
            this.isShowWarning = true;
        }
        this.timer = window.setTimeout(function () {
            _this.warningH.active = false;
            _this.warningV.active = false;
            _this.isShowWarning = false;
            _this.timer = null;
        }, 1500);
    };
    WarningController.prototype.SceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (_this.isShowWarning) {
                _this.checkScene(type);
            }
        }, this);
    };
    /**
     * 確認當前方向
     * @param {SceneDirectionType} type
     * @protected
     */
    WarningController.prototype.checkScene = function (type) {
        switch (type) {
            case SceneStyle_1.SceneDirectionType.LANDSCAPE:
                this.warningH.active = true;
                this.warningV.active = false;
                break;
            case SceneStyle_1.SceneDirectionType.PORTRAIT:
                this.warningH.active = false;
                this.warningV.active = true;
                break;
        }
    };
    var WarningController_1, _b, _c, _d, _e;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], WarningController.prototype, "warningH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], WarningController.prototype, "warningV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], WarningController.prototype, "warningTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], WarningController.prototype, "warningTextV", void 0);
    WarningController = WarningController_1 = __decorate([
        ccclass
    ], WarningController);
    return WarningController;
}(AGenericTemplate_1.default));
exports.default = WarningController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcV2FybmluZ0NvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXlFO0FBQ3pFLG9FQUF3RTtBQUN4RSxtRUFBNkQ7QUFDN0QsNkhBQXdIO0FBQ3hILGlIQUE0RztBQUM1Ryw4RUFBd0U7QUFDeEUsNERBQXNEO0FBRWhELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQStDLHFDQUFnQjtJQUEvRDtRQUFBLHFFQTRFQztRQXpFVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFFOUIsa0JBQVksR0FBYSxJQUFJLENBQUM7O0lBbUUxQyxDQUFDOzBCQTVFb0IsaUJBQWlCO0lBZXhCLG9DQUFRLEdBQWxCO1FBQ0ksbUJBQWlCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzdCLDBDQUFnQzthQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUztJQUNuRixDQUFDO0lBRVMsMkNBQWUsR0FBekI7UUFFSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyx1QkFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVwRCx3QkFBYyxDQUFDLFFBQVE7YUFDbEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNuQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVNLHVDQUFXLEdBQWxCO1FBQUEsaUJBY0M7UUFiRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBQzNCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM3QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDN0IsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUVPLDBEQUE4QixHQUF0QztRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLHNDQUE0QixDQUFDLFVBQUMsSUFBSTtZQUN6QyxJQUFJLEtBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekI7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHNDQUFVLEdBQWxCLFVBQW1CLElBQXdCO1FBRXZDLFFBQVEsSUFBSSxFQUFFO1lBQ1YsS0FBSywrQkFBa0IsQ0FBQyxTQUFTO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsTUFBTTtZQUNWLEtBQUssK0JBQWtCLENBQUMsUUFBUTtnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzVCLE1BQU07U0FDYjtJQUNMLENBQUM7O0lBeEVEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0EsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTt1REFBUTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNBLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7dURBQVE7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDRyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzJEQUFRO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0csRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzsyREFBUTtJQVRyQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQTRFckM7SUFBRCx3QkFBQztDQTVFRCxBQTRFQyxDQTVFOEMsMEJBQWdCLEdBNEU5RDtrQkE1RW9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYW5ndWFnZU1ldGhvZCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0dsb2JhbE1ldGhvZC9MYW5ndWFnZU1ldGhvZFwiO1xyXG5pbXBvcnQge1NjZW5lRGlyZWN0aW9uVHlwZX0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1NjZW5lL0VudW0vU2NlbmVTdHlsZSdcclxuaW1wb3J0IFNjZW5lTWFuYWdlciBmcm9tICcuLi8uLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU5vdGlmaWNhdGlvbi9TY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgQUdlbmVyaWNUZW1wbGF0ZSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvQUdlbmVyaWNUZW1wbGF0ZSdcclxuaW1wb3J0IFNvY2tldFNldHRpbmcgZnJvbSAnLi4vLi4vU29ja2V0L1NvY2tldFNldHRpbmcnXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhcm5pbmdDb250cm9sbGVyIGV4dGVuZHMgQUdlbmVyaWNUZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIHdhcm5pbmdIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSB3YXJuaW5nVjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIHdhcm5pbmdUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB3YXJuaW5nVGV4dFY6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGlzU2hvd1dhcm5pbmc6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBXYXJuaW5nQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgV2FybmluZ0NvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMud2FybmluZ0guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53YXJuaW5nVi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBTY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblxyXG4gICAgICAgICAgICAuaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuU2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCksIHRydWUpOyAvL+iou+WGiuebtOapq+W8j+ebo+iBvVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNldHRpbmcoKSB7XHJcblxyXG4gICAgICAgIHRoaXMud2FybmluZ1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfOTAxN1wiKTtcclxuICAgICAgICB0aGlzLndhcm5pbmdUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwMTdcIilcclxuXHJcbiAgICAgICAgTGFuZ3VhZ2VNZXRob2QuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy53YXJuaW5nVGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMud2FybmluZ1RleHRWKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1dhcm5pbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tTY2VuZShTY2VuZU1hbmFnZXIuaW5zdGFuY2Uuc2NlbmVEaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2hvd1dhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy53YXJuaW5nVi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1Nob3dXYXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgIH0sIDE1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCk6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Nob3dXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrU2NlbmUodHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56K66KqN55W25YmN5pa55ZCRXHJcbiAgICAgKiBAcGFyYW0ge1NjZW5lRGlyZWN0aW9uVHlwZX0gdHlwZVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNoZWNrU2NlbmUodHlwZTogU2NlbmVEaXJlY3Rpb25UeXBlKSB7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdILmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndhcm5pbmdWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmVEaXJlY3Rpb25UeXBlLlBPUlRSQUlUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy53YXJuaW5nSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2FybmluZ1YuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==