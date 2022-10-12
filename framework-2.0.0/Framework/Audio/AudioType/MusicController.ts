/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../../Load/LoadResManager.ts" />

namespace fcc {

    enum MusicStateType {
        STOP = -1,      //無撥放
        PLAYING = 1,    //撥放中
        PAUSE = 2,      //暫停中
    }

    /**
     * @Author XIAO-LI-PIN
     * @Description 音樂撥放|暫停控制器,跟音效類稍微不同,只保存當下一個MusicID
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class MusicController implements IF.IAudioType {

        private musicID: number;

        private nowMusicName: string;

        constructor() {
            this.musicID = null;
            this.nowMusicName = null;
        }

        /**
         * 撥放背景音樂,並配合享元資料,作相對應的撥放模式處理
         * 如果當前偵測為暫停中的音樂,且無更換音樂,將會自動回覆暫停中的音樂
         * @param {string} name
         * @param {Map<string, any>} data
         */
        public play(name: string, data: Map<string, any>): void {

            let volume: number = data.get("volume");            //音量
            let loop: boolean = data.get("loop");               //是否循環

            //獲取當前音樂撥放狀態,-1 無撥放 , 1 撥放中  2 暫停中
            let state: number = cc.audioEngine.getState(this.musicID);

            if (!LoadResManager.instance.musicRes.has(name)) {
                ErrorManager.instance.executeError(type.ErrorType.AUDIO_FW, `${name} 無此資源,請檢察資源類 musicRes內的資源是否錯誤`);
                return;
            }

            //如果該音樂是暫停模式,且在來需要撥放的背景音樂為同一首時,回復撥放
            if (state == MusicStateType.PAUSE && this.nowMusicName == name) {
                cc.audioEngine.resume(this.musicID);
                return;
            }

            this.nowMusicName = name;                                       //存放當前播放中的背景音樂

            //如果上一首背景音樂正在撥放,先暫停
            if (state == MusicStateType.PLAYING) {
                this.stop();
            }

            let audioClip = LoadResManager.instance.musicRes.get(name);
            let musicID = cc.audioEngine.playMusic(audioClip, loop);
            cc.audioEngine.setVolume(musicID, volume);
            this.musicID = musicID;
        }

        /**
         *停止背景音樂
         */
        public stop(): void {

            cc.audioEngine.setVolume(this.musicID, 0);
            cc.audioEngine.stop(this.musicID);

        }

        /**
         * 暫停背景音樂
         */
        public pause(): void {
            if (cc.audioEngine.getState(this.musicID) != cc.audioEngine.AudioState.PLAYING) return;
            cc.audioEngine.pause(this.musicID);
        }
    }
}
