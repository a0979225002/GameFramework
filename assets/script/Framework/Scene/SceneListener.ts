import ConfigManager from '../Config/ConfigManager'
import SceneManager from './SceneManager'

export default class SceneListener {
    
    //是否可以更新畫面
    private _isCanUpdateScene : boolean = true;
    
    /**
     * 監聽是否要更動scene寬高
     * @param {number}delayTime:更新頻率
     * @param {Function}updateScene:要更新是配的方式
     */
    designSceneEventListener(delayTime : number) {
        cc.view.on("canvas-resize", async () => {
            
            await this.makeDesignScene(delayTime);
            cc.log("更新畫面完畢......");
        })
    }
    
    /**
     * 依照designSceneEventListener()參數中的delay時間,更新cavers
     * @param time
     */
    private makeDesignScene(time : number) : Promise<void> {
        return new Promise<void>(((resolve, reject) => {
            
            if(this._isCanUpdateScene) {
                this._isCanUpdateScene = false;
                setTimeout(() => {
                    SceneManager.instance.updateSize();
                    this._isCanUpdateScene = true;
                    resolve();
                }, time);
            } else {
                if(ConfigManager.instance.isFrameworkDebug)
                    reject("正在UpdateScene中 請稍後......");
            }
        }))
    }
}