/// <reference path="../Enum/SceneDirectionType.ts" />
/// <reference path="../SceneManager.ts" />
/// <reference path="../../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification.ts" />

namespace fcc {

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

        updateSceneDirection() {
            if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
                //直向
                if (this.sceneManager.sceneDirection == type.SceneDirectionType.PORTRAIT) return;
                this.sceneManager.sceneDirection = type.SceneDirectionType.PORTRAIT;
                SceneDirectionChangeNotification.instance.notify(type.SceneDirectionType.PORTRAIT);
            } else {
                //橫向
                if (this.sceneManager.sceneDirection == type.SceneDirectionType.LANDSCAPE) return;
                this.sceneManager.sceneDirection = type.SceneDirectionType.LANDSCAPE;
                SceneDirectionChangeNotification.instance.notify(type.SceneDirectionType.LANDSCAPE);
            }
        }
    }
}