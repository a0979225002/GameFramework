"use strict";
cc._RF.push(module, '8732c1rB/1JjK47V10EItbT', 'SceneStyle');
// script/Framework/Scene/Enum/SceneStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneDirectionType = exports.SceneStyle = void 0;
var SceneStyle;
(function (SceneStyle) {
    SceneStyle["AUTO"] = "AUTO";
    SceneStyle["Horizontal"] = "Horizontal";
    SceneStyle["Vertical"] = "Vertical";
})(SceneStyle || (SceneStyle = {}));
exports.SceneStyle = SceneStyle;
var SceneDirectionType;
(function (SceneDirectionType) {
    /**
     * 直向
     * @type {SceneDirectionType.PORTRAIT}
     */
    SceneDirectionType["PORTRAIT"] = "PORTRAIT";
    /**
     * 橫向
     * @type {SceneDirectionType.LANDSCAPE}
     */
    SceneDirectionType["LANDSCAPE"] = "LANDSCAPE";
})(SceneDirectionType = exports.SceneDirectionType || (exports.SceneDirectionType = {}));

cc._RF.pop();