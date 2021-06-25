import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import ASlot from './ASlot'
import ISlotStyleManager from './ISlotStyleManager'

export interface StyleData {
    slotTemplate: new(styleData: StyleData) => ASlot,
    slotTurnCount: number,
    slotRowGridCount: number,
    slotGirdSpeed: number,
    slotSpeedUpTurnCount: number,
    slotGridHeight: number,
    speedUpMultiple: number,
    columnIntervalTime: number,
    slotColumnToTween: Array<cc.Node>,
    gridNodeToMap: Map<number, Array<cc.Node>>;
    gridSpriteToMap: Map<number, Array<cc.Sprite>>;
    gridImg: Map<string, cc.SpriteFrame>;
}

export default class SlotStyleManager implements ISlotStyleManager {

    private static _instance: ISlotStyleManager;
    private configManager: IConfigManager;
    public readonly style: StyleData;
    private _slot: ASlot;

    private constructor(configManager: IConfigManager) {

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
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new SlotStyleManager(configManager);
        }
    }

    /**
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): ISlotStyleManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.SlotStyleFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * 添加執行流程的class 需繼承 ISlot
     * @param {ASlot} slotTemplate
     * @return {this}
     */
    public setSlotTemplate<T extends new(styleData: StyleData) => ASlot>(slotTemplate: T): this {
        this.style.slotTemplate = slotTemplate;
        return this;
    }

    /**
     * 老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    setSlotTurnCount(count: number): this {
        this.style.slotTurnCount = count;
        return this
    }

    /**
     * 加速時老虎機顯示答案前的最少轉動次數
     * @param {number} count
     * @return {this}
     */
    setSlotSpeedUpTurnCount(count: number): this {
        this.style.slotSpeedUpTurnCount = count;
        return this;
    }

    /**
     * 老虎機每隔格子高度
     * @param {number} height
     * @return {this}
     */
    setSlotGridHeight(height: number): this {

        this.style.slotGridHeight = height;

        return this;
    }

    /**
     * 老虎機一般狀態速度
     * @param {number} time
     * @return {this}
     */
    public setSlotGirdSpeed(time: number): this {

        this.style.slotGirdSpeed = time;

        return this;
    }

    /**
     * 加速時的加速被率
     * @param {number} multiple
     * @return {this}
     */
    setSpeedUpMultiple(multiple: number): this {

        this.style.speedUpMultiple = multiple;

        return this;
    }

    /**
     * 該老虎機 每列的格子數量
     * @param {number} gridCount
     * @return {this}
     */
    setSlotRowGridCount(gridCount: number): this {

        this.style.slotRowGridCount = gridCount;

        return this;
    }

    /**
     * 非加速模式,每列停止的時間間格
     * @param {number} time
     * @return {this}
     */
    setColumnIntervalTime(time: number): this {

        this.style.columnIntervalTime = time;

        return this;
    }

    /**
     * 要執行輪播動化轉動老虎機的node
     * @param {Array<cc.Node>} node
     * @return {this}
     */
    slotColumnToTween(node: Array<cc.Node>): this {

        this.style.slotColumnToTween = node;

        return this;
    }

    /**
     * 所有格子的圖片,做循環老虎雞時,需更動的圖片
     * @param {Map<number, Array<cc.Sprite>>} sprite
     * @return {this}
     */
    public setGirdSpriteToMap(sprite: Map<number, Array<cc.Sprite>>): this {

        this.style.gridSpriteToMap = sprite;

        return this;
    }

    /**
     * 所有格子,做循環老虎機時,需更動該Node的位置
     * @param {Map<number, Array<cc.Node>>} node
     * @return {this}
     */
    public setGridNodeToMap(node: Map<number, Array<cc.Node>>): this {

        this.style.gridNodeToMap = node;

        return this;
    }

    /**
     * slot 所有靜態格子圖片
     * @param {Array<cc.SpriteFrame>} img
     * @return {this}
     */
    public setGridImg(img: Map<string, cc.SpriteFrame>): this {

        this.style.gridImg = img;

        return this;
    }

    /**
     * 初始所有操作
     */
    build() {
        if (!this.style.slotTemplate) {
            ErrorManager.instance.executeError(ErrorType.UNDEFINED_FW, "Slot Template 未賦予,需幫定或實做一個SlotTemplate")
            return;
        }
        this._slot = new this.style.slotTemplate(this.style);
    }

    public get slot(): ASlot {
        return this._slot;
    }
}