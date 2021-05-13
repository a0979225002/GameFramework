import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import {SceneDirection} from '../../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../../Framework/Scene/SceneManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

let self: WarningController;

@ccclass
class WarningController extends AGenericTemplate {

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

    public onCreate() {

        self = this;
        this.timer = null;
        this.warningH.active = false;
        this.warningV.active = false;
        this.SceneDirectionListener();

    }

    public languageSetting() {

        this.warningTextH.string = SocketSetting.t("S_9017");
        this.warningTextV.string = SocketSetting.t("S_9017")

        LanguageMethod.instance
            .updateLabelStyle(this.warningTextH)
            .updateLabelStyle(this.warningTextV);
    }

    public showWarning() {
        if (self.timer) {
            clearTimeout(self.timer);
        } else {
            self.checkScene(SceneManager.instance.sceneDirection);
            self.isShowWarning = true;
        }

        self.timer = window.setTimeout(() => {
            self.warningH.active = false;
            self.warningV.active = false;
            self.isShowWarning = false;
            self.timer = null;
        }, 1500);
    }

    protected SceneDirectionListener() {

        SceneManager.instance.sceneDirectionEventListener((type) => {
            if (this.isShowWarning) {
                self.checkScene(type);
            }
        })
    }

    /**
     * 確認當前方向
     * @param {SceneDirection} type
     * @protected
     */
    protected checkScene(type: SceneDirection) {

        switch (type) {
            case SceneDirection.LANDSCAPE:
                self.warningH.active = true;
                self.warningV.active = false;
                break;
            case SceneDirection.PORTRAIT:
                self.warningH.active = false;
                self.warningV.active = true;
                break;
        }
    }

}

export default new WarningController();