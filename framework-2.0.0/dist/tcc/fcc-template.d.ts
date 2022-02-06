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
declare class BaseComponent extends cc.Component {
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
declare abstract class AGenericTemplate extends BaseComponent {
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
    /**
     * 初始UI物件
     * @protected
     */
    protected initialUIView(): void;
    /**
     * 初始推播監聽
     * @protected
     */
    protected initialNotification(): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
declare abstract class AFrameworkCenterTemplate extends AGenericTemplate {
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
     * notification 此遊戲會用到的 所有通知事件添加
     * @protected
     */
    protected abstract notificationSetting(): void;
    /**
     * 當前scene模式,更新當前畫面是配寬高
     */
    protected abstract sceneStyle(): void;
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
    protected onLoad(): void;
    /**
     * 確認當前user分數是否可以玩下輪遊戲
     * @return {boolean}
     * @protected
     */
    protected abstract checkUserPointCanPlayGame(): boolean;
    /**
     * 打開 game spin 按鈕監聽事件
     */
    abstract startButtonOnEnable(): void;
    /**
     * 關閉 game spin 按鈕監聽事件
     */
    abstract startButtonDisable(): void;
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
     * 開始遊戲監聽事件
     * @returns {Promise<void>}
     * @protected
     */
    protected abstract startButtonEvent(): Promise<void>;
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
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected abstract totalBetFrameTouchEventListener(): void;
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
     * menu按鈕監聽事件
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    protected menuButtonEventListener(): void;
}
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
declare abstract class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {
    /**
     * 開始遊戲按鈕
     * @type {cc.Button}
     */
    abstract startGameButton: cc.Button;
    /**
     * 自動按鈕
     * @type {cc.Button}
     */
    abstract autoButton: cc.Button;
    /**
     * 加速按鈕
     * @type {cc.Button}
     */
    abstract speedButton: cc.Button;
    /**
     * 押注金額選擇按鈕
     * @type {cc.Button}
     */
    abstract totalBetButton: cc.Button;
    /**
     * 設定頁按鈕
     * @type {cc.Button}
     * @protected
     */
    abstract menuButton: cc.Button;
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
     * 當前遊戲的可押住的總數量
     * @protected
     */
    protected abstract lineBet: Array<string | number>;
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
    protected allGridPosition: Array<cc.Vec2>;
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
     * 贏分線條,Sprite組件
     * @protected
     */
    protected abstract lineSprite: cc.Sprite;
    /**
     * 贏分粒子,Prefab組件
     * @type {cc.Prefab}
     * @protected
     */
    protected abstract particlePrefab: cc.Prefab;
    /**
     * slot列寬
     * @type {number}
     * @protected
     */
    protected abstract gridRowWidth: number;
    /**
     * slot列數量
     * @type {number}
     * @protected
     */
    protected abstract gridColumnCount: number;
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
     * @return {cc.Node} - 返回建構的容器
     * @protected
     */
    protected buildWinLineContainer(): cc.Node;
    /**
     * 建構該局贏線的Node容器
     * @return {cc.Node} - 返回建構的容器
     * @protected
     */
    protected buildParticleContainer(): cc.Node;
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
     */
    protected abstract initWinLinPosition(): Array<cc.Vec2>;
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
     * 實例化所有動態加載的prefab
     */
    protected abstract prefabInstantiate(): any;
}
/**
 * 框架Module化
 */
export { fcc, AGenericTemplate, BaseComponent, AFrameworkCenterTemplate, AutoStateChangeNotification, ScrollFocusStateNotification, SpeedStateChangeNotification, StopNowStateNotification, UserMoneyChangeNotification, UserTotalBetChangeNotification, UserWinPointStateNotification, ResponseResultNotification, SlotRowEndNotification, AutoStateChangeObserver, ScrollFocusStateObserver, SpeedStateChangeObserver, StopNowStateObserver, UserMoneyChangeObserver, UserTotalBetChangeObserver, UserWinPointStateObserver, ResponseResultObserver, SlotRowEndObserver, AMainGameButtonTemplate, AMainGameOnlyButtonTemplate, AMenuButtonTemplate, AMenuOnlyButtonTemplate, ARecordButtonTemplate, ARecordOnlyButtonTemplate, AErrorFrameTemplate, ALoadingTemplate, AWinLinTemplate, AMainInitTemplate };
