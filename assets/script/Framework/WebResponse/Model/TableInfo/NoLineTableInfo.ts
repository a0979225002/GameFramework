export default class NoLineTableInfo implements ITableInfoModel {
    
    private _BetTimes : number;
    private _EventMode : number;
    private _EventRequire : number;
    private _Grid : Array<number>;
    private _IsLines : number;
    private _LevelWinPoint : Array<number>;
    private _LineBet : Array<number>;
    private _Line : string;
    private _LineTotalBet : Array<number>;
    private _PayTable : Map<number, Map<number,number>>;
    private _UserPoint : number;
    
    constructor() {
        this._BetTimes = 0;
        this._EventMode = 0;
        this._EventRequire = 0;
        this._Grid = new Array<number>();
        this._IsLines = 0;
        this._LevelWinPoint = new Array<number>();
        this._Line = "";
        this._LineBet = new Array<number>();
        this._LineTotalBet = new Array<number>();
        this._PayTable = new Map<number, Map<number,number>>();
        this._UserPoint = 0;
        Object.preventExtensions(this);
    }
    
    public get BetTimes() : number {
        return this._BetTimes
    }
    
    public set BetTimes(value : number) {
        this._BetTimes = value
    }
    
    public get EventMode() : number {
        return this._EventMode
    }
    
    public set EventMode(value : number) {
        this._EventMode = value
    }
    
    public get EventRequire() : number {
        return this._EventRequire
    }
    
    public set EventRequire(value : number) {
        this._EventRequire = value
    }
    
    public get Grid() : Array<number> {
        return this._Grid
    }
    
    public set Grid(value : Array<number>) {
        this._Grid = value
    }
    
    public get IsLines() : number {
        return this._IsLines
    }
    
    public set IsLines(value : number) {
        this._IsLines = value
    }
    
    public get LevelWinPoint() : Array<number> {
        return this._LevelWinPoint
    }
    
    public set LevelWinPoint(value : Array<number>) {
        this._LevelWinPoint = value
    }
    
    public get Line() : string {
        return this._Line
    }
    
    public set Line(value : string) {
        this._Line = value
    }
    
    public get LineBet() : Array<number> {
        return this._LineBet
    }
    
    public set LineBet(value : Array<number>) {
        this._LineBet = value
    }
    
    public get LineTotalBet() : Array<number> {
        return this._LineTotalBet
    }
    
    public set LineTotalBet(value : Array<number>) {
        this._LineTotalBet = value
    }
    
    public get PayTable() : Map<number, Map<number, number>> {
        return this._PayTable
    }
    
    public set PayTable(value : Map<number, Map<number, number>>) {
        this._PayTable = value
    }
    
    public get UserPoint() : number {
        return this._UserPoint
    }
    
    public set UserPoint(value : number) {
        this._UserPoint = value
    }
}
