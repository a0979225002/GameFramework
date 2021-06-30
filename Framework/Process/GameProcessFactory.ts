/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="./Enum/GameState.ts" />
/// <reference path="./IProcessManager.ts" />
/// <reference path="./IGameProcessFactory.ts" />
namespace fcc {
    /**
     * @Author XIAO-LI-PIN
     * @Description 流程工廠 : 更新,獲取,加入,變更等.. 注意:此 class 由 manager 實例化,如果無特殊需求,請勿使用
     * @Date 2021-05-13 下午 06:17
     * @Version 1.1
     */
    export class GameProcessFactory implements IF.IGameProcessFactory {

        private gameManager: IF.IProcessManager;                    //遊戲控制器,雙向綁定
        private readonly processToMap: Map<string, IF.IProcess>;    //所有流程添加保存
        public process: IF.IProcess;                                //當前使用的流程

        constructor(gameManager: IF.IProcessManager) {
            this.gameManager = gameManager;
            this.processToMap = new Map<string, IF.IProcess>();
        }

        /**
         * 初始流程,執行綁定的流程內的onCreate方法
         * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
         */
        initProcess(processName?: string | fcc.type.ProcessType) {
            if (processName) {
                if (!this.processToMap.has(processName)) {
                    ErrorManager.instance.executeError(type.ErrorType.PROCESS_FW, "查找不到該流程,請確認是否已綁定進框架中");
                } else {
                    this.processToMap.get(processName).executionContainer.onCreate();
                }
            } else {
                let values = this.processToMap.values();
                for (let value of values) {
                    value.executionContainer.onCreate();
                }
            }

        }

        /**
         * 添加流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @param {IProcess} process - 流程 class
         */
        setProcess(processName: string | type.ProcessType, process: IF.IProcess) {
            this.processToMap.set(processName, process);
        }

        /**
         * 獲取該流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         * @returns {IProcess}
         */
        getProcess(processName: string | type.ProcessType): IF.IProcess {
            return this.processToMap.get(processName);
        }

        /**
         * 拿取全部已經綁定的流程
         * @return {Map<string, fcc.IF.IProcess>}
         */
        getAllProcess(): Map<string, IF.IProcess> {
            return this.processToMap;
        }

        /**
         * 改變流程
         * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
         */
        changeProcess(processName: string | type.ProcessType) {
            if (!this.processToMap.has(processName)) {
                ErrorManager.instance.executeError(type.ErrorType.PROCESS_FW, `${processName} 搜尋不到此流程,請檢查流程是否添加`);
                return;
            }
            this.process = this.processToMap.get(processName);
        }

        /**
         * 執行流程
         * @returns {Promise<void>}
         */
        async useProcess(): Promise<void> {
            await this.process.start();
        }
    }
}