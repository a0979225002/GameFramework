
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/Loading/ALoadingTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '331eefDJ3VCgp2P3Lx9Uniu', 'ALoadingTemplate');
// script/Framework/Template/Loading/ALoadingTemplate.ts

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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var OverrideComponent_1 = require("../OverrideComponent");
var EventManager_1 = require("../../Listener/EventManager");
var ServerEventType_1 = require("../../Listener/Enum/ServerEventType");
var ErrorManager_1 = require("../../Error/ErrorManager");
var UserMoneyChangeNotification_1 = require("../../Process/GameNotification/UserMoneyChangeNotification");
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ccclass = cc._decorator.ccclass;
var ALoadingTemplate = /** @class */ (function (_super) {
    __extends(ALoadingTemplate, _super);
    function ALoadingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ALoadingTemplate.prototype, "canPlayGame", {
        get: function () {
            return this._canPlayGame;
        },
        enumerable: false,
        configurable: true
    });
    ALoadingTemplate.prototype.onLoad = function () {
        this._canPlayGame = false; //由 Server TableInfo Event 改變狀態
        this.onCreat(); //自訂義初始 例:拿取node...
    };
    ALoadingTemplate.prototype.start = function () {
        this.tableInfoEvent();
        this.sceneStyle();
        this.loadExternalScript(); //外部資源
        this.onLoadResources(); //載入資源方法
        this.loadAssetBundle(); //次資源
        this.updateProgressText(); //更新讀取條文字
    };
    /**
     * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
     */
    ALoadingTemplate.prototype.tableInfoEvent = function () {
        var _this = this;
        EventManager_1.default.instance.serverEventListener(ServerEventType_1.ServerEventType.TABLE_INFO, function (target) {
            var e_1, _a;
            try {
                for (var _b = __values(Object.keys(target)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var name = _c.value;
                    if (_this.tableInfo[name] === undefined) {
                        try {
                            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, "\u7121 " + name + " \u53C3\u6578,\u8ACB\u66F4\u63DB TableInfo Type");
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }
                    else {
                        _this.tableInfo[name] = target[name];
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            cc.log(_this.tableInfo);
            UserMoneyChangeNotification_1.default.instance.notify(_this.tableInfo.UserPoint);
            _this._canPlayGame = true;
        }, true);
    };
    ALoadingTemplate = __decorate([
        ccclass
    ], ALoadingTemplate);
    return ALoadingTemplate;
}(OverrideComponent_1.default));
exports.default = ALoadingTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxMb2FkaW5nXFxBTG9hZGluZ1RlbXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBQ3JELDREQUF1RDtBQUN2RCx1RUFBb0U7QUFDcEUseURBQW9EO0FBQ3BELDBHQUFxRztBQUNyRyxzRUFBNEQ7QUFFckQsSUFBQSxPQUFPLEdBQUksRUFBRSxDQUFDLFVBQVUsUUFBakIsQ0FBa0I7QUFHaEM7SUFBdUQsb0NBQWlCO0lBQXhFOztJQTZFQSxDQUFDO0lBekNHLHNCQUFJLHlDQUFXO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDNUIsQ0FBQzs7O09BQUE7SUFFUyxpQ0FBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQVUsK0JBQStCO1FBQ25FLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFxQixtQkFBbUI7SUFDM0QsQ0FBQztJQUVTLGdDQUFLLEdBQWY7UUFDSSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQVUsTUFBTTtRQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBYSxRQUFRO1FBQzVDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFhLEtBQUs7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBVSxTQUFTO0lBQ2pELENBQUM7SUFHRDs7T0FFRztJQUNLLHlDQUFjLEdBQXRCO1FBQUEsaUJBa0JDO1FBakJHLHNCQUFZLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUNyQyxpQ0FBZSxDQUFDLFVBQVUsRUFBRSxVQUFDLE1BQU07OztnQkFDL0IsS0FBaUIsSUFBQSxLQUFBLFNBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBakMsSUFBSSxJQUFJLFdBQUE7b0JBQ1QsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLFNBQVMsRUFBRTt3QkFDcEMsSUFBSTs0QkFDQSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxZQUFLLElBQUksb0RBQXdCLENBQUMsQ0FBQTt5QkFDdEc7d0JBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFDbEI7cUJBQ0o7eUJBQU07d0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNKOzs7Ozs7Ozs7WUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN2QixxQ0FBMkIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUE1RXlCLGdCQUFnQjtRQUQ3QyxPQUFPO09BQ3NCLGdCQUFnQixDQTZFN0M7SUFBRCx1QkFBQztDQTdFRCxBQTZFQyxDQTdFc0QsMkJBQWlCLEdBNkV2RTtrQkE3RTZCLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPdmVycmlkZUNvbXBvbmVudCBmcm9tIFwiLi4vT3ZlcnJpZGVDb21wb25lbnRcIjtcclxuaW1wb3J0IEV2ZW50TWFuYWdlciBmcm9tIFwiLi4vLi4vTGlzdGVuZXIvRXZlbnRNYW5hZ2VyXCI7XHJcbmltcG9ydCB7U2VydmVyRXZlbnRUeXBlfSBmcm9tIFwiLi4vLi4vTGlzdGVuZXIvRW51bS9TZXJ2ZXJFdmVudFR5cGVcIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vLi4vRXJyb3IvRXJyb3JNYW5hZ2VyXCI7XHJcbmltcG9ydCBVc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL1Byb2Nlc3MvR2FtZU5vdGlmaWNhdGlvbi9Vc2VyTW9uZXlDaGFuZ2VOb3RpZmljYXRpb25cIjtcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi8uLi9FcnJvci9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBTG9hZGluZ1RlbXBsYXRlIGV4dGVuZHMgT3ZlcnJpZGVDb21wb25lbnQgaW1wbGVtZW50cyBJTG9hZFRlbXBsYXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9jYW5QbGF5R2FtZTogYm9vbGVhbjtcclxuICAgIHByb3RlY3RlZCB0YWJsZUluZm86IElUYWJsZUluZm9Nb2RlbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWft+ihjOWAi+S6uuiHquWumue+qeioreWumlxyXG4gICAgICog5rOo5oSPLOaJgOaciW92ZXJyaWRl55qE5pa55rOVLOeahuS4jeimgeaUvuWFpemAmeijoemdolxyXG4gICAgICovXHJcbiAgICBhYnN0cmFjdCBvbkNyZWF0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXkuLvos4fmupBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgb25Mb2FkUmVzb3VyY2VzKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXmrKHos4fmupBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgbG9hZEFzc2V0QnVuZGxlKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXlpJbpg6jos4fmupBcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgbG9hZEV4dGVybmFsU2NyaXB0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDoroDlj5bmop3mloflrZfli5XnlatcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3QgdXBkYXRlUHJvZ3Jlc3NUZXh0KCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY1zY2VuZeaooeW8jyzmm7TmlrDnlbbliY3nlavpnaLmmK/phY3lr6zpq5hcclxuICAgICAqL1xyXG4gICAgYWJzdHJhY3Qgc2NlbmVTdHlsZSgpO1xyXG5cclxuICAgIGdldCBjYW5QbGF5R2FtZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FuUGxheUdhbWVcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2NhblBsYXlHYW1lID0gZmFsc2U7ICAgICAgICAgIC8v55SxIFNlcnZlciBUYWJsZUluZm8gRXZlbnQg5pS56K6K54uA5oWLXHJcbiAgICAgICAgdGhpcy5vbkNyZWF0KCk7ICAgICAgICAgICAgICAgICAgICAgLy/oh6roqILnvqnliJ3lp4sg5L6LOuaLv+WPlm5vZGUuLi5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZUluZm9FdmVudCgpO1xyXG4gICAgICAgIHRoaXMuc2NlbmVTdHlsZSgpO1xyXG4gICAgICAgIHRoaXMubG9hZEV4dGVybmFsU2NyaXB0KCk7ICAgICAgICAgIC8v5aSW6YOo6LOH5rqQXHJcbiAgICAgICAgdGhpcy5vbkxvYWRSZXNvdXJjZXMoKTsgICAgICAgICAgICAgLy/ovInlhaXos4fmupDmlrnms5VcclxuICAgICAgICB0aGlzLmxvYWRBc3NldEJ1bmRsZSgpOyAgICAgICAgICAgICAvL+asoeizh+a6kFxyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NUZXh0KCk7ICAgICAgICAgIC8v5pu05paw6K6A5Y+W5qKd5paH5a2XXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog55W2U2VydmVyIOWbnuWCs3RhYmxlSW5mbyDos4foqIos5bCH5pu05YuVY2FuUGxheUdhbWXluIPmnpflgLws5LiU5L+d5a2YdGFibGVJbmZv6LOH5rqQXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdGFibGVJbmZvRXZlbnQoKSB7XHJcbiAgICAgICAgRXZlbnRNYW5hZ2VyLmluc3RhbmNlLnNlcnZlckV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgIFNlcnZlckV2ZW50VHlwZS5UQUJMRV9JTkZPLCAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBuYW1lIG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJsZUluZm9bbmFtZV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuV2ViUmVzcG9uc2VFcnJvckZXLCBg54ShICR7bmFtZX0g5Y+D5pW4LOiri+abtOaPmyBUYWJsZUluZm8gVHlwZWApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJsZUluZm9bbmFtZV0gPSB0YXJnZXRbbmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMudGFibGVJbmZvKTtcclxuICAgICAgICAgICAgICAgIFVzZXJNb25leUNoYW5nZU5vdGlmaWNhdGlvbi5pbnN0YW5jZS5ub3RpZnkodGhpcy50YWJsZUluZm8uVXNlclBvaW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhblBsYXlHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19