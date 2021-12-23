/**
 * @Author 蕭立品
 * @Description (介面) 狀態流程跳轉class,設定當前狀態與下一個可移動的狀態
 * @Date 2021-12-23 下午 05:37
 * @Version 1.0
 */
namespace fcc {
    export namespace IF {
        export interface IBaseProcessTransition {
            /**
             * 當前狀態
             * @type {string}
             * @private
             */
            currentState: string;

            /**
             * 是否可以前往下個流程
             * @return {boolean}
             */
            canReachNext(nextState: string): boolean
        }
    }
}
