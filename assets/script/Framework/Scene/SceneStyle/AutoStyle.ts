import {GameEventType} from '../../Listener/Enum/gameEventType'
import EventManager from '../../Listener/EventManager'
import {SceneDirection} from '../Enum/SceneStyle'
import SceneManager from '../SceneManager'

export default class AutoStyle implements IStyle {

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
        //直向
        if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
            if (SceneManager.instance.sceneDirection == SceneDirection.PORTRAIT) return;
            cc.log("直向");
            SceneManager.instance.updateSceneDirection(SceneDirection.PORTRAIT);
            EventManager.instance.setEvent(EventManager.gameTarget, GameEventType.PORTRAIT, SceneDirection.PORTRAIT);

            //橫向
        } else {
            if (SceneManager.instance.sceneDirection == SceneDirection.LANDSCAPE) return;
            cc.log("橫向");
            SceneManager.instance.updateSceneDirection(SceneDirection.LANDSCAPE);
            EventManager.instance.setEvent(EventManager.gameTarget, GameEventType.LANDSCAPE, SceneDirection.LANDSCAPE);
        }
    }

}