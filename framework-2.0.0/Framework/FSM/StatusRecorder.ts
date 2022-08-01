/**
 * @Author 蕭立品
 * @Description 狀態紀錄器
 * @Date 2021-12-23 下午 02:45
 * @Version 1.0
 */
namespace fcc {

    export class StatusRecorder implements IF.IBaseStatusRecorder {

        /**
         * 保存使用過的狀態
         * @type {Array<string>}
         * @private
         */
        private record: Array<string>;

        /**
         * 當前的狀態指針位置
         * @type {number}
         * @private
         */
        private statePointer: number;

        /**
         * 最大紀錄數量
         * @type {number}
         * @private
         */
        private readonly maxRecordCount: number;

        /**
         * 當前狀態
         * @type {string}
         * @private
         */
        private currentState: string;

        /**
         * 上一個狀態
         * @type {string}
         * @private
         */
        private previousState: string;

        constructor(maxRecordCount: number) {
            this.record = new Array<string>(maxRecordCount);
            this.maxRecordCount = maxRecordCount;
            this.statePointer = 0;
        }


        /**
         * 更新狀態紀錄
         * @param {string} nextState - 要更新的狀態
         */
        updateStateRecord(nextState: string): void {
            if (this.statePointer < this.maxRecordCount) {
                this.record[this.statePointer] = nextState;
                this.statePointer++;
            } else {
                this.record.shift();
                this.record.push(nextState);
            }
            this.previousState = this.currentState;
            this.currentState = nextState;
        }

        /**
         * 更新為上個狀態
         * @return {boolean} - 是否還能返回上個動作
         */
        updatePreviousState(): boolean {
            if (this.statePointer <= 1 || !this.previousState) {
                cc.warn("已經無法在返回上一個狀態");
                return false;
            } else {
                this.currentState = this.record[this.statePointer - 2];
                this.record[this.statePointer - 1] = null;
                this.statePointer--;
                if (this.statePointer < 3) {
                    this.previousState = null;
                } else {
                    this.previousState = this.record[this.statePointer - 3];
                }
                return true;
            }
        }

        /**
         * 當前狀態
         * @return {string}
         */
        getCurrentState(): string {
            return this.currentState;
        }

        /**
         * 上一個狀態
         * @return {string}
         */
        getPreviousState(): string {
            if (!this.previousState) return null;
            return this.previousState;
        }

        /**
         * 獲取當前狀態記錄
         * @return {Array<string>}
         */
        getNowStateRecords(): Array<string> {
            return this.record;
        }

        /**
         * 清空當前所有歷史狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearRecord(): Array<string> {
            let beforeRecord = this.record;
            this.record = new Array<string>(this.maxRecordCount);
            return beforeRecord;
        }
    }
}
