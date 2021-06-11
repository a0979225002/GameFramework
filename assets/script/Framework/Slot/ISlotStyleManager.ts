import ASlot from './ASlot'
import {StyleData} from './SlotStyleManager'

export default interface ISlotStyleManager {

    readonly slot: ASlot;

    /**
     * 添加執行流程的class 需繼承 ISlot
     * @return {this}
     */
    setSlotTemplate<T extends new(styleData: StyleData) => ASlot>(slotTemplate: T): this;

    /**
     * 老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    setSlotTurnCount(count: number): this;

    /**
     * 加速時老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    setSlotSpeedUpTurnCount(count: number): this;

    /**
     * 老虎機每隔格子高度
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
     * 加速時的加速被率
     * @param {number} multiple
     * @return {this}
     */
    setSpeedUpMultiple(multiple: number): this;

    /**
     * 要執行輪播動化轉動老虎機的node
     * @param {Array<cc.Node>} node
     * @return {this}
     */
    slotColumnToTween(node: Array<cc.Node>): this;

    /**
     * 非加速模式,每列停止的時間間格
     * @param {number} time
     * @return {this}
     */
    setColumnIntervalTime(time: number): this;

    /**
     * 所有格子,做循環老虎機時,需更動該Node的位置
     * @param {Map<number, Array<cc.Node>>} node
     * @return {this}
     */
    setGridNodeToMap(node: Map<number, Array<cc.Node>>): this;

    /**
     * 所有格子的圖片,做循環老虎雞時,需更動的圖片
     * @param {Map<number, Array<cc.Sprite>>} sprite
     * @return {this}
     */
    setGirdSpriteToMap(sprite: Map<number, Array<cc.Sprite>>): this;

    /**
     * slot 所有靜態格子圖片
     * @param {Map<string, cc.SpriteFrame>} img
     * @return {this}
     */
    setGridImg(img: Map<string, cc.SpriteFrame>): this

    /**
     * 初始所有操作,並實例化  綁定的 slot Class
     */
    build(): void;
}