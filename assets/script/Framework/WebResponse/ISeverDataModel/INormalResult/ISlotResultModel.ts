/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot一般狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotResultModel {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     */
    State: number;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     */
    TotalWinPoint: number;
    /**
     * 玩家現有金額(贏分後)
     */
    UserPointAfter: number;
    /**
     * 玩家現有金額(押注後)
     */
    UserPointBefore: number;
}