
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotType/NoLineSlot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3RUeXBlXFxOb0xpbmVTbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW1EO0FBQ25ELDBEQUFzRDtBQUN0RCxpRUFBMkQ7QUFDM0Qsb0VBQWlFO0FBR2pFLDJFQUF1RTtBQUN2RSxrQ0FBNEI7QUFDNUIsaUdBQTRGO0FBRzVGO0lBQXdDLDhCQUFLO0lBcUV6QyxvQkFBWSxTQUFvQjtRQUFoQyxZQUNJLGtCQUFNLFNBQVMsQ0FBQyxTQTBCbkI7UUF6QkcsSUFBSSxDQUFDLFNBQVM7eUJBQVM7UUFDdkIsS0FBSSxDQUFDLFlBQVk7WUFDYix1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFnQjtpQkFDeEIsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEMsS0FBSSxDQUFDLFVBQVU7WUFDWCx1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFvQjtpQkFDNUIsU0FBUyxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNsRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ2xELEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3hELEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDcEQsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztRQUN0RCxLQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUMxRCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FB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WUFFL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVztrQkFDaEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFdkMsU0FBUyxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFlLEdBQXRCO1FBRUksSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztRQUVqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRWhDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRXZCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM5QjtTQUNKO2FBQU07WUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDN0I7U0FDSjtJQUNMLENBQUM7SUFDTCxpQkFBQztBQUFELENBemJBLEFBeWJDLENBemJ1QyxlQUFLLEdBeWI1QyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdWRpb01hbmFnZXIgZnJvbSAnLi4vLi4vQXVkaW8vQXVkaW9NYW5hZ2VyJ1xyXG5pbXBvcnQge0dhbWVTdGF0ZX0gZnJvbSAnLi4vLi4vUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZSdcclxuaW1wb3J0IFNsb3RHYW1lTWFuYWdlciBmcm9tICcuLi8uLi9Qcm9jZXNzL1Nsb3RHYW1lTWFuYWdlcidcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuLi8uLi9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lRnJlZVJlc3VsdCBmcm9tIFwiLi4vLi4vV2ViUmVzcG9uc2UvU2V2ZXJEYXRhTW9kZWwvRnJlZVJlc3VsdC9Ob0xpbmVGcmVlUmVzdWx0XCI7XHJcbmltcG9ydCBOb0xpbmVSZXN1bHQgZnJvbSBcIi4uLy4uL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL05vcm1hbFJlc3VsdC9Ob0xpbmVSZXN1bHRcIjtcclxuaW1wb3J0IHtXZWJSZXNwb25zZU1hbmFnZXJ9IGZyb20gJy4uLy4uL1dlYlJlc3BvbnNlL1dlYlJlc3BvbnNlTWFuYWdlcidcclxuaW1wb3J0IEFTbG90IGZyb20gJy4uL0FTbG90J1xyXG5pbXBvcnQgU2Nyb2xsRm9jdXNTdGF0ZU5vdGlmaWNhdGlvbiBmcm9tIFwiLi4vU2xvdE5vdGlmaXZhdGlvbi9TY3JvbGxGb2N1c1N0YXRlTm90aWZpY2F0aW9uXCI7XHJcbmltcG9ydCB7U3R5bGVEYXRhfSBmcm9tICcuLi9TbG90U3R5bGVNYW5hZ2VyJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9MaW5lU2xvdCBleHRlbmRzIEFTbG90IHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4gOiIrOWBnOatouacgOWwkei9ieWLleasoeaVuFxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2xvdFR1cm5Db3VudDogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YGK5oiy5LiA6Iis6YCf5bqmXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzbG90R2lyZFNwZWVkOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgYrmiLLmr4/liJfnmoTmoLzlrZDmlbjph49cclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNsb3RSb3dHcmlkQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiAgeiZjuapn+agvOWtkOmrmOW6plxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2xvdEdyaWRIZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWKoOmAn+WAjeeOh1xyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3BlZWRVcE11bHRpcGxlOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDln7fooYzogIHomY7mqZ/li5XnlavnmoTliJdcclxuICAgICAqIEB0eXBlIHtBcnJheTxjYy5Ob2RlPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2xvdENvbHVtblRvVHdlZW46IEFycmF5PGNjLk5vZGU+O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6LeR6YGK5oiy5pu05o+b5L2N572u55qEZ3JpZCDnr4Dpu55cclxuICAgICAqIEB0eXBlIHtNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdyaWROb2RlVG9NYXA6IE1hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+PjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOi3kemBiuaIsuabtOaPm+etlOahiOeahGdyaWQg56+A6bueXHJcbiAgICAgKiBAdHlwZSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGdyaWRTcHJpdGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgYrmiLLkuK3miYDmnInpnZzmhYtncmlk5ZyW54mHXHJcbiAgICAgKiBAcGFyYW0ge1N0eWxlRGF0YX0gc3R5bGVEYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ3JpZEltZzogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByb3dEYXRhOiBBcnJheTxudW1iZXI+IC8vIFtcIueVtuWJjeimgei3keW5vuWAi+agvOWtkFwiLFwi55W25YmN6KaB6LeR55qE6auY5bqmXCJdXHJcbiAgICBwcml2YXRlIG5vcm1hbFJlc3VsdDogTm9MaW5lUmVzdWx0O1xyXG4gICAgcHJpdmF0ZSBmcmVlUmVzdWx0OiBOb0xpbmVGcmVlUmVzdWx0XHJcbiAgICAvL+mBiuaIsuavj+WIl+aYr+WQpuW3sue2k+e1kOadn1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBpc1Nsb3RFbmQ6IEFycmF5PGJvb2xlYW4+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0eWxlRGF0YTogU3R5bGVEYXRhKSB7XHJcbiAgICAgICAgc3VwZXIoc3R5bGVEYXRhKVxyXG4gICAgICAgIGlmICghc3R5bGVEYXRhKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5ub3JtYWxSZXN1bHQgPVxyXG4gICAgICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgICAgIC5pbnN0YW5jZTxOb0xpbmVSZXN1bHQ+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLk5PUk1BTCk7XHJcbiAgICAgICAgdGhpcy5mcmVlUmVzdWx0ID1cclxuICAgICAgICAgICAgV2ViUmVzcG9uc2VNYW5hZ2VyXHJcbiAgICAgICAgICAgICAgICAuaW5zdGFuY2U8Tm9MaW5lRnJlZVJlc3VsdD4oKVxyXG4gICAgICAgICAgICAgICAgLmdldFJlc3VsdChSZXNwb25zZVR5cGUuRlJFRSk7XHJcbiAgICAgICAgdGhpcy5zbG90VHVybkNvdW50ID0gdGhpcy5zdHlsZURhdGEuc2xvdFR1cm5Db3VudDtcclxuICAgICAgICB0aGlzLnNsb3RHaXJkU3BlZWQgPSB0aGlzLnN0eWxlRGF0YS5zbG90R2lyZFNwZWVkO1xyXG4gICAgICAgIHRoaXMuc2xvdFJvd0dyaWRDb3VudCA9IHRoaXMuc3R5bGVEYXRhLnNsb3RSb3dHcmlkQ291bnQ7XHJcbiAgICAgICAgdGhpcy5zbG90R3JpZEhlaWdodCA9IHRoaXMuc3R5bGVEYXRhLnNsb3RHcmlkSGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc3BlZWRVcE11bHRpcGxlID0gdGhpcy5zdHlsZURhdGEuc3BlZWRVcE11bHRpcGxlO1xyXG4gICAgICAgIHRoaXMuc2xvdENvbHVtblRvVHdlZW4gPSB0aGlzLnN0eWxlRGF0YS5zbG90Q29sdW1uVG9Ud2VlbjtcclxuICAgICAgICB0aGlzLmdyaWROb2RlVG9NYXAgPSB0aGlzLnN0eWxlRGF0YS5ncmlkTm9kZVRvTWFwO1xyXG4gICAgICAgIHRoaXMuZ3JpZFNwcml0ZVRvTWFwID0gdGhpcy5zdHlsZURhdGEuZ3JpZFNwcml0ZVRvTWFwO1xyXG4gICAgICAgIHRoaXMuZ3JpZEltZyA9IHRoaXMuc3R5bGVEYXRhLmdyaWRJbWc7XHJcbiAgICAgICAgLy/oqIjnrpfmr4/liJfpq5jluqZcclxuICAgICAgICBsZXQgcm93SGVpZ2h0ID0gdGhpcy5zbG90Um93R3JpZENvdW50ICogdGhpcy5zbG90R3JpZEhlaWdodDtcclxuICAgICAgICB0aGlzLnJvd0RhdGEgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgIC8vcm93RGF0YSAo6KaB5b6A5LiL55qE5qC85a2Q5pW46YePLOimgeS4i+aLieeahOmrmOW6pik7XHJcbiAgICAgICAgdGhpcy5yb3dEYXRhLnB1c2godGhpcy5zbG90Um93R3JpZENvdW50LCByb3dIZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuaXNTbG90RW5kID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2luZUluU2xvdCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBsZXQgdGltZSA9IDA7XHJcbiAgICAgICAgbGV0IHNpbmVJbkhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5zdHlsZURhdGEuc2xvdEdyaWRIZWlnaHQgLyAyKTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uTm9kZSBvZiB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuKSB7XHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihjb2x1bW5Ob2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5kZWxheSh0aW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygodGhpcy5zbG90R2lyZFNwZWVkICogMS41KSwge3k6IGNvbHVtbk5vZGUueSArIHNpbmVJbkhlaWdodH0sIHtlYXNpbmc6ICdxdWFkT3V0J30pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KHRoaXMuc2xvdEdpcmRTcGVlZCwge3k6IC1zaW5lSW5IZWlnaHR9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBydW5TbG90QW5pbWF0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5MZW5ndGggPSB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RQbGF5KFwiU2xvdFRydW5cIik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbkxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT0gY29sdW1uTGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVNsb3RBbmltYXRpb24oaSwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYWtlU2xvdEFuaW1hdGlvbihpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZaL5aeL5Z+36KGM5qC85a2Q6Lyq5pKt5YuV55WrXHJcbiAgICAgKiDlpoLmnpxzZXJ2ZXLmnKrlm57lgrPmraPnorrnrZTmoYgs5bCH5oyB57qM6Zqo5qmf5ZyW54mH54Sh6ZmQ6LeRXHJcbiAgICAgKiBAcGFyYW0gaW5kZXh7bnVtYmVyfSDnlbbliY3ot5HnmoTmmK/lk6rkuIDliJdcclxuICAgICAqIEBwYXJhbSByZXNvbHZlIOeVtui3keWujOaZguWbnuWCs1Byb21pc2Ug6K6TQXBp5Z+36KGM5LiL5LiA5q615pa55rOVXHJcbiAgICAgKiBAcGFyYW0gbnVtYmVyT2ZUaW1lcyDnm6Pogb3nlbbliY3ot5Hkuoblub7ovKosc2V2ZXLlm57lgrPnrZTmoYjlvozmiY3plovlp4voqIjnrpflnIjmlbhcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYWtlU2xvdEFuaW1hdGlvbihpbmRleDogbnVtYmVyLCByZXNvbHZlPzogKCkgPT4gdm9pZCwgbnVtYmVyT2ZUaW1lczogbnVtYmVyID0gMCkge1xyXG5cclxuICAgICAgICAvL+e3qeWLleaZgumWkyA9IOeVtuWJjeS4gOWAi+agvOWtkOeahOi3kemAnyAqIOacieW5vuWAi+agvOWtkCAqIOeVtuWJjeaYr+WQpuWKoOmAnyjnhKHliqDpgJ8gPSAxKVxyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMuc2xvdEdpcmRTcGVlZCAqIHRoaXMuc2xvdFJvd0dyaWRDb3VudCAvIHRoaXMuc3BlZWQ7XHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5zbG90Q29sdW1uVG9Ud2VlbltpbmRleF07XHJcblxyXG4gICAgICAgIC8v6LeR6ICB6JmO5qmf55qE5q+P5YiXXHJcbiAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgLnRvKGR1cmF0aW9uLCB7eTogbm9kZS55IC0gdGhpcy5yb3dEYXRhWzFdfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy/mm7TmlrDooqtNYXNr55qER3JpZCzlsIfkuYvnp7vli5XliLDljp/kvY3lrZBcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUdyaWRQb3NpdGlvbih0aGlzLmdyaWROb2RlVG9NYXAuZ2V0KGluZGV4KSwgaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8v5aaC5p6cc2VydmVy5pyJ5Zue5YKz562U5qGILOWwh+WPr+mAsuWFpeWBnOi7uOWIpOaWt1xyXG4gICAgICAgICAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5pc1Jlc3VsdE9rKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlck9mVGltZXMrKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5YGH5aaC55W25YmN6ZyA6KaB5Y2z5YGcLOWwh+ebtOaOpeWBnOatonNsb3RcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NhblN0b3AoaW5kZXgsIHJlc29sdmUpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c55W25YmN5piv56ys5LiA5YiXLOWwh+WIpOaWt+aYr+WQpuW3sumBlOWIsOmcgOi9ieWLleeahOasoeaVuFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwICYmIG51bWJlck9mVGltZXMgPT0gdGhpcy5jaGVja1Nsb3RUdXJuQ291bnQoaW5kZXgpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dBbnN3ZXIoaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2xvdEVuZFtpbmRleF0gPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAhPSAwICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTbG90RW5kW2luZGV4IC0gMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyT2ZUaW1lcyA9PSB0aGlzLmNoZWNrU2xvdFR1cm5Db3VudChpbmRleClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Fuc3dlcihpbmRleCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTbG90RW5kW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TG9va0F0RXZlbnROb3RpZnkoZmFsc2UsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmVmZmVjdFBsYXkoXCJTbG90U3RvcFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWtlU2xvdEFuaW1hdGlvbihpbmRleCwgcmVzb2x2ZSwgbnVtYmVyT2ZUaW1lcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1ha2VTbG90QW5pbWF0aW9uKGluZGV4LCByZXNvbHZlLCBudW1iZXJPZlRpbWVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tTbG90VHVybkNvdW50KGluZGV4KTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BlZWRVcCkge1xyXG4gICAgICAgICAgICBjb3VudCA9IHRoaXMuc2xvdFR1cm5Db3VudDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2hlY2tMb29rQXQoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIGNvdW50ID0gaW5kZXggKiA0ICsgdGhpcy5zbG90VHVybkNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLnNldExvb2tBdEV2ZW50Tm90aWZ5KHRydWUsIGluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3VudCA9IHRoaXMuc2xvdFR1cm5Db3VudCArIGluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldExvb2tBdEV2ZW50Tm90aWZ5KGlzU2hvdzogYm9vbGVhbiwgaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2xvdEVuZFtpbmRleCAtIDFdICYmIHRoaXMuY2hlY2tMb29rQXQoaW5kZXgpKSB7XHJcbiAgICAgICAgICAgIFNjcm9sbEZvY3VzU3RhdGVOb3RpZmljYXRpb24uaW5zdGFuY2Uubm90aWZ5KGluZGV4LCBpc1Nob3cpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaqouafpeaYr+WQpuWPr+S7peWNs+WBnFxyXG4gICAgICovXHJcbiAgICBpc0NhblN0b3AoaW5kZXg6IG51bWJlciwgcmVzb2x2ZTogKCkgPT4gdm9pZCk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc1Nsb3RJbW1lZGlhdGVTdG9wKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Fuc3dlcihpbmRleCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTbG90RW5kW2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TG9va0F0RXZlbnROb3RpZnkoZmFsc2UsIGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDovKrmkq3moLzlrZDkvY3nva5cclxuICAgICAqIEBwYXJhbSByb3dOb2RlcyDlk6rkuIDliJfnmoQgbm9kZSDpnIDopoHmm7Tmj5vlnJbniYfkvY3nva5cclxuICAgICAqIEBwYXJhbSBjb2x1bW5JbmRleCDnlbbliY3mmK/nrKzlub7liJdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB1cGRhdGVHcmlkUG9zaXRpb24ocm93Tm9kZXM6IEFycmF5PGNjLk5vZGU+LCBjb2x1bW5JbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGxldCByb3dMZW5ndGggPSByb3dOb2Rlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCByYW5kb206IG51bWJlcjtcclxuICAgICAgICBsZXQgbGFzdFNwcml0ZTogY2MuU3ByaXRlO1xyXG4gICAgICAgIGxldCBlbmQgPSB0aGlzLnJvd0RhdGFbMF07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSByb3dMZW5ndGg7IGkgPiBlbmQ7IGktLSkge1xyXG5cclxuICAgICAgICAgICAgbGFzdFNwcml0ZSA9IHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChjb2x1bW5JbmRleClbcm93TGVuZ3RoXTtcclxuXHJcbiAgICAgICAgICAgIC8v5bCH6Kmy5YiX55qE6Zmj5YiX5Lit55qE5pyA5b6M5LiA5YCLc3ByaXRlIOevgOm7niDmm7TmlrDliLDoqbLpmaPliJfnmoTnrKzkuIDlgIvkvY3nva5cclxuICAgICAgICAgICAgdGhpcy5ncmlkU3ByaXRlVG9NYXAuZ2V0KGNvbHVtbkluZGV4KS51bnNoaWZ0KGxhc3RTcHJpdGUpO1xyXG5cclxuICAgICAgICAgICAgLy/liKrpmaTpmaPliJfkuK3nmoTmnIDlvozkuIDlgIsgc3ByaXRlIOevgOm7nlxyXG4gICAgICAgICAgICB0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoY29sdW1uSW5kZXgpLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgLy/pmqjmqZ/kuIDlgIvmlbjlrZdcclxuICAgICAgICAgICAgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5ncmlkSW1nLnNpemUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLmdyaWRTcHJpdGVUb01hcC5nZXQoY29sdW1uSW5kZXgpWzBdLnNwcml0ZUZyYW1lID1cclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZEltZy5nZXQoU3RyaW5nKHJhbmRvbSkpO1xyXG5cclxuICAgICAgICAgICAgLy/ph43mlrDntabkuojmnIDlvozkuIDlgIvpmaPliJfkuK3nmoRub2RlIOabtOaWsCB5IOS9jee9rlxyXG4gICAgICAgICAgICByb3dOb2Rlc1tyb3dMZW5ndGhdLnkgPSByb3dOb2Rlc1swXS55ICsgdGhpcy5zbG90R3JpZEhlaWdodDtcclxuICAgICAgICAgICAgLy/lsIfoqbLliJfnmoTpmaPliJfkuK3nmoTmnIDlvozkuIDlgItub2RlIOevgOm7niDmm7TmlrDliLDoqbLpmaPliJfnmoTnrKzkuIDlgIvkvY3nva5cclxuICAgICAgICAgICAgcm93Tm9kZXMudW5zaGlmdChyb3dOb2Rlc1tyb3dMZW5ndGhdKTtcclxuICAgICAgICAgICAgLy/liKrpmaTpmaPliJfkuK3nmoTmnIDlvozkuIDlgIsgbm9kZSDnr4Dpu55cclxuICAgICAgICAgICAgcm93Tm9kZXMucG9wKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwjeipsuWIl+mhr+ekuue1kOaenOeahOWQjOaZgizkuKbntabkuojlvYjot7PmlYjmnpxcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCA6IOWTquS4gOWIl1xyXG4gICAgICogQHBhcmFtIHJlc29sdmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzaG93QW5zd2VyKGluZGV4OiBudW1iZXIsIHJlc29sdmU/KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVHcmlkQW5zd2VyKGluZGV4KTtcclxuICAgICAgICAvL+e3qeWLleaZgumWkyA9IOeVtuWJjeS4gOWAi+agvOWtkOeahOi3kemAnyAqIOacieW5vuWAi+agvOWtkCAqIOeVtuWJjeaYr+WQpuWKoOmAnyjnhKHliqDpgJ8gPSAxKVxyXG4gICAgICAgIGxldCBkdXJhdGlvbiA9IHRoaXMuc2xvdEdpcmRTcGVlZCAqIHRoaXMucm93RGF0YVswXSAvIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuW2luZGV4XTtcclxuXHJcbiAgICAgICAgLy/ot5HogIHomY7mqZ/nmoTmr4/liJdcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oZHVyYXRpb24sIHt5OiBub2RlLnkgLSB0aGlzLnJvd0RhdGFbMV19KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL+abtOaWsOiiq01hc2vnmoRHcmlkLOWwh+S5i+enu+WLleWIsOWOn+S9jeWtkFxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVHcmlkUG9zaXRpb24odGhpcy5ncmlkTm9kZVRvTWFwLmdldChpbmRleCksIGluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2luZU91dEFuaW1hdGlvbihpbmRleCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qqi5p+l5piv5ZCm6ZyA6KaB556H54mMXHJcbiAgICAgKiBAcGFyYW0gaW5kZXh7bnVtYmVyfTrmqqLmn6XoqbLliJfmmK/lkKbpnIDopoHnnofniYxcclxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IDog5aaC5p6c6ZyA6KaB556H54mMLOi/lOWbnnRydWVcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tMb29rQXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBsZXQgbG9va0F0OiBBcnJheTxudW1iZXI+O1xyXG4gICAgICAgIGxldCBpc1Nob3dMb29rQXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuRlJFRUlORykge1xyXG4gICAgICAgICAgICBsb29rQXQgPSB0aGlzLmZyZWVSZXN1bHQuTG9va0F0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxvb2tBdCA9IHRoaXMubm9ybWFsUmVzdWx0Lkxvb2tBdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlzU2hvd0xvb2tBdCA9ICEhbG9va0F0W2luZGV4XTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzU2hvd0xvb2tBdDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlnKjnrZTmoYjpoa/npLrlvows6aas5LiK57Wm5LqI5Zue5b2I5pWI5p6cXHJcbiAgICAgKiBAcGFyYW0gaW5kZXh7bnVtYmVyfSA6IOWTquS4gOWIl+W3sue2k+mhr+ekuuetlOahiOWujOeVolxyXG4gICAgICogQHBhcmFtIHJlc29sdmV7KCk9PnZvaWR9IDog55W25omA5pyJ5YiX6YO96aGv56S6562U5qGI5LiU5Zue5b2I5pWI5p6c5a6M55Wi5pmCLOmAmuefpeWPr+S7pemAsuihjOS4i+S4gOatpVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNpbmVPdXRBbmltYXRpb24oaW5kZXg6IG51bWJlciwgcmVzb2x2ZTogKCkgPT4gdm9pZCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuaXNTcGVlZFVwIHx8IHRoaXMuaXNTbG90SW1tZWRpYXRlU3RvcCkgJiZcclxuICAgICAgICAgICAgaW5kZXggPT0gdGhpcy5zbG90Q29sdW1uVG9Ud2Vlbi5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICAgICAgICBBdWRpb01hbmFnZXIuaW5zdGFuY2UuZWZmZWN0UGxheShcIlNsb3RTdG9wXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTcGVlZFVwKSB7XHJcbiAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RQbGF5KFwiU2xvdFN0b3BcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc2luZU91dEhlaWdodCA9IE1hdGguZmxvb3IodGhpcy5zdHlsZURhdGEuc2xvdEdyaWRIZWlnaHQgLyAyKTtcclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuc2xvdENvbHVtblRvVHdlZW5baW5kZXhdO1xyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50bygodGhpcy5zbG90R2lyZFNwZWVkKSwge3k6IG5vZGUueSAtIHNpbmVPdXRIZWlnaHR9KVxyXG4gICAgICAgICAgICAuYnkodGhpcy5zbG90R2lyZFNwZWVkICogNiwge3k6ICtzaW5lT3V0SGVpZ2h0fSwge2Vhc2luZzogJ2JvdW5jZU91dCd9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZyZWVJY29uKGluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RTdG9wKFwiU2xvdFRydW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeiuuiqjeipsui7uOaYr+WQpuaciSBmcmVlIOWcluaomVxyXG4gICAgICogQHBhcmFtIGluZGV4XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZnJlZUljb25Db3VudDogbnVtYmVyO1xyXG5cclxuICAgIGNoZWNrRnJlZUljb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgbGV0IGdyaWRBbnN3ZXI6IEFycmF5PG51bWJlcj47XHJcblxyXG4gICAgICAgIGlmIChTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID09PSBHYW1lU3RhdGUuRlJFRUlORykge1xyXG4gICAgICAgICAgICBncmlkQW5zd2VyID0gdGhpcy5mcmVlUmVzdWx0LkdyaWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ3JpZEFuc3dlciA9IHRoaXMubm9ybWFsUmVzdWx0LkdyaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RhcnQgPSBpbmRleCAqIDM7XHJcbiAgICAgICAgbGV0IGVuZCA9IHN0YXJ0ICsgMztcclxuXHJcbiAgICAgICAgZm9yIChzdGFydDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcclxuICAgICAgICAgICAgaWYgKGdyaWRBbnN3ZXJbc3RhcnRdID09IDEwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVJY29uQ291bnQrKztcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c6Z2e5Yqg6YCf5qih5byPLOWwjeWAi+WIpeWIl+idtuWutuS6i+aSpeaUvuaVuOmHj+WinuWKoOaZgueahOWAi+WIpemfs+aoglxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU3BlZWRVcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5pbnN0YW5jZS5lZmZlY3RQbGF5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgZ2V0RnJlZUljb24ke3RoaXMuZnJlZUljb25Db3VudH1gXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WmguaenOaYr+WKoOmAn+aooeW8jyznm7TmjqXmi7/lj5boqbJzbG905LitRnJlZee4veaVuOmHj+mcgOaSreaUvueahOmfs+aoglxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BlZWRVcCAmJiB0aGlzLmZyZWVJY29uQ291bnQgPj0gMVxyXG4gICAgICAgICAgICAmJiBpbmRleCA9PSB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLmluc3RhbmNlLmVmZmVjdFBsYXkoXHJcbiAgICAgICAgICAgICAgICBgZ2V0RnJlZUljb24ke3RoaXMuZnJlZUljb25Db3VudH1gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pu05paw5q2j56K6562U5qGIXHJcbiAgICAgKiDnrZTmoYjmm7TmlrDlho3mr4/liJfmnIDkuIrpnaLkvY3nva4s562J5b6F5o6J5LiL5L6GLOmhr+ekuuato+eiuuetlOahiOe1plVTRVJcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCA6IOimgeabtOaWsOWTquS4gOWIl+acgOS4iumdouS4ieWAi2dyaWQg54K65q2j56K6562U5qGIXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHVwZGF0ZUdyaWRBbnN3ZXIoaW5kZXg6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgZ3JpZEFuc3dlcjogQXJyYXk8bnVtYmVyPjtcclxuXHJcbiAgICAgICAgaWYgKFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPT09IEdhbWVTdGF0ZS5GUkVFSU5HKSB7XHJcbiAgICAgICAgICAgIGdyaWRBbnN3ZXIgPSB0aGlzLmZyZWVSZXN1bHQuR3JpZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBncmlkQW5zd2VyID0gdGhpcy5ub3JtYWxSZXN1bHQuR3JpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGFydCA9IGluZGV4ICogdGhpcy5zbG90Um93R3JpZENvdW50O1xyXG4gICAgICAgIGxldCBlbmQgPSBzdGFydCArIHRoaXMuc2xvdFJvd0dyaWRDb3VudDtcclxuICAgICAgICBsZXQgZ3JpZEluZGV4ID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChzdGFydDsgc3RhcnQgPCBlbmQ7IHN0YXJ0KyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBncmlkQW5zd2VyW3N0YXJ0XTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZFNwcml0ZVRvTWFwLmdldChpbmRleClbZ3JpZEluZGV4XS5zcHJpdGVGcmFtZVxyXG4gICAgICAgICAgICAgICAgPSB0aGlzLmdyaWRJbWcuZ2V0KFN0cmluZyhhbnN3ZXIpKTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRJbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMluipsui8quaJgOacieeLgOaFi1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgaW5pdGlhbGl6ZVN0YXRlKCkge1xyXG5cclxuICAgICAgICB0aGlzLmlzU2xvdEltbWVkaWF0ZVN0b3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5pc1NwZWVkVXAgPSB0aGlzLnNwZWVkID4gMTtcclxuXHJcbiAgICAgICAgdGhpcy5mcmVlSWNvbkNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2xvdEVuZCkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2xvdENvbHVtblRvVHdlZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTbG90RW5kLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNsb3RDb2x1bW5Ub1R3ZWVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2xvdEVuZFtpXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19