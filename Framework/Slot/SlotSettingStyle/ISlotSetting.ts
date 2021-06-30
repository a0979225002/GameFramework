/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-06-28 下午 06:01
 * @Version 1.0
 */

namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)參數設定
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface ISlotSetting {

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
             * 老虎機一般狀態速度
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
             * @param {Map<number, Array<cc.Node>>} node
             * @return {this}
             */
            gridNodeToMap: Map<number, Array<cc.Node>>;

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
             * 設定完成
             */
            complete();
        }
    }
}