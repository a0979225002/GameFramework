
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/ScrollFocusController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6d10cQSvZZHYLHvte/1hgAU', 'ScrollFocusController');
// script/MainGameScript/Controller/ScrollFocusController.ts

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
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var ALookAtTemplate_1 = require("../../Framework/Template/LookAtFrame/ALookAtTemplate");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ScrollFocusController = /** @class */ (function (_super) {
    __extends(ScrollFocusController, _super);
    function ScrollFocusController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allLookAtEffect = [];
        _this.showMaxHeight = 490;
        _this.hideMinHeight = 160;
        return _this;
    }
    ScrollFocusController.prototype.onCreate = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.allLookAtEffect), _c = _b.next(); !_c.done; _c = _b.next()) {
                var effect = _c.value;
                effect.node.active = false;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    ScrollFocusController.prototype.removeLookAtEffect = function (index) {
        var _this = this;
        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, { height: this.hideMinHeight })
            .call(function () {
            _this.allLookAtEffect[index].node.active = false;
        })
            .start();
    };
    ScrollFocusController.prototype.showLookAtEffect = function (index) {
        this.allLookAtEffect[index].node.active = true;
        cc.tween(this.allLookAtEffect[index].node)
            .to(0.5, { height: this.showMaxHeight })
            .start();
    };
    __decorate([
        property(cc.Animation),
        __metadata("design:type", Array)
    ], ScrollFocusController.prototype, "allLookAtEffect", void 0);
    __decorate([
        AudioManager_1.EffectStop("slottrunFast"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ScrollFocusController.prototype, "removeLookAtEffect", null);
    __decorate([
        AudioManager_1.Effect("slottrunFast"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], ScrollFocusController.prototype, "showLookAtEffect", null);
    ScrollFocusController = __decorate([
        ccclass
    ], ScrollFocusController);
    return ScrollFocusController;
}(ALookAtTemplate_1.default));
exports.default = ScrollFocusController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcU2Nyb2xsRm9jdXNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQXFFO0FBQ3JFLHdGQUFrRjtBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBZTtJQUFsRTtRQUFBLHFFQThCQztRQTNCYSxxQkFBZSxHQUFtQixFQUFFLENBQUM7UUFDOUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsbUJBQWEsR0FBVyxHQUFHLENBQUM7O0lBeUJqRCxDQUFDO0lBdkJhLHdDQUFRLEdBQWxCOzs7WUFDSSxLQUFtQixJQUFBLEtBQUEsU0FBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFwQyxJQUFJLE1BQU0sV0FBQTtnQkFDWCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDOUI7Ozs7Ozs7OztJQUNMLENBQUM7SUFHUyxrREFBa0IsR0FBNUIsVUFBNkIsS0FBYTtRQUQxQyxpQkFRQztRQU5HLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUM7YUFDckMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFDLENBQUM7YUFDckMsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwRCxDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBR00sZ0RBQWdCLEdBQXZCLFVBQXdCLEtBQWE7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUMvQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO2FBQ3JDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDO2FBQ3JDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUExQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzs7a0VBQ3dCO0lBVy9DO1FBREMseUJBQVUsQ0FBQyxjQUFjLENBQUM7Ozs7bUVBUTFCO0lBR0Q7UUFEQyxxQkFBTSxDQUFDLGNBQWMsQ0FBQzs7OztpRUFNdEI7SUE3QmdCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBOEJ6QztJQUFELDRCQUFDO0NBOUJELEFBOEJDLENBOUJrRCx5QkFBZSxHQThCakU7a0JBOUJvQixxQkFBcUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VmZmVjdCwgRWZmZWN0U3RvcH0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL0F1ZGlvL0F1ZGlvTWFuYWdlcidcclxuaW1wb3J0IEFMb29rQXRUZW1wbGF0ZSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvTG9va0F0RnJhbWUvQUxvb2tBdFRlbXBsYXRlJ1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxGb2N1c0NvbnRyb2xsZXIgZXh0ZW5kcyBBTG9va0F0VGVtcGxhdGUge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5BbmltYXRpb24pXHJcbiAgICBwcm90ZWN0ZWQgYWxsTG9va0F0RWZmZWN0OiBjYy5BbmltYXRpb25bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzaG93TWF4SGVpZ2h0OiBudW1iZXIgPSA0OTA7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGhpZGVNaW5IZWlnaHQ6IG51bWJlciA9IDE2MDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZWZmZWN0IG9mIHRoaXMuYWxsTG9va0F0RWZmZWN0KSB7XHJcbiAgICAgICAgICAgIGVmZmVjdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBARWZmZWN0U3RvcChcInNsb3R0cnVuRmFzdFwiKVxyXG4gICAgcHJvdGVjdGVkIHJlbW92ZUxvb2tBdEVmZmVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5hbGxMb29rQXRFZmZlY3RbaW5kZXhdLm5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjUsIHtoZWlnaHQ6IHRoaXMuaGlkZU1pbkhlaWdodH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTG9va0F0RWZmZWN0W2luZGV4XS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBARWZmZWN0KFwic2xvdHRydW5GYXN0XCIpXHJcbiAgICBwdWJsaWMgc2hvd0xvb2tBdEVmZmVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hbGxMb29rQXRFZmZlY3RbaW5kZXhdLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmFsbExvb2tBdEVmZmVjdFtpbmRleF0ubm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuNSwge2hlaWdodDogdGhpcy5zaG93TWF4SGVpZ2h0fSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn0iXX0=