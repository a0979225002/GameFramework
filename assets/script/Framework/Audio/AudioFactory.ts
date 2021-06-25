import IAudioFactory from "./IAudio/IAudioFactory";
import IAudioManager from "./IAudio/IAudioManager";
import MusicController from "./AudioType/MusicController";
import EffectController from "./AudioType/EffectController";
import {AudioStateType} from "./Enum/AudioStateType";


/**
 * @Author XIAO-LI-PIN
 * @Description 音樂工廠類,派發音樂事件
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
export default class AudioFactory implements IAudioFactory {

    private readonly musicVolume: number;
    private readonly effectVolume: number;
    private readonly canSuperimpose: boolean;
    private musicOnMute: boolean;
    private effectOnMute: boolean;
    private readonly loop: boolean;
    private readonly musicData: Map<string, Map<string, string | boolean | number>>;
    private readonly effectData: Map<string, Map<string, string | AudioStateType | boolean | number>>;
    private musicNormalData: Map<string, string | boolean | number>;
    private effectNormalData: Map<string, string | AudioStateType | boolean | number>;
    private musicController: MusicController
    private effectController: EffectController
    private audioManager: IAudioManager;
    private configManager: IConfigManager;

    constructor(audioManager: IAudioManager, configManager: IConfigManager) {
        this.audioManager = audioManager;                                                                    //雙向綁定
        this.configManager = configManager;                                                                  //雙向綁定
        this.musicVolume = this.configManager.musicVolume;                                                   //初始音量
        this.effectVolume = this.configManager.effectVolume;                                                 //初始音量
        this.canSuperimpose = false;                                                                         //初始無Loop的音樂是否可以疊加
        this.musicOnMute = this.configManager.isMusicOnMute;                                                 //初始音樂是否打開
        this.effectOnMute = this.configManager.isEffectOnMute;                                               //初始效果音是否打開
        this.loop = false;                                                                                   //初始音樂循環
        this.musicData = new Map<string, Map<string, string | boolean | number>>();                          //初始享元模式的音樂
        this.effectData = new Map<string, Map<string, string | AudioStateType | boolean | number>>();        //初始享元模式的效果音效
        this.musicController = new MusicController()                                                         //初始播放Music音樂類
        this.effectController = new EffectController()                                                       //初始播放Effect音效類
        this.initializeData();                                                                               //初始化享元預設撥放模式
    }

    /**
     * 初始化享元預設撥放模式
     */
    private initializeData() {
        this.musicNormalData = new Map<string, string | boolean | number>();
        this.effectNormalData = new Map<string, string | AudioStateType | boolean | number>();
        this.musicNormalData.set("volume", this.musicVolume);
        this.musicNormalData.set("loop", this.loop);
        this.effectNormalData.set("canSuperimpose", AudioStateType.CLEAR_TO_REPLAY);
        this.effectNormalData.set("volume", this.effectVolume);
        this.effectNormalData.set("loop", this.loop);
    }

    /**
     * 保存該背景音樂撥放模式設定
     * @param {string} name - 音樂檔名稱
     * @param {number} volume - 音量
     * @param {boolean} loop - 是否循環
     */
    public settingMusic(
        name: string,
        volume: number = this.musicVolume,
        loop: boolean = this.loop) {
        let data: Map<string, string | boolean | number> = new Map<string, string | boolean | number>();
        data.set("volume", volume);
        data.set("loop", loop);
        this.musicData.set(name, data);

    }

    /**
     * 保存該效果音效撥放模式設定
     * @param {string} name -音樂檔名稱
     * @param {AudioStateType} canSuperimpose - 是否疊加撥放
     * @param {number} volume - 音量
     * @param {boolean} loop - 是否循環
     */
    public settingEffect(name: string,
                         canSuperimpose: AudioStateType = AudioStateType.NOT_PLAYING,
                         volume: number = this.musicVolume,
                         loop: boolean = this.loop) {

        let data: Map<string, string | AudioStateType | boolean | number> = new Map<string, string | AudioStateType | boolean | number>();
        data.set("canSuperimpose", canSuperimpose);
        data.set("volume", volume);
        data.set("loop", loop);
        this.effectData.set(name, data);

    }

    /**
     * 撥放背景音樂
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name - 音樂檔名
     */
    public musicPlay(name: string) {
        if (!name.trim()) return;                               //檔名空值判斷
        if (this.audioManager.musicOnMute) return;              //如果當前為靜音模式
        if (!this.musicData.has(name)) {                    //判斷是否該音樂有撥放共用資料
            this.musicData.set(name, this.musicNormalData);     //保存預設資料
            this.musicController.play(name, this.musicNormalData);
        } else {
            this.musicController.play(name, this.musicData.get(name));
        }
    }

    /**
     * 撥放效果音效
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name - 音樂檔名
     */
    public effectPlay(name: string) {
        if (!name.trim()) return;                                //檔名空值判斷
        if (this.audioManager.effectOnMute) return;              //如果當前為靜音模式
        if (!this.effectData.has(name)) {                    //判斷是否該音樂有撥放資料
            this.effectData.set(name, this.effectNormalData);    //保存預設資料
            this.effectController.play(name, this.effectNormalData);
        } else {
            this.effectController.play(name, this.effectData.get(name));
        }
    }

    /**
     * 停止背景音樂
     */
    musicStop() {
        this.musicController.stop();
    }

    /**
     * 暫停背景音樂
     */
    musicPause() {
        this.musicController.pause();
    }

    /**
     * 停止效果音校
     * @param {string} name - 音樂檔名
     */
    effectStop(name: string) {
        this.effectController.stop(name);
    }

    /**
     * 停止所有效果音效
     */
    effectStopAll() {
        this.effectController.stopAll();
    }

    /**
     * 獲取該音樂撥放模式,如果返回NUll將照原預設
     * @param {string} name - 音樂檔名
     * @returns {Map<string, string | boolean | number>}
     */
    getMusicState(name: string) {
        return this.musicData.get(name);
    }

    /**
     * 獲取該音效撥放模式,如果返回NUll將照原預設
     * @param {string} name - 音樂檔名
     * @returns {Map<string, string | boolean | number>}
     */
    getEffectState(name: string) {
        return this.effectData.get(name);
    }
}