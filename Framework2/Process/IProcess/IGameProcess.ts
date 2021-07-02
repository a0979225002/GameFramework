/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-14 下午 03:08
 * @Version 1.0
 */
interface IGameProcess extends IProcess {

    /**
     * 流程開始前
     * @returns {this}
     */
    onCreate(): this;

    /**
     * 執行流程
     * @returns {this}
     */
    onExecution(): this;

    /**
     * 流程結束時
     * @returns {this}
     */
    onEnd(): this;

}