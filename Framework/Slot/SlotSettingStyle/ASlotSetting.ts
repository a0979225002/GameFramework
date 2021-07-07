namespace fcc {

    export namespace ABS {
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021-06-28 下午 06:42
         * @Version 1.0
         */
        export abstract class ASlotSetting implements IF.ISlotSetting {

            private _normalResult: ISlotBaseResultModel;

            private _freeResult: ISlotFreeBaseResultModel;

            private _columnIntervalTime: number;

            private _gridNodeToMap: Map<number, Array<cc.Node>>;

            private _slotColumnToTween: Array<cc.Node>;

            private _slotGirdSpeed: number;

            private _slotGridHeight: number;

            private _slotRowGridCount: number;

            private _slotTurnCount: number;

            private _speedUpMultiple: number;

            private readonly _slotStyleManager: IF.ISlotStyleManager

            constructor(slotStyleManager: IF.ISlotStyleManager) {
                this._slotStyleManager = slotStyleManager;
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
            setSpeedUpMultiple(multiple: number): this {

                this._speedUpMultiple = multiple;

                return this;
            }

            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            setSlotRowGridCount(gridCount: number): this {

                this._slotRowGridCount = gridCount;

                return this;
            }

            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            setColumnIntervalTime(time: number): this {

                this._columnIntervalTime = time;

                return this;
            }

            /**
             * 要執行輪播動化轉動老虎機的node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            setSlotColumnToTween(node: Array<cc.Node>): this {

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
             * server免費答案回傳結果
             */
            setNormalResult(normalResult: ISlotBaseResultModel): this {
                this._normalResult = normalResult;
                return this;
            }

            /**
             * server一般答案回傳model
             */
            setFreeResult(freeResult: ISlotFreeBaseResultModel): this {
                this._freeResult = freeResult;
                return this;
            }

            /**
             * 設定結束
             */
            complete() {
                this._slotStyleManager.build(this);
            }

            get columnIntervalTime(): number {
                return this._columnIntervalTime;
            }

            get gridNodeToMap(): Map<number, Array<cc.Node>> {
                return this._gridNodeToMap;
            }

            get slotColumnToTween(): Array<cc.Node> {
                return this._slotColumnToTween;
            }

            get slotGirdSpeed(): number {
                return this._slotGirdSpeed;
            }

            get slotGridHeight(): number {
                return this._slotGridHeight;
            }

            get slotRowGridCount(): number {
                return this._slotRowGridCount;
            }

            get slotTurnCount(): number {
                return this._slotTurnCount;
            }

            get speedUpMultiple(): number {
                return this._speedUpMultiple;
            }

            get slotStyleManager(): fcc.IF.ISlotStyleManager {
                return this._slotStyleManager;
            }


            get freeResult(): ISlotFreeBaseResultModel  {
                return this._freeResult;
            }

            get normalResult(): ISlotBaseResultModel{
                return this._normalResult;
            }
        }
    }
}