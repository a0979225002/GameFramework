
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5072dcZZhNFq4vGAaj42O9c', 'MainConfig');
// script/MainConfig.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var ccclass = cc._decorator.ccclass;
var ConfigEnum_1 = require("./Framework/Config/Enum/ConfigEnum");
var SlotConfigManager_1 = require("./Framework/Config/SlotConfigManager");
var ASlotConfig_1 = require("./Framework/Template/Config/ASlotConfig");
var ResponseType_1 = require("./Framework/WebResponse/Enum/ResponseType");
var ResponseHandler_1 = require("./Framework/WebResponse/ResponseHandler");
var NoLineFreeResult_1 = require("./Framework/WebResponse/SeverDataModel/FreeResult/NoLineFreeResult");
var NoLineResult_1 = require("./Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult");
var NoLineTableInfo_1 = require("./Framework/WebResponse/SeverDataModel/TableInfo/NoLineTableInfo");
var WebResponseManager_1 = require("./Framework/WebResponse/WebResponseManager");
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲載入資源前,對整個遊戲的初始簡易設定
 * @Date 2021-06-01 下午 04:57
 * @Version 1.0
 */
var MainConfig = /** @class */ (function (_super) {
    __extends(MainConfig, _super);
    function MainConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainConfig.prototype.onCreat = function () {
    };
    /**
     * 初始化當前遊戲
     */
    MainConfig.prototype.configSetting = function () {
        SlotConfigManager_1.default.instance
            .setAutoCont(ConfigEnum_1.AutoType.auto) //初始自動次數 AutoType Enum
            .setAutoState(false) //自動開關
            .setUserBet(0) //初始玩家押注倍率
            .setSpeedState(false) //加速開關
            .setMusicOnMute(false) //是否關閉背景音
            .setEffectOnMute(false) //是否關閉效果音
            .setGameNumber(84) //遊戲名稱
            .setMusicVolume(1) //初始默認背景音量
            .setEffectVolume(1) //初始默認效果音量
            .setLanguage(ConfigEnum_1.LanguageType.America) //測試時才有用,當有PHP檔案蓋過WebRequest類時此參數將自動失效
            .setExternallyLoadURL("http://10.10.0.47/games") //同上
            .setFrameWorkDebug(true) //正式上線時關閉
            .builder();
    };
    /**
     * 遊戲network response model;
     */
    MainConfig.prototype.ResponseDataModelSetting = function () {
        //初始化一般狀態json接收保存model
        var normalResponse = new ResponseHandler_1.default(NoLineResult_1.default);
        //初始化免費狀態json接收保存model
        var freeResponse = new ResponseHandler_1.default(NoLineFreeResult_1.default);
        //初始化遊戲初始資訊json接收保存model
        var tableInfoResponse = new ResponseHandler_1.default(NoLineTableInfo_1.default);
        WebResponseManager_1.WebResponseManager
            .instance()
            .setResponseModule(ResponseType_1.ResponseType.NORMAL, normalResponse);
        WebResponseManager_1.WebResponseManager
            .instance()
            .setResponseModule(ResponseType_1.ResponseType.FREE, freeResponse);
        WebResponseManager_1.WebResponseManager
            .instance()
            .setResponseModule(ResponseType_1.ResponseType.TABLE_INFO, tableInfoResponse);
    };
    MainConfig = __decorate([
        ccclass
    ], MainConfig);
    return MainConfig;
}(ASlotConfig_1.default));
exports.default = MainConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLGlFQUEwRTtBQUMxRSwwRUFBcUU7QUFDckUsdUVBQWtFO0FBQ2xFLDBFQUF1RTtBQUN2RSwyRUFBc0U7QUFDdEUsdUdBQWtHO0FBQ2xHLGlHQUE0RjtBQUM1RixvR0FBK0Y7QUFDL0YsaUZBQThFO0FBRTlFOzs7OztHQUtHO0FBRUg7SUFBd0MsOEJBQVc7SUFBbkQ7O0lBOENBLENBQUM7SUE3Q2EsNEJBQU8sR0FBakI7SUFDQSxDQUFDO0lBRUQ7O09BRUc7SUFDTyxrQ0FBYSxHQUF2QjtRQUNJLDJCQUFpQixDQUFDLFFBQVE7YUFDckIsV0FBVyxDQUFDLHFCQUFRLENBQUMsSUFBSSxDQUFDLENBQXlCLHNCQUFzQjthQUN6RSxZQUFZLENBQUMsS0FBSyxDQUFDLENBQWdDLE1BQU07YUFDekQsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFzQyxVQUFVO2FBQzdELGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBK0IsTUFBTTthQUN6RCxjQUFjLENBQUMsS0FBSyxDQUFDLENBQThCLFNBQVM7YUFDNUQsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUE2QixTQUFTO2FBQzVELGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBa0MsTUFBTTthQUN6RCxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQWtDLFVBQVU7YUFDN0QsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFpQyxVQUFVO2FBQzdELFdBQVcsQ0FBQyx5QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFrQixzQ0FBc0M7YUFDekYsb0JBQW9CLENBQUMseUJBQXlCLENBQUMsQ0FBSSxJQUFJO2FBQ3ZELGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUEyQixTQUFTO2FBQzNELE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNPLDZDQUF3QixHQUFsQztRQUVJLHNCQUFzQjtRQUN0QixJQUFJLGNBQWMsR0FBRyxJQUFJLHlCQUFlLENBQWUsc0JBQVksQ0FBQyxDQUFDO1FBQ3JFLHNCQUFzQjtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLHlCQUFlLENBQW1CLDBCQUFnQixDQUFDLENBQUM7UUFDM0Usd0JBQXdCO1FBQ3hCLElBQUksaUJBQWlCLEdBQUcsSUFBSSx5QkFBZSxDQUFrQix5QkFBZSxDQUFDLENBQUM7UUFFOUUsdUNBQWtCO2FBQ2IsUUFBUSxFQUFnQjthQUN4QixpQkFBaUIsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztRQUM1RCx1Q0FBa0I7YUFDYixRQUFRLEVBQW9CO2FBQzVCLGlCQUFpQixDQUFDLDJCQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3hELHVDQUFrQjthQUNiLFFBQVEsRUFBbUI7YUFDM0IsaUJBQWlCLENBQUMsMkJBQVksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBN0NnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEM5QjtJQUFELGlCQUFDO0NBOUNELEFBOENDLENBOUN1QyxxQkFBVyxHQThDbEQ7a0JBOUNvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNjY2xhc3MgPSBjYy5fZGVjb3JhdG9yLmNjY2xhc3M7XHJcbmltcG9ydCB7QXV0b1R5cGUsIExhbmd1YWdlVHlwZX0gZnJvbSBcIi4vRnJhbWV3b3JrL0NvbmZpZy9FbnVtL0NvbmZpZ0VudW1cIjtcclxuaW1wb3J0IFNsb3RDb25maWdNYW5hZ2VyIGZyb20gXCIuL0ZyYW1ld29yay9Db25maWcvU2xvdENvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IEFTbG90Q29uZmlnIGZyb20gXCIuL0ZyYW1ld29yay9UZW1wbGF0ZS9Db25maWcvQVNsb3RDb25maWdcIjtcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgUmVzcG9uc2VIYW5kbGVyIGZyb20gXCIuL0ZyYW1ld29yay9XZWJSZXNwb25zZS9SZXNwb25zZUhhbmRsZXJcIjtcclxuaW1wb3J0IE5vTGluZUZyZWVSZXN1bHQgZnJvbSBcIi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL0ZyZWVSZXN1bHQvTm9MaW5lRnJlZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lUmVzdWx0IGZyb20gXCIuL0ZyYW1ld29yay9XZWJSZXNwb25zZS9TZXZlckRhdGFNb2RlbC9Ob3JtYWxSZXN1bHQvTm9MaW5lUmVzdWx0XCI7XHJcbmltcG9ydCBOb0xpbmVUYWJsZUluZm8gZnJvbSBcIi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL1RhYmxlSW5mby9Ob0xpbmVUYWJsZUluZm9cIjtcclxuaW1wb3J0IHtXZWJSZXNwb25zZU1hbmFnZXJ9IGZyb20gXCIuL0ZyYW1ld29yay9XZWJSZXNwb25zZS9XZWJSZXNwb25zZU1hbmFnZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiDpgYrmiLLovInlhaXos4fmupDliY0s5bCN5pW05YCL6YGK5oiy55qE5Yid5aeL57Ch5piT6Kit5a6aXHJcbiAqIEBEYXRlIDIwMjEtMDYtMDEg5LiL5Y2IIDA0OjU3XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbkNvbmZpZyBleHRlbmRzIEFTbG90Q29uZmlnIHtcclxuICAgIHByb3RlY3RlZCBvbkNyZWF0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW55W25YmN6YGK5oiyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBjb25maWdTZXR0aW5nKCkge1xyXG4gICAgICAgIFNsb3RDb25maWdNYW5hZ2VyLmluc3RhbmNlXHJcbiAgICAgICAgICAgIC5zZXRBdXRvQ29udChBdXRvVHlwZS5hdXRvKSAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+iHquWLleasoeaVuCBBdXRvVHlwZSBFbnVtXHJcbiAgICAgICAgICAgIC5zZXRBdXRvU3RhdGUoZmFsc2UpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iHquWLlemWi+mXnFxyXG4gICAgICAgICAgICAuc2V0VXNlckJldCgwKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vnjqnlrrbmirzms6jlgI3njodcclxuICAgICAgICAgICAgLnNldFNwZWVkU3RhdGUoZmFsc2UpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqg6YCf6ZaL6ZecXHJcbiAgICAgICAgICAgIC5zZXRNdXNpY09uTXV0ZShmYWxzZSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+aYr+WQpumXnOmWieiDjOaZr+mfs1xyXG4gICAgICAgICAgICAuc2V0RWZmZWN0T25NdXRlKGZhbHNlKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mmK/lkKbpl5zplonmlYjmnpzpn7NcclxuICAgICAgICAgICAgLnNldEdhbWVOdW1iZXIoODQpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YGK5oiy5ZCN56ixXHJcbiAgICAgICAgICAgIC5zZXRNdXNpY1ZvbHVtZSgxKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+m7mOiqjeiDjOaZr+mfs+mHj1xyXG4gICAgICAgICAgICAuc2V0RWZmZWN0Vm9sdW1lKDEpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4vpu5joqo3mlYjmnpzpn7Pph49cclxuICAgICAgICAgICAgLnNldExhbmd1YWdlKExhbmd1YWdlVHlwZS5BbWVyaWNhKSAgICAgICAgICAgICAgICAgIC8v5ris6Kmm5pmC5omN5pyJ55SoLOeVtuaciVBIUOaqlOahiOiTi+mBjldlYlJlcXVlc3TpoZ7mmYLmraTlj4PmlbjlsIfoh6rli5XlpLHmlYhcclxuICAgICAgICAgICAgLnNldEV4dGVybmFsbHlMb2FkVVJMKFwiaHR0cDovLzEwLjEwLjAuNDcvZ2FtZXNcIikgICAgLy/lkIzkuIpcclxuICAgICAgICAgICAgLnNldEZyYW1lV29ya0RlYnVnKHRydWUpICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mraPlvI/kuIrnt5rmmYLpl5zplolcclxuICAgICAgICAgICAgLmJ1aWxkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmBiuaIsm5ldHdvcmsgcmVzcG9uc2UgbW9kZWw7XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBSZXNwb25zZURhdGFNb2RlbFNldHRpbmcoKSB7XHJcblxyXG4gICAgICAgIC8v5Yid5aeL5YyW5LiA6Iis54uA5oWLanNvbuaOpeaUtuS/neWtmG1vZGVsXHJcbiAgICAgICAgbGV0IG5vcm1hbFJlc3BvbnNlID0gbmV3IFJlc3BvbnNlSGFuZGxlcjxOb0xpbmVSZXN1bHQ+KE5vTGluZVJlc3VsdCk7XHJcbiAgICAgICAgLy/liJ3lp4vljJblhY3osrvni4DmhYtqc29u5o6l5pS25L+d5a2YbW9kZWxcclxuICAgICAgICBsZXQgZnJlZVJlc3BvbnNlID0gbmV3IFJlc3BvbnNlSGFuZGxlcjxOb0xpbmVGcmVlUmVzdWx0PihOb0xpbmVGcmVlUmVzdWx0KTtcclxuICAgICAgICAvL+WIneWni+WMlumBiuaIsuWIneWni+izh+ioimpzb27mjqXmlLbkv53lrZhtb2RlbFxyXG4gICAgICAgIGxldCB0YWJsZUluZm9SZXNwb25zZSA9IG5ldyBSZXNwb25zZUhhbmRsZXI8Tm9MaW5lVGFibGVJbmZvPihOb0xpbmVUYWJsZUluZm8pO1xyXG5cclxuICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAuc2V0UmVzcG9uc2VNb2R1bGUoUmVzcG9uc2VUeXBlLk5PUk1BTCwgbm9ybWFsUmVzcG9uc2UpO1xyXG4gICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lRnJlZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAuc2V0UmVzcG9uc2VNb2R1bGUoUmVzcG9uc2VUeXBlLkZSRUUsIGZyZWVSZXNwb25zZSk7XHJcbiAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgIC5pbnN0YW5jZTxOb0xpbmVUYWJsZUluZm8+KClcclxuICAgICAgICAgICAgLnNldFJlc3BvbnNlTW9kdWxlKFJlc3BvbnNlVHlwZS5UQUJMRV9JTkZPLCB0YWJsZUluZm9SZXNwb25zZSk7XHJcbiAgICB9XHJcbn0iXX0=