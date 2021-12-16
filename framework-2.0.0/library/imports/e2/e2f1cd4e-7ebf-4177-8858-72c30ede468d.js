"use strict";
cc._RF.push(module, 'e2f1c1Ofr9Bd4hYcsMO3kaN', 'AErrorFrameTemplate');
// script/Framework/Template/Error/AErrorFrameTemplate.ts

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
var ButtonMethod_1 = require("../../GlobalMethod/ButtonMethod");
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
var AErrorFrameTemplate = /** @class */ (function (_super) {
    __extends(AErrorFrameTemplate, _super);
    function AErrorFrameTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AErrorFrameTemplate.prototype.onLoad = function () {
        this.onCreat();
        ButtonMethod_1.default.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this);
    };
    AErrorFrameTemplate = __decorate([
        ccclass
    ], AErrorFrameTemplate);
    return AErrorFrameTemplate;
}(OverrideComponent_1.default));
exports.default = AErrorFrameTemplate;

cc._RF.pop();