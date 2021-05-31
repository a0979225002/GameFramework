import {AutoType, LanguageType} from '../Framework/Config/Enum/ConfigEnum'
import SlotConfigManager from '../Framework/Config/SlotConfigManager'
import ButtonMethod from '../Framework/GlobalMethod/ButtonMethod'
import LanguageMethod from "../Framework/GlobalMethod/LanguageMethod";
import {LoadType} from '../Framework/LoadResources/Enum/LoadEnum'
import LoadResManager from '../Framework/LoadResources/LoadResManager'
import {SceneStyle, SceneDirectionType} from '../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification from "../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import ALoadingTemplate from '../Framework/Template/Loading/ALoadingTemplate'
import {FreeResultType} from '../Framework/WebResponse/Enum/FreeResultType'
import {ResultType} from '../Framework/WebResponse/Enum/ResultType'
import {ResponseType} from '../Framework/WebResponse/Enum/ResponseType'
import SocketSetting from '../Socket/SocketSetting'

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
     * 遊戲整體參數設置
     */
    public configSetting() {
        SlotConfigManager.instance
            .setAutoCont(AutoType.auto)                         //初始自動次數 AutoType Enum
            .setAutoState(false)                                //自動開關
            .setUserBet(0)                                      //初始玩家押注倍率
            .setSpeedState(false)                               //加速開關
            .setMusicOnMute(false)                              //是否關閉背景音
            .setEffectOnMute(false)                             //是否關閉效果音
            .setGameNumber(84)                                  //遊戲名稱
            .setMusicVolume(1)                                  //初始背景音量
            .setEffectVolume(1)                                 //初始音效音量
            .setLanguage(LanguageType.America)                  //測試時才有用,當有PHP檔案蓋過WebRequest類時此參數將自動失效
            .setExternallyLoadURL("http://10.10.0.47/games")    //同上
            .setTableInfo(ResponseType.NOT_LINE)                 //初始化 tableInfo Model
            .setBetResult(ResultType.NOT_LINE)                    //初始化 Result Model
            .setFreeResult(FreeResultType.NOT_LINE)               //初始化 FreeResult Model
            .setFrameWorkDebug(true)                           //強烈要求正式上線時關閉
            .builder();
    }

    /**
     * 自定義初始
     */
    public onCreat() {
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
        LanguageMethod.instance
            .updateLabelStyle(this.loadTextToArray[0])
            .updateLabelStyle(this.loadTextToArray[1])
        SceneDirectionChangeNotification
            .instance.subscribe(this.getSceneDirectionChangeObserver(), true);
    }

    getSceneDirectionChangeObserver(): SceneDirectionChangeObserver {
        if (!this._sceneDirectionChangeObserver) {
            this._sceneDirectionChangeObserver =
                new SceneDirectionChangeObserver((type) => {
                    cc.log(type);
                    if (type == SceneDirectionType.LANDSCAPE) {
                        this.loadBG.height = 960;
                        this.loadBG.width = 1560;
                    } else {
                        let newHeight = 1000 / cc.view.getFrameSize().width * cc.view.getFrameSize().height;
                        let newWidth = newHeight / 9 * 16;
                        cc.log(newHeight,newWidth);
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
        SceneManager.instance.changeScene("MainScene");
        SceneManager.instance.removeScene(this);
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
        SceneDirectionChangeNotification
            .instance.unsubscribe(this.getSceneDirectionChangeObserver());
    }
}