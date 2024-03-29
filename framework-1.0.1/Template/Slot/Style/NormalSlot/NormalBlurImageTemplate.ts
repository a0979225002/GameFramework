import {fcc} from "../../../System/FCCSystem";
import NormalTemplate from "./NormalTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,執行動畫為模糊圖標
 *  ```
 *      SLOT STYLE : fcc.NormalBurredImageSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {NoLineResult} : 一般獲獎model
 *          model {NoLineFreeResult} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default class NormalBlurImageTemplate<T extends fcc.NormalBlurImageSetting> extends NormalTemplate<T>{

    /**
     * 所有模糊圖標
     * @type {Map<string, cc.SpriteFrame>}
     * @private
     */
    private symbolBlurImg: Map<string, cc.SpriteFrame>;

    constructor(styleData: T, configManager: fcc.IF.ISlotConfigManager) {
        super(styleData, configManager);
        this.symbolBlurImg = styleData.symbolBlurImg;                                   //拿取所有模糊圖標
    }

    /**
     * 更新單個GRID格子位置,並給予隨機圖片
     * @param rowNodes - 要更換圖片的該列物件
     * @param rowIndex - 當前是第幾列
     */
    protected updateOnlyGridPositionAndRandomImg(rowNodes: Array<cc.Node>, rowIndex: number) {
        //獲取該列物件長度
        let rowLength = rowNodes.length - 1;
        //隨機數字
        let random: number;
        //最後一個sprite
        let lastSprite: cc.Sprite;
        //獲取該列最後一個sprite
        lastSprite = this.gridSpriteToMap.get(rowIndex)[rowLength];
        //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置
        this.gridSpriteToMap.get(rowIndex).unshift(lastSprite);
        //刪除陣列中的最後一個 sprite 節點
        this.gridSpriteToMap.get(rowIndex).pop();
        //隨機一個數字
        random = Math.floor(Math.random() * this.gridImg.size);
        this.gridSpriteToMap.get(rowIndex)[0].spriteFrame =
            this.symbolBlurImg.get(String(random));
        //重新給予最後一個陣列中的node 更新 y 位置
        rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
        //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
        rowNodes.unshift(rowNodes[rowLength]);
        //刪除陣列中的最後一個 node 節點
        rowNodes.pop();
    }
}
