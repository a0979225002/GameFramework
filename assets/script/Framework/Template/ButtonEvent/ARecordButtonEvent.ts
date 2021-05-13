import {ServerEventType} from "../../Listener/Enum/ServerEventType";
import EventManager from "../../Listener/EventManager";
import {SceneDirection} from "../../Scene/Enum/SceneStyle";

const {ccclass} = cc._decorator;

enum PageChange {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS"
}

enum DayType {
    ONE_DAY = "ONE_DAY",
    FIVE_DAY = "FIVE_DAY",
    TEN_DAY = "TEN_DAY",
}

export {PageChange, DayType};

export interface HistoryData {
    Bet: number;
    BetID: number;
    GameNumber: number;
    Time: string;
    WinLose: number;
}

export interface GameHistoryData {
    State: number;
    History: HistoryData[];
}

/**
 * @Author 蕭立品
 * @Description 說明頁按鈕統一事件名稱命名
 * @Date 2021-05-10 下午 02:20
 * @Version 1.0
 */
@ccclass
export default abstract class ARecordButtonEvent extends cc.Component {

    protected isResultOK: boolean;

    gameHistoryResultEventListener() {
        EventManager.instance.serverEventListener(ServerEventType.GET_GAME_HISTORY_RESULT, (gameHistoryData: GameHistoryData) => {
            this.gameHistoryResultEvent(gameHistoryData);
            this.isResultOK = true;
        }, false);
    }

    /**
     * 自訂初始化
     */
    protected abstract onCreate();

    protected abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);

    /**
     * 返回上一頁事件
     * @protected
     */
    protected abstract goBackTouchEvent(event, sceneDirection: SceneDirection);

    /**
     * 顯示祥單頁面
     * @protected
     */
    public abstract showRecordPage();

    /**
     * 清除祥單資訊
     * @protected
     */
    protected abstract removeRecordUI();

    /**
     * 每次拿取後端api時,執行進度條
     * @protected
     */
    protected abstract runProgress(): Promise<void>;

    /**
     * 紀錄換頁事件
     */
    protected abstract nextAndLastButtonTouchEvent(event: any, callBack: PageChange);

}