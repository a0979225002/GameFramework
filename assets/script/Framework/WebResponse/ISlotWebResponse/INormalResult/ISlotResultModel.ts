/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-17 上午 11:56
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