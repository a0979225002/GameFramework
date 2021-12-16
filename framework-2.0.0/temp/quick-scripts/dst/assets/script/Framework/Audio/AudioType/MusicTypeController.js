
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/AudioType/MusicTypeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxBdWRpb1R5cGVcXE11c2ljVHlwZUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMkQ7QUFDM0QseURBQW1EO0FBQ25ELHFFQUErRDtBQUUvRCxJQUFLLGNBSUo7QUFKRCxXQUFLLGNBQWM7SUFDZixvREFBUyxDQUFBO0lBQ1QseURBQVcsQ0FBQTtJQUNYLHFEQUFTLENBQUE7QUFDYixDQUFDLEVBSkksY0FBYyxLQUFkLGNBQWMsUUFJbEI7QUFFRDs7Ozs7R0FLRztBQUNIO0lBSUk7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLGtDQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBc0I7UUFFNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFZLElBQUk7UUFDeEQsSUFBSSxJQUFJLEdBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFlLE1BQU07UUFFMUQsa0NBQWtDO1FBQ2xDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUssSUFBSSw0SEFBK0IsQ0FBQyxDQUFDO1lBQzlGLE9BQU87U0FDVjtRQUVELGlCQUFpQjtRQUNqQixJQUFJLEtBQUssSUFBSSxjQUFjLENBQUMsS0FBSyxFQUFFO1lBQy9CLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxPQUFPO1NBQ1Y7UUFFRCxtQkFBbUI7UUFDbkIsSUFBRyxLQUFLLElBQUksY0FBYyxDQUFDLE9BQU8sRUFBQztZQUMvQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtRQUVELElBQUksU0FBUyxHQUFHLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBSSxHQUFYO1FBRUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksbUNBQUssR0FBWjtRQUNJLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPO1FBQ3ZELEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTVEQSxBQTREQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi8uLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tICcuLi8uLi9Mb2FkUmVzb3VyY2VzL0xvYWRSZXNNYW5hZ2VyJ1xyXG5cclxuZW51bSBNdXNpY1N0YXRlVHlwZXtcclxuICAgIFNUT1AgPSAtMSwgICAgICAvL+eEoeaSpeaUvlxyXG4gICAgUExBWUlORyA9IDEsICAgIC8v5pKl5pS+5LitXHJcbiAgICBQQVVTRSA9IDIsICAgICAgLy/mmqvlgZzkuK1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOmfs+aoguaSpeaUvnzmmqvlgZzmjqfliLblmags6Lef6Z+z5pWI6aGe56iN5b6u5LiN5ZCMLOWPquS/neWtmOeVtuS4i+S4gOWAi011c2ljSURcclxuICogQERhdGUgMjAyMS0wNC0xNCDkuIvljYggMjA6MjRcclxuICogQFZlcnNpb24gMS4xXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdXNpY1R5cGVDb250cm9sbGVyIGltcGxlbWVudHMgSUF1ZGlvVHlwZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBtdXNpY0lEOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY0lEID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSpeaUvuiDjOaZr+mfs+aogizkuKbphY3lkIjkuqvlhYPos4fmlpks5L2c55u45bCN5oeJ55qE5pKl5pS+5qih5byP6JmV55CGXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHBhcmFtIHtNYXA8c3RyaW5nLCBhbnk+fSBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5KG5hbWU6IHN0cmluZywgZGF0YTogTWFwPHN0cmluZywgYW55Pikge1xyXG5cclxuICAgICAgICBsZXQgdm9sdW1lOiBudW1iZXIgPSBkYXRhLmdldChcInZvbHVtZVwiKTsgICAgICAgICAgICAvL+mfs+mHj1xyXG4gICAgICAgIGxldCBsb29wOiBib29sZWFuID0gZGF0YS5nZXQoXCJsb29wXCIpOyAgICAgICAgICAgICAgIC8v5piv5ZCm5b6q55KwXHJcblxyXG4gICAgICAgIC8v542y5Y+W55W25YmN6Z+z5qiC5pKl5pS+54uA5oWLLC0xIOeEoeaSpeaUviAsIDEg5pKl5pS+5LitICAyIOaaq+WBnOS4rVxyXG4gICAgICAgIGxldCBzdGF0ZTogbnVtYmVyID0gY2MuYXVkaW9FbmdpbmUuZ2V0U3RhdGUodGhpcy5tdXNpY0lEKTtcclxuXHJcbiAgICAgICAgaWYgKCFMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5tdXNpY1Jlcy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTXVzaWNGVywgYCR7bmFtZX0g54Sh5q2k6LOH5rqQLOiri+aqouWvn+izh+a6kOmhniBtdXNpY1Jlc+WFp+eahOizh+a6kOaYr+WQpumMr+iqpGApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+WmguaenOipsumfs+aoguaYr+aaq+WBnOaooeW8jyzlm57lvqnmkqXmlL5cclxuICAgICAgICBpZiAoc3RhdGUgPT0gTXVzaWNTdGF0ZVR5cGUuUEFVU0UpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNJRCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5aaC5p6c5LiK5LiA6aaW6IOM5pmv6Z+z5qiC5q2j5Zyo5pKl5pS+LOWFiOaaq+WBnFxyXG4gICAgICAgIGlmKHN0YXRlID09IE11c2ljU3RhdGVUeXBlLlBMQVlJTkcpe1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdWRpb0NsaXAgPSBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5tdXNpY1Jlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgbGV0IG11c2ljSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoYXVkaW9DbGlwLCBsb29wKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUobXVzaWNJRCwgdm9sdW1lKTtcclxuICAgICAgICB0aGlzLm11c2ljSUQgPSBtdXNpY0lEO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICrlgZzmraLog4zmma/pn7PmqIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLm11c2ljSUQsIDApO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5tdXNpY0lEKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmqvlgZzog4zmma/pn7PmqIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBhdXNlKCkge1xyXG4gICAgICAgIGlmIChjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZSh0aGlzLm11c2ljSUQpICE9IDEpIHJldHVybjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSUQpO1xyXG4gICAgfVxyXG59Il19