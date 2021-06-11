import SlotConfigManager from '../Config/SlotConfigManager'
import SceneManager from './SceneManager'

export default class SceneSizeChangeListener {

    //是否可以更新畫面
    private _isCanUpdateScene: boolean = true;

    /**
     * 監聽是否要更動scene寬高
     * @param {number}delayTime:更新頻率
     */
    designSceneEventListener(delayTime: number) {
        cc.view.on("canvas-resize", async () => {
            await this.makeDesignScene(delayTime);
            cc.log("更新畫面完畢......");
        })
    }

    /**
     * 依照designSceneEventListener()參數中的delay時間,更新cavers
     * @param time
     */
    private makeDesignScene(time: number): Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            if (this._isCanUpdateScene) {
                this._isCanUpdateScene = false;
                setTimeout(() => {
                    SceneManager.instance.updateSize();
                    this._isCanUpdateScene = true;
                    resolve();
                }, time);
            } else {
                if (SlotConfigManager.instance.isFrameworkDebug)
                    reject("正在UpdateScene中 請稍後......");
            }
        }))
    }
}