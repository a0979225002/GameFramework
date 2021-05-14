import {GameState} from '../../Framework/Procedure/Enum/GameState'
import SlotGameManager from '../../Framework/Procedure/SlotGameManager'
import {SceneDirection} from '../../Framework/Scene/Enum/SceneStyle'
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
        this.sceneDirectionListener();
    }

    public sceneDirectionListener() {
        SceneManager.instance.sceneDirectionEventListener((type) => {
            if (SlotGameManager.instance.gameState != GameState.FREEING) return;
            switch (type) {
                case SceneDirection.PORTRAIT:
                    this.freeBGV.active = true;
                    break;
            }
        })
    }

    public closeFreeBG() {

        self.freeBGH.active = false;
        self.freeBGV.active = false;

    }

    public showFreeBG() {

        if (SceneManager.instance.sceneDirection == SceneDirection.LANDSCAPE) {
            self.freeBGH.active = true;
        } else {
            self.freeBGH.active = true;
            self.freeBGV.active = true;
        }
    }
}

export default new MainGameController();