"use strict";
cc._RF.push(module, '9f15clqao9CW5o6QFzLmxWR', 'ALoadingDialogTemplate');
// script/Framework/Template/LoadingDialog/ALoadingDialogTemplate.ts

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
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var LoadResManager_1 = require("../../LoadResources/LoadResManager");
var OverrideComponent_1 = require("../OverrideComponent");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-11 下午 05:41
 * @Version 1.0
 */
var ALoadingDialogTemplate = /** @class */ (function (_super) {
    __extends(ALoadingDialogTemplate, _super);
    function ALoadingDialogTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ALoadingDialogTemplate.prototype.onLoad = function () {
        this.loadingInitialize();
        this.onCreate();
    };
    /**
     * 初始化讀取條
     * @private
     */
    ALoadingDialogTemplate.prototype.loadingInitialize = function () {
        this.loadingDialogNode.active = true; //打開組件
        this.loadingDialogNode.opacity = 255; //初使讀取條視窗透明度為0
        this.timer = null; //初始setInterval 計時器
        this.progressText.string = ""; //初始進度條"..."字串為空
        this.progressValue = 0; //初始進度條 = 0;
        this.timeOut = 50; //初始每跑一次的停留時間
        this.addProgressValue = 0.005; //初始每跑一次初始進度值
    };
    ALoadingDialogTemplate.prototype.runProgress = function (resName) {
        var _this = this;
        this.loadingInitialize();
        return new Promise(function (resolve) {
            if (!_this.checkHasRes(resName, resolve))
                return;
            _this.progressTimer("", resName, resolve);
        });
    };
    ALoadingDialogTemplate.prototype.progressTimer = function (progressText, resName, resolve) {
        var _this = this;
        this.timer = window.setInterval(function () {
            if (_this.progressValue > 1) {
                _this.progressValue = 0;
            }
            if (progressText.length > 3) {
                progressText = "";
            }
            _this.progressText.string = progressText;
            _this.progressBar.progress = _this.progressValue;
            _this.progressValue = _this.progressValue + _this.progressValue;
            progressText += ".";
            if (LoadResManager_1.default.instance.secondaryLoadState.get(resName) == 1) {
                if (_this.progressValue >= 1) {
                    _this.closeLoadingDiaLog(resolve);
                }
                if (_this.addProgressValue != 0.1)
                    _this.addProgressValue = 0.05;
            }
        }, this.timeOut);
    };
    ALoadingDialogTemplate.prototype.closeLoadingDiaLog = function (resolve) {
        var _this = this;
        cc.tween(this.loadingDialogNode)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.loadingDialogNode.active = false;
            resolve();
        });
    };
    /**
     * 確認當下該資源是否正在加載
     * @param {string} resName
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @returns {boolean}
     * @private
     */
    ALoadingDialogTemplate.prototype.checkHasRes = function (resName, resolve) {
        if (!LoadResManager_1.default.instance.secondaryLoadState.has(resName)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, resName + "\u8A72\u7121\u8A72\u8CC7\u6E90");
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        if (LoadResManager_1.default.instance.secondaryLoadState.get(resName) == 1) {
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        return true;
    };
    ALoadingDialogTemplate = __decorate([
        ccclass
    ], ALoadingDialogTemplate);
    return ALoadingDialogTemplate;
}(OverrideComponent_1.default));
exports.default = ALoadingDialogTemplate;

cc._RF.pop();