import AGenericTemplate from "../BaseTemplate/AGenericTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 各種類型資源
 * @NOTE: 需事前綁定 ResponseResultNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class ASlotInitializeTemplate extends AGenericTemplate {

    /**
     * Slot 一般答案回傳結果
     * @type {ISlotBaseResultModel}
     * @protected
     */
    protected abstract normalResult: ISlotBaseResultModel;

    /**
     * Slot 免費答案回傳結果
     * @type {ISlotFreeBaseResultModel}
     * @protected
     */
    protected abstract freeResult: ISlotFreeBaseResultModel;

    /**
     * 執行老虎機動畫的列 所有列
     * @type {Array<cc.Node>}
     * @protected
     */
    protected abstract slotRow: Array<cc.Node>;

    /**
     * 執行動畫的所有格子
     * @type {Map<number, Array<cc.Node>>}
     * @protected
     */
    protected abstract gridNodeToMap: Map<number, Array<cc.Node>>;

    /**
     * 更換圖片的所有格子
     * @type {Map<number, Array<cc.Sprite>>}
     * @protected
     */
    protected abstract gridSpriteToMap: Map<number, Array<cc.Sprite>>;

    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected abstract slotStyleSetting(): void;

    protected onLoad() {
        super.onLoad();
    }

    protected start() {
        super.start();
        this.slotStyleSetting();            //設定 slot 樣式,並綁定
    }
}
