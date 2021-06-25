/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-17 上午 11:41
 * @Version 1.0
 */

export interface ISlotConfigManager extends IConfigManager {

    /**
     * 是否在遊戲進入後開啟auto狀態
     * @type {boolean}
     * @private
     */
    isAuto: boolean;


    /**
     * 初始遊戲最初的auto次數
     * @type {AutoType}
     * @private
     */
    autoCount: number;


    /**
     * 初始開始遊戲前是否是加速狀態
     * @type {boolean}
     * @private
     */
    isSpeedUp: boolean;


    /**
     * 初始遊戲開始前的用戶押注倍率
     * @type {IUserBetPoint}
     * @private
     */
    userBet: IUserBetPoint;

    /**
     * 初始遊戲最初的auto次數
     * @param {AutoType} type
     * @returns {this}
     */
    setAutoCont(type: number): this;

    /**
     * 設置初始User倍率
     * @param {UserBetPoint | number} lineBet : 參數可以直接使用倍率的index or 給予 實例化的UserBetPoint Object
     * @returns {this}
     */
    setUserBet(lineBet: IUserBetPoint | number): this;


    /**
     * 初始進入遊戲時Auto狀態
     * @param {boolean} isAuto : 是否在遊戲進入後開啟auto狀態
     * @returns {this}
     */
    setAutoState(isAuto: boolean): this;


    /**
     * 是否在遊戲進入後是加速的狀態
     * @param {boolean} isSpeedUp
     * @returns {this}
     */
    setSpeedState(isSpeedUp: boolean): this;
}