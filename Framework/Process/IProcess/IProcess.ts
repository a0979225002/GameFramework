/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有的流程父類
 * @Date 2021-05-14 下午 03:44
 * @Version 1.0
 */
interface IProcess {

    /**
     * 更換流程
     */
    onChangeStatus(): this;

    /**
     * 開始執行
     * @returns {Promise<void>}
     */
    start(): Promise<void>;

}