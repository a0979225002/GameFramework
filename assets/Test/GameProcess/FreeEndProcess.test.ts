import FreeEndController from "../../script/MainGameScript/Controller/FreeEndController";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-01 下午 05:50
 * @Version 1.0
 */
export default class FreeEndProcessTest implements IGameProcedureExecutionContainer {

    onCreate(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onExecution(): Promise<void> {
        return new Promise<void>(async resolve => {
            await FreeEndController.instance.showFreeEnd(1500000.579, 4);
            cc.log("我結束?")
            resolve();
        });
    }

    onEnd(): Promise<void> {
        return Promise.resolve(undefined);
    }

    onChangeStatus() {
    }
}