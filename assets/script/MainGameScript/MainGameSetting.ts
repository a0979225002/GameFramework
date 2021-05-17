import AudioManager from '../Framework/Audio/AudioManager'
import {AudioStateType} from "../Framework/Audio/Enum/AudioStateType";
import LoadResManager from '../Framework/LoadResources/LoadResManager'
import {GameType} from '../Framework/Process/Enum/GameState'
import GameProcess from "../Framework/Process/Procress/GameProcess";
import SlotGameProcess from '../Framework/Process/Procress/SlotGameProcess'
import SlotGameManager from '../Framework/Process/SlotGameManager'
import {SceneDirection} from '../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../Framework/Scene/SceneManager'
import AMainGameSettingTemplate from '../Framework/Template/Setting/AMainGameSettingTemplate'
import SocketSetting from "../Socket/SocketSetting";
import FreeProcessTest from "../Test/GameProcess/FreeProcessTest";
import MainGameNormalProcessTest from "../Test/GameProcess/MainGameNormalProcess.test";
import MainGameFreeProcess from './GameProcess/MainGameFreeProcess'
import MainGameNormalProcess from "./GameProcess/MainGameNormalProcess";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainGameSetting extends AMainGameSettingTemplate {

    @property(cc.Node)
    public allButtonH: cc.Node = null;
    @property(cc.Node)
    public allButtonV: cc.Node = null;
    @property(cc.Node)
    public mainGameModuleV: cc.Node = null;
    @property(cc.Node)
    public labelInformationH: cc.Node = null;
    @property(cc.Node)
    public labelInformationV: cc.Node = null;
    @property(cc.Node)
    public loadingDialog: cc.Node = null;

    prefabIndex: object = {
        "LookAt_Node": 3,
        "WinPointAnimation": 0,
        "FreeOpenFrame": 0,
        "FreeEnd": 0,
    }

    /**
     * 初始,重新更新 scene適配
     */
    protected onCreate() {

        this.sceneDirectionListener();//監聽 User 是否更換遊戲方向
        SceneManager.instance.updateSize();//重新更新mainScene的長寬是配
        this.updateSceneDirection(SceneManager.instance.sceneDirection);
        this.loadingDialog.setSiblingIndex(99);
    }

    /**
     * 建立詳情頁面
     */
    protected setHistoryDetail() {
        // 建立詳情頁面
        cc["plug"].Record.createMainElem();
        // 初始化title語系
        let obj_langStr = {};
        obj_langStr["gameTitle"] = 'GAME-000';
        obj_langStr["navTitle"] = SocketSetting.t("S_9068");
        obj_langStr["date"] = SocketSetting.t("S_9069");
        obj_langStr["id"] = SocketSetting.t("S_9070");
        obj_langStr["bet"] = SocketSetting.t("S_9071");
        obj_langStr["winLose"] = SocketSetting.t("S_9081");
        obj_langStr["noData"] = SocketSetting.t("S_9074");
        obj_langStr["loadDone"] = SocketSetting.t("S_9073");
        obj_langStr["mode"] = [SocketSetting.t("S_9078"), SocketSetting.t("S_9079"), SocketSetting.t("S_9080")];
        if (window.test) {
            cc["plug"].Record.init({obj_langStr});
        } else {
            let container = document.querySelector('#gameBox');
            cc["plug"].Record.init({obj_langStr}, {container});
        }
    }

    //更新遊戲當前執事還是橫式
    private updateSceneDirection(sceneType: SceneDirection) {

        if (sceneType == SceneDirection.LANDSCAPE) {

            this.labelInformationH.active = true;
            this.allButtonH.active = true;
            this.mainGameModuleV.active = false;
            this.labelInformationV.active = false;
            this.allButtonV.active = false;

        } else if (sceneType == SceneDirection.PORTRAIT) {

            this.labelInformationH.active = false;
            this.allButtonH.active = false;
            this.mainGameModuleV.active = true;
            this.labelInformationV.active = true;
            this.allButtonV.active = true;

        } else {
            cc.log(`MainGameSetting sceneDirectionEvent() 有錯誤 : ${sceneType}`);
        }
    }

    /**
     * 直橫向監聽器
     */
    private sceneDirectionListener() {

        SceneManager.instance.sceneDirectionEventListener((type) => {

            this.updateSceneDirection(type);

        })
    }

    /**
     * 音樂設定,未設定的音樂與效果音照原預設
     * 原預設值:
     * 音量：1
     * 可否疊加播放:否
     * 可否循環:否
     */
    protected audioSetting() {

        AudioManager.instance
            .settingMusic("NBS", 0.6, true)
            .settingMusic("FBS", 0.6, true)
            .settingEffect("SlotTrun", AudioStateType.CLEAR_TO_REPLAY, 1, true)
            .settingEffect("WinSingleLine", AudioStateType.CLEAR_TO_REPLAY, 0.3)
            .settingEffect("SlotStop", AudioStateType.SUPERIMPOSE, 1);
    }

    /**
     * 綁定要使用的流程Class
     * 使用方式:需自行繼承 抽象類 ExecutionContainer;
     */
    protected gameProcedureSetting() {

        let freeContainer = new MainGameFreeProcess();
        let freeProcess = new SlotGameProcess(freeContainer);

        const freeP = freeProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();

        // let normalContainer = new MainGameNormalProcess();
        // let normalProcess = new SlotGameProcess(normalContainer);
        //
        // const normalP = normalProcess
        //     .onCustomizeStart()
        //     .onSineInGrid()
        //     .onRunning()
        //     .onShowAnswer()
        //     .onCustomizeEnd()
        //     .onChangeStatus();

        // SlotGameManager.instance
        //     .setProcess(GameType.FREE, freeP)
        //     .setProcess(GameType.NORMAL, normalP)
        //     .setInitialProcess(normalP);

        let testContainer = new FreeProcessTest();
        let testProcess = new GameProcess(testContainer);

        const testP =  testProcess
            .onCreate()
            .onExecution()
            .onEnd()
            .onChangeStatus()

        SlotGameManager.instance
            .setProcess(GameType.FREE, freeP)
            .setProcess(GameType.NORMAL, testP)
            .setInitialProcess(testP);
    }

    /**
     * 實例化所有動態加載的prefab
     */
    protected prefabInstantiate() {

        let progress = LoadResManager.instance.secondaryLoadState.get("prefab");
        if (progress != 1) {
            LoadResManager.instance.callback((progress) => {
                if (progress == 1) {
                    this.makePrefabInstantiate();
                }
            }, "prefab");
        } else {
            this.makePrefabInstantiate();
        }
    }

    /**
     * 實例化Prefab Method
     * @private
     */
    private makePrefabInstantiate() {
        for (let key of Object.keys(this.prefabIndex)) {
            let prefab = cc.instantiate(LoadResManager.instance.prefabRes.get(key))
            this.node.parent.addChild(prefab);
            let index = this.prefabIndex[key];
            if (index) {
                prefab.setSiblingIndex(index);
            }
        }
    }
}