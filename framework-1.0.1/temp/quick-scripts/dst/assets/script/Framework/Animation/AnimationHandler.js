
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Animation/AnimationHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEFuaW1hdGlvblxcQW5pbWF0aW9uSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUFpRDtBQUVqRDtJQUFBO0lBaUJBLENBQUM7SUFmRzs7Ozs7T0FLRztJQUNILG1EQUF3QixHQUF4QixVQUF5QixPQUFlLEVBQUUsT0FBZSxFQUFFLFNBQWlCO1FBRXhFLDBCQUFnQjthQUNYLFFBQVE7YUFDUixTQUFTO2FBQ1QsR0FBRyxDQUFDLE9BQU8sRUFDUixJQUFJLEdBQUcsRUFBa0IsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFFOUQsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gJy4vQW5pbWF0aW9uTWFuYWdlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hdGlvbkhhbmRsZXIgaW1wbGVtZW50cyBJQW5pbWF0aW9uSGFuZGxlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDli5XnlavnrqHnkIblmajlhafnmoRzcGluZU5hbWXmlbjmk5pcclxuICAgICAqIEBwYXJhbSByZXNOYW1lXHJcbiAgICAgKiBAcGFyYW0ga2V5TmFtZVxyXG4gICAgICogQHBhcmFtIHNwaW5lTmFtZVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVTcGluZUFuaW1hdGlvbk5hbWUocmVzTmFtZTogc3RyaW5nLCBrZXlOYW1lOiBzdHJpbmcsIHNwaW5lTmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIEFuaW1hdGlvbk1hbmFnZXJcclxuICAgICAgICAgICAgLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC5zcGluZU5hbWVcclxuICAgICAgICAgICAgLnNldChyZXNOYW1lLFxyXG4gICAgICAgICAgICAgICAgbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKS5zZXQoa2V5TmFtZSwgc3BpbmVOYW1lKSlcclxuXHJcbiAgICB9XHJcbn1cclxuIl19