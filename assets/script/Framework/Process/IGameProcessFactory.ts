import {GameType} from "./Enum/GameState";

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
     * 添加流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     */
    setProcess(processName: string | GameType, process: IProcess);

    /**
     * 獲取該流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     * @returns {IProcess}
     */
    getProcess(processName: string | GameType, process: IProcess): IProcess;

    /**
     * 改變流程
     * @param {string | GameType} processName
     */
    changeProcess(processName: string | GameType);

    /**
     * 執行流程
     * @returns {Promise<void>}
     */
    useProcess(): Promise<void>;

}