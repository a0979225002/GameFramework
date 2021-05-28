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
import FreeProcessTest from "../Test/GameProcess/FreeProcessTest";
import MainGameNormalProcessTest from "../Test/GameProcess/MainGameNormalProcess.test";
import MainGameFreeProcess from './GameProcess/MainGameFreeProcess'
import MainGameNormalProcess from "./GameProcess/MainGameNormalProcess";
import NoSleep = require('../Socket/NoSleep');

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
        //第一次加載,需先自行更新一次
        this.updateSceneDirection(SceneManager.instance.sceneDirection);
        //註冊scene樣式更新推波事件
        SceneDirectionChangeNotification.instance.subscribe(this.sceneDirectionObserverListener(), true);
        //重新更新scene方向,scene跳轉會造成需重新式配size問題
        SceneManager.instance.updateSize(SceneStyle.AUTO);//重新更新mainScene的長寬是配
        //將dialog節點放置在最後一個位置
        this.loadingDialog.setSiblingIndex(99);
        this.useNoSleep();
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

    private useNoSleep(){
        if(!cc.sys.isMobile){
            cc.log("不是mobile");
            return;
        }
        cc.log("我是手機");
        if(cc.sys.os == cc.sys.OS_IOS){
            cc.log("我是 apple 手機 ,因為無法 noSleep 所以不執行監聽")
            return;
        }
        if(window.screenLock != 1){
            cc["plug"] = cc["plug"]|| {};
            cc["plug"].noSleep = new NoSleep() ;
            cc["plug"].noSleep.enable();
            cc.log( cc["plug"].noSleep)
            cc.game.on(cc.game.EVENT_HIDE, function () {
                // cc.log("游戏进入后台时触发的事件");
                cc["plug"].noSleep.disable();
            });
            cc.game.on(cc.game.EVENT_SHOW, function () {
                // cc.log("游戏进入前台运行时触发的事件");
                cc["plug"].noSleep = new NoSleep();
                cc["plug"].noSleep.enable();
            });
        }
    }
    /**
     * 直橫向監聽器
     */
    private sceneDirectionObserverListener(): SceneDirectionChangeObserver {
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

        let normalContainer = new MainGameNormalProcess();
        let normalProcess = new SlotGameProcess(normalContainer);
        const normalP = normalProcess
            .onCustomizeStart()
            .onSineInGrid()
            .onRunning()
            .onShowAnswer()
            .onCustomizeEnd()
            .onChangeStatus();

        SlotGameManager.instance
            .setProcess(GameType.FREE, freeP)
            .setProcess(GameType.NORMAL, normalP)
            .setProcess(GameType.NORMAL, this.getTestProcess())
            // .setProcess("Test2", this.getTestProcess2())
            // .setInitialProcess(normalP);
            .setInitialProcess(this.getTestProcess());
        // .setInitialProcess(this.getTestProcess2());
    }

    /**
     * 測試:
     * @returns {GameProcess}
     * @private
     */
    private getTestProcess(): GameProcess {

        // setTimeout(() => {
        //     cc.log("UserMoneyChangeNotification", UserMoneyChangeNotification.instance.getAllSubscribe());
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
    getTestProcess2(): SlotGameProcess {
        let testContainer = new MainGameNormalProcessTest();
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