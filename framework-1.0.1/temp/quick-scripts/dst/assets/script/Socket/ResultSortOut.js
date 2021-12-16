
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Socket/ResultSortOut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb2NrZXRcXFJlc3VsdFNvcnRPdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTBEO0FBQzFELDhFQUEwRTtBQUMxRSxtRUFBNkQ7QUFDN0QsaUhBQTRHO0FBQzVHLDZDQUF3QztBQUN4QyxtQ0FBaUM7QUFDakMsaURBQTRDO0FBRXJDLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQTJDLGlDQUFZO0lBQXZEOztJQStMQSxDQUFDO3NCQS9Mb0IsYUFBYTtJQUlwQiw4QkFBTSxHQUFoQjtRQUNJLGVBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFFSyxpQ0FBUyxHQUFmLFVBQWdCLElBQVk7Ozs7Ozt3QkFDaEIsS0FBQSxJQUFJLENBQUE7O2lDQUNILFlBQVksQ0FBQyxDQUFiLHdCQUFZO2lDQUlaLHFCQUFxQixDQUFDLENBQXRCLHdCQUFxQjtpQ0FJckIsV0FBVyxDQUFDLENBQVosd0JBQVc7aUNBS1gscUJBQXFCLENBQUMsQ0FBdEIsd0JBQXFCO2lDQUlyQixhQUFhLENBQUMsQ0FBZCx3QkFBYTtpQ0FHYixXQUFXLENBQUMsQ0FBWix3QkFBVztpQ0FRWCxXQUFXLENBQUMsQ0FBWix3QkFBVztpQ0FVWCxnQkFBZ0IsQ0FBQyxDQUFqQix5QkFBZ0I7aUNBVWhCLHNCQUFzQixDQUFDLENBQXZCLHlCQUFzQjtpQ0FTdEIsd0JBQXdCLENBQUMsQ0FBekIseUJBQXdCO2lDQVN4QixTQUFTLENBQUMsQ0FBVix5QkFBUztpQ0FRVCxXQUFXLENBQUMsQ0FBWix5QkFBVztpQ0FDWCxTQUFTLENBQUMsQ0FBVix5QkFBUztpQ0FNVCxjQUFjLENBQUMsQ0FBZix5QkFBYzs7Ozt3QkFoRmYscUJBQVcsQ0FBQyxLQUFLLEdB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O29CQUNMLENBQUMsQ0FBQyxFQUFBOzs7S0FDTDs7SUE5TGdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0ErTGpDO0lBQUQsb0JBQUM7Q0EvTEQsQUErTEMsQ0EvTDBDLEVBQUUsQ0FBQyxTQUFTLEdBK0x0RDtrQkEvTG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gJy4uL0ZyYW1ld29yay9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCB7U2VydmVyRXZlbnRUeXBlfSBmcm9tICcuLi9GcmFtZXdvcmsvTGlzdGVuZXIvRW51bS9TZXJ2ZXJFdmVudFR5cGUnXHJcbmltcG9ydCBFdmVudE1hbmFnZXIgZnJvbSAnLi4vRnJhbWV3b3JrL0xpc3RlbmVyL0V2ZW50TWFuYWdlcidcclxuaW1wb3J0IFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vRnJhbWV3b3JrL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IFB1YmxpY1NldFVwIGZyb20gXCIuL1B1YmxpY1NldFVwXCI7XHJcbmltcG9ydCB7c29ja2V0SlN9IGZyb20gJy4vU29ja2V0J1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tIFwiLi9Tb2NrZXRTZXR0aW5nXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0U29ydE91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBpbnN0YW5jZTogUmVzdWx0U29ydE91dDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIFNGU1RvR2FtZShfY21kOiBzdHJpbmcpIHtcclxuICAgICAgICBzd2l0Y2ggKF9jbWQpIHtcclxuICAgICAgICAgICAgY2FzZSBcIk1lbWJlckluZm9cIjovL+aykueUqFxyXG4gICAgICAgICAgICAgICAgUHVibGljU2V0VXAuUmF0aW8gPSBTb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5SYXRpbztcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhQdWJsaWNTZXRVcC5SYXRpbyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkdhbWVMb2JieUluZm9SZXN1bHRcIjovL+aykueUqFxyXG4gICAgICAgICAgICAgICAgUHVibGljU2V0VXAuR2FtZUxvYmJ5TmFtZSA9IFNvY2tldFNldHRpbmcuU2VydmVyUmV0dXJuRGF0YVtfY21kXS5HYW1lTG9iYnlOYW1lO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKCBQdWJsaWNTZXRVcC5HYW1lTG9iYnlOYW1lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR2FtZUxvYmJ5XCI6ICAvL+W6leWxpOmAsuWkp+W7syDpgJrnn6XpgYrmiLLpoa/npLrlpKflu7NcclxuICAgICAgICAgICAgICAgIFB1YmxpY1NldFVwLlNsb3RUYWJsZUluZm9bXCJHYW1lSURcIl0gPSBTb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJHYW1lR3JvdXBJRDtcclxuICAgICAgICAgICAgICAgIFB1YmxpY1NldFVwLlNsb3RUYWJsZUluZm9bXCJCZXRMb2JieVwiXSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0SlMuU0ZTVG9TZXJ2ZXIoXCJTbG90VGFibGVJbmZvXCIsIFB1YmxpY1NldFVwLlNsb3RUYWJsZUluZm8pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJTbG90VGFibGVJbmZvUmVzdWx0XCI6XHJcbiAgICAgICAgICAgICAgICBQdWJsaWNTZXRVcC5Kb2luUm9vbSA9IFNvY2tldFNldHRpbmcuU2VydmVyUmV0dXJuRGF0YVtfY21kXS5UYWJsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRKUy5TRlNKb2luUm9vbShQdWJsaWNTZXRVcC5Kb2luUm9vbSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkNhblBsYXlHYW1lXCI6IC8vIOW6leWxpOmAsumBiuaIsiDpgJrnn6VHYW1lTG9hZGluZy5qcyDlj6/ku6Xpoa/npLrkuLvpgYrmiLLloLTmma9cclxuICAgICAgICAgICAgICAgIHNvY2tldEpTLlNGU1RvU2VydmVyKFwiVGFibGVcIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlRhYmxlSW5mb1wiOlxyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiVGFibGVJbmZvOlwiLCBTb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGFbX2NtZF0pO1xyXG4gICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNldEV2ZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlci5zZXJ2ZXJUYXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmVyRXZlbnRUeXBlLlRBQkxFX0lORk8sXHJcbiAgICAgICAgICAgICAgICAgICAgU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCZXRSZXN1bHRcIjovL+mhjeWkluaWsOWinuWIpOaWt1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX2NtZCwgU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdKTtcclxuICAgICAgICAgICAgICAgIGxldCBiZXREYXRhOiBvYmplY3QgPSBTb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGFbX2NtZF07XHJcbiAgICAgICAgICAgICAgICBsZXQgYmV0U3RhdGU6IG51bWJlciA9IHBhcnNlSW50KFNvY2tldFNldHRpbmcuU2VydmVyUmV0dXJuRGF0YVtfY21kXS5TdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYmV0U3RhdGUoYmV0U3RhdGUsIGJldERhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJGcmVlU3BpblJlc3VsdFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coX2NtZCwgU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdKTtcclxuICAgICAgICAgICAgICAgIGxldCBmcmVlRGF0YTogb2JqZWN0ID0gU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZyZWVTdGF0ZTogbnVtYmVyID0gcGFyc2VJbnQoU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdLlN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5mcmVlU3RhdGUoZnJlZVN0YXRlLCBmcmVlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkdldEdhbWVIaXN0b3J5UmVzdWx0XCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZ2FtZUhpc3RvcnlEYXRhID0gU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiR2V0R2FtZUhpc3RvcnlSZXN1bHQ6XCIsIGdhbWVIaXN0b3J5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uuc2V0RXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnNlcnZlclRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2ZXJFdmVudFR5cGUuR0VUX0dBTUVfSElTVE9SWV9SRVNVTFQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUhpc3RvcnlEYXRhXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkdldEhpc3RvcnlEZXRhaWxSZXN1bHRcIjpcclxuICAgICAgICAgICAgICAgIGxldCBoaXN0b3J5RGV0YWlsID0gU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiR2V0SGlzdG9yeURldGFpbFJlc3VsdDpcIiwgaGlzdG9yeURldGFpbCk7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uuc2V0RXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnNlcnZlclRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2ZXJFdmVudFR5cGUuR0VUX0hJU1RPUllfREVUQUlMX1JFU1VMVCxcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5RGV0YWlsXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkdyb3VwSURcIjpcclxuICAgICAgICAgICAgICAgIGxldCBncm91cElEID0gU29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW19jbWRdLkdyb3VwSUQ7XHJcbiAgICAgICAgICAgICAgICBFdmVudE1hbmFnZXIuaW5zdGFuY2Uuc2V0RXZlbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgRXZlbnRNYW5hZ2VyLnNlcnZlclRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2ZXJFdmVudFR5cGUuR1JPVVBfSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJRFxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJHYW1lQ2xvc2VcIjpcclxuICAgICAgICAgICAgY2FzZSBcIldhcm5pbmdcIjpcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JTdHIgPSBTb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yTWVzc2FnZShlcnJvclN0cik7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJVcGRhdGVQb2ludHNcIjpcclxuICAgICAgICAgICAgICAgIGxldCB1c2VyUG9pbnQgPSBTb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGFbX2NtZF0uUG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgLy/nlKjmiLboh6rooYzmm7TmlrDpgYrnjqnph5HpoY3mmYIs5o6o5pKt5pu05paw6YeR6aGN5LqL5Lu2XHJcbiAgICAgICAgICAgICAgICBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KHVzZXJQb2ludCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlrfnlbbliY3pjK/oqqTni4DmhYss6aGv56S655u45bCN5oeJ55qE6Yyv6Kqk6KiK5oGvXHJcbiAgICAgKi9cclxuICAgIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JTdHI6IHN0cmluZykge1xyXG4gICAgICAgIC8vIOW4s+iZn+mHjeikh+eZu+WFpeaIluaYr+eEoeWbnummlumggee2suWdgCDmjInpiJXmloflrZfpoa/npLrngrpcIueiuuWumlwiXHJcbiAgICAgICAgc3dpdGNoIChlcnJvclN0cikge1xyXG4gICAgICAgICAgICBjYXNlIFNvY2tldFNldHRpbmcudChcIlNfOTAyM1wiKTpcclxuICAgICAgICAgICAgY2FzZSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwMjRcIik6XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAuc2VydmVyRXJyb3IodHJ1ZSwgZXJyb3JTdHIsIFNvY2tldFNldHRpbmcudChcIjU0XzA0MlwiKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwMjlcIik6XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAuc2VydmVyRXJyb3IodHJ1ZSwgZXJyb3JTdHIsIFNvY2tldFNldHRpbmcudChcIjU0XzA0MlwiKSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNvY2tldFNldHRpbmcudChcIlNfOTAzMVwiKTpcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6YeN6KSH55m75YWlLOWPjeWbnuWkp+W7s1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TRlNUb0dhbWUoXCJHYW1lTG9iYnlcIikudGhlbigpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQgOlxyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgLnNlcnZlckVycm9yKHRydWUsIGVycm9yU3RyLCBTb2NrZXRTZXR0aW5nLnQoXCJCXzEwMDFcIikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy/liKTmlrfnlbbliY3mirzms6jni4DmhYss6aGv56S65ZCE56iu6Yyv6KqkLOWmguaenCA9IDAg5YmH57m857qM6YGK5oiyXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn1iZXRTdGF0ZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9YmV0RGF0YVxyXG4gICAgICogQHJldHVybiBib29sZWFuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGJldFN0YXRlKGJldFN0YXRlOiBudW1iZXIsIGJldERhdGE6IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYmV0U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgLTE6Ly/ph43opIfmirzms6hcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoXCJiZXQg6YeN6KSH5oq85rOoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwIDovL+aKvOazqOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEV2ZW50KEV2ZW50TWFuYWdlci5zZXJ2ZXJUYXJnZXQsIFNlcnZlckV2ZW50VHlwZS5CRVRfUkVTVUxULCBiZXREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+eUqOaItuS4i+azqOW+jOeahOmHkemhjSzmjqjmkq3mm7TmlrBcclxuICAgICAgICAgICAgICAgICAgICBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KGJldERhdGFbXCJVc2VyUG9pbnRCZWZvcmVcIl0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgMiA6Ly/otoXpgY7mnKzph5Eo6YCZ6KOh5Y+q5piv5LiA5YCL5L+d6Zqq5qmf5Yi2LOmcgOimgeWFiOWcqOWCs+mAgeWwgeWMheWJjeWwseWFiOaTi+aOiemBv+WFjeWCs+WwgeWMhSlcclxuICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmluc3RhbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZXJ2ZXJFcnJvcih0cnVlLCBTb2NrZXRTZXR0aW5nLnQoXCJTXzkwMDNcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcImJldCDotoXpgY7mnKzph5Eo6YCZ6KOh5Y+q5piv5LiA5YCL5L+d6Zqq5qmf5Yi2LOmcgOimgeWFiOWcqOWCs+mAgeWwgeWMheWJjeWwseWFiOaTi+aOiemBv+WFjeWCs+WwgeWMhSlcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0Oi8vKDE66YGK5oiy54uA5oWL5LiN56ym5ZCILDM65oqV5rOo5Y2A6ZaT6Yyv6KqkLDQ65oqV5rOo5Y+D5pW46Yyv6KqkKVxyXG4gICAgICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlcnZlckVycm9yKHRydWUsIFNvY2tldFNldHRpbmcudChcIlNfOTAxNVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGBiZXQg6YGK5oiy54uA5oWL5LiN56ym5ZCIIDog54uA5oWLID0gKCR7YmV0U3RhdGV9KWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIC8v5Yik5pa355W25YmN5oq85rOo54uA5oWLLOmhr+ekuuWQhOeorumMr+iqpCzlpoLmnpwgPSAwIOWJh+e5vOe6jOmBiuaIslxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9ZnJlZVN0YXRlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH1mcmVlRGF0YVxyXG4gICAgICogQHJldHVybiBib29sZWFuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGZyZWVTdGF0ZShmcmVlU3RhdGU6IG51bWJlciwgZnJlZURhdGE6IG9iamVjdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZyZWVTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAtMTovL+mHjeikh+aKvOazqFxyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChcImZyZWUg6YeN6KSH5oq85rOoXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwIDovL+aKvOazqOaIkOWKn1xyXG4gICAgICAgICAgICAgICAgICAgIEV2ZW50TWFuYWdlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5zdGFuY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNldEV2ZW50KEV2ZW50TWFuYWdlci5zZXJ2ZXJUYXJnZXQsIFNlcnZlckV2ZW50VHlwZS5GUkVFX1NQSU5fUkVTVUxULCBmcmVlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6Ly8oMTrpgYrmiLLni4DmhYvkuI3nrKblkIgsMzrmipXms6jljYDplpPpjK/oqqQsNDrmipXms6jlj4PmlbjpjK/oqqQpXHJcbiAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5pbnN0YW5jZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VydmVyRXJyb3IodHJ1ZSwgU29ja2V0U2V0dGluZy50KFwiU185MDE1XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoYGZyZWUg6YGK5oiy54uA5oWL5LiN56ym5ZCIIDog54uA5oWLID0gKCR7ZnJlZVN0YXRlfSlgKVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG4iXX0=