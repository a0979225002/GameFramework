/**
 * @Author XIAO-LI-PIN
 * @Description (介面)老虎機流程
 * @Date 2021-05-14 下午 03:07
 * @Version 1.0
 */
interface ISlotGameProcess extends IProcess {

    /**
     * 自訂開始遊戲前的效果(按鈕,背景....)
     * @returns {this}
     */
    onCustomizeStart(): this;

    /**
     * sine in grid
     * @returns {this}
     */
    onSineInGrid(): this;

    /**
     * 跑格子->監聽事件(即停)
     * @returns {this}
     */
    onRunning(): this;

    /**
     * 停止格子
     * @returns {this}
     */
    onSineOutGrid(): this;

    /**
     * 顯示結果
     * @returns {this}
     */
    onShowAnswer(): this;

    /**
     * 自訂義停止效果(更換音樂,更換按鈕圖案,更換背景圖案.......)
     * @returns {this}
     */
    onCustomizeEnd(): this;
}