/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
import ABaseObserver from "../../ABaseObserver";

export default class ScrollFocusStateObserver extends ABaseObserver{

    constructor(callFun: (index: number, isShow: boolean) => void, self) {
        super(callFun,self);
    }

    pushNotification(index: number, isShow: boolean) {
        super.pushNotification(index, isShow);
    }
}