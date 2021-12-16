import AGenericTemplate from "../../BaseTemplate/AGenericTemplate";

/**
 * 更換頁面type
 */
enum PageChangeType {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS"
}

/**
 * 日期type
 */
enum DayType {
    ONE_DAY = "ONE_DAY",
    FIVE_DAY = "FIVE_DAY",
    TEN_DAY = "TEN_DAY",
}

/**
 * (介面)server回傳紀錄 History資料
 */
interface HistoryData {
    Bet: number;
    BetID: number;
    GameNumber: number;
    Time: string;
    WinLose: number;
}

/**
 * (介面)server回傳的紀錄資料
 */
interface GameHistoryData {
    State: number;
    History: HistoryData[];
}

export {PageChangeType, DayType,HistoryData,GameHistoryData};

/**
 * @Author 蕭立品
 * @Description 說明頁按鈕統一事件名稱命名
 * @Date 2021-05-10 下午 02:20
 * @Version 1.0
 */
export default abstract class ARecordButtonTemplate extends AGenericTemplate {

    protected onLoad(): void {
        super.onLoad();
    }

    /**
     * 返回上一頁事件
     * @param event - cocos 返回該按鈕屬性
     * @protected
     */
    protected abstract goBackTouchEvent(event): void;

    /**
     * 顯示祥單頁面
     * @protected
     */
    public abstract showRecordPage(): void;

    /**
     * 紀錄換頁事件
     * @param event - cocos 返回該按鈕屬性
     * @param {PageChangeType} callBack - 返回字串,當前是上一頁按鈕還是下一頁按鈕被觸發
     * @protected
     */
    protected abstract nextAndLastButtonTouchEvent(event: any, callBack: PageChangeType): void;

}
