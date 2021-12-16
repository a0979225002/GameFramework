
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/FreeOpenController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6af85aHEjNE5q29+tn6CuAB', 'FreeOpenController');
// script/MainGameScript/Controller/FreeOpenController.ts

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
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var ConfigEnum_1 = require("../../Framework/Config/Enum/ConfigEnum");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var LoadingDialogController_1 = require("./LoadingDialogController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreeOpenController = /** @class */ (function (_super) {
    __extends(FreeOpenController, _super);
    function FreeOpenController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.freeCountLabel = null;
        _this.freeAnimation = null;
        _this.freeCount = 0;
        _this.count = 0;
        return _this;
    }
    FreeOpenController_1 = FreeOpenController;
    FreeOpenController.prototype.onCreate = function () {
        FreeOpenController_1.instance = this;
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.initialFreeOpen();
    };
    FreeOpenController.prototype.initialFreeOpen = function () {
        this.CLOSING = false;
        this.freeCountLabel.string = "";
        this.count = 0;
        this.node.active = false;
        this.freeAnimation.node.width = 0;
        this.freeAnimation.node.height = 0;
        this.node.opacity = 255;
    };
    /**
     * 打開free 開場動畫
     * @param {number} freeCount
     * @return {Promise<void>}
     */
    FreeOpenController.prototype.showFreeOpeningAnimation = function (freeCount) {
        var _this = this;
        this.playFreeAnimation(freeCount);
        this.freeAnimation.once('finished', this.freeCountAnimation, this);
        return new Promise(function (resolve) {
            _this.resolve = resolve;
        });
    };
    /**
     * 跑Free 總共次數動畫
     * @private
     */
    FreeOpenController.prototype.freeCountAnimation = function () {
        cc.log("freeCountAnimation");
        if (SlotGameManager_1.default.instance.isAutoState && SlotGameManager_1.default.instance.autoType != ConfigEnum_1.AutoType.freeEnd) {
            this.timer = 3;
        }
        else {
            this.timer = 10;
        }
        if (this.freeResult.FreeToFree != 0) {
            this.timer = 1;
        }
        this.schedule(this.addCountTimer, 0.016 * 5);
    };
    FreeOpenController.prototype.addCountTimer = function () {
        this.count++;
        if (this.count > this.freeCount) {
            this.touchEndListener();
            this.unschedule(this.addCountTimer);
            this.scheduleOnce(this.removeFreeOpeningAnimation, this.timer);
            return;
        }
        this.freeCountLabel.string = String(this.count);
    };
    FreeOpenController.prototype.touchEndListener = function () {
        this.freeAnimation.node.once(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
    };
    FreeOpenController.prototype.keyboardEvent = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.removeFreeOpeningAnimation();
                break;
        }
    };
    FreeOpenController.prototype.playFreeAnimation = function (freeCount) {
        this.node.active = true;
        this.freeCount = freeCount;
        this.freeAnimation.play();
    };
    /**
     * 關閉free開場動畫
     */
    FreeOpenController.prototype.removeFreeOpeningAnimation = function () {
        var _this = this;
        this.unschedule(this.removeFreeOpeningAnimation);
        this.freeAnimation.node.off(cc.Node.EventType.TOUCH_END, this.removeFreeOpeningAnimation, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
        cc.tween(this.node)
            .to(0.4, { opacity: 0 })
            .call(function () {
            _this.initialFreeOpen();
            _this.resolve();
        })
            .start();
    };
    FreeOpenController.prototype.languageSetting = function () {
    };
    var FreeOpenController_1, _b, _c, _d;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], FreeOpenController.prototype, "freeCountLabel", void 0);
    __decorate([
        property(cc.Animation),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Animation) === "function" ? _c : Object)
    ], FreeOpenController.prototype, "freeAnimation", void 0);
    __decorate([
        LoadingDialogController_1.Loading("prefab"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
    ], FreeOpenController.prototype, "showFreeOpeningAnimation", null);
    __decorate([
        AudioManager_1.Effect("GetWin"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "freeCountAnimation", null);
    __decorate([
        AudioManager_1.Music("GetFG"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "playFreeAnimation", null);
    __decorate([
        AudioManager_1.Music("FBS"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeOpenController.prototype, "removeFreeOpeningAnimation", null);
    FreeOpenController = FreeOpenController_1 = __decorate([
        ccclass
    ], FreeOpenController);
    return FreeOpenController;
}(AGenericTemplate_1.default));
exports.default = FreeOpenController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcRnJlZU9wZW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUFnRTtBQUNoRSxxRUFBK0Q7QUFDL0QsMkVBQXFFO0FBQ3JFLDhFQUF3RTtBQUN4RSw4RUFBMkU7QUFFM0UscUZBQWlGO0FBQ2pGLHFFQUFrRDtBQUc1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFnRCxzQ0FBZ0I7SUFBaEU7UUFBQSxxRUFxSEM7UUFsSFcsb0JBQWMsR0FBYSxJQUFJLENBQUM7UUFFaEMsbUJBQWEsR0FBaUIsSUFBSSxDQUFDO1FBQ25DLGVBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQVcsQ0FBQyxDQUFDOztJQThHOUIsQ0FBQzsyQkFySG9CLGtCQUFrQjtJQWM1QixxQ0FBUSxHQUFmO1FBQ0ksb0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVTtZQUNYLHVDQUFrQjtpQkFDYixRQUFRLEVBQW9CO2lCQUM1QixTQUFTLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVPLDRDQUFlLEdBQXZCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxD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QWhIZ0Isa0JBQWtCO1FBRHRDLE9BQU87T0FDYSxrQkFBa0IsQ0FxSHRDO0lBQUQseUJBQUM7Q0FySEQsQUFxSEMsQ0FySCtDLDBCQUFnQixHQXFIL0Q7a0JBckhvQixrQkFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge011c2ljLCBFZmZlY3R9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7QXV0b1R5cGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Db25maWcvRW51bS9Db25maWdFbnVtJ1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IEFHZW5lcmljVGVtcGxhdGUgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1RlbXBsYXRlL0FHZW5lcmljVGVtcGxhdGUnXHJcbmltcG9ydCB7UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCBOb0xpbmVGcmVlUmVzdWx0IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvRnJlZVJlc3VsdC9Ob0xpbmVGcmVlUmVzdWx0XCI7XHJcbmltcG9ydCB7V2ViUmVzcG9uc2VNYW5hZ2VyfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyJ1xyXG5pbXBvcnQge0xvYWRpbmd9IGZyb20gXCIuL0xvYWRpbmdEaWFsb2dDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlT3BlbkNvbnRyb2xsZXIgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcml2YXRlIGZyZWVDb3VudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgcHJpdmF0ZSBmcmVlQW5pbWF0aW9uOiBjYy5BbmltYXRpb24gPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBmcmVlQ291bnQgPSAwO1xyXG4gICAgcHJpdmF0ZSBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgcmVzb2x2ZTogKHZhbHVlOiAoUHJvbWlzZUxpa2U8dm9pZD4gfCB2b2lkKSkgPT4gdm9pZFxyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBDTE9TSU5HIDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZnJlZVJlc3VsdDpJTm9MaW5lRnJlZVJlc3VsdE1vZGVsO1xyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogRnJlZU9wZW5Db250cm9sbGVyO1xyXG5cclxuICAgIHB1YmxpYyBvbkNyZWF0ZSgpIHtcclxuICAgICAgICBGcmVlT3BlbkNvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZnJlZVJlc3VsdCA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZUZyZWVSZXN1bHQ+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLkZSRUUpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEZyZWVPcGVuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsRnJlZU9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5DTE9TSU5HID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mcmVlQ291bnRMYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyZWVBbmltYXRpb24ubm9kZS53aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmVlQW5pbWF0aW9uLm5vZGUuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJk+mWi2ZyZWUg6ZaL5aC05YuV55WrXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZnJlZUNvdW50XHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICovXHJcbiAgICBATG9hZGluZyhcInByZWZhYlwiKVxyXG4gICAgcHVibGljIHNob3dGcmVlT3BlbmluZ0FuaW1hdGlvbihmcmVlQ291bnQ6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMucGxheUZyZWVBbmltYXRpb24oZnJlZUNvdW50KTtcclxuICAgICAgICB0aGlzLmZyZWVBbmltYXRpb24ub25jZSgnZmluaXNoZWQnLCB0aGlzLmZyZWVDb3VudEFuaW1hdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDot5FGcmVlIOe4veWFseasoeaVuOWLleeVq1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgQEVmZmVjdChcIkdldFdpblwiKVxyXG4gICAgcHJpdmF0ZSBmcmVlQ291bnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgY2MubG9nKFwiZnJlZUNvdW50QW5pbWF0aW9uXCIpXHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc0F1dG9TdGF0ZSAmJiBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuYXV0b1R5cGUgIT0gQXV0b1R5cGUuZnJlZUVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZyZWVSZXN1bHQuRnJlZVRvRnJlZSAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuYWRkQ291bnRUaW1lciwgMC4wMTYgKiA1KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZENvdW50VGltZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ID4gdGhpcy5mcmVlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy50b3VjaEVuZExpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmFkZENvdW50VGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSh0aGlzLnJlbW92ZUZyZWVPcGVuaW5nQW5pbWF0aW9uLCB0aGlzLnRpbWVyKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZnJlZUNvdW50TGFiZWwuc3RyaW5nID0gU3RyaW5nKHRoaXMuY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRMaXN0ZW5lcigpIHtcclxuICAgICAgICB0aGlzLmZyZWVBbmltYXRpb24ubm9kZS5vbmNlKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5yZW1vdmVGcmVlT3BlbmluZ0FuaW1hdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub25jZShjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMua2V5Ym9hcmRFdmVudCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBrZXlib2FyZEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnNwYWNlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVGcmVlT3BlbmluZ0FuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBATXVzaWMoXCJHZXRGR1wiKVxyXG4gICAgcHJpdmF0ZSBwbGF5RnJlZUFuaW1hdGlvbihmcmVlQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZnJlZUNvdW50ID0gZnJlZUNvdW50O1xyXG4gICAgICAgIHRoaXMuZnJlZUFuaW1hdGlvbi5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpl5zplolmcmVl6ZaL5aC05YuV55WrXHJcbiAgICAgKi9cclxuICAgIEBNdXNpYyhcIkZCU1wiKVxyXG4gICAgcHJpdmF0ZSByZW1vdmVGcmVlT3BlbmluZ0FuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5yZW1vdmVGcmVlT3BlbmluZ0FuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5mcmVlQW5pbWF0aW9uLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5yZW1vdmVGcmVlT3BlbmluZ0FuaW1hdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5rZXlib2FyZEV2ZW50LCB0aGlzKTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjQsIHtvcGFjaXR5OiAwfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsRnJlZU9wZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGxhbmd1YWdlU2V0dGluZygpIHtcclxuICAgIH1cclxufVxyXG4iXX0=