"use strict";
cc._RF.push(module, '695a8JbU0hAWYWSQIjurla7', 'AutoStyle');
// script/Framework/Scene/SceneStyle/AutoStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SceneStyle_1 = require("../Enum/SceneStyle");
var SceneManager_1 = require("../SceneManager");
var SceneDirectionChangeNotification_1 = require("../SceneNotification/SceneDirectionChangeNotification");
var AutoStyle = /** @class */ (function () {
    function AutoStyle() {
    }
    AutoStyle.prototype.executionStyle = function (width, height) {
        this.updateSceneDirection();
        if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (width / height)) {
            //宽度超出
            var newWidth = cc.view.getFrameSize().width * (width / cc.view.getFrameSize().height);
            cc.view.setDesignResolutionSize(newWidth, height, cc.ResolutionPolicy.FIXED_HEIGHT);
        }
        else {
            if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
                var newHeight = cc.view.getFrameSize().height * (width / cc.view.getFrameSize().width);
                cc.view.setDesignResolutionSize(width, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
            }
            else {
                if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (1000 / 1777)) {
                    var newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                    cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
                }
                else {
                    var newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                    cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                }
            }
        }
    };
    AutoStyle.prototype.updateSceneDirection = function () {
        if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
            //直向
            if (SceneManager_1.default.instance.sceneDirection == SceneStyle_1.SceneDirectionType.PORTRAIT)
                return;
            SceneManager_1.default.instance.sceneDirection = SceneStyle_1.SceneDirectionType.PORTRAIT;
            SceneDirectionChangeNotification_1.default.instance.notify(SceneStyle_1.SceneDirectionType.PORTRAIT);
        }
        else {
            //橫向
            if (SceneManager_1.default.instance.sceneDirection == SceneStyle_1.SceneDirectionType.LANDSCAPE)
                return;
            SceneManager_1.default.instance.sceneDirection = SceneStyle_1.SceneDirectionType.LANDSCAPE;
            SceneDirectionChangeNotification_1.default.instance.notify(SceneStyle_1.SceneDirectionType.LANDSCAPE);
        }
    };
    return AutoStyle;
}());
exports.default = AutoStyle;

cc._RF.pop();