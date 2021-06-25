import {GameState, GameType} from '../../script/Framework/Process/Enum/GameState'
import SlotProcessManager from '../../script/Framework/Process/SlotProcessManager'
import SlotStyleManager from '../../script/Framework/Slot/SlotStyleManager'
import NoLineSlot from '../../script/Framework/Slot/SlotType/NoLineSlot'
import {ResponseType} from "../../script/Framework/WebResponse/Enum/ResponseType";
import NoLineResult from "../../script/Framework/WebResponse/ServerDataModel/NormalResult/NoLineResult";
import {WebResponseManager} from '../../script/Framework/WebResponse/WebResponseManager'
import WinLevelController from "../../script/MainGameScript/Controller/WinLevelController";
import {socketJS} from '../../script/Socket/Socket'

export default class NormalBigWinProcessTest implements ISlotProcedureExecutionContainer {

    private slotStyle: NoLineSlot;
    private normalResult: NoLineResult;

    constructor() {
        this.normalResult =
            WebResponseManager
                .instance<NoLineResult>()
                .getResult(ResponseType.NORMAL);
    }

    private onCreate() {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager.instance.slot as NoLineSlot;
        }
    }

    public onCustomizeEnd(): Promise<void> {
        return Promise.resolve(undefined);
    }

    public onCustomizeStart(): Promise<void> {

        return new Promise<void>(async (resolve) => {
            this.onCreate();
            socketJS.SFSToServer("Bet", SlotProcessManager.instance.userBetPoint);
            //測試BigWin
            WinLevelController.instance.showWinAboveState(1580, resolve);
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
        //如果一般模式中response的免費次數不等於0,進入free狀態
        if (this.normalResult.FreeSpinCount > 0) {
            SlotProcessManager.instance.gameState = GameState.FREEING;
            SlotProcessManager.instance.changeProcess(GameType.FREE);
            return;
        }
    }
}