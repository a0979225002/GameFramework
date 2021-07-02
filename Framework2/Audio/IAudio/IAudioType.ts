/**
 * @Author XIAO-LI-PIN
 * @Description (介面)音樂控制器,由音樂工廠做相對應呼叫對應的控制器
 * @Date 2021-05-13 上午 10:24
 * @Version 1.0
 */
interface IAudioType {

    /**
     * 撥放音樂
     * @param {string} name : 資源名稱
     * @param {Map<string, any>} data : 該音樂撥放數據
     */
    play(name: string, data: Map<string, any>): void;

    /**
     * 停止該音樂
     * @param {string} name
     */
    stop(name?: string): void;

}