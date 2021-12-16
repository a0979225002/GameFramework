
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/FreeEndController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d1077U38BJC6CJA2OVglzA', 'FreeEndController');
// script/MainGameScript/Controller/FreeEndController.ts

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
var LoadingDialogController_1 = require("./LoadingDialogController");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FreeEndController = /** @class */ (function (_super) {
    __extends(FreeEndController, _super);
    function FreeEndController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.totalWinPoint = null;
        return _this;
    }
    FreeEndController_1 = FreeEndController;
    FreeEndController.prototype.onLoad = function () {
        FreeEndController_1.instance = this;
        this.node.active = false;
        this.numberFormat = new Intl.NumberFormat();
    };
    FreeEndController.prototype.initializeFreeEnd = function () {
        this.resolve = null;
        this.startNum = 0;
        this.totalWinPoint.string = "";
    };
    FreeEndController.prototype.showFreeEnd = function (point, time) {
        var _this = this;
        this.initializeFreeEnd();
        this.node.active = true;
        this.point = point;
        this.time = time;
        return new Promise(function (resolve) {
            _this.runPoint();
            _this.resolve = resolve;
        });
    };
    FreeEndController.prototype.closeFreeEnd = function () {
        var _this = this;
        this.startNum = this.point;
        this.isCanRunPoint = false;
        this.totalWinPoint.string = "$" + this.numberFormat.format(this.startNum);
        setTimeout(function () {
            _this.node.active = false;
            AudioManager_1.default.instance.musicPlay("NBS");
            _this.resolve();
        }, 3000);
    };
    FreeEndController.prototype.runPoint = function () {
        this.isCanRunPoint = true;
    };
    FreeEndController.prototype.update = function (dt) {
        if (this.isCanRunPoint) {
            this.startNum += this.point / this.time * dt;
            if (this.startNum > this.point) {
                this.closeFreeEnd();
                return;
            }
            var nowPoint = this.numberFormat.format(Math.floor(this.startNum * 10) / 10);
            if (nowPoint.indexOf(".") == -1) {
                nowPoint = nowPoint + ".0";
            }
            this.totalWinPoint.string = "$" + nowPoint;
        }
    };
    var FreeEndController_1, _b, _c;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], FreeEndController.prototype, "totalWinPoint", void 0);
    __decorate([
        LoadingDialogController_1.Loading("prefab"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
    ], FreeEndController.prototype, "showFreeEnd", null);
    __decorate([
        AudioManager_1.EffectStop("runPoint"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeEndController.prototype, "closeFreeEnd", null);
    __decorate([
        AudioManager_1.Effect("runPoint"),
        AudioManager_1.Music("FGBigWin"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FreeEndController.prototype, "runPoint", null);
    FreeEndController = FreeEndController_1 = __decorate([
        ccclass
    ], FreeEndController);
    return FreeEndController;
}(cc.Component));
exports.default = FreeEndController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcRnJlZUVuZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQTBGO0FBQzFGLHFFQUFrRDtBQUU1QyxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUErQyxxQ0FBWTtJQUEzRDtRQUFBLHFFQTRFQztRQXpFVyxtQkFBYSxHQUFhLElBQUksQ0FBQzs7SUF5RTNDLENBQUM7MEJBNUVvQixpQkFBaUI7SUFheEIsa0NBQU0sR0FBaEI7UUFDSSxtQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRWhELENBQUM7SUFFTyw2Q0FBaUIsR0FBekI7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVNLHVDQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxJQUFZO1FBRDlDLGlCQVlDO1FBVEcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWpCLE9BQU8sSUFBSSxPQUFPLENBQU8sVUFBQSxPQUFPO1lBQzVCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHTyx3Q0FBWSxHQUFwQjtRQURBLGlCQVdDO1FBVEcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFMUUsVUFBVSxDQUFDO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQUlPLG9DQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVTLGtDQUFNLEdBQWhCLFVBQWlCLEVBQVU7UUFFdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBRXBCLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUU3QyxJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixPQUFPO2FBQ1Y7WUFFRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDN0UsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUM3QixRQUFRLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQTthQUM3QjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQUksUUFBVSxDQUFDO1NBQzlDO0lBQ0wsQ0FBQzs7SUF4RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDSSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzREQUFRO0lBdUJ2QztRQURDLGlDQUFPLENBQUMsUUFBUSxDQUFDOzs7NERBQytCLE9BQU8sb0JBQVAsT0FBTzt3REFXdkQ7SUFHRDtRQURDLHlCQUFVLENBQUMsVUFBVSxDQUFDOzs7O3lEQVd0QjtJQUlEO1FBRkMscUJBQU0sQ0FBQyxVQUFVLENBQUM7UUFDbEIsb0JBQUssQ0FBQyxVQUFVLENBQUM7Ozs7cURBR2pCO0lBeERnQixpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQTRFckM7SUFBRCx3QkFBQztDQTVFRCxBQTRFQyxDQTVFOEMsRUFBRSxDQUFDLFNBQVMsR0E0RTFEO2tCQTVFb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1ZGlvTWFuYWdlciwge011c2ljLCBFZmZlY3RTdG9wLCBFZmZlY3R9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCB7TG9hZGluZ30gZnJvbSBcIi4vTG9hZGluZ0RpYWxvZ0NvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlZUVuZENvbnRyb2xsZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByaXZhdGUgdG90YWxXaW5Qb2ludDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc3RhcnROdW06IG51bWJlcjtcclxuICAgIHByaXZhdGUgaXNDYW5SdW5Qb2ludDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgcG9pbnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGltZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBudW1iZXJGb3JtYXQ6IEludGwuTnVtYmVyRm9ybWF0XHJcbiAgICBwcml2YXRlIHJlc29sdmU6ICh2YWx1ZTogKFByb21pc2VMaWtlPHZvaWQ+IHwgdm9pZCkpID0+IHZvaWRcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2UgOkZyZWVFbmRDb250cm9sbGVyO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgRnJlZUVuZENvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVGcmVlRW5kKCkge1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zdGFydE51bSA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBATG9hZGluZyhcInByZWZhYlwiKVxyXG4gICAgcHVibGljIHNob3dGcmVlRW5kKHBvaW50OiBudW1iZXIsIHRpbWU6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVGcmVlRW5kKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IHBvaW50O1xyXG4gICAgICAgIHRoaXMudGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ydW5Qb2ludCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgQEVmZmVjdFN0b3AoXCJydW5Qb2ludFwiKVxyXG4gICAgcHJpdmF0ZSBjbG9zZUZyZWVFbmQoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydE51bSA9IHRoaXMucG9pbnQ7XHJcbiAgICAgICAgdGhpcy5pc0NhblJ1blBvaW50ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50b3RhbFdpblBvaW50LnN0cmluZyA9IFwiJFwiICsgdGhpcy5udW1iZXJGb3JtYXQuZm9ybWF0KHRoaXMuc3RhcnROdW0pO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UubXVzaWNQbGF5KFwiTkJTXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUoKTtcclxuICAgICAgICB9LCAzMDAwKVxyXG4gICAgfVxyXG5cclxuICAgIEBFZmZlY3QoXCJydW5Qb2ludFwiKVxyXG4gICAgQE11c2ljKFwiRkdCaWdXaW5cIilcclxuICAgIHByaXZhdGUgcnVuUG9pbnQoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NhblJ1blBvaW50ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDYW5SdW5Qb2ludCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGFydE51bSArPSB0aGlzLnBvaW50IC8gdGhpcy50aW1lICogZHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydE51bSA+IHRoaXMucG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VGcmVlRW5kKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBub3dQb2ludCA9IHRoaXMubnVtYmVyRm9ybWF0LmZvcm1hdChNYXRoLmZsb29yKHRoaXMuc3RhcnROdW0gKiAxMCkgLyAxMCk7XHJcbiAgICAgICAgICAgIGlmIChub3dQb2ludC5pbmRleE9mKFwiLlwiKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbm93UG9pbnQgPSBub3dQb2ludCArIFwiLjBcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxXaW5Qb2ludC5zdHJpbmcgPSBgJCR7bm93UG9pbnR9YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=