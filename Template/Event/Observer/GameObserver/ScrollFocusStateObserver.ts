/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
export default class ScrollFocusStateObserver extends fcc.ABS.ABaseObserver {

    constructor(callFun: (index: number, isShow: boolean) => void, self) {
        super(callFun, self);
    }

    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    pushNotification(index: number, isShow: boolean) {
        super.pushNotification(index, isShow);
    }
}