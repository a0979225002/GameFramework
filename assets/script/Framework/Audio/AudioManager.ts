import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import AudioFactory from './AudioFactory'
import IAudioManager from "./IAudio/IAudioManager";
import {AudioStateType} from "./Enum/AudioStateType";


/**
 * @Author XIAO-LI-PIN
 * @Description 音樂管理器,由Config類實例化,直到程式死亡前,永久存活
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
export default class AudioManager implements IAudioManager {

    private configManager: IConfigManager;
    private static _instance: IAudioManager;
    private factory: AudioFactory;              //音樂工廠
    private _musicOnMute: boolean;              //當前是否靜音
    private _effectOnMute: boolean;             //當前是否靜音

    private constructor(configManager: IConfigManager) {

        this.configManager = configManager;
        this.factory = new AudioFactory(this, configManager);
        this._effectOnMute = this.configManager.isEffectOnMute;
        this._musicOnMute = this.configManager.isMusicOnMute;

    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案只有一次產生此class
     */
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new AudioManager(configManager);
        }
    }

    /**
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): IAudioManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.AUDIO_FW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
     * volume : 默認為 Config 內的音量參數
     * loop : 默認 false
     * @param {string} name : 音樂名稱
     * @param {number} volume : 音量 0~1
     * @param {boolean} loop : 是否重複撥放
     * @return {this}
     */
    public settingMusic(name: string, volume?: number, loop?: boolean): this {

        this.factory.settingMusic(name, volume, loop);

        return this;
    }

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
    public settingEffect(name: string, canSuperimpose?: AudioStateType, volume?: number, loop?: boolean): this {

        if (canSuperimpose === AudioStateType.SUPERIMPOSE && loop) {
            ErrorManager.instance.executeError(ErrorType.AUDIO_FW, `${name} 使用疊加效果時不建議使用循環撥放`);
        }

        this.factory.settingEffect(name, canSuperimpose, volume, loop)

        return this;
    }

    /**
     * 撥放音樂,將會依照當初設定的參數進行播放
     * 若無參數設定撥放模式,依照默認參數撥放
     * @param {string} name : 音樂檔名
     */
    public musicPlay(name: string) {
        this.factory.musicPlay(name);
    }

    /**
     * 撥放音效,將會依照當初設定的參數進行播放
     * 若無參數設定撥放模式,依照默認參數撥放
     * @param {string} name : 音效檔名
     */
    public effectPlay(name: string) {

        this.factory.effectPlay(name);

    }

    /**
     * 停止音樂
     */
    public musicStop() {

        this.factory.musicStop();

    }

    /**
     * 暫停音樂
     */
    public musicPause() {

        this.factory.musicPause();

    }

    /**
     * 停止音效
     * @param {string} name : 音效檔名
     */
    public effectStop(name: string) {

        this.factory.effectStop(name);
    }

    /**
     * 停止所有音效
     */
    public effectStopAll() {
        this.factory.effectStopAll();
    }

    /**
     * 獲取撥放的狀態
     * @param {string} name : 音效檔名
     * @return {Map<string, string | boolean | number>} : 撥放設定參數
     */
    public getMusicState(name: string): Map<string, string | boolean | number> {
        return this.factory.getMusicState(name);
    }

    /**
     * 獲取撥放的狀態
     * @param {string} name : 音樂檔名
     * @return {Map<string, string | AudioStateType |boolean | number>} : 撥放設定參數
     */
    public getEffectState(name: string): Map<string, string | AudioStateType | boolean | number> {
        return this.factory.getEffectState(name);
    }

    /**
     * 更新當前是否靜音模式
     * @return {boolean} 當前是否靜音
     */
    public updateEffectOnMute(): boolean {
        this._effectOnMute = !this._effectOnMute;
        if (this._effectOnMute) {
            this.factory.effectStopAll();
        }
        return this._effectOnMute;
    }

    /**
     * 更新當前是否靜音模式
     * @return {boolean} 當前是否靜音
     */
    public updateMusicOnMute(): boolean {
        this._musicOnMute = !this._musicOnMute;
        if (this._musicOnMute) {
            this.musicPause();
        }
        return this._musicOnMute;
    }

    /**
     * 當前是否靜音背景音樂
     * @returns {boolean}
     */
    public get effectOnMute(): boolean {
        return this._effectOnMute
    }

    /**
     * 當前是否靜音效果音效
     * @returns {boolean}
     */
    public get musicOnMute(): boolean {
        return this._musicOnMute
    }
}

/**
 * 裝飾器
 * 撥放背景音樂
 * @param name {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export function Music(name) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = function (...any) {
            AudioManager.instance.musicPlay(name);
            return  method.call(this, ...any);
        }
    }
}

/**
 * 裝飾器
 * 停止背景音樂
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export function MusicStop() {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = function (...any) {
            AudioManager.instance.musicStop();
            return method.call(this, ...any);
        }
    }
}

/**
 * 裝飾器
 * 撥放效果音效
 * @param name[] {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export function Effect(...name: string[]) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = function (...any) {
            name.forEach((name: string) => {
                AudioManager.instance.effectPlay(name);
            })
            return method.call(this, ...any);
        }
    }
}

/**
 * 裝飾器
 * 暫停效果音效
 * @param name[] {string} : 音樂檔名
 * @returns {(target: any, key: string, descriptor: PropertyDescriptor) => void}
 * @constructor
 */
export function EffectStop(...name: string[]) {
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = function (...any) {
            name.forEach((name: string) => {
                AudioManager.instance.effectStop(name);
            })
            return method.call(this, ...any);
        }
    }
}