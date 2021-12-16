"use strict";
cc._RF.push(module, 'd9837FFjLlIhLM3KK/Qd5AZ', 'SlotStyleManager');
// script/Framework/Slot/SlotStyleManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var SlotStyleManager = /** @class */ (function () {
    function SlotStyleManager(configManager) {
        this.configManager = configManager;
        this.style = {
            slotTemplate: null,
            slotTurnCount: null,
            slotRowGridCount: null,
            slotGirdSpeed: null,
            slotSpeedUpTurnCount: null,
            slotGridHeight: null,
            speedUpMultiple: null,
            columnIntervalTime: null,
            slotColumnToTween: null,
            gridNodeToMap: null,
            gridSpriteToMap: null,
            gridImg: null,
        };
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    SlotStyleManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new SlotStyleManager(configManager);
        }
    };
    Object.defineProperty(SlotStyleManager, "instance", {
        /**
         *  獲取已經初始化的靜態實例class
         */
        get: function () {
            if (!this._instance) {
                ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.SlotStyleFW, "該類尚未實例化");
                return;
            }
            return this._instance;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 添加執行流程的class 需繼承 ISlot
     * @param {ASlot} slotTemplate
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotTemplate = function (slotTemplate) {
        this.style.slotTemplate = slotTemplate;
        return this;
    };
    /**
     * 老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotTurnCount = function (count) {
        this.style.slotTurnCount = count;
        return this;
    };
    /**
     * 加速時老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotSpeedUpTurnCount = function (count) {
        this.style.slotSpeedUpTurnCount = count;
        return this;
    };
    /**
     * 老虎機每隔格子高度
     * @param {number} height
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotGridHeight = function (height) {
        this.style.slotGridHeight = height;
        return this;
    };
    /**
     * 老虎機一般狀態速度
     * @param {number} time
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotGirdSpeed = function (time) {
        this.style.slotGirdSpeed = time;
        return this;
    };
    /**
     * 加速時的加速被率
     * @param {number} multiple
     * @return {this}
     */
    SlotStyleManager.prototype.setSpeedUpMultiple = function (multiple) {
        this.style.speedUpMultiple = multiple;
        return this;
    };
    /**
     * 該老虎機 每列的格子數量
     * @param {number} gridCount
     * @return {this}
     */
    SlotStyleManager.prototype.setSlotRowGridCount = function (gridCount) {
        this.style.slotRowGridCount = gridCount;
        return this;
    };
    /**
     * 非加速模式,每列停止的時間間格
     * @param {number} time
     * @return {this}
     */
    SlotStyleManager.prototype.setColumnIntervalTime = function (time) {
        this.style.columnIntervalTime = time;
        return this;
    };
    /**
     * 要執行輪播動化轉動老虎機的node
     * @param {Array<cc.Node>} node
     * @return {this}
     */
    SlotStyleManager.prototype.slotColumnToTween = function (node) {
        this.style.slotColumnToTween = node;
        return this;
    };
    /**
     * 所有格子的圖片,做循環老虎雞時,需更動的圖片
     * @param {Map<number, Array<cc.Sprite>>} sprite
     * @return {this}
     */
    SlotStyleManager.prototype.setGirdSpriteToMap = function (sprite) {
        this.style.gridSpriteToMap = sprite;
        return this;
    };
    /**
     * 所有格子,做循環老虎機時,需更動該Node的位置
     * @param {Map<number, Array<cc.Node>>} node
     * @return {this}
     */
    SlotStyleManager.prototype.setGridNodeToMap = function (node) {
        this.style.gridNodeToMap = node;
        return this;
    };
    /**
     * slot 所有靜態格子圖片
     * @param {Array<cc.SpriteFrame>} img
     * @return {this}
     */
    SlotStyleManager.prototype.setGridImg = function (img) {
        this.style.gridImg = img;
        return this;
    };
    /**
     * 初始所有操作
     */
    SlotStyleManager.prototype.build = function () {
        if (!this.style.slotTemplate) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "Slot Template 未賦予,需幫定或實做一個SlotTemplate");
            return;
        }
        this._slot = new this.style.slotTemplate(this.style);
    };
    Object.defineProperty(SlotStyleManager.prototype, "slot", {
        get: function () {
            return this._slot;
        },
        enumerable: false,
        configurable: true
    });
    return SlotStyleManager;
}());
exports.default = SlotStyleManager;

cc._RF.pop();