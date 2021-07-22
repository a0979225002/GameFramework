import SlotConfigManager from "../Framework/Config/SlotConfigManager";
import ButtonMethod from '../Framework/GlobalMethod/ButtonMethod'
import LanguageMethod from "../Framework/GlobalMethod/LanguageMethod";
import {LoadType} from '../Framework/LoadResources/Enum/LoadEnum'
import LoadResManager from '../Framework/LoadResources/LoadResManager'
import {SceneStyle, SceneDirectionType} from '../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification from "../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import ALoadingTemplate from '../Framework/Template/Loading/ALoadingTemplate'
import {socketJS} from "../Socket/Socket";
import SocketSetting from '../Socket/SocketSetting'
import {WebResponseManager} from "../Framework/WebResponse/WebResponseManager";
import {NoLineTableInfo} from "../../../Template";
import {ResponseType} from "../Framework/WebResponse/Enum/ResponseType";
import NoSleep = require('../Socket/NoSleep');

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoadingController extends ALoadingTemplate {

    @property(cc.ProgressBar)
    private progressBar: cc.ProgressBar = null;
    @property(cc.Button)
    private intoMainGameButton: cc.Button = null;
    @property(cc.Sprite)
    private intoMainGameButtonImg: cc.Sprite = null;
    @property(cc.Node)
    private loadingTextNode: cc.Node = null;
    @property(cc.Sprite)
    private logoImg: cc.Sprite = null;
    @property(cc.Node)
    private loadBG: cc.Node = null;
    private progressNum: number
    private loadTextToArray: Array<cc.Label>;
    private isLogoAnimaEnd: boolean
    private _sceneDirectionChangeObserver: SceneDirectionChangeObserver;

    /**
     * 自定義初始
     */
    public onCreat() {
        this.tableInfo = WebResponseManager.instance<NoLineTableInfo>().getResult(ResponseType.TABLE_INFO)
        socketJS.SFSLoad(SlotConfigManager.instance.gameNumber);
        this.isLogoAnimaEnd = false;                                    //初始化尚未結束logo動畫
        this.progressNum = 0;                                           //初始進度條為0;
        this.progressBar.progress = this.progressNum;                   //初始UI進度條為0
        this.loadTextToArray = [                                        //存放進度條說明文子Label
            this.loadingTextNode.children[0].getComponent(cc.Label),
            this.loadingTextNode.children[1].getComponent(cc.Label),
        ];
        this.loadTextToArray[0].string                                  //初始第一條進度條文字
            = SocketSetting.t("DES_00" + 1);
        ButtonMethod.addButtonEvent(                                    //添加進入主遊戲Button監聽事件
            this.intoMainGameButton,
            "intoMainGameButtonEventListener",
            this
        );
        this.intoMainGameButton.node.active = false;                    //初始關閉進入主遊戲Button顯示,等待進度載入完成後才顯示
        LanguageMethod.instance                                         //初始載入條的說明文字樣式
            .updateLabelStyle(this.loadTextToArray[0])
            .updateLabelStyle(this.loadTextToArray[1])

        SceneDirectionChangeNotification                                //初始第一次當前分辨率,自動移除監聽
            .instance.subscribe(this.getSceneDirectionChangeObserver(), false);

        cc.view.on("canvas-resize",this.changeLoadingBG,this)      //持續間當前遊戲長寬,如果有變更,不管是否更換方向都會更新bg大小
    }

    /**
     * 持續間當前遊戲長寬,如果有變更,不管是否更換方向都會更新bg大小
     */
    changeLoadingBG() {
        if (cc.view.getFrameSize().width < cc.view.getFrameSize().height) {
            let newHeight = 1000 / cc.view.getFrameSize().width * cc.view.getFrameSize().height;
            let newWidth = newHeight / 9 * 16;
            this.loadBG.height = newHeight;
            this.loadBG.width = newWidth;
        } else {
            this.loadBG.height = 960;
            this.loadBG.width = 1560;
        }
    }

    /**
     * 螢幕方向事件觀察員
     * @returns {SceneDirectionChangeObserver}
     */
    getSceneDirectionChangeObserver(): SceneDirectionChangeObserver {
        if (!this._sceneDirectionChangeObserver) {
            this._sceneDirectionChangeObserver =
                new SceneDirectionChangeObserver((type) => {
                    if (type == SceneDirectionType.LANDSCAPE) {
                        this.loadBG.height = 960;
                        this.loadBG.width = 1560;
                    } else {
                        let newHeight = 1000 / cc.view.getFrameSize().width * cc.view.getFrameSize().height;
                        let newWidth = newHeight / 9 * 16;
                        cc.log(newHeight, newWidth);
                        this.loadBG.height = newHeight;
                        this.loadBG.width = newWidth;
                    }
                }, this);
        }
        return this._sceneDirectionChangeObserver;
    }

    /**
     * 載入主資源
     */
    public onLoadResources() {
        LoadResManager.instance
            .loadAsset("music", LoadType.music, "music")
            .loadAsset("MainScene", LoadType.scene, null)
            .loadAsset("gridImg", LoadType.img, "image/grid/grid")
            .loadAsset("GameIcon", LoadType.img, "image/loadLanguage", true)
            .loadAsset("errorFromPrefab",LoadType.prefab,"prefab/ErrorFrame")
            .callback((progress) => {
                if (progress == 1) {
                    this.intoMainGameButtonImg.spriteFrame =
                        LoadResManager.instance.imgRes.get("GameIcon").get("btn_start");
                    this.logoImg.spriteFrame =
                        LoadResManager.instance.imgRes.get("GameIcon").get("logo");
                    this.logoAnimation();
                }
            }, "GameIcon")
            .callback((progress) => {
                this.progressBar.progress = progress;
                if (progress == 1) {
                    this.progressNum = progress;
                }
            });
    }

    /**
     * 載入次資源
     */
    public loadAssetBundle() {
        LoadResManager.instance
            .loadBundle("music2", LoadType.music, "music")
            .loadBundle("prefab", LoadType.prefab, "prefab")
    }

    /**
     * 載入外部script資源
     */
    public loadExternalScript() {
        LoadResManager.instance
            .loadExternalScript("record.2.0.0", LoadType.css, "lib/for1X/css")
            .loadExternalScript("record.2.0.0", LoadType.css, "game84/css")
            .loadExternalScript("swiper.min", LoadType.css, "lib/for1X/css")
            .loadExternalScript("game-record.2.0.0", LoadType.script, "lib/for1X/js")
            .loadExternalScript("vendors", LoadType.script, "lib/for1X/js");
    }

    /**
     * 更新進度條說明文字,輪播顯示
     * @param {number} textIndex
     */
    public updateProgressText(textIndex: number = 1) {
        textIndex++;
        if (textIndex > 7) textIndex = 1;
        let textHeight = this.loadTextToArray[0].node.height;
        let nextNodeY = this.loadTextToArray[1].node.y;
        this.loadTextToArray[1].string
            = SocketSetting.t("DES_00" + (textIndex));
        cc.tween(this.loadingTextNode)
            .delay(2)
            .to(1, {y: this.loadingTextNode.y + textHeight})
            .call(() => {
                let node = this.loadTextToArray[0].node;
                node.y = nextNodeY - textHeight;
                this.loadTextToArray.splice(0, 1);
                this.loadTextToArray.push(node.getComponent(cc.Label));
                //當進度尚未載入完成,且尚未登入成功,持續遞歸
                if (this.progressNum != 1 || !this.canPlayGame) {
                    this.updateProgressText(textIndex);
                }
            })
            .start();
    }

    /**
     * 配置該遊戲Scene適配寬高,與更新頻率
     */
    public sceneStyle() {
        SceneManager.instance
            .setDesignWidth(1280)
            .setDesignHeight(720)
            .updateSize(SceneStyle.AUTO)
            .designSceneSizeListenerAutoStart(100);
    }


    /**
     * 進入主遊戲按鈕點擊事件
     */
    private intoMainGameButtonEventListener() {
        this.useNoSleep();
        SceneManager.instance.changeScene("MainScene");
        SceneManager.instance.removeScene(this);
    }

    private useNoSleep() {
        if (!cc.sys.isMobile) {
            cc.log("不是mobile");
            return;
        }
        cc.log("我是手機");
        if (cc.sys.os == cc.sys.OS_IOS) {
            cc.log("我是 apple 手機 ,因為無法 noSleep 所以不執行監聽")
            return;
        }
        if (window.screenLock != 1) {
            cc["plug"] = cc["plug"] || {};
            cc["plug"].noSleep = new NoSleep();
            cc["plug"].noSleep.enable();
            cc.log(cc["plug"].noSleep)
            cc.game.on(cc.game.EVENT_HIDE, function () {
                // cc.log("游戏进入后台时触发的事件");
                cc["plug"].noSleep.disable();
            });
            cc.game.on(cc.game.EVENT_SHOW, function () {
                cc.log("近來搂")
                // cc.log("游戏进入前台运行时触发的事件");
                cc["plug"].noSleep = new NoSleep();
                cc["plug"].noSleep.enable();
            });
        }
    }

    /**
     * 進入主遊戲按鈕動畫
     */
    private intoMainGameButtonAnimation() {
        cc.tween(this.intoMainGameButton.node)
            .repeatForever(
                cc.tween()
                    .to(1, {y: this.intoMainGameButton.node.y + 15}, {easing: 'bounceIn'})
                    .to(1, {y: this.intoMainGameButton.node.y - 15}, {easing: 'bounceOut'})
            ).start();
    }

    /**
     * logo進場動畫
     */
    private logoAnimation() {
        cc.tween(this.logoImg.node.parent)
            .parallel(
                cc.tween().to(1.5, {y: 0}, {easing: 'bounceOut'}),
                cc.tween().to(2, {opacity: 255}, {easing: 'smooth'})
            )
            .call(() => {
                this.isLogoAnimaEnd = true;
            })
            .start();
    }

    /**
     * 監聽當前是否已經進入SFS登入,logo動畫已經結束,主加載已經完成
     * @param {number} dt
     * @protected
     */
    protected update(dt: number) {
        if (this.isLogoAnimaEnd && this.progressNum == 1 && this.canPlayGame) {
            //打開進入主遊戲button
            if (this.progressBar.node.active) {
                this.progressBar.node.active = false;
                this.intoMainGameButton.node.active = true;
                this.intoMainGameButtonAnimation();
            }
        }
    }

    protected onDestroy() {
        cc.view.off("canvas-resize",this.changeLoadingBG,this);
    }
}
