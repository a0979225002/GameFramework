import OverrideComponent from "../OverrideComponent";

const {ccclass} = cc._decorator;

@ccclass
export default abstract class ASlotInitializeTemplate extends OverrideComponent{
    
    //slot 的列
    protected abstract slotRow:Array<cc.Node>;
    protected abstract gridNodeToMap : Map<number, Array<cc.Node>>;
    protected abstract girdSpriteToMap : Map<number, Array<cc.Sprite>>;
    
    protected onLoad() {
    
        this.onCreate();
        this.slotInitialize();
        this.slotStyleSetting();
    
    }
    
    protected abstract onCreate();
    
    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected abstract slotStyleSetting();
    
    /**
     * 更新所有grid 隨機圖片
     * 如果每列的3~5格格子需要顯示 TableInfo 回傳回來的初始grid答案
     * @private
     */
    protected abstract slotInitialize();
    
    protected abstract getAllGridNode():Map<number, Array<cc.Node>>;
    
    protected abstract getAllGridSprite():Map<number, Array<cc.Sprite>>;
    
}