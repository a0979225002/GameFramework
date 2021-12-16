
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/AudioFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd190b8i3hFB46M4r84ySKuP', 'AudioFactory');
// script/Framework/Audio/AudioFactory.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SlotConfigManager_1 = require("../Config/SlotConfigManager");
var AudioManager_1 = require("./AudioManager");
var EffectTypeController_1 = require("./AudioType/EffectTypeController");
var MusicTypeController_1 = require("./AudioType/MusicTypeController");
var AudioStateType_1 = require("./Enum/AudioStateType");
/**
 * @Author XIAO-LI-PIN
 * @Description 音樂工廠類,派發音樂事件
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
var AudioFactory = /** @class */ (function () {
    function AudioFactory() {
        this.musicVolume = SlotConfigManager_1.default.instance.musicVolume; //初始音量
        this.effectVolume = SlotConfigManager_1.default.instance.effectVolume; //初始音量
        this.canSuperimpose = false; //初始無Loop的音樂是否可以疊加
        this.musicOnMute = SlotConfigManager_1.default.instance.isMusicOnMute; //初始音樂是否打開
        this.effectOnMute = SlotConfigManager_1.default.instance.isEffectOnMute; //初始效果音是否打開
        this.loop = false; //初始音樂循環
        this.musicData = new Map(); //初始享元模式的音樂
        this.effectData = new Map(); //初始享元模式的效果音效
        this.music = new MusicTypeController_1.default(); //新增播放Music音樂類
        this.effect = new EffectTypeController_1.default(); //新增播放Effect音效類
        this.initializeData(); //初始化享元預設撥放模式
    }
    /**
     * 初始化享元預設撥放模式
     */
    AudioFactory.prototype.initializeData = function () {
        this.musicNormalData = new Map();
        this.effectNormalData = new Map();
        this.musicNormalData.set("volume", this.musicVolume);
        this.musicNormalData.set("loop", this.loop);
        this.effectNormalData.set("canSuperimpose", AudioStateType_1.AudioStateType.CLEAR_TO_REPLAY);
        this.effectNormalData.set("volume", this.effectVolume);
        this.effectNormalData.set("loop", this.loop);
    };
    /**
     * 保存該背景音樂撥放模式設定
     * @param {string} name :音樂檔名稱
     * @param {number} volume : 音量
     * @param {boolean} loop : 是否循環
     */
    AudioFactory.prototype.settingMusic = function (name, volume, loop) {
        if (volume === void 0) { volume = this.musicVolume; }
        if (loop === void 0) { loop = this.loop; }
        var data = new Map();
        data.set("volume", volume);
        data.set("loop", loop);
        this.musicData.set(name, data);
    };
    /**
     * 保存該效果音效撥放模式設定
     * @param {string} name :音樂檔名稱
     * @param {AudioStateType} canSuperimpose : 是否疊加撥放
     * @param {number} volume : 音量
     * @param {boolean} loop : 是否循環
     */
    AudioFactory.prototype.settingEffect = function (name, canSuperimpose, volume, loop) {
        if (canSuperimpose === void 0) { canSuperimpose = AudioStateType_1.AudioStateType.NOT_PLAYING; }
        if (volume === void 0) { volume = this.musicVolume; }
        if (loop === void 0) { loop = this.loop; }
        var data = new Map();
        data.set("canSuperimpose", canSuperimpose);
        data.set("volume", volume);
        data.set("loop", loop);
        this.effectData.set(name, data);
    };
    /**
     * 撥放背景音樂
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name
     */
    AudioFactory.prototype.musicPlay = function (name) {
        if (!name.trim())
            return; //檔名空值判斷
        if (AudioManager_1.default.instance.musicOnMute)
            return; //如果當前為靜音模式
        if (!this.musicData.has(name)) { //判斷是否該音樂有撥放資料
            this.musicData.set(name, this.musicNormalData); //保存預設資料
            this.music.play(name, this.musicNormalData);
        }
        else {
            this.music.play(name, this.musicData.get(name));
        }
    };
    /**
     * 撥放效果音效
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name
     */
    AudioFactory.prototype.effectPlay = function (name) {
        if (!name.trim())
            return; //檔名空值判斷
        if (AudioManager_1.default.instance.effectOnMute)
            return; //如果當前為靜音模式
        if (!this.effectData.has(name)) { //判斷是否該音樂有撥放資料
            this.effectData.set(name, this.effectNormalData); //保存預設資料
            this.effect.play(name, this.effectNormalData);
        }
        else {
            this.effect.play(name, this.effectData.get(name));
        }
    };
    /**
     * 停止背景音樂
     */
    AudioFactory.prototype.musicStop = function () {
        this.music.stop();
    };
    /**
     * 暫停背景音樂
     */
    AudioFactory.prototype.musicPause = function () {
        this.music.pause();
    };
    /**
     * 停止效果音校
     * @param {string} name
     */
    AudioFactory.prototype.effectStop = function (name) {
        this.effect.stop(name);
    };
    /**
     * 停止所有效果音效
     */
    AudioFactory.prototype.effectStopAll = function () {
        this.effect.stopAll();
    };
    /**
     * 獲取該音樂撥放模式,如果返回NUll將照原預設
     * @param {string} name
     * @returns {Map<string, string | boolean | number>}
     */
    AudioFactory.prototype.getMusicState = function (name) {
        return this.musicData.get(name);
    };
    /**
     * 獲取該音效撥放模式,如果返回NUll將照原預設
     * @param {string} name
     * @returns {Map<string, string | boolean | number>}
     */
    AudioFactory.prototype.getEffectState = function (name) {
        return this.effectData.get(name);
    };
    return AudioFactory;
}());
exports.default = AudioFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxBdWRpb0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBMkQ7QUFDM0QsK0NBQXlDO0FBQ3pDLHlFQUFxRDtBQUNyRCx1RUFBbUQ7QUFDbkQsd0RBQXFEO0FBR3JEOzs7OztHQUtHO0FBQ0g7SUFlSTtRQUVJLElBQUksQ0FBQyxXQUFXLEdBQUcsMkJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUEyQyxNQUFNO1FBQzNHLElBQUksQ0FBQyxZQUFZLEdBQUcsMkJBQWlCLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUF5QyxNQUFNO1FBQzNHLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQXlFLGtCQUFrQjtRQUN2SCxJQUFJLENBQUMsV0FBVyxHQUFHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBeUMsVUFBVTtRQUMvRyxJQUFJLENBQUMsWUFBWSxHQUFHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBdUMsV0FBVztRQUNoSCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFtRixRQUFRO1FBQzdHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQWtELENBQUMsQ0FBMEIsV0FBVztRQUNoSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxFQUFtRSxDQUFDLENBQVEsYUFBYTtRQUNsSCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksNkJBQUssRUFBRSxDQUFBLENBQTZFLGNBQWM7UUFDbkgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLDhCQUFNLEVBQUUsQ0FBQSxDQUEyRSxlQUFlO1FBQ3BILElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUErRSxhQUFhO0lBQ3RILENBQUM7SUFFRDs7T0FFRztJQUNILHFDQUFjLEdBQWQ7UUFFSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBc0QsQ0FBQztRQUV0RixJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBQywrQkFBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFaEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksbUNBQVksR0FBbkIsVUFDSSxJQUFZLEVBQ1osTUFBaUMsRUFDakMsSUFBeUI7UUFEekIsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsV0FBVztRQUNqQyxxQkFBQSxFQUFBLE9BQWdCLElBQUksQ0FBQyxJQUFJO1FBQ3pCLElBQUksSUFBSSxHQUEyQyxJQUFJLEdBQUcsRUFBcUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLElBQVksRUFDWixjQUEyRCxFQUMzRCxNQUFpQyxFQUNqQyxJQUF5QjtRQUZ6QiwrQkFBQSxFQUFBLGlCQUFpQywrQkFBYyxDQUFDLFdBQVc7UUFDM0QsdUJBQUEsRUFBQSxTQUFpQixJQUFJLENBQUMsV0FBVztRQUNqQyxxQkFBQSxFQUFBLE9BQWdCLElBQUksQ0FBQyxJQUFJO1FBRTFDLElBQUksSUFBSSxHQUE0RCxJQUFJLEdBQUcsRUFBc0QsQ0FBQztRQUNsSSxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdDQUFTLEdBQVQsVUFBVSxJQUFZO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQUUsT0FBTyxDQUEyQixRQUFRO1FBQzVELElBQUksc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUFFLE9BQU8sQ0FBTSxXQUFXO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFxQixjQUFjO1lBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxRQUFRO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDL0M7YUFBTTtZQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ25EO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxpQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBOEIsUUFBUTtRQUMvRCxJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVk7WUFBRSxPQUFPLENBQVEsV0FBVztRQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBdUIsY0FBYztZQUNqRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBRSxRQUFRO1lBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNqRDthQUFNO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDckQ7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBVSxHQUFWO1FBRUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUV2QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsaUNBQVUsR0FBVixVQUFXLElBQVk7UUFFbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0NBQWEsR0FBYjtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFMUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBYSxHQUFiLFVBQWMsSUFBWTtRQUV0QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gscUNBQWMsR0FBZCxVQUFlLElBQVk7UUFFdkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTVLQSxBQTRLQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsb3RDb25maWdNYW5hZ2VyIGZyb20gJy4uL0NvbmZpZy9TbG90Q29uZmlnTWFuYWdlcidcclxuaW1wb3J0IEF1ZGlvTWFuYWdlciBmcm9tICcuL0F1ZGlvTWFuYWdlcidcclxuaW1wb3J0IEVmZmVjdCBmcm9tICcuL0F1ZGlvVHlwZS9FZmZlY3RUeXBlQ29udHJvbGxlcidcclxuaW1wb3J0IE11c2ljIGZyb20gJy4vQXVkaW9UeXBlL011c2ljVHlwZUNvbnRyb2xsZXInXHJcbmltcG9ydCB7QXVkaW9TdGF0ZVR5cGV9IGZyb20gXCIuL0VudW0vQXVkaW9TdGF0ZVR5cGVcIjtcclxuaW1wb3J0IElBdWRpb0ZhY3RvcnkgZnJvbSBcIi4vSUF1ZGlvL0lBdWRpb0ZhY3RvcnlcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpn7PmqILlt6Xlu6DpoZ4s5rS+55m86Z+z5qiC5LqL5Lu2XHJcbiAqIEBEYXRlIDIwMjEtMDUtMTMg5LiK5Y2IIDEwOjI0XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXVkaW9GYWN0b3J5IGltcGxlbWVudHMgSUF1ZGlvRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBtdXNpY1ZvbHVtZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZmZlY3RWb2x1bWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FuU3VwZXJpbXBvc2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG11c2ljT25NdXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBlZmZlY3RPbk11dGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGxvb3A6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IG11c2ljRGF0YTogTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlZmZlY3REYXRhOiBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmcgfCBBdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+PjtcclxuICAgIHByaXZhdGUgbXVzaWNOb3JtYWxEYXRhIDogTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj47XHJcbiAgICBwcml2YXRlIGVmZmVjdE5vcm1hbERhdGE6IE1hcDxzdHJpbmcsIHN0cmluZyB8IEF1ZGlvU3RhdGVUeXBlIHwgYm9vbGVhbiB8IG51bWJlcj47XHJcbiAgICBwcml2YXRlIG11c2ljOiBNdXNpY1xyXG4gICAgcHJpdmF0ZSBlZmZlY3Q6IEVmZmVjdFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLm11c2ljVm9sdW1lID0gU2xvdENvbmZpZ01hbmFnZXIuaW5zdGFuY2UubXVzaWNWb2x1bWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Z+z6YePXHJcbiAgICAgICAgdGhpcy5lZmZlY3RWb2x1bWUgPSBTbG90Q29uZmlnTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RWb2x1bWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mfs+mHj1xyXG4gICAgICAgIHRoaXMuY2FuU3VwZXJpbXBvc2UgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vnhKFMb29w55qE6Z+z5qiC5piv5ZCm5Y+v5Lul55aK5YqgXHJcbiAgICAgICAgdGhpcy5tdXNpY09uTXV0ZSA9IFNsb3RDb25maWdNYW5hZ2VyLmluc3RhbmNlLmlzTXVzaWNPbk11dGU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+mfs+aoguaYr+WQpuaJk+mWi1xyXG4gICAgICAgIHRoaXMuZWZmZWN0T25NdXRlID0gU2xvdENvbmZpZ01hbmFnZXIuaW5zdGFuY2UuaXNFZmZlY3RPbk11dGU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vmlYjmnpzpn7PmmK/lkKbmiZPplotcclxuICAgICAgICB0aGlzLmxvb3AgPSBmYWxzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL6Z+z5qiC5b6q55KwXHJcbiAgICAgICAgdGhpcy5tdXNpY0RhdGEgPSBuZXcgTWFwPHN0cmluZywgTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4+KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+S6q+WFg+aooeW8j+eahOmfs+aoglxyXG4gICAgICAgIHRoaXMuZWZmZWN0RGF0YSA9IG5ldyBNYXA8c3RyaW5nLCBNYXA8c3RyaW5nLCBzdHJpbmcgfCBBdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+PigpOyAgICAgICAgLy/liJ3lp4vkuqvlhYPmqKHlvI/nmoTmlYjmnpzpn7PmlYhcclxuICAgICAgICB0aGlzLm11c2ljID0gbmV3IE11c2ljKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5paw5aKe5pKt5pS+TXVzaWPpn7PmqILpoZ5cclxuICAgICAgICB0aGlzLmVmZmVjdCA9IG5ldyBFZmZlY3QoKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5paw5aKe5pKt5pS+RWZmZWN06Z+z5pWI6aGeXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YSgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMluS6q+WFg+mgkOioreaSpeaUvuaooeW8j1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW5Lqr5YWD6aCQ6Kit5pKl5pS+5qih5byPXHJcbiAgICAgKi9cclxuICAgIGluaXRpYWxpemVEYXRhKCl7XHJcblxyXG4gICAgICAgIHRoaXMubXVzaWNOb3JtYWxEYXRhID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+KCk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3ROb3JtYWxEYXRhID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZyB8IEF1ZGlvU3RhdGVUeXBlIHwgYm9vbGVhbiB8IG51bWJlcj4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpY05vcm1hbERhdGEuc2V0KFwidm9sdW1lXCIsdGhpcy5tdXNpY1ZvbHVtZSk7XHJcbiAgICAgICAgdGhpcy5tdXNpY05vcm1hbERhdGEuc2V0KFwibG9vcFwiLHRoaXMubG9vcCk7XHJcblxyXG4gICAgICAgIHRoaXMuZWZmZWN0Tm9ybWFsRGF0YS5zZXQoXCJjYW5TdXBlcmltcG9zZVwiLEF1ZGlvU3RhdGVUeXBlLkNMRUFSX1RPX1JFUExBWSk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3ROb3JtYWxEYXRhLnNldChcInZvbHVtZVwiLHRoaXMuZWZmZWN0Vm9sdW1lKTtcclxuICAgICAgICB0aGlzLmVmZmVjdE5vcm1hbERhdGEuc2V0KFwibG9vcFwiLHRoaXMubG9vcCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y6Kmy6IOM5pmv6Z+z5qiC5pKl5pS+5qih5byP6Kit5a6aXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA66Z+z5qiC5qqU5ZCN56ixXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDog6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgOiDmmK/lkKblvqrnkrBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldHRpbmdNdXNpYyhcclxuICAgICAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdm9sdW1lOiBudW1iZXIgPSB0aGlzLm11c2ljVm9sdW1lLFxyXG4gICAgICAgIGxvb3A6IGJvb2xlYW4gPSB0aGlzLmxvb3ApIHtcclxuICAgICAgICBsZXQgZGF0YTogTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj4oKTtcclxuICAgICAgICBkYXRhLnNldChcInZvbHVtZVwiLCB2b2x1bWUpO1xyXG4gICAgICAgIGRhdGEuc2V0KFwibG9vcFwiLCBsb29wKTtcclxuICAgICAgICB0aGlzLm11c2ljRGF0YS5zZXQobmFtZSwgZGF0YSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y6Kmy5pWI5p6c6Z+z5pWI5pKl5pS+5qih5byP6Kit5a6aXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA66Z+z5qiC5qqU5ZCN56ixXHJcbiAgICAgKiBAcGFyYW0ge0F1ZGlvU3RhdGVUeXBlfSBjYW5TdXBlcmltcG9zZSA6IOaYr+WQpueWiuWKoOaSpeaUvlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZvbHVtZSA6IOmfs+mHj1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBsb29wIDog5piv5ZCm5b6q55KwXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXR0aW5nRWZmZWN0KG5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGNhblN1cGVyaW1wb3NlOiBBdWRpb1N0YXRlVHlwZSA9IEF1ZGlvU3RhdGVUeXBlLk5PVF9QTEFZSU5HLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdm9sdW1lOiBudW1iZXIgPSB0aGlzLm11c2ljVm9sdW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgbG9vcDogYm9vbGVhbiA9IHRoaXMubG9vcCkge1xyXG5cclxuICAgICAgICBsZXQgZGF0YTogTWFwPHN0cmluZywgc3RyaW5nIHwgQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPiA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmcgfCBBdWRpb1N0YXRlVHlwZSB8IGJvb2xlYW4gfCBudW1iZXI+KCk7XHJcbiAgICAgICAgZGF0YS5zZXQoXCJjYW5TdXBlcmltcG9zZVwiLCBjYW5TdXBlcmltcG9zZSk7XHJcbiAgICAgICAgZGF0YS5zZXQoXCJ2b2x1bWVcIiwgdm9sdW1lKTtcclxuICAgICAgICBkYXRhLnNldChcImxvb3BcIiwgbG9vcCk7XHJcbiAgICAgICAgdGhpcy5lZmZlY3REYXRhLnNldChuYW1lLCBkYXRhKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkqXmlL7og4zmma/pn7PmqIJcclxuICAgICAqIOWmguaenOaLv+WPluS4jeWIsOS6q+WFg+aSpeaUvuizh+aWmSzlsIfmi7/lj5bpoJDoqK3os4fmlplcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKi9cclxuICAgIG11c2ljUGxheShuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIW5hbWUudHJpbSgpKSByZXR1cm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mqpTlkI3nqbrlgLzliKTmlrdcclxuICAgICAgICBpZiAoQXVkaW9NYW5hZ2VyLmluc3RhbmNlLm11c2ljT25NdXRlKSByZXR1cm47ICAgICAgLy/lpoLmnpznlbbliY3ngrrpnZzpn7PmqKHlvI9cclxuICAgICAgICBpZiAoIXRoaXMubXVzaWNEYXRhLmhhcyhuYW1lKSkgeyAgICAgICAgICAgICAgICAgICAgLy/liKTmlrfmmK/lkKboqbLpn7PmqILmnInmkqXmlL7os4fmlplcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0RhdGEuc2V0KG5hbWUsIHRoaXMubXVzaWNOb3JtYWxEYXRhKTsgLy/kv53lrZjpoJDoqK3os4fmlplcclxuICAgICAgICAgICAgdGhpcy5tdXNpYy5wbGF5KG5hbWUsIHRoaXMubXVzaWNOb3JtYWxEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljLnBsYXkobmFtZSwgdGhpcy5tdXNpY0RhdGEuZ2V0KG5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkqXmlL7mlYjmnpzpn7PmlYhcclxuICAgICAqIOWmguaenOaLv+WPluS4jeWIsOS6q+WFg+aSpeaUvuizh+aWmSzlsIfmi7/lj5bpoJDoqK3os4fmlplcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKi9cclxuICAgIGVmZmVjdFBsYXkobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFuYW1lLnRyaW0oKSkgcmV0dXJuOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5qqU5ZCN56m65YC85Yik5pa3XHJcbiAgICAgICAgaWYgKEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RPbk11dGUpIHJldHVybjsgICAgICAgIC8v5aaC5p6c55W25YmN54K66Z2c6Z+z5qih5byPXHJcbiAgICAgICAgaWYgKCF0aGlzLmVmZmVjdERhdGEuaGFzKG5hbWUpKSB7ICAgICAgICAgICAgICAgICAgICAgIC8v5Yik5pa35piv5ZCm6Kmy6Z+z5qiC5pyJ5pKl5pS+6LOH5paZXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0RGF0YS5zZXQobmFtZSwgdGhpcy5lZmZlY3ROb3JtYWxEYXRhKTsgIC8v5L+d5a2Y6aCQ6Kit6LOH5paZXHJcbiAgICAgICAgICAgIHRoaXMuZWZmZWN0LnBsYXkobmFtZSwgdGhpcy5lZmZlY3ROb3JtYWxEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVmZmVjdC5wbGF5KG5hbWUsIHRoaXMuZWZmZWN0RGF0YS5nZXQobmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouiDjOaZr+mfs+aoglxyXG4gICAgICovXHJcbiAgICBtdXNpY1N0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpYy5zdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmqvlgZzog4zmma/pn7PmqIJcclxuICAgICAqL1xyXG4gICAgbXVzaWNQYXVzZSgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5tdXNpYy5wYXVzZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaViOaenOmfs+agoVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqL1xyXG4gICAgZWZmZWN0U3RvcChuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lZmZlY3Quc3RvcChuYW1lKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLmiYDmnInmlYjmnpzpn7PmlYhcclxuICAgICAqL1xyXG4gICAgZWZmZWN0U3RvcEFsbCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lZmZlY3Quc3RvcEFsbCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPluipsumfs+aoguaSpeaUvuaooeW8jyzlpoLmnpzov5Tlm55OVWxs5bCH54Wn5Y6f6aCQ6KitXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge01hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBnZXRNdXNpY1N0YXRlKG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5tdXNpY0RhdGEuZ2V0KG5hbWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPluipsumfs+aViOaSpeaUvuaooeW8jyzlpoLmnpzov5Tlm55OVWxs5bCH54Wn5Y6f6aCQ6KitXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxyXG4gICAgICogQHJldHVybnMge01hcDxzdHJpbmcsIHN0cmluZyB8IGJvb2xlYW4gfCBudW1iZXI+fVxyXG4gICAgICovXHJcbiAgICBnZXRFZmZlY3RTdGF0ZShuYW1lOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZWZmZWN0RGF0YS5nZXQobmFtZSk7XHJcblxyXG4gICAgfVxyXG59Il19