
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Template/Setting/AMainGameSettingTemplate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c4e9f6f+xIbZVd2iucSnHF', 'AMainGameSettingTemplate');
// script/Framework/Template/Setting/AMainGameSettingTemplate.ts

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
var OverrideComponent_1 = require("../OverrideComponent");
var ccclass = cc._decorator.ccclass;
var AMainGameSettingTemplate = /** @class */ (function (_super) {
    __extends(AMainGameSettingTemplate, _super);
    function AMainGameSettingTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AMainGameSettingTemplate.prototype.onLoad = function () {
        this.setHistoryDetail();
        this.prefabInstantiate();
        this.gameProcessSetting();
        this.audioSetting();
        this.onCreate();
    };
    AMainGameSettingTemplate = __decorate([
        ccclass
    ], AMainGameSettingTemplate);
    return AMainGameSettingTemplate;
}(OverrideComponent_1.default));
exports.default = AMainGameSettingTemplate;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFRlbXBsYXRlXFxTZXR0aW5nXFxBTWFpbkdhbWVTZXR0aW5nVGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXFEO0FBRTlDLElBQUEsT0FBTyxHQUFJLEVBQUUsQ0FBQyxVQUFVLFFBQWpCLENBQWtCO0FBR2hDO0lBQStELDRDQUFpQjtJQUFoRjs7SUFzQ0EsQ0FBQztJQXBDYSx5Q0FBTSxHQUFoQjtRQUVJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFcEIsQ0FBQztJQVZ5Qix3QkFBd0I7UUFEckQsT0FBTztPQUNzQix3QkFBd0IsQ0FzQ3JEO0lBQUQsK0JBQUM7Q0F0Q0QsQUFzQ0MsQ0F0QzhELDJCQUFpQixHQXNDL0U7a0JBdEM2Qix3QkFBd0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3ZlcnJpZGVDb21wb25lbnQgZnJvbSBcIi4uL092ZXJyaWRlQ29tcG9uZW50XCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzc30gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQU1haW5HYW1lU2V0dGluZ1RlbXBsYXRlIGV4dGVuZHMgT3ZlcnJpZGVDb21wb25lbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGlzdG9yeURldGFpbCgpO1xyXG4gICAgICAgIHRoaXMucHJlZmFiSW5zdGFudGlhdGUoKTtcclxuICAgICAgICB0aGlzLmdhbWVQcm9jZXNzU2V0dGluZygpO1xyXG4gICAgICAgIHRoaXMuYXVkaW9TZXR0aW5nKCk7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZSgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiHquioguWIneWni1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgb25DcmVhdGUoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW7uueri+ips+aDhemggemdolxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3Qgc2V0SGlzdG9yeURldGFpbCgpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YGK5oiy5rWB56iL5bu656uLXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnYW1lUHJvY2Vzc1NldHRpbmcoKTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmfs+aoguWIneWni+ioreWumlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgYXVkaW9TZXR0aW5nKCk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlr6bkvovljJbmiYDmnInli5XmhYvliqDovInnmoRwcmVmYWJcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHByZWZhYkluc3RhbnRpYXRlKCk7XHJcblxyXG5cclxufSJdfQ==