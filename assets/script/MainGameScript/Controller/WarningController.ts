import Language from "../../Framework/Global/Language";
import {SceneDirectionType} from '../../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification
    from "../../Framework/Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver
    from "../../Framework/Listener/ObserverType/SceneObserver/SceneDirectionChangeObserver";
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

@ccclass
export default class WarningController extends AGenericTemplate {

    @property(cc.Node)
    private warningH: cc.Node = null;
    @property(cc.Node)
    private warningV: cc.Node = null;
    @property(cc.Label)
    private warningTextH: cc.Label = null;
    @property(cc.Label)
    private warningTextV: cc.Label = null;

    private timer: number;
    private isShowWarning: boolean;
    public static instance: WarningController;

    protected onCreate() {
        WarningController.instance = this;
        this.timer = null;
        this.warningH.active = false;
        this.warningV.active = false;
        SceneDirectionChangeNotification
            .instance.subscribe(this.SceneDirectionObserverListener(), true); //註冊直橫式監聽
    }

    protected languageSetting() {

        this.warningTextH.string = SocketSetting.t("S_9017");
        this.warningTextV.string = SocketSetting.t("S_9017")

        Language.instance
            .updateLabelStyle(this.warningTextH)
            .updateLabelStyle(this.warningTextV);
    }

    public showWarning() {
        if (this.timer) {
            clearTimeout(this.timer);
        } else {
            this.checkScene(SceneManager.instance.sceneDirection);
            this.isShowWarning = true;
        }

        this.timer = window.setTimeout(() => {
            this.warningH.active = false;
            this.warningV.active = false;
            this.isShowWarning = false;
            this.timer = null;
        }, 1500);
    }

    private SceneDirectionObserverListener(): SceneDirectionChangeObserver {
        return new SceneDirectionChangeObserver((type) => {
            if (this.isShowWarning) {
                this.checkScene(type);
            }
        }, this)
    }

    /**
     * 確認當前方向
     * @param {SceneDirectionType} type
     * @protected
     */
    private checkScene(type: SceneDirectionType) {

        switch (type) {
            case SceneDirectionType.LANDSCAPE:
                this.warningH.active = true;
                this.warningV.active = false;
                break;
            case SceneDirectionType.PORTRAIT:
                this.warningH.active = false;
                this.warningV.active = true;
                break;
        }
    }
}