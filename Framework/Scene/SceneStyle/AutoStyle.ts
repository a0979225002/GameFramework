/// <reference path="../Enum/SceneDirectionType.ts" />
/// <reference path="../SceneManager.ts" />
/// <reference path="../../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 自動模式 : 依照玩家當前的使用方式,自動更新為橫式 or 直式
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class AutoStyle implements IF.ISceneStyle {

        private sceneManager: IF.ISceneManager;

        constructor(sceneManager: IF.ISceneManager) {
            this.sceneManager = sceneManager;
        }

        public executionStyle(width: number, height: number) {
            this.updateSceneDirection();
            if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (width / height)) {
                //宽度超出
                let newWidth = cc.view.getFrameSize().width * (width / cc.view.getFrameSize().height);
                cc.view.setDesignResolutionSize(newWidth, height, cc.ResolutionPolicy.FIXED_HEIGHT);
            } else {
                if (cc.view.getFrameSize().width > cc.view.getFrameSize().height) {
                    let newHeight = cc.view.getFrameSize().height * (width / cc.view.getFrameSize().width);
                    cc.view.setDesignResolutionSize(width, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                } else {
                    if ((cc.view.getFrameSize().width / cc.view.getFrameSize().height) >= (1000 / 1777)) {
                        let newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                        cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_HEIGHT);
                    } else {
                        let newHeight = cc.view.getFrameSize().height * (1000 / cc.view.getFrameSize().width);
                        cc.view.setDesignResolutionSize(1000, newHeight, cc.ResolutionPolicy.FIXED_WIDTH);
                    }
                }
            }
        }

        /**
         * 更新管理器內的 sceneDirection 變數,並推撥已更新當前場景方向的事件
         *
         * 注意 : 如果當前方向不變,卻更新了遊戲是配度,是不會推波事件的
         *       只有方向改變才會推送推波事件
         */
        updateSceneDirection() {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                //直向
                if (this.sceneManager.sceneDirection == type.SceneDirectionType.PORTRAIT) return;
                this.sceneManager.sceneDirection = type.SceneDirectionType.PORTRAIT;

                SceneDirectionChangeNotification
                    .instance
                    .notify(type.SceneDirectionType.PORTRAIT);

            } else {
                //橫向
                if (this.sceneManager.sceneDirection == type.SceneDirectionType.LANDSCAPE) return;
                this.sceneManager.sceneDirection = type.SceneDirectionType.LANDSCAPE;
                SceneDirectionChangeNotification
                    .instance
                    .notify(type.SceneDirectionType.LANDSCAPE);
            }
        }
    }
}