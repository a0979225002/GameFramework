/**
 * @Author 蕭立品
 * @Description 狀態機管理器
 * @Date 2021-12-22 上午 11:45
 * @Version 1.0
 */
namespace fcc {

    export class FSMManager implements IF.IBaseFSM {

        private static _instance: IF.IBaseFSM

        private configManager: IF.IConfigManager;

        /**
         * 當前是否流程是否在執行中
         * @type {boolean}
         * @private
         */
        private isExecutingState: boolean;

        /**
         * 各狀態處理
         */
        stateHandler: StateHandler;

        private constructor() {
            this.isExecutingState = false;                                           //初始當前執行流程狀態
            this.stateHandler = new StateHandler();
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        public static setInstance() {
            if (!this._instance) {
                this._instance = new FSMManager();
                FSMMgr = this._instance;
            }
        }

        static get instance(): fcc.IF.IBaseFSM {
            if (!this._instance) {
                this._instance = new FSMManager();
                FSMMgr = this._instance;
            }
            return this._instance;
        }

        /**
         * 添加初始狀態
         * @param {string} stateName - 狀態
         */
        initialState(stateName: string): void {
            this.stateHandler.initialState(stateName);
        }

        /**
         * 初始化狀態動作,執行綁定的流程內的onCreate方法
         * @param {string} stateName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化當前所有綁定的流程
         */
        initStateAction(stateName?: string): void {
            this.stateHandler.initStateAction(stateName);
        }

        /**
         * 改變流程
         * @param {string} nextState - 下一個狀態
         */
        changeState(nextState: string): void {
            this.stateHandler.changeState(nextState);
        }

        /**
         * 返回上一個狀態
         * @param {boolean} canReAction - 是否要重新執行動作
         */
        previousMoveState(canReAction: boolean): void {
            this.stateHandler.previousMoveState(canReAction);
        }

        /**
         * 獲取當前狀態內容
         * @returns {IProcess}
         */
        getCurrentStateContent(): fcc.IF.IStateAction {
            return this.stateHandler.getCurrentStateContent();
        }

        /**
         * 拿取所有流程
         * @return {Map<string, IF.IBaseProcessTransition>}
         */
        getAllProcess(): Map<string, fcc.IF.IBaseProcessTransition> {
            return this.stateHandler.getAllProcess();
        }

        /**
         * 獲取當前狀態
         * @return {string}
         */
        getCurrentState(): string {
            return this.stateHandler.getCurrentState();
        }

        /**
         * 獲取上個狀態
         * @return {string}
         */
        getPreviousState(): string {
            return this.stateHandler.getPreviousState();
        }

        /**
         * 獲取當前狀態紀錄
         * @return {Array<string>}
         */
        getStateRecord(): Array<string> {
            return this.stateHandler.getStateRecord();
        }

        /**
         * 清空當前所有歷史的狀態
         * @return {Array<string>} - 清除的紀錄
         */
        clearStateRecord(): Array<string> {
            return this.stateHandler.clearStateRecord();
        }

        /**
         * 當前是否正在執行中
         * @return {boolean}
         */
        isExecution(): boolean {
            return this.stateHandler.isExecution();
        }

        /**
         * 流程狀態開始
         * @param {string} startName - 要開始的狀態
         * @return {Promise<void>}
         */
        async start(startName: string): Promise<void> {
            await this.stateHandler.start(startName);
        }

        /**
         * 流程狀態釋放
         */
        exit(): void {
            this.stateHandler.exit();
        }

        /**
         * 創建狀態與流程
         * @return {fcc.IF.IBaseStateBuilder}
         */
        builder(): fcc.IF.IBaseStateBuilder {
            return this.stateHandler.builder();
        }
    }

    /**
     * 裝飾器註冊FSM狀態
     * @param {string} state
     * @returns {Function}
     * @constructor
     */
    export function FSMState(state: string): Function {
        return function (target: any) {
            fcc.FSMManager.instance.builder().setState(state, new target());
        }
    }

}
