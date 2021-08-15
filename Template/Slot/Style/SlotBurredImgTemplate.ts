import NormalSlotTemplate from "./NormalSlotTemplate";
import {fcc} from "../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,執行動畫為模糊圖標
 *  ```
 *      SLOT STYLE : fcc.SlotBurredImgSetting;
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
export default class SlotBurredImgTemplate extends NormalSlotTemplate {

    /**
     * 所有模糊圖標
     * @type {Map<string, cc.SpriteFrame>}
     * @private
     */
    private gridBurredImg:  Map<string, cc.SpriteFrame>;

    constructor(styleData: fcc.SlotBurredImgSetting, configManager: fcc.IF.ISlotConfigManager) {
        super(styleData,configManager);
        this.gridBurredImg = styleData.gridBurredImg;                                   //拿取所有模糊圖標
    }

    /**
     * 更新輪播格子位置(更新的Gird圖片修正為模糊圖片)
     * @param rowNodes - 哪一列的 node 需要更換圖片位置
     * @param columnIndex - 當前是第幾列
     */
    protected updateGridPositionAndRandomImg(rowNodes: Array<cc.Node>, columnIndex: number) {
        //獲取該列物件長度
        let rowLength = rowNodes.length - 1;
        //隨機數字
        let random: number;
        //最後一個sprite
        let lastSprite: cc.Sprite;
        for (let i = 0; i < this.rowData[0]; i++) {
            //獲取該列最後一個sprite
            lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength];
            //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置
            this.gridSpriteToMap.get(columnIndex).unshift(lastSprite);
            //刪除陣列中的最後一個 sprite 節點
            this.gridSpriteToMap.get(columnIndex).pop();
            //隨機一個數字
            random = Math.floor(Math.random() * this.gridBurredImg.size)
            this.gridSpriteToMap.get(columnIndex)[0].spriteFrame =
                this.gridBurredImg.get(String(random));
            //重新給予最後一個陣列中的node 更新 y 位置
            rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
            //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
            rowNodes.unshift(rowNodes[rowLength]);
            //刪除陣列中的最後一個 node 節點
            rowNodes.pop();
        }
    }
}
