
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/AGenericTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cda0zzPPZHdoqPh5ux3aJr', 'AGenericTemplate');
// script/Framework/Template/AGenericTemplate.ts

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
var OverrideComponent_1 = require("./OverrideComponent");
var ccclass = cc._decorator.ccclass;
/**
 * 通用模板
 */
var AGenericTemplate = /** @class */ (function (_super) {
    __extends(AGenericTemplate, _super);
    function AGenericTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AGenericTemplate.prototype.onLoad = function () {
        this.onCreate();
    };
    AGenericTemplate.prototype.start = function () {
        this.languageSetting();
    };
    AGenericTemplate = __decorate([
        ccclass
    ], AGenericTemplate);
    return AGenericTemplate;
}(OverrideComponent_1.default));
exports.default = AGenericTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxBR2VuZXJpY1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUU3QyxJQUFBLE9BQU8sR0FBSSxFQUFFLENBQUMsVUFBVSxRQUFqQixDQUFrQjtBQUVoQzs7R0FFRztBQUVIO0lBQXVELG9DQUFpQjtJQUF4RTs7SUFzQkEsQ0FBQztJQVZhLGlDQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFUyxnQ0FBSyxHQUFmO1FBRUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBRTNCLENBQUM7SUFwQnlCLGdCQUFnQjtRQUQ3QyxPQUFPO09BQ3NCLGdCQUFnQixDQXNCN0M7SUFBRCx1QkFBQztDQXRCRCxBQXNCQyxDQXRCc0QsMkJBQWlCLEdBc0J2RTtrQkF0QjZCLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi9PdmVycmlkZUNvbXBvbmVudFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3N9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbi8qKlxyXG4gKiDpgJrnlKjmqKHmnb9cclxuICovXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFHZW5lcmljVGVtcGxhdGUgZXh0ZW5kcyBPdmVycmlkZUNvbXBvbmVudCB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoh6roqILnvqnliJ3lp4vni4DmhYtcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IG9uQ3JlYXRlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqp7ns7voqK3nva5cclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGxhbmd1YWdlU2V0dGluZygpO1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZVNldHRpbmcoKTtcclxuXHJcbiAgICB9XHJcblxyXG59Il19