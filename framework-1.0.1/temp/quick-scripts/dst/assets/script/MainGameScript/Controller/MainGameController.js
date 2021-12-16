
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/MainGameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd52fd9pc0BLvozApAhgzlIx', 'MainGameController');
// script/MainGameScript/Controller/MainGameController.ts

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
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MainGameController = /** @class */ (function (_super) {
    __extends(MainGameController, _super);
    function MainGameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.freeBGH = null;
        _this.freeBGV = null;
        _this.normalBGH = null;
        _this.normalBGV = null;
        return _this;
    }
    MainGameController_1 = MainGameController;
    MainGameController.prototype.onLoad = function () {
        MainGameController_1.instance = this;
        this.freeBGH.active = false;
        this.freeBGV.active = false;
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.sceneDirectionObserverListener(), true);
    };
    MainGameController.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (SlotGameManager_1.default.instance.gameState != GameState_1.GameState.FREEING)
                return;
            switch (type) {
                case SceneStyle_1.SceneDirectionType.PORTRAIT:
                    _this.freeBGV.active = true;
                    break;
            }
        }, this);
    };
    MainGameController.prototype.closeFreeBG = function () {
        this.freeBGH.active = false;
        this.freeBGV.active = false;
    };
    MainGameController.prototype.showFreeBG = function () {
        if (SceneManager_1.default.instance.sceneDirection == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
            this.freeBGH.active = true;
        }
        else {
            this.freeBGH.active = true;
            this.freeBGV.active = true;
        }
    };
    var MainGameController_1, _b, _c, _d, _e;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], MainGameController.prototype, "freeBGH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], MainGameController.prototype, "freeBGV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Node) === "function" ? _d : Object)
    ], MainGameController.prototype, "normalBGH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Node) === "function" ? _e : Object)
    ], MainGameController.prototype, "normalBGV", void 0);
    MainGameController = MainGameController_1 = __decorate([
        ccclass
    ], MainGameController);
    return MainGameController;
}(cc.Component));
exports.default = MainGameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcTWFpbkdhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFnRTtBQUNoRSwyRUFBcUU7QUFDckUsb0VBQXdFO0FBQ3hFLG1FQUE2RDtBQUM3RCw2SEFBd0g7QUFDeEgsaUhBQTRHO0FBRXRHLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBSTFDO0lBQWdELHNDQUFZO0lBQTVEO1FBQUEscUVBK0NDO1FBNUNXLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBRXpCLGVBQVMsR0FBWSxJQUFJLENBQUE7O0lBc0NyQyxDQUFDOzJCQS9Db0Isa0JBQWtCO0lBWXpCLG1DQUFNLEdBQWhCO1FBQ0ksb0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzVCLDBDQUFnQzthQUMzQixRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSwyREFBOEIsR0FBckM7UUFBQSxpQkFTQztRQVJHLE9BQU8sSUFBSSxzQ0FBNEIsQ0FBQyxVQUFDLElBQUk7WUFDekMsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUkscUJBQVMsQ0FBQyxPQUFPO2dCQUFFLE9BQU87WUFDcEUsUUFBUSxJQUFJLEVBQUU7Z0JBQ1YsS0FBSywrQkFBa0IsQ0FBQyxRQUFRO29CQUM1QixLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQzNCLE1BQU07YUFDYjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFTSx3Q0FBVyxHQUFsQjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFFaEMsQ0FBQztJQUVNLHVDQUFVLEdBQWpCO1FBRUksSUFBSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksK0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM5QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUM5QjtJQUNMLENBQUM7O0lBM0NEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0QsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTt1REFBUTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3NEQUNELEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7dURBQVE7SUFFaEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDQyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxJQUFJO3lEQUFPO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0RBQ0MsRUFBRSxvQkFBRixFQUFFLENBQUMsSUFBSTt5REFBTztJQVRoQixrQkFBa0I7UUFEdEMsT0FBTztPQUNhLGtCQUFrQixDQStDdEM7SUFBRCx5QkFBQztDQS9DRCxBQStDQyxDQS9DK0MsRUFBRSxDQUFDLFNBQVMsR0ErQzNEO2tCQS9Db0Isa0JBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlJ1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IHtTY2VuZURpcmVjdGlvblR5cGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9TY2VuZS9FbnVtL1NjZW5lU3R5bGUnXHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lTWFuYWdlcidcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVOb3RpZmljYXRpb24vU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIgZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU9ic2VydmVyL1NjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5HYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGZyZWVCR0g6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGZyZWVCR1Y6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIG5vcm1hbEJHSDogY2MuTm9kZSA9IG51bGxcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBub3JtYWxCR1Y6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBNYWluR2FtZUNvbnRyb2xsZXI7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICBNYWluR2FtZUNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZnJlZUJHSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyZWVCR1YuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb25cclxuICAgICAgICAgICAgLmluc3RhbmNlLnN1YnNjcmliZSh0aGlzLnNjZW5lRGlyZWN0aW9uT2JzZXJ2ZXJMaXN0ZW5lcigpLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCk6IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIge1xyXG4gICAgICAgIHJldHVybiBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0ZSAhPSBHYW1lU3RhdGUuRlJFRUlORykgcmV0dXJuO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2NlbmVEaXJlY3Rpb25UeXBlLlBPUlRSQUlUOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnJlZUJHVi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlRnJlZUJHKCkge1xyXG5cclxuICAgICAgICB0aGlzLmZyZWVCR0guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcmVlQkdWLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0ZyZWVCRygpIHtcclxuXHJcbiAgICAgICAgaWYgKFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbiA9PSBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUJHSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUJHSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmZyZWVCR1YuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=