/**
 * @Author XIAO-LI-PIN
 * @Description (測試)free開場動畫顯示狀態
 * @Date 2021-06-01 下午 05:43
 * @Version 1.0
 */
import {GameState} from "../../script/Framework/Process/Enum/GameState";
import SlotProcessManager from "../../script/Framework/Process/SlotProcessManager";
import FreeOpenController from "../../script/MainGameScript/Controller/FreeOpenController";

export default class FreeOpenProcessTest implements IGameProcedureExecutionContainer {

    onCreate(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onExecution(): Promise<void> {
        return new Promise<void>(async resolve => {
            SlotProcessManager.instance.gameState = GameState.PLAYING;
            await FreeOpenController.instance.showFreeOpeningAnimation(20);
            resolve();
        });
    }

    onEnd(): Promise<void> {
        SlotProcessManager.instance.gameState = GameState.STANDBY;
        return Promise.resolve(undefined);
    }

    onChangeStatus() {
    }
}