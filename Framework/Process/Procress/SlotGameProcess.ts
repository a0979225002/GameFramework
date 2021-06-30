namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機流程
     * @Date 2021-05-14 下午 03:07
     * @Version 1.0
     */
    export class SlotGameProcess implements IF.ISlotGameProcess {
        /**
         * 保存使用者綁定的流程方法
         * @type {Set<Function>}
         * @private
         */
        private readonly _process: Set<() => Promise<void> | void>;
        /**
         * 流程容器
         * @type {ISlotProcedureExecutionContainer}
         * @private
         */
        private readonly _executionContainer: IF.ISlotProcedureExecutionContainer;

        constructor(container: IF.ISlotProcedureExecutionContainer) {
            this._executionContainer = container;
            this._process = new Set();              //初始化,存放要執行的方法
        }

        /**
         * 初始化 : 自訂開始遊戲前的效果
         * @example - 按鈕,背景…等
         * @return {this}
         */
        public onCustomizeStart(): this {

            this._process.add(this._executionContainer.onCustomizeStart);

            return this;
        }

        /**
         * 老虎機運行前,漸入效果
         * @return {this}
         */
        public onSineInGrid(): this {

            this._process.add(this._executionContainer.onSineInGrid);

            return this;
        }

        /**
         * 遊戲持續執行動作
         * @return {this}
         */
        public onRunning(): this {

            this._process.add(this._executionContainer.onRunGrid);

            return this;
        }

        /**
         * 自訂義停止後事件
         * @example - 更換音樂,更換背景圖案,校正回歸流程狀態...等
         * @return {this}
         */
        public onCustomizeEnd(): this {
            this._process.add(this._executionContainer.onCustomizeEnd);
            return this;
        }

        /**
         * 顯示結果
         * @return {this}
         */
        public onShowAnswer(): this {

            this._process.add(this._executionContainer.onShowAnswer);

            return this;
        }

        /**
         * 更換流程
         * @example - fcc.processManager.changeProcess(GameType.NORMAL);
         * @return {this}
         */
        onChangeStatus(): this {
            this._process.add(this._executionContainer.onChangeStatus);
            return this;
        }

        /**
         * 開始執行
         * @return {Promise<void>}
         */
        public async start(): Promise<void> {
            for (let method of this._process) {
                await method.apply(this._executionContainer);
            }
        }

        get executionContainer(): fcc.IF.ISlotProcedureExecutionContainer {
            return this._executionContainer;
        }

        get process(): Set<() => (Promise<void> | void)> {
            return this._process;
        }
    }
}