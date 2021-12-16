
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/MainGameScript/Controller/SlotController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '42f8fOuAixNO4yhqk8WpN3s', 'SlotController');
// script/MainGameScript/Controller/SlotController.ts

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
var AudioManager_1 = require("../../Framework/Audio/AudioManager");
var LoadResManager_1 = require("../../Framework/LoadResources/LoadResManager");
var GameState_1 = require("../../Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../Framework/Process/SlotGameManager");
var SlotStyleManager_1 = require("../../Framework/Slot/SlotStyleManager");
var NoLineSlot_1 = require("../../Framework/Slot/SlotType/NoLineSlot");
var ASlotInitializeTemplate_1 = require("../../Framework/Template/Slot/ASlotInitializeTemplate");
var ResponseType_1 = require("../../Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../Framework/WebResponse/WebResponseManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SlotController = /** @class */ (function (_super) {
    __extends(SlotController, _super);
    function SlotController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slotRow = [];
        _this.gridAnimation = [];
        return _this;
    }
    SlotController_1 = SlotController;
    SlotController.prototype.onCreate = function () {
        SlotController_1.instance = this;
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        this.tableInfo =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.TABLE_INFO);
        this.gridNodeToMap = this.getAllGridNode();
        this.girdSpriteToMap = this.getAllGridSprite();
    };
    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    SlotController.prototype.slotStyleSetting = function () {
        SlotStyleManager_1.default.instance
            .setSlotTemplate(NoLineSlot_1.default) //執行的class
            .setSlotGirdSpeed(0.08) //遊戲一般速度
            .setSlotGridHeight(170) //老虎機格子高度
            .setSlotRowGridCount(3) //老虎機每列格子數
            .setSlotTurnCount(2) //一般停止最少轉動次數
            .setSpeedUpMultiple(2) //加速倍率
            .slotColumnToTween(this.slotRow) //執行老虎機動畫的列
            .setGridNodeToMap(this.gridNodeToMap) //執行動畫的所有格子
            .setGirdSpriteToMap(this.girdSpriteToMap) //更換圖片的所有格子
            .setGridImg(LoadResManager_1.default.instance.imgRes.get("gridImg")) //遊戲中grid的所有格子
            .build(); //實例化setSlotTemplate參數內的Class
    };
    /**
     * 更新所有grid 隨機圖片
     * 如果每列的3~5格格子需要顯示 TableInfo 回傳回來的初始grid答案
     * @private
     */
    SlotController.prototype.slotInitialize = function () {
        var e_1, _a, e_2, _b;
        var arrayToSprites = this.girdSpriteToMap.values();
        var imgLength = LoadResManager_1.default.instance.imgRes.get("gridImg").size;
        var gridIndex;
        var answerIndex = 0;
        try {
            for (var arrayToSprites_1 = __values(arrayToSprites), arrayToSprites_1_1 = arrayToSprites_1.next(); !arrayToSprites_1_1.done; arrayToSprites_1_1 = arrayToSprites_1.next()) {
                var sprites = arrayToSprites_1_1.value;
                gridIndex = 0;
                try {
                    for (var sprites_1 = (e_2 = void 0, __values(sprites)), sprites_1_1 = sprites_1.next(); !sprites_1_1.done; sprites_1_1 = sprites_1.next()) {
                        var sprite = sprites_1_1.value;
                        var random = Math.floor(Math.random() * imgLength);
                        //如果該格子是用來顯示初始答案的,將不更新隨機圖片
                        if (gridIndex >= 3 && gridIndex <= 5) {
                            this.updateAnswerGrid(gridIndex, answerIndex);
                            answerIndex++;
                        }
                        else {
                            sprite.spriteFrame =
                                LoadResManager_1.default.instance.imgRes.get("gridImg").get(String(random));
                        }
                        gridIndex++;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (sprites_1_1 && !sprites_1_1.done && (_b = sprites_1.return)) _b.call(sprites_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (arrayToSprites_1_1 && !arrayToSprites_1_1.done && (_a = arrayToSprites_1.return)) _a.call(arrayToSprites_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * 更新 TableInfo 回傳回來的初始grid答案
     * @param {number} gridIndex
     * @param {number} answerIndex
     * @private
     */
    SlotController.prototype.updateAnswerGrid = function (gridIndex, answerIndex) {
        var rowIndex = Math.floor(answerIndex / 3);
        var answer = this.tableInfo.Grid[answerIndex];
        this.girdSpriteToMap
            .get(rowIndex)[gridIndex]
            .spriteFrame = LoadResManager_1.default.instance.imgRes.get("gridImg").get(String(answer));
    };
    /**
     * 拿取要跑grid輪播的Node
     * return Map<number , Array<cc.Node>>
     */
    SlotController.prototype.getAllGridNode = function () {
        var grids = new Map();
        for (var i = 0; i < this.slotRow.length; i++) {
            var nodes = this.slotRow[i].children;
            var nodeToArray = new Array();
            for (var j = nodes.length - 1; j >= 0; j--) {
                nodeToArray.push(nodes[j]);
            }
            grids.set(i, nodeToArray);
        }
        return grids;
    };
    /**
     * 拿取所有要更改圖片的Grid
     */
    SlotController.prototype.getAllGridSprite = function () {
        var sprites = new Map();
        for (var i = 0; i < this.slotRow.length; i++) {
            var nodes = this.slotRow[i].children;
            var spriteToArray = new Array();
            for (var j = nodes.length - 1; j >= 0; j--) {
                spriteToArray.push(nodes[j].children[0].getComponent(cc.Sprite));
            }
            sprites.set(i, spriteToArray);
        }
        return sprites;
    };
    SlotController.prototype.showWinGrid = function (winGrid) {
        var _this = this;
        if (this.timer)
            clearInterval(this.timer);
        if (SlotGameManager_1.default.instance.gameState == GameState_1.GameState.FREEING) {
            this.answerToArray = this.freeResult.Grid;
        }
        else {
            this.answerToArray = this.normalResult.Grid;
        }
        this.winGrid = winGrid;
        this.playGridAnimation(this.answerToArray);
        this.timer = window.setInterval(function () {
            _this.playGridAnimation(_this.answerToArray);
        }, 1500);
    };
    SlotController.prototype.playGridAnimation = function (answerToArray) {
        var columnIndex = 0;
        var gridIndex = 3;
        for (var i = 0; i < this.winGrid.length; i++) {
            if (gridIndex > 5)
                gridIndex = 3;
            columnIndex = Math.floor(i / 3);
            if (this.winGrid[i] == 1) {
                var anima = this.girdSpriteToMap
                    .get(columnIndex)[gridIndex].getComponent(cc.Animation);
                var answer = answerToArray[i];
                anima.addClip(this.gridAnimation[answer], "" + answer);
                anima.play(String(answer));
            }
            gridIndex++;
        }
    };
    SlotController.prototype.closeWinGrid = function () {
        if (!this.winGrid && !this.timer)
            return;
        clearInterval(this.timer);
        var columnIndex = 0;
        var gridIndex = 3;
        for (var i = 0; i < this.winGrid.length; i++) {
            if (gridIndex > 5)
                gridIndex = 3;
            columnIndex = Math.floor(i / 3);
            if (this.winGrid[i] == 1) {
                var answer = this.answerToArray[i];
                var anima = this.girdSpriteToMap
                    .get(columnIndex)[gridIndex].getComponent(cc.Animation);
                anima.removeClip(this.gridAnimation[answer], true);
                this.girdSpriteToMap.get(columnIndex)[gridIndex].spriteFrame =
                    LoadResManager_1.default.instance.imgRes.get("gridImg").get(String(answer));
            }
            gridIndex++;
        }
        this.winGrid = null;
        this.timer = null;
    };
    var SlotController_1;
    __decorate([
        property(cc.Node),
        __metadata("design:type", Array)
    ], SlotController.prototype, "slotRow", void 0);
    __decorate([
        property(cc.AnimationClip),
        __metadata("design:type", Array)
    ], SlotController.prototype, "gridAnimation", void 0);
    __decorate([
        AudioManager_1.Effect("WinSingleLine"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], SlotController.prototype, "playGridAnimation", null);
    SlotController = SlotController_1 = __decorate([
        ccclass
    ], SlotController);
    return SlotController;
}(ASlotInitializeTemplate_1.default));
exports.default = SlotController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxNYWluR2FtZVNjcmlwdFxcQ29udHJvbGxlclxcU2xvdENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtRUFBeUQ7QUFDekQsK0VBQXlFO0FBQ3pFLG9FQUFnRTtBQUNoRSwyRUFBcUU7QUFDckUsMEVBQW9FO0FBQ3BFLHVFQUFpRTtBQUNqRSxpR0FBMkY7QUFDM0YsOEVBQTJFO0FBSTNFLHFGQUFpRjtBQUUzRSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE0QyxrQ0FBdUI7SUFBbkU7UUFBQSxxRUFtTEM7UUFoTGEsYUFBTyxHQUFjLEVBQUUsQ0FBQztRQUUxQixtQkFBYSxHQUF1QixFQUFFLENBQUM7O0lBOEtuRCxDQUFDO3VCQW5Mb0IsY0FBYztJQWFyQixpQ0FBUSxHQUFsQjtRQUNJLGdCQUFjLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWTtZQUNiLHVDQUFrQjtpQkFDYixRQUFRLEVBQWdCO2lCQUN4QixTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVTtZQUNYLHVDQUFrQjtpQkFDYixRQUFRLEVBQW9CO2lCQUM1QixTQUFTLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUztZQUNWLHVDQUFrQjtpQkFDYixRQUFRLEVBQW1CO2lCQUMzQixTQUFTLENBQUMsMkJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNPLHlDQUFnQixHQUExQjtRQUNJLDBCQUFnQixDQUFDLFFBQVE7YUFDcEIsZUFBZSxDQUFDLG9CQUFVLENBQUMsQ0FBaUMsVUFBVTthQUN0RSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBc0MsUUFBUTthQUNwRSxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBc0MsU0FBUzthQUNyRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBc0MsVUFBVTthQUN0RSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBeUMsWUFBWTthQUN4RSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBdUMsTUFBTTthQUNsRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQXdCLFdBQVc7YUFDbEUsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUF3QixXQUFXO2FBQ3ZFLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBb0IsV0FBVzthQUN2RSxVQUFVLENBQUMsd0JBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFHLGNBQWM7YUFDMUUsS0FBSyxFQUFFLENBQUMsQ0FBb0QsNkJBQTZCO0lBQ2xHLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sdUNBQWMsR0FBeEI7O1FBQ0ksSUFBSSxjQUFjLEdBQXVDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDdkYsSUFBSSxTQUFTLEdBQUcsd0JBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDbkUsSUFBSSxTQUFTLENBQUM7UUFDZCxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7O1lBQ3BCLEtBQW9CLElBQUEsbUJBQUEsU0FBQSxjQUFjLENBQUEsOENBQUEsMEVBQUU7Z0JBQS9CLElBQUksT0FBTywyQkFBQTtnQkFDWixTQUFTLEdBQUcsQ0FBQyxDQUFDOztvQkFDZCxLQUFtQixJQUFBLDJCQUFBLFNBQUEsT0FBTyxDQUFBLENBQUEsZ0NBQUEscURBQUU7d0JBQXZCLElBQUksTUFBTSxvQkFBQTt3QkFDWCxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsQ0FBQzt3QkFDM0QsMEJBQTBCO3dCQUMxQixJQUFJLFNBQVMsSUFBSSxDQUFDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTs0QkFDbEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQzs0QkFDOUMsV0FBVyxFQUFFLENBQUM7eUJBQ2pCOzZCQUFNOzRCQUNILE1BQU0sQ0FBQyxXQUFXO2dDQUNkLHdCQUFjLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3lCQUN6RTt3QkFDRCxTQUFTLEVBQUUsQ0FBQztxQkFDZjs7Ozs7Ozs7O2FBQ0o7Ozs7Ozs7OztJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLHlDQUFnQixHQUF4QixVQUF5QixTQUFpQixFQUFFLFdBQW1CO1FBQzNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxlQUFlO2FBQ2YsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQzthQUN4QixXQUFXLEdBQUcsd0JBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVEOzs7T0FHRztJQUNPLHVDQUFjLEdBQXhCO1FBQ0ksSUFBSSxLQUFLLEdBQWdDLElBQUksR0FBRyxFQUEwQixDQUFDO1FBQzNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLEtBQUssR0FBbUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDckQsSUFBSSxXQUFXLEdBQW1CLElBQUksS0FBSyxFQUFXLENBQUM7WUFDdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7O09BRUc7SUFDTyx5Q0FBZ0IsR0FBMUI7UUFDSSxJQUFJLE9BQU8sR0FBa0MsSUFBSSxHQUFHLEVBQTRCLENBQUM7UUFDakYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3JDLElBQUksYUFBYSxHQUFHLElBQUksS0FBSyxFQUFhLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3BFO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakM7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBS00sb0NBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFBekMsaUJBWUM7UUFYRyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQyxJQUFJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxxQkFBUyxDQUFDLE9BQU8sRUFBRTtZQUN6RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1NBQzdDO2FBQU07WUFDSCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQy9DO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDNUIsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMvQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBR08sMENBQWlCLEdBQXpCLFVBQTBCLGFBQWE7UUFDbkMsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxTQUFTLEdBQUcsQ0FBQztnQkFBRSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZTtxQkFDM0IsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVELElBQUksTUFBTSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUcsTUFBUSxDQUFDLENBQUM7Z0JBQ3ZELEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDOUI7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUVNLHFDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDekMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLFNBQVMsR0FBRyxDQUFDO2dCQUFFLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDakMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlO3FCQUMzQixHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXO29CQUN4RCx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUN4RTtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDOztJQS9LRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzttREFDZ0I7SUFFbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQzs7eURBQ29CO0lBd0kvQztRQURDLHFCQUFNLENBQUMsZUFBZSxDQUFDOzs7OzJEQWdCdkI7SUE1SmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FtTGxDO0lBQUQscUJBQUM7Q0FuTEQsQUFtTEMsQ0FuTDJDLGlDQUF1QixHQW1MbEU7a0JBbkxvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFZmZlY3R9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9BdWRpby9BdWRpb01hbmFnZXInXHJcbmltcG9ydCBMb2FkUmVzTWFuYWdlciBmcm9tICcuLi8uLi9GcmFtZXdvcmsvTG9hZFJlc291cmNlcy9Mb2FkUmVzTWFuYWdlcidcclxuaW1wb3J0IHtHYW1lU3RhdGV9IGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlJ1xyXG5pbXBvcnQgU2xvdEdhbWVNYW5hZ2VyIGZyb20gJy4uLy4uL0ZyYW1ld29yay9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IFNsb3RTdHlsZU1hbmFnZXIgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Nsb3QvU2xvdFN0eWxlTWFuYWdlcidcclxuaW1wb3J0IE5vTGluZVNsb3QgZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1Nsb3QvU2xvdFR5cGUvTm9MaW5lU2xvdCdcclxuaW1wb3J0IEFTbG90SW5pdGlhbGl6ZVRlbXBsYXRlIGZyb20gJy4uLy4uL0ZyYW1ld29yay9UZW1wbGF0ZS9TbG90L0FTbG90SW5pdGlhbGl6ZVRlbXBsYXRlJ1xyXG5pbXBvcnQge1Jlc3BvbnNlVHlwZX0gZnJvbSBcIi4uLy4uL0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lRnJlZVJlc3VsdCBmcm9tIFwiLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL0ZyZWVSZXN1bHQvTm9MaW5lRnJlZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lUmVzdWx0IGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvTm9ybWFsUmVzdWx0L05vTGluZVJlc3VsdFwiO1xyXG5pbXBvcnQgTm9MaW5lVGFibGVJbmZvIGZyb20gXCIuLi8uLi9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvVGFibGVJbmZvL05vTGluZVRhYmxlSW5mb1wiO1xyXG5pbXBvcnQge1dlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSAnLi4vLi4vRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlcidcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdENvbnRyb2xsZXIgZXh0ZW5kcyBBU2xvdEluaXRpYWxpemVUZW1wbGF0ZSB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm90ZWN0ZWQgc2xvdFJvdzogY2MuTm9kZVtdID0gW107XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uQ2xpcClcclxuICAgIHByaXZhdGUgZ3JpZEFuaW1hdGlvbjogY2MuQW5pbWF0aW9uQ2xpcFtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgZ3JpZE5vZGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+O1xyXG4gICAgcHJvdGVjdGVkIGdpcmRTcHJpdGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj47XHJcbiAgICBwcm90ZWN0ZWQgbm9ybWFsUmVzdWx0OiBOb0xpbmVSZXN1bHQ7XHJcbiAgICBwcm90ZWN0ZWQgZnJlZVJlc3VsdDogTm9MaW5lRnJlZVJlc3VsdDtcclxuICAgIHByaXZhdGUgdGFibGVJbmZvOiBOb0xpbmVUYWJsZUluZm87XHJcbiAgICBwdWJsaWMgc3RhdGljIGluc3RhbmNlOiBTbG90Q29udHJvbGxlcjtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DcmVhdGUoKSB7XHJcbiAgICAgICAgU2xvdENvbnRyb2xsZXIuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm9ybWFsUmVzdWx0ID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lUmVzdWx0PigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5OT1JNQUwpO1xyXG4gICAgICAgIHRoaXMuZnJlZVJlc3VsdCA9XHJcbiAgICAgICAgICAgIFdlYlJlc3BvbnNlTWFuYWdlclxyXG4gICAgICAgICAgICAgICAgLmluc3RhbmNlPE5vTGluZUZyZWVSZXN1bHQ+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLkZSRUUpO1xyXG4gICAgICAgIHRoaXMudGFibGVJbmZvID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lVGFibGVJbmZvPigpXHJcbiAgICAgICAgICAgICAgICAuZ2V0UmVzdWx0KFJlc3BvbnNlVHlwZS5UQUJMRV9JTkZPKTtcclxuICAgICAgICB0aGlzLmdyaWROb2RlVG9NYXAgPSB0aGlzLmdldEFsbEdyaWROb2RlKCk7XHJcbiAgICAgICAgdGhpcy5naXJkU3ByaXRlVG9NYXAgPSB0aGlzLmdldEFsbEdyaWRTcHJpdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNsb3RTdHlsZSDliJ3oqK3lrpos5aaC54Sh56ym5ZCI55qE5Yqf6IO95qij5byPIOWPr+e5vOaJv+aKveixoemhniBBU2xvdCDoh6rlrprnvqnkvb/nlKhcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIHNsb3RTdHlsZVNldHRpbmcoKSB7XHJcbiAgICAgICAgU2xvdFN0eWxlTWFuYWdlci5pbnN0YW5jZVxyXG4gICAgICAgICAgICAuc2V0U2xvdFRlbXBsYXRlKE5vTGluZVNsb3QpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ln7fooYznmoRjbGFzc1xyXG4gICAgICAgICAgICAuc2V0U2xvdEdpcmRTcGVlZCgwLjA4KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pgYrmiLLkuIDoiKzpgJ/luqZcclxuICAgICAgICAgICAgLnNldFNsb3RHcmlkSGVpZ2h0KDE3MCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6ICB6JmO5qmf5qC85a2Q6auY5bqmXHJcbiAgICAgICAgICAgIC5zZXRTbG90Um93R3JpZENvdW50KDMpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+iAgeiZjuapn+avj+WIl+agvOWtkOaVuFxyXG4gICAgICAgICAgICAuc2V0U2xvdFR1cm5Db3VudCgyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuIDoiKzlgZzmraLmnIDlsJHovYnli5XmrKHmlbhcclxuICAgICAgICAgICAgLnNldFNwZWVkVXBNdWx0aXBsZSgyKSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqg6YCf5YCN546HXHJcbiAgICAgICAgICAgIC5zbG90Q29sdW1uVG9Ud2Vlbih0aGlzLnNsb3RSb3cpICAgICAgICAgICAgICAgICAgICAgICAgLy/ln7fooYzogIHomY7mqZ/li5XnlavnmoTliJdcclxuICAgICAgICAgICAgLnNldEdyaWROb2RlVG9NYXAodGhpcy5ncmlkTm9kZVRvTWFwKSAgICAgICAgICAgICAgICAgICAgICAgIC8v5Z+36KGM5YuV55Wr55qE5omA5pyJ5qC85a2QXHJcbiAgICAgICAgICAgIC5zZXRHaXJkU3ByaXRlVG9NYXAodGhpcy5naXJkU3ByaXRlVG9NYXApICAgICAgICAgICAgICAgICAgICAvL+abtOaPm+WclueJh+eahOaJgOacieagvOWtkFxyXG4gICAgICAgICAgICAuc2V0R3JpZEltZyhMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbWdSZXMuZ2V0KFwiZ3JpZEltZ1wiKSkgICAvL+mBiuaIsuS4rWdyaWTnmoTmiYDmnInmoLzlrZBcclxuICAgICAgICAgICAgLmJ1aWxkKCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5a+m5L6L5YyWc2V0U2xvdFRlbXBsYXRl5Y+D5pW45YWn55qEQ2xhc3NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsOaJgOaciWdyaWQg6Zqo5qmf5ZyW54mHXHJcbiAgICAgKiDlpoLmnpzmr4/liJfnmoQzfjXmoLzmoLzlrZDpnIDopoHpoa/npLogVGFibGVJbmZvIOWbnuWCs+WbnuS+hueahOWIneWni2dyaWTnrZTmoYhcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzbG90SW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICBsZXQgYXJyYXlUb1Nwcml0ZXM6IEl0ZXJhYmxlSXRlcmF0b3I8QXJyYXk8Y2MuU3ByaXRlPj4gPSB0aGlzLmdpcmRTcHJpdGVUb01hcC52YWx1ZXMoKTtcclxuICAgICAgICBsZXQgaW1nTGVuZ3RoID0gTG9hZFJlc01hbmFnZXIuaW5zdGFuY2UuaW1nUmVzLmdldChcImdyaWRJbWdcIikuc2l6ZTtcclxuICAgICAgICBsZXQgZ3JpZEluZGV4O1xyXG4gICAgICAgIGxldCBhbnN3ZXJJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgc3ByaXRlcyBvZiBhcnJheVRvU3ByaXRlcykge1xyXG4gICAgICAgICAgICBncmlkSW5kZXggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBzcHJpdGUgb2Ygc3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhbmRvbTogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaW1nTGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6Kmy5qC85a2Q5piv55So5L6G6aGv56S65Yid5aeL562U5qGI55qELOWwh+S4jeabtOaWsOmaqOapn+WclueJh1xyXG4gICAgICAgICAgICAgICAgaWYgKGdyaWRJbmRleCA+PSAzICYmIGdyaWRJbmRleCA8PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBbnN3ZXJHcmlkKGdyaWRJbmRleCwgYW5zd2VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuc3dlckluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmltZ1Jlcy5nZXQoXCJncmlkSW1nXCIpLmdldChTdHJpbmcocmFuZG9tKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBncmlkSW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaWsCBUYWJsZUluZm8g5Zue5YKz5Zue5L6G55qE5Yid5aeLZ3JpZOetlOahiFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGdyaWRJbmRleFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuc3dlckluZGV4XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUFuc3dlckdyaWQoZ3JpZEluZGV4OiBudW1iZXIsIGFuc3dlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcm93SW5kZXggPSBNYXRoLmZsb29yKGFuc3dlckluZGV4IC8gMyk7XHJcbiAgICAgICAgbGV0IGFuc3dlcjogbnVtYmVyID0gdGhpcy50YWJsZUluZm8uR3JpZFthbnN3ZXJJbmRleF07XHJcbiAgICAgICAgdGhpcy5naXJkU3ByaXRlVG9NYXBcclxuICAgICAgICAgICAgLmdldChyb3dJbmRleClbZ3JpZEluZGV4XVxyXG4gICAgICAgICAgICAuc3ByaXRlRnJhbWUgPSBMb2FkUmVzTWFuYWdlci5pbnN0YW5jZS5pbWdSZXMuZ2V0KFwiZ3JpZEltZ1wiKS5nZXQoU3RyaW5nKGFuc3dlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ou/5Y+W6KaB6LeRZ3JpZOi8quaSreeahE5vZGVcclxuICAgICAqIHJldHVybiBNYXA8bnVtYmVyICwgQXJyYXk8Y2MuTm9kZT4+XHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRBbGxHcmlkTm9kZSgpOiBNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj4ge1xyXG4gICAgICAgIGxldCBncmlkczogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+ID0gbmV3IE1hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+PigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zbG90Um93Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlczogQXJyYXk8Y2MuTm9kZT4gPSB0aGlzLnNsb3RSb3dbaV0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGxldCBub2RlVG9BcnJheTogQXJyYXk8Y2MuTm9kZT4gPSBuZXcgQXJyYXk8Y2MuTm9kZT4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IG5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlVG9BcnJheS5wdXNoKG5vZGVzW2pdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmlkcy5zZXQoaSwgbm9kZVRvQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ3JpZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmi7/lj5bmiYDmnInopoHmm7TmlLnlnJbniYfnmoRHcmlkXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBnZXRBbGxHcmlkU3ByaXRlKCk6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+IHtcclxuICAgICAgICBsZXQgc3ByaXRlczogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj4gPSBuZXcgTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdFJvdy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLnNsb3RSb3dbaV0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVUb0FycmF5ID0gbmV3IEFycmF5PGNjLlNwcml0ZT4oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IG5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGVUb0FycmF5LnB1c2gobm9kZXNbal0uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwcml0ZXMuc2V0KGksIHNwcml0ZVRvQXJyYXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3ByaXRlcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdpbkdyaWQ6IEFycmF5PG51bWJlcj47XHJcbiAgICBwcml2YXRlIHRpbWVyOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGFuc3dlclRvQXJyYXk6IEFycmF5PG51bWJlcj47XHJcbiAgICBwdWJsaWMgc2hvd1dpbkdyaWQod2luR3JpZDogQXJyYXk8bnVtYmVyPikge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5GUkVFSU5HKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyVG9BcnJheSA9IHRoaXMuZnJlZVJlc3VsdC5HcmlkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyVG9BcnJheSA9IHRoaXMubm9ybWFsUmVzdWx0LkdyaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2luR3JpZCA9IHdpbkdyaWQ7XHJcbiAgICAgICAgdGhpcy5wbGF5R3JpZEFuaW1hdGlvbih0aGlzLmFuc3dlclRvQXJyYXkpO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlHcmlkQW5pbWF0aW9uKHRoaXMuYW5zd2VyVG9BcnJheSk7XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEVmZmVjdChcIldpblNpbmdsZUxpbmVcIilcclxuICAgIHByaXZhdGUgcGxheUdyaWRBbmltYXRpb24oYW5zd2VyVG9BcnJheSkge1xyXG4gICAgICAgIGxldCBjb2x1bW5JbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGdyaWRJbmRleCA9IDM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpbkdyaWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGdyaWRJbmRleCA+IDUpIGdyaWRJbmRleCA9IDM7XHJcbiAgICAgICAgICAgIGNvbHVtbkluZGV4ID0gTWF0aC5mbG9vcihpIC8gMyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpbkdyaWRbaV0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hID0gdGhpcy5naXJkU3ByaXRlVG9NYXBcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KGNvbHVtbkluZGV4KVtncmlkSW5kZXhdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlciA9IGFuc3dlclRvQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICBhbmltYS5hZGRDbGlwKHRoaXMuZ3JpZEFuaW1hdGlvblthbnN3ZXJdLCBgJHthbnN3ZXJ9YCk7XHJcbiAgICAgICAgICAgICAgICBhbmltYS5wbGF5KFN0cmluZyhhbnN3ZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmlkSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlV2luR3JpZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMud2luR3JpZCAmJiAhdGhpcy50aW1lcikgcmV0dXJuO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgbGV0IGNvbHVtbkluZGV4ID0gMDtcclxuICAgICAgICBsZXQgZ3JpZEluZGV4ID0gMztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMud2luR3JpZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZ3JpZEluZGV4ID4gNSkgZ3JpZEluZGV4ID0gMztcclxuICAgICAgICAgICAgY29sdW1uSW5kZXggPSBNYXRoLmZsb29yKGkgLyAzKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2luR3JpZFtpXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gdGhpcy5hbnN3ZXJUb0FycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuaW1hID0gdGhpcy5naXJkU3ByaXRlVG9NYXBcclxuICAgICAgICAgICAgICAgICAgICAuZ2V0KGNvbHVtbkluZGV4KVtncmlkSW5kZXhdLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgYW5pbWEucmVtb3ZlQ2xpcCh0aGlzLmdyaWRBbmltYXRpb25bYW5zd2VyXSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpcmRTcHJpdGVUb01hcC5nZXQoY29sdW1uSW5kZXgpW2dyaWRJbmRleF0uc3ByaXRlRnJhbWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLmltZ1Jlcy5nZXQoXCJncmlkSW1nXCIpLmdldChTdHJpbmcoYW5zd2VyKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmlkSW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53aW5HcmlkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgIH1cclxufVxyXG4iXX0=