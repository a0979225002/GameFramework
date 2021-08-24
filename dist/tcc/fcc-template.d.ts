/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-08-13 下午 05:51
 * @Version 1.0
 */
declare const fcc: typeof globalThis.fcc;
/**
 * @Author XIAO-LI-PIN
 * @Description (Override)擴展cc.Component
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */
declare class OverrideComponent extends cc.Component {
    /**
     * 保存當前使用中的計時器方法,如果該計時器執行完,會自動清空該方法
     * @type {Array<Function>}
     * @private
     */
    private readonly scheduleTag;
    constructor();
    /**
     * 獲取當前使用中的計時器
     * @returns {Array<Function>}
     */
    protected getScheduleTag(): Array<Function>;
    /**
     * 獲取當前還尚未釋放的計時器數量
     * @returns {number}
     */
    protected getScheduleAmount(): number;
    /**
     * 可選循環次數計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} interval - 間格時間
     * @param {number} repeat - 重複次數
     * @param {number} delay - 延遲時間
     */
    schedule(callback: Function, interval?: number, repeat?: number, delay?: number): void;
    /**
     * 確認當前計時器是否有使用重複次數
     * @protected
     */
    protected checkScheduleRepeat(callback: any, repeat: any): Function;
    /**
     * 單次計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} delay - 延遲時間
     */
    scheduleOnce(callback: Function, delay?: number): void;
    /**
     * 清除單個計時器方法,額外新增刪除使用中的計時器紀錄,與原版cocos使用上並無差別
     * @param {Function} callback - 當初綁定的方法
     */
    unschedule(callback: Function): void;
    /**
     * 判斷當前方法是否正在等待計時器callback中
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {number} - 返回當前this.getScheduleTag[]執行中的index位置,如果該陣列內無該方法,返回-1
     * @protected
     */
    protected checkScheduleCallFunIndex(callback: Function): number;
    /**
     * 確認當前該方法以甚麼形式執行的,原型鏈 or 基礎方法
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {Function} - 返回當前this.getScheduleTag[]內的該方法,如果該陣列內無該方法,返回undefined
     * @protected
     */
    protected checkScheduleTag(callback: Function): Function;
    /**
     * 清除當前所有使用中的計時器,額外新增清空計時器數量方法,與原版cocos使用上並無差別
     */
    unscheduleAllCallbacks(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通用模板
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare abstract class AGenericTemplate extends OverrideComponent {
    /**
     * 自訂義初始狀態
     */
    protected abstract onCreate(): void;
    /**
     * 語系設置
     */
    protected languageSetting(): void;
    protected onLoad(): void;
    protected start(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
declare abstract class ACenterTemplate extends AGenericTemplate {
    /**
     * 初始化當前遊戲
     */
    protected abstract configSetting(): void;
    /**
     * 初始Client參數
     * @protected
     */
    protected abstract initClient(): void;
    /**
     * 音樂撥放樣式設定
     */
    protected abstract audioSetting(): void;
    /**
     * 遊戲流程創建
     * @protected
     */
    protected abstract processCreate(): void;
    /**
     * notification 此遊戲會用到的 所有通知事件添加
     * @protected
     */
    protected abstract notificationSetting(): void;
    protected onLoad(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
declare class AutoStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType) => void, self: any);
    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {fcc.type.AutoType} beforeAutoCount - 更改前的auto類型
     * @param {fcc.type.AutoType} afterAutoCount  - 更改後的auto類型
     */
    pushNotification(isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
declare class AutoStateChangeNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {AutoStateChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: AutoStateChangeObserver, isPermanent: boolean): void;
    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {AutoType} beforeAutoCount - 更改前的auto類型
     * @param {AutoType} afterAutoCount  - 更改後的auto類型
     */
    notify(isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
declare class ScrollFocusStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (index: number, isShow: boolean) => void, self: any);
    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    pushNotification(index: number, isShow: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
declare class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {ScrollFocusStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: ScrollFocusStateObserver, isPermanent: boolean): void;
    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    notify(index: number, isShow: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
declare class SpeedStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (isSpeedUp: boolean) => void, self: any);
    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
     */
    pushNotification(isSpeedUp: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推播管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
declare class SpeedStateChangeNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {SpeedStateChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: SpeedStateChangeObserver, isPermanent: boolean): void;
    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
     */
    notify(isSpeedUp: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 即停狀態通知時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
declare class StopNowStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: () => void, self: any);
    /**
     * 推播即停狀態事件
     */
    pushNotification(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
declare class StopNowStateNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {StopNowStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: StopNowStateObserver, isPermanent: boolean): void;
    /**
     * 推播即停狀態事件
     */
    notify(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
declare class UserMoneyChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (money: number) => void, self: any);
    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    pushNotification(money: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶金額變更時事件推播管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
declare class UserMoneyChangeNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {UserMoneyChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: UserMoneyChangeObserver, isPermanent: boolean): void;
    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    notify(money: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 用戶更換的押住時,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:12
 * @Version 1.0
 */
declare class UserTotalBetChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (beforeIndex: number, afterIndex: number) => void, self: any);
    /**
     * 推播用戶更換的押住倍率 index
     * @param {number} beforeIndex - user更動前的押住 index
     * @param {number} afterIndex - user 更動後的押住 index
     */
    pushNotification(beforeIndex: number, afterIndex: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
declare class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {UserTotalBetChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: UserTotalBetChangeObserver, isPermanent: boolean): void;
    /**
     * 推播用戶更換的押住倍率 index
     * @param {number} beforeIndex - user更動前的押住 index
     * @param {number} afterIndex - user 更動後的押住 index
     */
    notify(beforeIndex: number, afterIndex: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
declare class UserWinPointStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (winPoint: number, level: number) => void, self: any);
    /**
     * 當用戶有贏分時推播當前贏分分數
     * @param {number} winPoint - 當前贏分分數
     * @param {number} level - 當前贏分等級
     */
    pushNotification(winPoint: number, level: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
declare class UserWinPointStateNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {UserWinPointStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: UserWinPointStateObserver, isPermanent: boolean): void;
    /**
     * 當用戶有贏分時推播當前贏分分數
     * @param {number} winPoint - 當前贏分分數
     * @param {number} level - 當前贏分等級
     */
    notify(winPoint: number, level: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 當server回傳結果時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-06-09 下午 05:51
 * @Version 1.0
 */
declare class ResponseResultObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (responseType: string) => void, self: any);
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} responseType - json以保存完畢
     */
    pushNotification(responseType: string): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : server Response結束時
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
declare class ResponseResultNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {ResponseResultObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: ResponseResultObserver, isPermanent: boolean): void;
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} responseType - json以保存完畢
     */
    notify(responseType: string): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description SLOT 某一列結束時,將會推播事件
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
declare class SlotRowEndObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun: (rowIndex: number, isAllRowEnd: boolean) => void, self: any);
    /**
     * SLOT哪一列已經執行結束
     * @param {number} rowIndex - 第幾列結束
     * @param {boolean} isAllRowEnd - 是否全軸一起停止
     */
    pushNotification(rowIndex: number, isAllRowEnd: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 監聽SLOT所有列,當該列結束時,推播事件
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
declare class SlotRowEndNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    constructor();
    /**
     * 訂閱該事件
     * @param {UserWinPointStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: SlotRowEndObserver, isPermanent: boolean): void;
    /**
     * SLOT哪一列已經執行結束
     * @param {number} rowIndex - 第幾列結束
     * @param {boolean} isAllRowEnd - 是否全軸一起停止
     */
    notify(rowIndex: number, isAllRowEnd: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
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
 * @Date 2021-05-26 上午 11:29
 * @Version 1.0
 */
declare abstract class AMainGameButtonTemplate extends AGenericTemplate {
    /**
     * 當前是否開啟總押注視窗
     * @type {boolean}
     * @protected
     */
    protected isShowTotalBetFrame: boolean;
    /**
     * 當前是否常壓空白建
     * @type {boolean}
     * @protected
     */
    protected keyboardListener: boolean;
    /**
     * 自動狀態事件綁定者
     * @type {AutoStateChangeObserver}
     * @private
     */
    private _autoStateChangeObserver;
    /**
     * 當前遊戲速度
     */
    protected nowSpeed: boolean;
    /**
     * 是否正在自動狀態中
     * @type {boolean}
     * @private
     */
    protected isAutoState: boolean;
    /**
     * 當前Auto次數
     * @type {number}
     * @protected
     */
    protected nowAutoType: number;
    /**
     * 長壓時間 單位 : 秒
     * @type {number}
     * @default 0.5
     * @protected
     */
    protected longTouchTime: number;
    /**
     * 當前玩家剩餘金額
     * @type {number}
     * @protected
     */
    protected userMoney: number;
    /**
     * 監聽玩家金額變更時給予通知
     * @type {UserMoneyChangeObserver}
     * @private
     */
    private _userMoneyChangeObserver;
    /**
     * 確認當前user分數是否可以玩下輪遊戲
     * @return {boolean}
     * @protected
     */
    protected abstract checkUserPointCanPlayGame(): boolean;
    protected onLoad(): void;
    /**
     * 打開開始遊戲事件監聽
     */
    abstract startButtonOnEnable(): void;
    /**
     * 關閉開始遊戲事件監聽
     */
    abstract startButtonDisable(): void;
    /**
     * 點擊 (打開或關閉) 總押注視窗按鈕
     * @param {boolean} isShowTotalBetFrame : 打開或關閉
     * @protected
     */
    protected abstract totalBetFrameTouchEvent(isShowTotalBetFrame: boolean): void;
    /**
     * 當下是否(開啟或關閉)加速狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isSpeedUp : 開啟或關閉
     * @protected
     */
    protected abstract speedUpEvent(isSpeedUp: boolean): void;
    /**
     * 當下是否(開啟或關閉)自動狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isAutomaticState
     * @param {fcc.type.AutoType} autoType
     * @protected
     */
    protected abstract autoEvent(isAutomaticState: boolean, autoType: fcc.type.AutoType): void;
    /**
     * 遊戲開始執行流程前事件
     * @protected
     */
    protected abstract startEvent(): void;
    /**
     * 遊戲開始執行流程完成後事件
     * @protected
     */
    protected abstract endEvent(): void;
    /**
     * 打開遊戲菜單
     * @protected
     */
    protected abstract menuEvent(): void;
    /**
     * 警告事件
     * @protected
     */
    protected abstract warningEvent(): void;
    /**
     * 添加Notification接收事件
     * @private
     */
    private addNotification;
    /**
     * 觸控按壓時監聽
     * @private
     */
    protected startButtonOnTouchStart(): void;
    /**
     * 長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
     * @returns {Promise<void>}
     * @private
     */
    protected longTouchTimer(): Promise<void>;
    /**
     * 推播auto事件
     * @param {boolean} isAutoState - 當前自動狀態
     * @param {AutoType} autoType - 當前 auto類型
     * @private
     */
    private autoNotify;
    /**
     * start監聽抬起時狀態
     * 取消長壓計時器事件,並進入開始遊戲事件
     * @private
     */
    protected startButtonOnTouchEnd(): Promise<void>;
    /**
     * 鍵盤空白鍵壓下時監聽
     * @param event
     * @private
     */
    protected keyboardSpaceTouchStart(event: any): void;
    /**
     * 鍵盤空白鍵抬起時監聽
     * @param event
     * @private
     */
    protected keyboardSpaceTouchEnd(event: any): Promise<void>;
    /**
     * 自動狀態監聽者
     * 如有需求可自行override or 獲取監聽對象做關閉操作
     * @returns {AutoStateChangeObserver}
     * @protected
     */
    protected getAutoStateChangeObserver(): AutoStateChangeObserver;
    /**
     * 更新玩家金額
     */
    protected getUserMoneyChangeObserver(): UserMoneyChangeObserver;
    /**
     * 開始遊戲監聽事件
     * @returns {Promise<void>}
     * @protected
     */
    protected startButtonEvent(): Promise<void>;
    /**
     * 自動按鈕監聽事件
     * 如果當前押注視窗開啟中,將更換為關閉視窗方法
     * 正常情況,推播當前auto狀態事件
     * @private
     */
    protected autoButtonEventListener(): void;
    /**
     * 加速按鈕監聽事件
     * @protected
     */
    protected speedUpButtonEventListener(): void;
    /**
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected totalBetFrameTouchEventListener(): void;
    /**
     * menu按鈕監聽事件
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected menuButtonEventListener(): void;
}
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
declare abstract class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {
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
    protected abstract menuButton: cc.Button;
    protected onLoad(): void;
    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonOnEnable(): void;
    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonDisable(): void;
}
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
declare abstract class AMainGameDoubleButtonTemplate extends AMainGameButtonTemplate {
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
    protected abstract menuButtonH: cc.Button;
    /**
     * 設定頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract menuButtonV: cc.Button;
    protected onLoad(): void;
    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonOnEnable(): void;
    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonDisable(): void;
}
interface IBaseTableInfoModel {
    /**
     * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
     */
    BetTimes: number;
    /**
     * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
     */
    LineBet: Array<number>;
    /**
     * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
     */
    LineTotalBet: Array<number>;
    /**
     * 賠率表
     */
    PayTable: object;
    /**
     * 玩家現有金額
     */
    UserPoint: number;
    /**
     * 預設押住倍率
     */
    DefaultBetIndex: number;
    /**
     * 活動模式 0 沒有 11 轉盤
     * @type {number}
     */
    EventMode: number;
    /**
     * 活動轉數需求
     * @type {number}
     */
    EventRequire: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,所有按鈕事件
 * ```
 *      事件:
 *          推撥 {AutoStateChangeNotification} : 訂閱自動狀態改變時
 *          推撥 {UserTotalBetChangeNotification} : 用戶更換的押住金額事件
 *          接收 {UserTotalBetChangeNotification} : 用戶更換的押住金額事件
 *              callback: this.totalBetChangeEvent(beforeIndex, afterIndex);
 *
 * ```
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 *
 */
declare abstract class AMenuButtonTemplate extends AGenericTemplate {
    /**
     * 訂閱自動事件
     * @type {UserTotalBetChangeObserver}
     * @private
     */
    private userTotalBetChangeObserver;
    /**
     * 訂閱用戶更改押注時事件
     * @type {AutoStateChangeObserver}
     * @private
     */
    private autoStateChangeObserver;
    /**
     * 自訂義初始狀態
     * @protected
     */
    protected abstract onCreate(): any;
    /**
     * 背景音樂按鈕事件
     * @param {boolean} isOnMute : 是否靜音
     * @protected
     */
    protected abstract musicEvent(isOnMute: boolean): any;
    /**
     * 效果音樂按鈕事件
     * @param {boolean} isOnMute : 是否靜音
     * @protected
     */
    protected abstract effectEvent(isOnMute: boolean): any;
    /**
     * 自動按鈕事件
     * @param {AutoType} beforeAutoCount : 點擊前的按鈕type
     * @param {AutoType} afterAutoCount : 更新的按鈕type
     * @protected
     */
    protected abstract autoEvent(beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType): any;
    /**
     * 前往設定頁按鈕事件
     * @protected
     */
    protected abstract settingPageTouchEvent(): any;
    /**
     * 前往紀錄頁按鈕事件
     * @protected
     */
    protected abstract recordPageTouchEvent(): any;
    /**
     * 前往說明頁按鈕事件
     * @protected
     */
    protected abstract descriptionPageEvent(): any;
    /**
     * 更換押注事件
     * @param beforeIndex
     * @param afterIndex
     * @protected
     */
    protected abstract totalBetChangeEvent(beforeIndex: any, afterIndex: any): any;
    /**
     * 返回遊戲頁面按鈕事件
     * @protected
     */
    protected abstract goBackTouchEvent(): any;
    /**
     * 返回首頁按鈕監聽事件
     * @protected
     */
    protected abstract goHomeTouchEvent(): any;
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
    /**
     * 當前玩家押住
     * @protected
     */
    protected abstract nowBetIndex: number;
    protected onLoad(): void;
    /**
     * 加入訂閱綁定事件
     * @private
     */
    private addNotification;
    /**
     * 自動更新當前是否靜音背景音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    protected musicEventListener(): void;
    /**
     * 自動更新當前是否靜音效果音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    protected effectEventListener(): void;
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最大值,將會自動跳回最小值
     * @protected
     */
    protected betUpEventListener(): void;
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最小值,將會自動跳回最大值
     * @protected
     */
    protected betDownEventListener(): void;
    /**
     * 當前總押注事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    protected getUserTotalBetChangeObserver(): UserTotalBetChangeObserver;
    /**
     * 自動按鈕點擊事件
     * @param event
     * @param {AutoType} callbackType : 哪顆類型的按鈕點擊
     * @protected
     */
    protected autoButtonEventListener(event: any, callbackType: fcc.type.AutoType): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,主遊戲雙按鈕配置
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
declare abstract class AMenuDoubleButtonTemplate extends AMenuButtonTemplate {
    /**
     * 背景音樂按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButtonH: cc.Button;
    /**
     * 背景音樂按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButtonV: cc.Button;
    /**
     * 效果音樂按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButtonH: cc.Button;
    /**
     * 效果音樂按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButtonV: cc.Button;
    /**
     * 押住籌碼提高按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButtonH: cc.Button;
    /**
     * 押住籌碼提高按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButtonV: cc.Button;
    /**
     * 押住籌碼降低按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButtonH: cc.Button;
    /**
     * 押住籌碼降低按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButtonV: cc.Button;
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
     * 自動50次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50ButtonH: cc.Button;
    /**
     * 自動50次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50ButtonV: cc.Button;
    /**
     * 自動100次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100ButtonH: cc.Button;
    /**
     * 自動100次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100ButtonV: cc.Button;
    /**
     * 自動500次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500ButtonH: cc.Button;
    /**
     * 自動500次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500ButtonV: cc.Button;
    /**
     * 自動1000次按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000ButtonH: cc.Button;
    /**
     * 自動1000次按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000ButtonV: cc.Button;
    /**
     * 自動直到免費後停止按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButtonH: cc.Button;
    /**
     * 自動直到免費後停止按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButtonV: cc.Button;
    /**
     * 離開菜單頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonH: cc.Button;
    /**
     * 離開菜單頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonV: cc.Button;
    /**
     * 離開遊戲按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButtonH: cc.Button;
    /**
     * 離開遊戲按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButtonV: cc.Button;
    /**
     * 進入紀錄頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButtonH: cc.Button;
    /**
     * 進入紀錄頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButtonV: cc.Button;
    /**
     * 進入設定頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButtonH: cc.Button;
    /**
     * 進入設定頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButtonV: cc.Button;
    /**
     * 進入說明頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButtonH: cc.Button;
    /**
     * 進入說明頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButtonV: cc.Button;
    protected onLoad(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,單一按鈕配置
 * @Example 單一方向遊戲
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
declare abstract class AMenuOnlyButtonTemplate extends AMenuButtonTemplate {
    /**
     * 背景音樂按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract musicButton: cc.Button;
    /**
     * 效果音樂按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract effectButton: cc.Button;
    /**
     * 押住籌碼提高按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract betUpButton: cc.Button;
    /**
     * 押住籌碼降低按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract betDownButton: cc.Button;
    /**
     * 自動按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoButton: cc.Button;
    /**
     * 自動50次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto50Button: cc.Button;
    /**
     * 自動100次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto100Button: cc.Button;
    /**
     * 自動500次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto500Button: cc.Button;
    /**
     * 自動1000次按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract auto1000Button: cc.Button;
    /**
     * 自動直到免費後停止按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract autoFreeEndButton: cc.Button;
    /**
     * 離開菜單頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButton: cc.Button;
    /**
     * 離開遊戲按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goHomeButton: cc.Button;
    /**
     * 進入紀錄頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract recordButton: cc.Button;
    /**
     * 進入設定頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract settingButton: cc.Button;
    /**
     * 進入說明頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract descriptionPageButton: cc.Button;
    protected onLoad(): void;
}
/**
 * 更換頁面type
 */
declare enum PageChangeType {
    NEXT = "NEXT",
    PREVIOUS = "PREVIOUS"
}
/**
 * 日期type
 */
declare enum DayType {
    ONE_DAY = "ONE_DAY",
    FIVE_DAY = "FIVE_DAY",
    TEN_DAY = "TEN_DAY"
}
/**
 * @Author 蕭立品
 * @Description 說明頁按鈕統一事件名稱命名
 * @Date 2021-05-10 下午 02:20
 * @Version 1.0
 */
declare abstract class ARecordButtonTemplate extends AGenericTemplate {
    protected onLoad(): void;
    /**
     * 返回上一頁事件
     * @param event - cocos 返回該按鈕屬性
     * @protected
     */
    protected abstract goBackTouchEvent(event: any): void;
    /**
     * 顯示祥單頁面
     * @protected
     */
    abstract showRecordPage(): void;
    /**
     * 紀錄換頁事件
     * @param event - cocos 返回該按鈕屬性
     * @param {PageChangeType} callBack - 返回字串,當前是上一頁按鈕還是下一頁按鈕被觸發
     * @protected
     */
    protected abstract nextAndLastButtonTouchEvent(event: any, callBack: PageChangeType): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 紀錄頁面雙按鈕配置
 *  * @Example 同時擁有直橫向方向遊戲
 * ```
 *      使用事件:
 *          fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT
 *          callback :  abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);
 * ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare abstract class ARecordDoubleButtonTemplate extends ARecordButtonTemplate {
    /**
     * 離開記錄頁按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonH: cc.Button;
    /**
     * 離開記錄頁按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButtonV: cc.Button;
    /**
     * 查看一日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButtonH: cc.Button;
    /**
     * 查看一日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButtonV: cc.Button;
    /**
     * 查看五日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButtonH: cc.Button;
    /**
     * 查看五日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButtonV: cc.Button;
    /**
     * 查看十日內紀錄按鈕H
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButtonH: cc.Button;
    /**
     * 查看十日內紀錄按鈕V
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButtonV: cc.Button;
    /**
     * 查看下一頁紀錄H
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButtonH: cc.Button;
    /**
     * 查看下一頁紀錄V
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButtonV: cc.Button;
    /**
     * 查看上一頁紀錄H
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButtonH: cc.Button;
    /**
     * 查看上一頁紀錄V
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButtonV: cc.Button;
    protected onLoad(): void;
    /**
     * 所有橫式天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventH(event: any, callBack: DayType): any;
    /**
     * 所有直式天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventV(event: any, callBack: DayType): any;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 紀錄頁面單一按鈕配置
 * @Example 單一方向遊戲
 * ```
 *      使用事件:
 *          fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT
 *          callback :  abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);
 * ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare abstract class ARecordOnlyButtonTemplate extends ARecordButtonTemplate {
    /**
     * 離開記錄頁按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract goBackButton: cc.Button;
    /**
     * 查看一日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract oneDayRecordButton: cc.Button;
    /**
     * 查看五日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract fiveDayRecordButton: cc.Button;
    /**
     * 查看十日內紀錄按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract tenDayRecordButton: cc.Button;
    /**
     * 查看下一頁紀錄
     * @type {cc.Button}
     * @protected
     */
    protected abstract nextRecordButton: cc.Button;
    /**
     * 查看上一頁紀錄
     * @type {cc.Button}
     * @protected
     */
    protected abstract previousRecordButton: cc.Button;
    protected onLoad(): void;
    /**
     * 所有天數按鈕統一監聽
     * @protected
     */
    protected abstract daysRecordTouchEventH(event: any, callBack: DayType): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 錯誤視窗模板
 * @Date 2021-07-07 下午 14:01
 * @Version 0.0.3
 */
declare abstract class AErrorFrameTemplate extends AGenericTemplate {
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
    protected abstract errorButtonTouchEvent(): void;
    protected onLoad(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (模板)登入遊戲內進入主遊戲
 * ```
 *      事件:
 *          接收 {ResponseResultNotification} :
 *          當server  已成功回傳 TableInfo 會觸發打開 isGetTableInfoResponse = true
 *          可在update監聽,並給予前往主畫面事件
 *
 * ```
 * @Date 2021-07-07 上午 10:55
 * @Version 0.0.3
 */
declare abstract class ALoadingTemplate extends AGenericTemplate {
    /**
     * 是否Server已經回傳TableInfo信息
     * @type {boolean}
     * @default false
     * @private
     */
    private _isGetTableInfoResponse;
    /**
     * 進度條組件
     * @type {cc.ProgressBar}
     * @private
     */
    protected abstract progressBar: cc.ProgressBar;
    /**
     * 進入主遊戲場景按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract intoMainGameButton: cc.Button;
    /**
     * 讀取條內所有文字的父類
     * @type {cc.Node}
     * @protected
     */
    protected abstract progressTextParent: cc.Node;
    /**
     * 讀取條內所有文字
     */
    protected abstract progressTextLabel: cc.Label[];
    /**
     * 載入主資源
     */
    protected abstract loadResources(): void;
    /**
     * 載入次資源
     */
    protected abstract loadAssetBundle(): void;
    /**
     * 載入外部資源
     */
    protected abstract loadExternalScript(): void;
    /**
     * 當前scene模式,更新當前畫面是配寬高
     */
    protected abstract sceneStyle(): void;
    /**
     * 更新讀取條文字動畫
     */
    protected abstract updateProgressTextAnimation(): void;
    /**
     * 進入主遊戲按鈕事件
     * @protected
     */
    protected abstract intoMainGameButtonEvent(): void;
    protected constructor();
    protected onLoad(): void;
    protected start(): void;
    protected responseNotification(): void;
    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    get isGetTableInfoResponse(): boolean;
}
/**
 * @Author XIAO-LI-PIN
 * @FIXME: 程式碼須修復
 * @Description 進度讀取diaLog模板
 * @Date 2021-05-11 下午 05:41
 * @Version 1.0
 */
declare abstract class ALoadingFrameTemplate extends AGenericTemplate {
    protected abstract loadingDialogNode: cc.Node;
    protected abstract progressBar: cc.ProgressBar;
    protected abstract progressText: cc.Label;
    protected progressValue: number;
    protected timeOut: number;
    protected addProgressValue: any;
    private timer;
    protected onLoad(): void;
    /**
     * 初始化讀取條
     * @private
     */
    private loadingInitialize;
    runProgress(resName: string): Promise<void>;
    private progressTimer;
    private closeLoadingDiaLog;
    /**
     * 確認當下該資源是否正在加載
     * @param {string} resName
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @returns {boolean}
     * @private
     */
    private checkHasRes;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 瞇排模板
 * ```
 *      事件:
 *         接收{ScrollFocusStateNotification} : 瞇排事件觸發時
 * ```
 * @Date 2021-05-26 下午 17:24
 * @Version 1.1
 */
declare abstract class ALookAtTemplate extends AGenericTemplate {
    /**
     * 當前所有列的瞇排特效animation
     * @type {Array<cc.Animation>}
     * @protected
     */
    protected abstract allLookAtEffect: Array<cc.Animation>;
    /**
     * 瞇排事件通知
     * @type {ScrollFocusStateObserver}
     * @private
     */
    private _scrollFocusStateObserver;
    /**
     * 顯示瞇排特效
     * @param {number} index:第幾列
     * @protected
     */
    protected abstract showLookAtEffect(index: number): any;
    /**
     * 關閉瞇排特效
     * @param {number} index : 第幾列
     * @protected
     */
    protected abstract removeLookAtEffect(index: number): any;
    protected onLoad(): void;
    /**
     * 添加推撥的接收事件
     */
    addNotification(): void;
    /**
     * 瞇排事件訂閱者
     * @private
     */
    private getScrollFocusStateObserver;
}
/**
 * @Author 蕭立品
 * @Description 顯示 winLine
 * ```
 *  注意:
 *      需實作方法:
 *          //隱藏組件,時間可自己抓
 *          hideNode(lineNumber?:number):Promise<void>;
 *          //顯示贏線格子動畫,無做同步,時間需自己抓
 *          showWinGrid(gridNumber:number):void;
 *          //顯示贏分
 *          showWinPoint(lineNumber?:number):void;
 *          //強制關閉winLine輪播
 *          clear();
 *
 *      知識:
 *      vector (向量): 值為當前該Line物件移動方向
 *          例如1:初始將該 LineNode :
 *          LineNode{
 *              Anchor 調整為(1,0),
 *              Rotation:-90,
 *          };
 *          需求為線條由左往右移動,此時向量應為 cc.v2(0,1);
 *          總之就是因為調整方向角Rotation = -90,實際上往上方向的向量會因此往右移動
 *
 *          例如2:初始將該 LineNode :
 *          LineNode{
 *              Anchor 調整為(0,1),
 *              Rotation:0,
 *          };
 *          需求為線條由左往右移動,此時向量應為 cc.v2(1,0);
 *          此時向量只需給予正常模式
 *
 *          向量知識:
 *              cc.v2(1,0) = 往右
 *              cc.v2(0,1) = 往上
 *              cc.v2(-1,0) = 往左
 *              cc.v2(0,-1) = 往下
 *
 * ```
 * @Date 2021-07-13 下午 01:37
 * @Version 1.0
 */
declare abstract class AWinLinTemplate extends AGenericTemplate {
    /**
     * 存放所有贏線會經過的點(老虎機所有格子的中心點)
     * @type {Array<Map<number, number>>}
     * @private
     */
    protected allGridPosition: Array<Map<number, number>>;
    /**
     * 存放該局所有會使用到的線
     * ```
     *   Array[第幾條線]<Map<線段編號(0~slot長度+1),線段 node>>
     * ```
     * @type {Array<Map<number, cc.Node>>}
     * @private
     */
    private allWinLine;
    /**
     * 存放該局所有會使用到的粒子
     * ```
     *   Map<線段編號,粒子 node>
     * ```
     * @type {Array<Map<number, cc.Node>>}
     * @private
     */
    private allParticle;
    /**
     * 判斷是否持續執行單線播放
     * @type {boolean}
     * @private
     */
    private isStop;
    /**
     * 向量 : 當前線條執行方向
     * @type {cc.Vec2}
     * @private
     */
    protected lineVector: cc.Vec2;
    /**
     * 向量 : 當前粒子執行方向
     * @type {cc.Vec2}
     * @private
     */
    protected particleVector: cc.Vec2;
    /**
     * 初始角度
     * @type {number}
     * @private
     */
    protected angle: number;
    /**
     * 執行線條動畫時間(單位為S)
     * 建議 : 0.5 以下
     */
    protected runLineSpeed: number;
    /**
     * 執行粒子移動動畫時間(單位為S)
     * 建議 : 0.5 以下
     */
    protected runParticleSpeed: number;
    /**
     * 執行各粒子動畫間格時間(單位為S)
     * @type {number}
     * @protected
     */
    protected runParticleIntervalTime: number;
    /**
     * 線條容器層級位置,因容器位置會改變線條層級顯示
     * 注意:需要再最上層參數可以是 cc.macro.MAX_ZINDEX
     * 默認為 cc.macro.MAX_ZINDEX -1;
     * @type {number}
     * @private
     */
    protected lineContainerIndex: number;
    /**
     * 粒子容器層級位置,因容器位置會改變線條層級顯示
     * 注意:需要再最上層參數可以是 cc.macro.MAX_ZINDEX
     * 默認為 cc.macro.MAX_ZINDEX;
     * @type {number}
     * @private
     */
    protected particleContainerIndex: number;
    /**
     * 每列格子數量
     * @type {number}
     * @private
     */
    protected abstract gridCont: number;
    /**
     * 每個格子高度
     * @type {number}
     * @private
     */
    protected abstract gridHeight: number;
    /**
     * 贏分線條,Sprite組件
     * @protected
     */
    protected abstract lineSprite: cc.Sprite;
    /**
     * 贏分粒子,Prefab組件
     * @protected
     */
    protected abstract particlePrefab: cc.Prefab;
    /**
     * slot所有列,計算點用
     * @type {cc.Node[]}
     * @protected
     */
    protected abstract gridRow: cc.Node[];
    /**
     * 存放所有贏線的容器
     * @type {cc.Node}
     * @private
     */
    protected _lineContainer: cc.Node;
    /**
     * 存放所有粒子的容器
     * @type {cc.Node}
     * @private
     */
    private _particleContainer;
    /**
     * 隱藏物件,當贏線動畫跑完之後,需自行隱藏該線條,與贏分格子
     * ```
     *  隱藏線條方法可使用 :
     *      restoreLines(lineNumber?)
     *
     * ```
     * @param {number} lineNumber - 有參數回傳為單一線條,無參數回傳為所有線條
     * @return {Promise<void>}
     * @protected
     */
    protected abstract hideNode(lineNumber?: number): Promise<void>;
    /**
     * 顯示獲獎格子動畫
     * @param {number} gridNumber - 獲獎的格子
     * @param {number} lineNumber - 正在執行哪條線
     * @protected
     */
    protected abstract showWinGrid(gridNumber: number, lineNumber: number): void;
    /**
     * 顯示獲獎分數
     * @param {number} lineNumber - 有參數回傳為單一線條,無參數回傳為所有線條
     * @protected
     */
    protected abstract showWinPoint(lineNumber?: number): void;
    protected onCreate(): void;
    protected start(): void;
    /**
     * 還原使用過的贏線為初始狀態
     * @param {number} lineNumber - 有傳參會只對該線條內的物件初始,無傳參會對所有物件
     */
    restoreNode(lineNumber?: number): void;
    /**
     * 建構該局贏線的Node容器
     */
    protected buildWinLineContainer(): void;
    /**
     * 建構該局贏線的Node容器
     */
    protected buildParticleContainer(): void;
    /**
     * 執行單條贏線依序播放
     * @param {Array<Array<number>>} answers
     */
    play(answers: Array<Array<number>>): Promise<void>;
    /**
     * 顯示所有線
     * @private
     */
    private runLine;
    /**
     * 執行全贏線動畫
     * @param {Array<Array<number>>} answer
     */
    playAll(answer: Array<Array<number>>): Promise<void>;
    /**
     * 顯示所有線
     * @private
     */
    private runAllLine;
    /**
     * 初始各線段初始位置
     * @param {number} lineNumber
     * @param {number} lineChildNumber
     * @param {number} answer
     * @private
     */
    private initLinePosition;
    /**
     * 初始各線段粒子初始位置
     * @param {number} lineNumber
     * @param {number} answer
     * @private
     */
    private initParticlePosition;
    /**
     * 拿取座標位置
     * @param {number} lineNumber - 哪一條線
     * @param {number} lineChildNumber - 第幾線段:(整條線段拆分成 該Slot列數+1)
     * @param {number} answer - 答案 (第幾個grid)
     * @return {cc.Vec2} - 座標
     * @private
     */
    private getPosition;
    /**
     * 執行播放跑線動畫
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @return {Promise<void>}
     * @private
     */
    private runLineToAsync;
    /**
     * 依序執行該線條遞迴播放跑線動畫
     * @NODE 對應A點 > B點 > C 點方式,依序使用遞迴方式將線條連線
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @param {(value: (void | PromiseLike<void>)) => void} resolve - 釋放異步
     * @param {number} lineChildNumber - 由遞迴增加,每遞迴一次更新下個線段
     */
    private lineToGridAnimationLoop;
    /**
     * 執行粒子動畫
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @return {Promise<void>}
     * @private
     */
    private runParticleToAsync;
    /**
     * 依序執行粒子遞迴播放跑線動畫
     * @NODE 對應A點 -> B點 -> C 點方式,依序使用遞迴方式將粒子跑完
     * @param {number} lineNumber - 哪一條線
     * @param {Array<number>} answer - 該線條會經過的所有答案
     * @param {(value: (void | PromiseLike<void>)) => void} resolve - 釋放異步
     * @param {number} lineChildNumber - 由遞迴增加,每遞迴一次更新下個線段
     */
    private particleToGridAnimationLoop;
    /**
     * 複製組件
     * @param {number} quantity - 贏幾條線
     * @return {this}
     * @protected
     */
    copyWinLineNode(quantity: number): void;
    /**
     * 複製粒子
     * @param {number} quantity - 贏幾條線
     * @return {this}
     * @protected
     */
    protected copyParticleToContainer(quantity: number): this;
    /**
     * 複製贏線
     * @param {number} quantity - 贏幾條線
     * @return {this}
     * @protected
     */
    protected copyWinLineToContainer(quantity: number): this;
    /**
     * 初始所有line會經過的點
     * ```
     *      注意:如果點位不正常,請自行override實現
     * ```
     */
    protected initWinLinPosition(): Array<Map<number, number>>;
    /**
     * 獲取兩點間距離
     * ```
     *      兩點間距離公式 :
     *          d = √(p2.x - p1.x)^2 + (p2.y- p1.y)^2
     * ```
     * @param {cc.Vec2} p1 - 起點
     * @param {cc.Vec2} p2 - 要到達的點
     * @return {number} - 兩點間距離(因兩條線間隙問題,無條件進位+1)
     * @private
     */
    private getDistanceBetweenTwoPoints;
    /**
     * 獲取兩點間角度
     * ```
     *      1.獲取P1到P2的向量方向
     *          公式:X:(P2.x -P1.x),Y:(P2.y - P1-y)
     *
     *      2.弧度轉換角度公式:
     *         angle = radians * (180 / Math.PI)
     * ```
     * @param {cc.Vec2} p1 - 起始點
     * @param {cc.Vec2} p2 - 終點
     * @param {cc.Vec2} vector - 向量角度
     * @return {number} - 兩點間角度
     */
    private getAngleBetweenTwoPoints;
    /**
     * 清除所有該局使用完的贏線
     */
    clear(): void;
    get particleContainer(): cc.Node;
    get lineContainer(): cc.Node;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 進入主遊戲時需初始的操作
 * @Date 2021-07-01 下午 20:24
 * @Version 0.0.3
 */
declare abstract class AMainInitTemplate extends AGenericTemplate {
    protected onLoad(): void;
    /**
     * 建立詳單頁面
     */
    protected abstract setHistoryDetail(): any;
    /**
     * 實例化所有動態加載的prefab
     */
    protected abstract prefabInstantiate(): any;
}
/**
 * @Author XIAO-LI-PIN
 * @Description slot 模板
 * @NOTE 需事先綁定 StopNowStateNotification 和 SpeedStateChangeNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare abstract class ASlotTemplate implements fcc.IF.ISlot {
    /**
     * 由 fcc.slotStyleMgr build 實現
     * @type {fcc.IF.ISlotSetting}
     * @protected
     */
    protected styleData: fcc.IF.ISlotSetting;
    /**
     * 使否需要即停
     * @type {boolean}
     * @protected
     */
    protected isSlotImmediateStop: boolean;
    /**
     * 當前的加速狀態
     * @type {boolean}
     * @protected
     */
    protected isSpeedUp: boolean;
    /**
     * 當前加速速率 : 無加速狀態 = 1
     * @type {number}
     * @protected
     */
    protected speedRatio: number;
    /**
     * 即停狀態通知時,該事件推播給綁定者
     * @type {StopNowStateObserver}
     * @protected
     */
    protected stopNowStateObserver: StopNowStateObserver;
    /**
     * 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
     * @type {SpeedStateChangeObserver}
     * @protected
     */
    protected speedStateChangeObserver: SpeedStateChangeObserver;
    /**
     * 當server回傳該局答案時,當有事件推送時,將會將該事件推播給綁定者
     * @type {ResponseResultObserver}
     * @private
     */
    private responseResultObserver;
    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    abstract runSlotAnimation(): Promise<void>;
    /**
     * 啟動老虎機時過場動畫方法
     * @return {Promise<void>}
     */
    abstract sineInSlot(): Promise<void>;
    /**
     * 初始化該輪所有狀態
     */
    abstract initializeState(): void;
    /**
     * 是否server已經回傳結果
     * @type {boolean}
     * @protected
     */
    protected isResultOK: boolean;
    protected constructor(styleData: fcc.IF.ISlotSetting, configManager: fcc.IF.ISlotConfigManager);
    /**
     * 添加推播事件
     */
    addNotification(): void;
    /**
     * 即停監聽事件
     * @returns {StopNowStateObserver}
     * @private
     */
    private getStopNowStateObserver;
    /**
     * 加速按鈕監聽事件
     * @private
     */
    private getSpeedStateChangeObserver;
    /**
     * Server是否回傳答案事件
     * @return {ResponseResultObserver}
     * @private
     */
    private getResponseResultObserver;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot一般狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotBaseResultModel {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     */
    State: number;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     */
    TotalWinPoint: number;
    /**
     * 玩家現有金額(贏分後)
     */
    UserPointAfter: number;
    /**
     * 玩家現有金額(押注後)
     */
    UserPointBefore: number;
    /**
     * 15格的資料
     */
    Grid: Array<number>;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)所有類型Slot免費狀態接收封包的父類
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface ISlotFreeBaseResultModel {
    /**
     * 0: 押注成功 1: 非免費時間押注
     */
    State: number;
    /**
     * 玩家現有金額(贏分後)
     */
    UserPointAfter: number;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     */
    Count: number;
    /**
     * 免費遊戲累計贏分
     */
    FreeSpinWin: number;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     */
    TotalWinPoint: number;
    /**
     * 15格的資料
     */
    Grid: Array<number>;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,執行圖標圖案與答案圖案相同
 *  ```
 *      SLOT STYLE : fcc.SlotImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          推播 {SlotRowEndNotification} : 所有軸停止事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {ISlotBaseResultModel} : 一般獲獎model
 *          model {ISlotBaseResultModel} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare class NormalSlotTemplate extends ASlotTemplate {
    /**
     * 一般停止最少轉動次數
     * @type {number}
     * @private
     */
    protected readonly slotTurnCount: number;
    /**
     * 遊戲每格格子間的速度
     * @type {number}
     * @private
     */
    protected readonly slotGirdSpeed: number;
    /**
     * 遊戲每列的格子數量
     * @type {number}
     * @private
     */
    protected readonly slotRowGridCount: number;
    /**
     * 老虎機格子高度
     * @type {number}
     * @private
     */
    protected readonly slotGridHeight: number;
    /**
     * 確認該軸是否有 free 圖標
     * @param index
     */
    protected freeIconCount: number;
    /**
     * 加速倍率
     * @type {number}
     * @private
     */
    protected readonly speedUpMultiple: number;
    /**
     * 執行老虎機動畫的列
     * @type {Array<cc.Node>}
     * @private
     */
    protected readonly slotColumnToTween: Array<cc.Node>;
    /**
     * 跑遊戲更換位置的grid 節點
     * @type {Map<number, Array<cc.Node>>}
     * @private
     */
    protected readonly gridNodeToMap: Map<number, Array<cc.Node>>;
    /**
     * 跑遊戲更換答案的grid 節點
     * @type {Map<number, Array<cc.Sprite>>}
     * @private
     */
    protected readonly gridSpriteToMap: Map<number, Array<cc.Sprite>>;
    /**
     * 遊戲中所有靜態grid圖片
     * @param {StyleData} styleData
     */
    protected readonly gridImg: Map<string, cc.SpriteFrame>;
    /**
     * 漸入時TWEEN動畫類型
     */
    protected readonly sineInEasing: string;
    /**
     * 淡出時TWEEN 動畫類型
     */
    protected readonly sineOutEasing: string;
    /**
     * 遊戲每列是否已經結束
     * @type {Array<boolean>}
     * @private
     */
    protected readonly isSlotEnd: Array<boolean>;
    /**
     * 遊戲瞇排是否已經確認過
     */
    protected readonly isRowCheckLookAt: Map<number, boolean>;
    /**
     * ["當前要跑幾個格子","slot高度"]
     * @type {Array<number>}
     * @private
     */
    protected readonly rowData: Array<number>;
    /**
     * 儲存SERVER答案的Model
     * @type {ISlotBaseResultModel}
     * @private
     */
    protected resultModel: ISlotBaseResultModel | ISlotFreeBaseResultModel;
    /**
     * 瞇排轉動次數
     * @type {number}
     * @private
     */
    private readonly lookAtCount;
    /**
     * 記錄每輪轉動次數
     * @type {Array<number>}
     * @private
     */
    private readonly rowTurnCount;
    constructor(styleData: fcc.SlotImgSetting, configManager: fcc.IF.ISlotConfigManager);
    /**
     * 計算當前格子高度
     * @private
     */
    protected getCalculateSlotHeight(): number;
    /**
     * 轉動前動畫,先往上,在往下1/2格
     * @return {Promise<void>}
     */
    sineInSlot(): Promise<void>;
    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    runSlotAnimation(): Promise<void>;
    /**
     * 開始執行格子輪播動畫
     * 如果server未回傳正確答案,將持續隨機圖片無限跑
     * @param index{number} 當前跑的是哪一列
     * @param resolve 當跑完時回傳Promise 讓Api執行下一段方法
     * @param numberOfTimes 監聽當前跑了幾輪,sever回傳答案後才開始計算圈數
     */
    protected executeSlotAnimation(index: number, resolve?: () => void, numberOfTimes?: number): void;
    /**
     * 拿取該要跑的次數
     * @param index - 哪一列
     * @return {number} - 該列要Loop的數字
     * @private
     */
    protected getSlotTurnCount(index: number): number;
    /**
     * 推送瞇排事件
     * @param {boolean} isShow - 是否要打開該列的瞇排特效
     * @param {number} index - 第幾列
     */
    protected notifyLookAtEvent(isShow: boolean, index: number): void;
    /**
     * 檢查是否可以即停
     * @param {number} index - 當前第幾列觸發即停事件
     * @param {() => void} resolve - 異步阻塞
     * @return {boolean}
     */
    protected isCanStop(index: number, resolve: () => void): boolean;
    /**
     * 更新輪播格子位置
     * @param rowNodes - 哪一列的 node 需要更換圖片位置
     * @param columnIndex - 當前是第幾列
     */
    protected updateGridPositionAndRandomImg(rowNodes: Array<cc.Node>, columnIndex: number): void;
    /**
     * 對該列正確結果顯示在頂部,透過動畫,並將結果顯示給user
     * @param {number} index : 哪一列
     * @param resolve
     */
    protected showAnswer(index: number, resolve?: any): void;
    /**
     * 檢查是否需要瞇牌
     * @param index{number}:檢查該列是否需要瞇牌
     * @return {boolean} : 如果需要瞇牌,返回true
     * @private
     */
    protected checkLookAt(index: number): boolean;
    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    protected sineOutAnimation(index: number, resolve: () => void): void;
    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    protected updateGridAnswer(index: number): void;
    /**
     * 初始化該輪所有狀態
     */
    initializeState(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,可更改各軸停止時間
 *  ```
 *      SLOT STYLE : fcc.SlotImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          推播 {SlotRowEndNotification} : 所有軸停止事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {ISlotBaseResultModel} : 一般獲獎model
 *          model {ISlotBaseResultModel} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare class NormalSlotSpecialTemplate extends ASlotTemplate {
    /**
     * 一般停止最少轉動次數
     * @type {number}
     * @private
     */
    protected readonly slotTurnCount: number;
    /**
     * 各軸間停止時間
     * @type {number}
     * @protected
     */
    protected readonly slotRowTime: number;
    /**
     * 遊戲每格格子間的速度
     * @type {number}
     * @private
     */
    protected readonly slotGirdSpeed: number;
    /**
     * 遊戲每列的格子數量
     * @type {number}
     * @private
     */
    protected readonly slotRowGridCount: number;
    /**
     * 老虎機格子高度
     * @type {number}
     * @private
     */
    protected readonly slotGridHeight: number;
    /**
     * 加速倍率
     * @type {number}
     * @private
     */
    protected readonly speedUpMultiple: number;
    /**
     * 執行老虎機動畫的列
     * @type {Array<cc.Node>}
     * @private
     */
    protected readonly slotColumnToTween: Array<cc.Node>;
    /**
     * 瞇排停止時間
     */
    protected readonly lookAtTime: number;
    /**
     * 跑遊戲更換位置的grid 節點
     * @type {Map<number, Array<cc.Node>>}
     * @private
     */
    protected readonly gridNodeToMap: Map<number, Array<cc.Node>>;
    /**
     * 跑遊戲更換答案的grid 節點
     * @type {Map<number, Array<cc.Sprite>>}
     * @private
     */
    protected readonly gridSpriteToMap: Map<number, Array<cc.Sprite>>;
    /**
     * 遊戲中所有靜態grid圖片
     * @param {StyleData} styleData
     */
    protected readonly gridImg: Map<string, cc.SpriteFrame>;
    /**
     * 漸入時TWEEN動畫類型
     */
    protected readonly sineInEasing: string;
    /**
     * 淡出時TWEEN 動畫類型
     */
    protected readonly sineOutEasing: string;
    /**
     * 遊戲每列是否已經結束
     * @type {Array<boolean>}
     * @private
     */
    protected readonly isSlotEnd: Array<boolean>;
    /**
     * 遊戲各列是否開始監聽停止時間
     */
    protected readonly isTimeEndListener: Array<boolean>;
    /**
     * 遊戲瞇排是否已經確認過
     */
    protected readonly isRowCheckLookAt: Map<number, boolean>;
    /**
     * 儲存SERVER答案的Model
     * @type {ISlotBaseResultModel}
     * @private
     */
    protected resultModel: ISlotBaseResultModel | ISlotFreeBaseResultModel;
    /**
     * 當前停軸監聽
     * @type {number}
     * @private
     */
    private nowTimer;
    constructor(styleData: fcc.SlotImgSpecialSetting, configManager: fcc.IF.ISlotConfigManager);
    /**
     * 轉動前動畫,先往上,在往下1/2格
     * @return {Promise<void>}
     */
    sineInSlot(): Promise<void>;
    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    runSlotAnimation(): Promise<void>;
    /**
     * 開始執行格子輪播動畫
     * 如果server未回傳正確答案,將持續隨機圖片無限跑
     * @param index{number} 當前跑的是哪一列
     * @param resolve 當跑完時回傳Promise 讓Api執行下一段方法
     * @param numberOfTimes 監聽第一列跑了幾輪,sever回傳答案後才開始計算圈數
     */
    protected executeSlotAnimation(index: number, resolve?: () => void, numberOfTimes?: number): void;
    /**
     * 開啟時間監聽,當符合該時間時會改變 結束狀態為TRUE;
     * @protected
     */
    protected startRowTimeListener(index: number): void;
    /**
     * 更新單個GRID格子位置,並給予隨機圖片
     * @param rowNodes - 要更換圖片的該列物件
     * @param rowIndex - 當前是第幾列
     */
    protected updateOnlyGridPositionAndRandomImg(rowNodes: Array<cc.Node>, rowIndex: number): void;
    /**
     * 推送瞇排事件
     * @param {boolean} isShow - 是否要打開該列的瞇排特效
     * @param {number} index - 第幾列
     */
    protected notifyLookAtEvent(isShow: boolean, index: number): void;
    /**
     * 檢查是否可以即停
     * @param {number} index - 當前第幾列觸發即停事件
     * @param {() => void} resolve - 異步阻塞
     * @return {boolean}
     */
    protected checkImmediateStopState(index: number, resolve: () => void): boolean;
    /**
     * 對該列正確結果顯示在頂部,透過動畫,並將結果顯示給user
     * @param {number} index : 哪一列
     * @param resolve
     */
    protected showAnswerAnimation(index: number, resolve?: any): void;
    /**
     * 檢查是否需要瞇牌
     * @param index{number}:檢查該列是否需要瞇牌
     * @return {boolean} : 如果需要瞇牌,返回true
     * @private
     */
    protected checkLookAt(index: number): boolean;
    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    protected sineOutAnimation(index: number, resolve: () => void): void;
    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    protected updateGridAnswer(index: number): void;
    /**
     * 初始化該輪所有狀態
     */
    initializeState(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,執行動畫為模糊圖標
 *  ```
 *      SLOT STYLE : fcc.SlotBurredImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {NoLineResult} : 一般獲獎model
 *          model {NoLineFreeResult} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare class SlotBurredImgTemplate extends NormalSlotTemplate {
    /**
     * 所有模糊圖標
     * @type {Map<string, cc.SpriteFrame>}
     * @private
     */
    private gridBurredImg;
    constructor(styleData: fcc.SlotBurredImgSetting, configManager: fcc.IF.ISlotConfigManager);
    /**
     * 更新輪播格子位置(更新的Gird圖片修正為模糊圖片)
     * @param rowNodes - 哪一列的 node 需要更換圖片位置
     * @param columnIndex - 當前是第幾列
     */
    protected updateGridPositionAndRandomImg(rowNodes: Array<cc.Node>, columnIndex: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 一般版老虎機,執行動畫為模糊圖標
 *  ```
 *      SLOT STYLE : fcc.SlotBurredImgSetting;
 *
 *      需擁有物件
 *          音效 {"SlotTurn"}: 轉動聲音
 *          音效 {"SlotStop"}: 停軸聲音
 *          音效 {"getFreeIcon"+"index"}: 免費圖標音效
 *          推撥 {ScrollFocusStateNotification} : 瞇排的推播事件
 *          接收 {StopNowStateNotification} : 即停的推播事件
 *          接收 {SpeedStateChangeNotification} : 加速的推播事件
 *          model {NoLineResult} : 一般獲獎model
 *          model {NoLineFreeResult} : 免費獲獎model
 *  ```
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare class SlotBurredImgSpecialTemplate extends NormalSlotSpecialTemplate {
    /**
     * 所有模糊圖標
     * @type {Map<string, cc.SpriteFrame>}
     * @private
     */
    private gridBurredImg;
    constructor(styleData: fcc.SlotBurredImgSpecialSetting, configManager: fcc.IF.ISlotConfigManager);
    /**
     * 更新單個GRID格子位置,並給予隨機圖片
     * @param rowNodes - 要更換圖片的該列物件
     * @param rowIndex - 當前是第幾列
     */
    protected updateOnlyGridPositionAndRandomImg(rowNodes: Array<cc.Node>, rowIndex: number): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 各種類型資源
 * @NOTE: 需事前綁定 ResponseResultNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
declare abstract class ASlotInitializeTemplate extends AGenericTemplate {
    /**
     * Slot 一般答案回傳結果
     * @type {ISlotBaseResultModel}
     * @protected
     */
    protected abstract normalResult: ISlotBaseResultModel;
    /**
     * Slot 免費答案回傳結果
     * @type {ISlotFreeBaseResultModel}
     * @protected
     */
    protected abstract freeResult: ISlotFreeBaseResultModel;
    /**
     * 執行老虎機動畫的列 所有列
     * @type {Array<cc.Node>}
     * @protected
     */
    protected abstract slotRow: Array<cc.Node>;
    /**
     * 執行動畫的所有格子
     * @type {Map<number, Array<cc.Node>>}
     * @protected
     */
    protected abstract gridNodeToMap: Map<number, Array<cc.Node>>;
    /**
     * 更換圖片的所有格子
     * @type {Map<number, Array<cc.Sprite>>}
     * @protected
     */
    protected abstract gridSpriteToMap: Map<number, Array<cc.Sprite>>;
    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected abstract slotStyleSetting(): void;
    protected onLoad(): void;
    protected start(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)擴展類有線免費狀態封包
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface IExtendHasLineFreeResult extends ISlotFreeBaseResultModel {
    /**
     * 黏性圖標編號
     */
    StickySymbol: number;
    /**
     * 黏性圖標位置
     */
    StickyChange: Array<number>;
    /**
     * 每條線贏分
     */
    LineWin: Array<number>;
    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     */
    FreeToFree: number;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    FreeLevelWin: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)有線類免費狀態封包
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface IHasLineFreeResultModule extends ISlotFreeBaseResultModel {
    /**
     * 是否有鬼牌 0:沒有 1:有
     */
    ChangeState: number;
    /**
     * 15格的資料 換圖 0:不換 1:換
     */
    Change: Array<number>;
    /**
     * 每條線贏分
     */
    LineWin: Array<number>;
    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     */
    LevelWin: number;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     */
    FreeToFree: number;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    FreeLevelWin: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (介面)無線類免費狀態封包
 * @Date 2021-05-31 下午 03:45
 * @Version 1.0
 */
interface INoLineFreeResultModel extends ISlotFreeBaseResultModel {
    /**
     * 是否有鬼牌 0:沒有 1:有
     */
    ChangeState: number;
    /**
     * 15格的資料 換圖 0:不換 1:換
     */
    Change: Array<number>;
    /**
     * 哪幾格贏 0:沒贏 1:贏
     */
    GridWin: Array<number>;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     */
    LevelWin: number;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     */
    FreeToFree: number;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    FreeLevelWin: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 黏性Slot遊戲狀態封包
 * @Date 2021-06-03 下午 04:58
 * @Version 1.0
 */
interface IExtendHasLineResult extends ISlotBaseResultModel {
    /**
     * 15格的資料
     */
    Grid: Array<number>;
    /**
     * 是否有神秘寶箱 0:沒有 1:有
     */
    SecretState: number;
    /**
     * 神秘寶箱位置 0:沒有 1:有
     */
    SecretChange: Array<number>;
    /**
     * 神秘寶箱格子圖案
     */
    SecretSymbol: number;
    /**
     * 每條線贏分
     */
    LineWin: Array<number>;
    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     */
    FreeSpinCount: number;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
    /**
     * 活動轉數
     */
    BonusEventCount: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 有線Slot遊戲狀態封包
 * @Date 2021-05-31 下午 03:46
 * @Version 1.0
 */
interface IHasLineResultModule extends ISlotBaseResultModel {
    /**
     * 15格的資料
     */
    Grid: Array<number>;
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
     */
    ChangeState: number;
    /**
     * 15格的資料 換圖 0:不換 1:換
     */
    Change: Array<number>;
    /**
     * 每條線贏分
     */
    LineWin: Array<number>;
    /**
     * 每條線贏幾格
     */
    LineGrid: Array<number>;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     */
    FreeSpinCount: number;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     */
    LookAt: Array<number>;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 無線Slot遊戲狀態封包
 * @Date 2021-07-01 下午 20:24
 * @Version 0.0.3
 */
interface INoLineResultModel extends ISlotBaseResultModel {
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
     */
    ChangeState: number;
    /**
     * 15格的資料 換圖 0:不換 1:換
     */
    Change: Array<number>;
    /**
     * 哪幾格贏 0:沒贏 1:贏
     */
    GridWin: Array<number>;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     */
    GameState: number;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     */
    FreeSpinCount: number;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     */
    BaseLevelWin: number;
    /**
     * 活動轉數
     */
    BonusEventCount: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 03:47
 * @Version 1.0
 */
interface IHasLineTableInfoModule extends IBaseTableInfoModel {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     */
    IsLines: number;
    /**
     * 幾線遊戲
     */
    Line: string;
    /**
     * 線位置
     */
    LineGridPos: Object;
    /**
     * 15格的資料 顯示用
     */
    Grid: Array<number>;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     */
    LevelWinPoint: Array<number>;
}
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 03:47
 * @Version 1.0
 */
interface INoLineTableInfoModule extends IBaseTableInfoModel {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     */
    IsLines: number;
    /**
     * 15格的資料 顯示用
     */
    Grid: Array<number>;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     */
    LevelWinPoint: Array<number>;
    /**
     * 幾線遊戲
     */
    Line: string;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線免費狀態封包
 * @Date 2021-06-03 下午 04:51
 * @Version 1.0
 */
declare class ExtendHasLineFreeResult implements IExtendHasLineFreeResult {
    /**
     * 0: 押注成功 1: 非免費時間押注
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 黏性圖標編號
     * @type {number}
     */
    private _StickySymbol;
    /**
     * 黏性圖標位置
     * @type {Array<number>}
     */
    private _StickyChange;
    /**
     * 每條線贏分
     * @type {Array<number>}
     */
    private _LineWin;
    /**
     * 每條線贏幾格
     * @type {Array<number>}
     */
    private _LineGrid;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _Count;
    /**
     * 免費遊戲累計贏分
     * @type {number}
     * @private
     */
    private _FreeSpinWin;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     * @type {number}
     * @private
     */
    private _FreeToFree;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _FreeLevelWin;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get StickySymbol(): number;
    set StickySymbol(value: number);
    get StickyChange(): Array<number>;
    set StickyChange(value: Array<number>);
    get LineWin(): Array<number>;
    set LineWin(value: Array<number>);
    get LineGrid(): Array<number>;
    set LineGrid(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get Count(): number;
    set Count(value: number);
    get FreeSpinWin(): number;
    set FreeSpinWin(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get FreeToFree(): number;
    set FreeToFree(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
    get FreeLevelWin(): number;
    set FreeLevelWin(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 有線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
declare class HasLineFreeResult implements IHasLineFreeResultModule {
    /**
     * 0: 押注成功 1: 非免費時間押注
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 是否有鬼牌 0:沒有 1:有
     * @type {number}
     * @private
     */
    private _ChangeState;
    /**
     * 15格的資料 換圖 0:不換 1:換
     * @type {Array<number>}
     * @private
     */
    private _Change;
    /**
     * 每條線贏分
     * @type {Array<number>}
     */
    private _LineWin;
    /**
     * 每條線贏幾格
     * @type {Array<number>}
     */
    private _LineGrid;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _Count;
    /**
     * 免費遊戲累計贏分
     * @type {number}
     * @private
     */
    private _FreeSpinWin;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     * @type {number}
     * @private
     */
    private _LevelWin;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     * @type {number}
     * @private
     */
    private _FreeToFree;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _FreeLevelWin;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get ChangeState(): number;
    set ChangeState(value: number);
    get Change(): Array<number>;
    set Change(value: Array<number>);
    get LineWin(): Array<number>;
    set LineWin(value: Array<number>);
    get LineGrid(): Array<number>;
    set LineGrid(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get Count(): number;
    set Count(value: number);
    get FreeSpinWin(): number;
    set FreeSpinWin(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get LevelWin(): number;
    set LevelWin(value: number);
    get FreeToFree(): number;
    set FreeToFree(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
    get FreeLevelWin(): number;
    set FreeLevelWin(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 無線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
declare class NoLineFreeResult implements INoLineFreeResultModel {
    /**
     * 0: 押注成功 1: 非免費時間押注
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 是否有鬼牌 0:沒有 1:有
     * @type {number}
     * @private
     */
    private _ChangeState;
    /**
     * 15格的資料 換圖 0:不換 1:換
     * @type {Array<number>}
     * @private
     */
    private _Change;
    /**
     * 哪幾格贏 0:沒贏 1:贏
     * @type {Array<number>}
     * @private
     */
    private _GridWin;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 剩餘免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _Count;
    /**
     * 免費遊戲累計贏分
     * @type {number}
     * @private
     */
    private _FreeSpinWin;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     * @type {number}
     * @private
     */
    private _LevelWin;
    /**
     * 再中免費遊戲次數 0:無 1~99:次
     * @type {number}
     * @private
     */
    private _FreeToFree;
    /**
     * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    /**
     * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _FreeLevelWin;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get ChangeState(): number;
    set ChangeState(value: number);
    get Change(): Array<number>;
    set Change(value: Array<number>);
    get GridWin(): Array<number>;
    set GridWin(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get Count(): number;
    set Count(value: number);
    get FreeSpinWin(): number;
    set FreeSpinWin(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get LevelWin(): number;
    set LevelWin(value: number);
    get FreeToFree(): number;
    set FreeToFree(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
    get FreeLevelWin(): number;
    set FreeLevelWin(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線一般狀態封包
 * @Date 2021-06-03 下午 04:50
 * @Version 1.0
 */
declare class ExtendHasLineResult implements IExtendHasLineResult {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 是否有神秘寶箱 0:沒有 1:有
     * @type {number}
     */
    private _SecretState;
    /**
     * 神秘寶箱位置 0:沒有 1:有神秘寶箱位置 0:沒有 1:有
     * @type {Array<number>}
     */
    private _SecretChange;
    /**
     * 神秘寶箱格子圖案
     */
    private _SecretSymbol;
    /**
     * 每條線贏分
     * @type {Array<number>}
     * @private
     */
    private _LineWin;
    /**
     * 每條線贏幾格
     * @type {Array<number>}
     * @private
     */
    private _LineGrid;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _FreeSpinCount;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 玩家現有金額(押注後)
     * @type {number}
     * @private
     */
    private _UserPointBefore;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    /**
     * 活動轉數
     */
    private _BonusEventCount;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get SecretState(): number;
    set SecretState(value: number);
    get SecretChange(): Array<number>;
    set SecretChange(value: Array<number>);
    get SecretSymbol(): number;
    set SecretSymbol(value: number);
    get LineWin(): Array<number>;
    set LineWin(value: Array<number>);
    get LineGrid(): Array<number>;
    set LineGrid(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get FreeSpinCount(): number;
    set FreeSpinCount(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get UserPointBefore(): number;
    set UserPointBefore(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
    get BonusEventCount(): number;
    set BonusEventCount(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 有線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
declare class HasLineResult implements IHasLineResultModule {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
     * @type {Array<number>}
     * @private
     */
    private _Change;
    /**
     * 15格的資料 換圖 0:不換 1:換
     * @type {number}
     * @private
     */
    private _ChangeState;
    /**
     * 每條線贏分
     * @type {Array<number>}
     * @private
     */
    private _LineWin;
    /**
     * 每條線贏幾格
     * @type {Array<number>}
     * @private
     */
    private _LineGrid;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _FreeSpinCount;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 玩家現有金額(押注後)
     * @type {number}
     * @private
     */
    private _UserPointBefore;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get Change(): Array<number>;
    set Change(value: Array<number>);
    get ChangeState(): number;
    set ChangeState(value: number);
    get LineWin(): Array<number>;
    set LineWin(value: Array<number>);
    get LineGrid(): Array<number>;
    set LineGrid(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get FreeSpinCount(): number;
    set FreeSpinCount(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get UserPointBefore(): number;
    set UserPointBefore(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
declare class NoLineResult implements INoLineResultModel {
    /**
     * 0: 押注成功 1:遊戲狀態不符 2:超過
     * @type {number}
     * @private
     */
    private _State;
    /**
     * 15格的資料
     * @type {Array<number>}
     * @private
     */
    private _Grid;
    /**
     * 是否有鬼牌擴展 0:沒有 1:有
     * @type {number}
     * @private
     */
    private _ChangeState;
    /**
     * 15格的資料 換圖 0:不換 1:換
     * @type {Array<number>}
     * @private
     */
    private _Change;
    /**
     * 哪幾格贏 0:沒贏 1:贏
     * @type {Array<number>}
     * @private
     */
    private _GridWin;
    /**
     * 總贏得金額 (0:輸了 大於0:贏了 )
     * @type {number}
     * @private
     */
    private _TotalWinPoint;
    /**
     * 玩家現有金額(贏分後)
     * @type {number}
     * @private
     */
    private _UserPointAfter;
    /**
     * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
     * @type {number}
     * @private
     */
    private _GameState;
    /**
     * 免費遊戲次數 (0:沒有 1~99次)
     * @type {number}
     * @private
     */
    private _FreeSpinCount;
    /**
     * 瞇牌0:不用 1:瞇牌效果
     * @type {Array<number>}
     * @private
     */
    private _LookAt;
    /**
     * 玩家現有金額(押注後)
     * @type {number}
     * @private
     */
    private _UserPointBefore;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
     * @type {number}
     * @private
     */
    private _LevelWin;
    /**
     * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
     * @type {number}
     * @private
     */
    private _BaseLevelWin;
    /**
     * 活動轉數
     * @type {number}
     * @private
     */
    private _BonusEventCount;
    constructor();
    get State(): number;
    set State(value: number);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get ChangeState(): number;
    set ChangeState(value: number);
    get Change(): Array<number>;
    set Change(value: Array<number>);
    get GridWin(): Array<number>;
    set GridWin(value: Array<number>);
    get TotalWinPoint(): number;
    set TotalWinPoint(value: number);
    get UserPointAfter(): number;
    set UserPointAfter(value: number);
    get GameState(): number;
    set GameState(value: number);
    get FreeSpinCount(): number;
    set FreeSpinCount(value: number);
    get LookAt(): Array<number>;
    set LookAt(value: Array<number>);
    get UserPointBefore(): number;
    set UserPointBefore(value: number);
    get LevelWin(): number;
    set LevelWin(value: number);
    get BaseLevelWin(): number;
    set BaseLevelWin(value: number);
    get BonusEventCount(): number;
    set BonusEventCount(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 有線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
declare class HasLineTableInfo implements IHasLineTableInfoModule {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     * @type {number}
     */
    private _IsLines;
    /**
     * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
     * @type {number}
     */
    private _BetTimes;
    /**
     * 幾線遊戲
     * @type {string}
     */
    private _Line;
    /**
     * 賠率表
     * @type {object}
     */
    private _PayTable;
    /**
     * 賠率表
     * @type {Object}
     */
    private _LineGridPos;
    /**
     * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
     * @type {Array<number>}
     */
    private _LineBet;
    /**
     * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
     * @type {Array<number>}
     */
    private _LineTotalBet;
    /**
     * 是否為線遊戲(0:無線 1:有線)
     * @type {Array<number>}
     */
    private _Grid;
    /**
     * 玩家現有金額
     * @type {number}
     */
    private _UserPoint;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     * @type {Array<number>}
     */
    private _LevelWinPoint;
    /**
     * 活動模式 0 沒有 11 轉盤
     * @type {number}
     */
    private _EventMode;
    /**
     * 活動轉數需求
     * @type {number}
     */
    private _EventRequire;
    /**
     * 預設押住倍率
     */
    private _DefaultBetIndex;
    constructor();
    get IsLines(): number;
    set IsLines(value: number);
    get BetTimes(): number;
    set BetTimes(value: number);
    get Line(): string;
    set Line(value: string);
    get PayTable(): object;
    set PayTable(value: object);
    get LineGridPos(): Object;
    set LineGridPos(value: Object);
    get LineBet(): Array<number>;
    set LineBet(value: Array<number>);
    get LineTotalBet(): Array<number>;
    set LineTotalBet(value: Array<number>);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get UserPoint(): number;
    set UserPoint(value: number);
    get LevelWinPoint(): Array<number>;
    set LevelWinPoint(value: Array<number>);
    get DefaultBetIndex(): number;
    set DefaultBetIndex(value: number);
    get EventMode(): number;
    set EventMode(value: number);
    get EventRequire(): number;
    set EventRequire(value: number);
}
/**
 * @Author XIAO-LI-PIN
 * @Description 無線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
declare class NoLineTableInfo implements INoLineTableInfoModule {
    /**
     * 是否為線遊戲(0:無線 1:有線)
     * @type {number}
     */
    private _IsLines;
    /**
     * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
     * @type {number}
     */
    private _BetTimes;
    /**
     * 幾線遊戲
     * @type {string}
     */
    private _Line;
    /**
     * 賠率表
     * @type {object}
     */
    private _PayTable;
    /**
     * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
     * @type {Array<number>}
     */
    private _LineBet;
    /**
     * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
     * @type {Array<number>}
     */
    private _LineTotalBet;
    /**
     * 15格的資料 顯示用
     * @type {Array<number>}
     */
    private _Grid;
    /**
     * 玩家現有金額
     * @type {number}
     */
    private _UserPoint;
    /**
     * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
     * @type {Array<number>}
     */
    private _LevelWinPoint;
    /**
     * 活動模式 0 沒有 11 轉盤
     * @type {number}
     */
    private _EventMode;
    /**
     * 活動轉數需求
     * @type {number}
     */
    private _EventRequire;
    /**
     * 預設押住倍率
     */
    DefaultBetIndex: number;
    constructor();
    get IsLines(): number;
    set IsLines(value: number);
    get BetTimes(): number;
    set BetTimes(value: number);
    get Line(): string;
    set Line(value: string);
    get PayTable(): object;
    set PayTable(value: object);
    get LineBet(): Array<number>;
    set LineBet(value: Array<number>);
    get LineTotalBet(): Array<number>;
    set LineTotalBet(value: Array<number>);
    get Grid(): Array<number>;
    set Grid(value: Array<number>);
    get UserPoint(): number;
    set UserPoint(value: number);
    get LevelWinPoint(): Array<number>;
    set LevelWinPoint(value: Array<number>);
    get EventMode(): number;
    set EventMode(value: number);
    get EventRequire(): number;
    set EventRequire(value: number);
}
/**
 * 框架Module化
 */
export { fcc, AGenericTemplate, OverrideComponent, ACenterTemplate, AutoStateChangeNotification, ScrollFocusStateNotification, SpeedStateChangeNotification, StopNowStateNotification, UserMoneyChangeNotification, UserTotalBetChangeNotification, UserWinPointStateNotification, ResponseResultNotification, SlotRowEndNotification, AutoStateChangeObserver, ScrollFocusStateObserver, SpeedStateChangeObserver, StopNowStateObserver, UserMoneyChangeObserver, UserTotalBetChangeObserver, UserWinPointStateObserver, ResponseResultObserver, SlotRowEndObserver, AMainGameButtonTemplate, AMainGameOnlyButtonTemplate, AMainGameDoubleButtonTemplate, AMenuButtonTemplate, AMenuDoubleButtonTemplate, AMenuOnlyButtonTemplate, ARecordButtonTemplate, ARecordDoubleButtonTemplate, ARecordOnlyButtonTemplate, AErrorFrameTemplate, ALoadingTemplate, ALoadingFrameTemplate, ALookAtTemplate, AWinLinTemplate, AMainInitTemplate, ASlotTemplate, NormalSlotTemplate, NormalSlotSpecialTemplate, SlotBurredImgTemplate, SlotBurredImgSpecialTemplate, ASlotInitializeTemplate, IExtendHasLineFreeResult, IHasLineFreeResultModule, INoLineFreeResultModel, ISlotFreeBaseResultModel, IExtendHasLineResult, IHasLineResultModule, INoLineResultModel, ISlotBaseResultModel, IBaseTableInfoModel, IHasLineTableInfoModule, INoLineTableInfoModule, ExtendHasLineFreeResult, HasLineFreeResult, NoLineFreeResult, ExtendHasLineResult, HasLineResult, NoLineResult, HasLineTableInfo, NoLineTableInfo };
