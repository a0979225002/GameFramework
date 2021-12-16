"use strict";
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