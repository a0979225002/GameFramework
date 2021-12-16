"use strict";
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