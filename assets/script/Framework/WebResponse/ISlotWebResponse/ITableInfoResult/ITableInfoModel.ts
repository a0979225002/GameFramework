interface ITableInfoModel {

    BetTimes: number;
    EventMode: number;
    EventRequire: number;
    Grid: Array<number>;
    IsLines: number;
    LevelWinPoint: Array<number>;
    Line: string;
    LineBet: Array<number>;
    LineTotalBet: Array<number>;
    PayTable: Map<number, Map<number, number>>;
    UserPoint: number;
}