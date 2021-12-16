import ARecordButtonTemplate, {DayType, PageChangeType} from "./ARecordButtonTemplate";
import {fcc} from "../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 紀錄頁面雙按鈕配置
 *  * @Example 同時擁有直橫向方向遊戲
 * ```
 *      使用事件:
 *          fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT
 *          callback :  abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);
 * ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class ARecordDoubleButtonTemplate extends ARecordButtonTemplate {

    /**
     * 離開記錄頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonH: cc.Button;

    /**
     * 離開記錄頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonV: cc.Button;

    /**
     * 查看一日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButtonH: cc.Button;

    /**
     * 查看一日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButtonV: cc.Button;

    /**
     * 查看五日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButtonH: cc.Button;

    /**
     * 查看五日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButtonV: cc.Button;

    /**
     * 查看十日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButtonH: cc.Button;

    /**
     * 查看十日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButtonV: cc.Button;

    /**
     * 查看下一頁紀錄H
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButtonH: cc.Button;

    /**
     * 查看下一頁紀錄V
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButtonV: cc.Button;

    /**
     * 查看上一頁紀錄H
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButtonH: cc.Button;

    /**
     * 查看上一頁紀錄V
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButtonV: cc.Button;

    protected onLoad() {
        /*反回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.goBackButtonH,
                "goBackTouchEvent",
                this,
            );
        fcc.global.Button
            .addButtonEvent(
                this.goBackButtonV,
                "goBackTouchEvent",
                this,
            );

        /*查看一日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.oneDayRecordButtonH,
                "daysRecordTouchEventH",
                this, DayType.ONE_DAY
            );
        fcc.global.Button
            .addButtonEvent(
                this.oneDayRecordButtonV,
                "daysRecordTouchEventV",
                this, DayType.ONE_DAY
            );

        /*查看五日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.fiveDayRecordButtonH,
                "daysRecordTouchEventH",
                this,
                DayType.FIVE_DAY
            );
        fcc.global.Button
            .addButtonEvent(
                this.fiveDayRecordButtonV,
                "daysRecordTouchEventV",
                this,
                DayType.FIVE_DAY
            );

        /*查看十日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.tenDayRecordButtonH,
                "daysRecordTouchEventH",
                this,
                DayType.TEN_DAY
            );
        fcc.global.Button
            .addButtonEvent(
                this.tenDayRecordButtonV,
                "daysRecordTouchEventV",
                this, DayType.TEN_DAY
            );

        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.nextRecordButtonH,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.NEXT
            );
        fcc.global.Button
            .addButtonEvent(
                this.nextRecordButtonV,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.NEXT
            );

        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(
                this.previousRecordButtonH,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.PREVIOUS
            );
        fcc.global.Button
            .addButtonEvent(
                this.previousRecordButtonV,
                "nextAndLastButtonTouchEvent",
                this,
                PageChangeType.PREVIOUS
            );
        super.onLoad();
    }

    /**
     * 所有橫式天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventH(event, callBack: DayType);

    /**
     * 所有直式天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventV(event, callBack: DayType);

}
