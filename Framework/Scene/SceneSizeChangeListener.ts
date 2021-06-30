/// <reference path="./SceneManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 監聽當前遊戲,玩家是否有更動寬高
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class SceneSizeChangeListener {

        //是否可以更新畫面
        private _isCanUpdateScene: boolean = true;
        private configManager : IF.IConfigManager;
        private sceneManager: IF.ISceneManager;

        constructor(configManager :IF.IConfigManager,sceneManager:IF.ISceneManager) {
            this.configManager = configManager;
            this.sceneManager = sceneManager;
        }

        /**
         * 監聽是否要更動scene寬高
         * @param {number} delayTime - 更新頻率
         */
        designSceneEventListener(delayTime: number) {
            cc.view.on("canvas-resize", async () => {
                await this.makeDesignScene(delayTime);
                cc.log("更新畫面完畢......");
            })
        }

        /**
         * 依照designSceneEventListener()參數中的delay時間,更新cavers
         * @param {number} time - 更新頻率
         * @return {Promise<void>}
         * @private
         */
        private makeDesignScene(time: number): Promise<void> {
            return new Promise<void>(((resolve, reject) => {
                if (this._isCanUpdateScene) {
                    this._isCanUpdateScene = false;
                    setTimeout(() => {
                        this.sceneManager.updateSize();
                        this._isCanUpdateScene = true;
                        resolve();
                    }, time);
                } else {
                    if (this.configManager.isFrameworkDebug)
                        reject("正在UpdateScene中 請稍後......");
                }
            }))
        }
    }
}