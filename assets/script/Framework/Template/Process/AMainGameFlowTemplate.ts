export default abstract class AMainGameFlowTemplate implements ISlotProcedureContainer {

    abstract onCustomizeStart(): Promise<void>;

    abstract onSineInGrid(): Promise<void>;

    abstract onRunGrid(): Promise<void>;

    abstract onSineOutGrid(): Promise<void>;

    abstract onCustomizeEnd(): Promise<void>;

    abstract onShowAnswer(): Promise<void>;

}