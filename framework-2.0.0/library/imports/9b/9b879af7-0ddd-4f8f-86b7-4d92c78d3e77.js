"use strict";
cc._RF.push(module, '9b879r3Dd1Pj4a3TZLHjT53', 'ServerEventType');
// script/Framework/Listener/Enum/ServerEventType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerEventType = void 0;
var ServerEventType;
(function (ServerEventType) {
    /**
     *  一般獲獎回傳
     */
    ServerEventType["BET_RESULT"] = "BET_RESULT";
    /**
     * 免費模式獲獎
     */
    ServerEventType["FREE_SPIN_RESULT"] = "FREE_SPIN_RESULT";
    /**
     * 底層進遊戲 通知Loading頁面 可以顯示主遊戲場景
     */
    ServerEventType["CAN_PLAY_GAME"] = "CAN_PLAY_GAME";
    /**
     * 獲取遊戲歷史結果
     */
    ServerEventType["GET_GAME_HISTORY_RESULT"] = "GET_GAME_HISTORY_RESULT";
    /**
     * 獲取遊戲祥單
     */
    ServerEventType["GET_HISTORY_DETAIL_RESULT"] = "GET_HISTORY_DETAIL_RESULT";
    /**
     * 該局遊戲序號
     */
    ServerEventType["GROUP_ID"] = "GROUP_ID";
    /**
     * 進入遊戲後初始資訊
     */
    ServerEventType["TABLE_INFO"] = "TABLE_INFO";
    /**
     * 各種錯誤訊息
     */
    ServerEventType["WARNING"] = "WARNING";
})(ServerEventType = exports.ServerEventType || (exports.ServerEventType = {}));

cc._RF.pop();