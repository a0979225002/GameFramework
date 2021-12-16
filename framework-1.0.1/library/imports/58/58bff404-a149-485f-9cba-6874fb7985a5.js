"use strict";
cc._RF.push(module, '58bffQEoUlIX5y6aHT7eYWl', 'FreeProcessTest');
// Test/GameProcess/FreeProcessTest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameState_1 = require("../../script/Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../script/Framework/Process/SlotGameManager");
var ResponseType_1 = require("../../script/Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../script/Framework/WebResponse/WebResponseManager");
var Socket_1 = require("../../script/Socket/Socket");
/**
 * @Author XIAO-LI-PIN
 * @Description (測試)直接跳過所有一般模式,直到server回傳下局是free模式時,更改遊戲流程為正常狀態free流程
 * @Date 2021-05-17 下午 05:00
 * @Version 1.0
 */
var FreeProcessTest = /** @class */ (function () {
    function FreeProcessTest() {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
    }
    FreeProcessTest.prototype.onCreate = function () {
        return new Promise(function (resolve) {
            Socket_1.socketJS.SFSToServer("Bet", SlotGameManager_1.default.instance.userBetPoint);
            var a = setInterval(function () {
                if (SlotGameManager_1.default.instance.isResultOk) {
                    clearInterval(a);
                    resolve();
                }
            }, 0.5);
        });
    };
    FreeProcessTest.prototype.onEnd = function () {
        return Promise.resolve(undefined);
    };
    FreeProcessTest.prototype.onExecution = function () {
        return Promise.resolve(undefined);
    };
    FreeProcessTest.prototype.onChangeStatus = function () {
        //如果一般模式中response的免費次數不等於0,進入free狀態
        if (this.normalResult.FreeSpinCount > 0) {
            SlotGameManager_1.default.instance.gameState = GameState_1.GameState.FREEING;
            SlotGameManager_1.default.instance.changeProcess(GameState_1.GameType.FREE);
            return;
        }
    };
    return FreeProcessTest;
}());
exports.default = FreeProcessTest;

cc._RF.pop();