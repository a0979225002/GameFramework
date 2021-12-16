/// <reference path="./Enum/GameState.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)更新,獲取,加入,變更,使用等..流程工廠
         * @Date 2021-05-14 上午 10:50
         * @Version 1.0
         */
        export interface IGameProcessFactory {

            /**
             * 當前流程
             */
            process: IProcess;

            /**
             * 初始流程,執行綁定的流程內的onCreate方法
             * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
             */
            initProcess(processName?: string | type.ProcessType): void;

            /**
             * 添加流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @param {IProcess} process - 流程 class
             */
            setProcess(processName: string | type.ProcessType, process: IProcess);

            /**
             * 獲取該流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @returns {IProcess}
             */
            getProcess(processName: string | type.ProcessType): IProcess;

            /**
             * 拿取全部已經綁定的流程
             * @return {Map<string, fcc.IF.IProcess>}
             */
            getAllProcess(): Map<string, IF.IProcess>;

            /**
             * 改變流程
             * @param {string | GameType} processName - 可使用預設 ProcessType 或自訂義流程名稱
             */
            changeProcess(processName: string | type.ProcessType);

            /**
             * 執行流程
             * @returns {Promise<void>}
             */
            useProcess(): Promise<void>;

        }
    }
}