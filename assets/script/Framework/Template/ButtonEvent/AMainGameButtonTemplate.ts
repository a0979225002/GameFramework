import ButtonMethod from '../../GlobalMethod/ButtonMethod'
import SlotGameManager from '../../Procedure/SlotGameManager'

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class AMainGameButtonTemplate extends cc.Component {

    abstract startButton: cc.Button;         //開始遊戲按鈕
    abstract autoButton: cc.Button;          //自動按鈕
    abstract speedUpButton: cc.Button;       //加速按鈕
    abstract betSelectionButton: cc.Button;  //押注金額選擇按鈕
    abstract totalBetFrame: cc.Node        //總押注視窗
    isShowTotalBetFrame: boolean;          //當前是否正在顯示總押注視窗

    /**
     * 自訂義初始動作
     */
    abstract onCreate();

    protected onLoad() {

        this.isShowTotalBetFrame = false;

        this.onCreate();

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
    }

    startButtonEventListener() {

    }

    autoButtonEventListener() {

        SlotGameManager.instance.updateAuto();

    }

    speedUpButtonEventListener() {

        SlotGameManager.instance.updateSpeed();

    }

    betSelectionButtonEventListener() {
        this.isShowTotalBetFrame ?
            this.totalBetFrame.active = false : this.totalBetFrame.active = true;

    }
}