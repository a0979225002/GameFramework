"use strict";
cc._RF.push(module, 'ec65fTNc35MkIlaDvbrXEEO', 'AudioManager');
// script/Framework/Audio/AudioManager.ts

"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EffectStop = exports.Effect = exports.MusicStop = exports.Music = void 0;
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var AudioFactory_1 = require("./AudioFactory");
var AudioStateType_1 = require("./Enum/AudioStateType");
/**
 * @Author XIAO-LI-PIN
 * @Description 音樂管理器,由Config類 實例化該類,直到程式死亡前,永久存活
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
var AudioManager = /** @class */ (function () {
    function AudioManager(configManager) {
        this.configManager = configManager;
        this.factory = new AudioFactory_1.default();
        this._effectOnMute = this.configManager.isEffectOnMute;
        this._musicOnMute = this.configManager.isMusicOnMute;
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案只有一次產生此class
     */
    AudioManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new AudioManager(configManager);
        }
    };
    Object.defineProperty(AudioManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.MusicFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
     * volume : 默認為 Config 內的音量參數
     * loop : 默認 false
     * @param {string} name : 音樂名稱
     * @param {number} volume : 音量 0~1
     * @param {boolean} loop : 是否重複撥放
     * @return {this}
     */
    AudioManager.prototype.settingMusic = function (name, volume, loop) {
        this.factory.settingMusic(name, volume, loop);
        return this;
    };
    /**
     * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
     * canSuperimpose : 默認 AudioStateType.CLEAR_TO_REPLAY
     * volume : 默認為 Config 內的音量參數
     * loop :默認為 false
     * @param {string} name : 音效檔名
     * @param {AudioStateType} canSuperimpose : 能否疊加
     * @param {number} volume : 音量 0~1
     * @param {boolean} loop : 是否重複撥放
     * @return {this}
     */
    AudioManager.prototype.settingEffect = function (name, canSuperimpose, volume, loop) {
        if (canSuperimpose === AudioStateType_1.AudioStateType.SUPERIMPOSE && loop) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.MusicFW, name + " \u4F7F\u7528\u758A\u52A0\u6548\u679C\u6642\u4E0D\u5EFA\u8B70\u4F7F\u7528\u5FAA\u74B0\u64A5\u653E");
        }
        this.factory.settingEffect(name, canSuperimpose, volume, loop);
        return this;
    };
    /**
     * 撥放音樂,將會依照當初設定的參數進行播放
     * 若無參數設定撥放模式,依照默認參數撥放
     * @param {string} name : 音樂檔名
     */
    AudioManager.prototype.musicPlay = function (name) {
        this.factory.musicPlay(name);
    };
    /**
     * 撥放音效,將會依照當初設定的參數進行播放
     * 若無參數設定撥放模式,依照默認參數撥放
     * @param {string} name : 音效檔名
     */
    AudioManager.prototype.effectPlay = function (name) {
        this.factory.effectPlay(name);
    };
    /**
     * 停止音樂
     */
    AudioManager.prototype.musicStop = function () {
        this.factory.musicStop();
    };
    /**
     * 暫停音樂
     */
    AudioManager.prototype.musicPause = function () {
        this.factory.musicPause();
    };
    /**
     * 停止音效
     * @param {string} name : 音效檔名
     */
    AudioManager.prototype.effectStop = function (name) {
        this.factory.effectStop(name);
    };
    /**
     * 停止所有音效
     */
    AudioManager.prototype.effectStopAll = function () {
        this.factory.effectStopAll();
    };
    /**
     * 獲取撥放的狀態
     * @param {string} name : 音效檔名
     * @return {Map<string, string | boolean | number>} : 撥放設定參數
     */
    AudioManager.prototype.getMusicState = function (name) {
        return this.factory.getMusicState(name);
    };
    /**
     * 獲取撥放的狀態
     * @param {string} name : 音樂檔名
     * @return {Map<string, string | AudioStateType |boolean | number>} : 撥放設定參數
     */
    AudioManager.prototype.getEffectState = function (name) {
        return this.factory.getEffectState(name);
    };
    /**
     * 更新當前是否靜音模式
     * @return {boolean} 當前是否靜音
     */
    AudioManager.prototype.updateEffectOnMute = function () {
        this._effectOnMute = !this._effectOnMute;
        if (this._effectOnMute) {
            this.factory.effectStopAll();
        }
        return this._effectOnMute;
    };
    /**
     * 更新當前是否靜音模式
     * @return {boolean} 當前是否靜音
     */
    AudioManager.prototype.updateMusicOnMute = function () {
        this._musicOnMute = !this._musicOnMute;
        if (this._musicOnMute) {
            this.musicPause();
        }
        return this._musicOnMute;
    };
    Object.defineProperty(AudioManager.prototype, "effectOnMute", {
        /**
         * 當前是否靜音背景音樂
         * @returns {boolean}
         */
        get: function () {
            return this._effectOnMute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AudioManager.prototype, "musicOnMute", {
        /**
         * 當前是否靜音效果音效
         * @returns {boolean}
         */
        get: function () {
            return this._musicOnMute;
        },
        enumerable: false,
        configurable: true
    });
    return AudioManager;
}());
exports.default = AudioManager;
/**
 * 裝飾器
 * 撥放背景音樂
 * @param name {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
function Music(name) {
    return function (target, key, descriptor) {
        descriptor.enumerable = true;
        var method = descriptor.value;
        descriptor.value = function () {
            var any = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                any[_i] = arguments[_i];
            }
            method.call.apply(method, __spread([this], any));
            AudioManager.instance.musicPlay(name);
        };
    };
}
exports.Music = Music;
/**
 * 裝飾器
 * 停止背景音樂
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
function MusicStop() {
    return function (target, key, descriptor) {
        descriptor.enumerable = true;
        var method = descriptor.value;
        descriptor.value = function () {
            var any = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                any[_i] = arguments[_i];
            }
            method.call.apply(method, __spread([this], any));
            return AudioManager.instance.musicStop();
        };
    };
}
exports.MusicStop = MusicStop;
/**
 * 裝飾器
 * 撥放效果音效
 * @param name[] {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
function Effect() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return function (target, key, descriptor) {
        descriptor.enumerable = true;
        var method = descriptor.value;
        descriptor.value = function () {
            var any = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                any[_i] = arguments[_i];
            }
            name.forEach(function (name) {
                AudioManager.instance.effectPlay(name);
            });
            return method.call.apply(method, __spread([this], any));
        };
    };
}
exports.Effect = Effect;
/**
 * 裝飾器
 * 暫停效果音效
 * @param name[] {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
function EffectStop() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    return function (target, key, descriptor) {
        descriptor.enumerable = true;
        var method = descriptor.value;
        descriptor.value = function () {
            var any = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                any[_i] = arguments[_i];
            }
            name.forEach(function (name) {
                AudioManager.instance.effectStop(name);
            });
            return method.call.apply(method, __spread([this], any));
        };
    };
}
exports.EffectStop = EffectStop;

cc._RF.pop();