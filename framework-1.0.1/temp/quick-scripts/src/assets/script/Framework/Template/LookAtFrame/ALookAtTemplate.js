"use strict";
cc._RF.push(module, '343a4nBKDtC+Lj7wvNk9n5w', 'ALookAtTemplate');
// script/Framework/Template/LookAtFrame/ALookAtTemplate.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollFocusStateNotification_1 = require("../../Slot/SlotNotifivation/ScrollFocusStateNotification");
var ScrollFocusStateObserver_1 = require("../../Slot/SlotObserver/ScrollFocusStateObserver");
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)瞇排模板
 * @Date 2021-05-26 下午 17:24
 * @Version 1.1
 */
var ALookAtTemplate = /** @class */ (function (_super) {
    __extends(ALookAtTemplate, _super);
    function ALookAtTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ALookAtTemplate.prototype.onLoad = function () {
        this.onCreate();
        ScrollFocusStateNotification_1.default.instance
            .subscribe(this.getScrollFocusStateObserver(), true);
    };
    /**
     * 瞇排事件訂閱者
     * @private
     */
    ALookAtTemplate.prototype.getScrollFocusStateObserver = function () {
        var _this = this;
        this._scrollFocusStateObserver = new ScrollFocusStateObserver_1.default(function (index, isShow) {
            if (isShow) {
                if (_this.allLookAtEffect[index].node.active)
                    return;
                _this.showLookAtEffect(index);
            }
            else {
                if (!_this.allLookAtEffect[index].node.active)
                    return;
                _this.removeLookAtEffect(index);
            }
        }, this);
        return this._scrollFocusStateObserver;
    };
    ALookAtTemplate = __decorate([
        ccclass
    ], ALookAtTemplate);
    return ALookAtTemplate;
}(OverrideComponent_1.default));
exports.default = ALookAtTemplate;

cc._RF.pop();