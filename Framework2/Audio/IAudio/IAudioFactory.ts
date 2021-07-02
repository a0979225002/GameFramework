import {AudioStateType} from "../Enum/AudioStateType";

/**
 * @Author XIAO-LI-PIN
 * @Description (介面)音樂工廠類,派發音樂事件
 * @Date 2021-05-13 上午 10:24
 * @Version 1.1
 */
export default interface IAudioFactory {

    /**
     * 保存該背景音樂撥放模式設定
     * @param {string} name :音樂檔名稱
     * @param {number} volume : 音量
     * @param {boolean} loop : 是否循環
     */
    settingMusic(name: string, volume?: number, loop?: boolean): void;

    /**
     * 保存該效果音效撥放模式設定
     * @param {string} name :音樂檔名稱
     * @param {AudioStateType} canSuperimpose : 是否疊加撥放
     * @param {number} volume : 音量
     * @param {boolean} loop : 是否循環
     */
    settingEffect(name: string, canSuperimpose?: AudioStateType, volume?: number, loop?: boolean): void;

    /**
     * 撥放背景音樂
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name
     */
    musicPlay(name: string): void;

    /**
     * 撥放效果音效
     * 如果拿取不到享元撥放資料,將拿取預設資料
     * @param {string} name
     */
    effectPlay(name: string): void;

    /**
     * 停止背景音樂
     */
    musicStop(): void;

    /**
     * 暫停背景音樂
     */
    musicPause(): void;

    /**
     * 停止效果音校
     * @param {string} name
     */
    effectStop(name: string);

    /**
     * 停止所有效果音效
     */
    effectStopAll(): void;

    /**
     * 獲取該音樂撥放模式,如果返回NUll將照原預設
     * @param {string} name
     * @returns {Map<string, string | boolean | number>}
     */
    getMusicState(name: string): Map<string, string | AudioStateType | boolean | number>;

    /**
     * 獲取該音效撥放模式,如果返回NUll將照原預設
     * @param {string} name
     * @returns {Map<string, string | boolean | number>}
     */
    getEffectState(name: string): Map<string, string | AudioStateType | boolean | number>;
}