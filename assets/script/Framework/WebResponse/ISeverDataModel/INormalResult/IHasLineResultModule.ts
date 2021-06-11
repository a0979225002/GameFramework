/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 03:46
 * @Version 1.0
 */
interface IHasLineResultModule extends ISlotResultModel {

    /**
     * 15格的資料
     */
    Grid: Array<number>;
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
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
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     */
    FreeSpinCount: number;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
}