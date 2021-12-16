"use strict";
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