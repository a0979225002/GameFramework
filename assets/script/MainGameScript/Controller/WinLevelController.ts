import AudioManager, {Effect, Music, EffectStop} from '../../Framework/Audio/AudioManager'
import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {Loading} from "./LoadingDialogController";

const {ccclass, property} = cc._decorator;

let self: WinLevelController;

@ccclass
class WinLevelController extends cc.Component {

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
    private resolve: (value: (void | PromiseLike<void>)) => void;
    private levelWinPoint: number

    protected onLoad() {

        self = this;
        this.node.active = false;
        this.winPointLabel.string = "";

        this.winLevelRange = WebResponseManager.instance.tableInfo.LevelWinPoint;
        this.winLevelRange.push(60, 70);

        this.spineData = {
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

        self.resolve = null;
        //當前獲獎分數
        self.userNowBet = WebResponseManager.instance.tableInfo.LineTotalBet[SlotGameManager.instance.userBetPoint.LineBet];
        self.startNum = 0;                  //當前開始跑分的初始分數
        self.pointSplitIndex = 0;           //當前尋訪第幾個Level
        self.isNumberRun = false;           //當前是否能開始跑分
        self.winPointLabel.string = "";     //當前顯示跑到幾分
        self.node.active = true;            //打開整個node
        self.totalPoint = []                //初始拆分的數字
        self.levelWinPoint = 0              //當前跑到第幾個拆分的數字儲存用
        self.showBigWin();                  //開啟Big Win
    }

    public totalPointSplit(point) {

        let totalPoint = point;

        let numberSplit = [];

        let count = 0;

        let beforePoint = 0;
        let afterPoint = 0;

        while (true) {

            if (count == 0) {
                numberSplit.push(self.userNowBet * self.winLevelRange[count]);
            }

            if (count == self.winLevelRange.length - 1) {

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

            if (count < self.winLevelRange.length) {
                count++;
                beforePoint = self.userNowBet * self.winLevelRange[count - 1];
                afterPoint = self.userNowBet * self.winLevelRange[count];
            }
        }

        self.totalPoint = numberSplit;
        cc.log(self.totalPoint)
    }

    @Effect("runPoint")
    private runTotalWinPoint() {
        self.isNumberRun = true;
    }
    @Loading("prefab")
    public showWinAboveState(point: number, resolve: (value: (void | PromiseLike<void>)) => void) {
        self.initializeSpine();
        self.totalPointSplit(point);
        self.point = point;
        self.scheduleOnce(() => {
            self.runTotalWinPoint();
            self.node.once(cc.Node.EventType.TOUCH_END, self.runPointTouchEnd);
            cc.systemEvent.once(cc.SystemEvent.EventType.KEY_DOWN, self.keyboardEvent, self);
        }, 0.5);

        self.resolve = resolve;
    }

    private keyboardEvent(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                self.runPointTouchEnd();
                break;
        }
    }

    /**
     * 當點擊畫面時,直接顯示最終答案
     * @private
     */
    private runPointTouchEnd() {

        self.pointSplitIndex = self.totalPoint.length - 1;
        self.startNum = self.point;

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

        self.isBigWinOpen = true;
        self.winSpine.setAnimation(0, self.spineData.BIG_WIN_OPEN, false);
        self.winSpine.addAnimation(0, self.spineData.BIG_WIN_LOOP, true);
        self.winSpineBorder.setAnimation(0, self.spineData.WIN_BORDER_OPEN, false);
        self.winSpineBorder.addAnimation(0, self.spineData.WIN_BORDER_LOOP, true);
        self.winLevel[1].active = false;
        self.winLevel[2].active = false;

    }

    private showSuperWin() {
        self.isBigWinOpen = false;
        self.isSuperWinOpen = true;
        self.winSpine.setAnimation(0, self.spineData.SUPER_WIN_OPEN, false);
        self.winSpine.addAnimation(0, self.spineData.SUPER_WIN_LOOP, true);
        self.winLevel[1].active = true;

    }

    private showMegaWin() {

        self.isBigWinOpen = false;
        self.isSuperWinOpen = false;
        self.isMegaWinOpen = true;
        self.winSpine.setAnimation(0, self.spineData.MEGA_WIN_OPEN, false);
        self.winSpine.addAnimation(0, self.spineData.MEGA_WIN_LOOP, true);
        self.winLevel[2].active = true;

    }

    /**
     * 金額跑完時,發送更新user金錢欄位,與贏分欄位
     * @param point
     */
    userMoneyEventEmit(point) {

        if(SlotGameManager.instance.gameState === GameState.PLAYING){
            EventManager.instance.setEvent(
                EventManager.gameTarget,
                GameEventType.WIN_POINT,
                point,
                WebResponseManager.instance.result.BaseLevelWin
            );
        }else if(SlotGameManager.instance.gameState == GameState.FREEING){
            EventManager.instance.setEvent(
                EventManager.gameTarget,
                GameEventType.WIN_POINT,
                WebResponseManager.instance.freeResult.FreeSpinWin,
                WebResponseManager.instance.freeResult.BaseLevelWin
            );
        }
        if (SlotGameManager.instance.gameState != GameState.FREEING) {
            EventManager.instance.setEvent(
                EventManager.serverTarget,
                ServerEventType.UPDATE_POINTS,
                WebResponseManager.instance.result.UserPointAfter
            )
        }
    }

    /**
     * 分數跑完時
     * @param {number} totalPoint
     */
    @Music("bigWinEnd")
    @EffectStop("runPoint")
    updateWinPointEnd(totalPoint: number) {

        self.winPointLabel.string = new Intl.NumberFormat().format(totalPoint);
        self.userMoneyEventEmit(totalPoint);
        self.isNumberRun = false;

        //時間到後初始所有參數
        this.scheduleOnce(() => {

            this.winPointLabel.string = "";
            self.isBigWinOpen = false;
            self.isMegaWinOpen = false;
            self.isSuperWinOpen = false;

            self.node.active = false;

            if (SlotGameManager.instance.gameState == GameState.FREEING) {

                AudioManager.instance.musicPlay("FBS");

            } else {
                AudioManager.instance.musicPlay("NBS")
            }

            self.resolve();

        }, 5);
    }

    protected update(dt: number) {

        if (self.isNumberRun) {
            cc.log("測試...", self.levelWinPoint);
            let totalPoint = self.point;

            let time = self.checkTimer(this.pointSplitIndex);

            if (self.pointSplitIndex == 2 && !self.isSuperWinOpen) {
                self.showSuperWin();
            }

            if (self.pointSplitIndex >= 3 && !self.isMegaWinOpen) {
                self.showMegaWin();
            }

            //當分數到達時呼叫
            if (self.startNum >= totalPoint) {
                self.updateWinPointEnd(totalPoint);
                return;
            }

            let numberFormat = new Intl.NumberFormat().format(Math.floor(self.startNum * 10) / 10);

            if (numberFormat.indexOf(".") == -1) {
                numberFormat = numberFormat + ".0"
            }

            self.winPointLabel.string = numberFormat;

            self.startNum += self.totalPoint[self.pointSplitIndex] / time * dt;

            //當前跑分要到達的level數字
            if (self.pointSplitIndex == 0 && self.levelWinPoint != 0) {
                self.levelWinPoint = self.userNowBet * self.totalPoint[self.pointSplitIndex];
            }

            if (self.startNum >= self.levelWinPoint) {
                if (self.pointSplitIndex == self.totalPoint.length - 1) {
                    return;
                }
                self.pointSplitIndex++;
                self.levelWinPoint += self.totalPoint[self.pointSplitIndex];
            }
        }
    }
}

export default new WinLevelController();