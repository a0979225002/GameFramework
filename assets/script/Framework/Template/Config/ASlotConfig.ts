import ccclass = cc._decorator.ccclass;
import OverrideComponent from "../OverrideComponent";
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
@ccclass
export default abstract class ASlotConfig extends OverrideComponent{

    /**
     * 自訂義
     * @protected
     */
    protected abstract onCreat();

    /**
     * 初始化當前遊戲
     */
    protected abstract configSetting();

    /**
     * 遊戲network response module;
     */
    protected abstract networkModuleSetting();

    protected onLoad() {
        this.onCreat();
        this.configSetting();               //遊戲初始設定
        this.networkModuleSetting();        //遊戲初始接收module 創建
    }

}