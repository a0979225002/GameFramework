import ButtonMethod from "../../GlobalMethod/ButtonMethod";
import {SceneDirectionType} from "../../Scene/Enum/SceneStyle";
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
        ButtonMethod
            .addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this, SceneDirectionType.LANDSCAPE);
        ButtonMethod
            .addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this, SceneDirectionType.PORTRAIT);

        ButtonMethod
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEvent", this, DayType.ONE_DAY);
        ButtonMethod
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEvent", this, DayType.ONE_DAY);

        //獲取一日內紀錄按鈕事件綁定
        ButtonMethod
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY);
        ButtonMethod
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY);

        //獲取五日內紀錄按鈕事件綁定
        ButtonMethod
            .addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
        ButtonMethod
            .addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY);

        //獲取十日內紀錄按鈕事件綁定
        ButtonMethod
            .addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY);
        ButtonMethod
            .addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY);

        //前往下一頁紀錄按鈕事件綁定
        ButtonMethod
            .addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChange.NEXT);
        ButtonMethod
            .addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChange.NEXT);

        //前往下一頁紀錄按鈕事件綁定
        ButtonMethod
            .addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChange.PREVIOUS);
        ButtonMethod
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