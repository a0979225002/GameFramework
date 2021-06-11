import Button from "../../../Global/Button";
import {SceneDirectionType} from "../../../Scene/Enum/SceneStyle";
import ARecordButtonEvent, {DayType, PageChange} from "./ARecordButtonEvent";

export default abstract class ARecordDoubleButtonTemplate extends ARecordButtonEvent {

    protected abstract goBackButtonH: cc.Button;
    protected abstract goBackButtonV: cc.Button;
    protected abstract oneDayRecordButtonH: cc.Button;
    protected abstract oneDayRecordButtonV: cc.Button;
    protected abstract fiveDayRecordButtonH: cc.Button;
    protected abstract fiveDayRecordButtonV: cc.Button;
    protected abstract tenDayRecordButtonH: cc.Button;
    protected abstract tenDayRecordButtonV: cc.Button;
    protected abstract nextRecordButtonH: cc.Button;
    protected abstract nextRecordButtonV: cc.Button;
    protected abstract previousRecordButtonH: cc.Button;
    protected abstract previousRecordButtonV: cc.Button;

    protected onLoad() {

        //反回上一頁按鈕事件綁定
        Button
            .addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this, SceneDirectionType.LANDSCAPE);
        Button
            .addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this, SceneDirectionType.PORTRAIT);

        Button
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEvent", this, DayType.ONE_DAY);
        Button
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEvent", this, DayType.ONE_DAY);

        //獲取一日內紀錄按鈕事件綁定
        Button
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY);
        Button
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY);

        //獲取五日內紀錄按鈕事件綁定
        Button
            .addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
        Button
            .addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY);

        //獲取十日內紀錄按鈕事件綁定
        Button
            .addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY);
        Button
            .addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY);

        //前往下一頁紀錄按鈕事件綁定
        Button
            .addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChange.NEXT);
        Button
            .addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChange.NEXT);

        //前往下一頁紀錄按鈕事件綁定
        Button
            .addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChange.PREVIOUS);
        Button
            .addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChange.PREVIOUS);

        this.isResultOK = false;
        this.gameHistoryResultEventListener();
        this.onCreate();
    }

    /**
     * 所有天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventH(event, callBack: DayType);

    /**
     * 所有天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventV(event, callBack: DayType);

}