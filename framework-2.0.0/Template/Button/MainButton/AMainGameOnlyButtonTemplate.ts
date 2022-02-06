import AMainGameButtonTemplate from "./AMainGameButtonTemplate";
import {fcc} from "../../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
 * ```
 *      事件:
 *          接收 {UserMoneyChangeObserver} : 玩家金額變更時推播事件
 *              callback : this.userMoney = money;
 *          接收 {AutoStateChangeNotification} : 自動狀態更動推播事件
 *              callback :  this.autoEvent(isAutomaticState, afterAutoCount);
 *                          if (isAutomaticState) {
 *                              await this.startButtonEvent();
 *                          }
 * ```
 * @Date 2021-05-26 上午 11:29
 * @Version 2.0.1
 */
export default abstract class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {

    /**
     * 開始遊戲按鈕
     * @type {cc.Button}
     */
    public abstract startGameButton: cc.Button;

    /**
     * 自動按鈕
     * @type {cc.Button}
     */
    public abstract autoButton: cc.Button;

    /**
     * 加速按鈕
     * @type {cc.Button}
     */
    public abstract speedButton: cc.Button;

    /**
     * 押注金額選擇按鈕
     * @type {cc.Button}
     */
    public abstract totalBetButton: cc.Button;

    /**
     * 設定頁按鈕
     * @type {cc.Button}
     * @protected
     */
    public abstract menuButton: cc.Button

    protected onLoad() {
        fcc.global.Button.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButton,
            "autoButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //加速按鈕監聽添加
            this.speedButton,
            "speedUpButtonEventListener",
            this
        );
        fcc.global.Button.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.totalBetButton,
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
        this.unschedule(this.longTouchTimer);//清除計時器事件
        this.startGameButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startGameButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    public startButtonDisable(): void {
        this.unschedule(this.longTouchTimer);//清除計時器事件
        this.startGameButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startGameButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
}
