import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import LoadResManager from '../../Load/LoadResManager'

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
export default class MusicController implements IAudioType {

    private musicID: number;

    constructor() {
        this.musicID = null;
    }

    /**
     * 撥放背景音樂,並配合享元資料,作相對應的撥放模式處理
     * @param {string} name
     * @param {Map<string, any>} data
     */
    public play(name: string, data: Map<string, any>) {

        let volume: number = data.get("volume");            //音量
        let loop: boolean = data.get("loop");               //是否循環

        //獲取當前音樂撥放狀態,-1 無撥放 , 1 撥放中  2 暫停中
        let state: number = cc.audioEngine.getState(this.musicID);

        if (!LoadResManager.instance.musicRes.has(name)) {
            ErrorManager.instance.executeError(ErrorType.AUDIO_FW, `${name} 無此資源,請檢察資源類 musicRes內的資源是否錯誤`);
            return;
        }

        //如果該音樂是暫停模式,回復撥放
        if (state == MusicStateType.PAUSE) {
            cc.audioEngine.resume(this.musicID);
            return;
        }

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
    public stop() {

        cc.audioEngine.setVolume(this.musicID, 0);
        cc.audioEngine.stop(this.musicID);

    }

    /**
     * 暫停背景音樂
     */
    public pause() {
        if (cc.audioEngine.getState(this.musicID) != cc.audioEngine.AudioState.PLAYING) return;
        cc.audioEngine.pause(this.musicID);
    }
}