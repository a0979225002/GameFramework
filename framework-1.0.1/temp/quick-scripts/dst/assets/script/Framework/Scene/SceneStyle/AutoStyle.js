
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneStyle/AutoStyle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZVN0eWxlXFxBdXRvU3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBcUQ7QUFDckQsZ0RBQTBDO0FBQzFDLDBHQUFxRztBQUVyRztJQUFBO0lBcUNBLENBQUM7SUFuQ1Usa0NBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLE1BQWM7UUFDL0MsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUU7WUFDcEYsTUFBTTtZQUNOLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RjthQUFNO1lBQ0gsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRTtnQkFDOUQsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUN0RjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRTtvQkFDakYsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDdEY7cUJBQU07b0JBQ0gsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdEYsRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDckY7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELHdDQUFvQixHQUFwQjtRQUNJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDOUQsSUFBSTtZQUNKLElBQUksc0JBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxJQUFJLCtCQUFrQixDQUFDLFFBQVE7Z0JBQUUsT0FBTztZQUNoRixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsK0JBQWtCLENBQUMsUUFBUSxDQUFDO1lBQ25FLDBDQUFnQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsK0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDakY7YUFBTTtZQUNILElBQUk7WUFDSixJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsSUFBSSwrQkFBa0IsQ0FBQyxTQUFTO2dCQUFFLE9BQU87WUFDakYsc0JBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLCtCQUFrQixDQUFDLFNBQVMsQ0FBQztZQUNwRSwwQ0FBZ0MsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLCtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2xGO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tICcuLi9FbnVtL1NjZW5lU3R5bGUnXHJcbmltcG9ydCBTY2VuZU1hbmFnZXIgZnJvbSAnLi4vU2NlbmVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uL1NjZW5lTm90aWZpY2F0aW9uL1NjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRvU3R5bGUgaW1wbGVtZW50cyBJU2NlbmVTdHlsZSB7XHJcblxyXG4gICAgcHVibGljIGV4ZWN1dGlvblN0eWxlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTY2VuZURpcmVjdGlvbigpO1xyXG4gICAgICAgIGlmICgoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSA+PSAod2lkdGggLyBoZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIC8v5a695bqm6LaF5Ye6XHJcbiAgICAgICAgICAgIGxldCBuZXdXaWR0aCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGggKiAod2lkdGggLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCk7XHJcbiAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUobmV3V2lkdGgsIGhlaWdodCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoID4gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXdIZWlnaHQgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLmhlaWdodCAqICh3aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgY2Mudmlldy5zZXREZXNpZ25SZXNvbHV0aW9uU2l6ZSh3aWR0aCwgbmV3SGVpZ2h0LCBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX1dJRFRIKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICgoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSA+PSAoMTAwMCAvIDE3NzcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0hlaWdodCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0ICogKDEwMDAgLyBjYy52aWV3LmdldEZyYW1lU2l6ZSgpLndpZHRoKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy52aWV3LnNldERlc2lnblJlc29sdXRpb25TaXplKDEwMDAsIG5ld0hlaWdodCwgY2MuUmVzb2x1dGlvblBvbGljeS5GSVhFRF9IRUlHSFQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgKiAoMTAwMCAvIGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkud2lkdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnZpZXcuc2V0RGVzaWduUmVzb2x1dGlvblNpemUoMTAwMCwgbmV3SGVpZ2h0LCBjYy5SZXNvbHV0aW9uUG9saWN5LkZJWEVEX1dJRFRIKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTY2VuZURpcmVjdGlvbigpIHtcclxuICAgICAgICBpZiAoY2Mudmlldy5nZXRGcmFtZVNpemUoKS53aWR0aCA8IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIC8v55u05ZCRXHJcbiAgICAgICAgICAgIGlmIChTY2VuZU1hbmFnZXIuaW5zdGFuY2Uuc2NlbmVEaXJlY3Rpb24gPT0gU2NlbmVEaXJlY3Rpb25UeXBlLlBPUlRSQUlUKSByZXR1cm47XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbiA9IFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVDtcclxuICAgICAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy/mqavlkJFcclxuICAgICAgICAgICAgaWYgKFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbiA9PSBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKSByZXR1cm47XHJcbiAgICAgICAgICAgIFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbiA9IFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU7XHJcbiAgICAgICAgICAgIFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLm5vdGlmeShTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=