import SocketSetting from '../../../Socket/SocketSetting'
import {AutoType} from '../../Config/Enum/ConfigEnum'
import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import ButtonMethod from '../../GlobalMethod/ButtonMethod'
import {GameEventType} from '../../Listener/Enum/gameEventType'
import {ServerEventType} from '../../Listener/Enum/ServerEventType'
import EventManager from '../../Listener/EventManager'
import {GameState} from '../../Procedure/Enum/GameState'
import SlotGameManager from '../../Procedure/SlotGameManager'
import {WebResponseManager} from '../../WebResponse/WebResponseManager'

const {ccclass} = cc._decorator;

@ccclass
export default abstract class AMainGameDoubleButtonTemplate extends cc.Component {

    protected abstract startButtonH: cc.Button;          //開始遊戲按鈕
    protected abstract startButtonV: cc.Button;          //開始遊戲按鈕
    protected abstract autoButtonH: cc.Button;           //自動按鈕
    protected abstract autoButtonV: cc.Button;           //自動按鈕
    protected abstract speedUpButtonH: cc.Button;        //加速按鈕
    protected abstract speedUpButtonV: cc.Button;        //加速按鈕
    protected abstract betSelectionButtonH: cc.Button;   //押注金額選擇按鈕
    protected abstract betSelectionButtonV: cc.Button;   //押注金額選擇按鈕
    protected abstract menuButtonH: cc.Button            //設定頁按鈕
    protected abstract menuButtonV: cc.Button            //設定頁按鈕
    private isShowTotalBetFrame: boolean;                //當前是否正在顯示總押注視窗
    private keyboardListening: boolean                   //鍵盤空白鍵按壓時狀態

    /**
     * 自訂義初始動作
     */
    protected abstract onCreate();

    protected onLoad() {

        this.isShowTotalBetFrame = false;
        this.keyboardListening = false;
        this.betResultEventListener();                      //一般狀態資訊 sever回傳監聽器
        this.freeResultEventListener();                     //免費模式資訊 sever回傳監聽器
        this.startButtonOnEnable();                         //開始遊戲事件打開監聽按鈕
        this.autoEventListener();                           //自動事件
        this.makeTotalBetButtonToListener();

        ButtonMethod.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonH,
            "autoButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonV,
            "autoButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonH,
            "speedUpButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonV,
            "speedUpButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonH,
            "totalBetFrameTouchEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonV,
            "totalBetFrameTouchEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonH,
            "menuButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonV,
            "menuButtonEventListener",
            this
        );

        this.onCreate();
    }

    protected start() {
        this.languageSetting();
    }

    public startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    public startButtonDisable() {

        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    /**
     * 觸控按壓時監聽
     * @private
     */
    private startButtonOnTouchStart() {

        this.unschedule(this.longTouchTimer);//清除計時器事件

        //如果該遊戲正在自動模式,將先取消自動狀態
        if (SlotGameManager.instance.isAutoState) {

            EventManager
                .instance
                .setEvent(EventManager.gameTarget, GameEventType.AUTO);

            return;
        }

        this.scheduleOnce(this.longTouchTimer, 0.5);
    }

    //長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
    private async longTouchTimer() {

        SlotGameManager.instance.updateAuto();
        this.autoEvent(SlotGameManager.instance.isAutoState, SlotGameManager.instance.autoType);

        if (SlotGameManager.instance.isAutoState) {
            await this.startButtonEvent();
        }

    }

    /**
     * 觸控監抬起時監聽
     * @private
     */
    private async startButtonOnTouchEnd() {

        this.unschedule(this.longTouchTimer);
        await this.startButtonEvent();

    }

    /**
     * 鍵盤空白鍵壓下時監聽
     * @param event
     * @private
     */
    private keyboardSpaceTouchStart(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (!this.keyboardListening) {
                    this.keyboardListening = true;
                    this.startButtonOnTouchStart();
                }
                break;
        }
    }

    /**
     * 鍵盤空白鍵抬起時監聽
     * @param event
     * @private
     */
    private async keyboardSpaceTouchEnd(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                await this.startButtonOnTouchEnd();
                this.keyboardListening = false;
                break;
        }
    }

    private async startButtonEvent() {

        do {

            if (this.isShowTotalBetFrame) {
                this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                this.totalBetFrameTouchEvent(false);
                return;
            }
            //如果遊戲為執行中狀態,將可以即停操作
            if (SlotGameManager.instance.gameState != GameState.STANDBY && SlotGameManager.instance.gameState != GameState.FREEING) {
                EventManager
                    .instance.setEvent(EventManager.gameTarget, GameEventType.IMMEDIATE_STOP);
                return;
            }
            //判斷當前是金額足夠
            let nowUserBetIndex = SlotGameManager.instance.userBetPoint.LineBet;
            let userBet = WebResponseManager.instance.tableInfo.LineTotalBet[nowUserBetIndex];

            //如果用戶金額不足的情況
            if (SlotGameManager.instance.userMoney - userBet < 0) {
                ErrorManager.instance.serverError(false, SocketSetting.t("S_9003"));
                return;
            }

            this.startEvent();
            await SlotGameManager.instance.play();
            this.endEvent();

        } while (SlotGameManager.instance.isAutoState || SlotGameManager.instance.gameState === GameState.FREEING);

    }

    /**
     * 自動按鈕監聽事件
     * @private
     */
    private async autoButtonEventListener() {

        this.unschedule(this.longTouchTimer);//將長案事件失效

        if (this.isShowTotalBetFrame) {

            this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
            this.totalBetFrameTouchEvent(false);
            return;
        }

        EventManager.instance.setEvent(
            EventManager.gameTarget,
            GameEventType.AUTO
        )

    }

    /**
     * 由抽象類綁定
     * 當user有更動押住分數時,透過觀察者模式自動更新
     * @protected
     */
    private autoEventListener() {

        SlotGameManager.instance.autoStateEventListener(async (isAutomaticState, beforeAutoCount, afterAutoCount) => {

            this.autoEvent(isAutomaticState, afterAutoCount);

            if (isAutomaticState) {
                await this.startButtonEvent();
            }

        })
    }

    /**
     * 加速按鈕監聽事件
     * @private
     */
    private speedUpButtonEventListener() {

        SlotGameManager.instance.updateSpeed();

        EventManager.instance.setEvent(
            EventManager.gameTarget, GameEventType.SPEED_UP, SlotGameManager.instance.isSpeedUp);

        this.speedUpEvent(SlotGameManager.instance.isSpeedUp);

    }

    /**
     * 打開或開關閉押注金額選擇框
     * @private
     */
    private totalBetFrameTouchEventListener() {

        if (SlotGameManager.instance.gameState != GameState.STANDBY) {
            this.warningEvent();
            return;
        }

        this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
        this.totalBetFrameTouchEvent(this.isShowTotalBetFrame);

    }

    /**
     * menu按鈕監聽事件
     * @private
     */
    private menuButtonEventListener() {

        if (SlotGameManager.instance.gameState != GameState.STANDBY) {
            this.warningEvent();
            return;
        }

        this.menuEvent();

    }

    /**
     * 一般狀態回傳事件接收器
     */
    private betResultEventListener(): void {

        EventManager.instance.serverEventListener(ServerEventType.BET_RESULT, (target: object) => {

            for (let name of Object.keys(target)) {

                if (WebResponseManager.instance.result[name] === undefined) {

                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`)
                } else {
                    WebResponseManager.instance.result[name] = target[name];
                }
            }

            SlotGameManager.instance.isResultOk = true;

        }, false);
    }

    /**
     * free回傳 game 事件接收器
     * @private
     */
    private freeResultEventListener() {

        EventManager.instance.serverEventListener(ServerEventType.FREE_SPIN_RESULT, (target: object) => {

            for (let name of Object.keys(target)) {

                if (WebResponseManager.instance.freeResult[name] === undefined) {

                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`)
                } else {
                    WebResponseManager.instance.freeResult[name] = target[name];
                }
            }

            SlotGameManager.instance.isResultOk = true;

        }, false);
    }

    protected abstract totalBetFrameTouchEvent(isShowTotalBetFrame: boolean);

    protected abstract makeTotalBetButtonToListener();

    protected abstract speedUpEvent(isSpeedUp: boolean);

    protected abstract autoEvent(isAutomaticState: boolean, autoType: AutoType);

    protected abstract startEvent();

    protected abstract endEvent();

    protected abstract menuEvent();

    protected abstract warningEvent();

    protected abstract languageSetting();
}