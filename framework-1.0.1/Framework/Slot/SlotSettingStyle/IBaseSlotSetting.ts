namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)Slot參數設定
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IBaseSlotSetting {

            /**
             * 該樣式標籤
             */
            tag: string;

            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            slotTurnCount: number;

            /**
             * 老虎機每格格子高度
             * @param {number} height
             * @return {this}
             */
            slotGridHeight: number;

            /**
             * 遊戲每格格子間的速度
             * @param {number} time
             * @return {this}
             */
            slotGirdSpeed: number;

            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            slotRowGridCount: number;

            /**
             * 加速時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            speedUpMultiple: number;

            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            stopNowSpeedMultiple: number;

            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            slotColumnToTween: Array<cc.Node>;

            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            columnIntervalTime: number;

            /**
             * 所有格子,執行動畫的所有格子
             * Map<列數,該列所有格子>
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            gridNodeToMap: Map<number, Array<cc.Node>>;

            /**
             * 漸入時TWEEN動畫類型
             */
            sineInEasing: string;

            /**
             * 淡出時TWEEN 動畫類型
             */
            sineOutEasing: string;

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
            lookAtSpeed: number;

            /**
             * 添加儲存SERVER答案的Model
             */
            resultModel: IBaseSlotResultModel;

            /**
             * 該樣式標籤
             * @param {string} tag
             * @return {this}
             */
            setTag(tag: string): this;

            /**
             * 老虎機顯示答案前的最少轉動次數
             * @param {number} count
             * @return {this}
             */
            setSlotTurnCount(count: number): this;

            /**
             * 老虎機每格格子高度
             * @param {number} height
             * @return {this}
             */
            setSlotGridHeight(height: number): this;

            /**
             * 老虎機一般狀態速度
             * @param {number} time
             * @return {this}
             */
            setSlotGirdSpeed(time: number): this;

            /**
             * 該老虎機 每列的格子數量
             * @param {number} gridCount
             * @return {this}
             */
            setSlotRowGridCount(gridCount: number): this

            /**
             * 加速時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            setSpeedUpMultiple(multiple: number): this;

            /**
             * 急停時的加速倍率
             * @param {number} multiple
             * @return {this}
             */
            setStopNowSpeedMultiple(multiple: number): this;

            /**
             * 要執行輪播動畫,轉動老虎機的所有列 cc.Node
             * @param {Array<cc.Node>} node
             * @return {this}
             */
            setSlotColumnToTween(node: Array<cc.Node>): this;

            /**
             * 非加速模式,每列停止的時間間格
             * @param {number} time
             * @return {this}
             */
            setColumnIntervalTime(time: number): this;

            /**
             * 所有格子,執行動畫的所有格子
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            setGridNodeToMap(node: Map<number, Array<cc.Node>>): this;

            /**
             * 漸入時TWEEN動畫類型
             */
            setSineInEasing(easing: string): this;

            /**
             * 淡出時TWEEN 動畫類型
             */
            setSineOutEasing(easing: string): this;

            /**
             * 瞇排轉動速度
             * ```
             *  公式
             *      如果要加快轉動速度
             *          = 每格格子移動速度 例如 : 0.08 秒一格
             *      如果要降低轉動速度
             *          = 每格格子移動度 + 1 例如 : 1 + 0.08 秒一格
             * ```
             * @param {number} time - 單位 秒
             * @return {this}
             */
            setLookAtSpeed(time: number): this

            /**
             * 添加儲存SERVER答案的Model
             */
            setResultModel(resultModel: IBaseSlotResultModel): this;

            /**
             * 設定完成,將設定class轉交Manager執行建構
             */
            complete();
        }
    }
}
