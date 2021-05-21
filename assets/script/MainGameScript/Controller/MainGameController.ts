import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import {SceneDirectionType} from '../../Framework/Scene/Enum/SceneStyle'
import SceneDirectionChangeNotification from "../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import SceneManager from '../../Framework/Scene/SceneManager'

const {ccclass, property} = cc._decorator;

let self: MainGameController;

@ccclass
class MainGameController extends cc.Component {

    @property(cc.Node)
    private freeBGH: cc.Node = null;
    @property(cc.Node)
    private freeBGV: cc.Node = null;
    @property(cc.Node)
    private normalBGH: cc.Node = null
    @property(cc.Node)
    private normalBGV: cc.Node = null

    protected onLoad() {
        self = this;
        this.freeBGH.active = false;
        this.freeBGV.active = false;
        SceneDirectionChangeNotification.instance.subscribe(this.sceneDirectionObserverListener(),true);
    }

    public sceneDirectionObserverListener(): SceneDirectionChangeObserver {

        return new SceneDirectionChangeObserver((type) => {
            if (SlotGameManager.instance.gameState != GameState.FREEING) return;
            switch (type) {
                case SceneDirectionType.PORTRAIT:
                    this.freeBGV.active = true;
                    break;
            }
        }, this);
    }

    public closeFreeBG() {

        self.freeBGH.active = false;
        self.freeBGV.active = false;

    }

    public showFreeBG() {

        if (SceneManager.instance.sceneDirection == SceneDirectionType.LANDSCAPE) {
            self.freeBGH.active = true;
        } else {
            self.freeBGH.active = true;
            self.freeBGV.active = true;
        }
    }
}

export default new MainGameController();