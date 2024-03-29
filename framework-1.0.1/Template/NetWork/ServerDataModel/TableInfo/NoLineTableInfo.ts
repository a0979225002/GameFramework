import INoLineTableInfoModule from "../../ISeverDataModel/ITableInfoResult/INoLineTableInfoModule";

/**
 * @Author XIAO-LI-PIN
 * @Description 無線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
export default class NoLineTableInfo implements INoLineTableInfoModule {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     * @type {number}
     */
    private _IsLines: number;
    /**
     * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
     * @type {number}
     */
    private _BetTimes: number;
    /**
     * 幾線遊戲
     * @type {string}
     */
    private _Line: string;
    /**
     * 賠率表
     * @type {object}
     */
    private _PayTable: object;
    /**
     * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
     * @type {Array<number>}
     */
    private _LineBet: Array<number>;
    /**
     * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
     * @type {Array<number>}
     */
    private _LineTotalBet: Array<number>;
    /**
     * 15格的資料 顯示用
     * @type {Array<number>}
     */
    private _Grid: Array<number>;
    /**
     * 玩家現有金額
     * @type {number}
     */
    private _UserPoint: number;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     * @type {Array<number>}
     */
    private _LevelWinPoint: Array<number>;
    /**
     * 活動模式 0 沒有 11 轉盤
     * @type {number}
     */
    private _EventMode: number;
    /**
     * 活動轉數需求
     * @type {number}
     */
    private _EventRequire: number;

    /**
     * 預設押住倍率
     */
    DefaultBetIndex: number;

    constructor() {
        this._IsLines = 0;
        this._BetTimes = 0;
        this._Line = "";
        this._PayTable = {};
        this._LineBet = new Array<number>();
        this._LineTotalBet = new Array<number>();
        this._Grid = new Array<number>();
        this._UserPoint = 0;
        this._LevelWinPoint = new Array<number>();
        this._EventMode = 0;
        this._EventRequire = 0;
        this.DefaultBetIndex = 0;
    }


    get IsLines(): number {
        return this._IsLines;
    }

    set IsLines(value: number) {
        this._IsLines = value;
    }

    get BetTimes(): number {
        return this._BetTimes;
    }

    set BetTimes(value: number) {
        this._BetTimes = value;
    }

    get Line(): string {
        return this._Line;
    }

    set Line(value: string) {
        this._Line = value;
    }

    get PayTable(): object {
        return this._PayTable;
    }

    set PayTable(value: object) {
        this._PayTable = value;
    }

    get LineBet(): Array<number> {
        return this._LineBet;
    }

    set LineBet(value: Array<number>) {
        this._LineBet = value;
    }

    get LineTotalBet(): Array<number> {
        return this._LineTotalBet;
    }

    set LineTotalBet(value: Array<number>) {
        this._LineTotalBet = value;
    }

    get Grid(): Array<number> {
        return this._Grid;
    }

    set Grid(value: Array<number>) {
        this._Grid = value;
    }

    get UserPoint(): number {
        return this._UserPoint;
    }

    set UserPoint(value: number) {
        this._UserPoint = value;
    }

    get LevelWinPoint(): Array<number> {
        return this._LevelWinPoint;
    }

    set LevelWinPoint(value: Array<number>) {
        this._LevelWinPoint = value;
    }

    get EventMode(): number {
        return this._EventMode;
    }

    set EventMode(value: number) {
        this._EventMode = value;
    }

    get EventRequire(): number {
        return this._EventRequire;
    }

    set EventRequire(value: number) {
        this._EventRequire = value;
    }
}
