/**
 * @Author XIAO-LI-PIN
 * @Description 有線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
export default class HasLineResult implements IHasLineResultModule {

    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     * @type {number}
     * @private
     */
    private _State: number;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid: Array<number>;
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
     * @type {Array<number>}
     * @private
     */
    private _Change: Array<number>;
    /**
     * 15格的資料 換圖 0:不換 1:換
     * @type {number}
     * @private
     */
    private _ChangeState: number;
    /**
     * 每條線贏分
     * @type {Array<number>}
     * @private
     */
    private _LineWin: Array<number>;
    /**
     * 每條線贏幾格
     * @type {Array<number>}
     * @private
     */
    private _LineGrid: Array<number>;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint: number;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter: number;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState: number;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _FreeSpinCount: number;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt: Array<number>;
    /**
     * 玩家現有金額(押注後)
     * @type {number}
     * @private
     */
    private _UserPointBefore: number;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin: number;

    constructor() {
        this._State = 0;
        this._Grid = new Array<number>();
        this._Change = new Array<number>();
        this._ChangeState = 0;
        this._LineWin = new Array<number>();
        this._LineGrid = new Array<number>();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array<number>();
        this._UserPointBefore = 0;
        this._BaseLevelWin = 0;
        Object.preventExtensions(this);
    }


    get State(): number {
        return this._State;
    }

    set State(value: number) {
        this._State = value;
    }

    get Grid(): Array<number> {
        return this._Grid;
    }

    set Grid(value: Array<number>) {
        this._Grid = value;
    }

    get Change(): Array<number> {
        return this._Change;
    }

    set Change(value: Array<number>) {
        this._Change = value;
    }

    get ChangeState(): number {
        return this._ChangeState;
    }

    set ChangeState(value: number) {
        this._ChangeState = value;
    }

    get LineWin(): Array<number> {
        return this._LineWin;
    }

    set LineWin(value: Array<number>) {
        this._LineWin = value;
    }

    get LineGrid(): Array<number> {
        return this._LineGrid;
    }

    set LineGrid(value: Array<number>) {
        this._LineGrid = value;
    }

    get TotalWinPoint(): number {
        return this._TotalWinPoint;
    }

    set TotalWinPoint(value: number) {
        this._TotalWinPoint = value;
    }

    get UserPointAfter(): number {
        return this._UserPointAfter;
    }

    set UserPointAfter(value: number) {
        this._UserPointAfter = value;
    }

    get GameState(): number {
        return this._GameState;
    }

    set GameState(value: number) {
        this._GameState = value;
    }

    get FreeSpinCount(): number {
        return this._FreeSpinCount;
    }

    set FreeSpinCount(value: number) {
        this._FreeSpinCount = value;
    }

    get LookAt(): Array<number> {
        return this._LookAt;
    }

    set LookAt(value: Array<number>) {
        this._LookAt = value;
    }

    get UserPointBefore(): number {
        return this._UserPointBefore;
    }

    set UserPointBefore(value: number) {
        this._UserPointBefore = value;
    }

    get BaseLevelWin(): number {
        return this._BaseLevelWin;
    }

    set BaseLevelWin(value: number) {
        this._BaseLevelWin = value;
    }
}