import AudioManager, {Effect} from '../../Framework/Audio/AudioManager'
import {AutoType} from '../../Framework/Config/Enum/AutoType'
import Button from '../../Framework/Global/Button'
import Language from "../../Framework/Global/Language";
import {GameState} from '../../Framework/Process/Enum/GameState'
import AutoStateChangeNotification
    from "../../Framework/Listener/NotificationType/GameNotification/AutoStateChangeNotification";
import UserTotalBetChangeNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserTotalBetChangeNotification";
import UserTotalBetChangeObserver from "../../Framework/Listener/ObserverType/GameObserver/UserTotalBetChangeObserver";
import SlotProcessManager from '../../Framework/Process/SlotProcessManager'
import AMainGameDoubleButtonTemplate
    from '../../Framework/Template/ButtonEvent/MainButton/AMainGameDoubleButtonTemplate'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineTableInfo from "../../Framework/WebResponse/ServerDataModel/TableInfo/NoLineTableInfo";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import SocketSetting from '../../Socket/SocketSetting'
import SlotController from '../Controller/SlotController'
import WarningController from '../Controller/WarningController'
import MainGameLabel from '../LabelEvent/MainGameLabel'
import MenuPageButton from './MenuPageButton'
import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;

@ccclass
export default class MainGameButton extends AMainGameDoubleButtonTemplate {

    @property(cc.Button)
    protected autoButtonH: cc.Button = null
    @property(cc.Button)
    protected autoButtonV: cc.Button = null
    @property(cc.Button)
    protected betSelectionButtonH: cc.Button = null
    @property(cc.Button)
    protected betSelectionButtonV: cc.Button = null
    @property(cc.Button)
    protected speedUpButtonH: cc.Button = null
    @property(cc.Button)
    protected speedUpButtonV: cc.Button = null
    @property(cc.Button)
    protected startButtonH: cc.Button = null
    @property(cc.Button)
    protected startButtonV: cc.Button = null
    @property(cc.Sprite)
    protected startButtonImgH: cc.Sprite = null;
    @property(cc.Sprite)
    protected startButtonImgV: cc.Sprite = null;
    @property(cc.Button)
    protected menuButtonH: cc.Button = null
    @property(cc.Button)
    protected menuButtonV: cc.Button = null
    @property(cc.Button)
    protected betButton: cc.Button = null;
    @property(cc.Node)
    protected totalFrameNode: cc.Node = null;
    @property(cc.Node)
    protected startAutoNodeH: cc.Node = null;
    @property(cc.Node)
    protected startAutoNodeV: cc.Node = null;
    @property(cc.Label)
    protected startAutoCountH: cc.Label = null;
    @property(cc.Label)
    protected startAutoCountV: cc.Label = null;
    @property(cc.Node)
    protected startAutoIconH: cc.Node = null;
    @property(cc.Node)
    protected startAutoIconV: cc.Node = null;
    @property(cc.Label)
    protected titleText: cc.Label = null;
    @property(cc.SpriteAtlas)
    protected buttonSpriteAtlas: cc.SpriteAtlas = null;
    protected tableInfo: NoLineTableInfo;
    protected autoCount: number;
    private buttonSpriteFrame: { SPEED_OFF: cc.SpriteFrame; AUTO_OFF: cc.SpriteFrame; SPEED_ON: cc.SpriteFrame; AUTO_ON: cc.SpriteFrame; STANDBY: cc.SpriteFrame; PLAYING: cc.SpriteFrame }
    private readonly betButtonToArray: Array<cc.Node>;//所有押注按鈕
    private color: { GRAY: any; WHITE: any; YELLOW: any };
    private userTotalBetChangeObserver: UserTotalBetChangeObserver;
    public static instance: MainGameButton;

    constructor() {
        super();
        this.betButtonToArray = new Array<cc.Node>();
        this.color = {
            YELLOW: cc.color().fromHEX("#FFE000"),
            GRAY: cc.color().fromHEX("#8B8787"),
            WHITE: cc.color().fromHEX("#FFFCFC"),
        }
    }
    protected onCreate() {
        MainGameButton.instance = this;

        this.tableInfo =
            WebResponseManager
                .instance<NoLineTableInfo>()
                .getResult(ResponseType.TABLE_INFO);

        this.startButtonDisable();
        this.autoCount = SlotProcessManager.instance.autoType;
        this.buttonSpriteFrame = {
            SPEED_ON: this.buttonSpriteAtlas.getSpriteFrame("FastOn"),
            SPEED_OFF: this.buttonSpriteAtlas.getSpriteFrame("FastOff"),
            AUTO_ON: this.buttonSpriteAtlas.getSpriteFrame("btn_auto_on"),
            AUTO_OFF: this.buttonSpriteAtlas.getSpriteFrame("btn_auto"),
            STANDBY: this.buttonSpriteAtlas.getSpriteFrame("Spin_ICON"),
            PLAYING: this.buttonSpriteAtlas.getSpriteFrame("Stop_ICON"),
        }
        this.offBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0]);
        this.offBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
        this.buttonStanByAnimation(this.startButtonImgH.node);
        this.buttonStanByAnimation(this.startButtonImgV.node);
        this.totalFrameNode.active = false;
        this.startAutoNodeH.active = false;
        this.startAutoNodeV.active = false;

        UserTotalBetChangeNotification                                                  //押注事件推播綁定
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
    }

    protected languageSetting() {

        //請選擇下注:
        this.titleText.string = SocketSetting.t("S_9016");
        Language
            .setLabel(this.titleText)
            .updateStyle();
    }


    @Effect("BtnClick")
    protected autoEvent(isAutoState: boolean, autoType) {
        if (isAutoState) {
            this.autoButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_ON
            this.autoButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_ON
            //自動按鈕開啟時關閉特效
            this.autoButtonH.node.children[1].active = false;
            this.autoButtonV.node.children[1].active = false;
            this.checkAutoTypeToButton(autoType);
        } else {
            this.autoButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_OFF
            this.autoButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.AUTO_OFF

            //自動按鈕未開啟時特效
            this.autoButtonH.node.children[1].active = true;
            this.autoButtonV.node.children[1].active = true;

            this.startButtonImgH.node.active = true;
            this.startButtonImgV.node.active = true;
            this.startAutoNodeH.active = false;
            this.startAutoNodeV.active = false;

            if (SlotProcessManager.instance.gameState == GameState.PLAYING) {
                this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.PLAYING;
                this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.PLAYING;
            }
        }
    }

    private checkAutoTypeToButton(autoType: AutoType) {

        this.startAutoNodeH.active = true;
        this.startAutoNodeV.active = true;
        this.startButtonImgH.node.active = false;
        this.startButtonImgV.node.active = false;

        switch (autoType) {
            case AutoType.AUTO:
                this.startAutoCountH.node.active = false;
                this.startAutoCountV.node.active = false;
                this.startAutoIconH.active = true;
                this.startAutoIconV.active = true;
                break;
            case AutoType.FREE_END:
                this.startAutoCountH.node.active = false;
                this.startAutoCountV.node.active = false;
                this.startAutoIconH.active = false;
                this.startAutoIconV.active = false;
                break;
            default:
                this.startAutoCountH.node.active = true;
                this.startAutoCountV.node.active = true;
                this.startAutoIconH.active = false;
                this.startAutoIconV.active = false;
                this.startAutoCountH.string = String(autoType);
                this.startAutoCountV.string = String(autoType);
                this.autoCount = autoType;
        }
    }

    @Effect("BtnClick")
    protected totalBetFrameTouchEvent(isShowTotalBetFrame: boolean) {

        if (isShowTotalBetFrame) {
            this.showBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0]);
            this.showBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
            this.totalFrameNode.active = true;
        } else {
            this.offBetFrameButtonAnimation(this.betSelectionButtonH.node.children[0])
            this.offBetFrameButtonAnimation(this.betSelectionButtonV.node.children[0]);
            this.totalFrameNode.active = false;
        }

    }

    //旋轉180度 下上方式持續跳動
    private showBetFrameButtonAnimation(node: cc.Node) {
        cc.Tween.stopAllByTarget(node)
        node.y = 0;
        cc.tween(node)
            .to(0.3, {angle: -180}, {easing: "smooth"})
            .repeatForever(
                cc.tween()
                    .to(0.5, {y: -10}, {easing: "quintOut"})
                    .to(0.5, {y: 0}, {easing: "quintIn"})
            ).start();
    }

    //轉正0度 上下方式持續跳動
    private offBetFrameButtonAnimation(node: cc.Node) {
        cc.Tween.stopAllByTarget(node);
        node.y = 0;
        cc.tween(node)
            .to(0.3, {angle: 0}, {easing: "smooth"})
            .repeatForever(
                cc.tween()
                    .to(0.5, {y: 10}, {easing: "quintIn"})
                    .to(0.5, {y: 0}, {easing: "quintOut"})
            ).start();
    }

    @Effect("BtnClick")
    protected speedUpEvent(isSpeedUp: boolean) {

        if (isSpeedUp) {
            this.speedUpButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_ON;
            this.speedUpButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_ON;
        } else {
            this.speedUpButtonH.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_OFF;
            this.speedUpButtonV.node.children[0]
                .getComponent(cc.Sprite).spriteFrame = this.buttonSpriteFrame.SPEED_OFF;
        }
    }

    /**
     * 流程開始前 UI事件
     * @protected
     */
    protected startEvent() {

        this.startButtonImgH.node.angle = 0;
        this.startButtonImgV.node.angle = 0;

        cc.Tween.stopAllByTarget(this.startButtonImgV.node);
        cc.Tween.stopAllByTarget(this.startButtonImgH.node);

        //如果該局狀態不是auto狀態,才給予按鈕聲音
        if (!SlotProcessManager.instance.isAutoState) {
            this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.PLAYING;
            this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.PLAYING;
            AudioManager.instance.effectPlay("BtnClick");
            return;
        }

        //如果當前auto狀態是有次數的,將減去該局次數
        if (SlotProcessManager.instance.isAutoState &&
            SlotProcessManager.instance.autoType != AutoType.AUTO &&
            SlotProcessManager.instance.autoType != AutoType.FREE_END
        ) {
            this.autoCount--;
            this.startAutoCountH.string = String(this.autoCount);
            this.startAutoCountV.string = String(this.autoCount);
        }
    }

    /**
     * 當流程結束時 UI事件
     * @protected
     */
    protected endEvent() {
        if (SlotProcessManager.instance.isAutoState && this.autoCount == 0) {
            let autoType = SlotProcessManager.instance.autoType;
            AutoStateChangeNotification.instance.notify(false, autoType, autoType);
        }
        if (!SlotProcessManager.instance.isAutoState) {
            this.buttonStanByAnimation(this.startButtonImgV.node);
            this.buttonStanByAnimation(this.startButtonImgH.node);
        }

    }

    /**
     * 待機模式下 button動畫
     * @param {cc.Node} node
     * @private
     */
    private buttonStanByAnimation(node: cc.Node) {

        this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.STANDBY;
        this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.STANDBY;

        cc.tween(node)
            .repeatForever(
                cc.tween()
                    .to(0.8, {angle: -50}, {easing: "bounceOut"})
                    .to(0.8, {angle: 50}, {easing: "backOut"})
            ).start();
    }

    /**
     * 押注視窗按鈕實現
     * @protected
     */
    protected makeTotalBetButtonToListener() {

        let lineBetLength = this.tableInfo.LineTotalBet.length;
        let containerNode = this.betButton.node.parent;

        for (let i = 0; i < lineBetLength; i++) {
            //複製按鈕
            let node = cc.instantiate(this.betButton.node);
            node.name = "Bet" + i + "_Button";
            let lineBetValue = this.tableInfo.LineTotalBet[i];

            //更新該bet button內的數字
            let label = node.getChildByName("betNumber_Label").getComponent(cc.Label);
            label.string = String(lineBetValue)
            containerNode.addChild(node);
            this.betButtonToArray.push(node);
            //綁定全部按鈕點擊事件
            Button.addButtonEvent(
                node.getComponent(cc.Button),
                "betButtonTouchEvent",
                this,
                i
            );
        }

        let nowBetIndex = SlotProcessManager.instance.userBetPoint.LineBet;
        let initialBetImg = this.betButtonToArray[nowBetIndex].getComponent(cc.Button);

        initialBetImg.normalColor = this.color.YELLOW;
        initialBetImg.hoverColor = this.color.YELLOW;

        //當全部按鈕添加完,刪除複製用的按鈕
        this.betButton.node.destroy();
    }

    /**
     * 總押住視窗中,各別押住按鈕點時 推播事件
     * @param event
     * @param callback
     */
    @Effect("BtnClick")
    private betButtonTouchEvent(event, callback: number) {
        let beforeIndex = SlotProcessManager.instance.userBetPoint.LineBet;
        UserTotalBetChangeNotification.instance.notify(beforeIndex, callback);
    }

    /**
     * 監聽 如果有更換押注金額 將更新當前狀態
     * @private
     */
    private getUserTotalBetChangeObserver(): UserTotalBetChangeObserver {
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver(
                (beforeIndex, afterIndex) => {
                    this.updateTotalBetEvent(beforeIndex, afterIndex);
                }, this);
        }
        return this.userTotalBetChangeObserver;
    }

    /**
     * 更新 用戶押住事件
     * @param beforeIndex{number} : 更新前的押住位置
     * @param afterIndex{number} : 更新後的押住位置
     * @private
     */
    @Effect("BtnClick")
    private updateTotalBetEvent(beforeIndex: number, afterIndex: number) {
        cc.log(beforeIndex,afterIndex,this.betButtonToArray)
        let beforeBetNode = this.betButtonToArray[beforeIndex].getComponent(cc.Button);
        let afterBetNode = this.betButtonToArray[afterIndex].getComponent(cc.Button);

        beforeBetNode.normalColor = this.color.GRAY;
        beforeBetNode.hoverColor = this.color.WHITE;

        afterBetNode.normalColor = this.color.YELLOW;
        afterBetNode.hoverColor = this.color.YELLOW;

        SlotController.instance.closeWinGrid();
        MainGameLabel.instance.remove();

    }

    @Effect("OpenMenu")
    protected menuEvent() {
        MenuPageButton.instance.showMenu();
    }

    /**
     * 警告事件
     * @protected
     */
    protected warningEvent() {
        WarningController.instance.showWarning();
    }

    /**
     * 一般狀態與免費狀態中切換顯示button
     * @param {boolean} isShow
     */
    public switchButton(isShow: boolean) {
        this.startButtonH.node.active = isShow;
        this.startButtonV.node.active = isShow;
        this.autoButtonH.node.active = isShow;
        this.autoButtonV.node.active = isShow;
        this.menuButtonH.node.active = isShow;
        this.menuButtonV.node.active = isShow;
        this.betSelectionButtonH.node.active = isShow;
        this.betSelectionButtonV.node.active = isShow;
        if (isShow) {
            this.startButtonOnEnable();
        } else {
            this.startButtonDisable();
        }
    }
}