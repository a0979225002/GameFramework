
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/SlotStyleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXFNsb3RTdHlsZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtRUFBd0Q7QUFDeEQsc0RBQWdEO0FBbUJoRDtJQU9JLDBCQUFvQixhQUE2QjtRQUU3QyxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUVuQyxJQUFJLENBQUMsS0FBSyxHQUFHO1lBRVQsWUFBWSxFQUFFLElBQUk7WUFDbEIsYUFBYSxFQUFFLElBQUk7WUFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtZQUN0QixhQUFhLEVBQUUsSUFBSTtZQUNuQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLGtCQUFrQixFQUFFLElBQUk7WUFDeEIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixhQUFhLEVBQUUsSUFBSTtZQUNuQixlQUFlLEVBQUUsSUFBSTtZQUNyQixPQUFPLEVBQUUsSUFBSTtTQUVoQixDQUFDO0lBQ04sQ0FBQztJQUNEOzs7T0FHRztJQUNXLDRCQUFXLEdBQXpCLFVBQTBCLGFBQTZCO1FBQ25ELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN4RDtJQUNMLENBQUM7SUFLRCxzQkFBa0IsNEJBQVE7UUFIMUI7O1dBRUc7YUFDSDtZQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3JFLE9BQU87YUFDVjtZQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSSwwQ0FBZSxHQUF0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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lDb25maWdNYW5hZ2VyfSBmcm9tIFwiLi4vQ29uZmlnL0lDb25maWcvSUNvbmZpZ01hbmFnZXJcIjtcclxuaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBBU2xvdCBmcm9tICcuL0FTbG90J1xyXG5pbXBvcnQgSVNsb3RTdHlsZU1hbmFnZXIgZnJvbSAnLi9JU2xvdFN0eWxlTWFuYWdlcidcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVEYXRhIHtcclxuICAgIHNsb3RUZW1wbGF0ZTogbmV3KHN0eWxlRGF0YTogU3R5bGVEYXRhKSA9PiBBU2xvdCxcclxuICAgIHNsb3RUdXJuQ291bnQ6IG51bWJlcixcclxuICAgIHNsb3RSb3dHcmlkQ291bnQ6IG51bWJlcixcclxuICAgIHNsb3RHaXJkU3BlZWQ6IG51bWJlcixcclxuICAgIHNsb3RTcGVlZFVwVHVybkNvdW50OiBudW1iZXIsXHJcbiAgICBzbG90R3JpZEhlaWdodDogbnVtYmVyLFxyXG4gICAgc3BlZWRVcE11bHRpcGxlOiBudW1iZXIsXHJcbiAgICBjb2x1bW5JbnRlcnZhbFRpbWU6IG51bWJlcixcclxuICAgIHNsb3RDb2x1bW5Ub1R3ZWVuOiBBcnJheTxjYy5Ob2RlPixcclxuICAgIGdyaWROb2RlVG9NYXA6IE1hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+PjtcclxuICAgIGdyaWRTcHJpdGVUb01hcDogTWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj47XHJcbiAgICBncmlkSW1nOiBNYXA8c3RyaW5nLCBjYy5TcHJpdGVGcmFtZT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3RTdHlsZU1hbmFnZXIgaW1wbGVtZW50cyBJU2xvdFN0eWxlTWFuYWdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBJU2xvdFN0eWxlTWFuYWdlcjtcclxuICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXI7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3R5bGU6IFN0eWxlRGF0YTtcclxuICAgIHByaXZhdGUgX3Nsb3Q6IEFTbG90O1xyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoY29uZmlnTWFuYWdlcjogSUNvbmZpZ01hbmFnZXIpIHtcclxuXHJcbiAgICAgICAgdGhpcy5jb25maWdNYW5hZ2VyID0gY29uZmlnTWFuYWdlcjtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHtcclxuXHJcbiAgICAgICAgICAgIHNsb3RUZW1wbGF0ZTogbnVsbCxcclxuICAgICAgICAgICAgc2xvdFR1cm5Db3VudDogbnVsbCxcclxuICAgICAgICAgICAgc2xvdFJvd0dyaWRDb3VudDogbnVsbCxcclxuICAgICAgICAgICAgc2xvdEdpcmRTcGVlZDogbnVsbCxcclxuICAgICAgICAgICAgc2xvdFNwZWVkVXBUdXJuQ291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgIHNsb3RHcmlkSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICBzcGVlZFVwTXVsdGlwbGU6IG51bGwsXHJcbiAgICAgICAgICAgIGNvbHVtbkludGVydmFsVGltZTogbnVsbCxcclxuICAgICAgICAgICAgc2xvdENvbHVtblRvVHdlZW46IG51bGwsXHJcbiAgICAgICAgICAgIGdyaWROb2RlVG9NYXA6IG51bGwsXHJcbiAgICAgICAgICAgIGdyaWRTcHJpdGVUb01hcDogbnVsbCxcclxuICAgICAgICAgICAgZ3JpZEltZzogbnVsbCxcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogIOaHtua8ouWKoOi8iVxyXG4gICAgICogIOWIneWni+WMlizlj6rorpPkuIDlgIvlsIjmoYjnlKLnlJ/kuIDmrKHoqbJjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEluc3RhbmNlKGNvbmZpZ01hbmFnZXI6IElDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTbG90U3R5bGVNYW5hZ2VyKGNvbmZpZ01hbmFnZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICDnjbLlj5blt7LntpPliJ3lp4vljJbnmoTpnZzmhYvlr6bkvotjbGFzc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBJU2xvdFN0eWxlTWFuYWdlciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5TbG90U3R5bGVGVywgXCLoqbLpoZ7lsJrmnKrlr6bkvovljJZcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5Z+36KGM5rWB56iL55qEY2xhc3Mg6ZyA57m85om/IElTbG90XHJcbiAgICAgKiBAcGFyYW0ge0FTbG90fSBzbG90VGVtcGxhdGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRTbG90VGVtcGxhdGU8VCBleHRlbmRzIG5ldyhzdHlsZURhdGE6IFN0eWxlRGF0YSkgPT4gQVNsb3Q+KHNsb3RUZW1wbGF0ZTogVCk6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLnNsb3RUZW1wbGF0ZSA9IHNsb3RUZW1wbGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDogIHomY7mqZ/poa/npLrnrZTmoYjliY3nmoTmnIDlsJHovYnli5XmrKHmlbhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudFxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0U2xvdFR1cm5Db3VudChjb3VudDogbnVtYmVyKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGUuc2xvdFR1cm5Db3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5pmC6ICB6JmO5qmf6aGv56S6562U5qGI5YmN55qE5pyA5bCR6L2J5YuV5qyh5pW4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNsb3RTcGVlZFVwVHVybkNvdW50KGNvdW50OiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5zbG90U3BlZWRVcFR1cm5Db3VudCA9IGNvdW50O1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiAgeiZjuapn+avj+malOagvOWtkOmrmOW6plxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0U2xvdEdyaWRIZWlnaHQoaGVpZ2h0OiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5zbG90R3JpZEhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDogIHomY7mqZ/kuIDoiKzni4DmhYvpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0U2xvdEdpcmRTcGVlZCh0aW1lOiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5zbG90R2lyZFNwZWVkID0gdGltZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliqDpgJ/mmYLnmoTliqDpgJ/ooqvnjodcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtdWx0aXBsZVxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0U3BlZWRVcE11bHRpcGxlKG11bHRpcGxlOiBudW1iZXIpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5zcGVlZFVwTXVsdGlwbGUgPSBtdWx0aXBsZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqbLogIHomY7mqZ8g5q+P5YiX55qE5qC85a2Q5pW46YePXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3JpZENvdW50XHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTbG90Um93R3JpZENvdW50KGdyaWRDb3VudDogbnVtYmVyKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGUuc2xvdFJvd0dyaWRDb3VudCA9IGdyaWRDb3VudDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpnZ7liqDpgJ/mqKHlvI8s5q+P5YiX5YGc5q2i55qE5pmC6ZaT6ZaT5qC8XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0Q29sdW1uSW50ZXJ2YWxUaW1lKHRpbWU6IG51bWJlcik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLmNvbHVtbkludGVydmFsVGltZSA9IHRpbWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KaB5Z+36KGM6Lyq5pKt5YuV5YyW6L2J5YuV6ICB6JmO5qmf55qEbm9kZVxyXG4gICAgICogQHBhcmFtIHtBcnJheTxjYy5Ob2RlPn0gbm9kZVxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2xvdENvbHVtblRvVHdlZW4obm9kZTogQXJyYXk8Y2MuTm9kZT4pOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdHlsZS5zbG90Q29sdW1uVG9Ud2VlbiA9IG5vZGU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5omA5pyJ5qC85a2Q55qE5ZyW54mHLOWBmuW+queSsOiAgeiZjumbnuaZgizpnIDmm7Tli5XnmoTlnJbniYdcclxuICAgICAqIEBwYXJhbSB7TWFwPG51bWJlciwgQXJyYXk8Y2MuU3ByaXRlPj59IHNwcml0ZVxyXG4gICAgICogQHJldHVybiB7dGhpc31cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldEdpcmRTcHJpdGVUb01hcChzcHJpdGU6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+KTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMuc3R5bGUuZ3JpZFNwcml0ZVRvTWFwID0gc3ByaXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOacieagvOWtkCzlgZrlvqrnkrDogIHomY7mqZ/mmYIs6ZyA5pu05YuV6KmyTm9kZeeahOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj59IG5vZGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRHcmlkTm9kZVRvTWFwKG5vZGU6IE1hcDxudW1iZXIsIEFycmF5PGNjLk5vZGU+Pik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLmdyaWROb2RlVG9NYXAgPSBub2RlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNsb3Qg5omA5pyJ6Z2c5oWL5qC85a2Q5ZyW54mHXHJcbiAgICAgKiBAcGFyYW0ge0FycmF5PGNjLlNwcml0ZUZyYW1lPn0gaW1nXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2V0R3JpZEltZyhpbWc6IE1hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPik6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlLmdyaWRJbWcgPSBpbWc7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5omA5pyJ5pON5L2cXHJcbiAgICAgKi9cclxuICAgIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zdHlsZS5zbG90VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuVW5kZWZpbmVkRlcsIFwiU2xvdCBUZW1wbGF0ZSDmnKros6bkuogs6ZyA5bmr5a6a5oiW5a+m5YGa5LiA5YCLU2xvdFRlbXBsYXRlXCIpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2xvdCA9IG5ldyB0aGlzLnN0eWxlLnNsb3RUZW1wbGF0ZSh0aGlzLnN0eWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNsb3QoKTogQVNsb3Qge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zbG90O1xyXG4gICAgfVxyXG59Il19