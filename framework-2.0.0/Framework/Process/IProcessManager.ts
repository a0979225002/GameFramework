/// <reference path="./Enum/AutoType.ts" />
/// <reference path="./Enum/GameState.ts" />
namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)遊戲管理器,管理當前流程,遊戲當前狀態
         * @Date 2021-05-14 下午 03:44
         * @Version 1.1
         */
        export interface IProcessManager {

            /**
             * 當前遊戲狀態
             * @type {fcc.type.GameStateType}
             * @default - type.GameStateType.STANDBY
             * @private
             */
            gameState: type.GameStateType;

            /**
             * 設定流程
             * @param {fcc.type.ProcessType | string} processName - 可使用預設 ProcessType 或自訂義流程名稱
             * @param {fcc.IF.IProcess} process - 流程
             * @return {this}
             */
            setProcess(processName: type.ProcessType | string, process: IProcess): this;

            /**
             * 初始流程,執行綁定的流程內的onCreate方法
             * @param {string | fcc.type.ProcessType} processName - 指定只要初始哪個流程 class,如果使用無參方法,將會初始化所有綁定的流程
             */
            initProcess(processName?: string | fcc.type.ProcessType): void;

            /**
             * 設定初始要執行的流程
             * @param processName - 流程名稱
             */
            setDefaultProcess(processName: string | type.ProcessType): void;

            /**
             * 更換流程
             * @param {fcc.type.ProcessType | string} processName - 原本設定的流程名稱
             */
            changeProcess(processName: type.ProcessType | string): void;

            /**
             * 執行設定好的流程
             */
            play(): Promise<void>;

            /**
             * 清除堵塞狀態
             * 注意:清除該狀態後,該次的流程即使尚未執行完,也能執行下次流程
             */
            remake(): void;

        }
    }
}
