import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {GameType} from "./Enum/GameState";
import ISlotGameManager from "./ISlotGameManager";
import {IGameProcessFactory} from "./IGameProcessFactory";

/**
 * @Author XIAO-LI-PIN
 * @Description 流程工廠 : 更新,獲取,加入,變更等..
 * @Date 2021-05-13 下午 06:17
 * @Version 1.1
 */
export default class GameProcessFactory implements IGameProcessFactory {

    private gameManager: ISlotGameManager;              //遊戲控制器,雙向綁定
    private processToMap: Map<string, IProcess>;        //所有流程添加保存
    public process: IProcess;                           //當前使用的流程

    constructor(gameManager: ISlotGameManager) {
        this.gameManager = gameManager;
        this.processToMap = new Map<string, IProcess>();
    }

    /**
     * 添加流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     */
    setProcess(processName: string | GameType, process: IProcess) {
        this.processToMap.set(processName, process);
    }

    /**
     * 獲取該流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     * @returns {IProcess}
     */
    getProcess(processName: string | GameType, process: IProcess): IProcess {
        return this.processToMap.get(processName);
    }

    /**
     * 改變流程
     * @param {string | GameType} processName
     */
    changeProcess(processName: string | GameType) {
        if (!this.processToMap.has(processName)) {
            ErrorManager.instance.executeError(ErrorType.PROCESS_FW, `${processName} 搜尋不到此流程,請檢查流程是否添加`);
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