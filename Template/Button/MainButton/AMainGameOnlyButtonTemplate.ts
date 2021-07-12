import AMainGameButtonTemplate from "./AMainGameButtonTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 主遊戲單一按鈕配置
 * @Example 單一方向遊戲
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
 * @Version 1.1
 */
export default abstract class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {

    /**
     * 開始遊戲按鈕
     * @type {cc.Button}
     */
    protected abstract startButton: cc.Button;

    /**
     * 自動按鈕
     * @type {cc.Button}
     */
    protected abstract autoButton: cc.Button;

    /**
     * 加速按鈕
     * @type {cc.Button}
     */
    protected abstract speedUpButton: cc.Button;

    /**
     * 押注金額選擇按鈕
     * @type {cc.Button}
     */
    protected abstract betSelectionButton: cc.Button;

    /**
     * 設定頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract menuButton: cc.Button

    protected onLoad() {
        fcc.global.Button.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButton,
            "autoButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButton,
            "speedUpButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButton,
            "totalBetFrameTouchEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButton,
            "menuButtonEventListener",
            this
        )
        super.onLoad();
    }

    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    public startButtonOnEnable(): void {
        this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    public startButtonDisable(): void {
        this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
}