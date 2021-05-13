import {Music} from '../../Framework/Audio/AudioManager'
import ButtonMethod from '../../Framework/GlobalMethod/ButtonMethod'
import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {SceneDirection} from '../../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../../Framework/Scene/SceneManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import SocketSetting from '../../Socket/SocketSetting'
import MainGameButton from '../ButtonEvent/MainGameButton'

const {ccclass, property} = cc._decorator;

let self: InstructionController;

@ccclass
export default class InstructionController extends AGenericTemplate {

    @property(cc.Node)
    pageH: cc.Node = null;
    @property(cc.Node)
    pageV: cc.Node = null;
    @property(cc.Label)
    userMoneyTextH: cc.Label = null;
    @property(cc.Label)
    userMoneyTextV: cc.Label = null;
    @property(cc.Label)
    menuTextH: cc.Label = null;
    @property(cc.Label)
    menuTextV: cc.Label = null;
    @property(cc.Label)
    startButtonAutoTextH: cc.Label = null;
    @property(cc.Label)
    startButtonAutoTextV: cc.Label = null;
    @property(cc.Label)
    autoTextH: cc.Label = null;
    @property(cc.Label)
    autoTextV: cc.Label = null;
    @property(cc.Label)
    speedTextH: cc.Label = null;
    @property(cc.Label)
    speedTextV: cc.Label = null;

    protected onCreate() {

        self = this;
        switch (SceneManager.instance.sceneDirection) {
            case SceneDirection.LANDSCAPE:
                this.pageH.active = true;
                this.pageV.active = false;
                break;
            case SceneDirection.PORTRAIT:
                this.pageV.active = true;
                this.pageH.active = false;
                break;
        }

        ButtonMethod.addButtonEvent(
            this.pageH.getComponent(cc.Button),
            "pageTouchListener",
            this
        );

        ButtonMethod.addButtonEvent(
            this.pageV.getComponent(cc.Button),
            "pageTouchListener",
            this
        );

        SceneManager.instance.sceneDirectionEventListener(this.sceneDirectionListener);
    }

    protected languageSetting() {

        this.userMoneyTextH.string = SocketSetting.t("HELP_001");
        this.userMoneyTextV.string = SocketSetting.t("HELP_001");
        this.menuTextH.string = SocketSetting.t("HELP_005");
        this.menuTextV.string = SocketSetting.t("HELP_005");
        this.startButtonAutoTextH.string = SocketSetting.t("HELP_008");
        this.startButtonAutoTextV.string = SocketSetting.t("HELP_008");
        this.autoTextH.string = SocketSetting.t("S_1001");
        this.autoTextV.string = SocketSetting.t("S_1001");
        this.speedTextH.string = SocketSetting.t("HELP_004");
        this.speedTextV.string = SocketSetting.t("HELP_004");

        LanguageMethod.instance
            .updateLabelStyle(this.userMoneyTextH)
            .updateLabelStyle(this.userMoneyTextV)
            .updateLabelStyle(this.menuTextH)
            .updateLabelStyle(this.menuTextV)
            .updateLabelStyle(this.startButtonAutoTextH)
            .updateLabelStyle(this.startButtonAutoTextV)
            .updateLabelStyle(this.autoTextH)
            .updateLabelStyle(this.autoTextV)
            .updateLabelStyle(this.speedTextH)
            .updateLabelStyle(this.speedTextV)

    }

    /**
     * 離開說明頁進入遊戲遊玩待機模式
     * @private
     */
    @Music("NBS")
    private pageTouchListener() {
        MainGameButton.buttonOnEnable();
        this.node.destroy();
    }

    private sceneDirectionListener(type) {

        if (type == SceneDirection.LANDSCAPE) {

            self.pageH.active = true;
            self.pageV.active = false;

        } else if (type == SceneDirection.PORTRAIT) {

            self.pageV.active = true;
            self.pageH.active = false;

        } else {
            cc.log(`MainGameSetting sceneDirectionEvent() 有錯誤 : ${type}`);
        }

    }

    protected onDestroy() {

        EventManager.instance.destroyEvent(
            GameEventType.LANDSCAPE,
            EventManager.gameTarget,
            this.sceneDirectionListener
        );
        EventManager.instance.destroyEvent(
            GameEventType.PORTRAIT,
            EventManager.gameTarget,
            this.sceneDirectionListener
        );

    }

}