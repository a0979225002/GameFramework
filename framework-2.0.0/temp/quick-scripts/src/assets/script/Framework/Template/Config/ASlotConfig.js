"use strict";
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