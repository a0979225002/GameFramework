import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import {GameState, GameType} from '../../Framework/Process/Enum/GameState'
import AutoStateChangeNotification from "../../Framework/Process/GameNotification/AutoStateChangeNotification";
import UserMoneyChangeNotification from "../../Framework/Process/GameNotification/UserMoneyChangeNotification";
import UserWinPointStateNotification from "../../Framework/Process/GameNotification/UserWinPointStateNotification";
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import NoLineResult from "../../Framework/WebResponse/Model/NormalResult/NoLineResult";
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import MainGameButton from '../ButtonEvent/MainGameButton'
import FreeEndController from '../Controller/FreeEndController'
import FreeOpenController from '../Controller/FreeOpenController'
import MainGameController from '../Controller/MainGameController'
import SlotController from '../Controller/SlotController'
import WinLevelController from '../Controller/WinLevelController'
import MainGameLabel from '../LabelEvent/MainGameLabel'

export default class MainGameFreeProcess implements ISlotProcedureExecutionContainer {

    private slotStyle: NoLineSlot;
    private result: INoLineResultModel;
    private freeResult: IFreeResultModel;

    constructor() {
        this.result = WebResponseManager.instance.result as NoLineResult;
        this.freeResult = WebResponseManager.instance.freeResult
    }

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeStart(): Promise<void> {

        this.onCreate();

        return new Promise<void>(async (resolve) => {
            this.slotStyle.initializeState();
            SlotController.instance.closeWinGrid();
            //-1 為這次剩餘次數,因為資料是上局資料
            let count: number = this.freeResult.Count - 1;
            count = await this.normalToFree(count);
            count = await this.freeToFree(count);
            MainGameLabel.instance.updateFreeTitle(count);
            resolve();
        });
    }

    /**
     * 由一般模式進入free時
     * @param {number} count
     * @returns {Promise<number>}
     * @private
     */
    private async normalToFree(count: number): Promise<number> {
        //第一次進入Free狀態
        if (this.result.FreeSpinCount != 0) {
            MainGameLabel.instance.remove();
            MainGameButton.instance.switchButton(false);
            MainGameController.instance.showFreeBG();
            await FreeOpenController.instance.showFreeOpeningAnimation(
                this.result.FreeSpinCount);
            count = this.result.FreeSpinCount - 1;
            //清空一般responseModel 的 free狀態,避免重複近來
            this.result.FreeSpinCount = 0;
        }
        return count;
    }

    /**
     * 進入freeToFree時
     * @param {number} count
     * @returns {Promise<number>}
     * @private
     */
    private async freeToFree(count: number): Promise<number> {
        //FREE TO FREE 判斷是否增加 更新count數
        if (this.freeResult.FreeToFree != 0) {
            await FreeOpenController.instance.showFreeOpeningAnimation(this.freeResult.FreeToFree);
            count = this.freeResult.Count + this.freeResult.FreeToFree - 1;
        }
        return count;
    }

    public onSineInGrid(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            socketJS.SFSToServer("FreeSpin", "");
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
        return new Promise(async (resolve) => {
            if (WebResponseManager.instance.freeResult.TotalWinPoint != 0) {
                SlotController.instance.showWinGrid(WebResponseManager.instance.freeResult.GridWin);
            }
            await this.checkWinPoint(
                WebResponseManager.instance.freeResult.TotalWinPoint,
            );
            resolve();
        });
    }

    public onCustomizeEnd(): Promise<void> {
        return new Promise<void>(async (resolve) => {
            if (WebResponseManager.instance.freeResult.FreeToFree == 0 &&
                WebResponseManager.instance.freeResult.Count == 0
            ) {
                let point = WebResponseManager.instance.freeResult.FreeSpinWin;
                await FreeEndController.instance.showFreeEnd(point, 4);
                //關閉 free 背景
                MainGameController.instance.closeFreeBG();
                //關閉 free 標題
                MainGameLabel.instance.closeFreeTitle();
                //打開一般模式所有按鈕
                MainGameButton.instance.switchButton(true);
                SlotGameManager.instance.gameState = GameState.STANDBY;
                //如果是自動狀態是free結束,將在結束時關閉auto狀態
                if (SlotGameManager.instance.autoType == AutoType.freeEnd && SlotGameManager.instance.isAutoState) {
                    let autoType = SlotGameManager.instance.autoType;
                    AutoStateChangeNotification.instance.notify(false, autoType, autoType)
                }
            }
            resolve();
        });
    }

    onChangeStatus() {
        if (this.freeResult.FreeToFree == 0 && this.freeResult.Count == 0) {
            SlotGameManager.instance.changeProcess(GameType.NORMAL);
        }
    }

    private checkWinPoint(spinWin: number): Promise<void> {
        return new Promise(resolve => {
            if (spinWin == 0) {
                resolve();
                return;
            }
            let winPoint = WebResponseManager.instance.freeResult.FreeSpinWin;
            if (spinWin != 0 && this.freeResult.BaseLevelWin == 0) {
                //推播 一般獎動畫事件
                UserWinPointStateNotification.instance.notify(winPoint, 0);
                //配合一般獎動畫時間,關閉一般獎時,更新 user 金額
                setTimeout(() => {
                    let userMoney = WebResponseManager.instance.result.UserPointAfter;
                    UserMoneyChangeNotification.instance.notify(userMoney)
                    resolve();
                }, 900);
            } else if (WebResponseManager.instance.freeResult.BaseLevelWin > 0) {
                WinLevelController.instance.showWinAboveState(spinWin, resolve);
            }
        });
    }

    public onSineOutGrid(): Promise<void> {
        return undefined;
    }
}