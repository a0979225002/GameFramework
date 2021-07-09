import AMainGameButtonTemplate from "./AMainGameButtonTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 主遊戲雙按鈕配置
 * @Example 同時擁有直橫向方向遊戲
 * ```
 *      事件:
 *          推撥 {StopNowStateNotification} : 即停的推播事件
 *          推撥 {SpeedStateChangeNotification} : 加速的推播事件
 *          推撥 {AutoStateChangeNotification} : 自動狀態更動推播事件
 *          接收 {UserMoneyChangeObserver} : 玩家金額變更時推播事件
 *              callback : this.userMoney = money;
 *          接收 {AutoStateChangeNotification} : 自動狀態更動推播事件
 *              callback :  this.autoEvent(isAutomaticState, afterAutoCount);
 *                          if (isAutomaticState) {
 *                              await this.startButtonEvent();
 *                          }
 * ```
 * @Date 2021-07-06 下午 16:24
 * @Version 1.0.2
 */
export default abstract class AMainGameDoubleButtonTemplate extends AMainGameButtonTemplate {

    /**
     * 開始遊戲按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract startButtonH: cc.Button;

    /**
     * 開始遊戲按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract startButtonV: cc.Button;

    /**
     * 自動按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButtonH: cc.Button;


    /**
     * 自動按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButtonV: cc.Button;

    /**
     * 加速按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract speedUpButtonH: cc.Button;

    /**
     * 加速按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract speedUpButtonV: cc.Button;

    /**
     * 押注金額選擇按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract betSelectionButtonH: cc.Button;

    /**
     * 押注金額選擇按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract betSelectionButtonV: cc.Button;

    /**
     * 設定頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract menuButtonH: cc.Button

    /**
     * 設定頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract menuButtonV: cc.Button

    protected onLoad() {
        fcc.global.Button.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonH,
            "autoButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonV,
            "autoButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonH,
            "speedUpButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonV,
            "speedUpButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonH,
            "totalBetFrameTouchEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonV,
            "totalBetFrameTouchEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonH,
            "menuButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonV,
            "menuButtonEventListener",
            this
        );
        super.onLoad();
    }

    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    public startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    public startButtonDisable() {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
}