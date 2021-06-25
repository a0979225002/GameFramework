/**
 * @Author XIAO-LI-PIN
 * @Description 老虎機流程
 * @Date 2021-05-14 下午 03:07
 * @Version 1.0
 */
export default class SlotGameProcess implements ISlotGameProcess {
    /**
     * 保存使用者流程
     * @type {Set<Function>}
     * @private
     */
    private readonly process: Set<() => Promise<void> | void>;
    /**
     * 流程執行
     * @type {ISlotProcedureExecutionContainer}
     * @private
     */
    private readonly _executionContainer: ISlotProcedureExecutionContainer;

    constructor(container: ISlotProcedureExecutionContainer) {
        this._executionContainer = container as ISlotProcedureExecutionContainer;
        this.process = new Set();              //初始化,存放要執行的方法
    }

    public onCustomizeStart(): this {

        this.process.add(this._executionContainer.onCustomizeStart);

        return this;
    }

    public onSineInGrid(): this {

        this.process.add(this._executionContainer.onSineInGrid);

        return this;
    }

    public onRunning(): this {

        this.process.add(this._executionContainer.onRunGrid);

        return this;
    }

    public onSineOutGrid(): this {

        this.process.add(this._executionContainer.onSineOutGrid);

        return this;
    }

    public onCustomizeEnd(): this {

        this.process.add(this._executionContainer.onCustomizeEnd);

        return this;
    }

    public onShowAnswer(): this {

        this.process.add(this._executionContainer.onShowAnswer);

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