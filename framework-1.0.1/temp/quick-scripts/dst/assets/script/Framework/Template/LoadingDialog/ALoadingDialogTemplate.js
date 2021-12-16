
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/LoadingDialog/ALoadingDialogTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxMb2FkaW5nRGlhbG9nXFxBTG9hZGluZ0RpYWxvZ1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU8sT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQ3ZDLHNFQUE0RDtBQUM1RCx5REFBb0Q7QUFDcEQscUVBQWdFO0FBQ2hFLDBEQUFxRDtBQUVyRDs7Ozs7R0FLRztBQUVIO0lBQTZELDBDQUFpQjtJQUE5RTs7SUEyR0EsQ0FBQztJQWxHYSx1Q0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssa0RBQWlCLEdBQXpCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUEsQ0FBSSxNQUFNO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBLENBQUksY0FBYztRQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFzQixtQkFBbUI7UUFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBLENBQVcsZ0JBQWdCO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQWlCLFlBQVk7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBc0IsYUFBYTtRQUNyRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFBLENBQVcsYUFBYTtJQUV6RCxDQUFDO0lBRU0sNENBQVcsR0FBbEIsVUFBbUIsT0FBZTtRQUFsQyxpQkFXQztRQVRHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpCLE9BQU8sSUFB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QkEzRzZCLHNCQUFzQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjY2NsYXNzID0gY2MuX2RlY29yYXRvci5jY2NsYXNzO1xyXG5pbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi8uLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IExvYWRSZXNNYW5hZ2VyIGZyb20gXCIuLi8uLi9Mb2FkUmVzb3VyY2VzL0xvYWRSZXNNYW5hZ2VyXCI7XHJcbmltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBAQXV0aG9yIFhJQU8tTEktUElOXHJcbiAqIEBEZXNjcmlwdGlvbiBUT0RPXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTEg5LiL5Y2IIDA1OjQxXHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQUxvYWRpbmdEaWFsb2dUZW1wbGF0ZSBleHRlbmRzIE92ZXJyaWRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgbG9hZGluZ0RpYWxvZ05vZGU6IGNjLk5vZGU7XHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyO1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByb2dyZXNzVGV4dDogY2MuTGFiZWw7XHJcbiAgICBwcm90ZWN0ZWQgcHJvZ3Jlc3NWYWx1ZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIHRpbWVPdXQ6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBhZGRQcm9ncmVzc1ZhbHVlO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRpbmdJbml0aWFsaXplKCk7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyW6K6A5Y+W5qKdXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGxvYWRpbmdJbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ0RpYWxvZ05vZGUuYWN0aXZlID0gdHJ1ZSAgICAvL+aJk+mWi+e1hOS7tlxyXG4gICAgICAgIHRoaXMubG9hZGluZ0RpYWxvZ05vZGUub3BhY2l0eSA9IDI1NSAgICAvL+WIneS9v+iugOWPluaineimlueql+mAj+aYjuW6pueCujBcclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDsgICAgICAgICAgICAgICAgICAgICAgLy/liJ3lp4tzZXRJbnRlcnZhbCDoqIjmmYLlmahcclxuICAgICAgICB0aGlzLnByb2dyZXNzVGV4dC5zdHJpbmcgPSBcIlwiICAgICAgICAgICAvL+WIneWni+mAsuW6puainVwiLi4uXCLlrZfkuLLngrrnqbpcclxuICAgICAgICB0aGlzLnByb2dyZXNzVmFsdWUgPSAwOyAgICAgICAgICAgICAgICAgLy/liJ3lp4vpgLLluqbmop0gPSAwO1xyXG4gICAgICAgIHRoaXMudGltZU91dCA9IDUwOyAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+avj+i3keS4gOasoeeahOWBnOeVmeaZgumWk1xyXG4gICAgICAgIHRoaXMuYWRkUHJvZ3Jlc3NWYWx1ZSA9IDAuMDA1ICAgICAgICAgICAvL+WIneWni+avj+i3keS4gOasoeWIneWni+mAsuW6puWAvFxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcnVuUHJvZ3Jlc3MocmVzTmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZGluZ0luaXRpYWxpemUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNoZWNrSGFzUmVzKHJlc05hbWUsIHJlc29sdmUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVGltZXIoXCJcIiwgcmVzTmFtZSwgcmVzb2x2ZSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9ncmVzc1RpbWVyKHByb2dyZXNzVGV4dDogc3RyaW5nLCByZXNOYW1lOiBzdHJpbmcsIHJlc29sdmU6ICh2YWx1ZTogKFByb21pc2VMaWtlPHZvaWQ+IHwgdm9pZCkpID0+IHZvaWQpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9ncmVzc1ZhbHVlID4gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc1ZhbHVlID0gMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzVGV4dC5sZW5ndGggPiAzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1RleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzVGV4dC5zdHJpbmcgPSBwcm9ncmVzc1RleHQ7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NWYWx1ZSA9IHRoaXMucHJvZ3Jlc3NWYWx1ZSArIHRoaXMucHJvZ3Jlc3NWYWx1ZTtcclxuICAgICAgICAgICAgcHJvZ3Jlc3NUZXh0ICs9IFwiLlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNlY29uZGFyeUxvYWRTdGF0ZS5nZXQocmVzTmFtZSkgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb2dyZXNzVmFsdWUgPj0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlTG9hZGluZ0RpYUxvZyhyZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRQcm9ncmVzc1ZhbHVlICE9IDAuMSkgdGhpcy5hZGRQcm9ncmVzc1ZhbHVlID0gMC4wNTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9LCB0aGlzLnRpbWVPdXQpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbG9zZUxvYWRpbmdEaWFMb2cocmVzb2x2ZTogKHZhbHVlOiAoUHJvbWlzZUxpa2U8dm9pZD4gfCB2b2lkKSkgPT4gdm9pZCkge1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLmxvYWRpbmdEaWFsb2dOb2RlKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7b3BhY2l0eTogMH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZ0RpYWxvZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56K66KqN55W25LiL6Kmy6LOH5rqQ5piv5ZCm5q2j5Zyo5Yqg6LyJXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzTmFtZVxyXG4gICAgICogQHBhcmFtIHsodmFsdWU6IChQcm9taXNlTGlrZTx2b2lkPiB8IHZvaWQpKSA9PiB2b2lkfSByZXNvbHZlXHJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tIYXNSZXMocmVzTmFtZTogc3RyaW5nLCByZXNvbHZlOiAodmFsdWU6IChQcm9taXNlTGlrZTx2b2lkPiB8IHZvaWQpKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICghTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc2Vjb25kYXJ5TG9hZFN0YXRlLmhhcyhyZXNOYW1lKSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5VbmRlZmluZWRGVywgYCR7cmVzTmFtZX3oqbLnhKHoqbLos4fmupBgKTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nRGlhbG9nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5zZWNvbmRhcnlMb2FkU3RhdGUuZ2V0KHJlc05hbWUpID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nRGlhbG9nTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBvbkNyZWF0ZSgpO1xyXG59Il19