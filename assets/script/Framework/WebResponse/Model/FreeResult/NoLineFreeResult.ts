export default class NoLineFreeResult implements ISlotFreeResultModel{
    
    private _BaseLevelWin : number
    private _Change : Array<number>;
    private _ChangeState : number;
    private _Count : number;
    private _FreeLevelWin : number;
    private _FreeSpinWin : number;
    private _FreeToFree : number;
    private _GameState : number;
    private _Grid : Array<number>;
    private _GridWin : Array<number>;
    private _LevelWin : number;
    private _LookAt : Array<number>;
    private _State : number;
    private _TotalWinPoint : number;
    private _UserPointAfter : number;
    
    constructor() {
        
        this._BaseLevelWin = 0;
        this._Change = new Array<number>();
        this._ChangeState = 0;
        this._Count = 0;
        this._FreeLevelWin = 0;
        this._FreeSpinWin = 0;
        this._FreeToFree = 0;
        this._GameState = 0;
        this._Grid = new Array<number>();
        this._GridWin = new Array<number>();
        this._LevelWin = 0;
        this._LookAt = new Array<number>();
        this._State = 0;
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        
        Object.preventExtensions(this);
    }
    
    public get BaseLevelWin() : number {
        return this._BaseLevelWin
    }
    
    public set BaseLevelWin(value : number) {
        this._BaseLevelWin = value
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
    
    public get Count() : number {
        return this._Count
    }
    
    public set Count(value : number) {
        this._Count = value
    }
    
    public get FreeLevelWin() : number {
        return this._FreeLevelWin
    }
    
    public set FreeLevelWin(value : number) {
        this._FreeLevelWin = value
    }
    
    public get FreeSpinWin() : number {
        return this._FreeSpinWin
    }
    
    public set FreeSpinWin(value : number) {
        this._FreeSpinWin = value
    }
    
    public get FreeToFree() : number {
        return this._FreeToFree
    }
    
    public set FreeToFree(value : number) {
        this._FreeToFree = value
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
}