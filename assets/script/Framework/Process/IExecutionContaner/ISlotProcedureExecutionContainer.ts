/**
 * @Author XIAO-LI-PIN
 * @Description (介面)老虎機程式流程執行容器
 * @Date 2021-05-14 下午 03:44
 * @Version 1.0
 */
interface ISlotProcedureExecutionContainer extends IExecutionContainer {

    /**
     * 自訂流程開始時判斷
     * @returns {Promise<void>}
     */
    onCustomizeStart(): Promise<void>;

    /**
     * 老虎機開始前漸入執行
     * @returns {Promise<void>}
     */
    onSineInGrid(): Promise<void>;

    /**
     * 老虎機轉動
     * @returns {Promise<void>}
     */
    onRunGrid(): Promise<void>;

    /**
     * 老虎機漸出停止
     * @returns {Promise<void>}
     */
    onSineOutGrid(): Promise<void>;

    /**
     * 顯示結果動畫
     * @returns {Promise<void>}
     */
    onShowAnswer(): Promise<void>;

    /**
     * 自訂義結束
     * @returns {Promise<void>}
     */
    onCustomizeEnd(): Promise<void>;

}