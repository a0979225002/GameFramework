"use strict";
cc._RF.push(module, '7772968yTdIX6DOToTHWFkH', 'SceneStyleHandler');
// script/Framework/Scene/SceneStyleHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneStyle_1 = require("./Enum/SceneStyle");
var AutoStyle_1 = require("./SceneStyle/AutoStyle");
var HorizontalStyle_1 = require("./SceneStyle/HorizontalStyle");
var VerticalStyle_1 = require("./SceneStyle/VerticalStyle");
var SceneStyleHandler = /** @class */ (function () {
    function SceneStyleHandler() {
        this.autoStyle = new AutoStyle_1.default();
        this.horizontalStyle = new HorizontalStyle_1.default();
        this.verticalStyle = new VerticalStyle_1.default();
    }
    SceneStyleHandler.prototype.getStyle = function (sceneStyle, width, height) {
        switch (sceneStyle) {
            case SceneStyle_1.SceneStyle.AUTO:
                this.autoStyle.executionStyle(width, height);
                break;
            case SceneStyle_1.SceneStyle.Horizontal:
                this.horizontalStyle.executionStyle(width, height);
                break;
            case SceneStyle_1.SceneStyle.Vertical:
                this.verticalStyle.executionStyle(width, height);
                break;
            default:
                sceneStyle.executionStyle(width, height);
        }
    };
    return SceneStyleHandler;
}());
exports.default = SceneStyleHandler;

cc._RF.pop();