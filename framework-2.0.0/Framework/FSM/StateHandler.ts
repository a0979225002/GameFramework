/**
 * @Author 蕭立品
 * @Description 狀態確認處理
 * @Date 2021-12-22 下午 02:29
 * @Version 1.0
 */
namespace fcc {

    export class StateHandler implements IF.IBaseFSM {

        /**
         * 當前所有狀態容器
         * @type {Map<string, null>}
         * @private
         */
        public stateActionContainer: Map<string, IF.IStateAction>;

        /**
         * 當前流程容器
         * @type {Map<string, fcc.IF.IStateAction>}
         * @private
         */
        public readonly processContainer: Map<string, IF.IBaseProcessTransition>;

        /**
         * 狀態紀錄器
         * @type {IF.IBaseStatusRecorder}
         * @private
         */
        public stateRecorder: IF.IBaseStatusRecorder;

        /**
         * 流程開始
         * @type {(value: (PromiseLike<void> | void)) => void}
         * @private
         */
        private resolve: (value: (PromiseLike<void> | void)) => void;

        constructor() {
            this.stateActionContainer = new Map<string, fcc.IF.IStateAction>();
            this.processContainer = new Map<string, IF.IBaseProcessTransition>();
        }

        /**
         * 添加初始狀態
         * @param {string} stateName - 狀態
         */
        initialState(stateName: string): void {
            if (this.stateActionContainer.has(stateName)) {
                this.stateRecorder.updateStateRecord(stateName);
                this.stateActionContainer.get(stateName).onExecution();
            } else {
                errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, `當前狀態不存在 : ${stateName}`)
            }
        }

        /**
         * 初始化狀態動作,執行綁定的流程內的onCreate方法
         * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
         */
        initStateAction(stateName?: string): void {
            if (stateName) {
                this.stateActionContainer.get(stateName).onCreate();
            } else {
                for (let state of this.stateActionContainer.values()) {
                    state.onCreate();
                }
            }
        }

        /**
         * 改變流程
         * @param {string} nextState - 下一個狀態
         */
        changeState(nextState: string): void {
            if (!this.stateRecorder.getCurrentState()) {
                errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, `你尚未初始預設狀態 : 請先執行 initialState()`);
                return;
            }

            if (this.processContainer.get(this.stateRecorder.getCurrentState()).canReachNext(nextState)) {
                this.stateRecorder.updateStateRecord(nextState);
                this.stateActionContainer.get(this.stateRecorder.getCurrentState()).onExecution();
            }
        }

        /**
         * 返回上一個狀態
         * @param {boolean} canReAction - 是否要重新執行動作
         */
        previousMoveState(canReAction: boolean): void {
            let hasPreviousState = this.stateRecorder.updatePreviousState();
            if (!hasPreviousState) return;
            if (canReAction) {
                this.stateActionContainer.get(this.stateRecorder.getCurrentState()).onExecution();
            }
        }

        /**
         * 獲取當前狀態內容
         * @returns {IProcess}
         */
        getCurrentStateContent(): fcc.IF.IStateAction {
            return this.stateActionContainer.get(this.stateRecorder.getCurrentState());
        }

        /**
         * 拿取所有流程
         * @return {Map<string, IF.IBaseProcessTransition>}
         */
        getAllProcess(): Map<string, IF.IBaseProcessTransition> {
            return this.processContainer;
        }

        /**
         * 獲取當前狀態
         * @return {string}
         */
        getCurrentState(): string {
            return this.stateRecorder.getCurrentState();
        }

        /**
         * 獲取上個狀態
         * @return {string}
         */
        getPreviousState(): string {
            return this.stateRecorder.getPreviousState();
        }

        /**
         * 獲取當前狀態紀錄
         * @return {Array<string>}
         */
        getStateRecord(): Array<string> {
            return this.stateRecorder.getNowStateRecords();
        }

        /**
         * 清空當前所有歷史狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearStateRecord(): Array<string> {
            return this.stateRecorder.clearRecord();
        }

        /**
         * 流程狀態開始
         * @param {string} startName - 要開始的狀態
         * @return {Promise<void>}
         */
        start(startName: string): Promise<void> {
            return new Promise<void>((resolve) => {
                if (this.resolve) {
                    errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, "流程尚未結束,請先釋放流程");
                } else {
                    this.resolve = resolve;
                    this.changeState(startName);
                }
            });
        }

        /**
         * 流程狀態釋放
         */
        exit(): void {
            if (!this.resolve) return;
            this.resolve();
            this.resolve = null;
        }

        builder(): fcc.IF.IBaseStateBuilder {
            return new StateBuilder(this);
        }
    }
}
