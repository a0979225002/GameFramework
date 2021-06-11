/**
 * @Author XIAO-LI-PIN
 * @Description (介面)一般遊戲程序執行容器
 * @Date 2021-05-14 下午 03:15
 * @Version 1.0
 */
interface IGameProcedureExecutionContainer extends IExecutionContainer {

    /**
     * 流程開始前
     * @returns {Promise<void>}
     */
    onCreate(): Promise<void>;

    /**
     * 執行流程
     * @returns {Promise<void>}
     */
    onExecution(): Promise<void>;

    /**
     * 流程結束時
     * @returns {Promise<void>}
     */
    onEnd(): Promise<void>;

}