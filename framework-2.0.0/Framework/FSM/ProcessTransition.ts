/**
 * @Author 蕭立品
 * @Description 狀態流程跳轉class,設定當前狀態與下一個可移動的狀態
 * @Date 2021-12-22 下午 03:46
 * @Version 1.0
 */
namespace fcc {

    export class ProcessTransition implements IF.IBaseProcessTransition {
        /**
         * 當前狀態
         * @type {string}
         * @private
         */
        private readonly _currentState: string;

        /**
         * 下個可用狀態
         * @type {Set<string>}
         * @private
         */
        private readonly _nextState: Set<string>;

        constructor(currentState: string, nextState: Set<string>) {
            this._currentState = currentState;
            this._nextState = nextState;
        }

        /**
         * 是否可以前往下個流程
         * @return {boolean}
         */
        canReachNext(nextState: string): boolean {
            if (this._nextState.has(nextState)) {
                return true;
            } else {
                errorMgr.executeError(fcc.type.ErrorType.PROCESS_FW, `無法跳轉至該流程 : ${nextState} 當前狀態能跳轉的流程 : ${this._nextState} `);
                return false;
            }
        }

        get currentState(): string {
            return this._currentState;
        }
    }
}
