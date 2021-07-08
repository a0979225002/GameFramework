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
    /**
     * 一律使用onCreate() 代替  onLoad()
     * @protected
     */
    protected onLoad(): void;
    protected start(): void;
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
    private constructor();
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
    constructor(callFun: (isResultOk: boolean) => void, self: any);
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} isResultOk - 初始化 or 回傳成功
     */
    pushNotification(isResultOk: boolean): void;
}
/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : server 對該局遊戲回傳結果時
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
declare class ResponseResultNotification extends fcc.ABS.ABaseNotification {
    /**
     * NotificationManager 用來獲取這個class的標籤
     * @type {string}
     */
    readonly TAG_NAME: string;
    private constructor();
    /**
     * 訂閱該事件
     * @param {ResponseResultObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer: ResponseResultObserver, isPermanent: boolean): void;
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} isResultOk - 初始化 or 回傳成功
     */
    notify(isResultOk: boolean): void;
}
interface ITableInfoModel {
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
}
interface IUserBetPoint {
    LineBet: number;
}
/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)遊戲主頁面按鈕事件
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
     * 當前lineBet
     * @type {ITableInfoModel}
     * @protected
     */
    protected abstract userBetPoint: IUserBetPoint;
    /**
     * server 回傳 tableInfo model
     * @type {ITableInfoModel}
     * @protected
     */
    protected abstract tableInfo: ITableInfoModel;
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
     * @type {ITableInfoModel}
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
    private _userMoneyChangeObserver;
    protected onLoad(): void;
    protected start(): void;
    /**
     * 初始自訂狀態
     * 注意:盡量不要使用cocos 內的onLoad();此方法包含在其中
     * @protected
     */
    protected abstract onCreate(): any;
    /**
     * 如果有需要更換字體樣式與語系,請在這裡使用
     * @protected
     */
    protected abstract languageSetting(): any;
    /**
     * 打開開始遊戲事件監聽
     */
    abstract startButtonOnEnable(): any;
    /**
     * 關閉開始遊戲事件監聽
     */
    abstract startButtonDisable(): any;
    /**
     * 點擊 (打開或關閉) 總押注視窗按鈕
     * @param {boolean} isShowTotalBetFrame : 打開或關閉
     * @protected
     */
    protected abstract totalBetFrameTouchEvent(isShowTotalBetFrame: boolean): any;
    /**
     * 自行添加押注視窗內所有押注按鈕監聽
     * @protected
     */
    protected abstract makeTotalBetButtonToListener(): any;
    /**
     * 當下是否(開啟或關閉)加速狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isSpeedUp : 開啟或關閉
     * @protected
     */
    protected abstract speedUpEvent(isSpeedUp: boolean): any;
    /**
     * 當下是否(開啟或關閉)自動狀態事件
     * 此方法已經綁定推播事件
     * @param {boolean} isAutomaticState :
     * @param {AutoType} autoType
     * @protected
     */
    protected abstract autoEvent(isAutomaticState: boolean, autoType: fcc.type.AutoType): any;
    /**
     * 遊戲開始執行流程前事件
     * @protected
     */
    protected abstract startEvent(): any;
    /**
     * 遊戲開始執行流程完成後事件
     * @protected
     */
    protected abstract endEvent(): any;
    /**
     * 打開遊戲菜單
     * @protected
     */
    protected abstract menuEvent(): any;
    /**
     * 警告事件
     * @protected
     */
    protected abstract warningEvent(): any;
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
    private longTouchTimer;
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
    protected autoButtonEventListener(): Promise<void>;
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
 * @Date 2021-07-06 下午 16:24
 * @Version 1.1
 */
declare abstract class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {
    /**
     * 開始遊戲按鈕
     * @type {cc.Button}
     */
    abstract startButton: cc.Button;
    /**
     * 自動按鈕
     * @type {cc.Button}
     */
    abstract autoButton: cc.Button;
    /**
     * 加速按鈕
     * @type {cc.Button}
     */
    abstract speedUpButton: cc.Button;
    /**
     * 押注金額選擇按鈕
     * @type {cc.Button}
     */
    abstract betSelectionButton: cc.Button;
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
    /**
     * 自訂義初始動作
     */
    protected abstract onCreate(): any;
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
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-06 下午 01:55
 * @Version 1.0
 */
export { AGenericTemplate, OverrideComponent, AutoStateChangeNotification, ScrollFocusStateNotification, SpeedStateChangeNotification, StopNowStateNotification, UserMoneyChangeNotification, UserTotalBetChangeNotification, UserWinPointStateNotification, ResponseResultNotification, AutoStateChangeObserver, ScrollFocusStateObserver, SpeedStateChangeObserver, StopNowStateObserver, UserMoneyChangeObserver, UserTotalBetChangeObserver, UserWinPointStateObserver, ResponseResultObserver, AMainGameButtonTemplate, AMainGameOnlyButtonTemplate, AMainGameDoubleButtonTemplate };
