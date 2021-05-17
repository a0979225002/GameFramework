import AudioManager, {Effect} from '../../Framework/Audio/AudioManager'
import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import ButtonMethod from '../../Framework/GlobalMethod/ButtonMethod'
import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import AMainGameDoubleButtonTemplate from '../../Framework/Template/ButtonEvent/AMainGameDoubleButtonTemplate'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import SocketSetting from '../../Socket/SocketSetting'
import SlotController from '../Controller/SlotController'
import WarningController from '../Controller/WarningController'
import MainGameLabel from '../LabelEvent/MainGameLabel'
import MenuPageButton from './MenuPageButton'


const {ccclass, property} = cc._decorator;

let self: MainGameButton;

@ccclass
class MainGameButton extends AMainGameDoubleButtonTemplate {

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
    private buttonSpriteFrame: { SPEED_OFF: cc.SpriteFrame; AUTO_OFF: cc.SpriteFrame; SPEED_ON: cc.SpriteFrame; AUTO_ON: cc.SpriteFrame; STANDBY: cc.SpriteFrame; PLAYING: cc.SpriteFrame }
    private betButtonToArray: Array<cc.Node>;
    protected autoCount: number;
    private color: { GRAY: any; WHITE: any; YELLOW: any };

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

        self = this;
        this.buttonDisable();
        this.autoCount = SlotGameManager.instance.autoType;
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
        this.userTotalBetEventListener();
        this.totalFrameNode.active = false;
        this.startAutoNodeH.active = false;
        this.startAutoNodeV.active = false;
    }

    protected languageSetting() {
        //請選擇下注
        this.titleText.string = SocketSetting.t("S_9016")
        LanguageMethod.instance.updateLabelStyle(this.titleText);
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

            if (SlotGameManager.instance.gameState == GameState.PLAYING) {
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
            case AutoType.auto:
                this.startAutoCountH.node.active = false;
                this.startAutoCountV.node.active = false;
                this.startAutoIconH.active = true;
                this.startAutoIconV.active = true;
                break;
            case AutoType.freeEnd:
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
    protected showBetFrameButtonAnimation(node: cc.Node) {
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
    protected offBetFrameButtonAnimation(node: cc.Node) {
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

        if (!SlotGameManager.instance.isAutoState) {
            this.startButtonImgH.spriteFrame = this.buttonSpriteFrame.PLAYING;
            this.startButtonImgV.spriteFrame = this.buttonSpriteFrame.PLAYING;
            AudioManager.instance.effectPlay("BtnClick");
            return;
        }

        if (SlotGameManager.instance.isAutoState &&
            SlotGameManager.instance.autoType != AutoType.auto &&
            SlotGameManager.instance.autoType != AutoType.freeEnd
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
        if (SlotGameManager.instance.isAutoState && this.autoCount == 0) {
            EventManager.instance.setEvent(EventManager.gameTarget, GameEventType.AUTO);
        }
        if (!SlotGameManager.instance.isAutoState) {
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

        let lineBetLength = WebResponseManager.instance.tableInfo.LineTotalBet.length;
        let containerNode = this.betButton.node.parent;

        for (let i = 0; i < lineBetLength; i++) {
            //複製按鈕
            let node = cc.instantiate(this.betButton.node);
            node.name = "Bet" + i + "_Button";
            let lineBetValue = WebResponseManager.instance.tableInfo.LineTotalBet[i];

            //更新該bet button內的數字
            let label = node.getChildByName("betNumber_Label").getComponent(cc.Label);

            label.string = String(lineBetValue)

            containerNode.addChild(node);

            this.betButtonToArray.push(node);
            //綁定全部按鈕點擊事件
            ButtonMethod.addButtonEvent(
                node.getComponent(cc.Button),
                "betButtonTouchEvent",
                this,
                String(i)
            );
        }

        let nowBetIndex = SlotGameManager.instance.userBetPoint.LineBet;
        let initialBetImg = this.betButtonToArray[nowBetIndex].getComponent(cc.Button);

        initialBetImg.normalColor = this.color.YELLOW;
        initialBetImg.hoverColor = this.color.YELLOW;

        //當全部按鈕添加完,刪除複製用的按鈕
        this.betButton.node.destroy();
    }

    /**
     * 總押住視窗中,各別押住按鈕點時 推撥事件
     * @param event
     * @param callback
     */
    @Effect("BtnClick")
    protected betButtonTouchEvent(event, callback: number) {

        EventManager
            .instance
            .setEvent(EventManager.gameTarget, GameEventType.USER_TOTAL_BET, callback);

    }

    /**
     * 監聽 如果有更換押注金額 將更新當前狀態
     * @private
     */
    private userTotalBetEventListener() {
        SlotGameManager.instance.userTotalBetEventListener((beforeIndex, afterIndex) => {
            this.updateTotalBetEvent(beforeIndex, afterIndex);
        })
    }

    /**
     * 更新 用戶押住事件
     * @param beforeIndex{number} : 更新前的押住位置
     * @param afterIndex{number} : 更新後的押住位置
     * @private
     */
    @Effect("BtnClick")
    private updateTotalBetEvent(beforeIndex: number, afterIndex: number) {

        let beforeBetNode = this.betButtonToArray[beforeIndex].getComponent(cc.Button);
        let afterBetNode = this.betButtonToArray[afterIndex].getComponent(cc.Button);

        beforeBetNode.normalColor = this.color.GRAY;
        beforeBetNode.hoverColor = this.color.WHITE;

        afterBetNode.normalColor = this.color.YELLOW;
        afterBetNode.hoverColor = this.color.YELLOW;

        SlotController.closeWinGrid();
        MainGameLabel.remove();

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
        WarningController.showWarning();
    }

    /**
     * 一般狀態與免費狀態中切換顯示button
     * @param {boolean} isShow
     */
    public switchButton(isShow: boolean) {

        self.startButtonH.node.active = isShow;
        self.startButtonV.node.active = isShow;
        self.autoButtonH.node.active = isShow;
        self.autoButtonV.node.active = isShow;
        self.menuButtonH.node.active = isShow;
        self.menuButtonV.node.active = isShow;
        self.betSelectionButtonH.node.active = isShow;
        self.betSelectionButtonV.node.active = isShow;

        if (isShow) {
            self.buttonOnEnable();
        } else {
            self.startButtonDisable();
        }
    }

    public buttonOnEnable() {
        self.startButtonOnEnable();
    }

    public buttonDisable() {
        self.startButtonDisable();
    }

}

export default new MainGameButton();