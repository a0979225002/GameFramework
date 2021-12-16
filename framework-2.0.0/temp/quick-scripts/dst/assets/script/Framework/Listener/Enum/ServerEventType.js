
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Listener/Enum/ServerEventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExpc3RlbmVyXFxFbnVtXFxTZXJ2ZXJFdmVudFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBWSxlQXdDWDtBQXhDRCxXQUFZLGVBQWU7SUFDdkI7O09BRUc7SUFDSCw0Q0FBeUIsQ0FBQTtJQUV6Qjs7T0FFRztJQUNILHdEQUFxQyxDQUFBO0lBRXJDOztPQUVHO0lBQ0gsa0RBQStCLENBQUE7SUFFL0I7O09BRUc7SUFDSCxzRUFBbUQsQ0FBQTtJQUVuRDs7T0FFRztJQUNILDBFQUF1RCxDQUFBO0lBRXZEOztPQUVHO0lBQ0gsd0NBQXFCLENBQUE7SUFFckI7O09BRUc7SUFDSCw0Q0FBeUIsQ0FBQTtJQUV6Qjs7T0FFRztJQUNILHNDQUFtQixDQUFBO0FBQ3ZCLENBQUMsRUF4Q1csZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUF3QzFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU2VydmVyRXZlbnRUeXBlIHtcclxuICAgIC8qKlxyXG4gICAgICogIOS4gOiIrOeNsueNjuWbnuWCs1xyXG4gICAgICovXHJcbiAgICBCRVRfUkVTVUxUID0gXCJCRVRfUkVTVUxUXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlhY3osrvmqKHlvI/njbLnjY5cclxuICAgICAqL1xyXG4gICAgRlJFRV9TUElOX1JFU1VMVCA9IFwiRlJFRV9TUElOX1JFU1VMVFwiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bqV5bGk6YCy6YGK5oiyIOmAmuefpUxvYWRpbmfpoIHpnaIg5Y+v5Lul6aGv56S65Li76YGK5oiy5aC05pmvXHJcbiAgICAgKi9cclxuICAgIENBTl9QTEFZX0dBTUUgPSBcIkNBTl9QTEFZX0dBTUVcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPlumBiuaIsuatt+WPsue1kOaenFxyXG4gICAgICovXHJcbiAgICBHRVRfR0FNRV9ISVNUT1JZX1JFU1VMVCA9IFwiR0VUX0dBTUVfSElTVE9SWV9SRVNVTFRcIixcclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPlumBiuaIsuelpeWWrlxyXG4gICAgICovXHJcbiAgICBHRVRfSElTVE9SWV9ERVRBSUxfUkVTVUxUID0gXCJHRVRfSElTVE9SWV9ERVRBSUxfUkVTVUxUXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqbLlsYDpgYrmiLLluo/omZ9cclxuICAgICAqL1xyXG4gICAgR1JPVVBfSUQgPSBcIkdST1VQX0lEXCIsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgLLlhaXpgYrmiLLlvozliJ3lp4vos4foqIpcclxuICAgICAqL1xyXG4gICAgVEFCTEVfSU5GTyA9IFwiVEFCTEVfSU5GT1wiLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ZCE56iu6Yyv6Kqk6KiK5oGvXHJcbiAgICAgKi9cclxuICAgIFdBUk5JTkcgPSBcIldBUk5JTkdcIixcclxufSJdfQ==