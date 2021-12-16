
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/InstructionController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8f6d88KhJGcar7o9rKpHJX', 'InstructionController');
// script/MainGameScript/Controller/InstructionController.ts

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var ButtonMethod_1 = require("../../Framework/GlobalMethod/ButtonMethod");
var LanguageMethod_1 = require("../../Framework/GlobalMethod/LanguageMethod");
var SceneStyle_1 = require("../../Framework/Scene/Enum/SceneStyle");
var SceneDirectionChangeNotification_1 = require("../../Framework/Scene/SceneNotification/SceneDirectionChangeNotification");
var SceneDirectionChangeObserver_1 = require("../../Framework/Scene/SceneObserver/SceneDirectionChangeObserver");
var SceneManager_1 = require("../../Framework/Scene/SceneManager");
var AGenericTemplate_1 = require("../../Framework/Template/AGenericTemplate");
var SocketSetting_1 = require("../../Socket/SocketSetting");
var MainGameButton_1 = require("../ButtonEvent/MainGameButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var InstructionController = /** @class */ (function (_super) {
    __extends(InstructionController, _super);
    function InstructionController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pageH = null;
        _this.pageV = null;
        _this.userMoneyTextH = null;
        _this.userMoneyTextV = null;
        _this.menuTextH = null;
        _this.menuTextV = null;
        _this.startButtonAutoTextH = null;
        _this.startButtonAutoTextV = null;
        _this.autoTextH = null;
        _this.autoTextV = null;
        _this.speedTextH = null;
        _this.speedTextV = null;
        return _this;
    }
    InstructionController_1 = InstructionController;
    InstructionController.prototype.onCreate = function () {
        InstructionController_1.instance = this;
        switch (SceneManager_1.default.instance.sceneDirection) {
            case SceneStyle_1.SceneDirectionType.LANDSCAPE:
                this.pageH.active = true;
                this.pageV.active = false;
                break;
            case SceneStyle_1.SceneDirectionType.PORTRAIT:
                this.pageV.active = true;
                this.pageH.active = false;
                break;
        }
        ButtonMethod_1.default.addButtonEvent(this.pageH.getComponent(cc.Button), "pageTouchListener", this);
        ButtonMethod_1.default.addButtonEvent(this.pageV.getComponent(cc.Button), "pageTouchListener", this);
        this.sceneDirectionChangeObserver = this.sceneDirectionObserverListener();
        SceneDirectionChangeNotification_1.default.instance.subscribe(this.sceneDirectionChangeObserver, true);
    };
    InstructionController.prototype.languageSetting = function () {
        this.userMoneyTextH.string = SocketSetting_1.default.t("HELP_001");
        this.userMoneyTextV.string = SocketSetting_1.default.t("HELP_001");
        this.menuTextH.string = SocketSetting_1.default.t("HELP_005");
        this.menuTextV.string = SocketSetting_1.default.t("HELP_005");
        this.startButtonAutoTextH.string = SocketSetting_1.default.t("HELP_008");
        this.startButtonAutoTextV.string = SocketSetting_1.default.t("HELP_008");
        this.autoTextH.string = SocketSetting_1.default.t("S_1001");
        this.autoTextV.string = SocketSetting_1.default.t("S_1001");
        this.speedTextH.string = SocketSetting_1.default.t("HELP_004");
        this.speedTextV.string = SocketSetting_1.default.t("HELP_004");
        LanguageMethod_1.default.instance
            .updateLabelStyle(this.userMoneyTextH)
            .updateLabelStyle(this.userMoneyTextV)
            .updateLabelStyle(this.menuTextH)
            .updateLabelStyle(this.menuTextV)
            .updateLabelStyle(this.startButtonAutoTextH)
            .updateLabelStyle(this.startButtonAutoTextV)
            .updateLabelStyle(this.autoTextH)
            .updateLabelStyle(this.autoTextV)
            .updateLabelStyle(this.speedTextH)
            .updateLabelStyle(this.speedTextV);
    };
    /**
     * 離開說明頁進入遊戲遊玩待機模式
     * @private
     */
    InstructionController.prototype.pageTouchListener = function () {
        MainGameButton_1.default.instance.startButtonOnEnable();
        this.node.destroy();
    };
    InstructionController.prototype.sceneDirectionObserverListener = function () {
        var _this = this;
        return new SceneDirectionChangeObserver_1.default(function (type) {
            if (type == SceneStyle_1.SceneDirectionType.LANDSCAPE) {
                _this.pageH.active = true;
                _this.pageV.active = false;
            }
            else if (type == SceneStyle_1.SceneDirectionType.PORTRAIT) {
                _this.pageV.active = true;
                _this.pageH.active = false;
            }
            else {
                cc.log("MainGameSetting sceneDirectionEvent() \u6709\u932F\u8AA4 : " + type);
            }
        }, this);
    };
    InstructionController.prototype.onDestroy = function () {
        SceneDirectionChangeNotification_1.default.instance.unsubscribe(this.sceneDirectionChangeObserver);
    };
    var InstructionController_1, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_b = typeof cc !== "undefined" && cc.Node) === "function" ? _b : Object)
    ], InstructionController.prototype, "pageH", void 0);
    __decorate([
        property(cc.Node),
        __metadata("design:type", typeof (_c = typeof cc !== "undefined" && cc.Node) === "function" ? _c : Object)
    ], InstructionController.prototype, "pageV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_d = typeof cc !== "undefined" && cc.Label) === "function" ? _d : Object)
    ], InstructionController.prototype, "userMoneyTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_e = typeof cc !== "undefined" && cc.Label) === "function" ? _e : Object)
    ], InstructionController.prototype, "userMoneyTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_f = typeof cc !== "undefined" && cc.Label) === "function" ? _f : Object)
    ], InstructionController.prototype, "menuTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_g = typeof cc !== "undefined" && cc.Label) === "function" ? _g : Object)
    ], InstructionController.prototype, "menuTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_h = typeof cc !== "undefined" && cc.Label) === "function" ? _h : Object)
    ], InstructionController.prototype, "startButtonAutoTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_j = typeof cc !== "undefined" && cc.Label) === "function" ? _j : Object)
    ], InstructionController.prototype, "startButtonAutoTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_k = typeof cc !== "undefined" && cc.Label) === "function" ? _k : Object)
    ], InstructionController.prototype, "autoTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_l = typeof cc !== "undefined" && cc.Label) === "function" ? _l : Object)
    ], InstructionController.prototype, "autoTextV", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_m = typeof cc !== "undefined" && cc.Label) === "function" ? _m : Object)
    ], InstructionController.prototype, "speedTextH", void 0);
    __decorate([
        property(cc.Label),
        __metadata("design:type", typeof (_o = typeof cc !== "undefined" && cc.Label) === "function" ? _o : Object)
    ], InstructionController.prototype, "speedTextV", void 0);
    __decorate([
        AudioManager_1.Music("NBS"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InstructionController.prototype, "pageTouchListener", null);
    InstructionController = InstructionController_1 = __decorate([
        ccclass
    ], InstructionController);
    return InstructionController;
}(AGenericTemplate_1.default));
exports.default = InstructionController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcSW5zdHJ1Y3Rpb25Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUF5RDtBQUN6RCwwRUFBb0U7QUFDcEUsOEVBQXlFO0FBQ3pFLG9FQUF3RTtBQUN4RSw2SEFBd0g7QUFDeEgsaUhBQTRHO0FBQzVHLG1FQUE2RDtBQUM3RCw4RUFBd0U7QUFDeEUsNERBQXNEO0FBQ3RELGdFQUEwRDtBQUVwRCxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtRCx5Q0FBZ0I7SUFBbkU7UUFBQSxxRUF3SEM7UUFySEcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLG9CQUFjLEdBQWEsSUFBSSxDQUFDO1FBRWhDLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQiwwQkFBb0IsR0FBYSxJQUFJLENBQUM7UUFFdEMsMEJBQW9CLEdBQWEsSUFBSSxDQUFDO1FBRXRDLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFhLElBQUksQ0FBQztRQUUzQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixnQkFBVSxHQUFhLElBQUksQ0FBQzs7SUErRmhDLENBQUM7OEJBeEhvQixxQkFBcUI7SUE4QjVCLHdDQUFRLEdBQWxCO1FBQ0ksdUJBQXFCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN0QyxRQUFRLHNCQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRTtZQUMxQyxLQUFLLCtCQUFrQixDQUFDLFNBQVM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxH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LEVBQUUsQ0FBQyxLQUFLO2lFQUFRO0lBRWhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1IsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzs0REFBUTtJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNSLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7NERBQVE7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDRyxFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLO3VFQUFRO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ0csRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzt1RUFBUTtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNSLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7NERBQVE7SUFFM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzREFDUixFQUFFLG9CQUFGLEVBQUUsQ0FBQyxLQUFLOzREQUFRO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7c0RBQ1AsRUFBRSxvQkFBRixFQUFFLENBQUMsS0FBSzs2REFBUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3NEQUNQLEVBQUUsb0JBQUYsRUFBRSxDQUFDLEtBQUs7NkRBQVE7SUFrRTVCO1FBREMsb0JBQUssQ0FBQyxLQUFLLENBQUM7Ozs7a0VBSVo7SUE5RmdCLHFCQUFxQjtRQUR6QyxPQUFPO09BQ2EscUJBQXFCLENBd0h6QztJQUFELDRCQUFDO0NBeEhELEFBd0hDLENBeEhrRCwwQkFBZ0IsR0F3SGxFO2tCQXhIb0IscUJBQXFCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNdXNpY30gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXJcIjtcclxuaW1wb3J0IEJ1dHRvbk1ldGhvZCBmcm9tICcuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0J1dHRvbk1ldGhvZCdcclxuaW1wb3J0IExhbmd1YWdlTWV0aG9kIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvR2xvYmFsTWV0aG9kL0xhbmd1YWdlTWV0aG9kXCI7XHJcbmltcG9ydCB7U2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tICcuLi8uLi9GcmFtZXdvcmsvU2NlbmUvRW51bS9TY2VuZVN0eWxlJ1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU5vdGlmaWNhdGlvbi9TY2VuZURpcmVjdGlvbkNoYW5nZU5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1NjZW5lL1NjZW5lT2JzZXJ2ZXIvU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlclwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9TY2VuZS9TY2VuZU1hbmFnZXInXHJcbmltcG9ydCBBR2VuZXJpY1RlbXBsYXRlIGZyb20gJy4uLy4uL0ZyYW1ld29yay9UZW1wbGF0ZS9BR2VuZXJpY1RlbXBsYXRlJ1xyXG5pbXBvcnQgU29ja2V0U2V0dGluZyBmcm9tICcuLi8uLi9Tb2NrZXQvU29ja2V0U2V0dGluZydcclxuaW1wb3J0IE1haW5HYW1lQnV0dG9uIGZyb20gJy4uL0J1dHRvbkV2ZW50L01haW5HYW1lQnV0dG9uJ1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnN0cnVjdGlvbkNvbnRyb2xsZXIgZXh0ZW5kcyBBR2VuZXJpY1RlbXBsYXRlIHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBhZ2VIOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcGFnZVY6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgdXNlck1vbmV5VGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHVzZXJNb25leVRleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBtZW51VGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG1lbnVUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3RhcnRCdXR0b25BdXRvVGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIHN0YXJ0QnV0dG9uQXV0b1RleHRWOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBhdXRvVGV4dEg6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGF1dG9UZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3BlZWRUZXh0SDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgc3BlZWRUZXh0VjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgc2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcjogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcjtcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U6IEluc3RydWN0aW9uQ29udHJvbGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgSW5zdHJ1Y3Rpb25Db250cm9sbGVyLmluc3RhbmNlID0gdGhpcztcclxuICAgICAgICBzd2l0Y2ggKFNjZW5lTWFuYWdlci5pbnN0YW5jZS5zY2VuZURpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFNjZW5lRGlyZWN0aW9uVHlwZS5MQU5EU0NBUEU6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VILmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VWLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2NlbmVEaXJlY3Rpb25UeXBlLlBPUlRSQUlUOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlVi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQnV0dG9uTWV0aG9kLmFkZEJ1dHRvbkV2ZW50KFxyXG4gICAgICAgICAgICB0aGlzLnBhZ2VILmdldENvbXBvbmVudChjYy5CdXR0b24pLFxyXG4gICAgICAgICAgICBcInBhZ2VUb3VjaExpc3RlbmVyXCIsXHJcbiAgICAgICAgICAgIHRoaXNcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBCdXR0b25NZXRob2QuYWRkQnV0dG9uRXZlbnQoXHJcbiAgICAgICAgICAgIHRoaXMucGFnZVYuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbiksXHJcbiAgICAgICAgICAgIFwicGFnZVRvdWNoTGlzdGVuZXJcIixcclxuICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciA9IHRoaXMuc2NlbmVEaXJlY3Rpb25PYnNlcnZlckxpc3RlbmVyKCk7XHJcbiAgICAgICAgU2NlbmVEaXJlY3Rpb25DaGFuZ2VOb3RpZmljYXRpb24uaW5zdGFuY2Uuc3Vic2NyaWJlKHRoaXMuc2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcix0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXR0aW5nKCkge1xyXG5cclxuICAgICAgICB0aGlzLnVzZXJNb25leVRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIkhFTFBfMDAxXCIpO1xyXG4gICAgICAgIHRoaXMudXNlck1vbmV5VGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiSEVMUF8wMDFcIik7XHJcbiAgICAgICAgdGhpcy5tZW51VGV4dEguc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiSEVMUF8wMDVcIik7XHJcbiAgICAgICAgdGhpcy5tZW51VGV4dFYuc3RyaW5nID0gU29ja2V0U2V0dGluZy50KFwiSEVMUF8wMDVcIik7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbkF1dG9UZXh0SC5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJIRUxQXzAwOFwiKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uQXV0b1RleHRWLnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIkhFTFBfMDA4XCIpO1xyXG4gICAgICAgIHRoaXMuYXV0b1RleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIlNfMTAwMVwiKTtcclxuICAgICAgICB0aGlzLmF1dG9UZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJTXzEwMDFcIik7XHJcbiAgICAgICAgdGhpcy5zcGVlZFRleHRILnN0cmluZyA9IFNvY2tldFNldHRpbmcudChcIkhFTFBfMDA0XCIpO1xyXG4gICAgICAgIHRoaXMuc3BlZWRUZXh0Vi5zdHJpbmcgPSBTb2NrZXRTZXR0aW5nLnQoXCJIRUxQXzAwNFwiKTtcclxuXHJcbiAgICAgICAgTGFuZ3VhZ2VNZXRob2QuaW5zdGFuY2VcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy51c2VyTW9uZXlUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy51c2VyTW9uZXlUZXh0VilcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5tZW51VGV4dEgpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMubWVudVRleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnN0YXJ0QnV0dG9uQXV0b1RleHRIKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLnN0YXJ0QnV0dG9uQXV0b1RleHRWKVxyXG4gICAgICAgICAgICAudXBkYXRlTGFiZWxTdHlsZSh0aGlzLmF1dG9UZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5hdXRvVGV4dFYpXHJcbiAgICAgICAgICAgIC51cGRhdGVMYWJlbFN0eWxlKHRoaXMuc3BlZWRUZXh0SClcclxuICAgICAgICAgICAgLnVwZGF0ZUxhYmVsU3R5bGUodGhpcy5zcGVlZFRleHRWKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmboumWi+iqquaYjumggemAsuWFpemBiuaIsumBiueOqeW+heapn+aooeW8j1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgQE11c2ljKFwiTkJTXCIpXHJcbiAgICBwcml2YXRlIHBhZ2VUb3VjaExpc3RlbmVyKCkge1xyXG4gICAgICAgIE1haW5HYW1lQnV0dG9uLmluc3RhbmNlLnN0YXJ0QnV0dG9uT25FbmFibGUoKTtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzY2VuZURpcmVjdGlvbk9ic2VydmVyTGlzdGVuZXIoKTogU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlciB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgU2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcigodHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PSBTY2VuZURpcmVjdGlvblR5cGUuTEFORFNDQVBFKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlSC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlVi5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBTY2VuZURpcmVjdGlvblR5cGUuUE9SVFJBSVQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VWLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VILmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhgTWFpbkdhbWVTZXR0aW5nIHNjZW5lRGlyZWN0aW9uRXZlbnQoKSDmnInpjK/oqqQgOiAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIFNjZW5lRGlyZWN0aW9uQ2hhbmdlTm90aWZpY2F0aW9uLmluc3RhbmNlLnVuc3Vic2NyaWJlKHRoaXMuc2NlbmVEaXJlY3Rpb25DaGFuZ2VPYnNlcnZlcilcclxuICAgIH1cclxufSJdfQ==