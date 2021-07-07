/**
 * @Author XIAO-LI-PIN
 * @Description (Override)擴展cc.Component
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */
export default class OverrideComponent extends cc.Component {

    /**
     * 保存當前使用中的計時器方法,如果該計時器執行完,會自動清空該方法
     * @type {Array<Function>}
     * @private
     */
    private readonly scheduleTag: Array<Function>;

    constructor() {
        super();
        this.scheduleTag = new Array<Function>();
    }

    /**
     * 獲取當前使用中的計時器
     * @returns {Array<Function>}
     */
    protected getScheduleTag(): Array<Function> {
        return this.scheduleTag;
    }

    /**
     * 獲取當前還尚未釋放的計時器數量
     * @returns {number}
     */
    protected getScheduleAmount(): number {
        return this.scheduleTag.length;
    }

    /**
     * 可選循環次數計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} interval - 間格時間
     * @param {number} repeat - 重複次數
     * @param {number} delay - 延遲時間
     */
    public schedule(callback: Function, interval?: number, repeat?: number, delay?: number): void {
        super.schedule(this.checkScheduleRepeat(callback, repeat), interval, repeat, delay);
        this.scheduleTag.push(callback);
    }

    /**
     * 確認當前計時器是否有使用重複次數
     * @protected
     */
    protected checkScheduleRepeat(callback, repeat): Function {
        if (repeat > 0) {
            callback.prototype = () => {
                repeat--;
                if (repeat < 0) this.unschedule(callback);
                callback.apply(this);
            }
        } else {
            return callback;
        }
        return callback.prototype;
    }

    /**
     * 單次計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} delay - 延遲時間
     */
    public scheduleOnce(callback: Function, delay?: number): void {
        callback.prototype = () => {
            this.unschedule(callback.prototype);
            callback.apply(this);
        }
        this.schedule(callback.prototype, 0, 0, delay);
    }

    /**
     * 清除單個計時器方法,額外新增刪除使用中的計時器紀錄,與原版cocos使用上並無差別
     * @param {Function} callback - 當初綁定的方法
     */
    public unschedule(callback: Function): void {
        super.unschedule(this.checkScheduleTag(callback));
        let index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            this.scheduleTag.splice(index, 1);
        }
    }

    /**
     * 判斷當前方法是否正在等待計時器callback中
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {number} - 返回當前this.getScheduleTag[]執行中的index位置,如果該陣列內無該方法,返回-1
     * @protected
     */
    protected checkScheduleCallFunIndex(callback: Function): number {
        let index: number;
        if (this.getScheduleTag().indexOf(callback) != -1) {
            index = this.scheduleTag.indexOf(callback);
        } else if (this.getScheduleTag().indexOf(callback.prototype) != -1) {
            index = this.scheduleTag.indexOf(callback.prototype);
        } else {
            return -1;
        }
        return index;
    }

    /**
     * 確認當前該方法以甚麼形式執行的,原型鏈 or 基礎方法
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {Function} - 返回當前this.getScheduleTag[]內的該方法,如果該陣列內無該方法,返回undefined
     * @protected
     */
    protected checkScheduleTag(callback: Function): Function {
        let fun: Function = undefined;
        let index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            fun = this.scheduleTag[index];
        }
        return fun;
    }

    /**
     * 清除當前所有使用中的計時器,額外新增清空計時器數量方法,與原版cocos使用上並無差別
     */
    public unscheduleAllCallbacks(): void {
        super.unscheduleAllCallbacks();
        this.scheduleTag.length = 0;
    }
}