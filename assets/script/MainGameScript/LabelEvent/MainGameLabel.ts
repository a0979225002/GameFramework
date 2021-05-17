import {Effect} from '../../Framework/Audio/AudioManager'
import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

let self: MainGameLabel;

@ccclass
class MainGameLabel extends AGenericTemplate {

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

    private tableInfo: ITableInfoModel

    protected onCreate() {

        self = this;
        this.freeCount.string = "";
        this.freeTitle.active = false;
        let groupIDNum = SocketSetting.ServerReturnData["GroupID"].GroupID;
        this.groupIDH.string = groupIDNum;
        this.groupIDV.string = groupIDNum;

        this.tableInfo = WebResponseManager.instance.tableInfo;
        this.winPoint.string = "";
        this.winPoint.node.active = false;

        //手動更新該遊戲線數:無線遊戲無從計算(寫死)
        this.gameLineLabelH.string = "243";
        this.gameLineLabelV.string = "243";

        //初始更新user 金額,接收tableInfo參數時,尚未實例化該類,因此初始更新USER TOTAL BET 失效
        this.userTotalBetLabelH.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet]);

        //初始化 userConfig設定的初始user下注金額
        this.userTotalBetLabelV.string =
            String(this.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet]);

        //初始更新user 金額,接收tableInfo參數時,尚未實例化該類,因此初始更新USER MONEY 失效
        //需手動更新
        let numberFormat = new Intl.NumberFormat().format(SlotGameManager.instance.userMoney);
        this.userMoneyLabelV.string = String(numberFormat);
        this.userMoneyLabelH.string = String(numberFormat);

        //初始將贏分欄位清空
        this.winPointLabelH.string = "";
        this.winPointLabelV.string = "";

        //賦予監聽事件
        this.updateUserMoneyListener();             //更新user金額時 監聽事件
        this.updateUserTotalBetLabelListener();     //更動user下注金額時 監聽事件
        this.updateWinPointLabelListener();         //有獲獎時 監聽事件
        this.updateGroupIDEventListener();          //GroupID 監聽變更

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

        LanguageMethod.instance
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

    private updateUserTotalBetLabelListener() {

        SlotGameManager.instance.userTotalBetEventListener((beforeIndex, afterIndex) => {

            this.userTotalBetLabelAnimation(this.userTotalBetLabelV.node);
            this.userTotalBetLabelAnimation(this.userTotalBetLabelH.node);

            this.userTotalBetLabelV.string = String(this.tableInfo.LineTotalBet[afterIndex]);
            this.userTotalBetLabelH.string = String(this.tableInfo.LineTotalBet[afterIndex]);


        })
    }


    private userTotalBetLabelAnimation(node: cc.Node): void {

        cc.tween(node)
            .to(0.3, {scale: 0})
            .to(0.4, {scale: 1}, {easing: "bounceOut"})
            .start();
    }

    /**
     * 需自行發送更新贏分資訊
     */
    private updateWinPointLabelListener() {

        SlotGameManager.instance.userWinPointEventListener((winPoint: number, level: number) => {
            cc.log(winPoint,level);
            let numberFormat = new Intl.NumberFormat().format(winPoint);
            this.winPointLabelV.string = String(numberFormat);
            this.winPointLabelH.string = String(numberFormat);
            if (SlotGameManager.instance.gameState == GameState.FREEING && level == 0) {
                winPoint = WebResponseManager.instance.freeResult.TotalWinPoint;
                this.winEvent(winPoint);
                return;
            }
            if (level == 0) {
                this.winEvent(winPoint);
            }
        })
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


    private updateUserMoneyListener() {

        SlotGameManager.instance.userMoneyEventListener((money) => {

            let numberFormat = new Intl.NumberFormat().format(money);

            this.userMoneyLabelH.string = String(numberFormat);
            this.userMoneyLabelV.string = String(numberFormat);

        });
    }

    /**
     * 清除狀態上一輪狀態
     */
    public remove() {

        self.winPointLabelV.string = "";
        self.winPointLabelH.string = "";

    }

    public closeFreeTitle() {
        self.freeCount.string = "";

        if (self.freeTitle.active) {
            self.freeTitle.active = false;
        }
    }

    public updateFreeTitle(count: number) {

        if (!self.freeTitle.active) {
            self.freeTitle.active = true;
        }
        self.freeCount.string = String(count);

    }

}

export default new MainGameLabel();