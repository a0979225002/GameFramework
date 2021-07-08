import ButtonMethod from '../../../GlobalMethod/ButtonMethod'
import AMainGameEvent from "./AMainGameEvent";

const {ccclass} = cc._decorator;

@ccclass
export default abstract class AMainGameDoubleButtonTemplate extends AMainGameEvent {

    protected abstract startButtonH: cc.Button;          //開始遊戲按鈕
    protected abstract startButtonV: cc.Button;          //開始遊戲按鈕
    protected abstract autoButtonH: cc.Button;           //自動按鈕
    protected abstract autoButtonV: cc.Button;           //自動按鈕
    protected abstract speedUpButtonH: cc.Button;        //加速按鈕
    protected abstract speedUpButtonV: cc.Button;        //加速按鈕
    protected abstract betSelectionButtonH: cc.Button;   //押注金額選擇按鈕
    protected abstract betSelectionButtonV: cc.Button;   //押注金額選擇按鈕
    protected abstract menuButtonH: cc.Button            //設定頁按鈕
    protected abstract menuButtonV: cc.Button            //設定頁按鈕

    /**
     * 自訂義初始動作
     */
    protected abstract onCreate();

    protected onLoad() {
        super.onLoad();
        ButtonMethod.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonH,
            "autoButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                        //自動按鈕監聽添加
            this.autoButtonV,
            "autoButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonH,
            "speedUpButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //加速按鈕監聽添加
            this.speedUpButtonV,
            "speedUpButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonH,
            "totalBetFrameTouchEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.betSelectionButtonV,
            "totalBetFrameTouchEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonH,
            "menuButtonEventListener",
            this
        );
        ButtonMethod.addButtonEvent(                         //押注金額選擇按鈕監聽添加
            this.menuButtonV,
            "menuButtonEventListener",
            this
        );
    }

    public startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

    public startButtonDisable() {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }

}