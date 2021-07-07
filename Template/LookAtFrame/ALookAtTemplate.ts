import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import ScrollFocusStateObserver from "../Event/Observer/GameObserver/ScrollFocusStateObserver";
import ScrollFocusStateNotification from "../Event/Notification/GameNotification/ScrollFocusStateNotification";

/**
 * @Author XIAO-LI-PIN
 * @Description 瞇排模板
 * @NOTE: 使用前,需先實現 ScrollFocusStateNotification 的通知綁定
 * @Date 2021-05-26 下午 17:24
 * @Version 1.1
 */
export default abstract class ALookAtTemplate extends AGenericTemplate {

    /**
     * 當前所有列的瞇排特效animation
     * @type {Array<cc.Animation>}
     * @protected
     */
    protected abstract allLookAtEffect: Array<cc.Animation>;

    /**
     * 瞇排事件通知
     * @type {ScrollFocusStateObserver}
     * @private
     */
    private _scrollFocusStateObserver: ScrollFocusStateObserver;

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

        fcc.notificationMgr<ScrollFocusStateNotification>()
            .getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE)
            .subscribe(this.getScrollFocusStateObserver(),true);

        this.onCreate();
    }

    /**
     * 瞇排事件訂閱者
     * @private
     */
    private getScrollFocusStateObserver(): ScrollFocusStateObserver {

        if(!this._scrollFocusStateObserver){
            this._scrollFocusStateObserver = new ScrollFocusStateObserver((index, isShow) => {
                if (isShow) {
                    if (this.allLookAtEffect[index].node.active) return;
                    this.showLookAtEffect(index);
                } else {
                    if (!this.allLookAtEffect[index].node.active) return;
                    this.removeLookAtEffect(index);
                }
            }, this);
        }
        return this._scrollFocusStateObserver;
    }
}