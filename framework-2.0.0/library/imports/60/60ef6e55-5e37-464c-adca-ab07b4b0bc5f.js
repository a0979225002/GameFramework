"use strict";
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