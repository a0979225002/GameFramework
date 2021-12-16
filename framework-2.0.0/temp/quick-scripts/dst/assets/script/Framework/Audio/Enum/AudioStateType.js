
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/Enum/AudioStateType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1548kB1lFCa62IDugu8MmB', 'AudioStateType');
// script/Framework/Audio/Enum/AudioStateType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioStateType = void 0;
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-13 上午 10:24
 * @Version 1.0
 */
var AudioStateType;
(function (AudioStateType) {
    /**
     *檢測到該音樂正在撥放時,清除正在撥放的音樂,後重新播放該音樂
     * @type {AudioStateType.CLEAR_TO_REPLAY}
     */
    AudioStateType["CLEAR_TO_REPLAY"] = "CLEAR_TO_REPLAY";
    /**
     * 檢測到該音樂正在撥放時,不做任何事情
     * @type {AudioStateType.NOT_PLAYING}
     */
    AudioStateType["NOT_PLAYING"] = "NOT_PLAYING";
    /**
     * 檢測到該音樂正在撥放時,將可疊加撥放
     * @type {AudioStateType.SUPERIMPOSE}
     */
    AudioStateType["SUPERIMPOSE"] = "SUPERIMPOSE";
})(AudioStateType = exports.AudioStateType || (exports.AudioStateType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxFbnVtXFxBdWRpb1N0YXRlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNILElBQVksY0FvQlg7QUFwQkQsV0FBWSxjQUFjO0lBRXRCOzs7T0FHRztJQUNILHFEQUFtQyxDQUFBO0lBRW5DOzs7T0FHRztJQUNILDZDQUEyQixDQUFBO0lBRTNCOzs7T0FHRztJQUNILDZDQUEyQixDQUFBO0FBRS9CLENBQUMsRUFwQlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFvQnpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMS0wNS0xMyDkuIrljYggMTA6MjRcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBdWRpb1N0YXRlVHlwZSB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKuaqoua4rOWIsOipsumfs+aoguato+WcqOaSpeaUvuaZgizmuIXpmaTmraPlnKjmkqXmlL7nmoTpn7PmqIIs5b6M6YeN5paw5pKt5pS+6Kmy6Z+z5qiCXHJcbiAgICAgKiBAdHlwZSB7QXVkaW9TdGF0ZVR5cGUuQ0xFQVJfVE9fUkVQTEFZfVxyXG4gICAgICovXHJcbiAgICBDTEVBUl9UT19SRVBMQVkgPSBcIkNMRUFSX1RPX1JFUExBWVwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qqi5ris5Yiw6Kmy6Z+z5qiC5q2j5Zyo5pKl5pS+5pmCLOS4jeWBmuS7u+S9leS6i+aDhVxyXG4gICAgICogQHR5cGUge0F1ZGlvU3RhdGVUeXBlLk5PVF9QTEFZSU5HfVxyXG4gICAgICovXHJcbiAgICBOT1RfUExBWUlORyA9IFwiTk9UX1BMQVlJTkdcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaqoua4rOWIsOipsumfs+aoguato+WcqOaSpeaUvuaZgizlsIflj6/nlorliqDmkqXmlL5cclxuICAgICAqIEB0eXBlIHtBdWRpb1N0YXRlVHlwZS5TVVBFUklNUE9TRX1cclxuICAgICAqL1xyXG4gICAgU1VQRVJJTVBPU0UgPSBcIlNVUEVSSU1QT1NFXCIsXHJcblxyXG59Il19