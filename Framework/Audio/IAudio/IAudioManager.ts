/// <reference path="../Enum/AudioStateType.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)音樂管理類
         * @Date 2021-05-13 上午 10:24
         * @Version 1.0
         */
        export interface IAudioManager {

            /**
             * 當前是否靜音
             */
            musicOnMute: boolean;

            /**
             * 當前是否靜音
             */
            effectOnMute: boolean;

            /**
             * 額外對該音樂做設定,可以不做設定,將會依照默認設定自動設定
             * ```
             *      預設參數:
             *          volume : 默認為 Config 內的音量參數
             *          loop : 默認 false
             * ```
             * @param {string} name - 音樂名稱
             * @param {number} volume - 音量 0~1
             * @param {boolean} loop - 是否重複撥放
             * @return {this}
             */
            settingMusic(name: string, volume?: number, loop?: boolean): this;

            /**
             * 額外對該音效做設定,你可以不做設定,將會依照默認設定自動設定
             * ```
             *      預設參數:
             *          canSuperimpose : fcc.type.AudioStateType.NOT_PLAYING
             *          volume : 默認為 Config 內的音量參數
             *          loop :默認為 false
             * ```
             * @param {string} name : 音效檔名
             * @param {AudioStateType} canSuperimpose : 能否疊加
             * @param {number} volume : 音量 0~1
             * @param {boolean} loop : 是否重複撥放
             * @return {this}
             */
            settingEffect(name: string, canSuperimpose?: type.AudioStateType, volume?: number, loop?: boolean): this;

            /**
             * 撥放音樂,將會依照當初設定的參數進行播放
             * 若無發現可用參數設定,依照默認參數撥放
             * @param {string} name - 音樂檔名
             */
            musicPlay(name: string): void;

            /**
             * 撥放音效,將會依照當初設定的參數進行播放
             * 若無發現可用參數設定,依照默認參數撥放
             * @param {string} name - 音效檔名
             */
            effectPlay(name: string): void;

            /**
             * 停止音樂
             */
            musicStop(): void;

            /**
             * 暫停音樂
             */
            musicPause(): void;

            /**
             * 停止音效
             * @param {string} name - 音效檔名
             */
            effectStop(name: string): void;

            /**
             * 停止所有音效
             */
            effectStopAll(): void;

            /**
             * 獲取撥放的狀態
             * ```
             *      return data:
             *          volume : number
             *          loop : boolean
             * ```
             * @param {string} name - 音效檔名
             * @return {Map<string, string | boolean | number>} - 撥放設定參數
             */
            getMusicState(name: string): Map<string, string | boolean | number>;

            /**
             * 獲取撥放的狀態
             * ```
             *      return data:
             *          volume : number
             *          canSuperimpose : fcc.type.AudioStateType
             *          loop : boolean
             * ```
             * @param {string} name - 音樂檔名
             * @return {Map<string, string | fcc.type.AudioStateType |boolean | number>} -
             */
            getEffectState(name: string): Map<string, string | boolean | number>;

            /**
             * 更新當前是否靜音模式
             * @return {boolean} 當前是否靜音
             */
            updateMusicOnMute(): boolean;

            /**
             * 更新當前是否靜音模式
             * @return {boolean} 當前是否靜音
             */
            updateEffectOnMute(): boolean;

        }
    }
}
