"use strict";
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