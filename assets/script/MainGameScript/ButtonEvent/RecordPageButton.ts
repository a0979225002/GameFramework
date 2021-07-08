import ccclass = cc._decorator.ccclass;
import property = cc._decorator.property;
import {Effect} from "../../Framework/Audio/AudioManager";
import ButtonMethod from "../../Framework/GlobalMethod/ButtonMethod";
import {ServerEventType} from "../../Framework/Listener/Enum/ServerEventType";
import EventManager from "../../Framework/Listener/EventManager";
import {SceneDirectionType} from "../../Framework/Scene/Enum/SceneStyle";
import SceneDirectionChangeNotification from "../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver";
import SceneManager from "../../Framework/Scene/SceneManager";
import {
    DayType,
    GameHistoryData,
    PageChange
} from "../../Framework/Template/ButtonEvent/RecordButton/ARecordButtonEvent";
import ARecordDoubleButtonTemplate from "../../Framework/Template/ButtonEvent/RecordButton/ARecordDoubleButtonTemplate";
import {socketJS} from "../../Socket/Socket";
import SocketSetting from "../../Socket/SocketSetting";
import MenuPageButton from "./MenuPageButton";

interface GetGameHistory {
    Day: number,         //要拿取的紀錄天數
    Page: number,        //當前在第幾頁
    Quantity: number,    //每頁要獲取的資料數量
}

interface GetHistoryDetail {
    GameNumber: number
}

/**
 * @Author 蕭立品
 * @Description 說明頁按鈕監聽事件
 * @Date 2021-05-10 上午 11:43
 * @Version 1.0
 */
@ccclass
export default class RecordPageButton extends ARecordDoubleButtonTemplate {

    @property(cc.Button)
    protected oneDayRecordButtonH: cc.Button = null;
    @property(cc.Button)
    protected oneDayRecordButtonV: cc.Button = null;
    @property(cc.Button)
    protected fiveDayRecordButtonH: cc.Button = null;
    @property(cc.Button)
    protected fiveDayRecordButtonV: cc.Button = null;
    @property(cc.Button)
    protected tenDayRecordButtonH: cc.Button = null;
    @property(cc.Button)
    protected tenDayRecordButtonV: cc.Button = null;
    @property(cc.Button)
    protected goBackButtonH: cc.Button = null;
    @property(cc.Button)
    protected goBackButtonV: cc.Button = null;
    @property(cc.Button)
    protected nextRecordButtonH: cc.Button = null;
    @property(cc.Button)
    protected nextRecordButtonV: cc.Button = null;
    @property(cc.Button)
    protected previousRecordButtonH: cc.Button = null;
    @property(cc.Button)
    protected previousRecordButtonV: cc.Button = null;
    //-------------------------自訂義------------------------------
    @property(cc.Node)
    protected recordNodeH: cc.Node = null;
    @property(cc.Node)
    protected recordNodeV: cc.Node = null;
    @property(cc.Node)
    protected recordListViewH: cc.Node = null;
    @property(cc.Node)
    protected recordListViewV: cc.Node = null;
    @property(cc.Label)
    protected nowNumberOfPagesH: cc.Label = null;
    @property(cc.Label)
    protected nowNumberOfPagesV: cc.Label = null;
    @property(cc.Node)
    protected progressNodeH: cc.Node = null;
    @property(cc.Node)
    protected progressNodeV: cc.Node = null;
    @property(cc.Label)
    protected progressTextH: cc.Label = null;
    @property(cc.Label)
    protected progressTextV: cc.Label = null;

    //日期存放
    private readonly dateToArray: Array<number> = [1, 5, 10];
    //Response server的紀錄物件
    private getGameHistoryH: GetGameHistory;
    //Response server的紀錄物件
    private getGameHistoryV: GetGameHistory;
    //Response server 祥單物件
    private getHistoryDetailH: GetHistoryDetail;
    //Response server 祥單物件
    private getHistoryDetailV: GetHistoryDetail;

    //紀錄頁使用顏色
    private readonly color: { RED: cc.Color; GRAY: cc.Color; WHITE: cc.Color; BLUE: cc.Color; DARK_YELLOW: cc.Color; DARK_RED: cc.Color; BLACK: cc.Color; YELLOW: cc.Color; DARK_GRAY: cc.Color; DARK_BLUE: cc.Color };
    public static instance: RecordPageButton;
    private timer: number;
    private delayTime: number;
    private gameHistoryData: GameHistoryData;
    private nowDay: DayType;

    constructor() {
        super();
        this.color = {
            DARK_BLUE: cc.color().fromHEX("#226565"),
            BLUE: cc.color().fromHEX("#30a2a2"),
            DARK_RED: cc.color().fromHEX("#652222"),
            RED: cc.color().fromHEX("#ab3a3a"),
            DARK_YELLOW: cc.color().fromHEX("#684e33"),
            YELLOW: cc.color().fromHEX("#cf9457"),
            BLACK: cc.color().fromHEX("#1E1E1E"),
            DARK_GRAY: cc.color().fromHEX("#313131"),
            GRAY: cc.color().fromHEX("#777777"),
            WHITE: cc.color().fromHEX("#FFFFFF"),
        };
    }

    protected onCreate() {
        RecordPageButton.instance = this;
        this.showDetailEventListener();                                                     //顯示祥單監聽器
        this.addListViewItemTouchEventListener();                                           //ListView 內的Item 按鈕監聽

        SceneDirectionChangeNotification
            .instance.subscribe(this.sceneDirectionObserverListener(), true);     //註冊直橫式監聽

        this.initialize();                                                                  //初始化
    }

    /**
     * 初始紀錄頁按鈕
     * @private
     */
    private initialize() {

        //初始更換日期紀錄按鈕外框,1日按鈕外框默認開啟,其他關閉
        this.oneDayRecordButtonH.node.children[0].active = true;
        this.oneDayRecordButtonV.node.children[0].active = true;
        this.fiveDayRecordButtonH.node.children[0].active = false;
        this.fiveDayRecordButtonV.node.children[0].active = false;
        this.tenDayRecordButtonH.node.children[0].active = false;
        this.tenDayRecordButtonV.node.children[0].active = false;
        this.nowDay = DayType.ONE_DAY;
        this.nowNumberOfPagesH.string = String(1);
        this.nowNumberOfPagesV.string = String(1);

        this.removeRecordUI();

        //初始要回傳server拿取紀錄json的資料
        this.getGameHistoryH = {
            Day: this.dateToArray[0],
            Page: 1,
            Quantity: 8,
        }

        this.getGameHistoryV = {
            Day: this.dateToArray[0],
            Page: 1,
            Quantity: 10,
        }

        this.getHistoryDetailH = {
            GameNumber: 0,
        }


        this.getHistoryDetailV = {
            GameNumber: 0,
        }

    }

    /**
     * 添加ListView 按鈕 監聽事件
     */
    private addListViewItemTouchEventListener() {

        let listViewItemsH = this.recordListViewH.children;
        let listViewItemsV = this.recordListViewV.children;

        let indexH = 0;
        for (let node of listViewItemsH) {
            let button = node.getComponent(cc.Button);
            ButtonMethod.addButtonEvent(button, "listViewItemTouchEventH", this, indexH);
            indexH++;
        }

        let indexV = 0;
        for (let node of listViewItemsV) {
            let button = node.getComponent(cc.Button);
            ButtonMethod.addButtonEvent(button, "listViewItemTouchEventV", this, indexV);
            indexV++;
        }
    }

    /**
     * 橫式 listViewItem 監聽用戶點及哪顆Item 回傳sever顯示祥單
     * @param event
     * @param callBack
     * @private
     */
    private listViewItemTouchEventH(event, callBack) {
        let historyKeys: string[];

        try {
            historyKeys = Object.keys(this.gameHistoryData.History);
            if (historyKeys.length < callBack) return;
            this.getHistoryDetailH.GameNumber = this.gameHistoryData.History[historyKeys[callBack]].GameNumber;
            socketJS.SFSToServer("GetHistoryDetail", this.getHistoryDetailH);
        } catch (e) {
            cc.log(e);
        }
    }

    /**
     * 直式 listViewItem 監聽用戶點及哪顆Item 回傳sever顯示祥單
     * @param event
     * @param callBack
     * @private
     */
    private listViewItemTouchEventV(event, callBack: number) {
        let historyKeys: string[];

        try {
            historyKeys = Object.keys(this.gameHistoryData.History);
            if (historyKeys.length < callBack) return;
            this.getHistoryDetailV.GameNumber = this.gameHistoryData.History[historyKeys[callBack]].GameNumber;
            socketJS.SFSToServer("GetHistoryDetail", this.getHistoryDetailV);
        } catch (e) {
            cc.log(e);
        }
    }

    /**
     * 顯示祥單頁面監聽器
     */
    showDetailEventListener() {

        EventManager.instance.serverEventListener(ServerEventType.GET_HISTORY_DETAIL_RESULT, (historyDetail) => {

            cc["plug"].Record.createPageDetail(historyDetail);

        }, false)
    }

    /**
     * 直橫向監聽器
     */
    private sceneDirectionObserverListener(): SceneDirectionChangeObserver {
        return new SceneDirectionChangeObserver((type) => {
            if (!this.recordNodeH.active && !this.recordNodeV.active) return;
            this.checkSceneDirection(type).then();
        }, this);
    }

    /**
     * 確認當前直橫式下,做相對應的開啟該樣式的節點
     * @param {SceneDirectionType} type
     * @private
     */
    private async checkSceneDirection(type: SceneDirectionType) {

        if (type == SceneDirectionType.LANDSCAPE) {

            this.recordNodeH.active = true;
            this.recordNodeV.active = false;
            this.getGameHistoryH.Page = 1;//如果有更換 螢幕方向,將把 頁數也初始
            this.nowNumberOfPagesH.string = String(1);
            await this.getRecordData(this.getGameHistoryH);

        } else if (type == SceneDirectionType.PORTRAIT) {

            this.recordNodeH.active = false;
            this.recordNodeV.active = true;
            this.getGameHistoryV.Page = 1;//如果有更換 螢幕方向,將把 頁數也初始
            this.nowNumberOfPagesV.string = String(1);
            await this.getRecordData(this.getGameHistoryV);

        } else {
            cc.log(`MainGameSetting sceneDirectionEvent() 有錯誤 : ${type}`);
        }
    }

    /**
     * 拿取Record資料,並更新UI
     * @param {GetGameHistory} getGameHistory
     * @returns {Promise<void>}
     */
    async getRecordData(getGameHistory: GetGameHistory) {
        socketJS.SFSToServer("GetGameHistory", getGameHistory);
        this.removeRecordUI();
        await this.runProgress();
        this.updateRecordUI(this.gameHistoryData);
    }

    /**
     * 監聽器由抽象類實現
     * server 回傳祥單接收器
     * @param gameHistoryData
     * @protected
     */
    protected gameHistoryResultEvent(gameHistoryData: GameHistoryData) {
        this.gameHistoryData = gameHistoryData;
    }

    public async showRecordPage() {
        //初始將當前用戶匹配的active 打開
        this.initialize();
        await this.checkSceneDirection(SceneManager.instance.sceneDirection);
    }

    /**
     * 更新詳單ListView
     * @param {GameHistoryData} gameHistoryData
     * @protected
     */
    protected updateRecordUI(gameHistoryData: GameHistoryData) {


        let listView: cc.Node;

        if (this.recordNodeH.active) {
            listView = this.recordListViewH;
        } else {
            listView = this.recordListViewV;
        }

        if (!this.checkServerState(gameHistoryData.State, listView.children[0])) return;
        let keys = Object.keys(gameHistoryData.History);

        let index = 0;
        for (let key of keys) {
            let historyData = gameHistoryData.History[key];
            listView.children[index].children[0].getComponent(cc.Label).string = historyData.Time;
            listView.children[index].children[1].getComponent(cc.Label).string = historyData.GameNumber;
            listView.children[index].children[2].getComponent(cc.Label).string = historyData.Bet;
            listView.children[index].children[3].getComponent(cc.Label).string = historyData.WinLose;
            index++;
        }

        if (this.recordNodeH.active) {
            if (index < 8) {
                this.updateNullDataState(listView.children[index], SocketSetting.t("S_9073"));
            }

        } else {
            if (index < 10) {
                this.updateNullDataState(listView.children[index], SocketSetting.t("S_9073"));
            }
        }

        this.updatePageChangeImg(keys.length)
    }

    /**
     * 確認當前回傳的json 狀態是否不等於0
     * 大於0狀態異常
     * @param {number} state
     * @param {cc.Node} listViewItem
     * @returns {boolean}
     * @private
     */
    private checkServerState(state: number, listViewItem: cc.Node): boolean {
        switch (state) {
            case 1 :
                this.updateNullDataState(listViewItem, SocketSetting.t("S_9073"));
                return false;
            case 2 :
                this.updateNullDataState(listViewItem, SocketSetting.t("S_9074"));
                return false;
            case 3 :
                this.updateNullDataState(listViewItem, SocketSetting.t("S_9075"));
                return false;
            default:
                return true;
        }
    }

    /**
     * 當無資料時,更新無資料訊息
     * @param {cc.Node} listViewItemNode
     * @param {string} text
     * @private
     */
    private updateNullDataState(listViewItemNode: cc.Node, text: string) {
        let colorBg: cc.Color;
        let colorText: cc.Color;
        switch (this.nowDay) {
            case DayType.ONE_DAY:
                colorBg = this.color.DARK_BLUE;
                colorText = this.color.BLUE;
                break;
            case DayType.FIVE_DAY:
                colorBg = this.color.DARK_YELLOW;
                colorText = this.color.YELLOW;
                break;
            case DayType.TEN_DAY:
                colorBg = this.color.DARK_RED;
                colorText = this.color.RED;
                break
            default:
                cc.log('拿不到當前用戶選擇的日期', this.nowDay)
        }
        listViewItemNode.color = colorBg;
        listViewItemNode.children[4].color = colorText;
        listViewItemNode.children[4].getComponent(cc.Label).string = text;

    }

    /**
     * 更新換頁按鈕顏色
     */
    updatePageChangeImg(dataAmount: number) {

        if (this.recordNodeH.active) {
            //確認能否更動下一頁按鈕樣式
            if (dataAmount >= 8) {
                this.nextRecordButtonH.node.color = this.color.WHITE;
            } else {
                this.nextRecordButtonH.node.color = this.color.GRAY;
            }

            //確認能否更動上一頁按鈕樣式
            if (this.getGameHistoryH.Page > 1) {
                this.previousRecordButtonH.node.color = this.color.WHITE;
            } else {
                this.previousRecordButtonH.node.color = this.color.GRAY;
            }

        } else {
            //確認能否更動下一頁按鈕樣式
            if (dataAmount >= 10) {
                this.nextRecordButtonV.node.color = this.color.WHITE;
            } else {
                this.nextRecordButtonV.node.color = this.color.GRAY;
            }

            //確認能否更動上一頁按鈕樣式
            if (this.getGameHistoryV.Page > 1) {
                this.previousRecordButtonV.node.color = this.color.WHITE;
            } else {
                this.previousRecordButtonV.node.color = this.color.GRAY;
            }
        }
    }

    /**
     * 清除詳單ListView內的欄位資訊
     * @protected
     */
    protected removeRecordUI() {
        let removeEnd: number;
        let listView: cc.Node;
        if (this.recordNodeH.active) {
            removeEnd = 8;
            listView = this.recordListViewH;
        } else {
            removeEnd = 10;
            listView = this.recordListViewV;
        }

        for (let i = 0; i < removeEnd; i++) {
            if (i % 2 == 0) {
                listView.children[i].color = this.color.BLACK;
            } else {
                listView.children[i].color = this.color.DARK_GRAY;
            }
            listView.children[i].children[0].getComponent(cc.Label).string = "";
            listView.children[i].children[1].getComponent(cc.Label).string = "";
            listView.children[i].children[2].getComponent(cc.Label).string = "";
            listView.children[i].children[3].getComponent(cc.Label).string = "";
            listView.children[i].children[4].getComponent(cc.Label).string = "";
        }
    }

    /**
     * 監聽已經由抽象類實作
     * 更換詳單的上一頁與下一頁按鈕事件
     * @param event
     * @param {PageChange} callBack
     * @protected
     */
    @Effect("BtnClick")
    protected nextAndLastButtonTouchEvent(event: any, callBack: PageChange) {

        let dataLength = Object.keys(this.gameHistoryData.History).length;

        if (callBack === PageChange.NEXT) {
            this.checkCanNextPageChange(dataLength).then();
            return;
        }

        if (callBack == PageChange.PREVIOUS) {
            this.checkCanPreviousPageChange(dataLength).then();
            return;
        }
    }

    /**
     * 確認能否上一頁
     * @param {number} dataAmount
     */
    async checkCanPreviousPageChange(dataAmount: number) {
        if (this.recordNodeH.active) {
            if (this.getGameHistoryH.Page > 1) {
                this.getGameHistoryH.Page = --this.getGameHistoryH.Page;
                socketJS.SFSToServer("GetGameHistory", this.getGameHistoryH);
                this.nowNumberOfPagesH.string = String(this.getGameHistoryH.Page);
                this.removeRecordUI();
                await this.runProgress();
                this.updateRecordUI(this.gameHistoryData);
            }
        } else {
            if (this.getGameHistoryV.Page > 1) {
                this.getGameHistoryV.Page = --this.getGameHistoryV.Page;
                socketJS.SFSToServer("GetGameHistory", this.getGameHistoryV);
                this.nowNumberOfPagesV.string = String(this.getGameHistoryV.Page);
                this.removeRecordUI();
                await this.runProgress();
                this.updateRecordUI(this.gameHistoryData);
            }
        }
    }

    /**
     * 確認能否下一頁
     * @param {number} dataAmount
     */
    async checkCanNextPageChange(dataAmount: number) {

        if (this.recordNodeH.active) {
            if (dataAmount == 8) {
                this.getGameHistoryH.Page = ++this.getGameHistoryH.Page;
                socketJS.SFSToServer("GetGameHistory", this.getGameHistoryH);
                this.nowNumberOfPagesH.string = String(this.getGameHistoryH.Page);
                this.removeRecordUI();
                await this.runProgress();
                this.updateRecordUI(this.gameHistoryData);
            }
        } else {
            if (dataAmount == 10) {
                this.getGameHistoryV.Page = ++this.getGameHistoryV.Page;
                socketJS.SFSToServer("GetGameHistory", this.getGameHistoryV);
                this.nowNumberOfPagesV.string = String(this.getGameHistoryV.Page);
                this.removeRecordUI();
                await this.runProgress();
                this.updateRecordUI(this.gameHistoryData);
            }
        }
    }

    /**
     * 監聽事件已由抽象類實作
     * 橫向按鈕中各日期選擇,對應該詳單需顯示的頁數
     * @param event
     * @param {DayType} callBack
     * @protected
     */
    @Effect("BtnClick")
    protected daysRecordTouchEventH(event, callBack: DayType) {

        this.updateDayButtonBorder(this.nowDay, false);
        this.nowDay = callBack; //保存當前搜尋日期的按鈕
        this.updateDayButtonBorder(this.nowDay, true);

        switch (callBack) {
            case DayType.ONE_DAY:
                this.checkDaysToServer(1, this.getGameHistoryH).then();
                break;
            case DayType.FIVE_DAY:
                this.checkDaysToServer(5, this.getGameHistoryH).then();
                break;
            case DayType.TEN_DAY:
                this.checkDaysToServer(10, this.getGameHistoryH).then();
                break;
        }
    }

    /**
     * 監聽事件已由抽象類實作
     * 直向按鈕中各日期選擇,對應該詳單需顯示的頁數
     * @param event
     * @param {DayType} callBack
     * @protected
     */
    @Effect("BtnClick")
    protected daysRecordTouchEventV(event, callBack: DayType) {

        this.updateDayButtonBorder(this.nowDay, false);
        this.nowDay = callBack; //保存當前搜尋日期的按鈕
        this.updateDayButtonBorder(this.nowDay, true);

        switch (callBack) {
            case DayType.ONE_DAY:
                this.checkDaysToServer(1, this.getGameHistoryV).then();
                break;
            case DayType.FIVE_DAY:
                this.checkDaysToServer(5, this.getGameHistoryV).then();
                break;
            case DayType.TEN_DAY:
                this.checkDaysToServer(10, this.getGameHistoryV).then();
                break;
        }
    }

    private updateDayButtonBorder(dayType: DayType, isShow: boolean) {

        let hOrV: boolean = this.recordNodeH.active;
        switch (dayType) {
            case DayType.ONE_DAY:
                hOrV ? this.oneDayRecordButtonH.node.children[0].active = isShow :
                    this.oneDayRecordButtonV.node.children[0].active = isShow
                return;
        }
        switch (dayType) {
            case DayType.FIVE_DAY:
                hOrV ? this.fiveDayRecordButtonH.node.children[0].active = isShow :
                    this.fiveDayRecordButtonV.node.children[0].active = isShow
                return;
        }
        switch (dayType) {
            case DayType.TEN_DAY:
                hOrV ? this.tenDayRecordButtonH.node.children[0].active = isShow :
                    this.tenDayRecordButtonV.node.children[0].active = isShow
                return;
        }
    }

    /**
     * 依照對應的日期,做相對應的回傳 server
     * @param {number} day
     * @param {GetGameHistory} gameHistory
     * @private
     */
    private async checkDaysToServer(day: number, gameHistory: GetGameHistory) {

        gameHistory.Day = day;
        gameHistory.Page = 1;

        if (this.recordNodeH.active) {
            this.nowNumberOfPagesH.string = String(1);
        } else {
            this.nowNumberOfPagesV.string = String(1);
        }

        socketJS.SFSToServer("GetGameHistory", gameHistory);
        this.removeRecordUI();
        await this.runProgress();
        this.updateRecordUI(this.gameHistoryData);

    }


    /**
     * 返回 setting 頁面
     * @protected
     */
    @Effect("BtnClick")
    protected goBackTouchEvent(event, sceneDirection: SceneDirectionType) {
        cc.log(sceneDirection);
        switch (sceneDirection) {
            case SceneDirectionType.LANDSCAPE:
                MenuPageButton.instance.showMenu();
                this.recordNodeH.active = false;
                break;
            case SceneDirectionType.PORTRAIT:
                MenuPageButton.instance.showMenu();
                this.recordNodeV.active = false;
                break;
        }

    }

    /**
     * 執行讀取條
     * @returns {Promise<void>}
     * @protected
     */
    protected runProgress(): Promise<void> {
        return new Promise<void>(resolve => {

            clearInterval(this.timer);

            if (this.recordNodeH.active) {
                this.progressNodeH.active = true;
                this.progressNodeV.active = false;
            } else {
                this.progressNodeH.active = true;
                this.progressNodeV.active = true;
            }

            this.delayTime = Math.floor(Math.random() * (8 - 4)) + 4;
            let progressText: string = "";
            let time: number = 0;
            this.timer = window.setInterval(() => {
                progressText += ".";
                if (progressText.length > 3) {
                    progressText = "";
                }
                this.makeProgress(progressText, time, resolve);
                time++;
            }, 200);
        });
    }

    /**
     * 讀取條事件,抽離UI操作
     * @param {string} progressText
     * @param {number} delayTime
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @private
     */
    private makeProgress(progressText: string, delayTime: number, resolve: (value: (PromiseLike<void> | void)) => void) {

        if (this.isResultOK && delayTime >= this.delayTime) {
            clearInterval(this.timer);

            if (this.recordNodeH.active) {
                this.progressNodeH.active = false;
            } else {
                this.progressNodeV.active = false;
            }
            resolve();
            return;
        }

        if (this.recordNodeH.active) {
            this.progressTextH.string = progressText;
        } else {
            this.progressTextV.string = progressText;
        }

    }

}