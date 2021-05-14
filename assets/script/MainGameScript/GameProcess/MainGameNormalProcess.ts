import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Procedure/Enum/GameState'
import SlotGameManager from '../../Framework/Procedure/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import SlotController from '../Controller/SlotController'
import WinLevelController from '../Controller/WinLevelController'
import MainGameLabel from '../LabelEvent/MainGameLabel'

export default class MainGameNormalProcess implements ISlotProcedureExecutionContainer{

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

    public onCustomizeEnd(): Promise<void> {
        cc.log("onCustomizeEnd");
        return new Promise(async (resolve, reject) => {

            if (WebResponseManager.instance.result.FreeSpinCount != 0) {
                SlotGameManager.instance.gameState = GameState.FREEING;
            }

            resolve();
        });
    }

    onChangeStatus() {

        // private async checkNowState() {
        //     if (WebResponseManager.instance.result.FreeSpinCount > 0) {
        //         this.gameState = GameState.FREEING;
        //         await this._freeProcess.start();
        //
        //     } else if (WebResponseManager.instance.freeResult.FreeToFree > 0) {
        //
        //         this.gameState = GameState.FREEING;
        //         await this._freeProcess.start();
        //
        //     } else if (WebResponseManager.instance.freeResult.Count > 0) {
        //
        //         this.gameState = GameState.FREEING;
        //         await this._freeProcess.start();
        //
        //     } else {
        //         this.gameState = GameState.PLAYING;
        //         await this._normalProcess.start();
        //     }
        // }
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