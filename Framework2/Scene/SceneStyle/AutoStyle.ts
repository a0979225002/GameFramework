import {SceneDirectionType} from '../Enum/SceneStyle'
import SceneManager from '../SceneManager'
import SceneDirectionChangeNotification
    from "../../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification";

export default class AutoStyle implements ISceneStyle {

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
            if (SceneManager.instance.sceneDirection == SceneDirectionType.PORTRAIT) return;
            SceneManager.instance.sceneDirection = SceneDirectionType.PORTRAIT;
            SceneDirectionChangeNotification.instance.notify(SceneDirectionType.PORTRAIT);
        } else {
            //橫向
            if (SceneManager.instance.sceneDirection == SceneDirectionType.LANDSCAPE) return;
            SceneManager.instance.sceneDirection = SceneDirectionType.LANDSCAPE;
            SceneDirectionChangeNotification.instance.notify(SceneDirectionType.LANDSCAPE);
        }
    }
}