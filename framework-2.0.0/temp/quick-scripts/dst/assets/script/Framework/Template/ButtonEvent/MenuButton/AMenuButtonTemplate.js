
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/ButtonEvent/MenuButton/AMenuButtonTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60ef65VXjdGTK3Kqwe0sLxf', 'AMenuButtonTemplate');
// script/Framework/Template/ButtonEvent/MenuButton/AMenuButtonTemplate.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMethod_1 = require("../../../GlobalMethod/ButtonMethod");
var AMenuButtonEvent_1 = require("./AMenuButtonEvent");
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,場景方向單向,按鈕事件監聽綁定
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
var AMenuButtonTemplate = /** @class */ (function (_super) {
    __extends(AMenuButtonTemplate, _super);
    function AMenuButtonTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMenuButtonTemplate.prototype.onLoad = function () {
        ButtonMethod_1.default.addButtonEvent(this.musicButton, "musicEvent", this);
    };
    return AMenuButtonTemplate;
}(AMenuButtonEvent_1.default));
exports.default = AMenuButtonTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxCdXR0b25FdmVudFxcTWVudUJ1dHRvblxcQU1lbnVCdXR0b25UZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBNkQ7QUFDN0QsdURBQWlEO0FBRWpEOzs7OztHQUtHO0FBQ0g7SUFBMEQsdUNBQWdCO0lBQTFFOztJQXlCQSxDQUFDO0lBUGEsb0NBQU0sR0FBaEI7UUFFSSxzQkFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUV0RSxDQUFDO0lBR0wsMEJBQUM7QUFBRCxDQXpCQSxBQXlCQyxDQXpCeUQsMEJBQWdCLEdBeUJ6RSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25NZXRob2QgZnJvbSAnLi4vLi4vLi4vR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZCdcclxuaW1wb3J0IEFNZW51QnV0dG9uRXZlbnQgZnJvbSAnLi9BTWVudUJ1dHRvbkV2ZW50J1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uICjmir3osaHpoZ4pTUVOVeS4u+mggemdoizloLTmma/mlrnlkJHllq7lkJEs5oyJ6YiV5LqL5Lu255uj6IG957aB5a6aXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjYg5LiK5Y2IIDE1OjU5XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQU1lbnVCdXR0b25UZW1wbGF0ZSBleHRlbmRzIEFNZW51QnV0dG9uRXZlbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBtdXNpY0J1dHRvbjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGVmZmVjdEJ1dHRvbjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGJldFVwQnV0dG9uOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYmV0RG93bkJ1dHRvbjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG9CdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRvNTBCdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBhdXRvMTAwQnV0dG9uOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0bzUwMEJ1dHRvbjogY2MuQnV0dG9uO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGF1dG8xMDAwQnV0dG9uOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXV0b0ZyZWVFbmRCdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnb2JhY2tCdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnb0hvbWVCdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCByZWNvcmRCdXR0b246IGNjLkJ1dHRvbjtcclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBzZXR0aW5nQnV0dG9uOiBjYy5CdXR0b247XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgZGVzY3JpcHRpb25QYWdlQnV0dG9uOiBjYy5CdXR0b247XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KHRoaXMubXVzaWNCdXR0b24sIFwibXVzaWNFdmVudFwiLCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSJdfQ==