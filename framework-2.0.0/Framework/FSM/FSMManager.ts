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

        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;                                      //獲取ConfigManger,雙向綁定
            this.isExecutingState = false;                                           //初始當前執行流程狀態
            this.stateHandler = new StateHandler();
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new FSMManager(configManager);
                FSMMgr = this._instance;
            }
        }

        static get instance(): fcc.IF.IBaseFSM {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.PROCESS_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }

        /**
         * 設置最大保存的狀態記錄
         * @param {number} count - 最大保存數量
         */
        setMaxStateRecordCount(count: number): void {
            this.stateHandler.setMaxStateRecordCount(count);
        }

        /**
         * 添加狀態
         * @param {string} stateName - 自訂義狀態名稱
         * @param {IF.IStateAction} state - 執行的狀態內容 class
         */
        setState(stateName: string, state: fcc.IF.IStateAction): this {
            this.stateHandler.setState(stateName, state);
            return this;
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
         * 拿取當前所有流程
         * @return {Map<string, Process>}
         */
        getAllProcess(): Map<string, fcc.IF.IBaseProcessTransition> {
            return this.stateHandler.getAllProcess();
        }

        /**
         * 獲取當前流程
         * @return {string}
         */
        getCurrentState(): string {
            return this.stateHandler.getCurrentState();
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
         * 建構狀態流程
         * @param {IF.IBaseProcessTransition} process
         */
        build(...process: fcc.IF.IBaseProcessTransition[]): void {
            this.stateHandler.build(...process);
        }
    }
}
