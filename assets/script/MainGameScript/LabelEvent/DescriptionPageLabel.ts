import LanguageMethod from "../../Framework/GlobalMethod/LanguageMethod";
import LoadResManager from '../../Framework/LoadResources/LoadResManager'
import AGenericTemplate from '../../Framework/Template/AGenericTemplate'
import {WebResponseManager} from '../../Framework/WebResponse/WebResponseManager'
import SocketSetting from '../../Socket/SocketSetting'

const {ccclass, property} = cc._decorator;

@ccclass
export default class DescriptionPageLabel extends AGenericTemplate {

    @property(cc.Sprite)
    private page1FreeIconH: cc.Sprite = null;
    @property(cc.Sprite)
    private page1FreeIconV: cc.Sprite = null;
    @property(cc.Sprite)
    private page1WildIconH: cc.Sprite = null;
    @property(cc.Sprite)
    private page1WildIconV: cc.Sprite = null;
    @property(cc.Label)
    private page1FreeTextH: cc.Label = null;
    @property(cc.Label)
    private page1FreeTextV: cc.Label = null;
    @property(cc.Label)
    private page1WildTextH: cc.Label = null;
    @property(cc.Label)
    private page1WildTextV: cc.Label = null;
    @property(cc.Sprite)
    private page2GridIconH: cc.Sprite[] = [];
    @property(cc.Sprite)
    private page2GridIconV: cc.Sprite[] = [];
    @property(cc.Node)
    private page2GridIconPointH: cc.Node[] = [];
    @property(cc.Node)
    private page2GridIconPointV: cc.Node[] = [];
    @property(cc.Label)
    private page3LineTextV: cc.Label = null;
    @property(cc.Label)
    private page3WinDescriptionTextH: cc.Label = null;
    @property(cc.Label)
    private page3WinDescriptionTextV: cc.Label = null;
    @property(cc.Label)
    private page3WinTextH: cc.Label = null;
    @property(cc.Label)
    private page3WinTextV: cc.Label = null;
    @property(cc.Label)
    private page3NotWinTextH: cc.Label = null;
    @property(cc.Label)
    private page3NotWinTextV: cc.Label = null;
    @property(cc.Label)
    private page3WinningCalculationH: cc.Label = null;
    @property(cc.Label)
    private page3WinningCalculationV: cc.Label = null;
    @property(cc.Sprite)
    private page3WinningIconH: cc.Sprite = null;
    @property(cc.Sprite)
    private page3WinningIconV: cc.Sprite = null;
    @property(cc.Label)
    private page3WinPointH: cc.Label[] = [];
    @property(cc.Label)
    private page3WinPointV: cc.Label[] = [];
    @property(cc.Label)
    private page3ExampleTextH: cc.Label = null;
    @property(cc.Label)
    private page3WinOddsTextV: cc.Label = null;
    @property(cc.Label)
    private page3ExampleTextV: cc.Label = null;
    @property(cc.Label)
    private page3ExampleText2V: cc.Label = null;
    @property(cc.Label)
    private page3ExampleAnswerH: cc.Label = null;
    @property(cc.Label)
    private page3ExampleAnswerV: cc.Label = null;

    private gridImg: Map<string, cc.SpriteFrame>;
    private payTable: Map<number, Map<number, number>>;

    protected onCreate() {
        this.gridImg = LoadResManager.instance.imgRes.get("gridImg");
        this.payTable = WebResponseManager.instance.tableInfo.PayTable;

        this.initializePage1();
        this.initializePage2();
        this.initializePage3();
    }

    private initializePage1() {

        this.page1FreeIconH.spriteFrame = this.gridImg.get("10");
        this.page1FreeIconV.spriteFrame = this.gridImg.get("10");
        this.page1WildIconH.spriteFrame = this.gridImg.get("9");
        this.page1WildIconV.spriteFrame = this.gridImg.get("9");

    }

    private initializePage2() {
        this.updatePage2GridImg();
        this.updatePage2GridPoint();
    }

    private initializePage3() {
        this.updatePage3Img();
        this.updatePage3Point();
    }

    private updatePage2GridImg() {

        let gridIndex = 0;
        let start = this.page2GridIconH.length - 1;
        for (let i = start; i >= 0; i--) {
            this.page2GridIconH[gridIndex].spriteFrame = this.gridImg.get(String(i));
            this.page2GridIconV[gridIndex].spriteFrame = this.gridImg.get(String(i));
            gridIndex++;
        }
    }

    private updatePage2GridPoint() {

        let start = this.page2GridIconPointH.length - 1;
        let gridIndex = 0;
        for (let i = start; i >= 0; i--) {
            let points: Map<number, number> = this.payTable[i];
            let pointsToValues = Object.values(points);
            let nodeIndex = 2;
            for (let point of pointsToValues) {

                this.page2GridIconPointH[gridIndex]
                    .children[nodeIndex].getComponent(cc.Label).string = point;

                this.page2GridIconPointV[gridIndex]
                    .children[nodeIndex].getComponent(cc.Label).string = point;
                nodeIndex--;
            }
            gridIndex++;
        }
    }

    private updatePage3Img() {
        this.page3WinningIconH.spriteFrame = this.gridImg.get("0");
        this.page3WinningIconV.spriteFrame = this.gridImg.get("0");
    }

    private updatePage3Point() {

        let points = this.payTable[0];

        let pointIndex = 3;
        let start = 3;
        let end = start + 3;
        for (start; start < end; start++) {
            pointIndex--;
            this.page3WinPointH[pointIndex].string = points[start];
            this.page3WinPointV[pointIndex].string = points[start];
        }
    }

    protected languageSetting() {
        this.page1Language();
        this.page3Language();
    }

    private page1Language() {

        //免費解說
        this.page1FreeTextH.string = SocketSetting.t("4_101");
        this.page1FreeTextV.string = SocketSetting.t("4_101");
        //百搭解說
        this.page1WildTextH.string = SocketSetting.t("4_102");
        this.page1WildTextV.string = SocketSetting.t("4_102");

        LanguageMethod.instance
            .updateLabelStyle(this.page1FreeTextH)
            .updateLabelStyle(this.page1FreeTextV)
            .updateLabelStyle(this.page1WildTextH)
            .updateLabelStyle(this.page1WildTextV);
    }

    private page3Language() {
        //路
        this.page3LineTextV.string = SocketSetting.t("4_008");

        //中獎路金額按照左至右派發
        this.page3WinDescriptionTextH.string = SocketSetting.t("243_002");
        this.page3WinDescriptionTextV.string = SocketSetting.t("243_002");

        //得獎
        this.page3WinTextH.string = SocketSetting.t("243_003");
        this.page3WinTextV.string = SocketSetting.t("243_003");

        //未得獎
        this.page3NotWinTextH.string = SocketSetting.t("243_004");
        this.page3NotWinTextV.string = SocketSetting.t("243_004");

        //中獎金額計算方式
        this.page3WinningCalculationH.string = SocketSetting.t("243_005");
        this.page3WinningCalculationV.string = SocketSetting.t("243_005");

        //本例中的贏獎
        this.page3ExampleTextH.string = SocketSetting.t("243_008");
        this.page3ExampleTextV.string = SocketSetting.t("243_008");

        //參考以上例子,本例中的贏獎:
        this.page3ExampleText2V.string = SocketSetting.t("243_010");

        //例子計算
        let exampleAnswer: number = 3 * 2 * this.payTable[0][3];
        this.page3ExampleAnswerH.string = `1 x 3 x 2 x ${this.payTable[0][3]} = ${exampleAnswer}`;
        this.page3ExampleAnswerV.string = `1 x 3 x 2 x ${this.payTable[0][3]} = ${exampleAnswer}`;

        //獲勝符號的賠付
        this.page3WinOddsTextV.string = SocketSetting.t("243_007");

        LanguageMethod.instance
            .updateLabelStyle(this.page3LineTextV)
            .updateLabelStyle(this.page3WinDescriptionTextH)
            .updateLabelStyle(this.page3WinDescriptionTextV)
            .updateLabelStyle(this.page3WinTextH)
            .updateLabelStyle(this.page3WinTextV)
            .updateLabelStyle(this.page3NotWinTextH)
            .updateLabelStyle(this.page3NotWinTextV)
            .updateLabelStyle(this.page3WinningCalculationH)
            .updateLabelStyle(this.page3WinningCalculationV)
            .updateLabelStyle(this.page3ExampleTextH)
            .updateLabelStyle(this.page3ExampleTextV)
            .updateLabelStyle(this.page3ExampleText2V)
            .updateLabelStyle(this.page3ExampleAnswerH)
            .updateLabelStyle(this.page3ExampleAnswerV)
            .updateLabelStyle(this.page3WinOddsTextV);

    }

}