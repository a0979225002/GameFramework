/**
 * @Author XIAO-LI-PIN
 * @Description 任何遊戲皆可用流程
 * @Date 2021-05-14 下午 03:07
 * @Version 1.0
 */
export default class GameProcess implements IGameProcess {

    /**
     * 保存使用者流程
     * @type {Set<Function>}
     * @private
     */
    private readonly process: Set<() => Promise<void> | void>;

    /**
     * 流程執行
     * @type {IGameProcedureExecutionContainer}
     * @private
     */
    private readonly _executionContainer: IGameProcedureExecutionContainer;

    constructor(container: IExecutionContainer) {
        this._executionContainer = container as IGameProcedureExecutionContainer;
        this.process = new Set<() => Promise<void>>();
    }

    onCreate(): this {
        this.process.add(this._executionContainer.onCreate);
        return this;
    }

    onExecution(): this {

        this.process.add(this._executionContainer.onExecution);

        return this;
    }

    onEnd(): this {
        this.process.add(this._executionContainer.onEnd);
        return this;
    }

    onChangeStatus(): this {
        this.process.add(this._executionContainer.onChangeStatus);
        return this;
    }

    public async start(): Promise<void> {
        for (let method of this.process) {
            await method.apply(this._executionContainer);
        }
    }
}