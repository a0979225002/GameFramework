
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ErrorFrame/ErrorController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxFcnJvckZyYW1lXFxFcnJvckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkVBQXNFO0FBQ3RFLHVGQUFpRjtBQUNqRiwyQ0FBeUM7QUFDekMsZ0VBQTJEO0FBRXJELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThCLG1DQUFtQjtJQUFqRDtRQUFBLHFFQWdDQztRQTdCYSxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUU3QixzQkFBZ0IsR0FBYyxJQUFJLENBQUM7UUFFbkMsaUJBQVcsR0FBZSxJQUFJLENBQUM7O0lBeUI3QyxDQUFDO0lBdkJVLGlDQUFPLEdBQWQ7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsc0JBQVk7YUFDUCxRQUFRO2FBQ1IsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDdkIsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDOUIsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQ3JDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBRXBELENBQUM7SUFFUyx5Q0FBZSxHQUF6QjtRQUVJLHdCQUFjLENBQUMsUUFBUTthQUNsQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFDdkMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSwrQ0FBcUIsR0FBNUI7UUFDSSxpQkFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7O0lBMUJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0ksRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt1REFBUTtJQUV2QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNVLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7NkRBQVE7SUFFN0M7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztzREFDSSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxNQUFNO3dEQUFRO0lBUHZDLGVBQWU7UUFEcEIsT0FBTztPQUNGLGVBQWUsQ0FnQ3BCO0lBQUQsc0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzZCLDZCQUFtQixHQWdDaEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGFuZ3VhZ2VNZXRob2QgZnJvbSBcIi4uL0ZyYW1ld29yay9HbG9iYWxNZXRob2QvTGFuZ3VhZ2VNZXRob2RcIjtcclxuaW1wb3J0IEFFcnJvckZyYW1lVGVtcGxhdGUgZnJvbSAnLi4vRnJhbWV3b3JrL1RlbXBsYXRlL0Vycm9yL0FFcnJvckZyYW1lVGVtcGxhdGUnXHJcbmltcG9ydCB7c29ja2V0SlN9IGZyb20gJy4uL1NvY2tldC9Tb2NrZXQnXHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uL0ZyYW1ld29yay9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuY2xhc3MgRXJyb3JDb250cm9sbGVyIGV4dGVuZHMgQUVycm9yRnJhbWVUZW1wbGF0ZSB7XHJcbiAgICBcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCBlcnJvckxhYmVsIDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJvdGVjdGVkIGVycm9yQnV0dG9uTGFiZWwgOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGVycm9yQnV0dG9uIDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIFxyXG4gICAgcHVibGljIG9uQ3JlYXQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIEVycm9yTWFuYWdlclxyXG4gICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnNldEVycm9yTm9kZSh0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgIC5zZXRFcnJvckxhYmVsKHRoaXMuZXJyb3JMYWJlbClcclxuICAgICAgICAgICAgLnNldEVycm9yQnV0dG9uKHRoaXMuZXJyb3JCdXR0b24ubm9kZSlcclxuICAgICAgICAgICAgLnNldEVycm9yQnV0dG9uTGFiZWwodGhpcy5lcnJvckJ1dHRvbkxhYmVsKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlU2V0dGluZygpIHtcclxuXHJcbiAgICAgICAgTGFuZ3VhZ2VNZXRob2QuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5lcnJvckJ1dHRvbkxhYmVsKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmVycm9yTGFiZWwpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZXJyb3JCdXR0b25Ub3VjaEV2ZW50KCkge1xyXG4gICAgICAgIHNvY2tldEpTLmJhY2tIb21lKCk7XHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==