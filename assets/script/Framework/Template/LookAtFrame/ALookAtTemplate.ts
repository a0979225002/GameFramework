import ScrollFocusStateNotification from "../../Slot/SlotNotifivation/ScrollFocusStateNotification";
import ScrollFocusStateObserver from "../../Slot/SlotObserver/ScrollFocusStateObserver";

const {ccclass} = cc._decorator;

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)瞇排模板
 * @Date 2021-05-26 下午 17:24
 * @Version 1.1
 */
@ccclass
export default abstract class ALookAtTemplate extends cc.Component {

    protected abstract allLookAtEffect: Array<cc.Animation>;
    private _scrollFocusStateObserver: ScrollFocusStateObserver;

    /**
     * 自應義初始化
     * @protected
     */
    protected abstract onCreate();

    /**
     * 顯示瞇排特效
     * @param {number} index:第幾列
     * @protected
     */
    protected abstract showLookAtEffect(index: number);

    /**
     * 關閉瞇排特效
     * @param {number} index : 第幾列
     * @protected
     */
    protected abstract removeLookAtEffect(index: number);

    protected onLoad() {
        this.onCreate();
        ScrollFocusStateNotification.instance
            .subscribe(this.getScrollFocusStateObserver(), true);
    }

    /**
     * 瞇排事件訂閱者
     * @private
     */
    private getScrollFocusStateObserver(): ScrollFocusStateObserver {
        this._scrollFocusStateObserver = new ScrollFocusStateObserver((index, isShow) => {
            if (isShow) {
                if (this.allLookAtEffect[index].node.active) return;
                this.showLookAtEffect(index);
            } else {
                if (!this.allLookAtEffect[index].node.active) return;
                this.removeLookAtEffect(index);
            }
        }, this);
        return this._scrollFocusStateObserver;
    }
}