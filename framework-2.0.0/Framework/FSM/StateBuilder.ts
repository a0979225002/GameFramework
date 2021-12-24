/**
 * @Author 蕭立品
 * @Description 狀態建構封裝
 * @Date 2021-12-24 下午 04:05
 * @Version 1.0
 */
namespace fcc {
    export class StateBuilder {

        /**
         * 最大保存的狀態記錄數量
         * @type {number}
         * @default - 5
         * @private
         */
        private maxStateRecordCount: number = 5;

        /**
         * 狀態處理器
         * @type {fcc.StateHandler}
         * @private
         */
        private stateHandler: StateHandler;

        constructor(stateHandler: StateHandler) {
            this.stateHandler = stateHandler;
        }

        /**
         * 設置最大保存的狀態記錄
         * @param {number} count - 最大保存數量
         * @default : 5
         */
        setMaxStateRecordCount(count: number): this {
            this.maxStateRecordCount = count;
            return this;
        }

        /**
         * 添加狀態
         * @param {string} stateName - 自訂義狀態名稱
         * @param {IF.IStateAction} state - 執行的狀態內容 class
         */
        setState(stateName: string, state: fcc.IF.IStateAction): this {
            if (this.stateHandler.stateActionContainer.has(stateName)) {
                errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, `添加的狀態名稱重複,請更換狀態名稱 : ${stateName}`)
                return;
            }
            this.stateHandler.stateActionContainer.set(stateName, state);
            return this;
        }

        /**
         * 建構狀態流程
         * @param {IF.IBaseProcessTransition} process
         */
        build(...process: IF.IBaseProcessTransition[]): void {
            for (let p of process) {
                if (this.stateHandler.processContainer.has(p.currentState)) {
                    errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, `添加重複流程 : ${p.currentState}`)
                    continue;
                }
                this.stateHandler.processContainer.set(p.currentState, p);
            }
            if (this.stateHandler.stateRecorder) return;
            this.stateHandler.stateRecorder = new StatusRecorder(this.maxStateRecordCount);
        }
    }
}
