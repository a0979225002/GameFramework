/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot免費狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotFreeBaseResultModel {

    /**
     * 0: 押注成功 1: 非免費時間押注
     */
    State: number;
    /**
     * 玩家現有金額(贏分後)
     */
    UserPointAfter: number;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     */
    Count: number;
    /**
     * 免費遊戲累計贏分
     */
    FreeSpinWin: number;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     */
    TotalWinPoint: number;
}

/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot一般狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotBaseResultModel {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     */
    State: number;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     */
    TotalWinPoint: number;
    /**
     * 玩家現有金額(贏分後)
     */
    UserPointAfter: number;
    /**
     * 玩家現有金額(押注後)
     */
    UserPointBefore: number;
}

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
             * server一般答案回傳結果
             */
            normalResult: ISlotBaseResultModel;

            /**
             * server免費答案回傳結果
             */
            freeResult: ISlotFreeBaseResultModel;

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
             * server一般答案回傳model
             */
            setNormalResult(normalResult: ISlotBaseResultModel): this;

            /**
             * server免費答案回傳結果
             */
            setFreeResult(freeResult:ISlotFreeBaseResultModel):this;

            /**
             * 設定結束
             */
            complete();
        }
    }
}