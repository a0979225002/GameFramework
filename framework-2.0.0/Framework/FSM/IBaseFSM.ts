/**
 * @Author 蕭立品
 * @Description (介面) 狀態機管理器
 * @Date 2021-12-22 上午 11:49
 * @Version 1.0
 */
namespace fcc {

    export namespace IF {

        export interface IBaseFSM {

            /**
             * 設置最大保存的狀態記錄
             * @param {number} count - 最大保存數量
             */
            setMaxStateRecordCount(count: number): void;

            /**
             * 添加狀態
             * @param {string} stateName - 自訂義狀態名稱
             * @param {IF.IStateAction} state - 執行的狀態內容 class
             */
            setState(stateName: string, state: IF.IStateAction): this;

            /**
             * 添加初始狀態
             * @param {string} stateName - 狀態
             */
            initialState(stateName: string):void;

            /**
             * 初始化狀態動作,執行綁定的流程內的onCreate方法
             * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
             */
            initStateAction(stateName?: string): void;

            /**
             * 改變流程
             * @param {string} nextState - 下一個狀態
             */
            changeState(nextState: string):void;

            /**
             * 返回上一個狀態
             * @param {boolean} canReAction - 是否要重新執行動作
             */
            previousMoveState(canReAction: boolean):void;


            /**
             * 獲取當前狀態內容
             * @returns {IProcess}
             */
            getCurrentStateContent(): IF.IStateAction;

            /**
             * 拿取當前所有流程
             * @return {Map<string, Process>}
             */
            getAllProcess(): Map<string, IF.IBaseProcessTransition>;

            /**
             * 獲取當前流程
             * @return {string}
             */
            getCurrentState(): string;

            /**
             * 獲取當前狀態紀錄
             * @return {Array<string>}
             */
            getStateRecord():Array<string>;

            /**
             * 清空當前所有歷史的狀態
             * @return {Array<string>} - 清除的紀錄
             */
            clearStateRecord():Array<string>;

            /**
             * 流程狀態開始
             * @param {string} startName - 要開始的狀態
             * @return {Promise<void>}
             */
            start(startName: string): Promise<void>

            /**
             * 流程狀態釋放
             */
            exit():void;

            /**
             * 建構狀態流程
             * @param {IF.IBaseProcessTransition} process
             */
            build(...process:IF.IBaseProcessTransition[]): void;
        }
    }
}
