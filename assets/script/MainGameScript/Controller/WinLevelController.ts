import AudioManager, {Effect, Music, EffectStop} from '../../Framework/Audio/AudioManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import UserMoneyChangeNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserMoneyChangeNotification";
import UserWinPointStateNotification
    from "../../Framework/Listener/NotificationType/GameNotification/UserWinPointStateNotification";
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import {ResponseType} from "../../Framework/WebResponse/Enum/ResponseType";
import NoLineFreeResult from "../../Framework/WebResponse/ServerDataModel/FreeResult/NoLineFreeResult";
import NoLineResult from "../../Framework/WebResponse/ServerDataModel/NormalResult/NoLineResult";
import NoLineTableInfo from "../../Framework/WebResponse/ServerDataModel/TableInfo/NoLineTableInfo";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {Loading} from "./LoadingDialogController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WinLevelController extends cc.Component {

    @property(cc.Label)
    private winPointLabel: cc.Label = null;

    @property(sp.Skeleton)
    private winSpineBorder: sp.Skeleton = null;

    @property(sp.Skeleton)
    private winSpine: sp.Skeleton = null;

    @property(cc.Node)
    private winLevel: cc.Node[] = [];

    private spineData: { MEGA_WIN_OPEN: string; BIG_WIN_OPEN: string; SUPER_WIN_OPEN: string; WIN_BORDER_OPEN: string; FREE_TITLE_OPEN: string; SUPER_WIN_LOOP: string; WIN_BORDER_LOOP: string; BIG_WIN_LOOP: string; MEGA_WIN_LOOP: string; FREE_TITLE_LOOP: string }
    private winLevelRange: Array<number>;
    private totalPoint: Array<number>;
    private isNumberRun: boolean;
    private startNum: number;
    private pointSplitIndex: number;
    private point: number;
    private userNowBet: number;
    private isBigWinOpen: boolean;
    private isSuperWinOpen: boolean;
    private isMegaWinOpen: boolean;
    private levelWinPoint: number
    private normalResult: NoLineResult;
    private freeResult: NoLineFreeResult;
    private tableInfo: NoLineTableInfo;
    private resolve: (value: (PromiseLike<void> | void)) => void;
    public static instance: WinLevelController;

    protected onLoad() {
        WinLevelController.instance = this;
        this.normalResult =                                                            //拿取該遊戲一般狀態model
            WebResponseManager
                .instance<NoLineResult>()
                .getResult(ResponseType.NORMAL);
        this.freeResult =                                                              //拿取該遊戲免費狀態model
            WebResponseManager
                .instance<NoLineFreeResult>()
                .getResult(ResponseType.FREE);
        this.tableInfo =                                                                //拿取該遊戲基本資料model
            WebResponseManager
                .instance<NoLineTableInfo>()
                .getResult(ResponseType.TABLE_INFO);
        this.node.active = false;                                                       //初始押注prefab組件為隱藏
        this.winPointLabel.string = "";                                                 //初始押注分數 label 為空
        this.winLevelRange = this.tableInfo.LevelWinPoint;                              //遊戲前三個等級的押注倍率
        this.winLevelRange.push(60, 70);                                                //額外新增押注倍率
        this.totalPoint = new Array<number>();
        this.spineData = {                                                              //贏分,spine動畫
            FREE_TITLE_OPEN: "0Animate_FreespinsComeout",
            FREE_TITLE_LOOP: "0Animate_FreespinsRoop",
            BIG_WIN_OPEN: "1Animate_Comeout",
            BIG_WIN_LOOP: "2Animate_BigWin",
            SUPER_WIN_OPEN: "3Animate_SuperComeout",
            SUPER_WIN_LOOP: "4Animate_SuperWin",
            MEGA_WIN_OPEN: "5Animate_MegaComeout",
            MEGA_WIN_LOOP: "6Animate_MegaWin",
            WIN_BORDER_OPEN: "1Animate_ComeoutBG",
            WIN_BORDER_LOOP: "2~6Animate_BG",
        }
    }

    initializeSpine() {
        this.resolve = null;
        //當前獲獎分數
        this.userNowBet = this.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet];
        this.startNum = 0;                      //當前開始跑分的初始分數
        this.pointSplitIndex = 0;               //當前尋訪第幾個Level
        this.isNumberRun = false;               //當前是否能開始跑分
        this.winPointLabel.string = "";         //當前顯示跑到幾分
        this.node.active = true;                //打開整個node
        this.totalPoint.length = 0;             //初始拆分的數字
        this.levelWinPoint = 0                  //當前跑到第幾個拆分的數字儲存用
        this.showBigWin();                      //開啟Big Win
    }

    public totalPointSplit(point) {

        let totalPoint = point;

        let numberSplit = [];

        let count = 0;

        let beforePoint = 0;
        let afterPoint = 0;

        while (true) {
            if (count == 0) {
                numberSplit.push(this.userNowBet * this.winLevelRange[count]);
            }
            if (count == this.winLevelRange.length - 1) {
                totalPoint - afterPoint > afterPoint ?
                    numberSplit.push(afterPoint - beforePoint, totalPoint - afterPoint) : numberSplit.push(totalPoint - beforePoint);

                break;
            }
            if (count > 0) {
                numberSplit.push(afterPoint - beforePoint);
            }

            if (totalPoint - afterPoint < 0) {
                break;
            }

            if (count < this.winLevelRange.length) {
                count++;
                beforePoint = this.userNowBet * this.winLevelRange[count - 1];
                afterPoint = this.userNowBet * this.winLevelRange[count];
            }
        }
        this.totalPoint = numberSplit;
        cc.log(this.totalPoint)
    }

    @Effect("runPoint")
    private runTotalWinPoint() {
        this.isNumberRun = true;
    }

    @Loading("prefab")
    public showWinAboveState(point: number, resolve: (value: (PromiseLike<void> | void)) => void) {
        this.initializeSpine();
        this.totalPointSplit(point);
        this.point = point;
        this.scheduleOnce(() => {
            this.runTotalWinPoint();
            this.node.once(cc.Node.EventType.TOUCH_END, this.runPointTouchEnd, this);
            cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardEvent, this);
        }, 0.5);
        this.resolve = resolve;
    }

    private keyboardEvent(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                this.runPointTouchEnd();
                break;
        }
    }

    /**
     * 當點擊畫面時,直接顯示最終答案
     * @private
     */
    private runPointTouchEnd() {
        this.pointSplitIndex = this.totalPoint.length - 1;
        this.startNum = this.point;
    }

    /**
     * 當前每個獲獎等級需跑的時間
     * @param {number} pointSplitIndex
     * @return {number}
     * @private
     */
    private checkTimer(pointSplitIndex: number): number {
        let time;
        switch (pointSplitIndex) {
            case 0 :
                time = 4;
                break;
            case 1 :
                time = 3;
                break;
            case 2 :
                time = 3;
                break;
            case 3 :
                time = 2;
                break;
            case 4 :
                time = 2;
                break;
            case 5 :
                time = 2;
                break;
            default:
                cc.log("class WinLevelController.timerSetting() 有錯誤:", pointSplitIndex);
        }
        return time;
    }

    @Music("bigWin3")
    private showBigWin() {
        this.isBigWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.BIG_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.BIG_WIN_LOOP, true);
        this.winSpineBorder.setAnimation(0, this.spineData.WIN_BORDER_OPEN, false);
        this.winSpineBorder.addAnimation(0, this.spineData.WIN_BORDER_LOOP, true);
        this.winLevel[1].active = false;
        this.winLevel[2].active = false;
    }

    private showSuperWin() {
        this.isBigWinOpen = false;
        this.isSuperWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.SUPER_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.SUPER_WIN_LOOP, true);
        this.winLevel[1].active = true;
    }

    private showMegaWin() {
        this.isBigWinOpen = false;
        this.isSuperWinOpen = false;
        this.isMegaWinOpen = true;
        this.winSpine.setAnimation(0, this.spineData.MEGA_WIN_OPEN, false);
        this.winSpine.addAnimation(0, this.spineData.MEGA_WIN_LOOP, true);
        this.winLevel[2].active = true;
    }

    /**
     * 金額跑完時,發送更新user金錢欄位,與贏分欄位
     * @param point
     */
    userMoneyEventEmit(point) {
        if (SlotGameManager.instance.gameState === GameState.PLAYING) {
            let level = this.freeResult.BaseLevelWin
            UserWinPointStateNotification.instance.notify(point, level);
        } else if (SlotGameManager.instance.gameState == GameState.FREEING) {
            let point = this.freeResult.FreeSpinWin;
            let level = this.freeResult.BaseLevelWin
            UserWinPointStateNotification.instance.notify(point, level);
        }
        if (SlotGameManager.instance.gameState != GameState.FREEING) {
            UserMoneyChangeNotification.instance.notify(this.normalResult.UserPointAfter);
        }
    }
    /**
     * 分數跑完時
     * @param {number} totalPoint
     */
    @Music("bigWinEnd")
    @EffectStop("runPoint")
    updateWinPointEnd(totalPoint: number) {
        this.winPointLabel.string = new Intl.NumberFormat().format(totalPoint);
        this.userMoneyEventEmit(totalPoint);
        this.isNumberRun = false;
        //時間到後初始所有參數
        this.scheduleOnce(() => {
            this.winPointLabel.string = "";
            this.isBigWinOpen = false;
            this.isMegaWinOpen = false;
            this.isSuperWinOpen = false;
            this.node.active = false;
            if (SlotGameManager.instance.gameState == GameState.FREEING) {
                AudioManager.instance.musicPlay("FBS");
            } else {
                AudioManager.instance.musicPlay("NBS")
            }
            this.resolve();
        }, 5);
    }

    protected update(dt: number) {
        if (this.isNumberRun) {
            let totalPoint = this.point;
            let time = this.checkTimer(this.pointSplitIndex);
            if (this.pointSplitIndex == 2 && !this.isSuperWinOpen) {
                this.showSuperWin();
            }
            if (this.pointSplitIndex >= 3 && !this.isMegaWinOpen) {
                this.showMegaWin();
            }
            //當分數到達時呼叫
            if (this.startNum >= totalPoint) {
                this.updateWinPointEnd(totalPoint);
                return;
            }
            let numberFormat = new Intl.NumberFormat().format(Math.floor(this.startNum * 10) / 10);
            if (numberFormat.indexOf(".") == -1) {
                numberFormat = numberFormat + ".0"
            }
            this.winPointLabel.string = numberFormat;
            this.startNum += this.totalPoint[this.pointSplitIndex] / time * dt;
            //當前跑分要到達的level數字
            if (this.pointSplitIndex == 0 && this.levelWinPoint != 0) {
                this.levelWinPoint = this.userNowBet * this.totalPoint[this.pointSplitIndex];
            }
            if (this.startNum >= this.levelWinPoint) {
                if (this.pointSplitIndex == this.totalPoint.length - 1) {
                    return;
                }
                this.pointSplitIndex++;
                this.levelWinPoint += this.totalPoint[this.pointSplitIndex];
            }
        }
    }
}