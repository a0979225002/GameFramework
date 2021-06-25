import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import Language from "../../Framework/Global/Language";
import AGenericTemplate from "../../Framework/Template/AGenericTemplate";
import SocketSetting from "../../Socket/SocketSetting";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-11 下午 03:15
 * @Version 1.0
 */
@ccclass
export default class RecordPageLabel extends AGenericTemplate {

    @property(cc.Label)
    dateTextH: cc.Label = null;
    @property(cc.Label)
    dateTextV: cc.Label = null;
    @property(cc.Label)
    betNumberTextH: cc.Label = null;
    @property(cc.Label)
    betNumberTextV: cc.Label = null;
    @property(cc.Label)
    bettingTextH: cc.Label = null;
    @property(cc.Label)
    bettingTextV: cc.Label = null;
    @property(cc.Label)
    profitAndLossTextH: cc.Label = null;
    @property(cc.Label)
    profitAndLossTextV: cc.Label = null;
    @property(cc.Label)
    dateRangeTextH: cc.Label = null;
    @property(cc.Label)
    dateRangeTextV: cc.Label = null;
    @property(cc.Label)
    oneDayTextH: cc.Label = null;
    @property(cc.Label)
    oneDayTextV: cc.Label = null;
    @property(cc.Label)
    fiveDayTextH: cc.Label = null;
    @property(cc.Label)
    fiveDayTextV: cc.Label = null;
    @property(cc.Label)
    tenDayTextH: cc.Label = null;
    @property(cc.Label)
    tenDayTextV: cc.Label = null;
    @property(cc.Label)
    loadingTextH:cc.Label = null;
    @property(cc.Label)
    loadingTextV:cc.Label = null;

    protected onCreate() {
    }

    protected languageSetting() {

        //日期
        this.dateTextH.string = SocketSetting.t("S_9069");
        this.dateTextV.string = SocketSetting.t("S_9069");

        //注單單號
        this.betNumberTextH.string = SocketSetting.t("S_9070");
        this.betNumberTextV.string = SocketSetting.t("S_9070");

        //投注
        this.bettingTextH.string = SocketSetting.t("S_9071");
        this.bettingTextV.string = SocketSetting.t("S_9071");

        //盈虧
        this.profitAndLossTextH.string = SocketSetting.t("S_9081");
        this.profitAndLossTextV.string = SocketSetting.t("S_9081");

        //日期範圍
        this.dateRangeTextH.string = SocketSetting.t("S_9068");
        this.dateRangeTextV.string = SocketSetting.t("S_9068");

        //1日
        this.oneDayTextH.string = SocketSetting.t("B_1009");
        this.oneDayTextV.string = SocketSetting.t("B_1009");

        //5日
        this.fiveDayTextH.string = SocketSetting.t("B_1010");
        this.fiveDayTextV.string = SocketSetting.t("B_1010");

        //10日
        this.tenDayTextH.string = SocketSetting.t("B_1011");
        this.tenDayTextV.string = SocketSetting.t("B_1011");

        //載入中
        this.loadingTextH.string = SocketSetting.t("LOAD_000");
        this.loadingTextV.string = SocketSetting.t("LOAD_000");

        Language
            .setLabel(this.dateTextH)
            .setLabel(this.dateTextV)
            .setLabel(this.betNumberTextH)
            .setLabel(this.betNumberTextV)
            .setLabel(this.bettingTextH)
            .setLabel(this.bettingTextV)
            .setLabel(this.profitAndLossTextH)
            .setLabel(this.profitAndLossTextV)
            .setLabel(this.dateRangeTextH)
            .setLabel(this.dateRangeTextV)
            .setLabel(this.oneDayTextH)
            .setLabel(this.oneDayTextV)
            .setLabel(this.fiveDayTextH)
            .setLabel(this.fiveDayTextV)
            .setLabel(this.tenDayTextH)
            .setLabel(this.tenDayTextV)
            .setLabel(this.loadingTextH)
            .setLabel(this.loadingTextV);
    }


}