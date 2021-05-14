import {AutoType} from '../../Framework/Config/Enum/ConfigEnum'
import {GameEventType} from '../../Framework/Listener/Enum/gameEventType'
import {ServerEventType} from '../../Framework/Listener/Enum/ServerEventType'
import EventManager from '../../Framework/Listener/EventManager'
import {GameState} from '../../Framework/Procedure/Enum/GameState'
import SlotGameManager from '../../Framework/Procedure/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import {socketJS} from '../../Socket/Socket'
import MainGameButton from '../ButtonEvent/MainGameButton'
import FreeEndController from '../Controller/FreeEndController'
import FreeOpenController from '../Controller/FreeOpenController'
import MainGameController from '../Controller/MainGameController'
import SlotController from '../Controller/SlotController'
import WinLevelController from '../Controller/WinLevelController'
import MainGameLabel from '../LabelEvent/MainGameLabel'

export default class MainGameFreeProcess implements ISlotProcedureExecutionContainer{

    private slotStyle: NoLineSlot;

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeStart(): Promise<void> {

        this.onCreate();

        return new Promise<void>(async (resolve) => {

            cc.log("free onCustomizeStart");

            this.slotStyle.initializeState();
            SlotController.closeWinGrid();

            //-1 為這次剩餘次數,因為資料是上局資料
            let count: number = WebResponseManager.instance.freeResult.Count - 1;

            //第一次進入Free狀態
            if (WebResponseManager.instance.result.FreeSpinCount != 0) {

                MainGameLabel.remove();

                MainGameButton.switchButton(false);

                MainGameController.showFreeBG();

                await FreeOpenController.showFreeOpeningAnimation(
                    WebResponseManager.instance.result.FreeSpinCount);

                count = WebResponseManager.instance.result.FreeSpinCount - 1;

                //清空一般模式的free狀態,避免重複近來
                WebResponseManager.instance.result.FreeSpinCount = 0;
            }

            //FREE TO FREE 判斷是否增加 更新count數
            if (WebResponseManager.instance.freeResult.FreeToFree != 0) {

                await FreeOpenController.showFreeOpeningAnimation(
                    WebResponseManager.instance.freeResult.FreeToFree);

                count = WebResponseManager.instance.freeResult.Count + WebResponseManager.instance.freeResult.FreeToFree - 1;

            }

            MainGameLabel.updateFreeTitle(count);
            resolve();
        });
    }

    public onSineInGrid(): Promise<void> {
        return new Promise<void>(async (resolve, reject) => {

            socketJS.SFSToServer("FreeSpin", "");

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
        return new Promise(async (resolve, reject) => {

            if (WebResponseManager.instance.freeResult.TotalWinPoint != 0) {

                SlotController.showWinGrid(WebResponseManager.instance.freeResult.GridWin);

            }

            await this.checkWinPoint(
                WebResponseManager.instance.freeResult.TotalWinPoint,
            );

            resolve();
        });
    }

    public onCustomizeEnd(): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {

            if (WebResponseManager.instance.freeResult.FreeToFree == 0 &&
                WebResponseManager.instance.freeResult.Count == 0
            ) {

                let point = WebResponseManager.instance.freeResult.FreeSpinWin;

                await FreeEndController.showFreeEnd(point, 4);

                //關閉 free 背景
                MainGameController.closeFreeBG();
                //關閉 free 標題
                MainGameLabel.closeFreeTitle();
                //打開一般模式所有按鈕
                MainGameButton.switchButton(true);
                SlotGameManager.instance.gameState = GameState.STANDBY;
                //如果是自動狀態是free結束,將在結束時關閉auto狀態
                if (SlotGameManager.instance.autoType == AutoType.freeEnd && SlotGameManager.instance.isAutoState) {
                    EventManager.instance.setEvent(EventManager.gameTarget, GameEventType.AUTO);
                }
            }
            resolve();
        });
    }

    onChangeStatus() {


    }

    private checkWinPoint(spinWin: number, level?: number): Promise<void> {

        return new Promise(resolve => {

            if (spinWin == 0) {
                resolve();
                return;
            }

            let winPoint = WebResponseManager.instance.freeResult.FreeSpinWin;

            if (spinWin != 0 &&
                //顯示 一般獎動畫
                WebResponseManager.instance.freeResult.BaseLevelWin == 0) {
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

            } else if (WebResponseManager.instance.freeResult.BaseLevelWin > 0) {

                WinLevelController.showWinAboveState(spinWin, resolve);

            }
        });
    }


    public onSineOutGrid(): Promise<void> {
        return undefined;
    }
}