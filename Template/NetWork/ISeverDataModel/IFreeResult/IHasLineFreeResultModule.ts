import ISlotFreeBaseResultModel from "./ISlotFreeBaseResultModel";

/**
 * @Author XIAO-LI-PIN
 * @Description (介面)有線類免費狀態封包
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
export default interface IHasLineFreeResultModule extends ISlotFreeBaseResultModel {


    /**
     * 是否有鬼牌 0:沒有 1:有
     */
    ChangeState: number;

    /**
     * 15格的資料 換圖 0:不換 1:換
     */
    Change: Array<number>;

    /**
     * 每條線贏分
     */
    LineWin: Array<number>;

    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;

    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     */
    LevelWin: number;

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
