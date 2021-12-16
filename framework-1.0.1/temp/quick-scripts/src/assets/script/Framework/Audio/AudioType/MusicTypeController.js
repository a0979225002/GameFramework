"use strict";
cc._RF.push(module, '5ea5aEZFJxNq5pB2xharTxv', 'MusicTypeController');
// script/Framework/Audio/AudioType/MusicTypeController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var LoadResManager_1 = require("../../LoadResources/LoadResManager");
var MusicStateType;
(function (MusicStateType) {
    MusicStateType[MusicStateType["STOP"] = -1] = "STOP";
    MusicStateType[MusicStateType["PLAYING"] = 1] = "PLAYING";
    MusicStateType[MusicStateType["PAUSE"] = 2] = "PAUSE";
})(MusicStateType || (MusicStateType = {}));
/**
 * @Author XIAO-LI-PIN
 * @Description 音樂撥放|暫停控制器,跟音效類稍微不同,只保存當下一個MusicID
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
var MusicTypeController = /** @class */ (function () {
    function MusicTypeController() {
        this.musicID = null;
    }
    /**
     * 撥放背景音樂,並配合享元資料,作相對應的撥放模式處理
     * @param {string} name
     * @param {Map<string, any>} data
     */
    MusicTypeController.prototype.play = function (name, data) {
        var volume = data.get("volume"); //音量
        var loop = data.get("loop"); //是否循環
        //獲取當前音樂撥放狀態,-1 無撥放 , 1 撥放中  2 暫停中
        var state = cc.audioEngine.getState(this.musicID);
        if (!LoadResManager_1.default.instance.musicRes.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.MusicFW, name + " \u7121\u6B64\u8CC7\u6E90,\u8ACB\u6AA2\u5BDF\u8CC7\u6E90\u985E musicRes\u5167\u7684\u8CC7\u6E90\u662F\u5426\u932F\u8AA4");
            return;
        }
        //如果該音樂是暫停模式,回復撥放
        if (state == MusicStateType.PAUSE) {
            cc.audioEngine.resume(this.musicID);
            return;
        }
        //如果上一首背景音樂正在撥放,先暫停
        if (state == MusicStateType.PLAYING) {
            this.stop();
        }
        var audioClip = LoadResManager_1.default.instance.musicRes.get(name);
        var musicID = cc.audioEngine.playMusic(audioClip, loop);
        cc.audioEngine.setVolume(musicID, volume);
        this.musicID = musicID;
    };
    /**
     *停止背景音樂
     */
    MusicTypeController.prototype.stop = function () {
        cc.audioEngine.setVolume(this.musicID, 0);
        cc.audioEngine.stop(this.musicID);
    };
    /**
     * 暫停背景音樂
     */
    MusicTypeController.prototype.pause = function () {
        if (cc.audioEngine.getState(this.musicID) != 1)
            return;
        cc.audioEngine.pause(this.musicID);
    };
    return MusicTypeController;
}());
exports.default = MusicTypeController;

cc._RF.pop();