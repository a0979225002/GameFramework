import ARecordButtonTemplate, {DayType, PageChangeType} from "./ARecordButtonTemplate";
import {fcc} from "../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 紀錄頁面單一按鈕配置
 * @Example 單一方向遊戲
 * ```
 *      使用事件:
 *          fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT
 *          callback :  abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);
 * ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class ARecordOnlyButtonTemplate extends ARecordButtonTemplate {

    /**
     * 離開記錄頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButton: cc.Button;

    /**
     * 查看一日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButton: cc.Button;

    /**
     * 查看五日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButton: cc.Button;

    /**
     * 查看十日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButton: cc.Button;

    /**
     * 查看下一頁紀錄
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButton: cc.Button;

    /**
     * 查看上一頁紀錄
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButton: cc.Button;

    protected onLoad() {
        /*反回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goBackButton,
                "goBackTouchEvent",
                this,
            );

        /*查看一日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.oneDayRecordButton,
                "daysRecordTouchEventH",
                this, DayType.ONE_DAY
            );

        /*查看五日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.fiveDayRecordButton,
                "daysRecordTouchEventH",
                this,
                DayType.FIVE_DAY
            );

        /*查看十日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.tenDayRecordButton,
                "daysRecordTouchEventH",
                this,
                DayType.TEN_DAY
            );

        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.nextRecordButton,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.NEXT
            );

        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.previousRecordButton,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.PREVIOUS
            );

        super.onLoad();
    }

    /**
     * 所有天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventH(event, callBack: DayType):void;


}
