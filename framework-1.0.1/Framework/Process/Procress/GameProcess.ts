namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 任何遊戲皆可用流程
     * @Date 2021-05-14 下午 03:07
     * @Version 1.0
     */
    export class GameProcess implements IF.IGameProcess {

        /**
         * 保存使用者綁定的流程方法
         * @type {Set<Function>}
         * @private
         */
        private readonly _process: Set<() => Promise<void> | void>;

        /**
         * 流程容器
         * @type {IGameProcedureExecutionContainer}
         * @private
         */
        private readonly _executionContent: IF.IGameProcedureExecutionContent;

        constructor(container: IF.IGameProcedureExecutionContent) {
            this._executionContent = container;
            this._process = new Set<() => Promise<void>>();
        }

        /**
         * 執行流程
         * @return {this}
         */
        onExecution(): this {

            this._process.add(this._executionContent.onExecution);

            return this;
        }

        /**
         * 流程結束時
         * @return {this}
         */
        onEnd(): this {
            this._process.add(this._executionContent.onEnd);
            return this;
        }

        /**
         * 更換流程
         * @return {this}
         */
        onChangeStatus(): this {
            this._process.add(this._executionContent.onChangeStatus);
            return this;
        }

        /**
         * 將所有綁定的流程方法依序執行
         * @return {Promise<void>}
         */
        public async start(): Promise<void> {
            for (let method of this._process) {
                await method.apply(this._executionContent);
            }
        }

        get process(): Set<() => (Promise<void> | void)> {
            return this._process;
        }

        get executionContent(): fcc.IF.IGameProcedureExecutionContent {
            return this._executionContent;
        }
    }
}