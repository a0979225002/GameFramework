import {Effect} from '../../Framework/Audio/AudioManager'
import Language from "../../Framework/Global/Language";
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import UserMoneyChangeNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserMoneyChangeNotification";
import UserTotalBetChangeNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserTotalBetChangeNotification";
import UserWinPointStateNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserWinPointStateNotification";
import UserMoneyChangeObserver from "../../Framework/Listener/ObserverType/GameObserver/UserMoenyChangeObserver";
import UserTotalBetChangeObserver from "../../Framework/Listener/ObserverType/GameObserver/UserTotalBetChangeObserver";
import UserWinPointStateObserver from "../../Framework/Listener/ObserverType/GameObserver/UserWinPointStateObserver";
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineFreeResult from "../../Framework/WebResponse/ServerDataModel/FreeResult/NoLineFreeResult";
import NoLineTableInfo from "../../Framework/WebResponse/ServerDataModel/TableInfo/NoLineTableInfo";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainGameLabel extends AGenericTemplate {

    @property(cc.Label)
    private userMoneyLabelH: cc.Label = null;
    @property(cc.Label)
    private userMoneyLabelV: cc.Label = null;
    @property(cc.Label)
    private gameLineLabelH: cc.Label = null;
    @property(cc.Label)
    private gameLineLabelV: cc.Label = null;
    @property(cc.Label)
    private gameLineTextH: cc.Label = null;
    @property(cc.Label)
    private gameLineTextV: cc.Label = null;
    @property(cc.Label)
    private userTotalBetLabelH: cc.Label = null;
    @property(cc.Label)
    private userTotalBetTextH: cc.Label = null;
    @property(cc.Label)
    private userTotalBetLabelV: cc.Label = null;
    @property(cc.Label)
    private userTotalBetTextV: cc.Label = null;
    @property(cc.Label)
    private winPointLabelH: cc.Label = null;
    @property(cc.Label)
    private winPointTextH: cc.Label = null;
    @property(cc.Label)
    private winPointLabelV: cc.Label = null;
    @property(cc.Label)
    private winPointTextV: cc.Label = null;
    @property(cc.Label)
    private winPoint: cc.Label = null;
    @property(cc.Label)
    private groupIDH: cc.Label = null;
    @property(cc.Label)
    private groupIDV: cc.Label = null;
    @property(cc.Node)
    private freeTitle: cc.Node = null;
    @property(cc.Label)
    private freeCount: cc.Label = null;
    private tableInfo: NoLineTableInfo;
    private freeResult:NoLineFreeResult;
    public static instance: MainGameLabel;


    protected onCreate() {
        MainGameLabel.instance = this;
        this.tableInfo =
            WebResponseManager
                .instance<NoLineTableInfo>()
                .getResult(ResponseType.TABLE_INFO);
        this.freeResult =
            WebResponseManager
                .instance<NoLineFreeResult>()
                .getResult(ResponseType.FREE);
        //初始free標題
        this.freeCount.string = "";
        this.freeTitle.active = false;

        //初始:單局識別號
        let groupIDNum = SocketSetting.ServerReturnData["GroupID"].GroupID;
        this.groupIDH.string = groupIDNum;
        this.groupIDV.string = groupIDNum;

        //初始獲獎欄位
        this.winPoint.string = "";
        this.winPoint.node.active = false;

        //初始手動更新該遊戲線數:無線遊戲無從計算(寫死)
        this.gameLineLabelH.string = "243";
        this.gameLineLabelV.string = "243";

        //初始化 userConfig設定的初始user下注金額
        this.userTotalBetLabelH.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet]);
        this.userTotalBetLabelV.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet]);

        //初始更新user 金額,接收tableInfo參數時,尚未實例化該類,因此初始更新USER MONEY 失效
        let numberFormat = new Intl.NumberFormat().format(SlotGameManager.instance.userMoney);
        this.userMoneyLabelV.string = String(numberFormat);
        this.userMoneyLabelH.string = String(numberFormat);

        //初始將贏分欄位清空
        this.winPointLabelH.string = "";
        this.winPointLabelV.string = "";

        //訂閱推播事件
        UserMoneyChangeNotification                                                     //更新user金額時 訂閱事件
            .instance.subscribe(this.getUserMoneyChangeObserver(), true);
        UserTotalBetChangeNotification                                                  //更新user下注金額時 訂閱事件
            .instance.subscribe(this.getUserTotalBetChangeObserver(), true);
        UserWinPointStateNotification                                                   //獲獎時 訂閱事件
            .instance.subscribe(this.getUserWinPointStateObserver(), true);
        this.updateGroupIDEventListener();                                              //GroupID 監聽變更

    }

    /**
     * 更新語系
     */
    protected languageSetting() {

        this.gameLineTextH.string = SocketSetting.t("4_008");
        this.gameLineTextV.string = SocketSetting.t("4_008");
        this.userTotalBetTextH.string = SocketSetting.t("4_002");
        this.userTotalBetTextV.string = SocketSetting.t("4_002");
        this.winPointTextH.string = SocketSetting.t("4_004");
        this.winPointTextV.string = SocketSetting.t("4_004");

        Language.instance
            .updateLabelStyle(this.gameLineTextH)
            .updateLabelStyle(this.gameLineTextV)
            .updateLabelStyle(this.userTotalBetTextH)
            .updateLabelStyle(this.userTotalBetTextV)
            .updateLabelStyle(this.winPointTextH)
            .updateLabelStyle(this.winPointTextV);
    }

    private updateGroupIDEventListener() {
        EventManager.instance.serverEventListener(ServerEventType.GROUP_ID, (groupID: string) => {
            this.groupIDV.string = groupID;
            this.groupIDH.string = groupID;
        }, false);
    }

    private getUserTotalBetChangeObserver(): UserTotalBetChangeObserver {
        return new UserTotalBetChangeObserver((beforeIndex, afterIndex) => {
            this.userTotalBetLabelAnimation(this.userTotalBetLabelV.node);
            this.userTotalBetLabelAnimation(this.userTotalBetLabelH.node);
            this.userTotalBetLabelV.string = String(this.tableInfo.LineTotalBet[afterIndex]);
            this.userTotalBetLabelH.string = String(this.tableInfo.LineTotalBet[afterIndex]);
        }, this);
    }

    private userTotalBetLabelAnimation(node: cc.Node): void {
        cc.tween(node)
            .to(0.3, {scale: 0})
            .to(0.4, {scale: 1}, {easing: "bounceOut"})
            .start();
    }

    private getUserWinPointStateObserver(): UserWinPointStateObserver {
        return new UserWinPointStateObserver((winPoint, level) => {
            let numberFormat = new Intl.NumberFormat().format(winPoint);
            this.winPointLabelV.string = String(numberFormat);
            this.winPointLabelH.string = String(numberFormat);
            if (SlotGameManager.instance.gameState == GameState.FREEING && level == 0) {
                winPoint = this.freeResult.TotalWinPoint;
                this.winEvent(winPoint);
                return;
            }
            if (level == 0) {
                this.winEvent(winPoint);
            }
        }, this)
    }

    @Effect("WinSingleLine")
    private winEvent(winPoint: number) {
        this.winPoint.node.active = true;
        this.winPoint.string = String(winPoint);

        setTimeout(() => {
            this.winPoint.string = "";
            this.winPoint.node.active = false;
        }, 900);
    }

    private getUserMoneyChangeObserver(): UserMoneyChangeObserver {
        return new UserMoneyChangeObserver((money) => {
            let numberFormat = new Intl.NumberFormat().format(money);
            this.userMoneyLabelH.string = String(numberFormat);
            this.userMoneyLabelV.string = String(numberFormat);
        }, this);
    }

    /**
     * 清除狀態上一輪狀態
     */
    public remove() {

        this.winPointLabelV.string = "";
        this.winPointLabelH.string = "";

    }

    public closeFreeTitle() {
        this.freeCount.string = "";
        if (this.freeTitle.active) {
            this.freeTitle.active = false;
        }
    }

    public updateFreeTitle(count: number) {

        if (!this.freeTitle.active) {
            this.freeTitle.active = true;
        }
        this.freeCount.string = String(count);

    }

}