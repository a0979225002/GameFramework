import AudioManager, {Effect, Music} from '../../Framework/Audio/AudioManager'
import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import ButtonMethod from "../../Framework/GlobalMethod/ButtonMethod";
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import {SceneDirectionType} from '../../Framework/Scene/Enum/SceneStyle'
import SceneManager from '../../Framework/Scene/SceneManager'
import SceneDirectionChangeNotification from "../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import AMenuDoubleButtonTemplate from '../../Framework/Template/ButtonEvent/MenuButton/AMenuDoubleButtonTemplate'
import WebRequestManager from '../../Framework/WebRequest/WebRequestManager'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineTableInfo from "../../Framework/WebResponse/Model/TableInfo/NoLineTableInfo";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import MainGameButton from './MainGameButton'
import RecordPageButton from "./RecordPageButton";

const {ccclass, property} = cc._decorator;

enum UserNowPage {

    /**
     * 紀錄頁
     * @type {UserNowPage.RECORD_PAGE}
     */
    RECORD_PAGE = 'RECORD_PAGE',

    /**
     * 設定頁
     * @type {UserNowPage.SETTING_PAGE}
     */
    SETTING_PAGE = 'SETTING_PAGE',

    /**
     * 說明頁
     * @type {UserNowPage.DESCRIPTION_PAGE}
     */
    DESCRIPTION_PAGE = 'DESCRIPTION_PAGE',
}

@ccclass
export default class MenuPageButton extends AMenuDoubleButtonTemplate {

    @property(cc.Node)
    private menuNodeH: cc.Node = null;
    @property(cc.Node)
    private menuNodeV: cc.Node = null;
    @property(cc.Button)
    protected musicButtonH: cc.Button = null;
    @property(cc.Button)
    protected musicButtonV: cc.Button = null;
    @property(cc.Button)
    protected effectButtonH: cc.Button = null;
    @property(cc.Button)
    protected effectButtonV: cc.Button = null;
    @property(cc.Button)
    protected betDownButtonH: cc.Button = null;
    @property(cc.Button)
    protected betDownButtonV: cc.Button = null;
    @property(cc.Button)
    protected betUpButtonH: cc.Button = null;
    @property(cc.Button)
    protected betUpButtonV: cc.Button = null;
    @property(cc.Button)
    protected autoButtonH: cc.Button = null;
    @property(cc.Button)
    protected autoButtonV: cc.Button = null;
    @property(cc.Button)
    protected auto50ButtonH: cc.Button = null;
    @property(cc.Button)
    protected auto50ButtonV: cc.Button = null;
    @property(cc.Button)
    protected auto100ButtonH: cc.Button = null;
    @property(cc.Button)
    protected auto100ButtonV: cc.Button = null;
    @property(cc.Button)
    protected auto500ButtonH: cc.Button = null;
    @property(cc.Button)
    protected auto500ButtonV: cc.Button = null;
    @property(cc.Button)
    protected auto1000ButtonH: cc.Button = null;
    @property(cc.Button)
    protected auto1000ButtonV: cc.Button = null;
    @property(cc.Button)
    protected autoFreeEndButtonH: cc.Button = null;
    @property(cc.Button)
    protected autoFreeEndButtonV: cc.Button = null;
    @property(cc.Button)
    protected goBackButtonH: cc.Button = null;
    @property(cc.Button)
    protected goBackButtonV: cc.Button = null;
    @property(cc.Button)
    protected goHomeButtonH: cc.Button = null;
    @property(cc.Button)
    protected goHomeButtonV: cc.Button = null;
    @property(cc.Button)
    protected recordButtonH: cc.Button = null;
    @property(cc.Button)
    protected recordButtonV: cc.Button = null;
    @property(cc.Button)
    protected settingButtonH: cc.Button = null;
    @property(cc.Button)
    protected settingButtonV: cc.Button = null;
    @property(cc.Button)
    protected descriptionPageButtonH: cc.Button = null;
    @property(cc.Button)
    protected descriptionPageButtonV: cc.Button = null;
    //---------------自訂義------------------------------
    @property(cc.Node)
    private gameInfoNodeH: cc.Node = null;
    @property(cc.Node)
    private gameInfoNodeV: cc.Node = null;
    @property(cc.Button)
    private gameInfoNextPageButtonH: cc.Button = null;
    @property(cc.Button)
    private gameInfoNextPageButtonV: cc.Button = null;
    @property(cc.Button)
    private gameInfoPreviousPageButtonH: cc.Button = null;
    @property(cc.Button)
    private gameInfoPreviousPageButtonV: cc.Button = null;
    @property(cc.Node)
    private settingPageH: cc.Node = null;
    @property(cc.Node)
    private settingPageV: cc.Node = null;
    @property(cc.PageView)
    private descriptionPageH: cc.PageView = null;
    @property(cc.PageView)
    private descriptionPageV: cc.PageView = null;
    @property(cc.Node)
    private musicIconH: cc.Node = null;
    @property(cc.Node)
    private musicIconV: cc.Node = null;
    @property(cc.Node)
    private effectIconH: cc.Node = null;
    @property(cc.Node)
    private effectIconV: cc.Node = null;
    @property(cc.Label)
    private lineBetLabelH: cc.Label = null;
    @property(cc.Label)
    private lineBetLabelV: cc.Label = null;
    @property(cc.Label)
    private lineLabelH: cc.Label = null;
    @property(cc.Label)
    private lineLabelV: cc.Label = null;
    @property(cc.Label)
    private lineBetMoneyLabelH: cc.Label = null;
    @property(cc.Label)
    private lineBetMoneyLabelV: cc.Label = null;
    @property(cc.SpriteFrame)
    private icon: cc.SpriteFrame[] = [];
    protected tableInfo: NoLineTableInfo;
    private autoIcon: { LONG_OPEN: cc.SpriteFrame; LONG_CLOSE: cc.SpriteFrame; SHORT_OPEN: cc.SpriteFrame; SHORT_CLOSE: cc.SpriteFrame }
    private color: { WHITE: cc.Color; PALE_GREY: cc.Color; COAL_BLACK: cc.Color; BLACK: cc.Color; YELLOW: cc.Color; GREY: cc.Color; BROWN: cc.Color }
    private nowPage: UserNowPage;
    public static instance: MenuPageButton;

    protected onCreate() {
        MenuPageButton.instance = this;
        this.tableInfo =
            WebResponseManager
                .instance<NoLineTableInfo>()
                .getResult(ResponseType.TABLE_INFO);

        this.color = {                                                     //menu頁面需用到的顏色
            YELLOW: cc.color().fromHEX("#FFC000"),
            COAL_BLACK: cc.color().fromHEX("#191919"),
            GREY: cc.color().fromHEX("#646464"),
            PALE_GREY: cc.color().fromHEX("#C5C5C5"),
            WHITE: cc.color().fromHEX("#FFFFFF"),
            BLACK: cc.color().fromHEX("#000000"),
            BROWN: cc.color().fromHEX("#5E4F43"),
        }

        this.autoIcon = {
            SHORT_CLOSE: this.icon[0],                                      //短按鈕關閉時圖案
            SHORT_OPEN: this.icon[1],                                       //短按鈕打開時圖案
            LONG_CLOSE: this.icon[2],                                       //長按鈕關閉時圖案
            LONG_OPEN: this.icon[3]                                         //長按鈕打開時圖案
        }

        if (!WebRequestManager.instance.backHomeURL) {                      //檢查是否有返回首頁URL,如果沒有,將返回首頁按鈕關閉
            this.goHomeButtonH.node.active = false;
            this.goHomeButtonV.node.active = false;
        }

        SceneDirectionChangeNotification
            .instance.subscribe(this.sceneDirectionObserverListener(), true);     //註冊直橫式監聽

        this.initialize();                                                                  //初始設定頁按鈕
        this.setDescriptionButtonListener();                                                //說明頁按鈕監聽事件添加
        this.nowPage = UserNowPage.DESCRIPTION_PAGE;                                        //隨機一個,都可
        this.closeMenu();                                                                   //初始關閉menu
    }

    /**
     * 說明頁按鈕監聽事件添加
     */
    setDescriptionButtonListener() {

        //上一頁按鈕
        ButtonMethod.addButtonEvent(
            this.gameInfoPreviousPageButtonH, "descriptionButtonEvent", this, "previous");
        ButtonMethod.addButtonEvent(
            this.gameInfoPreviousPageButtonV, "descriptionButtonEvent", this, "previous");

        //下一頁按鈕
        ButtonMethod.addButtonEvent(
            this.gameInfoNextPageButtonH, "descriptionButtonEvent", this, "next");
        ButtonMethod.addButtonEvent(
            this.gameInfoNextPageButtonV, "descriptionButtonEvent", this, "next");
    }

    /**
     * 更換說明頁頁數按鈕,上一頁,下一頁
     * @param event
     * @param callBack
     */
    descriptionButtonEvent(event: any, callBack: string) {

        if (callBack === "previous") {
            let pageIndexH = this.descriptionPageH.getCurrentPageIndex() - 1;
            let pageIndexV = this.descriptionPageV.getCurrentPageIndex() - 1;
            this.descriptionPageH.setCurrentPageIndex(pageIndexH);
            this.descriptionPageV.setCurrentPageIndex(pageIndexV);
            return;
        }

        if (callBack === "next") {
            let pageIndexH = this.descriptionPageH.getCurrentPageIndex() + 1;
            let pageIndexV = this.descriptionPageV.getCurrentPageIndex() + 1;
            this.descriptionPageH.setCurrentPageIndex(pageIndexH);
            this.descriptionPageV.setCurrentPageIndex(pageIndexV);
            return;
        }
    }

    /**
     * 初始setting 按鈕
     */
    initialize() {
        //初始背景音樂按鈕位置
        if (AudioManager.instance.musicOnMute) {
            this.musicIconH.x = -50
            this.musicIconV.x = -50
            this.musicIconH.color = this.color.COAL_BLACK;
            this.musicIconV.color = this.color.COAL_BLACK;
        } else {
            this.musicIconH.x = 50
            this.musicIconV.x = 50
            this.musicIconH.color = this.color.YELLOW;
            this.musicIconV.color = this.color.YELLOW;
        }
        //初始效果音樂按鈕位置
        if (AudioManager.instance.effectOnMute) {
            this.effectIconH.x = -50
            this.effectIconV.x = -50
            this.effectIconH.color = this.color.COAL_BLACK;
            this.effectIconV.color = this.color.COAL_BLACK;
        } else {
            this.effectIconH.x = 50
            this.effectIconV.x = 50
            this.effectIconH.color = this.color.YELLOW;
            this.effectIconV.color = this.color.YELLOW;
        }

        //初始化自動模式按鈕樣式
        this.checkAutoNode(SlotGameManager.instance.autoType,true);

        //拿取初始的押住index
        let betIndex = SlotGameManager.instance.userBetPoint.LineBet;

        //更新當前押注倍率
        this.lineBetLabelH.string =
            String(this.tableInfo.LineBet[betIndex]);
        this.lineBetLabelV.string =
            String(this.tableInfo.LineBet[betIndex]);
        //更新當前押注總金額
        this.lineBetMoneyLabelH.string =
            String(this.tableInfo.LineTotalBet[betIndex]);
        this.lineBetMoneyLabelV.string =
            String(this.tableInfo.LineTotalBet[betIndex]);

    }

    /**
     * 直橫向監聽器
     */
    private sceneDirectionObserverListener() {
        return new SceneDirectionChangeObserver((type) => {
            if (!this.menuNodeH.active && !this.menuNodeV.active) return;

            if (type == SceneDirectionType.LANDSCAPE) {

                this.menuNodeH.active = true;
                this.menuNodeV.active = false;

            } else if (type == SceneDirectionType.PORTRAIT) {

                this.menuNodeH.active = false;
                this.menuNodeV.active = true;

            } else {
                cc.log(`MainGameSetting sceneDirectionEvent() 有錯誤 : ${type}`);
            }
        }, this)
    }

    /**
     * 背景音事件
     * @param isOnMute
     * @protected
     */
    @Music("NBS")
    protected musicEvent(isOnMute: boolean) {
        if (isOnMute) {
            this.audioButtonSettingAnimation(this.musicIconH, -50, this.color.COAL_BLACK)
            this.audioButtonSettingAnimation(this.musicIconV, -50, this.color.COAL_BLACK)
        } else {
            this.audioButtonSettingAnimation(this.musicIconH, 50, this.color.YELLOW)
            this.audioButtonSettingAnimation(this.musicIconV, 50, this.color.YELLOW)
        }
    }

    /**
     * 效果音事件
     * @param isOnMute
     * @protected
     */
    @Effect("BtnClick")
    protected effectEvent(isOnMute: boolean) {

        if (isOnMute) {
            this.audioButtonSettingAnimation(this.effectIconH, -50, this.color.COAL_BLACK);
            this.audioButtonSettingAnimation(this.effectIconV, -50, this.color.COAL_BLACK);
        } else {
            this.audioButtonSettingAnimation(this.effectIconH, 50, this.color.YELLOW);
            this.audioButtonSettingAnimation(this.effectIconV, 50, this.color.YELLOW);
        }
    }

    /**
     * 音樂按鈕點擊時動畫
     * @param node
     * @param x
     * @param color
     * @private
     */
    private audioButtonSettingAnimation(node: cc.Node, x: number, color: cc.Color) {
        cc.tween(node)
            .to(0.3, {x: x, color: color}, {easing: ""})
            .start();
    }

    @Effect("BtnClick")
    protected autoEvent(beforeAutoCount: AutoType, afterAutoCount: AutoType) {
        this.checkAutoNode(beforeAutoCount, false);
        this.checkAutoNode(afterAutoCount, true);
        this.closeMenu();
        MainGameButton.instance.startButtonOnEnable();
    }

    private checkAutoNode(autoType: AutoType, isOpen: boolean) {

        switch (autoType) {
            case AutoType.auto:
                isOpen ? this.updateAutoImg(this.autoButtonH, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoButtonH, this.autoIcon.LONG_CLOSE, false);
                isOpen ? this.updateAutoImg(this.autoButtonV, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoButtonV, this.autoIcon.LONG_CLOSE, false);
                return;
        }

        switch (autoType) {
            case AutoType.auto50:
                isOpen ? this.updateAutoImg(this.auto50ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto50ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto50ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto50ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }

        switch (autoType) {
            case AutoType.auto100:
                isOpen ? this.updateAutoImg(this.auto100ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto100ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto100ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto100ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }

        switch (autoType) {
            case AutoType.auto500:
                isOpen ? this.updateAutoImg(this.auto500ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto500ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto500ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto500ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }

        switch (autoType) {
            case AutoType.auto1000:
                isOpen ? this.updateAutoImg(this.auto1000ButtonH, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto1000ButtonH, this.autoIcon.SHORT_CLOSE, false);
                isOpen ? this.updateAutoImg(this.auto1000ButtonV, this.autoIcon.SHORT_OPEN, true) :
                    this.updateAutoImg(this.auto1000ButtonV, this.autoIcon.SHORT_CLOSE, false);
                return;
        }

        switch (autoType) {
            case AutoType.freeEnd:
                isOpen ? this.updateAutoImg(this.autoFreeEndButtonH, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoFreeEndButtonH, this.autoIcon.LONG_CLOSE, false);
                isOpen ? this.updateAutoImg(this.autoFreeEndButtonV, this.autoIcon.LONG_OPEN, true) :
                    this.updateAutoImg(this.autoFreeEndButtonV, this.autoIcon.LONG_CLOSE, false);
                return;
        }

        throw Error(`自動參數錯誤 ${autoType}`);

    }

    /**
     * 當用戶點擊auto按鈕時,更換該按鈕顏色
     * @param buttonToSprite
     * @param img
     * @param isOpen
     * @private
     */
    private updateAutoImg(buttonToSprite: cc.Button, img: cc.SpriteFrame, isOpen: boolean) {

        let sprite = buttonToSprite.getComponent(cc.Sprite);

        if (isOpen) {
            buttonToSprite.node.children[0].color = this.color.BLACK
        } else {
            buttonToSprite.node.children[0].color = this.color.WHITE
        }

        sprite.spriteFrame = img;

    }

    /**
     * 返回首頁
     * @protected
     */
    @Effect("BtnClick")
    protected goHomeTouchEvent() {
        socketJS.backHome();
    }

    /**
     * 祥單
     * @protected
     */
    @Effect("BtnClick")
    protected recordPageTouchEvent() {
        let beforePage: UserNowPage = this.nowPage;
        let afterPage: UserNowPage = (this.nowPage = UserNowPage.RECORD_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    }

    /**
     * 設定頁
     * @protected
     */
    @Effect("BtnClick")
    protected settingPageTouchEvent() {
        let beforePage: UserNowPage = this.nowPage;
        let afterPage: UserNowPage = (this.nowPage = UserNowPage.SETTING_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    }

    /**
     * 說明頁
     * @protected
     */
    @Effect("BtnClick")
    protected descriptionPageEvent() {
        let beforePage: UserNowPage = this.nowPage;
        let afterPage: UserNowPage = (this.nowPage = UserNowPage.DESCRIPTION_PAGE);
        this.changePage(beforePage, false);
        this.changePage(afterPage, true);
    }

    /**
     * 返回遊戲頁面
     * @protected
     */
    @Effect("BtnClick")
    protected goBackTouchEvent() {
        this.closeMenu();
        MainGameButton.instance.startButtonOnEnable();
    }

    /**
     * 更新底部 換頁,(PageButton)更換顏色
     */
    private changePage(pageType: UserNowPage, isOpen: boolean) {
        switch (pageType) {
            case UserNowPage.RECORD_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.recordButtonH, true);
                    this.makePageButtonToColorV(this.recordButtonV, true);
                    RecordPageButton.instance.showRecordPage().then();
                    this.closeMenu();
                } else {
                    this.makePageButtonToColorH(this.recordButtonH, false)
                    this.makePageButtonToColorV(this.recordButtonV, false);
                }
                break;
            case UserNowPage.SETTING_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.settingButtonH, true);
                    this.makePageButtonToColorV(this.settingButtonV, true);
                    this.settingPageH.active = true;
                    this.settingPageV.active = true;
                } else {
                    this.makePageButtonToColorH(this.settingButtonH, false)
                    this.makePageButtonToColorV(this.settingButtonV, false);
                    this.settingPageH.active = false;
                    this.settingPageV.active = false;
                }
                break;
            case UserNowPage.DESCRIPTION_PAGE:
                if (isOpen) {
                    this.makePageButtonToColorH(this.descriptionPageButtonH, true);
                    this.makePageButtonToColorV(this.descriptionPageButtonV, true);
                    this.descriptionPageH.node.active = true;
                    this.descriptionPageV.node.active = true;
                    this.gameInfoNodeH.active = true;
                    this.gameInfoNodeV.active = true;
                } else {
                    this.makePageButtonToColorH(this.descriptionPageButtonH, false)
                    this.makePageButtonToColorV(this.descriptionPageButtonV, false);
                    this.descriptionPageH.node.active = false;
                    this.descriptionPageV.node.active = false;
                    this.gameInfoNodeH.active = false;
                    this.gameInfoNodeV.active = false;
                }
                break;
            default:
                cc.log("MenuButton.updatePageButtonColor() 有錯誤", pageType);
        }
    }

    /**
     * 當user點擊button時更換底部換頁Button 背景顏色
     * @param button
     * @param isOpen
     * @private
     */
    private makePageButtonToColorH(button: cc.Button, isOpen: boolean) {

        let bg: cc.Node = button.node.children[0];
        let icon = bg.children[0];
        if (isOpen) {
            button.hoverColor = this.color.WHITE;
            button.normalColor = this.color.WHITE;
            bg.color = this.color.BROWN;
            icon.color = this.color.WHITE;
        } else {
            button.hoverColor = this.color.PALE_GREY;
            button.normalColor = this.color.GREY;
            bg.color = this.color.BLACK;
            icon.color = this.color.YELLOW;
        }
    }

    /**
     * 當user點擊button時更換底部換頁Button 背景顏色
     * @param button
     * @param isOpen
     * @private
     */
    private makePageButtonToColorV(button: cc.Button, isOpen: boolean) {

        let icon = button.node.children[0];
        if (isOpen) {
            button.hoverColor = this.color.WHITE;
            button.normalColor = this.color.WHITE;
            icon.color = this.color.WHITE;
        } else {
            button.hoverColor = this.color.PALE_GREY;
            button.normalColor = this.color.GREY;
            icon.color = this.color.YELLOW;
        }
    }

    /**
     * 由抽象類綁定
     * 當user有更動押住分數時,透過觀察者模式自動更新
     * @param beforeIndex
     * @param afterIndex
     * @protected
     */
    protected totalBetChangeEvent(beforeIndex, afterIndex) {

        let lineBetValue = String(this.tableInfo.LineBet[afterIndex]);
        let lineTotalBetValue = String(this.tableInfo.LineTotalBet[afterIndex]);
        this.lineBetLabelH.string = lineBetValue;
        this.lineBetLabelV.string = lineBetValue;
        this.lineBetMoneyLabelH.string = lineTotalBetValue;
        this.lineBetMoneyLabelV.string = lineTotalBetValue;
    }

    /**
     * 顯示menu組件
     */
    public showMenu() {
        MainGameButton.instance.startButtonDisable();
        let direction = SceneManager.instance.sceneDirection;
        if (direction == SceneDirectionType.LANDSCAPE) {
            this.menuNodeH.active = true;
            this.menuNodeV.active = false;
        } else if (direction == SceneDirectionType.PORTRAIT) {
            this.menuNodeH.active = false;
            this.menuNodeV.active = true;
        } else {
            cc.log("有錯誤:", direction);
        }
    }

    /**
     * 關閉menu 組件,並初始化下次打開時的狀態
     * @private
     */
    private closeMenu() {
        this.changePage(this.nowPage, false);
        this.changePage(UserNowPage.SETTING_PAGE, true);
        this.nowPage = UserNowPage.SETTING_PAGE;
        this.menuNodeH.active = false;
        this.menuNodeV.active = false;
        this.descriptionPageH.setCurrentPageIndex(0);
        this.descriptionPageV.setCurrentPageIndex(0);
    }
}