namespace fcc {

    export namespace ABS {

        /**
         * @Author 蕭立品
         * @Description 所有SLOT設定檔的父類
         * @Date 2021-06-28 下午 06:42
         * @Version 1.0
         */
        export abstract class ABaseSlotSetting implements IF.IBaseSlotSetting {

            /**
             * 該樣式標籤
             * @type {string}
             * @private
             */
            private _tag: string;

            /**
             * 非加速模式,每列停止的時間間格
             * @type {number}
             * @private
             */
            private _columnIntervalTime: number;

            /**
             * 所有格子,執行動畫的所有格子
             * Map<列數,該列所有格子>
             * @type {Map<number, Array<cc.Node>>}
             * @private
             */
            private _gridNodeToMap: Map<number, Array<cc.Node>>;

            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @type {Array<cc.Node>}
             * @private
             */
            private _slotColumnToTween: Array<cc.Node>;

            /**
             * 遊戲每格格子間的速度
             * @type {number}
             * @private
             */
            private _slotGirdSpeed: number;

            /**
             * 老虎機每格格子高度
             * @type {number}
             * @private
             */
            private _slotGridHeight: number;

            /**
             * 該老虎機 每列的格子數量
             * @type {number}
             * @private
             */
            private _slotRowGridCount: number;

            /**
             * 老虎機顯示答案前的最少轉動次數
             * @type {number}
             * @private
             */
            private _slotTurnCount: number;

            /**
             * 加速時的加速倍率
             * @type {number}
             * @private
             */
            private _speedUpMultiple: number;

            /**
             * 漸入時TWEEN動畫類型
             * @type {string}
             * @private
             */
            private _sineInEasing: string;

            /**
             * 淡出時TWEEN 動畫類型
             * @type {string}
             * @private
             */
            private _sineOutEasing: string;

            /**
             *  瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             * @type {number}
             * @private
             */
            private _lookAtSpeed: number;

            /**
             * SLOT 停軸間格,依照你SLOT 列數 各列間的停軸間格
             * @type {number}
             * @private
             */
            private _slotRowTime: number;

            /**
             * 各軸瞇排時間
             * @type {number}
             * @private
             */
            private _lookAtTime: number;

            /**
             * 添加儲存SERVER答案的Model
             * @type {fcc.IF.IBaseSlotResultModel}
             * @private
             */
            protected _resultModel:  IF.IBaseSlotResultModel;

            private _stopNowSpeedMultiple: number;

            private readonly _slotStyleManager: IF.ISlotStyleManager

            public constructor(slotStyleManager: IF.ISlotStyleManager) {
                this._slotStyleManager = slotStyleManager;
            }

            /**
             * 該樣式標籤
             * @param {string} tag
             * @return {this}
             */
            public setTag(tag: string): this {
                this._tag = tag;
                return this;
            }

            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            public setSlotTurnCount(count: number): this {
                this._slotTurnCount = count;
                return this
            }

            /**
             * 老虎機每隔格子高度
             * @param {number} height
             * @return {this}
             */
            public setSlotGridHeight(height: number): this {

                this._slotGridHeight = height;

                return this;
            }

            /**
             * 遊戲每格格子間的速度
             * @param {number} time
             * @return {this}
             */
            public setSlotGirdSpeed(time: number): this {

                this._slotGirdSpeed = time;

                return this;
            }

            /**
             * 加速時的加速被率
             * @param {number} multiple
             * @return {this}
             */
            public setSpeedUpMultiple(multiple: number): this {

                this._speedUpMultiple = multiple;

                return this;
            }

            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            public setStopNowSpeedMultiple(multiple: number): this {
                this._stopNowSpeedMultiple = multiple;
                return this;
            }

            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            public setSlotRowGridCount(gridCount: number): this {

                this._slotRowGridCount = gridCount;

                return this;
            }

            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            public setColumnIntervalTime(time: number): this {

                this._columnIntervalTime = time;

                return this;
            }

            /**
             * 要執行輪播動化轉動老虎機的node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            public setSlotColumnToTween(node: Array<cc.Node>): this {

                this._slotColumnToTween = node;

                return this;
            }


            /**
             * 所有格子,做循環老虎機時,需更動該Node的位置
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            public setGridNodeToMap(node: Map<number, Array<cc.Node>>): this {

                this._gridNodeToMap = node;

                return this;
            }

            /**
             * 進場 緩動 easing效果
             * @param {string} easing
             * @return {this}
             */
            public setSineInEasing(easing: string): this {
                this._sineInEasing = easing;
                return this;
            }

            /**
             * 退場 緩動 easing效果
             * @param {string} easing
             * @return {this}
             */
            public setSineOutEasing(easing: string): this {
                this._sineOutEasing = easing;
                return this;
            }

            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             */
            public setLookAtSpeed(time: number): this {
                this._lookAtSpeed = time;
                return this;
            }

            /**
             * slot 各列停軸時間
             * 依照你SLOT 列數 各列間的停軸間格
             * @param {Array<number>} time - 各軸間格時間
             * @return {this}
             */
            public setSlotRowTime(time: number): this {
                this._slotRowTime = time;
                return this;
            }

            /**
             * 瞇排時間
             * @param {number} time
             * @return {this}
             */
            public setLookAtTime(time: number): this {
                this._lookAtTime = time;
                return this;
            }

            /**
             * 添加儲存SERVER答案的Model
             * @param {fcc.IF.IBaseSlotResultModel} resultModel - server回傳的答案model
             * @return {this}
             */
            setResultModel(resultModel: IF.IBaseSlotResultModel): this {
                this._resultModel = resultModel;
                return this;
            }

            /**
             * 設定結束
             */
            complete() {
                this._slotStyleManager.build(this);
            }

            /*======================================================getter===============================================*/

            /**
             * 非加速模式,每列停止的時間間格
             * @return {number}
             */
            get columnIntervalTime(): number {
                return this._columnIntervalTime;
            }

            /**
             * 所有格子,做循環老虎機時,需更動該Node的位置
             * @return {Map<number, Array<cc.Node>>}
             */
            get gridNodeToMap(): Map<number, Array<cc.Node>> {
                return this._gridNodeToMap;
            }

            /**
             * 要執行輪播動化轉動老虎機的node
             * @return {Array<cc.Node>}
             */
            get slotColumnToTween(): Array<cc.Node> {
                return this._slotColumnToTween;
            }

            /**
             * 遊戲每格格子間的速度
             * @return {number}
             */
            get slotGirdSpeed(): number {
                return this._slotGirdSpeed;
            }

            /**
             * 老虎機每隔格子高度
             * @return {number}
             */
            get slotGridHeight(): number {
                return this._slotGridHeight;
            }

            /**
             * 該老虎機 每列的格子數量
             * @return {number}
             */
            get slotRowGridCount(): number {
                return this._slotRowGridCount;
            }

            /**
             * 老虎機顯示答案前的最少轉動次數
             * @return {number}
             */
            get slotTurnCount(): number {
                return this._slotTurnCount;
            }

            /**
             * 加速時的加速被率
             * @return {number}
             */
            get speedUpMultiple(): number {
                return this._speedUpMultiple;
            }

            /**
             * 急停時的加速倍率
             * @return {number}
             */
            get stopNowSpeedMultiple(): number {
                return this._stopNowSpeedMultiple;
            }

            get slotStyleManager(): fcc.IF.ISlotStyleManager {
                return this._slotStyleManager;
            }

            /**
             * 該樣式標籤
             * @return {string}
             */
            get tag(): string {
                return this._tag;
            }

            /**
             * SERVER答案的Model
             * @return {IF.IBaseSlotResultModel}
             */
            get resultModel(): IF.IBaseSlotResultModel {
                return this._resultModel;
            }

            /**
             * 進場 緩動 easing效果
             * @return {string}
             */
            get sineInEasing(): string {
                return this._sineInEasing;
            }

            /**
             * 退場 緩動 easing效果
             * @return {string}
             */
            get sineOutEasing(): string {
                return this._sineOutEasing;
            }

            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             */
            get lookAtSpeed(): number {
                return this._lookAtSpeed;
            }

            /**
             * SLOT 停軸間格,依照你SLOT 列數 各列間的停軸間格
             * @return {number}
             */
            get slotRowTime(): number {
                return this._slotRowTime;
            }

            /**
             * 各軸瞇排時間
             * @return {number}
             */
            get lookAtTime(): number {
                return this._lookAtTime;
            }
        }
    }
}
