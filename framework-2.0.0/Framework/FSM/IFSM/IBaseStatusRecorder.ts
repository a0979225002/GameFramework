/**
 * @Author 蕭立品
 * @Description (介面) 狀態紀錄器
 * @Date 2021-12-23 下午 05:52
 * @Version 1.0
 */
namespace fcc {
    export namespace IF {
        export interface IBaseStatusRecorder {
            /**
             * 更新狀態紀錄
             * @param {string} nextState - 要更新的狀態
             */
            updateStateRecord(nextState: string): void;

            /**
             * 更新為上個狀態
             * @return {boolean} - 是否還能返回上個動作
             */
            updatePreviousState(): boolean;

            /**
             * 當前狀態
             * @return {string}
             */
            getCurrentState(): string;

            /**
             * 上一個狀態
             * @return {string}
             */
            getPreviousState(): string;

            /**
             * 獲取當前狀態記錄
             * @return {Array<string>}
             */
            getNowStateRecords(): Array<string>;


            /**
             * 清空當前所有歷史狀態
             * @return {Array<string>} - 清除的紀錄
             */
            clearRecord(): Array<string>;
        }
    }
}
