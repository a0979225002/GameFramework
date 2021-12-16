
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/AudioType/EffectTypeController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '732398imjVCs4f6Li6Tp+mf', 'EffectTypeController');
// script/Framework/Audio/AudioType/EffectTypeController.ts

"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var LoadResManager_1 = require("../../LoadResources/LoadResManager");
var AudioStateType_1 = require("../Enum/AudioStateType");
/**
 * @Author XIAO-LI-PIN
 * @Description 效果音效撥放|暫停控制器
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
var EffectTypeController = /** @class */ (function () {
    function EffectTypeController() {
        this.effectID = new Map();
    }
    /**
     * 撥放效果音效,並配合享元資料,作相對應的撥放模式處理
     * @param {string} name
     * @param {Map<string, any>} data : 撥放模式資料
     */
    EffectTypeController.prototype.play = function (name, data) {
        var volume = data.get("volume"); //音量
        var canSuperimpose = data.get("canSuperimpose"); //可否疊加撥放
        var loop = data.get("loop"); //循環狀態
        var id = this.effectID.get(name); //該音樂ID
        var state;
        cc.audioEngine.getState(id) == -1 ? state = false : state = true; //判斷該音樂是否在正撥放
        if (!LoadResManager_1.default.instance.musicRes.has(name)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.MusicFW, name + " \u7121\u6B64\u8CC7\u6E90,\u8ACB\u6AA2\u5BDF\u8CC7\u6E90\u985E musicRes\u5167\u7684\u8CC7\u6E90\u662F\u5426\u932F\u8AA4");
            return;
        }
        if (canSuperimpose === AudioStateType_1.AudioStateType.NOT_PLAYING && state)
            return; //如果當前正在撥放,將直接離開
        if (canSuperimpose === AudioStateType_1.AudioStateType.CLEAR_TO_REPLAY && state) { //如果當前正在撥放,將直接停止正在撥放的音樂,並重新撥放
            cc.audioEngine.stop(id);
        }
        var audioClip = LoadResManager_1.default.instance.musicRes.get(name);
        var effID = cc.audioEngine.playEffect(audioClip, loop);
        cc.audioEngine.setVolume(effID, volume);
        this.effectID.set(name, effID);
    };
    /**
     * 停止該音樂,並清除該Map effectID
     * @param {string} name
     */
    EffectTypeController.prototype.stop = function (name) {
        if (!this.effectID.has(name)) {
            return;
        }
        cc.audioEngine.stop(this.effectID.get(name));
        this.effectID.delete(name);
    };
    /**
     * 停止所有音效,並清除整個Map effectID
     */
    EffectTypeController.prototype.stopAll = function () {
        var e_1, _a;
        try {
            for (var _b = __values(this.effectID.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                cc.audioEngine.stop(this.effectID.get(key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.effectID.clear();
    };
    return EffectTypeController;
}());
exports.default = EffectTypeController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxBdWRpb1R5cGVcXEVmZmVjdFR5cGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMkQ7QUFDM0QseURBQW1EO0FBQ25ELHFFQUErRDtBQUMvRCx5REFBc0Q7QUFFdEQ7Ozs7O0dBS0c7QUFDSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLG1DQUFJLEdBQVgsVUFBWSxJQUFZLEVBQUUsSUFBc0I7UUFFNUMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUE0QixJQUFJO1FBQ3hFLElBQUksY0FBYyxHQUFtQixJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBSSxRQUFRO1FBQzVFLElBQUksSUFBSSxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBK0IsTUFBTTtRQUMxRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFtQyxPQUFPO1FBQzNFLElBQUksS0FBYyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUcsYUFBYTtRQUVqRixJQUFJLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUssSUFBSSw0SEFBK0IsQ0FBQyxDQUFDO1lBQzlGLE9BQU87U0FDVjtRQUVELElBQUksY0FBYyxLQUFLLCtCQUFjLENBQUMsV0FBVyxJQUFJLEtBQUs7WUFBRSxPQUFPLENBQUUsZ0JBQWdCO1FBRXJGLElBQUksY0FBYyxLQUFLLCtCQUFjLENBQUMsZUFBZSxJQUFJLEtBQUssRUFBRSxFQUFJLDZCQUE2QjtZQUM3RixFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtRQUVELElBQUksU0FBUyxHQUFHLHdCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG1DQUFJLEdBQVgsVUFBWSxJQUFZO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMxQixPQUFPO1NBQ1Y7UUFDRCxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRDs7T0FFRztJQUNJLHNDQUFPLEdBQWQ7OztZQUVJLEtBQWdCLElBQUEsS0FBQSxTQUFBLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWpDLElBQUksR0FBRyxXQUFBO2dCQUVSLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFFL0M7Ozs7Ozs7OztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FqRUEsQUFpRUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tICcuLi8uLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW0nXHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSAnLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyJ1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSAnLi4vLi4vTG9hZFJlc291cmNlcy9Mb2FkUmVzTWFuYWdlcidcclxuaW1wb3J0IHtBdWRpb1N0YXRlVHlwZX0gZnJvbSBcIi4uL0VudW0vQXVkaW9TdGF0ZVR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDmlYjmnpzpn7PmlYjmkqXmlL585pqr5YGc5o6n5Yi25ZmoXHJcbiAqIEBEYXRlIDIwMjEtMDQtMTQg5LiL5Y2IIDIwOjI0XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWZmZWN0VHlwZUNvbnRyb2xsZXIgaW1wbGVtZW50cyBJQXVkaW9UeXBlIHtcclxuXHJcbiAgICBwcml2YXRlIGVmZmVjdElEOiBNYXA8c3RyaW5nLCBudW1iZXI+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuZWZmZWN0SUQgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKl5pS+5pWI5p6c6Z+z5pWILOS4pumFjeWQiOS6q+WFg+izh+aWmSzkvZznm7jlsI3mh4nnmoTmkqXmlL7mqKHlvI/omZXnkIZcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIGFueT59IGRhdGEgOiDmkqXmlL7mqKHlvI/os4fmlplcclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXkobmFtZTogc3RyaW5nLCBkYXRhOiBNYXA8c3RyaW5nLCBhbnk+KSB7XHJcblxyXG4gICAgICAgIGxldCB2b2x1bWU6IG51bWJlciA9IGRhdGEuZ2V0KFwidm9sdW1lXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+mfs+mHj1xyXG4gICAgICAgIGxldCBjYW5TdXBlcmltcG9zZTogQXVkaW9TdGF0ZVR5cGUgPSBkYXRhLmdldChcImNhblN1cGVyaW1wb3NlXCIpOyAgICAvL+WPr+WQpueWiuWKoOaSpeaUvlxyXG4gICAgICAgIGxldCBsb29wOiBib29sZWFuID0gZGF0YS5nZXQoXCJsb29wXCIpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+W+queSsOeLgOaFi1xyXG4gICAgICAgIGxldCBpZCA9IHRoaXMuZWZmZWN0SUQuZ2V0KG5hbWUpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/oqbLpn7PmqIJJRFxyXG4gICAgICAgIGxldCBzdGF0ZTogYm9vbGVhbjtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5nZXRTdGF0ZShpZCkgPT0gLTEgPyBzdGF0ZSA9IGZhbHNlIDogc3RhdGUgPSB0cnVlOyAgIC8v5Yik5pa36Kmy6Z+z5qiC5piv5ZCm5Zyo5q2j5pKl5pS+XHJcblxyXG4gICAgICAgIGlmICghTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UubXVzaWNSZXMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLk11c2ljRlcsIGAke25hbWV9IOeEoeatpOizh+a6kCzoq4vmqqLlr5/os4fmupDpoZ4gbXVzaWNSZXPlhafnmoTos4fmupDmmK/lkKbpjK/oqqRgKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhblN1cGVyaW1wb3NlID09PSBBdWRpb1N0YXRlVHlwZS5OT1RfUExBWUlORyAmJiBzdGF0ZSkgcmV0dXJuOyAgLy/lpoLmnpznlbbliY3mraPlnKjmkqXmlL4s5bCH55u05o6l6Zui6ZaLXHJcblxyXG4gICAgICAgIGlmIChjYW5TdXBlcmltcG9zZSA9PT0gQXVkaW9TdGF0ZVR5cGUuQ0xFQVJfVE9fUkVQTEFZICYmIHN0YXRlKSB7ICAgLy/lpoLmnpznlbbliY3mraPlnKjmkqXmlL4s5bCH55u05o6l5YGc5q2i5q2j5Zyo5pKl5pS+55qE6Z+z5qiCLOS4pumHjeaWsOaSpeaUvlxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBhdWRpb0NsaXAgPSBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5tdXNpY1Jlcy5nZXQobmFtZSk7XHJcbiAgICAgICAgbGV0IGVmZklEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChhdWRpb0NsaXAsIGxvb3ApO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShlZmZJRCwgdm9sdW1lKTtcclxuICAgICAgICB0aGlzLmVmZmVjdElELnNldChuYW1lLCBlZmZJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLoqbLpn7PmqIIs5Lim5riF6Zmk6KmyTWFwIGVmZmVjdElEXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcChuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmVmZmVjdElELmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5lZmZlY3RJRC5nZXQobmFtZSkpO1xyXG4gICAgICAgIHRoaXMuZWZmZWN0SUQuZGVsZXRlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i5omA5pyJ6Z+z5pWILOS4pua4hemZpOaVtOWAi01hcCBlZmZlY3RJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIHRoaXMuZWZmZWN0SUQua2V5cygpKSB7XHJcblxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuZWZmZWN0SUQuZ2V0KGtleSkpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0SUQuY2xlYXIoKTtcclxuICAgIH1cclxufSJdfQ==