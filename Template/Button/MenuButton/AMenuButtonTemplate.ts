import AGenericTemplate from "../../BaseTemplate/AGenericTemplate";
import UserTotalBetChangeObserver from "../../Event/Observer/GameObserver/UserTotalBetChangeObserver";
import AutoStateChangeObserver from "../../Event/Observer/GameObserver/AutoStateChangeObserver";
import AutoStateChangeNotification from "../../Event/Notification/GameNotification/AutoStateChangeNotification";
import UserTotalBetChangeNotification from "../../Event/Notification/GameNotification/UserTotalBetChangeNotification";

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,所有按鈕事件
 * ```
 *      事件:
 *          接收 {AutoStateChangeNotification} : 訂閱自動狀態改變時
 *          接收 {UserTotalBetChangeNotification} : 用戶更換的押住金額事件
 * ```
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 *
 */
export default abstract class AMenuButtonTemplate extends AGenericTemplate {
    /**
     * 訂閱自動事件
     * @type {UserTotalBetChangeObserver}
     * @private
     */
    private userTotalBetChangeObserver: UserTotalBetChangeObserver;
    /**
     * 訂閱用戶更改押注時事件
     * @type {AutoStateChangeObserver}
     * @private
     */
    private autoStateChangeObserver: AutoStateChangeObserver;

    /**
     * 自訂義初始狀態
     * @protected
     */
    protected abstract onCreate();

    /**
     * 背景音樂按鈕事件
     * @param {boolean} isOnMute : 是否靜音
     * @protected
     */
    protected abstract musicEvent(isOnMute: boolean);

    /**
     * 效果音樂按鈕事件
     * @param {boolean} isOnMute : 是否靜音
     * @protected
     */
    protected abstract effectEvent(isOnMute: boolean);

    /**
     * 自動按鈕事件
     * @param {AutoType} beforeAutoCount : 點擊前的按鈕type
     * @param {AutoType} afterAutoCount : 更新的按鈕type
     * @protected
     */
    protected abstract autoEvent(beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType);

    /**
     * 前往設定頁按鈕事件
     * @protected
     */
    protected abstract settingPageTouchEvent();

    /**
     * 前往紀錄頁按鈕事件
     * @protected
     */
    protected abstract recordPageTouchEvent();

    /**
     * 前往說明頁按鈕事件
     * @protected
     */
    protected abstract descriptionPageEvent();

    /**
     * 更換押注事件
     * @param beforeIndex
     * @param afterIndex
     * @protected
     */
    protected abstract totalBetChangeEvent(beforeIndex, afterIndex)

    /**
     * 返回遊戲頁面按鈕事件
     * @protected
     */
    protected abstract goBackTouchEvent();

    /**
     * 返回首頁按鈕監聽事件
     * @protected
     */
    protected abstract goHomeTouchEvent();

    /**
     * tableInfo model
     * @type {IBaseTableInfoModel}
     * @protected
     */
    protected abstract tableInfo: IBaseTableInfoModel;

    /**
     * 當前玩家auto的類型
     * @type {fcc.type.AutoType}
     * @protected
     */
    protected nowAutoType: fcc.type.AutoType;

    protected onLoad() {
        this.nowAutoType = fcc.configMgr.autoCount;
        this.addNotification();                         //初始化綁定監聽接收事件
    }

    /**
     * 加入訂閱綁定事件
     * @private
     */
    private addNotification(): void {

        /*訂閱自動狀態改變時*/
        fcc.notificationMgr<AutoStateChangeNotification>()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .subscribe(this.getAutoStateChangeObserver(), true);

        /*用戶更換的押住金額事件*/
        fcc.notificationMgr<UserTotalBetChangeNotification>()
            .getNotification(fcc.type.NotificationType.USER_BET_CHANGE)
            .subscribe(this.getUserTotalBetChangeObserver(), true);
    }

    /**
     * 自動更新當前是否靜音背景音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    protected musicEventListener() {
        let isOnMute = fcc.audioMgr.updateMusicOnMute();
        this.musicEvent(isOnMute);
    }

    /**
     * 自動更新當前是否靜音效果音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    protected effectEventListener() {
        let isOnMute = fcc.audioMgr.updateEffectOnMute();
        this.effectEvent(isOnMute);
    }

    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最大值,將會自動跳回最小值
     * @protected
     */
    protected betUpEventListener() {
        let beforeBetIndex = SlotProcessManager.instance.userBetPoint.LineBet;
        let afterBetIndex = beforeBetIndex + 1;
        if (afterBetIndex > this.tableInfo.LineBet.length - 1) {
            afterBetIndex = 0;
        }
        UserTotalBetChangeNotification.instance.notify(beforeBetIndex, afterBetIndex);
    }

    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最小值,將會自動跳回最大值
     * @protected
     */
    protected betDownEventListener() {
        let beforeBetIndex = SlotProcessManager.instance.userBetPoint.LineBet;
        let afterBetIndex = beforeBetIndex - 1;
        if (afterBetIndex < 0) {
            afterBetIndex = this.tableInfo.LineBet.length - 1;
        }
        UserTotalBetChangeNotification.instance.notify(beforeBetIndex, afterBetIndex);
    }

    /**
     * 當前總押注事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    protected getUserTotalBetChangeObserver(): UserTotalBetChangeObserver {
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver((beforeIndex, afterIndex) => {
                this.totalBetChangeEvent(beforeIndex, afterIndex);
            }, this);
        }
        return this.userTotalBetChangeObserver;
    }

    /**
     * 當前自動狀態事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    protected getAutoStateChangeObserver(): AutoStateChangeObserver {
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver((isAutomaticState, beforeAutoCount, afterAutoCount) => {
                this.autoEvent(beforeAutoCount, afterAutoCount);
            }, this);
        }
        return this.autoStateChangeObserver;
    }

    /**
     * 自動按鈕點擊事件
     * @param event
     * @param {AutoType} callbackType : 哪顆類型的按鈕點擊
     * @protected
     */
    protected autoButtonEventListener(event, callbackType: fcc.type.AutoType) {
        let beforeAutoType = SlotProcessManager.instance.autoType;
        AutoStateChangeNotification
            .instance.notify(true, beforeAutoType, callbackType);
    }
}