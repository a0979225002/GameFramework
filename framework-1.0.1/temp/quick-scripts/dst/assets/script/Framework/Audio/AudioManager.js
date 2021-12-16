
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxBdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRUFBd0Q7QUFDeEQsc0RBQWdEO0FBQ2hELCtDQUF5QztBQUN6Qyx3REFBcUQ7QUFHckQ7Ozs7O0dBS0c7QUFDSDtJQVFJLHNCQUFvQixhQUE2QjtRQUU3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksc0JBQVksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDdkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztJQUV6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csd0JBQVcsR0FBekIsVUFBMEIsYUFBNkI7UUFDbkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNwRDtJQUNMLENBQUM7SUFLRCxzQkFBa0Isd0JBQVE7UUFIMUI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ2pFLE9BQU87YUFDVjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksbUNBQVksR0FBbkIsVUFBb0IsSUFBWSxFQUFFLE1BQWUsRUFBRSxJQUFjO1FBRTdELElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksRUFB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dCB7SUNvbmZpZ01hbmFnZXJ9IGZyb20gXCIuLi9Db25maWcvSUNvbmZpZy9JQ29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQge0Vycm9yVHlwZX0gZnJvbSAnLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtJ1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gJy4uL0Vycm9yL0Vycm9yTWFuYWdlcidcclxuaW1wb3J0IEF1ZGlvRmFjdG9yeSBmcm9tICcuL0F1ZGlvRmFjdG9yeSdcclxuaW1wb3J0IHtBdWRpb1N0YXRlVHlwZX0gZnJvbSBcIi4vRW51bS9BdWRpb1N0YXRlVHlwZVwiO1xyXG5pbXBvcnQgSUF1ZGlvTWFuYWdlciBmcm9tIFwiLi9JQXVkaW8vSUF1ZGlvTWFuYWdlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOmfs+aogueuoeeQhuWZqCznlLFDb25maWfpoZ4g5a+m5L6L5YyW6Kmy6aGeLOebtOWIsOeoi+W8j+atu+S6oeWJjSzmsLjkuYXlrZjmtLtcclxuICogQERhdGUgMjAyMS0wNS0xMyDkuIrljYggMTA6MjRcclxuICogQFZlcnNpb24gMS4xXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01hbmFnZXIgaW1wbGVtZW50cyBJQXVkaW9NYW5hZ2VyIHtcclxuXHJcbiAgICBwcml2YXRlIGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJQXVkaW9NYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBmYWN0b3J5OiBBdWRpb0ZhY3Rvcnk7ICAgICAgICAgICAgICAvL+mfs+aoguW3peW7oFxyXG4gICAgcHJpdmF0ZSBfbXVzaWNPbk11dGU6IGJvb2xlYW47ICAgICAgICAgICAgICAvL+eVtuWJjeaYr+WQpumdnOmfs1xyXG4gICAgcHJpdmF0ZSBfZWZmZWN0T25NdXRlOiBib29sZWFuOyAgICAgICAgICAgICAvL+eVtuWJjeaYr+WQpumdnOmfs1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuICAgICAgICB0aGlzLmZhY3RvcnkgPSBuZXcgQXVkaW9GYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0T25NdXRlID0gdGhpcy5jb25maWdNYW5hZ2VyLmlzRWZmZWN0T25NdXRlO1xyXG4gICAgICAgIHRoaXMuX211c2ljT25NdXRlID0gdGhpcy5jb25maWdNYW5hZ2VyLmlzTXVzaWNPbk11dGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICogIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjlj6rmnInkuIDmrKHnlKLnlJ/mraRjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBBdWRpb01hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IElBdWRpb01hbmFnZXIge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTXVzaWNGVywgXCLoqbLpoZ7lsJrmnKrlr6bkvovljJZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGN5aSW5bCN6Kmy6Z+z5qiC5YGa6Kit5a6aLOWPr+S7peS4jeWBmuioreWumizlsIfmnIPkvp3nhafpu5joqo3oqK3lrproh6rli5XoqK3lrppcclxuICAgICAqIHZvbHVtZSA6IOm7mOiqjeeCuiBDb25maWcg5YWn55qE6Z+z6YeP5Y+D5pW4XHJcbiAgICAgKiBsb29wIDog6buY6KqNIGZhbHNlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA6IOmfs+aoguWQjeeosVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSA6IOmfs+mHjyAwfjFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpumHjeikh+aSpeaUvlxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldHRpbmdNdXNpYyhuYW1lOiBzdHJpbmcsIHZvbHVtZT86IG51bWJlciwgbG9vcD86IGJvb2xlYW4pOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LnNldHRpbmdNdXNpYyhuYW1lLCB2b2x1bWUsIGxvb3ApO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhjeWkluWwjeipsumfs+aViOWBmuioreWumizkvaDlj6/ku6XkuI3lgZroqK3lrpos5bCH5pyD5L6d54Wn6buY6KqN6Kit5a6a6Ieq5YuV6Kit5a6aXHJcbiAgICAgKiBjYW5TdXBlcmltcG9zZSA6IOm7mOiqjSBBdWRpb1N0YXRlVHlwZS5DTEVBUl9UT19SRVBMQVlcclxuICAgICAqIHZvbHVtZSA6IOm7mOiqjeeCuiBDb25maWcg5YWn55qE6Z+z6YeP5Y+D5pW4XHJcbiAgICAgKiBsb29wIDrpu5joqo3ngrogZmFsc2VcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIDog6Z+z5pWI5qqU5ZCNXHJcbiAgICAgKiBAcGFyYW0ge0F1ZGlvU3RhdGVUeXBlfSBjYW5TdXBlcmltcG9zZSA6IOiDveWQpueWiuWKoFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSA6IOmfs+mHjyAwfjFcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpumHjeikh+aSpeaUvlxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldHRpbmdFZmZlY3QobmFtZTogc3RyaW5nLCBjYW5TdXBlcmltcG9zZT86IEF1ZGlvU3RhdGVUeXBlLCB2b2x1bWU/OiBudW1iZXIsIGxvb3A/OiBib29sZWFuKTogdGhpcyB7XHJcblxyXG4gICAgICAgIGlmIChjYW5TdXBlcmltcG9zZSA9PT0gQXVkaW9TdGF0ZVR5cGUuU1VQRVJJTVBPU0UgJiYgbG9vcCkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5NdXNpY0ZXLCBgJHtuYW1lfSDkvb/nlKjnlorliqDmlYjmnpzmmYLkuI3lu7rorbDkvb/nlKjlvqrnkrDmkqXmlL5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmFjdG9yeS5zZXR0aW5nRWZmZWN0KG5hbWUsIGNhblN1cGVyaW1wb3NlLCB2b2x1bWUsIGxvb3ApXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKl5pS+6Z+z5qiCLOWwh+acg+S+neeFp+eVtuWIneioreWumueahOWPg+aVuOmAsuihjOaSreaUvlxyXG4gICAgICog6Iul54Sh5Y+D5pW46Kit5a6a5pKl5pS+5qih5byPLOS+neeFp+m7mOiqjeWPg+aVuOaSpeaUvlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOiDpn7PmqILmqpTlkI1cclxuICAgICAqL1xyXG4gICAgcHVibGljIG11c2ljUGxheShuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5Lm11c2ljUGxheShuYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkqXmlL7pn7PmlYgs5bCH5pyD5L6d54Wn55W25Yid6Kit5a6a55qE5Y+D5pW46YCy6KGM5pKt5pS+XHJcbiAgICAgKiDoi6XnhKHlj4PmlbjoqK3lrprmkqXmlL7mqKHlvI8s5L6d54Wn6buY6KqN5Y+D5pW45pKl5pS+XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA6IOmfs+aViOaqlOWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZWZmZWN0UGxheShuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmVmZmVjdFBsYXkobmFtZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6Z+z5qiCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtdXNpY1N0b3AoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmFjdG9yeS5tdXNpY1N0b3AoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmqvlgZzpn7PmqIJcclxuICAgICAqL1xyXG4gICAgcHVibGljIG11c2ljUGF1c2UoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmFjdG9yeS5tdXNpY1BhdXNlKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i6Z+z5pWIXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA6IOmfs+aViOaqlOWQjVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZWZmZWN0U3RvcChuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmVmZmVjdFN0b3AobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmiYDmnInpn7PmlYhcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVmZmVjdFN0b3BBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3J5LmVmZmVjdFN0b3BBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPluaSpeaUvueahOeLgOaFi1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOiDpn7PmlYjmqpTlkI1cclxuICAgICAqIEByZXR1cm4ge01hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+fSA6IOaSpeaUvuioreWumuWPg+aVuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TXVzaWNTdGF0ZShuYW1lOiBzdHJpbmcpOiBNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5nZXRNdXNpY1N0YXRlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog542y5Y+W5pKl5pS+55qE54uA5oWLXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA6IOmfs+aoguaqlOWQjVxyXG4gICAgICogQHJldHVybiB7TWFwPHN0cmluZywgc3RyaW5nIHwgQXVkaW9TdGF0ZVR5cGUgfGJvb2xlYW4gfCBudW1iZXI+fSA6IOaSpeaUvuioreWumuWPg+aVuFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RWZmZWN0U3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5nZXRFZmZlY3RTdGF0ZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOeVtuWJjeaYr+WQpumdnOmfs+aooeW8j1xyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0g55W25YmN5piv5ZCm6Z2c6Z+zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB1cGRhdGVFZmZlY3RPbk11dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5fZWZmZWN0T25NdXRlID0gIXRoaXMuX2VmZmVjdE9uTXV0ZTtcclxuICAgICAgICBpZiAodGhpcy5fZWZmZWN0T25NdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmFjdG9yeS5lZmZlY3RTdG9wQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9lZmZlY3RPbk11dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnlbbliY3mmK/lkKbpnZzpn7PmqKHlvI9cclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IOeVtuWJjeaYr+WQpumdnOmfs1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdXBkYXRlTXVzaWNPbk11dGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNPbk11dGUgPSAhdGhpcy5fbXVzaWNPbk11dGU7XHJcbiAgICAgICAgaWYgKHRoaXMuX211c2ljT25NdXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fbXVzaWNPbk11dGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3mmK/lkKbpnZzpn7Pog4zmma/pn7PmqIJcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGVmZmVjdE9uTXV0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWZmZWN0T25NdXRlXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3mmK/lkKbpnZzpn7PmlYjmnpzpn7PmlYhcclxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IG11c2ljT25NdXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tdXNpY09uTXV0ZVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6KOd6aO+5ZmoXHJcbiAqIOaSpeaUvuiDjOaZr+mfs+aoglxyXG4gKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSA6IOmfs+aoguaqlOWQjVxyXG4gKiBAcmV0dXJucyB7KHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB2b2lkfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNdXNpYyhuYW1lKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIC4uLmFueSk7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5tdXNpY1BsYXkobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6KOd6aO+5ZmoXHJcbiAqIOWBnOatouiDjOaZr+mfs+aoglxyXG4gKiBAcmV0dXJucyB7KHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB2b2lkfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBNdXNpY1N0b3AoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgIG1ldGhvZC5jYWxsKHRoaXMsIC4uLmFueSk7XHJcbiAgICAgICAgICAgIHJldHVybiBBdWRpb01hbmFnZXIuaW5zdGFuY2UubXVzaWNTdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog6KOd6aO+5ZmoXHJcbiAqIOaSpeaUvuaViOaenOmfs+aViFxyXG4gKiBAcGFyYW0gbmFtZVtdIHtzdHJpbmd9IDog6Z+z5qiC5qqU5ZCNXHJcbiAqIEByZXR1cm5zIHsodGFyZ2V0OiBhbnksIGtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpID0+IHZvaWR9XHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEVmZmVjdCguLi5uYW1lOiBzdHJpbmdbXSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvcikge1xyXG4gICAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKC4uLmFueSkge1xyXG4gICAgICAgICAgICBuYW1lLmZvckVhY2goKG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmVmZmVjdFBsYXkobmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCAuLi5hbnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOijnemjvuWZqFxyXG4gKiDmmqvlgZzmlYjmnpzpn7PmlYhcclxuICogQHBhcmFtIG5hbWVbXSB7c3RyaW5nfSA6IOmfs+aoguaqlOWQjVxyXG4gKiBAcmV0dXJucyB7KHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSA9PiB2b2lkfVxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBFZmZlY3RTdG9wKC4uLm5hbWU6IHN0cmluZ1tdKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBrZXk6IHN0cmluZywgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBtZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xyXG4gICAgICAgIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoLi4uYW55KSB7XHJcbiAgICAgICAgICAgIG5hbWUuZm9yRWFjaCgobmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuZWZmZWN0U3RvcChuYW1lKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIC4uLmFueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19