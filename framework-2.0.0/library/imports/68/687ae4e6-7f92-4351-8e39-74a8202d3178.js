"use strict";
cc._RF.push(module, '687aeTmf5JDUY45dKggLTF4', 'ErrorController');
// script/ErrorFrame/ErrorController.ts

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
var LanguageMethod_1 = require("../Framework/GlobalMethod/LanguageMethod");
var AErrorFrameTemplate_1 = require("../Framework/Template/Error/AErrorFrameTemplate");
var Socket_1 = require("../Socket/Socket");
var ErrorManager_1 = require("../Framework/Error/ErrorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ErrorController = /** @class */ (function (_super) {
    __extends(ErrorController, _super);
    function ErrorController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.errorLabel = null;
        _this.errorButtonLabel = null;
        _this.errorButton = null;
        return _this;
    }
    ErrorController.prototype.onCreat = function () {
        this.node.active = false;
        ErrorManager_1.default
            .instance
            .setErrorNode(this.node)
            .setErrorLabel(this.errorLabel)
            .setErrorButton(this.errorButton.node)
            .setErrorButtonLabel(this.errorButtonLabel);
    };
    ErrorController.prototype.languageSetting = function () {
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.errorButtonLabel)
            .updateLabelStyle(this.errorLabel);
    };
    ErrorController.prototype.errorButtonTouchEvent = function () {
        Socket_1.socketJS.backHome();
    };
    var _b, _c, _d;
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Label) === "function" ? _b : Object)
    ], ErrorController.prototype, "errorLabel", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Label) === "function" ? _c : Object)
    ], ErrorController.prototype, "errorButtonLabel", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Button) === "function" ? _d : Object)
    ], ErrorController.prototype, "errorButton", void 0);
    ErrorController = __decorate([
        ccclass
    ], ErrorController);
    return ErrorController;
}(AErrorFrameTemplate_1.default));

cc._RF.pop();