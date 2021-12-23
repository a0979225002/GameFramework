namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @Date 2021-05-14 下午 03:44
     * @Version 1.2
     */
    export class ProcessManager implements IF.IProcessManager {

        private static _instance: IF.IProcessManager

        private configManager: IF.IConfigManager;

        /**
         * 當前遊戲狀態
         * @type {fcc.type.GameStateType}
         * @default - type.GameStateType.STANDBY
         * @private
         */
        private _gameState: type.GameStateType;

        /**
         * 是否當前流程執行中
         * @type {boolean}
         * @private
         */
        private isStartProcess: boolean;

        /**
         * 流程工廠
         * @type {fcc.IF.IGameProcessFactory}
         * @private
         */
        private gameProcessFactory: IF.IGameProcessFactory;

        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;                                      //獲取ConfigManger,雙向綁定
            this.gameProcessFactory = new GameProcessFactory(this);      //初始化流程工廠
            this._gameState = type.GameStateType.STANDBY;                            //初始遊戲狀態
            this.isStartProcess = false;                                             //初始當前執行流程狀態
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案只有一次產生此class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new ProcessManager(configManager);
                // processMgr = this._instance;
            }
        }


        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.IProcessManager {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.PROCESS_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }

        /**
         * 設定流程
         * @param {fcc.type.ProcessType | string} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {fcc.IF.IProcess} process - 流程
         * @return {this}
         */
        setProcess(processName: type.ProcessType | string, process: IF.IProcess): this {
            this.gameProcessFactory.setProcess(processName, process);
            return this;
        }

        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        public initProcess(processName?: string | fcc.type.ProcessType) {
            this.gameProcessFactory.initProcess(processName);
        }

        /**
         * 設定初始要執行的流程
         * @param processName - 流程名稱
         */
        setDefaultProcess(processName: type.ProcessType | string) {
            this.gameProcessFactory.changeProcess(processName);
        }

        /**
         * 設置待機狀態
         * @param {string} processName -
         */
        setIdleProcess(processName:string){

        }

        /**
         * 更換流程
         * @param {fcc.type.ProcessType | string} processName - 要更換的流程名稱
         */
        changeProcess(processName: type.ProcessType | string) {
            this.gameProcessFactory.changeProcess(processName);
        }

        /**
         * 執行設定好的流程
         * @return {Promise<void>}
         */
        public play(): Promise<void> {
            return new Promise<void>(async (resolve) => {
                if (!this.isStartProcess) {
                    this.updateProcessState(true);//流程開始
                    await this.gameProcessFactory.useProcess();
                    this.updateProcessState(false);//流程循環結束
                    resolve();
                } else {
                    ErrorManager.instance.executeError(type.ErrorType.PROCESS_FW, "流程尚未結束,請勿重複執行");
                }
            });
        };

        /**
         * 改變當前流程進行狀態
         * @param {boolean} state
         */
        private updateProcessState(state: boolean) {
            this.isStartProcess = state;
        }

        /**
         * 清除堵塞狀態
         * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
         */
        remake() {
            this.isStartProcess = false;
        }

        public set gameState(value: type.GameStateType) {
            this._gameState = value
        }

        public get gameState(): type.GameStateType {
            return this._gameState
        }
    }
}
