export default class NoLineResult implements INoLineResultModel{
    
    private _BaseLevelWin: number;
    private _BonusEventCount: number;
    private _Change: Array<number>;
    private _ChangeState: number;
    private _FreeSpinCount: number;
    private _GameState: number;
    private _Grid: Array<number>;
    private _GridWin: Array<number>;
    private _LevelWin: number;
    private _LookAt: Array<number>;
    private _State: number;
    private _TotalWinPoint: number;
    private _UserPointAfter: number;
    private _UserPointBefore: number;
    
    constructor() {
        
        this._BaseLevelWin = 0;
        this._BonusEventCount = 0;
        this._Change = new Array<number>();
        this._ChangeState = 0;
        this._FreeSpinCount = 0;
        this._GameState = 0;
        this._Grid = new Array<number>();
        this._GridWin = new Array<number>();
        this._LevelWin = 0;
        this._LookAt =  new Array<number>();
        this._State = 0;
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._UserPointBefore = 0;
        
        Object.preventExtensions(this);
    }
    
    public get BaseLevelWin() : number {
        return this._BaseLevelWin
    }
    
    public set BaseLevelWin(value : number) {
        this._BaseLevelWin = value
    }
    
    public get BonusEventCount() : number {
        return this._BonusEventCount
    }
    
    public set BonusEventCount(value : number) {
        this._BonusEventCount = value
    }
    
    public get Change() : Array<number> {
        return this._Change
    }
    
    public set Change(value : Array<number>) {
        this._Change = value
    }
    
    public get ChangeState() : number {
        return this._ChangeState
    }
    
    public set ChangeState(value : number) {
        this._ChangeState = value
    }
    
    public get FreeSpinCount() : number {
        return this._FreeSpinCount
    }
    
    public set FreeSpinCount(value : number) {
        this._FreeSpinCount = value
    }
    
    public get GameState() : number {
        return this._GameState
    }
    
    public set GameState(value : number) {
        this._GameState = value
    }
    
    public get Grid() : Array<number> {
        return this._Grid
    }
    
    public set Grid(value : Array<number>) {
        this._Grid = value
    }
    
    public get GridWin() : Array<number> {
        return this._GridWin
    }
    
    public set GridWin(value : Array<number>) {
        this._GridWin = value
    }
    
    public get LevelWin() : number {
        return this._LevelWin
    }
    
    public set LevelWin(value : number) {
        this._LevelWin = value
    }
    
    public get LookAt() : Array<number> {
        return this._LookAt
    }
    
    public set LookAt(value : Array<number>) {
        this._LookAt = value
    }
    
    public get State() : number {
        return this._State
    }
    
    public set State(value : number) {
        this._State = value
    }
    
    public get TotalWinPoint() : number {
        return this._TotalWinPoint
    }
    
    public set TotalWinPoint(value : number) {
        this._TotalWinPoint = value
    }
    
    public get UserPointAfter() : number {
        return this._UserPointAfter
    }
    
    public set UserPointAfter(value : number) {
        this._UserPointAfter = value
    }
    
    public get UserPointBefore() : number {
        return this._UserPointBefore
    }
    
    public set UserPointBefore(value : number) {
        this._UserPointBefore = value
    }
}