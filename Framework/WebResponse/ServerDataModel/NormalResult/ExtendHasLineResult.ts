/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線一般狀態封包
 * @Date 2021-06-03 下午 04:50
 * @Version 1.0
 */
export default class ExtendHasLineResult implements IExtendHasLineResult {

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
     * 是否有神秘寶箱 0:沒有 1:有
     * @type {number}
     */
    private _SecretState: number;
    /**
     * 神秘寶箱位置 0:沒有 1:有神秘寶箱位置 0:沒有 1:有
     * @type {Array<number>}
     */
    private _SecretChange: Array<number>;
    /**
     * 神秘寶箱格子圖案
     */
    private _SecretSymbol: number;
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
    /**
     * 活動轉數
     */
    private _BonusEventCount: number;

    constructor() {
        this._State = 0;
        this._Grid = new Array<number>();
        this._SecretState = 0;
        this._SecretChange = new Array<number>();
        this._SecretSymbol = 0;
        this._LineWin = new Array<number>();
        this._LineGrid = new Array<number>();
        this._TotalWinPoint = 0;
        this._UserPointAfter = 0;
        this._GameState = 0;
        this._FreeSpinCount = 0;
        this._LookAt = new Array<number>();
        this._UserPointBefore = 0;
        this._BaseLevelWin = 0;
        this._BonusEventCount = 0;
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

    get SecretState(): number {
        return this._SecretState;
    }

    set SecretState(value: number) {
        this._SecretState = value;
    }

    get SecretChange(): Array<number> {
        return this._SecretChange;
    }

    set SecretChange(value: Array<number>) {
        this._SecretChange = value;
    }

    get SecretSymbol(): number {
        return this._SecretSymbol;
    }

    set SecretSymbol(value: number) {
        this._SecretSymbol = value;
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

    get BonusEventCount(): number {
        return this._BonusEventCount;
    }

    set BonusEventCount(value: number) {
        this._BonusEventCount = value;
    }
}