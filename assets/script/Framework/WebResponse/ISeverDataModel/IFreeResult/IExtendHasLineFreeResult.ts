/**
 * @Author XIAO-LI-PIN
 * @Description (介面)擴展類有線免費狀態封包
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface IExtendHasLineFreeResult extends ISlotFreeResultModel {

    /**
     * 15格的資料
     */
    Grid: Array<number>;

    /**
     * 黏性圖標編號
     */
    StickySymbol: number;

    /**
     * 黏性圖標位置
     */
    StickyChange: Array<number>;

    /**
     * 每條線贏分
     */
    LineWin: Array<number>;

    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;

    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;

    /**
     * 再中免費遊戲次數 0:無 1~99:次
     */
    FreeToFree: number;

    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number

    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    FreeLevelWin: number;
}