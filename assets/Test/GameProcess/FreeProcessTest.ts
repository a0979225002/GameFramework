import {GameState, GameType} from "../../script/Framework/Process/Enum/GameState";
import SlotGameManager from "../../script/Framework/Process/SlotGameManager";
import {ResponseType} from "../../script/Framework/WebResponse/Enum/ResponseType";
import NoLineResult from "../../script/Framework/WebResponse/ServerDataModel/NormalResult/NoLineResult";
import {WebResponseManager} from "../../script/Framework/WebResponse/WebResponseManager";
import {socketJS} from "../../script/Socket/Socket";

/**
 * @Author XIAO-LI-PIN
 * @Description (測試)直接跳過所有一般模式,直到server回傳下局是free模式時,更改遊戲流程為正常狀態free流程
 * @Date 2021-05-17 下午 05:00
 * @Version 1.0
 */
export default class FreeProcessTest implements IGameProcedureExecutionContainer{

    private normalResult :INoLineResultModel;

    constructor() {
        this.normalResult =
            WebResponseManager
            .instance<NoLineResult>()
                .getResult(ResponseType.NORMAL);
    }

    onCreate(): Promise<void> {
        return new Promise(resolve => {
            socketJS.SFSToServer("Bet", SlotGameManager.instance.userBetPoint);
            let a = setInterval(() => {
                if (WebResponseManager.instance().isResultOk) {

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
        if (this.normalResult.FreeSpinCount > 0) {
            SlotGameManager.instance.gameState = GameState.FREEING;
            SlotGameManager.instance.changeProcess(GameType.FREE);
            return;
        }
    }
}