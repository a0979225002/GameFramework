
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/Error/AErrorFrameTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxFcnJvclxcQUVycm9yRnJhbWVUZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnRUFBMEQ7QUFDMUQsMERBQXFEO0FBRTlDLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQTBELHVDQUFpQjtJQUEzRTs7SUFtQkEsQ0FBQztJQVBhLG9DQUFNLEdBQWhCO1FBRUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2Ysc0JBQVksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVqRixDQUFDO0lBakJ5QixtQkFBbUI7UUFEaEQsT0FBTztPQUNzQixtQkFBbUIsQ0FtQmhEO0lBQUQsMEJBQUM7Q0FuQkQsQUFtQkMsQ0FuQnlELDJCQUFpQixHQW1CMUU7a0JBbkI2QixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uTWV0aG9kIGZyb20gJy4uLy4uL0dsb2JhbE1ldGhvZC9CdXR0b25NZXRob2QnXHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBRXJyb3JGcmFtZVRlbXBsYXRlIGV4dGVuZHMgT3ZlcnJpZGVDb21wb25lbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBlcnJvckxhYmVsOiBjYy5MYWJlbDtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBlcnJvckJ1dHRvbkxhYmVsOiBjYy5MYWJlbDtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBlcnJvckJ1dHRvbjogY2MuQnV0dG9uO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0KCk7XHJcblxyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGVycm9yQnV0dG9uVG91Y2hFdmVudCgpO1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBsYW5ndWFnZVNldHRpbmcoKTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG5cclxuICAgICAgICB0aGlzLm9uQ3JlYXQoKTtcclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQodGhpcy5lcnJvckJ1dHRvbiwgXCJlcnJvckJ1dHRvblRvdWNoRXZlbnRcIiwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ==