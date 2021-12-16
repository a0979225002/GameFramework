"use strict";
cc._RF.push(module, '21263aXRqdJf5wJmdGP/eH+', 'NoLineSlot');
// script/Framework/Slot/SlotType/NoLineSlot.ts

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
var AudioManager_1 = require("../../Audio/AudioManager");
var GameState_1 = require("../../Process/Enum/GameState");
var SlotGameManager_1 = require("../../Process/SlotGameManager");
var ResponseType_1 = require("../../WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../WebResponse/WebResponseManager");
var ASlot_1 = require("../ASlot");
var ScrollFocusStateNotification_1 = require("../SlotNotifivation/ScrollFocusStateNotification");
var NoLineSlot = /** @class */ (function (_super) {
    __extends(NoLineSlot, _super);
    function NoLineSlot(styleData) {
        var _this = _super.call(this, styleData) || this;
        if (!styleData)
            return _this;
        _this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
        _this.freeResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.FREE);
        _this.slotTurnCount = _this.styleData.slotTurnCount;
        _this.slotGirdSpeed = _this.styleData.slotGirdSpeed;
        _this.slotRowGridCount = _this.styleData.slotRowGridCount;
        _this.slotGridHeight = _this.styleData.slotGridHeight;
        _this.speedUpMultiple = _this.styleData.speedUpMultiple;
        _this.slotColumnToTween = _this.styleData.slotColumnToTween;
        _this.gridNodeToMap = _this.styleData.gridNodeToMap;
        _this.gridSpriteToMap = _this.styleData.gridSpriteToMap;
        _this.gridImg = _this.styleData.gridImg;
        //計算每列高度
        var rowHeight = _this.slotRowGridCount * _this.slotGridHeight;
        _this.rowData = new Array();
        //rowData (要往下的格子數量,要下拉的高度);
        _this.rowData.push(_this.slotRowGridCount, rowHeight);
        _this.isSlotEnd = [];
        _this.initializeState();
        return _this;
    }
    NoLineSlot.prototype.sineInSlot = function () {
        var _this = this;
        var time = 0;
        var sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise(function (resolve) {
            var e_1, _a;
            var index = 0;
            try {
                for (var _b = __values(_this.slotColumnToTween), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var columnNode = _c.value;
                    cc.tween(columnNode)
                        .delay(time)
                        .to((_this.slotGirdSpeed * 1.5), { y: columnNode.y + sineInHeight }, { easing: 'quadOut' })
                        .by(_this.slotGirdSpeed, { y: -sineInHeight })
                        .call(function () {
                        index++;
                        if (index === _this.slotColumnToTween.length) {
                            resolve();
                        }
                    })
                        .start();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    NoLineSlot.prototype.runSlotAnimation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var columnLength = _this.slotColumnToTween.length;
            AudioManager_1.default.instance.effectPlay("SlotTrun");
            for (var i = 0; i < columnLength; i++) {
                if (i == columnLength - 1) {
                    _this.makeSlotAnimation(i, resolve);
                    return;
                }
                _this.makeSlotAnimation(i);
            }
        });
    };
    /**
     * 開始執行格子輪播動畫
     * 如果server未回傳正確答案,將持續隨機圖片無限跑
     * @param index{number} 當前跑的是哪一列
     * @param resolve 當跑完時回傳Promise 讓Api執行下一段方法
     * @param numberOfTimes 監聽當前跑了幾輪,sever回傳答案後才開始計算圈數
     */
    NoLineSlot.prototype.makeSlotAnimation = function (index, resolve, numberOfTimes) {
        var _this = this;
        if (numberOfTimes === void 0) { numberOfTimes = 0; }
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        var duration = this.slotGirdSpeed * this.slotRowGridCount / this.speed;
        var node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, { y: node.y - this.rowData[1] })
            .call(function () {
            //更新被Mask的Grid,將之移動到原位子
            _this.updateGridPosition(_this.gridNodeToMap.get(index), index);
            //如果server有回傳答案,將可進入停軸判斷
            if (SlotGameManager_1.default.instance.isResultOk) {
                numberOfTimes++;
                // 假如當前需要即停,將直接停止slot
                if (_this.isCanStop(index, resolve))
                    return;
                //如果當前是第一列,將判斷是否已達到需轉動的次數
                if (index == 0 && numberOfTimes == _this.checkSlotTurnCount(index)) {
                    _this.showAnswer(index);
                    _this.isSlotEnd[index] = true;
                }
                else if (index != 0 &&
                    _this.isSlotEnd[index - 1] &&
                    numberOfTimes == _this.checkSlotTurnCount(index)) {
                    _this.showAnswer(index, resolve);
                    _this.isSlotEnd[index] = true;
                    _this.setLookAtEventNotify(false, index);
                    AudioManager_1.default.instance.effectPlay("SlotStop");
                }
                else {
                    _this.makeSlotAnimation(index, resolve, numberOfTimes);
                }
            }
            else {
                _this.makeSlotAnimation(index, resolve, numberOfTimes);
            }
        })
            .start();
    };
    NoLineSlot.prototype.checkSlotTurnCount = function (index) {
        var count;
        if (this.isSpeedUp) {
            count = this.slotTurnCount;
        }
        else if (this.checkLookAt(index)) {
            count = index * 4 + this.slotTurnCount;
            this.setLookAtEventNotify(true, index);
        }
        else {
            count = this.slotTurnCount + index;
        }
        return count;
    };
    NoLineSlot.prototype.setLookAtEventNotify = function (isShow, index) {
        if (this.isSlotEnd[index - 1] && this.checkLookAt(index)) {
            ScrollFocusStateNotification_1.default.instance.notify(index, isShow);
        }
    };
    /**
     * 檢查是否可以即停
     */
    NoLineSlot.prototype.isCanStop = function (index, resolve) {
        if (this.isSlotImmediateStop) {
            this.showAnswer(index, resolve);
            this.isSlotEnd[index] = true;
            this.setLookAtEventNotify(false, index);
            return true;
        }
        return false;
    };
    /**
     * 更新輪播格子位置
     * @param rowNodes 哪一列的 node 需要更換圖片位置
     * @param columnIndex 當前是第幾列
     */
    NoLineSlot.prototype.updateGridPosition = function (rowNodes, columnIndex) {
        var rowLength = rowNodes.length - 1;
        var random;
        var lastSprite;
        var end = this.rowData[0];
        for (var i = rowLength; i > end; i--) {
            lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength];
            //將該列的陣列中的最後一個sprite 節點 更新到該陣列的第一個位置
            this.gridSpriteToMap.get(columnIndex).unshift(lastSprite);
            //刪除陣列中的最後一個 sprite 節點
            this.gridSpriteToMap.get(columnIndex).pop();
            //隨機一個數字
            random = Math.floor(Math.random() * this.gridImg.size);
            this.gridSpriteToMap.get(columnIndex)[0].spriteFrame =
                this.gridImg.get(String(random));
            //重新給予最後一個陣列中的node 更新 y 位置
            rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
            //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
            rowNodes.unshift(rowNodes[rowLength]);
            //刪除陣列中的最後一個 node 節點
            rowNodes.pop();
        }
    };
    /**
     * 對該列顯示結果的同時,並給予彈跳效果
     * @param {number} index : 哪一列
     * @param resolve
     */
    NoLineSlot.prototype.showAnswer = function (index, resolve) {
        var _this = this;
        this.updateGridAnswer(index);
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        var duration = this.slotGirdSpeed * this.rowData[0] / this.speed;
        var node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, { y: node.y - this.rowData[1] })
            .call(function () {
            //更新被Mask的Grid,將之移動到原位子
            _this.updateGridPosition(_this.gridNodeToMap.get(index), index);
            _this.sineOutAnimation(index, resolve);
        })
            .start();
    };
    /**
     * 檢查是否需要瞇牌
     * @param index{number}:檢查該列是否需要瞇牌
     * @return {boolean} : 如果需要瞇牌,返回true
     * @private
     */
    NoLineSlot.prototype.checkLookAt = function (index) {
        var lookAt;
        var isShowLookAt;
        if (SlotGameManager_1.default.instance.gameState === GameState_1.GameState.FREEING) {
            lookAt = this.freeResult.LookAt;
        }
        else {
            lookAt = this.normalResult.LookAt;
        }
        isShowLookAt = !!lookAt[index];
        return isShowLookAt;
    };
    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    NoLineSlot.prototype.sineOutAnimation = function (index, resolve) {
        var _this = this;
        if ((this.isSpeedUp || this.isSlotImmediateStop) &&
            index == this.slotColumnToTween.length - 1) {
            AudioManager_1.default.instance.effectPlay("SlotStop");
        }
        else if (!this.isSpeedUp) {
            AudioManager_1.default.instance.effectPlay("SlotStop");
        }
        var sineOutHeight = Math.floor(this.styleData.slotGridHeight / 2);
        var node = this.slotColumnToTween[index];
        cc.tween(node)
            .to((this.slotGirdSpeed), { y: node.y - sineOutHeight })
            .by(this.slotGirdSpeed * 6, { y: +sineOutHeight }, { easing: 'bounceOut' })
            .call(function () {
            _this.checkFreeIcon(index);
            if (index === _this.slotColumnToTween.length - 1) {
                AudioManager_1.default.instance.effectStop("SlotTrun");
                resolve();
            }
        })
            .start();
    };
    NoLineSlot.prototype.checkFreeIcon = function (index) {
        var gridAnswer;
        if (SlotGameManager_1.default.instance.gameState === GameState_1.GameState.FREEING) {
            gridAnswer = this.freeResult.Grid;
        }
        else {
            gridAnswer = this.normalResult.Grid;
        }
        var start = index * 3;
        var end = start + 3;
        for (start; start < end; start++) {
            if (gridAnswer[start] == 10) {
                this.freeIconCount++;
                //如果非加速模式,對個別列蝶家事撥放數量增加時的個別音樂
                if (!this.isSpeedUp) {
                    AudioManager_1.default.instance.effectPlay("getFreeIcon" + this.freeIconCount);
                }
            }
        }
        //如果是加速模式,直接拿取該slot中Free總數量需播放的音樂
        if (this.isSpeedUp && this.freeIconCount >= 1
            && index == this.slotColumnToTween.length - 1) {
            AudioManager_1.default.instance.effectPlay("getFreeIcon" + this.freeIconCount);
        }
    };
    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    NoLineSlot.prototype.updateGridAnswer = function (index) {
        var gridAnswer;
        if (SlotGameManager_1.default.instance.gameState === GameState_1.GameState.FREEING) {
            gridAnswer = this.freeResult.Grid;
        }
        else {
            gridAnswer = this.normalResult.Grid;
        }
        var start = index * this.slotRowGridCount;
        var end = start + this.slotRowGridCount;
        var gridIndex = 0;
        for (start; start < end; start++) {
            var answer = gridAnswer[start];
            this.gridSpriteToMap.get(index)[gridIndex].spriteFrame
                = this.gridImg.get(String(answer));
            gridIndex++;
        }
    };
    /**
     * 初始化該輪所有狀態
     */
    NoLineSlot.prototype.initializeState = function () {
        this.isSlotImmediateStop = false;
        this.isSpeedUp = this.speed > 1;
        this.freeIconCount = 0;
        if (!this.isSlotEnd) {
            for (var i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd.push(false);
            }
        }
        else {
            for (var i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd[i] = false;
            }
        }
    };
    return NoLineSlot;
}(ASlot_1.default));
exports.default = NoLineSlot;

cc._RF.pop();