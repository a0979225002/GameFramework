/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-12-24 下午 04:28
 * @Version 1.0
 */
namespace fcc {
    export namespace IF {
        export interface IBaseStateBuilder {

            /**
             * 設置最大保存的狀態記錄
             * @param {number} count - 最大保存數量
             */
            setMaxStateRecordCount(count: number): this;

            /**
             * 添加狀態
             * @param {string} stateName - 自訂義狀態名稱
             * @param {IF.IStateAction} state - 執行的狀態內容 class
             */
            setState(stateName: string, state: IF.IStateAction): this;

            /**
             * 建構狀態流程
             * @param {IF.IBaseProcessTransition} process
             */
            build(...process: IF.IBaseProcessTransition[]): void;
        }
    }
}
