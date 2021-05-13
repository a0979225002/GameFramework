/**
 * 遊戲流程
 */
export default class GameProcess implements IGameProcess {

    /**
     * 保存使用者流程
     * @type {Set<Function>}
     * @private
     */
    private readonly procedure: Set<() => Promise<void>>;
    private readonly _container: ISlotProcedureContainer;

    constructor(container: ISlotProcedureContainer) {

        this._container = container;
        this.procedure = new Set();              //初始化,存放要執行的方法
    }

    public onCustomizeStart(): this {

        this.procedure.add(this._container.onCustomizeStart);

        return this;
    }

    public onSineInGrid(): this {

        this.procedure.add(this._container.onSineInGrid);

        return this;
    }

    public onRunGrid(): this {

        this.procedure.add(this._container.onRunGrid);

        return this;
    }

    public onSineOutGrid(): this {

        this.procedure.add(this._container.onSineOutGrid);

        return this;
    }

    public onCustomizeEnd(): this {

        this.procedure.add(this._container.onCustomizeEnd);

        return this;
    }

    public onShowAnswer(): this {

        this.procedure.add(this._container.onShowAnswer);

        return this;
    }

    public remake(): void {

    }

    public async start() {
        for (let method of this.procedure) {

            await method.apply(this._container);

        }
    }
}