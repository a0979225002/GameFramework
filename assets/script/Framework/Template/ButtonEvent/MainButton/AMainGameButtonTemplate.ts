import ButtonMethod from '../../../GlobalMethod/ButtonMethod'
import AMainGameEvent from "./AMainGameEvent";

export default abstract class AMainGameButtonTemplate extends AMainGameEvent {

    abstract startButton: cc.Button;                //開始遊戲按鈕
    abstract autoButton: cc.Button;                 //自動按鈕
    abstract speedUpButton: cc.Button;              //加速按鈕
    abstract betSelectionButton: cc.Button;         //押注金額選擇按鈕
    protected abstract menuButton: cc.Button        //設定頁按鈕

    protected onLoad() {

        ButtonMethod.addButtonEvent(                        //開始按鈕監聽添加
            this.startButton,
            "startButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButton,
            "autoButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButton,
            "speedUpButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButton,
            "betSelectionButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButton,
            "menuButtonEventListener",
            this
        )
    }

    public startButtonOnEnable() {
        this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    public startButtonDisable() {
        this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
}