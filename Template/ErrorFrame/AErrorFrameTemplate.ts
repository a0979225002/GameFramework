import AGenericTemplate from "../BaseTemplate/AGenericTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 錯誤視窗模板
 * @Date 2021-07-07 下午 14:01
 * @Version 0.0.3
 */
export default abstract class AErrorFrameTemplate extends AGenericTemplate {

    /**
     * 該錯誤框顯示錯誤訊息的 label 組件
     * @type {cc.Label}
     * @protected
     */
    protected abstract errorLabel: cc.Label;

    /**
     * 該錯誤框顯示Button文字的 label 組件
     * @type {cc.Label}
     * @protected
     */
    protected abstract errorButtonLabel: cc.Label;

    /**
     * 該錯誤框顯示按鈕的 Button 組件
     * @type {cc.Button}
     * @protected
     */
    protected abstract errorButton: cc.Button;

    /**
     * 該錯誤按鈕監聽事件
     * @default 已經從errorButton組件中綁定事件
     * @protected
     */
    protected abstract errorButtonTouchEvent():void;

    protected onLoad() {
        fcc.global.Button
            .addButtonEvent(
                this.errorButton,
                "errorButtonTouchEvent",
                this
            );
        super.onLoad();
    }
}