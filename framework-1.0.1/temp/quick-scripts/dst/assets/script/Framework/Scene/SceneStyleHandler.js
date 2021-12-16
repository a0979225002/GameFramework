
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneStyleHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZVN0eWxlSGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE0QztBQUM1QyxvREFBOEM7QUFDOUMsZ0VBQTBEO0FBQzFELDREQUFzRDtBQUV0RDtJQU1JO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG1CQUFTLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUkseUJBQWUsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx1QkFBYSxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFRLEdBQVIsVUFBUyxVQUFvQyxFQUFFLEtBQWEsRUFBRSxNQUFjO1FBQ3hFLFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssdUJBQVUsQ0FBQyxJQUFJO2dCQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFDVixLQUFLLHVCQUFVLENBQUMsVUFBVTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO2dCQUNsRCxNQUFNO1lBQ1YsS0FBSyx1QkFBVSxDQUFDLFFBQVE7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDakQsTUFBTTtZQUNWO2dCQUNJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NlbmVTdHlsZX0gZnJvbSAnLi9FbnVtL1NjZW5lU3R5bGUnXHJcbmltcG9ydCBBdXRvU3R5bGUgZnJvbSAnLi9TY2VuZVN0eWxlL0F1dG9TdHlsZSdcclxuaW1wb3J0IEhvcml6b250YWxTdHlsZSBmcm9tICcuL1NjZW5lU3R5bGUvSG9yaXpvbnRhbFN0eWxlJ1xyXG5pbXBvcnQgVmVydGljYWxTdHlsZSBmcm9tICcuL1NjZW5lU3R5bGUvVmVydGljYWxTdHlsZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjZW5lU3R5bGVIYW5kbGVyIHtcclxuXHJcbiAgICBwcml2YXRlIGF1dG9TdHlsZTogQXV0b1N0eWxlO1xyXG4gICAgcHJpdmF0ZSBob3Jpem9udGFsU3R5bGU6IEhvcml6b250YWxTdHlsZTtcclxuICAgIHByaXZhdGUgdmVydGljYWxTdHlsZTogVmVydGljYWxTdHlsZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmF1dG9TdHlsZSA9IG5ldyBBdXRvU3R5bGUoKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxTdHlsZSA9IG5ldyBIb3Jpem9udGFsU3R5bGUoKTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsU3R5bGUgPSBuZXcgVmVydGljYWxTdHlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0eWxlKHNjZW5lU3R5bGU6IFNjZW5lU3R5bGUgfCBJU2NlbmVTdHlsZSwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICBzd2l0Y2ggKHNjZW5lU3R5bGUpIHtcclxuICAgICAgICAgICAgY2FzZSBTY2VuZVN0eWxlLkFVVE86XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9TdHlsZS5leGVjdXRpb25TdHlsZSh3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lU3R5bGUuSG9yaXpvbnRhbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbFN0eWxlLmV4ZWN1dGlvblN0eWxlKHdpZHRoLCBoZWlnaHQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTY2VuZVN0eWxlLlZlcnRpY2FsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFN0eWxlLmV4ZWN1dGlvblN0eWxlKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgc2NlbmVTdHlsZS5leGVjdXRpb25TdHlsZSh3aWR0aCxoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==