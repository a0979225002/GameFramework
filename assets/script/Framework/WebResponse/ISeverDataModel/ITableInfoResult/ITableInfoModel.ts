interface ITableInfoModel {
    /**
     * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
     */
    BetTimes: number;
    /**
     * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
     */
    LineBet: Array<number>;
    /**
     * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
     */
    LineTotalBet: Array<number>;
    /**
     * 賠率表
     */
    PayTable: object;
    /**
     * 玩家現有金額
     */
    UserPoint: number;
}