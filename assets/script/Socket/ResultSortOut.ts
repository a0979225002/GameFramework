import ErrorManager from '../Framework/Error/ErrorManager'
import {ServerEventType} from '../Framework/Listener/Enum/ServerEventType'
import EventManager from '../Framework/Listener/EventManager'
import UserMoneyChangeNotification from "../Framework/Process/GameNotification/UserMoneyChangeNotification";
import PublicSetUp from "./PublicSetUp";
import {socketJS} from './Socket'
import SocketSetting from "./SocketSetting";

const {ccclass} = cc._decorator;

@ccclass
export default class ResultSortOut extends cc.Component {

    public static instance: ResultSortOut;

    protected onLoad() {
        ResultSortOut.instance = this;
    }

    async SFSToGame(_cmd: string) {
        switch (_cmd) {
            case "MemberInfo":
                PublicSetUp.Ratio = SocketSetting.ClientSetObject.Ratio;
                cc.log(PublicSetUp.Ratio);
                break;
            case "GameLobbyInfoResult":
                PublicSetUp.GameLobbyName = SocketSetting.ServerReturnData[_cmd].GameLobbyName;
                cc.log( PublicSetUp.GameLobbyName);
                break;
            case "GameLobby":  // 底層進大廳 通知遊戲顯示大廳

                PublicSetUp.SlotTableInfo["GameID"] = SocketSetting.ClientSetObject.serverGameGroupID;
                PublicSetUp.SlotTableInfo["BetLobby"] = "1";
                socketJS.SFSToServer("SlotTableInfo", PublicSetUp.SlotTableInfo);
                break;
            case "SlotTableInfoResult":

                PublicSetUp.JoinRoom = SocketSetting.ServerReturnData[_cmd].TableName;
                socketJS.SFSJoinRoom(PublicSetUp.JoinRoom);

                break;
            case "CanPlayGame": // 底層進遊戲 通知GameLoading.js 可以顯示主遊戲場景
                socketJS.SFSToServer("Table", "");
                break;
            case "TableInfo":
                cc.log("TableInfo:", SocketSetting.ServerReturnData[_cmd]);
                EventManager.instance.setEvent(
                    EventManager.serverTarget,
                    ServerEventType.TABLE_INFO,
                    SocketSetting.ServerReturnData[_cmd]
                );
                break;
            case "BetResult"://額外新增判斷
                console.log(_cmd, SocketSetting.ServerReturnData[_cmd]);
                let betData: object = SocketSetting.ServerReturnData[_cmd];
                let betState: number = parseInt(SocketSetting.ServerReturnData[_cmd].State);
                try {
                    await this.betState(betState, betData);
                } catch (e) {
                    console.log(e);
                }
                break;
            case "FreeSpinResult":
                console.log(_cmd, SocketSetting.ServerReturnData[_cmd]);
                let freeData: object = SocketSetting.ServerReturnData[_cmd];
                let freeState: number = parseInt(SocketSetting.ServerReturnData[_cmd].State);
                try {
                    await this.freeState(freeState, freeData);
                } catch (e) {
                    console.log(e);
                }
                break;
            case "GetGameHistoryResult":
                let gameHistoryData = SocketSetting.ServerReturnData[_cmd];
                cc.log("GetGameHistoryResult:", gameHistoryData);
                EventManager.instance.setEvent(
                    EventManager.serverTarget,
                    ServerEventType.GET_GAME_HISTORY_RESULT,
                    gameHistoryData
                )
                break;
            case "GetHistoryDetailResult":
                let historyDetail = SocketSetting.ServerReturnData[_cmd];
                cc.log("GetHistoryDetailResult:", historyDetail);
                EventManager.instance.setEvent(
                    EventManager.serverTarget,
                    ServerEventType.GET_HISTORY_DETAIL_RESULT,
                    historyDetail
                )
                break;
            case "GroupID":
                let groupID = SocketSetting.ServerReturnData[_cmd].GroupID;
                EventManager.instance.setEvent(
                    EventManager.serverTarget,
                    ServerEventType.GROUP_ID,
                    groupID
                )
                break;
            case "GameClose":
            case "Warning":

                let errorStr = SocketSetting.ClientSetObject.WarningText;
                this.showErrorMessage(errorStr);

                break;
            case "UpdatePoints":
                let userPoint = SocketSetting.ServerReturnData[_cmd].Points;
                //用戶自行更新遊玩金額時,推播更新金額事件
                UserMoneyChangeNotification.instance.notify(userPoint);
                break;
        }
    }

    /**
     * 判斷當前錯誤狀態,顯示相對應的錯誤訊息
     */
    showErrorMessage(errorStr: string) {
        // 帳號重複登入或是無回首頁網址 按鈕文字顯示為"確定"
        switch (errorStr) {
            case SocketSetting.t("S_9023"):
            case SocketSetting.t("S_9024"):
                ErrorManager
                    .instance
                    .serverError(true, errorStr, SocketSetting.t("54_042"));
                break;
            case SocketSetting.t("S_9029"):
                ErrorManager
                    .instance
                    .serverError(true, errorStr, SocketSetting.t("54_042"))
                break;
            case SocketSetting.t("S_9031"):
                //如果重複登入,反回大廳
                this.SFSToGame("GameLobby").then();
                break;
            default :
                ErrorManager
                    .instance
                    .serverError(true, errorStr, SocketSetting.t("B_1001"))
        }
    }

    /**
     * //判斷當前押注狀態,顯示各種錯誤,如果 = 0 則繼續遊戲
     * @param {number}betState
     * @param {object}betData
     * @return boolean
     */
    async betState(betState: number, betData: object): Promise<boolean> {
        return new Promise((resolve, reject) => {
            switch (betState) {
                case -1://重複押注
                    reject("bet 重複押注");
                    break;
                case 0 ://押注成功
                    EventManager
                        .instance
                        .setEvent(EventManager.serverTarget, ServerEventType.BET_RESULT, betData);
                    //用戶下注後的金額,推播更新
                    UserMoneyChangeNotification.instance.notify(betData["UserPointBefore"])
                    resolve(true);
                    break;
                case 2 ://超過本金(這裡只是一個保險機制,需要先在傳送封包前就先擋掉避免傳封包)
                    ErrorManager
                        .instance
                        .serverError(true, SocketSetting.t("S_9003"));
                    reject("bet 超過本金(這裡只是一個保險機制,需要先在傳送封包前就先擋掉避免傳封包)");
                    break;
                default://(1:遊戲狀態不符合,3:投注區間錯誤,4:投注參數錯誤)
                    ErrorManager
                        .instance
                        .serverError(true, SocketSetting.t("S_9015"));
                    reject(`bet 遊戲狀態不符合 : 狀態 = (${betState})`);
                    break;
            }
        })
    }

    /**
     * //判斷當前押注狀態,顯示各種錯誤,如果 = 0 則繼續遊戲
     * @param {number}freeState
     * @param {object}freeData
     * @return boolean
     */
    async freeState(freeState: number, freeData: object): Promise<boolean> {

        return new Promise((resolve, reject) => {
            switch (freeState) {
                case -1://重複押注
                    reject("free 重複押注");
                    break;
                case 0 ://押注成功
                    EventManager
                        .instance
                        .setEvent(EventManager.serverTarget, ServerEventType.FREE_SPIN_RESULT, freeData);
                    resolve(true);
                    break;
                default://(1:遊戲狀態不符合,3:投注區間錯誤,4:投注參數錯誤)
                    ErrorManager
                        .instance
                        .serverError(true, SocketSetting.t("S_9015"));
                    reject(`free 遊戲狀態不符合 : 狀態 = (${freeState})`)
                    break;
            }
        })
    }
}