"use strict";
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