"use strict";
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