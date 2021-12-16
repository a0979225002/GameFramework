"use strict";
cc._RF.push(module, 'd57072sK4dP45zBGf38Br8I', 'AnimationHandler');
// script/Framework/Animation/AnimationHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AnimationManager_1 = require("./AnimationManager");
var AnimationHandler = /** @class */ (function () {
    function AnimationHandler() {
    }
    /**
     * 更新動畫管理器內的spineName數據
     * @param resName
     * @param keyName
     * @param spineName
     */
    AnimationHandler.prototype.updateSpineAnimationName = function (resName, keyName, spineName) {
        AnimationManager_1.default
            .instance
            .spineName
            .set(resName, new Map().set(keyName, spineName));
    };
    return AnimationHandler;
}());
exports.default = AnimationHandler;

cc._RF.pop();