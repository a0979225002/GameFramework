
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/Config/ASlotConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'daca9GxEvJAv4G5PtDJT/ef', 'ASlotConfig');
// script/Framework/Template/Config/ASlotConfig.ts

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
var ccclass = cc._decorator.ccclass;
var OverrideComponent_1 = require("../OverrideComponent");
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
var ASlotConfig = /** @class */ (function (_super) {
    __extends(ASlotConfig, _super);
    function ASlotConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ASlotConfig.prototype.onLoad = function () {
        this.configSetting(); //所有動作中需最先執行,遊戲初始設定
        this.ResponseDataModelSetting(); //遊戲初始接收module 創建
        this.onCreat();
    };
    ASlotConfig = __decorate([
        ccclass
    ], ASlotConfig);
    return ASlotConfig;
}(OverrideComponent_1.default));
exports.default = ASlotConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxDb25maWdcXEFTbG90Q29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLDBEQUFxRDtBQUVyRDs7Ozs7R0FLRztBQUVIO0lBQWtELCtCQUFpQjtJQUFuRTs7SUF1QkEsQ0FBQztJQUxhLDRCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQW1CLG1CQUFtQjtRQUMzRCxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxDQUFRLGlCQUFpQjtRQUN6RCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQXRCeUIsV0FBVztRQUR4QyxPQUFPO09BQ3NCLFdBQVcsQ0F1QnhDO0lBQUQsa0JBQUM7Q0F2QkQsQUF1QkMsQ0F2QmlELDJCQUFpQixHQXVCbEU7a0JBdkI2QixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpgYrmiLLliJ3lp4tzY2VuZeWKoOi8ieWJjSzpnIDlhKrlhYjln7fooYxcclxuICogQERhdGUgMjAyMS0wNi0wMSDkuIvljYggMDQ6NDlcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBU2xvdENvbmZpZyBleHRlbmRzIE92ZXJyaWRlQ29tcG9uZW50e1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Ieq6KiC576pXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJbnlbbliY3pgYrmiLJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNvbmZpZ1NldHRpbmcoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBiuaIsm5ldHdvcmsgcmVzcG9uc2UgbW9kdWxlO1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgUmVzcG9uc2VEYXRhTW9kZWxTZXR0aW5nKCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1NldHRpbmcoKTsgICAgICAgICAgICAgICAgICAgLy/miYDmnInli5XkvZzkuK3pnIDmnIDlhYjln7fooYws6YGK5oiy5Yid5aeL6Kit5a6aXHJcbiAgICAgICAgdGhpcy5SZXNwb25zZURhdGFNb2RlbFNldHRpbmcoKTsgICAgICAgIC8v6YGK5oiy5Yid5aeL5o6l5pS2bW9kdWxlIOWJteW7ulxyXG4gICAgICAgIHRoaXMub25DcmVhdCgpO1xyXG4gICAgfVxyXG59Il19