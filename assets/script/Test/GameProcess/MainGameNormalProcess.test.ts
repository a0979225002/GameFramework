import {GameState} from '../../Framework/Procedure/Enum/GameState'
import SlotGameManager from '../../Framework/Procedure/SlotGameManager'
import SlotStyleManager from '../../Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../Framework/Slot/SlotType/NoLineSlot'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import FreeOpenController from "../../MainGameScript/Controller/FreeOpenController";
import {socketJS} from '../../Socket/Socket'

export default class MainGameNormalProcessTest implements ISlotProcedureExecutionContainer{

    private slotStyle: NoLineSlot;

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeEnd(): Promise<void> {

        if (WebResponseManager.instance.result.FreeSpinCount != 0) {
            SlotGameManager.instance.gameState = GameState.FREEING;
        }

        return Promise.resolve(undefined);
    }

    public onCustomizeStart(): Promise<void> {

        return new Promise(async (resolve) => {
            this.onCreate();

            socketJS.SFSToServer("Bet", SlotGameManager.instance.userBetPoint);
            //測試BigWin
            //WinLevelController.showWinAboveState(1580,resolve);

            await FreeOpenController.showFreeOpeningAnimation(20);
            cc.log("有來嗎???")

            //測試FreeEnd
//            await FreeEndController.showFreeEnd(1500000.579,4);
//            cc.log("我結束?")

            let a = setInterval(() => {

                if (SlotGameManager.instance.isResultOk) {

                    clearInterval(a);
                    resolve();
                }
            }, 0.5);

        });
    }

    public onRunGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    public onShowAnswer(): Promise<void> {
        return Promise.resolve(undefined);
    }

    public onSineOutGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    public onSineInGrid(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onChangeStatus() {
    }


}