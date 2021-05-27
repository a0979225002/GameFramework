import {GameState, GameType} from '../../Framework/Process/Enum/GameState'
import UserMoneyChangeNotification from "../../Framework/Process/GameNotification/UserMoneyChangeNotification";
import UserWinPointStateNotification from "../../Framework/Process/GameNotification/UserWinPointStateNotification";
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import NoLineResult from "../../Framework/WebResponse/Model/NormalResult/NoLineResult";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import SlotController from '../Controller/SlotController'
import WinLevelController from '../Controller/WinLevelController'
import MainGameLabel from '../LabelEvent/MainGameLabel'

export default class MainGameNormalProcess implements ISlotProcedureExecutionContainer {

    private slotStyle: NoLineSlot;
    private normalResult: NoLineResult;

    constructor() {
        this.normalResult = WebResponseManager.instance.result as NoLineResult;
    }

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeStart(): Promise<void> {
        this.onCreate();
        return new Promise(async (resolve) => {
            this.slotStyle.initializeState();
            MainGameLabel.instance.remove();
            SlotController.instance.closeWinGrid();
            SlotGameManager.instance.gameState = GameState.PLAYING;
            resolve();
        });
    }

    public onSineInGrid(): Promise<void> {
        return new Promise(async (resolve) => {
            socketJS.SFSToServer("Bet", SlotGameManager.instance.userBetPoint);
            await this.slotStyle.sineInSlot();
            resolve();
        });
    }

    public onRunGrid(): Promise<void> {
        return new Promise(async (resolve) => {
            await this.slotStyle.runSlotAnimation();
            resolve();
        });
    }

    public onShowAnswer(): Promise<void> {
        cc.log("onShowAnswer");
        return new Promise(async (resolve) => {
            if (this.normalResult.TotalWinPoint != 0) {
                SlotController.instance.showWinGrid(this.normalResult.GridWin);
            }
            await this.checkWinPoint();
            resolve();
        });
    }


    onCustomizeEnd(): Promise<void> {
        SlotGameManager.instance.gameState = GameState.STANDBY;
        return Promise.resolve(undefined);
    }


    onChangeStatus() {
        //如果一般模式中response的免費次數不等於0,進入free狀態
        if (this.normalResult.FreeSpinCount > 0) {
            SlotGameManager.instance.gameState = GameState.FREEING;
            SlotGameManager.instance.changeProcess(GameType.FREE);
            return;
        }
    }

    private checkWinPoint(): Promise<void> {
        return new Promise(resolve => {
            let winPoint = this.normalResult.TotalWinPoint;
            if (winPoint == 0) {
                resolve();
                return;
            }
            if (winPoint != 0 && this.normalResult.BaseLevelWin == 0) {
                //顯示(level:0)一般獎動畫
                UserWinPointStateNotification.instance.notify(winPoint, 0);
                //配合一般獎動畫時間,關閉一般獎時,更新 user 金額
                setTimeout(() => {
                    UserMoneyChangeNotification.instance.notify(this.normalResult.UserPointAfter)
                    resolve();
                }, 900);

            } else if (this.normalResult.BaseLevelWin > 0) {
                //顯示大獎動畫
                let nowPoint = this.normalResult.TotalWinPoint;
                WinLevelController.instance.showWinAboveState(nowPoint, resolve);
            }
        });
    }

    public onSineOutGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

}