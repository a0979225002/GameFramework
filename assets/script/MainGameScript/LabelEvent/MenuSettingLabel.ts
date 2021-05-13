import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

@ccclass
export default class MenuSettingLabel extends AGenericTemplate {

    @property(cc.Label)
    private musicTextH: cc.Label = null;
    @property(cc.Label)
    private musicTextV: cc.Label = null;
    @property(cc.Label)
    private effectTextH: cc.Label = null;
    @property(cc.Label)
    private effectTextV: cc.Label = null;
    @property(cc.Label)
    private betSettingTextH: cc.Label = null;
    @property(cc.Label)
    private betSettingTextV: cc.Label = null;
    @property(cc.Label)
    private lineTextH: cc.Label = null;
    @property(cc.Label)
    private lineTextV: cc.Label = null;
    @property(cc.Label)
    private betMoneyTextH: cc.Label = null;
    @property(cc.Label)
    private betMoneyTextV: cc.Label = null;
    @property(cc.Label)
    private autoFreeTextH: cc.Label = null;
    @property(cc.Label)
    private autoFreeTextV: cc.Label = null;
    @property(cc.Label)
    private autoTextH: cc.Label = null;
    @property(cc.Label)
    private autoTextV: cc.Label = null;

    protected onCreate() {

    }

    protected languageSetting() {

        //音樂
        this.musicTextH.string = SocketSetting.t("S_3004");
        this.musicTextV.string = SocketSetting.t("S_3004");

        //音效
        this.effectTextH.string = SocketSetting.t("S_3005");
        this.effectTextV.string = SocketSetting.t("S_3005");

        //押注設定
        this.betSettingTextH.string = SocketSetting.t("S_2001");
        this.betSettingTextV.string = SocketSetting.t("S_2001");

        //基礎投注
        this.lineTextH.string = SocketSetting.t("S_2003");
        this.lineTextV.string = SocketSetting.t("S_2003");

        //押注金額
        this.betMoneyTextH.string = SocketSetting.t("S_2002");
        this.betMoneyTextV.string = SocketSetting.t("S_2002");

        //免費旋轉
        this.autoFreeTextH.string = SocketSetting.t("S_9079");
        this.autoFreeTextV.string = SocketSetting.t("S_9079");

        //普通旋轉
        this.autoTextH.string = SocketSetting.t("S_9078");
        this.autoTextV.string = SocketSetting.t("S_9078");

        LanguageMethod.instance
            .updateLabelStyle(this.musicTextH)
            .updateLabelStyle(this.musicTextV)
            .updateLabelStyle(this.effectTextH)
            .updateLabelStyle(this.effectTextV)
            .updateLabelStyle(this.betSettingTextH)
            .updateLabelStyle(this.betSettingTextV)
            .updateLabelStyle(this.lineTextH)
            .updateLabelStyle(this.lineTextV)
            .updateLabelStyle(this.betMoneyTextH)
            .updateLabelStyle(this.betMoneyTextV)
            .updateLabelStyle(this.autoFreeTextH)
            .updateLabelStyle(this.autoFreeTextV)
            .updateLabelStyle(this.autoTextH)
            .updateLabelStyle(this.autoTextV);
    }

}