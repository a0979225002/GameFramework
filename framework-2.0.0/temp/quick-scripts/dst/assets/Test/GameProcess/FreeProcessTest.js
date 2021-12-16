
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Test/GameProcess/FreeProcessTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdFxcR2FtZVByb2Nlc3NcXEZyZWVQcm9jZXNzVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFrRjtBQUNsRixrRkFBNkU7QUFDN0UscUZBQWtGO0FBRWxGLDRGQUF5RjtBQUN6RixxREFBb0Q7QUFFcEQ7Ozs7O0dBS0c7QUFDSDtJQUlJO1FBQ0ksSUFBSSxDQUFDLFlBQVk7WUFDYix1Q0FBa0I7aUJBQ2pCLFFBQVEsRUFBZ0I7aUJBQ3BCLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDdEIsaUJBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxHQUFHLFdBQVcsQ0FBQztnQkFDaEIsSUFBSSx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7b0JBQ3JDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDakIsT0FBTyxFQUFFLENBQUM7aUJBQ2I7WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwrQkFBSyxHQUFMO1FBQ0ksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3JDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQztZQUN2RCx5QkFBZSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RCxPQUFPO1NBQ1Y7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQXZDQSxBQXVDQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHYW1lU3RhdGUsIEdhbWVUeXBlfSBmcm9tIFwiLi4vLi4vc2NyaXB0L0ZyYW1ld29yay9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9zY3JpcHQvRnJhbWV3b3JrL1dlYlJlc3BvbnNlL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCBOb0xpbmVSZXN1bHQgZnJvbSBcIi4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvTm9ybWFsUmVzdWx0L05vTGluZVJlc3VsdFwiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSBcIi4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7c29ja2V0SlN9IGZyb20gXCIuLi8uLi9zY3JpcHQvU29ja2V0L1NvY2tldFwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uICjmuKzoqaYp55u05o6l6Lez6YGO5omA5pyJ5LiA6Iis5qih5byPLOebtOWIsHNlcnZlcuWbnuWCs+S4i+WxgOaYr2ZyZWXmqKHlvI/mmYIs5pu05pS56YGK5oiy5rWB56iL54K65q2j5bi454uA5oWLZnJlZea1geeoi1xyXG4gKiBARGF0ZSAyMDIxLTA1LTE3IOS4i+WNiCAwNTowMFxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZyZWVQcm9jZXNzVGVzdCBpbXBsZW1lbnRzIElHYW1lUHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVye1xyXG5cclxuICAgIHByaXZhdGUgbm9ybWFsUmVzdWx0IDpJTm9MaW5lUmVzdWx0TW9kZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxSZXN1bHQgPVxyXG4gICAgICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuTk9STUFMKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldEpTLlNGU1RvU2VydmVyKFwiQmV0XCIsIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQpO1xyXG4gICAgICAgICAgICBsZXQgYSA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuaXNSZXN1bHRPaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW5kKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4ZWN1dGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTdGF0dXMoKSB7XHJcbiAgICAgICAgLy/lpoLmnpzkuIDoiKzmqKHlvI/kuK1yZXNwb25zZeeahOWFjeiyu+asoeaVuOS4jeetieaWvDAs6YCy5YWlZnJlZeeLgOaFi1xyXG4gICAgICAgIGlmICh0aGlzLm5vcm1hbFJlc3VsdC5GcmVlU3BpbkNvdW50ID4gMCkge1xyXG4gICAgICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLkZSRUVJTkc7XHJcbiAgICAgICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5jaGFuZ2VQcm9jZXNzKEdhbWVUeXBlLkZSRUUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==