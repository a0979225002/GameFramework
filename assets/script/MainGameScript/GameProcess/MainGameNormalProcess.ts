import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState, GameType} from '../../Framework/Process/Enum/GameState'
import SlotGameManager from '../../Framework/Process/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import SlotController from '../Controller/SlotController'
import WinLevelController from '../Controller/WinLevelController'
import MainGameLabel from '../LabelEvent/MainGameLabel'

export default class MainGameNormalProcess implements ISlotProcedureExecutionContainer {

    private slotStyle: NoLineSlot;

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeStart(): Promise<void> {
        this.onCreate();
        return new Promise(async (resolve, reject) => {
            this.slotStyle.initializeState();
            MainGameLabel.remove();
            SlotController.closeWinGrid();
            SlotGameManager.instance.gameState = GameState.PLAYING;
            resolve();
        });
    }

    public onSineInGrid(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            socketJS.SFSToServer("Bet", SlotGameManager.instance.userBetPoint);
            await this.slotStyle.sineInSlot();
            resolve();
        });
    }

    public onRunGrid(): Promise<void> {
        return new Promise(async (resolve, reject) => {
            await this.slotStyle.runSlotAnimation();
            resolve();
        });
    }

    public onShowAnswer(): Promise<void> {
        cc.log("onShowAnswer");
        return new Promise(async (resolve, reject) => {
            if (WebResponseManager.instance.result.TotalWinPoint != 0) {
                SlotController.showWinGrid(WebResponseManager.instance.result.GridWin);
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
        if (WebResponseManager.instance.result.FreeSpinCount > 0) {
            SlotGameManager.instance.gameState = GameState.FREEING;
            SlotGameManager.instance.changeProcess(GameType.FREE);
            return;
        }
    }

    private checkWinPoint(): Promise<void> {

        return new Promise(resolve => {

            let winPoint = WebResponseManager.instance.result.TotalWinPoint;
            if (winPoint == 0) {
                resolve();
                return;
            }
            if (winPoint != 0 &&
                //顯示 一般獎動畫
                WebResponseManager.instance.result.BaseLevelWin == 0) {
                EventManager.instance.setEvent(
                    EventManager.gameTarget,
                    GameEventType.WIN_POINT,
                    winPoint, 0
                );

                //配合一般獎動畫時間,關閉一般獎時,更新 user 金額
                setTimeout(() => {
                    EventManager.instance.setEvent(
                        EventManager.serverTarget,
                        ServerEventType.UPDATE_POINTS,
                        WebResponseManager.instance.result.UserPointAfter
                    )
                    resolve();
                }, 900);

            } else if (WebResponseManager.instance.result.BaseLevelWin > 0) {
                let nowPoint = WebResponseManager.instance.result.TotalWinPoint;
                WinLevelController.showWinAboveState(nowPoint, resolve);
            }
        });
    }

    public onSineOutGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

}