/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot免費狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotFreeResultModel {

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