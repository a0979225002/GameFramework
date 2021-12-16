"use strict";
cc._RF.push(module, '773567P8h5FjpTsm9LIlk3B', 'ResultSortOut');
// script/Socket/ResultSortOut.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManager_1 = require("../Framework/Error/ErrorManager");
var ServerEventType_1 = require("../Framework/Listener/Enum/ServerEventType");
var EventManager_1 = require("../Framework/Listener/EventManager");
var UserMoneyChangeNotification_1 = require("../Framework/Process/GameNotification/UserMoneyChangeNotification");
var PublicSetUp_1 = require("./PublicSetUp");
var Socket_1 = require("./Socket");
var SocketSetting_1 = require("./SocketSetting");
var ccclass = cc._decorator.ccclass;
var ResultSortOut = /** @class */ (function (_super) {
    __extends(ResultSortOut, _super);
    function ResultSortOut() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResultSortOut_1 = ResultSortOut;
    ResultSortOut.prototype.onLoad = function () {
        ResultSortOut_1.instance = this;
    };
    ResultSortOut.prototype.SFSToGame = function (_cmd) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, betData, betState, e_1, freeData, freeState, e_2, gameHistoryData, historyDetail, groupID, errorStr, userPoint;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = _cmd;
                        switch (_a) {
                            case "MemberInfo": return [3 /*break*/, 1];
                            case "GameLobbyInfoResult": return [3 /*break*/, 2];
                            case "GameLobby": return [3 /*break*/, 3];
                            case "SlotTableInfoResult": return [3 /*break*/, 4];
                            case "CanPlayGame": return [3 /*break*/, 5];
                            case "TableInfo": return [3 /*break*/, 6];
                            case "BetResult": return [3 /*break*/, 7];
                            case "FreeSpinResult": return [3 /*break*/, 12];
                            case "GetGameHistoryResult": return [3 /*break*/, 17];
                            case "GetHistoryDetailResult": return [3 /*break*/, 18];
                            case "GroupID": return [3 /*break*/, 19];
                            case "GameClose": return [3 /*break*/, 20];
                            case "Warning": return [3 /*break*/, 20];
                            case "UpdatePoints": return [3 /*break*/, 21];
                        }
                        return [3 /*break*/, 22];
                    case 1:
                        PublicSetUp_1.default.Ratio = SocketSetting_1.default.ClientSetObject.Ratio;
                        cc.log(PublicSetUp_1.default.Ratio);
                        return [3 /*break*/, 22];
                    case 2:
                        PublicSetUp_1.default.GameLobbyName = SocketSetting_1.default.ServerReturnData[_cmd].GameLobbyName;
                        cc.log(PublicSetUp_1.default.GameLobbyName);
                        return [3 /*break*/, 22];
                    case 3:
                        PublicSetUp_1.default.SlotTableInfo["GameID"] = SocketSetting_1.default.ClientSetObject.serverGameGroupID;
                        PublicSetUp_1.default.SlotTableInfo["BetLobby"] = "1";
                        Socket_1.socketJS.SFSToServer("SlotTableInfo", PublicSetUp_1.default.SlotTableInfo);
                        return [3 /*break*/, 22];
                    case 4:
                        PublicSetUp_1.default.JoinRoom = SocketSetting_1.default.ServerReturnData[_cmd].TableName;
                        Socket_1.socketJS.SFSJoinRoom(PublicSetUp_1.default.JoinRoom);
                        return [3 /*break*/, 22];
                    case 5:
                        Socket_1.socketJS.SFSToServer("Table", "");
                        return [3 /*break*/, 22];
                    case 6:
                        cc.log("TableInfo:", SocketSetting_1.default.ServerReturnData[_cmd]);
                        EventManager_1.default.instance.setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.TABLE_INFO, SocketSetting_1.default.ServerReturnData[_cmd]);
                        return [3 /*break*/, 22];
                    case 7:
                        console.log(_cmd, SocketSetting_1.default.ServerReturnData[_cmd]);
                        betData = SocketSetting_1.default.ServerReturnData[_cmd];
                        betState = parseInt(SocketSetting_1.default.ServerReturnData[_cmd].State);
                        _b.label = 8;
                    case 8:
                        _b.trys.push([8, 10, , 11]);
                        return [4 /*yield*/, this.betState(betState, betData)];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 11];
                    case 10:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 22];
                    case 12:
                        console.log(_cmd, SocketSetting_1.default.ServerReturnData[_cmd]);
                        freeData = SocketSetting_1.default.ServerReturnData[_cmd];
                        freeState = parseInt(SocketSetting_1.default.ServerReturnData[_cmd].State);
                        _b.label = 13;
                    case 13:
                        _b.trys.push([13, 15, , 16]);
                        return [4 /*yield*/, this.freeState(freeState, freeData)];
                    case 14:
                        _b.sent();
                        return [3 /*break*/, 16];
                    case 15:
                        e_2 = _b.sent();
                        console.log(e_2);
                        return [3 /*break*/, 16];
                    case 16: return [3 /*break*/, 22];
                    case 17:
                        gameHistoryData = SocketSetting_1.default.ServerReturnData[_cmd];
                        cc.log("GetGameHistoryResult:", gameHistoryData);
                        EventManager_1.default.instance.setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.GET_GAME_HISTORY_RESULT, gameHistoryData);
                        return [3 /*break*/, 22];
                    case 18:
                        historyDetail = SocketSetting_1.default.ServerReturnData[_cmd];
                        cc.log("GetHistoryDetailResult:", historyDetail);
                        EventManager_1.default.instance.setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.GET_HISTORY_DETAIL_RESULT, historyDetail);
                        return [3 /*break*/, 22];
                    case 19:
                        groupID = SocketSetting_1.default.ServerReturnData[_cmd].GroupID;
                        EventManager_1.default.instance.setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.GROUP_ID, groupID);
                        return [3 /*break*/, 22];
                    case 20:
                        errorStr = SocketSetting_1.default.ClientSetObject.WarningText;
                        this.showErrorMessage(errorStr);
                        return [3 /*break*/, 22];
                    case 21:
                        userPoint = SocketSetting_1.default.ServerReturnData[_cmd].Points;
                        //用戶自行更新遊玩金額時,推播更新金額事件
                        UserMoneyChangeNotification_1.default.instance.notify(userPoint);
                        return [3 /*break*/, 22];
                    case 22: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 判斷當前錯誤狀態,顯示相對應的錯誤訊息
     */
    ResultSortOut.prototype.showErrorMessage = function (errorStr) {
        // 帳號重複登入或是無回首頁網址 按鈕文字顯示為"確定"
        switch (errorStr) {
            case SocketSetting_1.default.t("S_9023"):
            case SocketSetting_1.default.t("S_9024"):
                ErrorManager_1.default
                    .instance
                    .serverError(true, errorStr, SocketSetting_1.default.t("54_042"));
                break;
            case SocketSetting_1.default.t("S_9029"):
                ErrorManager_1.default
                    .instance
                    .serverError(true, errorStr, SocketSetting_1.default.t("54_042"));
                break;
            case SocketSetting_1.default.t("S_9031"):
                //如果重複登入,反回大廳
                this.SFSToGame("GameLobby").then();
                break;
            default:
                ErrorManager_1.default
                    .instance
                    .serverError(true, errorStr, SocketSetting_1.default.t("B_1001"));
        }
    };
    /**
     * //判斷當前押注狀態,顯示各種錯誤,如果 = 0 則繼續遊戲
     * @param {number}betState
     * @param {object}betData
     * @return boolean
     */
    ResultSortOut.prototype.betState = function (betState, betData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        switch (betState) {
                            case -1: //重複押注
                                reject("bet 重複押注");
                                break;
                            case 0: //押注成功
                                EventManager_1.default
                                    .instance
                                    .setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.BET_RESULT, betData);
                                //用戶下注後的金額,推播更新
                                UserMoneyChangeNotification_1.default.instance.notify(betData["UserPointBefore"]);
                                resolve(true);
                                break;
                            case 2: //超過本金(這裡只是一個保險機制,需要先在傳送封包前就先擋掉避免傳封包)
                                ErrorManager_1.default
                                    .instance
                                    .serverError(true, SocketSetting_1.default.t("S_9003"));
                                reject("bet 超過本金(這裡只是一個保險機制,需要先在傳送封包前就先擋掉避免傳封包)");
                                break;
                            default: //(1:遊戲狀態不符合,3:投注區間錯誤,4:投注參數錯誤)
                                ErrorManager_1.default
                                    .instance
                                    .serverError(true, SocketSetting_1.default.t("S_9015"));
                                reject("bet \u904A\u6232\u72C0\u614B\u4E0D\u7B26\u5408 : \u72C0\u614B = (" + betState + ")");
                                break;
                        }
                    })];
            });
        });
    };
    /**
     * //判斷當前押注狀態,顯示各種錯誤,如果 = 0 則繼續遊戲
     * @param {number}freeState
     * @param {object}freeData
     * @return boolean
     */
    ResultSortOut.prototype.freeState = function (freeState, freeData) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        switch (freeState) {
                            case -1: //重複押注
                                reject("free 重複押注");
                                break;
                            case 0: //押注成功
                                EventManager_1.default
                                    .instance
                                    .setEvent(EventManager_1.default.serverTarget, ServerEventType_1.ServerEventType.FREE_SPIN_RESULT, freeData);
                                resolve(true);
                                break;
                            default: //(1:遊戲狀態不符合,3:投注區間錯誤,4:投注參數錯誤)
                                ErrorManager_1.default
                                    .instance
                                    .serverError(true, SocketSetting_1.default.t("S_9015"));
                                reject("free \u904A\u6232\u72C0\u614B\u4E0D\u7B26\u5408 : \u72C0\u614B = (" + freeState + ")");
                                break;
                        }
                    })];
            });
        });
    };
    var ResultSortOut_1;
    ResultSortOut = ResultSortOut_1 = __decorate([
        ccclass
    ], ResultSortOut);
    return ResultSortOut;
}(cc.Component));
exports.default = ResultSortOut;

cc._RF.pop();