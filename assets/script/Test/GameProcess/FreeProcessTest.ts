import {GameState, GameType} from "../../Framework/Process/Enum/GameState";
import SlotGameManager from "../../Framework/Process/SlotGameManager";
import {WebResponseManager} from "../../Framework/WebResponse/WebResponseManager";
import {socketJS} from "../../Socket/Socket";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-17 下午 05:00
 * @Version 1.0
 */
export default class FreeProcessTest implements IGameProcedureExecutionContainer{
    onCreate(): Promise<void> {
        return new Promise(resolve => {
            socketJS.SFSToServer("Bet", SlotGameManager.instance.userBetPoint);
            let a = setInterval(() => {
                if (SlotGameManager.instance.isResultOk) {
                    clearInterval(a);
                    resolve();
                }
            }, 0.5);
        });
    }

    onEnd(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onExecution(): Promise<void> {
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
}