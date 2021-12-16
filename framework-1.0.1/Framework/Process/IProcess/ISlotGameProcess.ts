namespace fcc {
    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)老虎機流程
         * @Date 2021-05-14 下午 03:07
         * @Version 1.0
         */
        export interface ISlotGameProcess extends IProcess {

            /**
             * 初始化 : 自訂開始遊戲前的效果
             * @example - 按鈕,背景…等
             * @return {this}
             */
            onCustomizeStart(): this;

            /**
             * 老虎機運行前,漸入效果
             * @return {this}
             */
            onSineInGrid(): this;

            /**
             * 遊戲持續執行動作
             * @return {this}
             */
            onRunning(): this;

            /**
             * 自訂義停止後事件
             * @example - 更換音樂,更換背景圖案,校正回歸流程狀態...等
             * @return {this}
             */
            onCustomizeEnd(): this;

            /**
             * 顯示結果
             * @returns {this}
             */
            onShowAnswer(): this;


        }
    }
}