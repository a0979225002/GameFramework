
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/Enum/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7bf204lZ1VGcY774jWN1AD+', 'GameState');
// script/Framework/Process/Enum/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameType = exports.GameState = void 0;
var GameState;
(function (GameState) {
    /**
     * 無狀態,待機狀態...
     * @type {GameState.STANDBY}
     */
    GameState["STANDBY"] = "STANDBY";
    /**
     * 一般狀態遊戲中....
     * @type {GameState.PLAYING}
     */
    GameState["PLAYING"] = "PLAYING";
    /**
     * 免費遊戲中....
     * @type {GameState.FREEING}
     */
    GameState["FREEING"] = "FREEING";
})(GameState = exports.GameState || (exports.GameState = {}));
var GameType;
(function (GameType) {
    GameType["FREE"] = "FREE";
    GameType["NORMAL"] = "NORMAL";
})(GameType = exports.GameType || (exports.GameType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEVudW1cXEdhbWVTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBb0JYO0FBcEJELFdBQVksU0FBUztJQUVqQjs7O09BR0c7SUFDSCxnQ0FBbUIsQ0FBQTtJQUVuQjs7O09BR0c7SUFDSCxnQ0FBbUIsQ0FBQTtJQUVuQjs7O09BR0c7SUFDSCxnQ0FBbUIsQ0FBQTtBQUV2QixDQUFDLEVBcEJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBb0JwQjtBQUVELElBQVksUUFHWDtBQUhELFdBQVksUUFBUTtJQUNoQix5QkFBYSxDQUFBO0lBQ2IsNkJBQWlCLENBQUE7QUFDckIsQ0FBQyxFQUhXLFFBQVEsR0FBUixnQkFBUSxLQUFSLGdCQUFRLFFBR25CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gR2FtZVN0YXRlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeEoeeLgOaFiyzlvoXmqZ/ni4DmhYsuLi5cclxuICAgICAqIEB0eXBlIHtHYW1lU3RhdGUuU1RBTkRCWX1cclxuICAgICAqL1xyXG4gICAgU1RBTkRCWSA9ICdTVEFOREJZJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOeLgOaFi+mBiuaIsuS4rS4uLi5cclxuICAgICAqIEB0eXBlIHtHYW1lU3RhdGUuUExBWUlOR31cclxuICAgICAqL1xyXG4gICAgUExBWUlORyA9ICdQTEFZSU5HJyxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWFjeiyu+mBiuaIsuS4rS4uLi5cclxuICAgICAqIEB0eXBlIHtHYW1lU3RhdGUuRlJFRUlOR31cclxuICAgICAqL1xyXG4gICAgRlJFRUlORyA9ICdGUkVFSU5HJyxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVUeXBlIHtcclxuICAgIEZSRUUgPSAnRlJFRScsXHJcbiAgICBOT1JNQUwgPSAnTk9STUFMJyxcclxufSJdfQ==