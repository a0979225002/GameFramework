/**
 * @Author XIAO-LI-PIN
 * @Description SLOT 某一列結束時,將會推播事件
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
export default class SlotRowEndObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (rowIndex: number,isAllRowEnd:boolean) => void, self) {
        super(callFun, self);
    }

    /**
     * SLOT哪一列已經執行結束
     * @param {number} rowIndex - 第幾列結束
     * @param {boolean} isAllRowEnd - 是否全軸一起停止
     */
    pushNotification(rowIndex: number,isAllRowEnd:boolean) {
        super.pushNotification(rowIndex,isAllRowEnd);
    }
}
