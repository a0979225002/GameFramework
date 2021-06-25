import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import LoadResManager from '../../Load/LoadResManager'
import {AudioStateType} from "../Enum/AudioStateType";

/**
 * @Author XIAO-LI-PIN
 * @Description 效果音效撥放|暫停控制器
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default class EffectController implements IAudioType {

    private effectID: Map<string, number>;

    constructor() {
        this.effectID = new Map<string, number>();
    }

    /**
     * 撥放效果音效,並配合享元資料,作相對應的撥放模式處理
     * @param {string} name
     * @param {Map<string, any>} data : 撥放模式資料
     */
    public play(name: string, data: Map<string, any>) {

        let volume: number = data.get("volume");                                    //音量
        let canSuperimpose: AudioStateType = data.get("canSuperimpose");            //可否疊加撥放
        let loop: boolean = data.get("loop");                                       //循環狀態
        let id = this.effectID.get(name);                                   //該音樂ID
        let state: boolean;
        cc.audioEngine.getState(id) == cc.audioEngine.AudioState.ERROR ? state = false : state = true;   //判斷該音樂是否在正撥放

        if (!LoadResManager.instance.musicRes.has(name)) {
            ErrorManager.instance.executeError(ErrorType.AUDIO_FW, `${name} 無此資源,請檢察資源類 musicRes內的資源是否錯誤`);
            return;
        }

        if (canSuperimpose === AudioStateType.NOT_PLAYING && state) return;         //如果當前正在撥放,將直接離開

        if (canSuperimpose === AudioStateType.CLEAR_TO_REPLAY && state) {           //如果當前正在撥放,將直接停止正在撥放的音樂,並重新撥放
            cc.audioEngine.stop(id);
        }

        let audioClip = LoadResManager.instance.musicRes.get(name);
        let effID = cc.audioEngine.playEffect(audioClip, loop);
        cc.audioEngine.setVolume(effID, volume);
        this.effectID.set(name, effID);
    }

    /**
     * 停止該音樂,並清除該Map effectID
     * @param {string} name
     */
    public stop(name: string) {

        if (!this.effectID.has(name)) {
            return;
        }
        cc.audioEngine.stop(this.effectID.get(name));
        this.effectID.delete(name);
    }

    /**
     * 停止所有音效,並清除整個Map effectID
     */
    public stopAll() {
        for (let key of this.effectID.keys()) {
            cc.audioEngine.stop(this.effectID.get(key));
        }
        this.effectID.clear();
    }
}