import FreeOpenProcessTest from "../../Test/GameProcess/FreeOpenProcess.test";
import FreeProcessTest from "../../Test/GameProcess/FreeProcessTest";
import NormalBigWinProcessTest from "../../Test/GameProcess/NormalBigWinProcess.test";
import AudioManager from '../Framework/Audio/AudioManager'
import {AudioStateType} from "../Framework/Audio/Enum/AudioStateType";
import LoadResManager from '../Framework/LoadResources/LoadResManager'
import {GameType} from '../Framework/Process/Enum/GameState'
import GameProcess from "../Framework/Process/Procress/GameProcess";
import SlotGameProcess from '../Framework/Process/Procress/SlotGameProcess'
import SlotGameManager from '../Framework/Process/SlotGameManager'
import {SceneDirectionType, SceneStyle} from '../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification from "../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import AMainGameSettingTemplate from '../Framework/Template/Setting/AMainGameSettingTemplate'
import SocketSetting from "../Socket/SocketSetting";
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
        //註冊scene樣式更新推播事件
        SceneDirectionChangeNotification
            .instance
            .subscribe(this.getSceneDirectionObserver(), true);
        //重新更新scene方向,scene跳轉會造成需重新式配size問題
        //重新更新mainScene的長寬是配
        SceneManager.instance.updateSize(SceneStyle.AUTO);
        //第一次加載,需先自行更新一次
        this.updateSceneDirection(SceneManager.instance.sceneDirection);

        //將載入效果dialog節點放置在倒數第二個位置
        this.loadingDialog.setSiblingIndex(98);

        //將錯誤視窗dialog節點放置最後一個位置
        let errorFrame = cc.instantiate(LoadResManager.instance.prefabRes.get("ErrorFramePrefab"));
        this.node.parent.addChild(errorFrame);
        errorFrame.setSiblingIndex(99)
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


    /**
     * 直橫向監聽器
     */
    private getSceneDirectionObserver(): SceneDirectionChangeObserver {
        return new SceneDirectionChangeObserver((type) => {
            this.updateSceneDirection(type);
        }, this);
    }

    /**
     * 推波回傳當前scene直橫樣式
     * 更新遊戲當前直式還是橫式
     * @param {SceneDirectionType} sceneType
     * @private
     */
    private updateSceneDirection(sceneType: SceneDirectionType) {
        if (sceneType == SceneDirectionType.LANDSCAPE) {
            this.labelInformationH.active = true;
            this.allButtonH.active = true;
            this.mainGameModuleV.active = false;
            this.labelInformationV.active = false;
            this.allButtonV.active = false;
        } else if (sceneType == SceneDirectionType.PORTRAIT) {
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
     * 使用方式:需自行繼承 介面 IExecutionContainer;
     */
    protected gameProcessSetting() {
        let normalContainer = new MainGameNormalProcess();
        let normalProcess = new SlotGameProcess(normalContainer);
        const normalP = normalProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();

        let freeContainer = new MainGameFreeProcess();
        let freeProcess = new SlotGameProcess(freeContainer);
        const freeP = freeProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();

        SlotGameManager.instance
            .setProcess(GameType.FREE, freeP)
            .setProcess(GameType.NORMAL, normalP)
            // .setProcess("FreeOpenTest",this.getFreeOpenTestProcess())
            // .setProcess("BigWinTest",this.getBigWinTestProcess())
            // .setProcess("BigWinTest", this.getTestProcess2())
            .setInitialProcess(GameType.NORMAL);
    }

    /**
     * 測試:
     * @returns {GameProcess}
     * @private
     */
    private getFreeStateProcess(): GameProcess {
        // setTimeout(() => {
        //     cc.log("", UserMoneyChangeNotification.instance.getAllSubscribe());
        //     cc.log("UserTotalBetChangeNotification", UserTotalBetChangeNotification.instance.getAllSubscribe());
        //     cc.log("UserWinPointStateNotification", UserWinPointStateNotification.instance.getAllSubscribe());
        //     cc.log("SceneDirectionChangeNotification", SceneDirectionChangeNotification.instance.getAllSubscribe());
        //     cc.log("AutoStateChangeNotification", AutoStateChangeNotification.instance.getAllSubscribe());
        //     cc.log("ScrollFocusStateNotification", ScrollFocusStateNotification.instance.getAllSubscribe());
        //     cc.log("StopNowStateNotification", StopNowStateNotification.instance.getAllSubscribe());
        // }, 1000)
        let testContainer = new FreeProcessTest();
        let testProcess = new GameProcess(testContainer);
        return testProcess
            .onCreate()
            .onExecution()
            .onEnd()
            .onChangeStatus();
    }

    /**
     * 測試:
     * @returns {SlotGameProcess}
     */
    getBigWinTestProcess(): SlotGameProcess {
        let testContainer = new NormalBigWinProcessTest();
        let testProcess = new SlotGameProcess(testContainer);
        return testProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();
    }

    /**
     * 測試:
     * @returns {SlotGameProcess}
     */
    getFreeOpenTestProcess(): GameProcess {
        let testContainer = new FreeOpenProcessTest();
        let testProcess = new GameProcess(testContainer);
        return testProcess
            .onCreate()
            .onExecution()
            .onEnd()
            .onChangeStatus();
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