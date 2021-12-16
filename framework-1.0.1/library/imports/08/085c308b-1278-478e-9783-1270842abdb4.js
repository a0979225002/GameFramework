"use strict";
cc._RF.push(module, '085c3CLEnhHjpeDEnCEKr20', 'VerticalStyle');
// script/Framework/Scene/SceneStyle/VerticalStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManager_1 = require("../../Error/ErrorManager");
var VerticalStyle = /** @class */ (function () {
    function VerticalStyle() {
    }
    VerticalStyle.prototype.executionStyle = function (width, height) {
        ErrorManager_1.default.instance.executeError("尚未完成直向是配模式");
    };
    return VerticalStyle;
}());
exports.default = VerticalStyle;

cc._RF.pop();