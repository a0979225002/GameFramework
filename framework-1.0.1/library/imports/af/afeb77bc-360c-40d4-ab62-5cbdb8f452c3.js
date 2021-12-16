"use strict";
cc._RF.push(module, 'afeb7e8NgxA1KtiXL249FLD', 'RecordPageButton');
// script/MainGameScript/ButtonEvent/RecordPageButton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var ButtonMethod_1 = require("../../Framework/GlobalMethod/ButtonMethod");
var ServerEventType_1 = require("../../Framework/Listener/Enum/ServerEventType");
var EventManager_1 = require("../../Framework/Listener/EventManager");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var ARecordButtonEvent_1 = require("../../Framework/Template/ButtonEvent/RecordButton/ARecordButtonEvent");
var ARecordDoubleButtonTemplate_1 = require("../../Framework/Template/ButtonEvent/RecordButton/ARecordDoubleButtonTemplate");
var Socket_1 = require("../../Socket/Socket");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var MenuPageButton_1 = require("./MenuPageButton");
/**
 * @Author 蕭立品
 * @Description 說明頁按鈕監聽事件
 * @Date 2021-05-10 上午 11:43
 * @Version 1.0
 */
var RecordPageButton = /** @class */ (function (_super) {
    __extends(RecordPageButton, _super);
    function RecordPageButton() {
        var _this = _super.call(this) || this;
        _this.oneDayRecordButtonH = null;
        _this.oneDayRecordButtonV = null;
        _this.fiveDayRecordButtonH = null;
        _this.fiveDayRecordButtonV = null;
        _this.tenDayRecordButtonH = null;
        _this.tenDayRecordButtonV = null;
        _this.goBackButtonH = null;
        _this.goBackButtonV = null;
        _this.nextRecordButtonH = null;
        _this.nextRecordButtonV = null;
        _this.previousRecordButtonH = null;
        _this.previousRecordButtonV = null;
        //-------------------------自訂義------------------------------
        _this.recordNodeH = null;
        _this.recordNodeV = null;
        _this.recordListViewH = null;
        _this.recordListViewV = null;
        _this.nowNumberOfPagesH = null;
        _this.nowNumberOfPagesV = null;
        _this.progressNodeH = null;
        _this.progressNodeV = null;
        _this.progressTextH = null;
        _this.progressTextV = null;
        //日期存放
        _this.dateToArray = [1, 5, 10];
        _this.color = {
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
        return _this;
    }
    RecordPageButton_1 = RecordPageButton;
    RecordPageButton.prototype.onCreate = function () {
        RecordPageButton_1.instance = this;
        this.showDetailEventListener(); //顯示祥單監聽器
        this.addListViewItemTouchEventListener(); //ListView 內的Item 按鈕監聽
        SceneDirectionChangeNotification_1.default
            .instance.subscribe(this.sceneDirectionObserverListener(), true); //註冊直橫式監聽
        this.initialize(); //初始化
    };
    /**
     * 初始紀錄頁按鈕
     * @private
     */
    RecordPageButton.prototype.initialize = function () {
        //初始更換日期紀錄按鈕外框,1日按鈕外框默認開啟,其他關閉
        this.oneDayRecordButtonH.node.children[0].active = true;
        this.oneDayRecordButtonV.node.children[0].active = true;
        this.fiveDayRecordButtonH.node.children[0].active = false;
        this.fiveDayRecordButtonV.node.children[0].active = false;
        this.tenDayRecordButtonH.node.children[0].active = false;
        this.tenDayRecordButtonV.node.children[0].active = false;
        this.nowDay = ARecordButtonEvent_1.DayType.ONE_DAY;
        this.nowNumberOfPagesH.string = String(1);
        this.nowNumberOfPagesV.string = String(1);
        this.removeRecordUI();
        //初始要回傳server拿取紀錄json的資料
        this.getGameHistoryH = {
            Day: this.dateToArray[0],
            Page: 1,
            Quantity: 8,
        };
        this.getGameHistoryV = {
            Day: this.dateToArray[0],
            Page: 1,
            Quantity: 10,
        };
        this.getHistoryDetailH = {
            GameNumber: 0,
        };
        this.getHistoryDetailV = {
            GameNumber: 0,
        };
    };
    /**
     * 添加ListView 按鈕 監聽事件
     */
    RecordPageButton.prototype.addListViewItemTouchEventListener = function () {
        var e_1, _a, e_2, _b;
        var listViewItemsH = this.recordListViewH.children;
        var listViewItemsV = this.recordListViewV.children;
        var indexH = 0;
        try {
            for (var listViewItemsH_1 = __values(listViewItemsH), listViewItemsH_1_1 = listViewItemsH_1.next(); !listViewItemsH_1_1.done; listViewItemsH_1_1 = listViewItemsH_1.next()) {
                var node = listViewItemsH_1_1.value;
                var button = node.getComponent(cc.Button);
                ButtonMethod_1.default.addButtonEvent(button, "listViewItemTouchEventH", this, indexH);
                indexH++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (listViewItemsH_1_1 && !listViewItemsH_1_1.done && (_a = listViewItemsH_1.return)) _a.call(listViewItemsH_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var indexV = 0;
        try {
            for (var listViewItemsV_1 = __values(listViewItemsV), listViewItemsV_1_1 = listViewItemsV_1.next(); !listViewItemsV_1_1.done; listViewItemsV_1_1 = listViewItemsV_1.next()) {
                var node = listViewItemsV_1_1.value;
                var button = node.getComponent(cc.Button);
                ButtonMethod_1.default.addButtonEvent(button, "listViewItemTouchEventV", this, indexV);
                indexV++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (listViewItemsV_1_1 && !listViewItemsV_1_1.done && (_b = listViewItemsV_1.return)) _b.call(listViewItemsV_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * 橫式 listViewItem 監聽用戶點及哪顆Item 回傳sever顯示祥單
     * @param event
     * @param callBack
     * @private
     */
    RecordPageButton.prototype.listViewItemTouchEventH = function (event, callBack) {
        var historyKeys;
        try {
            historyKeys = Object.keys(this.gameHistoryData.History);
            if (historyKeys.length < callBack)
                return;
            this.getHistoryDetailH.GameNumber = this.gameHistoryData.History[historyKeys[callBack]].GameNumber;
            Socket_1.socketJS.SFSToServer("GetHistoryDetail", this.getHistoryDetailH);
        }
        catch (e) {
            cc.log(e);
        }
    };
    /**
     * 直式 listViewItem 監聽用戶點及哪顆Item 回傳sever顯示祥單
     * @param event
     * @param callBack
     * @private
     */
    RecordPageButton.prototype.listViewItemTouchEventV = function (event, callBack) {
        var historyKeys;
        try {
            historyKeys = Object.keys(this.gameHistoryData.History);
            if (historyKeys.length < callBack)
                return;
            this.getHistoryDetailV.GameNumber = this.gameHistoryData.History[historyKeys[callBack]].GameNumber;
            Socket_1.socketJS.SFSToServer("GetHistoryDetail", this.getHistoryDetailV);
        }
        catch (e) {
            cc.log(e);
        }
    };
    /**
     * 顯示祥單頁面監聽器
     */
    RecordPageButton.prototype.showDetailEventListener = function () {
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.GET_HISTORY_DETAIL_RESULT, function (historyDetail) {
            cc["plug"].Record.createPageDetail(historyDetail);
        }, false);
    };
    /**
     * 直橫向監聽器
     */
    RecordPageButton.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (!_this.recordNodeH.active && !_this.recordNodeV.active)
                return;
            _this.checkSceneDirection(type).then();
        }, this);
    };
    /**
     * 確認當前直橫式下,做相對應的開啟該樣式的節點
     * @param {SceneDirectionType} type
     * @private
     */
    RecordPageButton.prototype.checkSceneDirection = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(type == SceneStyle_1.SceneDirectionType.LANDSCAPE)) return [3 /*break*/, 2];
                        this.recordNodeH.active = true;
                        this.recordNodeV.active = false;
                        this.getGameHistoryH.Page = 1; //如果有更換 螢幕方向,將把 頁數也初始
                        this.nowNumberOfPagesH.string = String(1);
                        return [4 /*yield*/, this.getRecordData(this.getGameHistoryH)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(type == SceneStyle_1.SceneDirectionType.PORTRAIT)) return [3 /*break*/, 4];
                        this.recordNodeH.active = false;
                        this.recordNodeV.active = true;
                        this.getGameHistoryV.Page = 1; //如果有更換 螢幕方向,將把 頁數也初始
                        this.nowNumberOfPagesV.string = String(1);
                        return [4 /*yield*/, this.getRecordData(this.getGameHistoryV)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        cc.log("MainGameSetting sceneDirectionEvent() \u6709\u932F\u8AA4 : " + type);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 拿取Record資料,並更新UI
     * @param {GetGameHistory} getGameHistory
     * @returns {Promise<void>}
     */
    RecordPageButton.prototype.getRecordData = function (getGameHistory) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        Socket_1.socketJS.SFSToServer("GetGameHistory", getGameHistory);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 1:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 監聽器由抽象類實現
     * server 回傳祥單接收器
     * @param gameHistoryData
     * @protected
     */
    RecordPageButton.prototype.gameHistoryResultEvent = function (gameHistoryData) {
        this.gameHistoryData = gameHistoryData;
    };
    RecordPageButton.prototype.showRecordPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //初始將當前用戶匹配的active 打開
                        this.initialize();
                        return [4 /*yield*/, this.checkSceneDirection(SceneManager_1.default.instance.sceneDirection)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 更新詳單ListView
     * @param {GameHistoryData} gameHistoryData
     * @protected
     */
    RecordPageButton.prototype.updateRecordUI = function (gameHistoryData) {
        var e_3, _a;
        var listView;
        if (this.recordNodeH.active) {
            listView = this.recordListViewH;
        }
        else {
            listView = this.recordListViewV;
        }
        if (!this.checkServerState(gameHistoryData.State, listView.children[0]))
            return;
        var keys = Object.keys(gameHistoryData.History);
        var index = 0;
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                var historyData = gameHistoryData.History[key];
                listView.children[index].children[0].getComponent(cc.Label).string = historyData.Time;
                listView.children[index].children[1].getComponent(cc.Label).string = historyData.GameNumber;
                listView.children[index].children[2].getComponent(cc.Label).string = historyData.Bet;
                listView.children[index].children[3].getComponent(cc.Label).string = historyData.WinLose;
                index++;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        if (this.recordNodeH.active) {
            if (index < 8) {
                this.updateNullDataState(listView.children[index], SocketSetting_1.default.t("S_9073"));
            }
        }
        else {
            if (index < 10) {
                this.updateNullDataState(listView.children[index], SocketSetting_1.default.t("S_9073"));
            }
        }
        this.updatePageChangeImg(keys.length);
    };
    /**
     * 確認當前回傳的json 狀態是否不等於0
     * 大於0狀態異常
     * @param {number} state
     * @param {cc.Node} listViewItem
     * @returns {boolean}
     * @private
     */
    RecordPageButton.prototype.checkServerState = function (state, listViewItem) {
        switch (state) {
            case 1:
                this.updateNullDataState(listViewItem, SocketSetting_1.default.t("S_9073"));
                return false;
            case 2:
                this.updateNullDataState(listViewItem, SocketSetting_1.default.t("S_9074"));
                return false;
            case 3:
                this.updateNullDataState(listViewItem, SocketSetting_1.default.t("S_9075"));
                return false;
            default:
                return true;
        }
    };
    /**
     * 當無資料時,更新無資料訊息
     * @param {cc.Node} listViewItemNode
     * @param {string} text
     * @private
     */
    RecordPageButton.prototype.updateNullDataState = function (listViewItemNode, text) {
        var colorBg;
        var colorText;
        switch (this.nowDay) {
            case ARecordButtonEvent_1.DayType.ONE_DAY:
                colorBg = this.color.DARK_BLUE;
                colorText = this.color.BLUE;
                break;
            case ARecordButtonEvent_1.DayType.FIVE_DAY:
                colorBg = this.color.DARK_YELLOW;
                colorText = this.color.YELLOW;
                break;
            case ARecordButtonEvent_1.DayType.TEN_DAY:
                colorBg = this.color.DARK_RED;
                colorText = this.color.RED;
                break;
            default:
                cc.log('拿不到當前用戶選擇的日期', this.nowDay);
        }
        listViewItemNode.color = colorBg;
        listViewItemNode.children[4].color = colorText;
        listViewItemNode.children[4].getComponent(cc.Label).string = text;
    };
    /**
     * 更新換頁按鈕顏色
     */
    RecordPageButton.prototype.updatePageChangeImg = function (dataAmount) {
        if (this.recordNodeH.active) {
            //確認能否更動下一頁按鈕樣式
            if (dataAmount >= 8) {
                this.nextRecordButtonH.node.color = this.color.WHITE;
            }
            else {
                this.nextRecordButtonH.node.color = this.color.GRAY;
            }
            //確認能否更動上一頁按鈕樣式
            if (this.getGameHistoryH.Page > 1) {
                this.previousRecordButtonH.node.color = this.color.WHITE;
            }
            else {
                this.previousRecordButtonH.node.color = this.color.GRAY;
            }
        }
        else {
            //確認能否更動下一頁按鈕樣式
            if (dataAmount >= 10) {
                this.nextRecordButtonV.node.color = this.color.WHITE;
            }
            else {
                this.nextRecordButtonV.node.color = this.color.GRAY;
            }
            //確認能否更動上一頁按鈕樣式
            if (this.getGameHistoryV.Page > 1) {
                this.previousRecordButtonV.node.color = this.color.WHITE;
            }
            else {
                this.previousRecordButtonV.node.color = this.color.GRAY;
            }
        }
    };
    /**
     * 清除詳單ListView內的欄位資訊
     * @protected
     */
    RecordPageButton.prototype.removeRecordUI = function () {
        var removeEnd;
        var listView;
        if (this.recordNodeH.active) {
            removeEnd = 8;
            listView = this.recordListViewH;
        }
        else {
            removeEnd = 10;
            listView = this.recordListViewV;
        }
        for (var i = 0; i < removeEnd; i++) {
            if (i % 2 == 0) {
                listView.children[i].color = this.color.BLACK;
            }
            else {
                listView.children[i].color = this.color.DARK_GRAY;
            }
            listView.children[i].children[0].getComponent(cc.Label).string = "";
            listView.children[i].children[1].getComponent(cc.Label).string = "";
            listView.children[i].children[2].getComponent(cc.Label).string = "";
            listView.children[i].children[3].getComponent(cc.Label).string = "";
            listView.children[i].children[4].getComponent(cc.Label).string = "";
        }
    };
    /**
     * 監聽已經由抽象類實作
     * 更換詳單的上一頁與下一頁按鈕事件
     * @param event
     * @param {PageChange} callBack
     * @protected
     */
    RecordPageButton.prototype.nextAndLastButtonTouchEvent = function (event, callBack) {
        var dataLength = Object.keys(this.gameHistoryData.History).length;
        if (callBack === ARecordButtonEvent_1.PageChange.NEXT) {
            this.checkCanNextPageChange(dataLength).then();
            return;
        }
        if (callBack == ARecordButtonEvent_1.PageChange.PREVIOUS) {
            this.checkCanPreviousPageChange(dataLength).then();
            return;
        }
    };
    /**
     * 確認能否上一頁
     * @param {number} dataAmount
     */
    RecordPageButton.prototype.checkCanPreviousPageChange = function (dataAmount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.recordNodeH.active) return [3 /*break*/, 3];
                        if (!(this.getGameHistoryH.Page > 1)) return [3 /*break*/, 2];
                        this.getGameHistoryH.Page = --this.getGameHistoryH.Page;
                        Socket_1.socketJS.SFSToServer("GetGameHistory", this.getGameHistoryH);
                        this.nowNumberOfPagesH.string = String(this.getGameHistoryH.Page);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 1:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        if (!(this.getGameHistoryV.Page > 1)) return [3 /*break*/, 5];
                        this.getGameHistoryV.Page = --this.getGameHistoryV.Page;
                        Socket_1.socketJS.SFSToServer("GetGameHistory", this.getGameHistoryV);
                        this.nowNumberOfPagesV.string = String(this.getGameHistoryV.Page);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 4:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 確認能否下一頁
     * @param {number} dataAmount
     */
    RecordPageButton.prototype.checkCanNextPageChange = function (dataAmount) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.recordNodeH.active) return [3 /*break*/, 3];
                        if (!(dataAmount == 8)) return [3 /*break*/, 2];
                        this.getGameHistoryH.Page = ++this.getGameHistoryH.Page;
                        Socket_1.socketJS.SFSToServer("GetGameHistory", this.getGameHistoryH);
                        this.nowNumberOfPagesH.string = String(this.getGameHistoryH.Page);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 1:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        _a.label = 2;
                    case 2: return [3 /*break*/, 5];
                    case 3:
                        if (!(dataAmount == 10)) return [3 /*break*/, 5];
                        this.getGameHistoryV.Page = ++this.getGameHistoryV.Page;
                        Socket_1.socketJS.SFSToServer("GetGameHistory", this.getGameHistoryV);
                        this.nowNumberOfPagesV.string = String(this.getGameHistoryV.Page);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 4:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 監聽事件已由抽象類實作
     * 橫向按鈕中各日期選擇,對應該詳單需顯示的頁數
     * @param event
     * @param {DayType} callBack
     * @protected
     */
    RecordPageButton.prototype.daysRecordTouchEventH = function (event, callBack) {
        this.updateDayButtonBorder(this.nowDay, false);
        this.nowDay = callBack; //保存當前搜尋日期的按鈕
        this.updateDayButtonBorder(this.nowDay, true);
        switch (callBack) {
            case ARecordButtonEvent_1.DayType.ONE_DAY:
                this.checkDaysToServer(1, this.getGameHistoryH).then();
                break;
            case ARecordButtonEvent_1.DayType.FIVE_DAY:
                this.checkDaysToServer(5, this.getGameHistoryH).then();
                break;
            case ARecordButtonEvent_1.DayType.TEN_DAY:
                this.checkDaysToServer(10, this.getGameHistoryH).then();
                break;
        }
    };
    /**
     * 監聽事件已由抽象類實作
     * 直向按鈕中各日期選擇,對應該詳單需顯示的頁數
     * @param event
     * @param {DayType} callBack
     * @protected
     */
    RecordPageButton.prototype.daysRecordTouchEventV = function (event, callBack) {
        this.updateDayButtonBorder(this.nowDay, false);
        this.nowDay = callBack; //保存當前搜尋日期的按鈕
        this.updateDayButtonBorder(this.nowDay, true);
        switch (callBack) {
            case ARecordButtonEvent_1.DayType.ONE_DAY:
                this.checkDaysToServer(1, this.getGameHistoryV).then();
                break;
            case ARecordButtonEvent_1.DayType.FIVE_DAY:
                this.checkDaysToServer(5, this.getGameHistoryV).then();
                break;
            case ARecordButtonEvent_1.DayType.TEN_DAY:
                this.checkDaysToServer(10, this.getGameHistoryV).then();
                break;
        }
    };
    RecordPageButton.prototype.updateDayButtonBorder = function (dayType, isShow) {
        var hOrV = this.recordNodeH.active;
        switch (dayType) {
            case ARecordButtonEvent_1.DayType.ONE_DAY:
                hOrV ? this.oneDayRecordButtonH.node.children[0].active = isShow :
                    this.oneDayRecordButtonV.node.children[0].active = isShow;
                return;
        }
        switch (dayType) {
            case ARecordButtonEvent_1.DayType.FIVE_DAY:
                hOrV ? this.fiveDayRecordButtonH.node.children[0].active = isShow :
                    this.fiveDayRecordButtonV.node.children[0].active = isShow;
                return;
        }
        switch (dayType) {
            case ARecordButtonEvent_1.DayType.TEN_DAY:
                hOrV ? this.tenDayRecordButtonH.node.children[0].active = isShow :
                    this.tenDayRecordButtonV.node.children[0].active = isShow;
                return;
        }
    };
    /**
     * 依照對應的日期,做相對應的回傳 server
     * @param {number} day
     * @param {GetGameHistory} gameHistory
     * @private
     */
    RecordPageButton.prototype.checkDaysToServer = function (day, gameHistory) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gameHistory.Day = day;
                        gameHistory.Page = 1;
                        if (this.recordNodeH.active) {
                            this.nowNumberOfPagesH.string = String(1);
                        }
                        else {
                            this.nowNumberOfPagesV.string = String(1);
                        }
                        Socket_1.socketJS.SFSToServer("GetGameHistory", gameHistory);
                        this.removeRecordUI();
                        return [4 /*yield*/, this.runProgress()];
                    case 1:
                        _a.sent();
                        this.updateRecordUI(this.gameHistoryData);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 返回 setting 頁面
     * @protected
     */
    RecordPageButton.prototype.goBackTouchEvent = function (event, sceneDirection) {
        cc.log(sceneDirection);
        switch (sceneDirection) {
            case SceneStyle_1.SceneDirectionType.LANDSCAPE:
                MenuPageButton_1.default.instance.showMenu();
                this.recordNodeH.active = false;
                break;
            case SceneStyle_1.SceneDirectionType.PORTRAIT:
                MenuPageButton_1.default.instance.showMenu();
                this.recordNodeV.active = false;
                break;
        }
    };
    /**
     * 執行讀取條
     * @returns {Promise<void>}
     * @protected
     */
    RecordPageButton.prototype.runProgress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            clearInterval(_this.timer);
            if (_this.recordNodeH.active) {
                _this.progressNodeH.active = true;
                _this.progressNodeV.active = false;
            }
            else {
                _this.progressNodeH.active = true;
                _this.progressNodeV.active = true;
            }
            _this.delayTime = Math.floor(Math.random() * (8 - 4)) + 4;
            var progressText = "";
            var time = 0;
            _this.timer = window.setInterval(function () {
                progressText += ".";
                if (progressText.length > 3) {
                    progressText = "";
                }
                _this.makeProgress(progressText, time, resolve);
                time++;
            }, 200);
        });
    };
    /**
     * 讀取條事件,抽離UI操作
     * @param {string} progressText
     * @param {number} delayTime
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @private
     */
    RecordPageButton.prototype.makeProgress = function (progressText, delayTime, resolve) {
        if (this.isResultOK && delayTime >= this.delayTime) {
            clearInterval(this.timer);
            if (this.recordNodeH.active) {
                this.progressNodeH.active = false;
            }
            else {
                this.progressNodeV.active = false;
            }
            resolve();
            return;
        }
        if (this.recordNodeH.active) {
            this.progressTextH.string = progressText;
        }
        else {
            this.progressTextV.string = progressText;
        }
    };
    var RecordPageButton_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_a = typeof cc !== "undefined" && cc.Button) === "function" ? _a : Object)
    ], RecordPageButton.prototype, "oneDayRecordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Button) === "function" ? _b : Object)
    ], RecordPageButton.prototype, "oneDayRecordButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Button) === "function" ? _c : Object)
    ], RecordPageButton.prototype, "fiveDayRecordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Button) === "function" ? _d : Object)
    ], RecordPageButton.prototype, "fiveDayRecordButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Button) === "function" ? _e : Object)
    ], RecordPageButton.prototype, "tenDayRecordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Button) === "function" ? _f : Object)
    ], RecordPageButton.prototype, "tenDayRecordButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Button) === "function" ? _g : Object)
    ], RecordPageButton.prototype, "goBackButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Button) === "function" ? _h : Object)
    ], RecordPageButton.prototype, "goBackButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Button) === "function" ? _j : Object)
    ], RecordPageButton.prototype, "nextRecordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Button) === "function" ? _k : Object)
    ], RecordPageButton.prototype, "nextRecordButtonV", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Button) === "function" ? _l : Object)
    ], RecordPageButton.prototype, "previousRecordButtonH", void 0);
    __decorate([
        property(cc.Button),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Button) === "function" ? _m : Object)
    ], RecordPageButton.prototype, "previousRecordButtonV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Node) === "function" ? _o : Object)
    ], RecordPageButton.prototype, "recordNodeH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_p = typeof cc !== "undefined" && cc.Node) === "function" ? _p : Object)
    ], RecordPageButton.prototype, "recordNodeV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_q = typeof cc !== "undefined" && cc.Node) === "function" ? _q : Object)
    ], RecordPageButton.prototype, "recordListViewH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_r = typeof cc !== "undefined" && cc.Node) === "function" ? _r : Object)
    ], RecordPageButton.prototype, "recordListViewV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_s = typeof cc !== "undefined" && cc.Label) === "function" ? _s : Object)
    ], RecordPageButton.prototype, "nowNumberOfPagesH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_t = typeof cc !== "undefined" && cc.Label) === "function" ? _t : Object)
    ], RecordPageButton.prototype, "nowNumberOfPagesV", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_u = typeof cc !== "undefined" && cc.Node) === "function" ? _u : Object)
    ], RecordPageButton.prototype, "progressNodeH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_v = typeof cc !== "undefined" && cc.Node) === "function" ? _v : Object)
    ], RecordPageButton.prototype, "progressNodeV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_w = typeof cc !== "undefined" && cc.Label) === "function" ? _w : Object)
    ], RecordPageButton.prototype, "progressTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_x = typeof cc !== "undefined" && cc.Label) === "function" ? _x : Object)
    ], RecordPageButton.prototype, "progressTextV", void 0);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, typeof (_y = typeof ARecordButtonEvent_1.PageChange !== "undefined" && ARecordButtonEvent_1.PageChange) === "function" ? _y : Object]),
        __metadata("design:returntype", void 0)
    ], RecordPageButton.prototype, "nextAndLastButtonTouchEvent", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, typeof (_z = typeof ARecordButtonEvent_1.DayType !== "undefined" && ARecordButtonEvent_1.DayType) === "function" ? _z : Object]),
        __metadata("design:returntype", void 0)
    ], RecordPageButton.prototype, "daysRecordTouchEventH", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, typeof (_0 = typeof ARecordButtonEvent_1.DayType !== "undefined" && ARecordButtonEvent_1.DayType) === "function" ? _0 : Object]),
        __metadata("design:returntype", void 0)
    ], RecordPageButton.prototype, "daysRecordTouchEventV", null);
    __decorate([
        AudioManager_1.Effect("BtnClick"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, typeof (_1 = typeof SceneStyle_1.SceneDirectionType !== "undefined" && SceneStyle_1.SceneDirectionType) === "function" ? _1 : Object]),
        __metadata("design:returntype", void 0)
    ], RecordPageButton.prototype, "goBackTouchEvent", null);
    RecordPageButton = RecordPageButton_1 = __decorate([
        ccclass,
        __metadata("design:paramtypes", [])
    ], RecordPageButton);
    return RecordPageButton;
}(ARecordDoubleButtonTemplate_1.default));
exports.default = RecordPageButton;

cc._RF.pop();