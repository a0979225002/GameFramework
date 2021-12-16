
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/ButtonEvent/RecordPageButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQnV0dG9uRXZlbnRcXFJlY29yZFBhZ2VCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFPLE9BQU8sR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUN2QyxJQUFPLFFBQVEsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztBQUN6QyxtRUFBMEQ7QUFDMUQsMEVBQXFFO0FBQ3JFLGlGQUE4RTtBQUM5RSxzRUFBaUU7QUFDakUsb0VBQXlFO0FBQ3pFLDZIQUF3SDtBQUN4SCxpSEFBNEc7QUFDNUcsbUVBQThEO0FBQzlELDJHQUk4RTtBQUM5RSw2SEFBd0g7QUFDeEgsOENBQTZDO0FBQzdDLDREQUF1RDtBQUN2RCxtREFBOEM7QUFZOUM7Ozs7O0dBS0c7QUFFSDtJQUE4QyxvQ0FBMkI7SUFtRXJFO1FBQUEsWUFDSSxpQkFBTyxTQWFWO1FBOUVTLHlCQUFtQixHQUFjLElBQUksQ0FBQztRQUV0Qyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWMsSUFBSSxDQUFDO1FBRXZDLDBCQUFvQixHQUFjLElBQUksQ0FBQztRQUV2Qyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFFdEMseUJBQW1CLEdBQWMsSUFBSSxDQUFDO1FBRXRDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLHVCQUFpQixHQUFjLElBQUksQ0FBQztRQUVwQyx1QkFBaUIsR0FBYyxJQUFJLENBQUM7UUFFcEMsMkJBQXFCLEdBQWMsSUFBSSxDQUFDO1FBRXhDLDJCQUFxQixHQUFjLElBQUksQ0FBQztRQUNsRCw0REFBNEQ7UUFFbEQsaUJBQVcsR0FBWSxJQUFJ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QUMsSUFBSSxDQUFDO3NEQUNPLEVBQUUsb0JBQUYsRUFBRSxDQUFDLElBQUk7MkRBQVE7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDTSxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzJEQUFRO0lBRXpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ00sRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzsyREFBUTtJQStZekM7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7cUVBQ3lDLCtCQUFVLG9CQUFWLCtCQUFVOzt1RUFhckU7SUErREQ7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7cUVBQzhCLDRCQUFPLG9CQUFQLDRCQUFPOztpRUFpQnZEO0lBVUQ7UUFEQyxxQkFBTSxDQUFDLFVBQVUsQ0FBQzs7cUVBQzhCLDRCQUFPLG9CQUFQLDRCQUFPOztpRUFpQnZEO0lBdUREO1FBREMscUJBQU0sQ0FBQyxVQUFVLENBQUM7O3FFQUMrQiwrQkFBa0Isb0JBQWxCLCtCQUFrQjs7NERBYW5FO0lBem5CZ0IsZ0JBQWdCO1FBRHBDLE9BQU87O09BQ2EsZ0JBQWdCLENBcXJCcEM7SUFBRCx1QkFBQztDQXJyQkQsQUFxckJDLENBcnJCNkMscUNBQTJCLEdBcXJCeEU7a0JBcnJCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XHJcbmltcG9ydCBwcm9wZXJ0eSA9IGNjLl9kZWNvcmF0b3IucHJvcGVydHk7XHJcbmltcG9ydCB7RWZmZWN0fSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL0F1ZGlvL0F1ZGlvTWFuYWdlclwiO1xyXG5pbXBvcnQgQnV0dG9uTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZFwiO1xyXG5pbXBvcnQge1NlcnZlckV2ZW50VHlwZX0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9MaXN0ZW5lci9FbnVtL1NlcnZlckV2ZW50VHlwZVwiO1xyXG5pbXBvcnQgRXZlbnRNYW5hZ2VyIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvTGlzdGVuZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7U2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjZW5lL0VudW0vU2NlbmVTdHlsZVwiO1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU5vdGlmaWNhdGlvbi9TY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvU2NlbmUvU2NlbmVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7XHJcbiAgICBEYXlUeXBlLFxyXG4gICAgR2FtZUhpc3RvcnlEYXRhLFxyXG4gICAgUGFnZUNoYW5nZVxyXG59IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvQnV0dG9uRXZlbnQvUmVjb3JkQnV0dG9uL0FSZWNvcmRCdXR0b25FdmVudFwiO1xyXG5pbXBvcnQgQVJlY29yZERvdWJsZUJ1dHRvblRlbXBsYXRlIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvVGVtcGxhdGUvQnV0dG9uRXZlbnQvUmVjb3JkQnV0dG9uL0FSZWNvcmREb3VibGVCdXR0b25UZW1wbGF0ZVwiO1xyXG5pbXBvcnQge3NvY2tldEpTfSBmcm9tIFwiLi4vLi4vU29ja2V0L1NvY2tldFwiO1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tIFwiLi4vLi4vU29ja2V0L1NvY2tldFNldHRpbmdcIjtcclxuaW1wb3J0IE1lbnVQYWdlQnV0dG9uIGZyb20gXCIuL01lbnVQYWdlQnV0dG9uXCI7XHJcblxyXG5pbnRlcmZhY2UgR2V0R2FtZUhpc3Rvcnkge1xyXG4gICAgRGF5OiBudW1iZXIsICAgICAgICAgLy/opoHmi7/lj5bnmoTntIDpjITlpKnmlbhcclxuICAgIFBhZ2U6IG51bWJlciwgICAgICAgIC8v55W25YmN5Zyo56ys5bm+6aCBXHJcbiAgICBRdWFudGl0eTogbnVtYmVyLCAgICAvL+avj+mggeimgeeNsuWPlueahOizh+aWmeaVuOmHj1xyXG59XHJcblxyXG5pbnRlcmZhY2UgR2V0SGlzdG9yeURldGFpbCB7XHJcbiAgICBHYW1lTnVtYmVyOiBudW1iZXJcclxufVxyXG5cclxuLyoqXHJcbiAqIEBBdXRob3Ig6JWt56uL5ZOBXHJcbiAqIEBEZXNjcmlwdGlvbiDoqqrmmI7poIHmjInpiJXnm6Pogb3kuovku7ZcclxuICogQERhdGUgMjAyMS0wNS0xMCDkuIrljYggMTE6NDNcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWNvcmRQYWdlQnV0dG9uIGV4dGVuZHMgQVJlY29yZERvdWJsZUJ1dHRvblRlbXBsYXRlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIG9uZURheVJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIG9uZURheVJlY29yZEJ1dHRvblY6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIGZpdmVEYXlSZWNvcmRCdXR0b25IOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBmaXZlRGF5UmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgdGVuRGF5UmVjb3JkQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgdGVuRGF5UmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29CYWNrQnV0dG9uSDogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgZ29CYWNrQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXHJcbiAgICBwcm90ZWN0ZWQgbmV4dFJlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIG5leHRSZWNvcmRCdXR0b25WOiBjYy5CdXR0b24gPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcclxuICAgIHByb3RlY3RlZCBwcmV2aW91c1JlY29yZEJ1dHRvbkg6IGNjLkJ1dHRvbiA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxyXG4gICAgcHJvdGVjdGVkIHByZXZpb3VzUmVjb3JkQnV0dG9uVjogY2MuQnV0dG9uID0gbnVsbDtcclxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeiHquiogue+qS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkTm9kZUg6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkTm9kZVY6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgcmVjb3JkTGlzdFZpZXdIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvdGVjdGVkIHJlY29yZExpc3RWaWV3VjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcm90ZWN0ZWQgbm93TnVtYmVyT2ZQYWdlc0g6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCBub3dOdW1iZXJPZlBhZ2VzVjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3Jlc3NOb2RlSDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3RlY3RlZCBwcm9ncmVzc05vZGVWOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHByb3RlY3RlZCBwcm9ncmVzc1RleHRIOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3Jlc3NUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIC8v5pel5pyf5a2Y5pS+XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRhdGVUb0FycmF5OiBBcnJheTxudW1iZXI+ID0gWzEsIDUsIDEwXTtcclxuICAgIC8vUmVzcG9uc2Ugc2VydmVy55qE57SA6YyE54mp5Lu2XHJcbiAgICBwcml2YXRlIGdldEdhbWVIaXN0b3J5SDogR2V0R2FtZUhpc3Rvcnk7XHJcbiAgICAvL1Jlc3BvbnNlIHNlcnZlcueahOe0gOmMhOeJqeS7tlxyXG4gICAgcHJpdmF0ZSBnZXRHYW1lSGlzdG9yeVY6IEdldEdhbWVIaXN0b3J5O1xyXG4gICAgLy9SZXNwb25zZSBzZXJ2ZXIg56Wl5Zau54mp5Lu2XHJcbiAgICBwcml2YXRlIGdldEhpc3RvcnlEZXRhaWxIOiBHZXRIaXN0b3J5RGV0YWlsO1xyXG4gICAgLy9SZXNwb25zZSBzZXJ2ZXIg56Wl5Zau54mp5Lu2XHJcbiAgICBwcml2YXRlIGdldEhpc3RvcnlEZXRhaWxWOiBHZXRIaXN0b3J5RGV0YWlsO1xyXG5cclxuICAgIC8v57SA6YyE6aCB5L2/55So6aGP6ImyXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbG9yOiB7IFJFRDogY2MuQ29sb3I7IEdSQVk6IGNjLkNvbG9yOyBXSElURTogY2MuQ29sb3I7IEJMVUU6IGNjLkNvbG9yOyBEQVJLX1lFTExPVzogY2MuQ29sb3I7IERBUktfUkVEOiBjYy5Db2xvcjsgQkxBQ0s6IGNjLkNvbG9yOyBZRUxMT1c6IGNjLkNvbG9yOyBEQVJLX0dSQVk6IGNjLkNvbG9yOyBEQVJLX0JMVUU6IGNjLkNvbG9yIH07XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBSZWNvcmRQYWdlQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBkZWxheVRpbWU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgZ2FtZUhpc3RvcnlEYXRhOiBHYW1lSGlzdG9yeURhdGE7XHJcbiAgICBwcml2YXRlIG5vd0RheTogRGF5VHlwZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSB7XHJcbiAgICAgICAgICAgIERBUktfQkxVRTogY2MuY29sb3IoKS5mcm9tSEVYKFwiIzIyNjU2NVwiKSxcclxuICAgICAgICAgICAgQkxVRTogY2MuY29sb3IoKS5mcm9tSEVYKFwiIzMwYTJhMlwiKSxcclxuICAgICAgICAgICAgREFSS19SRUQ6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiM2NTIyMjJcIiksXHJcbiAgICAgICAgICAgIFJFRDogY2MuY29sb3IoKS5mcm9tSEVYKFwiI2FiM2EzYVwiKSxcclxuICAgICAgICAgICAgREFSS19ZRUxMT1c6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiM2ODRlMzNcIiksXHJcbiAgICAgICAgICAgIFlFTExPVzogY2MuY29sb3IoKS5mcm9tSEVYKFwiI2NmOTQ1N1wiKSxcclxuICAgICAgICAgICAgQkxBQ0s6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiMxRTFFMUVcIiksXHJcbiAgICAgICAgICAgIERBUktfR1JBWTogY2MuY29sb3IoKS5mcm9tSEVYKFwiIzMxMzEzMVwiKSxcclxuICAgICAgICAgICAgR1JBWTogY2MuY29sb3IoKS5mcm9tSEVYKFwiIzc3Nzc3N1wiKSxcclxuICAgICAgICAgICAgV0hJVEU6IGNjLmNvbG9yKCkuZnJvbUhFWChcIiNGRkZGRkZcIiksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgUmVjb3JkUGFnZUJ1dHRvbi5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlsRXZlbnRMaXN0ZW5lcigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/poa/npLrnpaXllq7nm6Pogb3lmahcclxuICAgICAgICB0aGlzLmFkZExpc3RWaWV3SXRlbVRvdWNoRXZlbnRMaXN0ZW5lcigpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0xpc3RWaWV3IOWFp+eahEl0ZW0g5oyJ6YiV55uj6IG9XHJcblxyXG4gICAgICAgIFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uXHJcbiAgICAgICAgICAgIC5pbnN0YW5jZS5zdWJzY3JpYmUodGhpcy5zY2VuZURpcmVjdGlvbk9ic2VydmVyTGlzdGVuZXIoKSwgdHJ1ZSk7ICAgICAvL+iou+WGiuebtOapq+W8j+ebo+iBvVxyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMllxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL57SA6YyE6aCB5oyJ6YiVXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemUoKSB7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5pu05o+b5pel5pyf57SA6YyE5oyJ6YiV5aSW5qGGLDHml6XmjInpiJXlpJbmoYbpu5joqo3plovllZ8s5YW25LuW6Zec6ZaJXHJcbiAgICAgICAgdGhpcy5vbmVEYXlSZWNvcmRCdXR0b25ILm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uZURheVJlY29yZEJ1dHRvblYubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZml2ZURheVJlY29yZEJ1dHRvbkgubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZpdmVEYXlSZWNvcmRCdXR0b25WLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZW5EYXlSZWNvcmRCdXR0b25ILm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZW5EYXlSZWNvcmRCdXR0b25WLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub3dEYXkgPSBEYXlUeXBlLk9ORV9EQVk7XHJcbiAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzSC5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcbiAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzVi5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlUmVjb3JkVUkoKTtcclxuXHJcbiAgICAgICAgLy/liJ3lp4vopoHlm57lgrNzZXJ2ZXLmi7/lj5bntIDpjIRqc29u55qE6LOH5paZXHJcbiAgICAgICAgdGhpcy5nZXRHYW1lSGlzdG9yeUggPSB7XHJcbiAgICAgICAgICAgIERheTogdGhpcy5kYXRlVG9BcnJheVswXSxcclxuICAgICAgICAgICAgUGFnZTogMSxcclxuICAgICAgICAgICAgUXVhbnRpdHk6IDgsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldEdhbWVIaXN0b3J5ViA9IHtcclxuICAgICAgICAgICAgRGF5OiB0aGlzLmRhdGVUb0FycmF5WzBdLFxyXG4gICAgICAgICAgICBQYWdlOiAxLFxyXG4gICAgICAgICAgICBRdWFudGl0eTogMTAsXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldEhpc3RvcnlEZXRhaWxIID0ge1xyXG4gICAgICAgICAgICBHYW1lTnVtYmVyOiAwLFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SGlzdG9yeURldGFpbFYgPSB7XHJcbiAgICAgICAgICAgIEdhbWVOdW1iZXI6IDAsXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoExpc3RWaWV3IOaMiemIlSDnm6Pogb3kuovku7ZcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBhZGRMaXN0Vmlld0l0ZW1Ub3VjaEV2ZW50TGlzdGVuZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBsaXN0Vmlld0l0ZW1zSCA9IHRoaXMucmVjb3JkTGlzdFZpZXdILmNoaWxkcmVuO1xyXG4gICAgICAgIGxldCBsaXN0Vmlld0l0ZW1zViA9IHRoaXMucmVjb3JkTGlzdFZpZXdWLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXhIID0gMDtcclxuICAgICAgICBmb3IgKGxldCBub2RlIG9mIGxpc3RWaWV3SXRlbXNIKSB7XHJcbiAgICAgICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoYnV0dG9uLCBcImxpc3RWaWV3SXRlbVRvdWNoRXZlbnRIXCIsIHRoaXMsIGluZGV4SCk7XHJcbiAgICAgICAgICAgIGluZGV4SCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGluZGV4ViA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgbm9kZSBvZiBsaXN0Vmlld0l0ZW1zVikge1xyXG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KGJ1dHRvbiwgXCJsaXN0Vmlld0l0ZW1Ub3VjaEV2ZW50VlwiLCB0aGlzLCBpbmRleFYpO1xyXG4gICAgICAgICAgICBpbmRleFYrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmqavlvI8gbGlzdFZpZXdJdGVtIOebo+iBveeUqOaItum7nuWPiuWTqumhhkl0ZW0g5Zue5YKzc2V2ZXLpoa/npLrnpaXllq5cclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIGNhbGxCYWNrXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxpc3RWaWV3SXRlbVRvdWNoRXZlbnRIKGV2ZW50LCBjYWxsQmFjaykge1xyXG4gICAgICAgIGxldCBoaXN0b3J5S2V5czogc3RyaW5nW107XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlLZXlzID0gT2JqZWN0LmtleXModGhpcy5nYW1lSGlzdG9yeURhdGEuSGlzdG9yeSk7XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5S2V5cy5sZW5ndGggPCBjYWxsQmFjaykgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhpc3RvcnlEZXRhaWxILkdhbWVOdW1iZXIgPSB0aGlzLmdhbWVIaXN0b3J5RGF0YS5IaXN0b3J5W2hpc3RvcnlLZXlzW2NhbGxCYWNrXV0uR2FtZU51bWJlcjtcclxuICAgICAgICAgICAgc29ja2V0SlMuU0ZTVG9TZXJ2ZXIoXCJHZXRIaXN0b3J5RGV0YWlsXCIsIHRoaXMuZ2V0SGlzdG9yeURldGFpbEgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebtOW8jyBsaXN0Vmlld0l0ZW0g55uj6IG955So5oi26bue5Y+K5ZOq6aGGSXRlbSDlm57lgrNzZXZlcumhr+ekuuelpeWWrlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2tcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbGlzdFZpZXdJdGVtVG91Y2hFdmVudFYoZXZlbnQsIGNhbGxCYWNrOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgaGlzdG9yeUtleXM6IHN0cmluZ1tdO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnlLZXlzID0gT2JqZWN0LmtleXModGhpcy5nYW1lSGlzdG9yeURhdGEuSGlzdG9yeSk7XHJcbiAgICAgICAgICAgIGlmIChoaXN0b3J5S2V5cy5sZW5ndGggPCBjYWxsQmFjaykgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmdldEhpc3RvcnlEZXRhaWxWLkdhbWVOdW1iZXIgPSB0aGlzLmdhbWVIaXN0b3J5RGF0YS5IaXN0b3J5W2hpc3RvcnlLZXlzW2NhbGxCYWNrXV0uR2FtZU51bWJlcjtcclxuICAgICAgICAgICAgc29ja2V0SlMuU0ZTVG9TZXJ2ZXIoXCJHZXRIaXN0b3J5RGV0YWlsXCIsIHRoaXMuZ2V0SGlzdG9yeURldGFpbFYpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY2MubG9nKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhr+ekuuelpeWWrumggemdouebo+iBveWZqFxyXG4gICAgICovXHJcbiAgICBzaG93RGV0YWlsRXZlbnRMaXN0ZW5lcigpIHtcclxuXHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNlcnZlckV2ZW50TGlzdGVuZXIoU2VydmVyRXZlbnRUeXBlLkdFVF9ISVNUT1JZX0RFVEFJTF9SRVNVTFQsIChoaXN0b3J5RGV0YWlsKSA9PiB7XHJcbiAgICAgICAgICAgIGNjW1wicGx1Z1wiXS5SZWNvcmQuY3JlYXRlUGFnZURldGFpbChoaXN0b3J5RGV0YWlsKTtcclxuICAgICAgICB9LCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebtOapq+WQkeebo+iBveWZqFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNjZW5lRGlyZWN0aW9uT2JzZXJ2ZXJMaXN0ZW5lcigpOiBTY2VuZURpcmVjdGlvbkNoYW5nZU9ic2VydmVyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFNjZW5lRGlyZWN0aW9uQ2hhbmdlT2JzZXJ2ZXIoKHR5cGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSAmJiAhdGhpcy5yZWNvcmROb2RlVi5hY3RpdmUpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1NjZW5lRGlyZWN0aW9uKHR5cGUpLnRoZW4oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeiuuiqjeeVtuWJjeebtOapq+W8j+S4iyzlgZrnm7jlsI3mh4nnmoTplovllZ/oqbLmqKPlvI/nmoTnr4Dpu55cclxuICAgICAqIEBwYXJhbSB7U2NlbmVEaXJlY3Rpb25UeXBlfSB0eXBlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGNoZWNrU2NlbmVEaXJlY3Rpb24odHlwZTogU2NlbmVEaXJlY3Rpb25UeXBlKSB7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTm9kZUguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWNvcmROb2RlVi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRHYW1lSGlzdG9yeUguUGFnZSA9IDE7Ly/lpoLmnpzmnInmm7Tmj5sg6J6i5bmV5pa55ZCRLOWwh+aKiiDpoIHmlbjkuZ/liJ3lp4tcclxuICAgICAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzSC5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UmVjb3JkRGF0YSh0aGlzLmdldEdhbWVIaXN0b3J5SCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBTY2VuZURpcmVjdGlvblR5cGUuUE9SVFJBSVQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTm9kZUguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucmVjb3JkTm9kZVYuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZXRHYW1lSGlzdG9yeVYuUGFnZSA9IDE7Ly/lpoLmnpzmnInmm7Tmj5sg6J6i5bmV5pa55ZCRLOWwh+aKiiDpoIHmlbjkuZ/liJ3lp4tcclxuICAgICAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzVi5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZ2V0UmVjb3JkRGF0YSh0aGlzLmdldEdhbWVIaXN0b3J5Vik7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhgTWFpbkdhbWVTZXR0aW5nIHNjZW5lRGlyZWN0aW9uRXZlbnQoKSDmnInpjK/oqqQgOiAke3R5cGV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ou/5Y+WUmVjb3Jk6LOH5paZLOS4puabtOaWsFVJXHJcbiAgICAgKiBAcGFyYW0ge0dldEdhbWVIaXN0b3J5fSBnZXRHYW1lSGlzdG9yeVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldFJlY29yZERhdGEoZ2V0R2FtZUhpc3Rvcnk6IEdldEdhbWVIaXN0b3J5KSB7XHJcbiAgICAgICAgc29ja2V0SlMuU0ZTVG9TZXJ2ZXIoXCJHZXRHYW1lSGlzdG9yeVwiLCBnZXRHYW1lSGlzdG9yeSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVSZWNvcmRVSSgpO1xyXG4gICAgICAgIGF3YWl0IHRoaXMucnVuUHJvZ3Jlc3MoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlY29yZFVJKHRoaXMuZ2FtZUhpc3RvcnlEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebo+iBveWZqOeUseaKveixoemhnuWvpuePvlxyXG4gICAgICogc2VydmVyIOWbnuWCs+elpeWWruaOpeaUtuWZqFxyXG4gICAgICogQHBhcmFtIGdhbWVIaXN0b3J5RGF0YVxyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2FtZUhpc3RvcnlSZXN1bHRFdmVudChnYW1lSGlzdG9yeURhdGE6IEdhbWVIaXN0b3J5RGF0YSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUhpc3RvcnlEYXRhID0gZ2FtZUhpc3RvcnlEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzaG93UmVjb3JkUGFnZSgpIHtcclxuICAgICAgICAvL+WIneWni+Wwh+eVtuWJjeeUqOaItuWMuemFjeeahGFjdGl2ZSDmiZPplotcclxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcclxuICAgICAgICBhd2FpdCB0aGlzLmNoZWNrU2NlbmVEaXJlY3Rpb24oU2NlbmVNYW5hZ2VyLmluc3RhbmNlLnNjZW5lRGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOips+WWrkxpc3RWaWV3XHJcbiAgICAgKiBAcGFyYW0ge0dhbWVIaXN0b3J5RGF0YX0gZ2FtZUhpc3RvcnlEYXRhXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCB1cGRhdGVSZWNvcmRVSShnYW1lSGlzdG9yeURhdGE6IEdhbWVIaXN0b3J5RGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBjYy5Ob2RlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWNvcmROb2RlSC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgbGlzdFZpZXcgPSB0aGlzLnJlY29yZExpc3RWaWV3SDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0VmlldyA9IHRoaXMucmVjb3JkTGlzdFZpZXdWO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNoZWNrU2VydmVyU3RhdGUoZ2FtZUhpc3RvcnlEYXRhLlN0YXRlLCBsaXN0Vmlldy5jaGlsZHJlblswXSkpIHJldHVybjtcclxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKGdhbWVIaXN0b3J5RGF0YS5IaXN0b3J5KTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBsZXQgaGlzdG9yeURhdGEgPSBnYW1lSGlzdG9yeURhdGEuSGlzdG9yeVtrZXldO1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoaXN0b3J5RGF0YS5UaW1lO1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoaXN0b3J5RGF0YS5HYW1lTnVtYmVyO1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBoaXN0b3J5RGF0YS5CZXQ7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGhpc3RvcnlEYXRhLldpbkxvc2U7XHJcbiAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWNvcmROb2RlSC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOdWxsRGF0YVN0YXRlKGxpc3RWaWV3LmNoaWxkcmVuW2luZGV4XSwgU29ja2V0U2V0dGluZy50KFwiU185MDczXCIpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOdWxsRGF0YVN0YXRlKGxpc3RWaWV3LmNoaWxkcmVuW2luZGV4XSwgU29ja2V0U2V0dGluZy50KFwiU185MDczXCIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVQYWdlQ2hhbmdlSW1nKGtleXMubGVuZ3RoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56K66KqN55W25YmN5Zue5YKz55qEanNvbiDni4DmhYvmmK/lkKbkuI3nrYnmlrwwXHJcbiAgICAgKiDlpKfmlrww54uA5oWL55Ww5bi4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhdGVcclxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gbGlzdFZpZXdJdGVtXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tTZXJ2ZXJTdGF0ZShzdGF0ZTogbnVtYmVyLCBsaXN0Vmlld0l0ZW06IGNjLk5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU51bGxEYXRhU3RhdGUobGlzdFZpZXdJdGVtLCBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwNzNcIikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICBjYXNlIDIgOlxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVOdWxsRGF0YVN0YXRlKGxpc3RWaWV3SXRlbSwgU29ja2V0U2V0dGluZy50KFwiU185MDc0XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgY2FzZSAzIDpcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTnVsbERhdGFTdGF0ZShsaXN0Vmlld0l0ZW0sIFNvY2tldFNldHRpbmcudChcIlNfOTA3NVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbnhKHos4fmlpnmmYIs5pu05paw54Sh6LOH5paZ6KiK5oGvXHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IGxpc3RWaWV3SXRlbU5vZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZU51bGxEYXRhU3RhdGUobGlzdFZpZXdJdGVtTm9kZTogY2MuTm9kZSwgdGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGNvbG9yQmc6IGNjLkNvbG9yO1xyXG4gICAgICAgIGxldCBjb2xvclRleHQ6IGNjLkNvbG9yO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ub3dEYXkpIHtcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLk9ORV9EQVk6XHJcbiAgICAgICAgICAgICAgICBjb2xvckJnID0gdGhpcy5jb2xvci5EQVJLX0JMVUU7XHJcbiAgICAgICAgICAgICAgICBjb2xvclRleHQgPSB0aGlzLmNvbG9yLkJMVUU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLkZJVkVfREFZOlxyXG4gICAgICAgICAgICAgICAgY29sb3JCZyA9IHRoaXMuY29sb3IuREFSS19ZRUxMT1c7XHJcbiAgICAgICAgICAgICAgICBjb2xvclRleHQgPSB0aGlzLmNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERheVR5cGUuVEVOX0RBWTpcclxuICAgICAgICAgICAgICAgIGNvbG9yQmcgPSB0aGlzLmNvbG9yLkRBUktfUkVEO1xyXG4gICAgICAgICAgICAgICAgY29sb3JUZXh0ID0gdGhpcy5jb2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKCfmi7/kuI3liLDnlbbliY3nlKjmiLbpgbjmk4fnmoTml6XmnJ8nLCB0aGlzLm5vd0RheSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdFZpZXdJdGVtTm9kZS5jb2xvciA9IGNvbG9yQmc7XHJcbiAgICAgICAgbGlzdFZpZXdJdGVtTm9kZS5jaGlsZHJlbls0XS5jb2xvciA9IGNvbG9yVGV4dDtcclxuICAgICAgICBsaXN0Vmlld0l0ZW1Ob2RlLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGV4dDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmj5vpoIHmjInpiJXpoY/oibJcclxuICAgICAqL1xyXG4gICAgdXBkYXRlUGFnZUNoYW5nZUltZyhkYXRhQW1vdW50OiBudW1iZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkTm9kZUguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIC8v56K66KqN6IO95ZCm5pu05YuV5LiL5LiA6aCB5oyJ6YiV5qij5byPXHJcbiAgICAgICAgICAgIGlmIChkYXRhQW1vdW50ID49IDgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dFJlY29yZEJ1dHRvbkgubm9kZS5jb2xvciA9IHRoaXMuY29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRSZWNvcmRCdXR0b25ILm5vZGUuY29sb3IgPSB0aGlzLmNvbG9yLkdSQVk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v56K66KqN6IO95ZCm5pu05YuV5LiK5LiA6aCB5oyJ6YiV5qij5byPXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldEdhbWVIaXN0b3J5SC5QYWdlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JlY29yZEJ1dHRvbkgubm9kZS5jb2xvciA9IHRoaXMuY29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzUmVjb3JkQnV0dG9uSC5ub2RlLmNvbG9yID0gdGhpcy5jb2xvci5HUkFZO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8v56K66KqN6IO95ZCm5pu05YuV5LiL5LiA6aCB5oyJ6YiV5qij5byPXHJcbiAgICAgICAgICAgIGlmIChkYXRhQW1vdW50ID49IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRSZWNvcmRCdXR0b25WLm5vZGUuY29sb3IgPSB0aGlzLmNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0UmVjb3JkQnV0dG9uVi5ub2RlLmNvbG9yID0gdGhpcy5jb2xvci5HUkFZO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL+eiuuiqjeiDveWQpuabtOWLleS4iuS4gOmggeaMiemIleaoo+W8j1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRHYW1lSGlzdG9yeVYuUGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNSZWNvcmRCdXR0b25WLm5vZGUuY29sb3IgPSB0aGlzLmNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1JlY29yZEJ1dHRvblYubm9kZS5jb2xvciA9IHRoaXMuY29sb3IuR1JBWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa4hemZpOips+WWrkxpc3RWaWV35YWn55qE5qyE5L2N6LOH6KiKXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByZW1vdmVSZWNvcmRVSSgpIHtcclxuICAgICAgICBsZXQgcmVtb3ZlRW5kOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGxpc3RWaWV3OiBjYy5Ob2RlO1xyXG4gICAgICAgIGlmICh0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSkge1xyXG4gICAgICAgICAgICByZW1vdmVFbmQgPSA4O1xyXG4gICAgICAgICAgICBsaXN0VmlldyA9IHRoaXMucmVjb3JkTGlzdFZpZXdIO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlbW92ZUVuZCA9IDEwO1xyXG4gICAgICAgICAgICBsaXN0VmlldyA9IHRoaXMucmVjb3JkTGlzdFZpZXdWO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVFbmQ7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSAlIDIgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdFZpZXcuY2hpbGRyZW5baV0uY29sb3IgPSB0aGlzLmNvbG9yLkJMQUNLO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlzdFZpZXcuY2hpbGRyZW5baV0uY29sb3IgPSB0aGlzLmNvbG9yLkRBUktfR1JBWTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaXN0Vmlldy5jaGlsZHJlbltpXS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzFdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgbGlzdFZpZXcuY2hpbGRyZW5baV0uY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBsaXN0Vmlldy5jaGlsZHJlbltpXS5jaGlsZHJlblszXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxpc3RWaWV3LmNoaWxkcmVuW2ldLmNoaWxkcmVuWzRdLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm6Pogb3lt7LntpPnlLHmir3osaHpoZ7lr6bkvZxcclxuICAgICAqIOabtOaPm+ips+WWrueahOS4iuS4gOmggeiIh+S4i+S4gOmggeaMiemIleS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge1BhZ2VDaGFuZ2V9IGNhbGxCYWNrXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIG5leHRBbmRMYXN0QnV0dG9uVG91Y2hFdmVudChldmVudDogYW55LCBjYWxsQmFjazogUGFnZUNoYW5nZSkge1xyXG5cclxuICAgICAgICBsZXQgZGF0YUxlbmd0aCA9IE9iamVjdC5rZXlzKHRoaXMuZ2FtZUhpc3RvcnlEYXRhLkhpc3RvcnkpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKGNhbGxCYWNrID09PSBQYWdlQ2hhbmdlLk5FWFQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Nhbk5leHRQYWdlQ2hhbmdlKGRhdGFMZW5ndGgpLnRoZW4oKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNhbGxCYWNrID09IFBhZ2VDaGFuZ2UuUFJFVklPVVMpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NhblByZXZpb3VzUGFnZUNoYW5nZShkYXRhTGVuZ3RoKS50aGVuKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnorroqo3og73lkKbkuIrkuIDpoIFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhQW1vdW50XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNoZWNrQ2FuUHJldmlvdXNQYWdlQ2hhbmdlKGRhdGFBbW91bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRHYW1lSGlzdG9yeUguUGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2FtZUhpc3RvcnlILlBhZ2UgPSAtLXRoaXMuZ2V0R2FtZUhpc3RvcnlILlBhZ2U7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRKUy5TRlNUb1NlcnZlcihcIkdldEdhbWVIaXN0b3J5XCIsIHRoaXMuZ2V0R2FtZUhpc3RvcnlIKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93TnVtYmVyT2ZQYWdlc0guc3RyaW5nID0gU3RyaW5nKHRoaXMuZ2V0R2FtZUhpc3RvcnlILlBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZWNvcmRVSSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ydW5Qcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZWNvcmRVSSh0aGlzLmdhbWVIaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRHYW1lSGlzdG9yeVYuUGFnZSA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2UgPSAtLXRoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2U7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRKUy5TRlNUb1NlcnZlcihcIkdldEdhbWVIaXN0b3J5XCIsIHRoaXMuZ2V0R2FtZUhpc3RvcnlWKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93TnVtYmVyT2ZQYWdlc1Yuc3RyaW5nID0gU3RyaW5nKHRoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZWNvcmRVSSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ydW5Qcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZWNvcmRVSSh0aGlzLmdhbWVIaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnorroqo3og73lkKbkuIvkuIDpoIFcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXRhQW1vdW50XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGNoZWNrQ2FuTmV4dFBhZ2VDaGFuZ2UoZGF0YUFtb3VudDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YUFtb3VudCA9PSA4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldEdhbWVIaXN0b3J5SC5QYWdlID0gKyt0aGlzLmdldEdhbWVIaXN0b3J5SC5QYWdlO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0SlMuU0ZTVG9TZXJ2ZXIoXCJHZXRHYW1lSGlzdG9yeVwiLCB0aGlzLmdldEdhbWVIaXN0b3J5SCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vd051bWJlck9mUGFnZXNILnN0cmluZyA9IFN0cmluZyh0aGlzLmdldEdhbWVIaXN0b3J5SC5QYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVjb3JkVUkoKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucnVuUHJvZ3Jlc3MoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVjb3JkVUkodGhpcy5nYW1lSGlzdG9yeURhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFBbW91bnQgPT0gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2UgPSArK3RoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2U7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRKUy5TRlNUb1NlcnZlcihcIkdldEdhbWVIaXN0b3J5XCIsIHRoaXMuZ2V0R2FtZUhpc3RvcnlWKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm93TnVtYmVyT2ZQYWdlc1Yuc3RyaW5nID0gU3RyaW5nKHRoaXMuZ2V0R2FtZUhpc3RvcnlWLlBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVSZWNvcmRVSSgpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5ydW5Qcm9ncmVzcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZWNvcmRVSSh0aGlzLmdhbWVIaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnm6Pogb3kuovku7blt7LnlLHmir3osaHpoZ7lr6bkvZxcclxuICAgICAqIOapq+WQkeaMiemIleS4reWQhOaXpeacn+mBuOaThyzlsI3mh4noqbLoqbPllq7pnIDpoa/npLrnmoTpoIHmlbhcclxuICAgICAqIEBwYXJhbSBldmVudFxyXG4gICAgICogQHBhcmFtIHtEYXlUeXBlfSBjYWxsQmFja1xyXG4gICAgICogQHByb3RlY3RlZFxyXG4gICAgICovXHJcbiAgICBARWZmZWN0KFwiQnRuQ2xpY2tcIilcclxuICAgIHByb3RlY3RlZCBkYXlzUmVjb3JkVG91Y2hFdmVudEgoZXZlbnQsIGNhbGxCYWNrOiBEYXlUeXBlKSB7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF5QnV0dG9uQm9yZGVyKHRoaXMubm93RGF5LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5ub3dEYXkgPSBjYWxsQmFjazsgLy/kv53lrZjnlbbliY3mkJzlsIvml6XmnJ/nmoTmjInpiJVcclxuICAgICAgICB0aGlzLnVwZGF0ZURheUJ1dHRvbkJvcmRlcih0aGlzLm5vd0RheSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2FsbEJhY2spIHtcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLk9ORV9EQVk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGF5c1RvU2VydmVyKDEsIHRoaXMuZ2V0R2FtZUhpc3RvcnlIKS50aGVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLkZJVkVfREFZOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0RheXNUb1NlcnZlcig1LCB0aGlzLmdldEdhbWVIaXN0b3J5SCkudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGF5VHlwZS5URU5fREFZOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0RheXNUb1NlcnZlcigxMCwgdGhpcy5nZXRHYW1lSGlzdG9yeUgpLnRoZW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOebo+iBveS6i+S7tuW3sueUseaKveixoemhnuWvpuS9nFxyXG4gICAgICog55u05ZCR5oyJ6YiV5Lit5ZCE5pel5pyf6YG45pOHLOWwjeaHieipsuips+WWrumcgOmhr+ekuueahOmggeaVuFxyXG4gICAgICogQHBhcmFtIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge0RheVR5cGV9IGNhbGxCYWNrXHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIEBFZmZlY3QoXCJCdG5DbGlja1wiKVxyXG4gICAgcHJvdGVjdGVkIGRheXNSZWNvcmRUb3VjaEV2ZW50VihldmVudCwgY2FsbEJhY2s6IERheVR5cGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVEYXlCdXR0b25Cb3JkZXIodGhpcy5ub3dEYXksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLm5vd0RheSA9IGNhbGxCYWNrOyAvL+S/neWtmOeVtuWJjeaQnOWwi+aXpeacn+eahOaMiemIlVxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF5QnV0dG9uQm9yZGVyKHRoaXMubm93RGF5LCB0cnVlKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjYWxsQmFjaykge1xyXG4gICAgICAgICAgICBjYXNlIERheVR5cGUuT05FX0RBWTpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tEYXlzVG9TZXJ2ZXIoMSwgdGhpcy5nZXRHYW1lSGlzdG9yeVYpLnRoZW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERheVR5cGUuRklWRV9EQVk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGF5c1RvU2VydmVyKDUsIHRoaXMuZ2V0R2FtZUhpc3RvcnlWKS50aGVuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLlRFTl9EQVk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRGF5c1RvU2VydmVyKDEwLCB0aGlzLmdldEdhbWVIaXN0b3J5VikudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRGF5QnV0dG9uQm9yZGVyKGRheVR5cGU6IERheVR5cGUsIGlzU2hvdzogYm9vbGVhbikge1xyXG5cclxuICAgICAgICBsZXQgaE9yVjogYm9vbGVhbiA9IHRoaXMucmVjb3JkTm9kZUguYWN0aXZlO1xyXG4gICAgICAgIHN3aXRjaCAoZGF5VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIERheVR5cGUuT05FX0RBWTpcclxuICAgICAgICAgICAgICAgIGhPclYgPyB0aGlzLm9uZURheVJlY29yZEJ1dHRvbkgubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBpc1Nob3cgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25lRGF5UmVjb3JkQnV0dG9uVi5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGlzU2hvd1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKGRheVR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBEYXlUeXBlLkZJVkVfREFZOlxyXG4gICAgICAgICAgICAgICAgaE9yViA/IHRoaXMuZml2ZURheVJlY29yZEJ1dHRvbkgubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBpc1Nob3cgOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZml2ZURheVJlY29yZEJ1dHRvblYubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBpc1Nob3dcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChkYXlUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGF5VHlwZS5URU5fREFZOlxyXG4gICAgICAgICAgICAgICAgaE9yViA/IHRoaXMudGVuRGF5UmVjb3JkQnV0dG9uSC5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGlzU2hvdyA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW5EYXlSZWNvcmRCdXR0b25WLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gaXNTaG93XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L6d54Wn5bCN5oeJ55qE5pel5pyfLOWBmuebuOWwjeaHieeahOWbnuWCsyBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkYXlcclxuICAgICAqIEBwYXJhbSB7R2V0R2FtZUhpc3Rvcnl9IGdhbWVIaXN0b3J5XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGFzeW5jIGNoZWNrRGF5c1RvU2VydmVyKGRheTogbnVtYmVyLCBnYW1lSGlzdG9yeTogR2V0R2FtZUhpc3RvcnkpIHtcclxuXHJcbiAgICAgICAgZ2FtZUhpc3RvcnkuRGF5ID0gZGF5O1xyXG4gICAgICAgIGdhbWVIaXN0b3J5LlBhZ2UgPSAxO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yZWNvcmROb2RlSC5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzSC5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ub3dOdW1iZXJPZlBhZ2VzVi5zdHJpbmcgPSBTdHJpbmcoMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzb2NrZXRKUy5TRlNUb1NlcnZlcihcIkdldEdhbWVIaXN0b3J5XCIsIGdhbWVIaXN0b3J5KTtcclxuICAgICAgICB0aGlzLnJlbW92ZVJlY29yZFVJKCk7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5Qcm9ncmVzcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVjb3JkVUkodGhpcy5nYW1lSGlzdG9yeURhdGEpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm54gc2V0dGluZyDpoIHpnaJcclxuICAgICAqIEBwcm90ZWN0ZWRcclxuICAgICAqL1xyXG4gICAgQEVmZmVjdChcIkJ0bkNsaWNrXCIpXHJcbiAgICBwcm90ZWN0ZWQgZ29CYWNrVG91Y2hFdmVudChldmVudCwgc2NlbmVEaXJlY3Rpb246IFNjZW5lRGlyZWN0aW9uVHlwZSkge1xyXG4gICAgICAgIGNjLmxvZyhzY2VuZURpcmVjdGlvbik7XHJcbiAgICAgICAgc3dpdGNoIChzY2VuZURpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU6XHJcbiAgICAgICAgICAgICAgICBNZW51UGFnZUJ1dHRvbi5pbnN0YW5jZS5zaG93TWVudSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWNvcmROb2RlSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lRGlyZWN0aW9uVHlwZS5QT1JUUkFJVDpcclxuICAgICAgICAgICAgICAgIE1lbnVQYWdlQnV0dG9uLmluc3RhbmNlLnNob3dNZW51KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlY29yZE5vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWft+ihjOiugOWPluainVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICAgKiBAcHJvdGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBydW5Qcm9ncmVzcygpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGVILmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzTm9kZVYuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzTm9kZUguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NOb2RlVi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlUaW1lID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDggLSA0KSkgKyA0O1xyXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NUZXh0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgdGltZTogbnVtYmVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RleHQgKz0gXCIuXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3NUZXh0Lmxlbmd0aCA+IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc1RleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlUHJvZ3Jlc3MocHJvZ3Jlc3NUZXh0LCB0aW1lLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIHRpbWUrKztcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiugOWPluaineS6i+S7tizmir3pm6JVSeaTjeS9nFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb2dyZXNzVGV4dFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbGF5VGltZVxyXG4gICAgICogQHBhcmFtIHsodmFsdWU6IChQcm9taXNlTGlrZTx2b2lkPiB8IHZvaWQpKSA9PiB2b2lkfSByZXNvbHZlXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1ha2VQcm9ncmVzcyhwcm9ncmVzc1RleHQ6IHN0cmluZywgZGVsYXlUaW1lOiBudW1iZXIsIHJlc29sdmU6ICh2YWx1ZTogKFByb21pc2VMaWtlPHZvaWQ+IHwgdm9pZCkpID0+IHZvaWQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZXN1bHRPSyAmJiBkZWxheVRpbWUgPj0gdGhpcy5kZWxheVRpbWUpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY29yZE5vZGVILmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGVILmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc05vZGVWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucmVjb3JkTm9kZUguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NUZXh0SC5zdHJpbmcgPSBwcm9ncmVzc1RleHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1RleHRWLnN0cmluZyA9IHByb2dyZXNzVGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=