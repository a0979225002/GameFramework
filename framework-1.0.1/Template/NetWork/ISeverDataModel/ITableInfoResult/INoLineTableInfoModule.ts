import IBaseTableInfoModel from "./IBaseTableInfoModel";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 03:47
 * @Version 1.0
 */
export default interface INoLineTableInfoModule extends IBaseTableInfoModel {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     */
    IsLines: number;
    /**
     * 15格的資料 顯示用
     */
    Grid: Array<number>;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     */
    LevelWinPoint: Array<number>;
    /**
     * 幾線遊戲
     */
    Line: string;
}
