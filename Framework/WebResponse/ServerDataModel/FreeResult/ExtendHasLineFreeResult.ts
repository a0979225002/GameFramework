/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線免費狀態封包
 * @Date 2021-06-03 下午 04:51
 * @Version 1.0
 */
export default class ExtendHasLineFreeResult implements IExtendHasLineFreeResult {
    /**
     * 0: 押注成功 1: 非免費時間押注
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
     * 黏性圖標編號
     * @type {number}
     */
    private _StickySymbol: number;

    /**
     * 黏性圖標位置
     * @type {Array<number>}
     */
    private _StickyChange: Array<number>;

    /**
     * 每條線贏分
     * @type {Array<number>}
     */
    private _LineWin: Array<number>;

    /**
     * 每條線贏幾格
     * @type {Array<number>}
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
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _Count: number;
    /**
     * 免費遊戲累計贏分
     * @type {number}
     * @private
     */
    private _FreeSpinWin: number;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt: Array<number>;

    /**
     * 再中免費遊戲次數 0:無 1~99:次
     * @type {number}
     * @private
     */
    private _FreeToFree: number;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin: number
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _FreeLevelWin: number;

    constructor() {

        this._State = 0;
        this._Grid = new Array<number>();
        this._StickySymbol = 0;
        this._StickyChange = new Array<number>();
        this._LineWin = new Array<number>();
        this._LineGrid = new Array<number>();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._Count = 0;
        this._FreeSpinWin = 0;
        this._LookAt = new Array<number>();

        this._FreeToFree = 0;
        this._BaseLevelWin = 0;
        this._FreeLevelWin = 0;
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

    get StickySymbol(): number {
        return this._StickySymbol;
    }

    set StickySymbol(value: number) {
        this._StickySymbol = value;
    }

    get StickyChange(): Array<number> {
        return this._StickyChange;
    }

    set StickyChange(value: Array<number>) {
        this._StickyChange = value;
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

    get Count(): number {
        return this._Count;
    }

    set Count(value: number) {
        this._Count = value;
    }

    get FreeSpinWin(): number {
        return this._FreeSpinWin;
    }

    set FreeSpinWin(value: number) {
        this._FreeSpinWin = value;
    }

    get LookAt(): Array<number> {
        return this._LookAt;
    }

    set LookAt(value: Array<number>) {
        this._LookAt = value;
    }

    get FreeToFree(): number {
        return this._FreeToFree;
    }

    set FreeToFree(value: number) {
        this._FreeToFree = value;
    }

    get BaseLevelWin(): number {
        return this._BaseLevelWin;
    }

    set BaseLevelWin(value: number) {
        this._BaseLevelWin = value;
    }

    get FreeLevelWin(): number {
        return this._FreeLevelWin;
    }

    set FreeLevelWin(value: number) {
        this._FreeLevelWin = value;
    }
}