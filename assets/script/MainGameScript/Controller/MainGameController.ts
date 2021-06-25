import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotProcessManager from '../../Framework/Process/SlotProcessManager'
import {SceneDirectionType} from '../../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification
    from "../../Framework/Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver
    from "../../Framework/Listener/ObserverType/SceneObserver/SceneDirectionChangeObserver";

const {ccclass, property} = cc._decorator;


@ccclass
export default class MainGameController extends cc.Component {

    @property(cc.Node)
    private freeBGH: cc.Node = null;
    @property(cc.Node)
    private freeBGV: cc.Node = null;
    @property(cc.Node)
    private normalBGH: cc.Node = null
    @property(cc.Node)
    private normalBGV: cc.Node = null
    public static instance: MainGameController;

    protected onLoad() {
        MainGameController.instance = this;
        this.freeBGH.active = false;
        this.freeBGV.active = false;
        SceneDirectionChangeNotification
            .instance.subscribe(this.sceneDirectionObserverListener(), true);
    }

    public sceneDirectionObserverListener(): SceneDirectionChangeObserver {
        return new SceneDirectionChangeObserver((type) => {
            if (SlotProcessManager.instance.gameState != GameState.FREEING) return;
            switch (type) {
                case SceneDirectionType.PORTRAIT:
                    this.freeBGV.active = true;
                    break;
            }
        }, this);
    }

    public closeFreeBG() {

        this.freeBGH.active = false;
        this.freeBGV.active = false;

    }

    public showFreeBG() {

        if (SceneManager.instance.sceneDirection == SceneDirectionType.LANDSCAPE) {
            this.freeBGH.active = true;
        } else {
            this.freeBGH.active = true;
            this.freeBGV.active = true;
        }
    }
}