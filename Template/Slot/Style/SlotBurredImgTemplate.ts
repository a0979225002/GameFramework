import NormalSlotTemplate from "./NormalSlotTemplate";

/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般版老虎機
 *  ```
 *      SLOT STYLE : fcc.SlotBurredImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTrun"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          推撥 {StopNowStateNotification} : 即停的推播事件
 *          推撥 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {NoLineResult} : 一般獲獎model
 *          model {NoLineFreeResult} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default class SlotBurredImgTemplate extends NormalSlotTemplate {
    constructor(styleData: fcc.SlotImgSetting, configManager: fcc.IF.ISlotConfigManager) {
        super(styleData,configManager);
    }
}
