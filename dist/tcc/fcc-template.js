/**
 * @Author XIAO-LI-PIN
 * @Description (Override)擴展cc.Component
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */
class OverrideComponent extends cc.Component {
    constructor() {
        super();
        this.scheduleTag = new Array();
    }
    /**
     * 獲取當前使用中的計時器
     * @returns {Array<Function>}
     */
    getScheduleTag() {
        return this.scheduleTag;
    }
    /**
     * 獲取當前還尚未釋放的計時器數量
     * @returns {number}
     */
    getScheduleAmount() {
        return this.scheduleTag.length;
    }
    /**
     * 可選循環次數計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} interval - 間格時間
     * @param {number} repeat - 重複次數
     * @param {number} delay - 延遲時間
     */
    schedule(callback, interval, repeat, delay) {
        super.schedule(this.checkScheduleRepeat(callback, repeat), interval, repeat, delay);
        this.scheduleTag.push(callback);
    }
    /**
     * 確認當前計時器是否有使用重複次數
     * @protected
     */
    checkScheduleRepeat(callback, repeat) {
        if (repeat > 0) {
            callback.prototype = () => {
                repeat--;
                if (repeat < 0)
                    this.unschedule(callback);
                callback.apply(this);
            };
        }
        else {
            return callback;
        }
        return callback.prototype;
    }
    /**
     * 單次計時器,額外新增增加保存使用中的計時器方法,與原版cocos使用上並無差別
     * @param {Function} callback - 返回方法
     * @param {number} delay - 延遲時間
     */
    scheduleOnce(callback, delay) {
        callback.prototype = () => {
            this.unschedule(callback.prototype);
            callback.apply(this);
        };
        this.schedule(callback.prototype, 0, 0, delay);
    }
    /**
     * 清除單個計時器方法,額外新增刪除使用中的計時器紀錄,與原版cocos使用上並無差別
     * @param {Function} callback - 當初綁定的方法
     */
    unschedule(callback) {
        super.unschedule(this.checkScheduleTag(callback));
        let index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            this.scheduleTag.splice(index, 1);
        }
    }
    /**
     * 判斷當前方法是否正在等待計時器callback中
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {number} - 返回當前this.getScheduleTag[]執行中的index位置,如果該陣列內無該方法,返回-1
     * @protected
     */
    checkScheduleCallFunIndex(callback) {
        let index;
        if (this.getScheduleTag().indexOf(callback) != -1) {
            index = this.scheduleTag.indexOf(callback);
        }
        else if (this.getScheduleTag().indexOf(callback.prototype) != -1) {
            index = this.scheduleTag.indexOf(callback.prototype);
        }
        else {
            return -1;
        }
        return index;
    }
    /**
     * 確認當前該方法以甚麼形式執行的,原型鏈 or 基礎方法
     * @param {Function} callback - 原本綁定該計時器的方法
     * @returns {Function} - 返回當前this.getScheduleTag[]內的該方法,如果該陣列內無該方法,返回undefined
     * @protected
     */
    checkScheduleTag(callback) {
        let fun = undefined;
        let index = this.checkScheduleCallFunIndex(callback);
        if (index > -1) {
            fun = this.scheduleTag[index];
        }
        return fun;
    }
    /**
     * 清除當前所有使用中的計時器,額外新增清空計時器數量方法,與原版cocos使用上並無差別
     */
    unscheduleAllCallbacks() {
        super.unscheduleAllCallbacks();
        this.scheduleTag.length = 0;
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通用模板
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
class AGenericTemplate extends OverrideComponent {
    /**
     * 語系設置
     */
    languageSetting() { }
    ;
    onLoad() {
        this.onCreate();
    }
    start() {
        this.languageSetting();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲初始scene加載前,需優先執行
 * @Date 2021-06-01 下午 04:49
 * @Version 1.0
 */
class AConfigTemplate extends AGenericTemplate {
    onLoad() {
        this.configSetting(); //所有動作中需最先執行,遊戲初始設定
        this.responseDataModelSetting(); //遊戲初始接收module 創建
        this.processSetting(); //遊戲流程創建
        super.onLoad();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
class AutoStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.AUTO_CHANGE;
    }
    /**
     * 訂閱該事件
     * @param {AutoStateChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {AutoType} beforeAutoCount - 更改前的auto類型
     * @param {AutoType} afterAutoCount  - 更改後的auto類型
     */
    notify(isAutomaticState, beforeAutoCount, afterAutoCount) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.SCROLL_FOCUS_STATE;
    }
    /**
     * 訂閱該事件
     * @param {ScrollFocusStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    notify(index, isShow) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(index, isShow);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推播管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
class SpeedStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.SPEED_CHANGE;
    }
    /**
     * 訂閱該事件
     * @param {SpeedStateChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
     */
    notify(isSpeedUp) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isSpeedUp);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
class StopNowStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.SCENE_DIRECTION_CHANGE;
    }
    /**
     * 訂閱該事件
     * @param {StopNowStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推播即停狀態事件
     */
    notify() {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification();
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶金額變更時事件推播管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
class UserMoneyChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.USER_MONEY_CHANGE;
    }
    /**
     * 訂閱該事件
     * @param {UserMoneyChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    notify(money) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(money);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.USER_BET_CHANGE;
    }
    /**
     * 訂閱該事件
     * @param {UserTotalBetChangeObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推播用戶更換的押住倍率 index
     * @param {number} beforeIndex - user更動前的押住 index
     * @param {number} afterIndex - user 更動後的押住 index
     */
    notify(beforeIndex, afterIndex) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(beforeIndex, afterIndex);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
class UserWinPointStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.USER_GET_WIN;
    }
    /**
     * 訂閱該事件
     * @param {UserWinPointStateObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 當用戶有贏分時推播當前贏分分數
     * @param {number} winPoint - 當前贏分分數
     * @param {number} level - 當前贏分等級
     */
    notify(winPoint, level) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(winPoint, level);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : server 對該局遊戲回傳結果時
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
class ResponseResultNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super();
        this.TAG_NAME = fcc.type.NotificationType.RESPONSE_RESULT;
    }
    /**
     * 訂閱該事件
     * @param {ResponseResultObserver} observer - 推撥接收者
     * @param {boolean} isPermanent - 是否常駐監聽
     */
    subscribe(observer, isPermanent) {
        super.subscribe(observer, isPermanent);
    }
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} isResultOk - 初始化 or 回傳成功
     */
    notify(isResultOk) {
        if (this.observer.size > 0) {
            for (let observer of this.observer) {
                observer.pushNotification(isResultOk);
                if (!observer.isPermanent) {
                    this.unsubscribe(observer);
                }
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 05:08
 * @Version 1.0
 */
class AutoStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 發送自動狀態通知
     * @param {boolean} isAutomaticState - 更改後的狀態是否是自動狀態
     * @param {fcc.type.AutoType} beforeAutoCount - 更改前的auto類型
     * @param {fcc.type.AutoType} afterAutoCount  - 更改後的auto類型
     */
    pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount) {
        super.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 當出現需要瞇排事件,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
class ScrollFocusStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推送瞇排事件
     * @param {number} index - 需要操作哪個列(head = 0)
     * @param {boolean} isShow - 要顯示還關閉
     */
    pushNotification(index, isShow) {
        super.pushNotification(index, isShow);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 下午 12:00
 * @Version 1.0
 */
class SpeedStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推送當前加速狀態
     * @param {boolean} isSpeedUp - 要開啟加速,還是關閉加速
     */
    pushNotification(isSpeedUp) {
        super.pushNotification(isSpeedUp);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 即停狀態通知時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
class StopNowStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推播即停狀態事件
     */
    pushNotification() {
        super.pushNotification();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
class UserMoneyChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推播玩家籌碼更動時狀態
     * @param {number} money - 籌碼更動後的金額
     */
    pushNotification(money) {
        super.pushNotification(money);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 用戶更換的押住時,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:12
 * @Version 1.0
 */
class UserTotalBetChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推播用戶更換的押住倍率 index
     * @param {number} beforeIndex - user更動前的押住 index
     * @param {number} afterIndex - user 更動後的押住 index
     */
    pushNotification(beforeIndex, afterIndex) {
        super.pushNotification(beforeIndex, afterIndex);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 用戶贏分時事件推撥,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 04:40
 * @Version 1.0
 */
class UserWinPointStateObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 當用戶有贏分時推播當前贏分分數
     * @param {number} winPoint - 當前贏分分數
     * @param {number} level - 當前贏分等級
     */
    pushNotification(winPoint, level) {
        super.pushNotification(winPoint, level);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 當server回傳結果時,當有事件推送時,將會將該事件推播給綁定者
 * @Date 2021-06-09 下午 05:51
 * @Version 1.0
 */
class ResponseResultObserver extends fcc.ABS.ABaseObserver {
    constructor(callFun, self) {
        super(callFun, self);
    }
    /**
     * 推播該局Server是否已回傳答案
     * @param {boolean} isResultOk - 初始化 or 回傳成功
     */
    pushNotification(isResultOk) {
        super.pushNotification(isResultOk);
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
class AMainGameButtonTemplate extends AGenericTemplate {
    onLoad() {
        this.isShowTotalBetFrame = false; //當前是否開啟總押注視窗
        this.keyboardListener = false; //當前是否常壓空白建
        this.nowAutoType = fcc.configMgr.autoCount; //初始自動類型
        this.longTouchTime = 0.5; //默認長壓時間0.5秒
        this.nowSpeed = fcc.configMgr.isSpeedUp; //初始當前遊戲速度
        this.addNotification(); //添加玩家金額 /自動遊戲事件 監聽
        this.makeTotalBetButtonToListener(); //總押注視窗中按鈕監聽事件
        super.onLoad();
    }
    /**
     * 添加Notification接收事件
     * @private
     */
    addNotification() {
        /*自動按鈕推播事件綁定*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .subscribe(this.getAutoStateChangeObserver(), true);
        /*玩家金額更新推播事件*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE)
            .subscribe(this.getUserMoneyChangeObserver(), true);
    }
    /**
     * 觸控按壓時監聽
     * @private
     */
    startButtonOnTouchStart() {
        this.unschedule(this.longTouchTimer); //清除計時器事件
        //如果該遊戲正在自動模式,將先取消自動狀態
        if (this.isAutoState) {
            //推播auto事件
            this.autoNotify(false, this.nowAutoType);
            return;
        }
        this.scheduleOnce(this.longTouchTimer, this.longTouchTime);
    }
    /**
     * 長壓計時器事件,如果當前非auto狀態,將會開啟auto 並開始遊戲
     * @returns {Promise<void>}
     * @private
     */
    longTouchTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            //推播auto事件
            this.autoNotify(true, this.nowAutoType);
            yield this.startButtonEvent();
        });
    }
    /**
     * 推播auto事件
     * @param {boolean} isAutoState - 當前自動狀態
     * @param {AutoType} autoType - 當前 auto類型
     * @private
     */
    autoNotify(isAutoState, autoType) {
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .notify(isAutoState, autoType, autoType);
    }
    /**
     * start監聽抬起時狀態
     * 取消長壓計時器事件,並進入開始遊戲事件
     * @private
     */
    startButtonOnTouchEnd() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unschedule(this.longTouchTimer);
            yield this.startButtonEvent();
        });
    }
    /**
     * 鍵盤空白鍵壓下時監聽
     * @param event
     * @private
     */
    keyboardSpaceTouchStart(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (!this.keyboardListener) {
                    this.keyboardListener = true;
                    this.startButtonOnTouchStart();
                }
                break;
        }
    }
    /**
     * 鍵盤空白鍵抬起時監聽
     * @param event
     * @private
     */
    keyboardSpaceTouchEnd(event) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (event.keyCode) {
                case cc.macro.KEY.space:
                    yield this.startButtonOnTouchEnd();
                    this.keyboardListener = false;
                    break;
            }
        });
    }
    /**
     * 自動狀態監聽者
     * 如有需求可自行override or 獲取監聽對象做關閉操作
     * @returns {AutoStateChangeObserver}
     * @protected
     */
    getAutoStateChangeObserver() {
        if (!this._autoStateChangeObserver) {
            this._autoStateChangeObserver =
                new AutoStateChangeObserver((isAutomaticState, beforeAutoCount, afterAutoCount) => __awaiter(this, void 0, void 0, function* () {
                    this.nowAutoType = afterAutoCount;
                    this.isAutoState = isAutomaticState;
                    this.autoEvent(isAutomaticState, afterAutoCount);
                    if (isAutomaticState) {
                        yield this.startButtonEvent();
                    }
                }), this);
        }
        return this._autoStateChangeObserver;
    }
    /**
     * 更新玩家金額
     */
    getUserMoneyChangeObserver() {
        if (!this._userMoneyChangeObserver) {
            this._userMoneyChangeObserver =
                new UserMoneyChangeObserver(money => {
                    this.userMoney = money;
                }, this);
        }
        return this._userMoneyChangeObserver;
    }
    /**
     * 開始遊戲監聽事件
     * @returns {Promise<void>}
     * @protected
     */
    startButtonEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            do {
                //如果當下總押注視窗開啟中,更改為執行關閉總押注視窗
                if (this.isShowTotalBetFrame) {
                    this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                    this.totalBetFrameTouchEvent(false);
                    return;
                }
                //如果遊戲為執行中狀態,將可以即停操作
                if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY &&
                    fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) {
                    //推播即停事件
                    fcc.notificationMgr()
                        .getNotification(fcc.type.NotificationType.STOP_NOW)
                        .notify();
                    return;
                }
                //判斷當前是金額足夠
                let nowUserBetIndex = this.userBetPoint.LineBet;
                let userBet = this.tableInfo.LineTotalBet[nowUserBetIndex];
                //如果用戶金額不足的情況
                if (this.userMoney - userBet < 0) {
                    fcc.errorMgr.serverError(false, fcc.languageMgr.getText("S_9003"));
                    return;
                }
                this.startEvent();
                yield fcc.processMgr.play();
                this.endEvent();
            } while (this.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING);
        });
    }
    /**
     * 自動按鈕監聽事件
     * 如果當前押注視窗開啟中,將更換為關閉視窗方法
     * 正常情況,推播當前auto狀態事件
     * @private
     */
    autoButtonEventListener() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unschedule(this.longTouchTimer); //將長案事件失效
            //如果當前押注視窗開啟中,將更換為關閉視窗方法
            if (this.isShowTotalBetFrame) {
                this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
                this.totalBetFrameTouchEvent(false);
                return;
            }
            this.isAutoState = !this.isAutoState;
            this.autoNotify(this.isAutoState, this.nowAutoType);
        });
    }
    /**
     * 加速按鈕監聽事件
     * @protected
     */
    speedUpButtonEventListener() {
        this.nowSpeed = !this.nowSpeed;
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .notify(this.nowSpeed);
        this.speedUpEvent(this.nowSpeed);
    }
    /**
     * 打開或開關閉押注金額選擇框
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    totalBetFrameTouchEventListener() {
        //如果當前在遊戲中,將無法打開總押注視窗
        if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY) {
            this.warningEvent();
            return;
        }
        this.isShowTotalBetFrame = !this.isShowTotalBetFrame;
        this.totalBetFrameTouchEvent(this.isShowTotalBetFrame);
    }
    /**
     * menu按鈕監聽事件
     * 如果當前在遊戲中,將方法更改為顯示警告視窗
     * @protected
     */
    menuButtonEventListener() {
        if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY) {
            this.warningEvent();
            return;
        }
        this.menuEvent();
    }
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
class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(//開始按鈕監聽添加
        this.startButton, "startButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//自動按鈕監聽添加
        this.autoButton, "autoButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButton, "speedUpButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButton, "betSelectionButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButton, "menuButtonEventListener", this);
        super.onLoad();
    }
    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonOnEnable() {
        this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonDisable() {
        this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
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
class AMainGameDoubleButtonTemplate extends AMainGameButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(//自動按鈕監聽添加
        this.autoButtonH, "autoButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//自動按鈕監聽添加
        this.autoButtonV, "autoButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButtonH, "speedUpButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//加速按鈕監聽添加
        this.speedUpButtonV, "speedUpButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButtonH, "totalBetFrameTouchEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.betSelectionButtonV, "totalBetFrameTouchEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButtonH, "menuButtonEventListener", this);
        fcc.global.Button.addButtonEvent(//押注金額選擇按鈕監聽添加
        this.menuButtonV, "menuButtonEventListener", this);
        super.onLoad();
    }
    /**
     * 打開開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
    /**
     * 關閉開始遊戲事件監聽(開始遊戲按鈕與space鍵盤監聽)
     */
    startButtonDisable() {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this);
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,所有按鈕事件
 * ```
 *      事件:
 *          推撥 {AutoStateChangeNotification} : 訂閱自動狀態改變時
 *          推撥 {UserTotalBetChangeNotification} : 用戶更換的押住金額事件
 *          接收 {AutoStateChangeNotification} : 訂閱自動狀態改變時
 *              callback: this.autoEvent(beforeAutoCount, afterAutoCount);
 *          接收 {UserTotalBetChangeNotification} : 用戶更換的押住金額事件
 *              callback: this.totalBetChangeEvent(beforeIndex, afterIndex);
 *
 * ```
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 *
 */
class AMenuButtonTemplate extends AGenericTemplate {
    onLoad() {
        this.nowAutoType = fcc.configMgr.autoCount;
        this.addNotification(); //初始化綁定監聽接收事件
        super.onLoad();
    }
    /**
     * 加入訂閱綁定事件
     * @private
     */
    addNotification() {
        /*訂閱自動狀態改變時*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .subscribe(this.getAutoStateChangeObserver(), true);
        /*用戶更換的押住金額事件*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.USER_BET_CHANGE)
            .subscribe(this.getUserTotalBetChangeObserver(), true);
    }
    /**
     * 自動更新當前是否靜音背景音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    musicEventListener() {
        let isOnMute = fcc.audioMgr.updateMusicOnMute();
        this.musicEvent(isOnMute);
    }
    /**
     * 自動更新當前是否靜音效果音樂
     * 注意:update靜音狀態會依照config初始設定做更新
     * @protected
     */
    effectEventListener() {
        let isOnMute = fcc.audioMgr.updateEffectOnMute();
        this.effectEvent(isOnMute);
    }
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最大值,將會自動跳回最小值
     * @protected
     */
    betUpEventListener() {
        let afterBetIndex = this.nowBetIndex + 1;
        if (afterBetIndex > this.tableInfo.LineBet.length - 1) {
            afterBetIndex = 0;
        }
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.USER_BET_CHANGE)
            .notify(this.nowBetIndex, afterBetIndex);
    }
    /**
     * 用戶點擊按鈕增加押注點數事件
     * 注意:當用戶增加的押注點數超過最小值,將會自動跳回最大值
     * @protected
     */
    betDownEventListener() {
        let afterBetIndex = this.nowBetIndex - 1;
        if (afterBetIndex < 0) {
            afterBetIndex = this.tableInfo.LineBet.length - 1;
        }
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.USER_BET_CHANGE)
            .notify(this.nowBetIndex, afterBetIndex);
    }
    /**
     * 當前總押注事件推播接收者
     * 注意:如果要解除推播,將無法在監聽推波事件派發
     * @returns {UserTotalBetChangeObserver}
     * @protected
     */
    getUserTotalBetChangeObserver() {
        if (!this.userTotalBetChangeObserver) {
            this.userTotalBetChangeObserver = new UserTotalBetChangeObserver((beforeIndex, afterIndex) => {
                this.nowBetIndex = afterIndex;
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
    getAutoStateChangeObserver() {
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver((isAutomaticState, beforeAutoCount, afterAutoCount) => {
                this.nowAutoType = afterAutoCount;
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
    autoButtonEventListener(event, callbackType) {
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.AUTO_CHANGE)
            .notify(true, this.nowAutoType, callbackType);
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,主遊戲雙按鈕配置
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
class AMenuDoubleButtonTemplate extends AMenuButtonTemplate {
    onLoad() {
        /*背景音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.musicButtonH, "musicEventListener", this);
        fcc.global.Button
            .addButtonEvent(this.musicButtonV, "musicEventListener", this);
        /*效果音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.effectButtonH, "effectEventListener", this);
        fcc.global.Button
            .addButtonEvent(this.effectButtonV, "effectEventListener", this);
        /*押住籌碼提高按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.betUpButtonH, "betUpEventListener", this);
        fcc.global.Button
            .addButtonEvent(this.betUpButtonV, "betUpEventListener", this);
        /*押住籌碼降低按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.betDownButtonH, "betDownEventListener", this);
        fcc.global.Button
            .addButtonEvent(this.betDownButtonV, "betDownEventListener", this);
        /*自動50次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto50ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
        fcc.global.Button
            .addButtonEvent(this.auto50ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
        /*自動100次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto100ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
        fcc.global.Button
            .addButtonEvent(this.auto100ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
        /*自動500次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto500ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
        fcc.global.Button
            .addButtonEvent(this.auto500ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
        /*自動1000次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto1000ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
        fcc.global.Button
            .addButtonEvent(this.auto1000ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
        /*自動直到免費後停止按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.autoFreeEndButtonH, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
        fcc.global.Button
            .addButtonEvent(this.autoFreeEndButtonV, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
        /*自動按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.autoButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
        fcc.global.Button
            .addButtonEvent(this.autoButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
        /*返回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
        fcc.global.Button
            .addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);
        /*返回首頁事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this);
        fcc.global.Button
            .addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this);
        /*紀錄頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this);
        fcc.global.Button
            .addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this);
        /*設定頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this);
        fcc.global.Button
            .addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this);
        /*說明頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this);
        fcc.global.Button
            .addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this);
        super.onLoad();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description (抽象類)MENU主頁面,單一按鈕配置
 * @Example 單一方向遊戲
 * @Date 2021-05-26 上午 15:59
 * @Version 1.1
 */
class AMenuOnlyButtonTemplate extends AMenuButtonTemplate {
    onLoad() {
        /*背景音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.musicButton, "musicEventListener", this);
        /*效果音樂按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.effectButton, "effectEventListener", this);
        /*押住籌碼提高按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.betUpButton, "betUpEventListener", this);
        /*押住籌碼降低按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.betDownButton, "betDownEventListener", this);
        /*自動50次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto50Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
        /*自動100次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto100Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
        /*自動500次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto500Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
        /*自動1000次按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.auto1000Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
        /*自動直到免費後停止按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.autoFreeEndButton, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
        /*自動按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.autoButton, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
        /*返回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goBackButton, "goBackTouchEvent", this);
        /*返回首頁事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goHomeButton, "goHomeTouchEvent", this);
        /*紀錄頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.recordButton, "recordPageTouchEvent", this);
        /*設定頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.settingButton, "settingPageTouchEvent", this);
        /*說明頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.descriptionPageButton, "descriptionPageEvent", this);
        super.onLoad();
    }
}

/**
 * 更換頁面type
 */
var PageChangeType;
(function (PageChangeType) {
    PageChangeType["NEXT"] = "NEXT";
    PageChangeType["PREVIOUS"] = "PREVIOUS";
})(PageChangeType || (PageChangeType = {}));
/**
 * 日期type
 */
var DayType;
(function (DayType) {
    DayType["ONE_DAY"] = "ONE_DAY";
    DayType["FIVE_DAY"] = "FIVE_DAY";
    DayType["TEN_DAY"] = "TEN_DAY";
})(DayType || (DayType = {}));
/**
 * @Author 蕭立品
 * @Description 說明頁按鈕統一事件名稱命名
 * ```
 *      使用事件:
 *          fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT
 *          callback :  abstract gameHistoryResultEvent(gameHistoryData: GameHistoryData);
 * ```
 * @Date 2021-05-10 下午 02:20
 * @Version 1.0
 */
class ARecordButtonTemplate extends AGenericTemplate {
    onLoad() {
        this.isHistoryResultOK = false;
        this.gameHistoryResultEventListener();
        super.onLoad();
    }
    /**
     * 遊戲紀錄server回傳監聽
     */
    gameHistoryResultEventListener() {
        fcc.eventMgr.eventListener(fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT, (gameHistoryData) => {
            this.gameHistoryResultEvent(gameHistoryData);
            this.isHistoryResultOK = true;
        }, true);
    }
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
class ARecordDoubleButtonTemplate extends ARecordButtonTemplate {
    onLoad() {
        /*反回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
        fcc.global.Button
            .addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);
        /*查看一日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY);
        fcc.global.Button
            .addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY);
        /*查看五日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
        fcc.global.Button
            .addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY);
        /*查看十日內紀錄鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY);
        fcc.global.Button
            .addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY);
        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
        fcc.global.Button
            .addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
        fcc.global.Button
            .addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
        super.onLoad();
    }
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
class ARecordOnlyButtonTemplate extends ARecordButtonTemplate {
    onLoad() {
        /*反回上一頁按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.goBackButton, "goBackTouchEvent", this);
        /*查看一日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.oneDayRecordButton, "daysRecordTouchEventH", this, DayType.ONE_DAY);
        /*查看五日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.fiveDayRecordButton, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
        /*查看十日內紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.tenDayRecordButton, "daysRecordTouchEventH", this, DayType.TEN_DAY);
        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.nextRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
        /*前往下一頁紀錄按鈕事件綁定*/
        fcc.global.Button
            .addButtonEvent(this.previousRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
        super.onLoad();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 錯誤視窗模板
 * @Date 2021-07-07 下午 14:01
 * @Version 0.0.3
 */
class AErrorFrameTemplate extends AGenericTemplate {
    onLoad() {
        fcc.global.Button
            .addButtonEvent(this.errorButton, "errorButtonTouchEvent", this);
        super.onLoad();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description (模板)登入遊戲內進入主遊戲
 * @Date 2021-07-07 上午 10:55
 * @Version 0.0.3
 */
class ALoadingTemplate extends AGenericTemplate {
    onLoad() {
        this._canPlayGame = false; //由 Server TableInfo Event 改變狀態
        this.tableInfoEvent.apply(this); //TableInfo Event 事件
        ALoadingTemplate.updateUserIp(); //如果是正式上線,將自動更新拿取外部資源的IP
        super.onLoad();
    }
    start() {
        super.start();
        this.sceneStyle(); //當前scene模式,更新當前畫面是配寬高
        this.loadExternalScript(); //外部資源
        this.onLoadResources(); //載入資源方法
        this.loadAssetBundle(); //次資源
        this.updateProgressText(); //更新讀取條文字
    }
    /**
     * 如果為上線模式,將會獲取外部IP,自動更新遊戲配置Config內的URL
     */
    static updateUserIp() {
        if (!window.test) {
            let path = window.libraryPath && window.libraryPath != ""
                ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "")
                : "../..";
            // 打包與測試讀取不同路徑
            fcc.configMgr.setExternallyLoadURL(path);
        }
    }
    /**
     * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
     */
    tableInfoEvent() {
        fcc.eventMgr.eventListener(fcc.type.ServerEventType.TABLE_INFO, (tableInfo) => {
            for (let name of Object.keys(tableInfo)) {
                if (this.tableInfo[name] === undefined) {
                    try {
                        fcc.errorMgr.executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, `無 ${name} 參數,請更換 TableInfo Type`);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                else {
                    this.tableInfo[name] = tableInfo[name];
                }
            }
            console.log(`${fcc.type.ServerEventType.TABLE_INFO} : ${this.tableInfo}`);
            fcc.notificationMgr()
                .getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE)
                .notify(this.tableInfo.UserPoint);
            this._canPlayGame = true;
        }, true);
    }
    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    get canPlayGame() {
        return this._canPlayGame;
    }
}

/**
 * @Author XIAO-LI-PIN
 * @FIXME: 程式碼須修復
 * @Description 進度讀取diaLog模板
 * @Date 2021-05-11 下午 05:41
 * @Version 1.0
 */
class ALoadingFrameTemplate extends AGenericTemplate {
    onLoad() {
        this.loadingInitialize();
        super.onLoad();
    }
    /**
     * 初始化讀取條
     * @private
     */
    loadingInitialize() {
        this.loadingDialogNode.active = true; //打開組件
        this.loadingDialogNode.opacity = 255; //初使讀取條視窗透明度為0
        this.timer = null; //初始setInterval 計時器
        this.progressText.string = ""; //初始進度條"..."字串為空
        this.progressValue = 0; //初始進度條 = 0;
        this.timeOut = 50; //初始每跑一次的停留時間
        this.addProgressValue = 0.005; //初始每跑一次初始進度值
    }
    runProgress(resName) {
        this.loadingInitialize();
        return new Promise(resolve => {
            if (!this.checkHasRes(resName, resolve))
                return;
            this.progressTimer("", resName, resolve);
        });
    }
    progressTimer(progressText, resName, resolve) {
        this.timer = window.setInterval(() => {
            if (this.progressValue > 1) {
                this.progressValue = 0;
            }
            if (progressText.length > 3) {
                progressText = "";
            }
            this.progressText.string = progressText;
            this.progressBar.progress = this.progressValue;
            this.progressValue = this.progressValue + this.progressValue;
            progressText += ".";
            if (fcc.loadMgr.secondaryLoadState.get(resName) == 1) {
                if (this.progressValue >= 1) {
                    this.closeLoadingDiaLog(resolve);
                }
                if (this.addProgressValue != 0.1)
                    this.addProgressValue = 0.05;
            }
        }, this.timeOut);
    }
    closeLoadingDiaLog(resolve) {
        cc.tween(this.loadingDialogNode)
            .to(0.2, { opacity: 0 })
            .call(() => {
            this.loadingDialogNode.active = false;
            resolve();
        });
    }
    /**
     * 確認當下該資源是否正在加載
     * @param {string} resName
     * @param {(value: (PromiseLike<void> | void)) => void} resolve
     * @returns {boolean}
     * @private
     */
    checkHasRes(resName, resolve) {
        if (!fcc.loadMgr.secondaryLoadState.has(resName)) {
            fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, `${resName}該無該資源`);
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        if (fcc.loadMgr.secondaryLoadState.get(resName) == 1) {
            this.loadingDialogNode.active = false;
            resolve();
            return false;
        }
        return true;
    }
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
class ALookAtTemplate extends AGenericTemplate {
    onLoad() {
        this.addNotification(); //綁定推播接收事件
        super.onLoad();
    }
    /**
     * 添加推撥的接收事件
     */
    addNotification() {
        /*瞇排事件觸發時,推撥至此*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE)
            .subscribe(this.getScrollFocusStateObserver(), true);
    }
    /**
     * 瞇排事件訂閱者
     * @private
     */
    getScrollFocusStateObserver() {
        if (!this._scrollFocusStateObserver) {
            this._scrollFocusStateObserver = new ScrollFocusStateObserver((index, isShow) => {
                if (isShow) {
                    if (this.allLookAtEffect[index].node.active)
                        return;
                    this.showLookAtEffect(index);
                }
                else {
                    if (!this.allLookAtEffect[index].node.active)
                        return;
                    this.removeLookAtEffect(index);
                }
            }, this);
        }
        return this._scrollFocusStateObserver;
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 進入主遊戲時需初始的操作
 * @Date 2021-07-01 下午 20:24
 * @Version 0.0.3
 */
class AMainInitTemplate extends AGenericTemplate {
    onLoad() {
        this.setHistoryDetail(); //建立詳單頁面
        this.prefabInstantiate(); //實例化所有動態加載的prefab
        super.onLoad();
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description slot 模板
 * @NOTE 需事先綁定 StopNowStateNotification 和 SpeedStateChangeNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
class ASlotTemplate {
    constructor(styleData, configManager) {
        this.isSpeedUp = configManager.isSpeedUp; //初始當前是否為加速
        this.styleData = styleData; //拿取老虎機樣式資料
        this.speedRatio = this.isSpeedUp ? 1 : styleData.speedUpMultiple; //初始當前速率
        this.isResultOK = false; //初始server對該輪回傳的結果的狀態
        this.addNotification(); //添加監聽事件
    }
    /**
     * 添加推播事件
     */
    addNotification() {
        /*即停監聽*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.STOP_NOW)
            .subscribe(this.getStopNowStateObserver(), true);
        /*當前加速倍率監聽*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.SPEED_CHANGE)
            .subscribe(this.getSpeedStateChangeObserver(), true);
        /*當前server是否已經回傳結果*/
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
            .subscribe(this.getResponseResultObserver(), true);
    }
    /**
     * 即停監聽事件
     * @returns {StopNowStateObserver}
     * @private
     */
    getStopNowStateObserver() {
        if (!this.isSlotImmediateStop) {
            this.stopNowStateObserver = new StopNowStateObserver(() => {
                this.isSlotImmediateStop = true;
            }, this);
        }
        return this.stopNowStateObserver;
    }
    /**
     * 加速按鈕監聽事件
     * @private
     */
    getSpeedStateChangeObserver() {
        if (!this.speedStateChangeObserver) {
            this.speedStateChangeObserver = new SpeedStateChangeObserver((isSpeedUp) => {
                isSpeedUp ? this.speedRatio = this.styleData.speedUpMultiple : this.speedRatio = 1;
            }, this);
        }
        return this.speedStateChangeObserver;
    }
    /**
     * Server是否回傳答案事件
     * @return {ResponseResultObserver}
     * @private
     */
    getResponseResultObserver() {
        if (!this.responseResultObserver) {
            this.responseResultObserver = new ResponseResultObserver((isResultOk) => {
                this.isResultOK = isResultOk;
            }, this);
        }
        return this.responseResultObserver;
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般版老虎機
 *  ```
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
class NoLineSlotTemplate extends ASlotTemplate {
    constructor(styleData, configManager) {
        super(styleData, configManager);
        if (!styleData)
            return;
        this.styleData = styleData; //拿取設定檔
        this.slotTurnCount = styleData.slotTurnCount; //拿取一般停止最少轉動次數
        this.slotGirdSpeed = styleData.slotGirdSpeed; //拿取遊戲每格格子間的速度
        this.slotRowGridCount = styleData.slotRowGridCount; //拿取遊戲每列的格子數量
        this.slotGridHeight = styleData.slotGridHeight; //拿取老虎機格子高度
        this.speedUpMultiple = styleData.speedUpMultiple; //拿取加速倍率
        this.slotColumnToTween = styleData.slotColumnToTween; //拿取執行老虎機動畫的列
        this.gridNodeToMap = styleData.gridNodeToMap; //拿取跑遊戲更換位置的grid 節點
        this.gridSpriteToMap = styleData.gridSpriteToMap; //拿取跑遊戲更換答案的grid Node
        this.gridImg = styleData.gridImg; //拿取Slot格子的所有圖案
        this.normalResult = styleData.normalResult; //拿取一般獲獎 model
        this.freeResult = styleData.freeResult; //拿取免費獲獎 model
        this.rowData = new Array(); //初始化Slot每列的資料
        this.isSlotEnd = []; //遊戲每列是否已經結束
        this.rowData.push(this.slotRowGridCount, this.getCalculateSlotHeight()); //rowData [每列的格子數量,slot高度];
        this.initializeState(); //初始化該輪所有狀態
    }
    /**
     * 計算當前格子高度
     * @private
     */
    getCalculateSlotHeight() {
        return this.slotRowGridCount * this.slotGridHeight;
    }
    /**
     * 轉動前動畫,先往上,在往下1/2格
     * @return {Promise<void>}
     */
    sineInSlot() {
        //計算往上的高度
        let sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise((resolve) => {
            let index = 0;
            for (let columnNode of this.slotColumnToTween) {
                //開始執行動畫
                cc.tween(columnNode)
                    .to((this.slotGirdSpeed * 1.5), { y: columnNode.y + sineInHeight }, { easing: 'quadOut' })
                    .by(this.slotGirdSpeed, { y: -sineInHeight })
                    .call(() => {
                    index++;
                    if (index === this.slotColumnToTween.length) {
                        resolve();
                    }
                })
                    .start();
            }
        });
    }
    /**
     * Loop 老虎機方法
     * @return {Promise<void>}
     */
    runSlotAnimation() {
        return new Promise((resolve) => {
            //拿取該slot有幾列
            let columnLength = this.slotColumnToTween.length;
            //播放slot轉動音校
            fcc.audioMgr.effectPlay("SlotTrun");
            for (let i = 0; i < columnLength; i++) {
                //如果當前為最後一列,將異步阻塞傳出去
                if (i == columnLength - 1) {
                    this.executeSlotAnimation(i, resolve);
                    return;
                }
                this.executeSlotAnimation(i);
            }
        });
    }
    /**
     * 開始執行格子輪播動畫
     * 如果server未回傳正確答案,將持續隨機圖片無限跑
     * @param index{number} 當前跑的是哪一列
     * @param resolve 當跑完時回傳Promise 讓Api執行下一段方法
     * @param numberOfTimes 監聽當前跑了幾輪,sever回傳答案後才開始計算圈數
     */
    executeSlotAnimation(index, resolve, numberOfTimes = 0) {
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio;
        let node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, { y: node.y - this.rowData[1] })
            .call(() => {
            //如果該列不是第一列,且有瞇排事件,當他的上一輪轉完,推撥打開瞇排的事件
            if (index != 0 && this.checkLookAt(index) && this.isSlotEnd[index - 1]) {
                this.notifyLookAtEvent(true, index);
            }
            //更新被Mask的Grid,將之移動到原位子
            this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
            //如果server有回傳答案,將可進入停軸判斷
            if (this.isResultOK) {
                // 假如當前需要即停,將直接停止slot
                if (this.isCanStop(index, resolve))
                    return;
                numberOfTimes++;
                if (index == 0 && numberOfTimes == this.getSlotTurnCount(index)) {
                    //如果當前是第一列,將判斷是否已達到需轉動的次數
                    this.showAnswer(index);
                    this.isSlotEnd[index] = true;
                }
                else if (index != 0 &&
                    this.isSlotEnd[index - 1] &&
                    numberOfTimes == this.getSlotTurnCount(index)) {
                    //如果當前不是第一列,且上一列已經停止時,將判斷該列是否已達到需轉動的次數
                    this.showAnswer(index, resolve);
                    this.isSlotEnd[index] = true;
                    //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排事件
                    if (this.checkLookAt(index)) {
                        this.notifyLookAtEvent(false, index);
                    }
                    fcc.audioMgr.effectPlay("SlotStop");
                }
                else {
                    //無達成上述條件,持續轉動
                    this.executeSlotAnimation(index, resolve, numberOfTimes);
                }
            }
            else {
                //server還沒回傳答案,持續轉動
                this.executeSlotAnimation(index, resolve, numberOfTimes);
            }
        })
            .start();
    }
    /**
     * 拿取該要跑的次數
     * @param index - 哪一列
     * @return {number} - 該列要Loop的數字
     * @private
     */
    getSlotTurnCount(index) {
        let count;
        if (this.isSpeedUp) {
            //如果是加速狀態,全軸一起停止
            count = this.slotTurnCount;
        }
        else if (this.checkLookAt(index)) {
            //如果有瞇排事件,增加該軸的轉動次數
            count = index * 4 + this.slotTurnCount;
        }
        else {
            //如果是一般狀態,每列都多一輪的轉動時間
            count = this.slotTurnCount + index;
        }
        return count;
    }
    /**
     * 推送瞇排事件
     * @param {boolean} isShow - 是否要打開該列的瞇排特效
     * @param {number} index - 第幾列
     */
    notifyLookAtEvent(isShow, index) {
        fcc.notificationMgr()
            .getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE)
            .notify(index, isShow);
    }
    /**
     * 檢查是否可以即停
     * @param {number} index - 當前第幾列觸發即停事件
     * @param {() => void} resolve - 異步阻塞
     * @return {boolean}
     */
    isCanStop(index, resolve) {
        //如果即停事件觸發
        if (this.isSlotImmediateStop) {
            if (index == this.slotColumnToTween.length - 1) {
                //最後一輪才將異步阻塞傳出去
                this.showAnswer(index, resolve);
            }
            else {
                //其他輪只傳index
                this.showAnswer(index);
            }
            //將該軸狀態更新為結束
            this.isSlotEnd[index] = true;
            //如果有瞇排事件,關閉瞇排事件
            if (this.checkLookAt(index)) {
                this.notifyLookAtEvent(false, index);
            }
            return true;
        }
        return false;
    }
    /**
     * 更新輪播格子位置
     * @param rowNodes - 哪一列的 node 需要更換圖片位置
     * @param columnIndex - 當前是第幾列
     */
    updateGridPositionAndRandomImg(rowNodes, columnIndex) {
        //獲取該列物件長度
        let rowLength = rowNodes.length - 1;
        //隨機數字
        let random;
        //最後一個sprite
        let lastSprite;
        for (let i = 0; i < this.rowData[0]; i++) {
            //獲取該列最後一個sprite
            lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength];
            //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置
            this.gridSpriteToMap.get(columnIndex).unshift(lastSprite);
            //刪除陣列中的最後一個 sprite 節點
            this.gridSpriteToMap.get(columnIndex).pop();
            //隨機一個數字
            random = Math.floor(Math.random() * this.gridImg.size);
            this.gridSpriteToMap.get(columnIndex)[0].spriteFrame =
                this.gridImg.get(String(random));
            //重新給予最後一個陣列中的node 更新 y 位置
            rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight;
            //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置
            rowNodes.unshift(rowNodes[rowLength]);
            //刪除陣列中的最後一個 node 節點
            rowNodes.pop();
        }
    }
    /**
     * 對該列正確結果顯示在頂部,透過動畫,並將結果顯示給user
     * @param {number} index : 哪一列
     * @param resolve
     */
    showAnswer(index, resolve) {
        //更新正確答案 答案更新再每列最上面位置
        this.updateGridAnswer(index);
        //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
        let duration = this.slotGirdSpeed * this.rowData[0] / this.speedRatio;
        let node = this.slotColumnToTween[index];
        //跑老虎機的每列
        cc.tween(node)
            .to(duration, { y: node.y - this.rowData[1] })
            .call(() => {
            //更新被Mask的Grid,將之移動到原位子
            this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index);
            //給予彈跳動畫
            this.sineOutAnimation(index, resolve);
        })
            .start();
    }
    /**
     * 檢查是否需要瞇牌
     * @param index{number}:檢查該列是否需要瞇牌
     * @return {boolean} : 如果需要瞇牌,返回true
     * @private
     */
    checkLookAt(index) {
        let lookAt;
        let isShowLookAt;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
            lookAt = this.freeResult.LookAt;
        }
        else {
            lookAt = this.normalResult.LookAt;
        }
        isShowLookAt = !!lookAt[index];
        return isShowLookAt;
    }
    /**
     * 在答案顯示後,馬上給予回彈效果
     * @param index{number} : 哪一列已經顯示答案完畢
     * @param resolve{()=>void} : 當所有列都顯示答案且回彈效果完畢時,通知可以進行下一步
     */
    sineOutAnimation(index, resolve) {
        if ((this.isSpeedUp || this.isSlotImmediateStop) &&
            index == this.slotColumnToTween.length - 1) {
            //如果當前是瞇排或是即停狀態,將只對最後一軸結束時才播放停軸音效
            fcc.audioMgr.effectPlay("SlotStop");
        }
        else {
            //各軸停止皆有音效
            fcc.audioMgr.effectPlay("SlotStop");
        }
        //獲取該Slot格子高度的一半
        let sineOutHeight = Math.floor(this.styleData.slotGridHeight / 2);
        let node = this.slotColumnToTween[index];
        cc.tween(node)
            .to((this.slotGirdSpeed), { y: node.y - sineOutHeight })
            .by(this.slotGirdSpeed * 6, { y: +sineOutHeight }, { easing: 'bounceOut' })
            .call(() => {
            this.checkFreeIcon(index);
            if (index === this.slotColumnToTween.length - 1) {
                fcc.audioMgr.effectStop("SlotTrun");
                resolve();
            }
        })
            .start();
    }
    /**
     * 確認當前答案是否有Free圖標,如果有將播放該數量的音效
     * @param index
     */
    checkFreeIcon(index) {
        let gridAnswer;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
            gridAnswer = this.freeResult.Grid;
        }
        else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        for (start; start < end; start++) {
            if (gridAnswer[start] == 10) {
                this.freeIconCount++;
                //如果非加速模式,對個別列疊播放數量增加時的音樂
                if (!this.isSpeedUp || !this.isSlotImmediateStop) {
                    fcc.audioMgr.effectPlay(`getFreeIcon${this.freeIconCount}`);
                }
            }
        }
        //如果是加速模式,直接拿取該slot中Free總數量需播放的音樂
        if (this.isSpeedUp && this.freeIconCount >= 1
            && index == this.slotColumnToTween.length - 1) {
            fcc.audioMgr.effectPlay(`getFreeIcon${this.freeIconCount}`);
        }
    }
    /**
     * 更新正確答案
     * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
     * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
     * @private
     */
    updateGridAnswer(index) {
        let gridAnswer;
        if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
            gridAnswer = this.freeResult.Grid;
        }
        else {
            gridAnswer = this.normalResult.Grid;
        }
        let start = index * this.slotRowGridCount;
        let end = start + this.slotRowGridCount;
        let gridIndex = 0;
        for (start; start < end; start++) {
            let answer = String(gridAnswer[start]);
            this.gridSpriteToMap
                .get(index)[gridIndex]
                .spriteFrame = this.gridImg.get(answer);
            gridIndex++;
        }
    }
    /**
     * 初始化該輪所有狀態
     */
    initializeState() {
        this.isSlotImmediateStop = false;
        this.isSpeedUp = this.speedRatio > 1;
        this.freeIconCount = 0;
        if (!this.isSlotEnd) {
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd.push(false);
            }
        }
        else {
            for (let i = 0; i < this.slotColumnToTween.length; i++) {
                this.isSlotEnd[i] = false;
            }
        }
    }
}

/**
 * @Author XIAO-LI-PIN
 * @Description 各種類型資源
 * @NOTE: 需事前綁定 ResponseResultNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
class ASlotInitializeTemplate extends AGenericTemplate {
    onLoad() {
        this.slotInitialize(); //初始化slot
        this.slotStyleSetting(); //設定 slot 樣式,並綁定
        this.normalResultResponse(); //添加一般答案回傳監聽
        this.freeResultEvenResponse(); //添加免費答案回傳監聽
        super.onLoad();
    }
    /**
     * server 回傳normalResult答案時的事件接收器
     */
    normalResultResponse() {
        fcc.eventMgr.eventListener(fcc.type.ServerEventType.BET_RESULT, (betResult) => {
            for (let name of Object.keys(betResult)) {
                if (this.normalResult[name] === undefined) {
                    try {
                        fcc.errorMgr
                            .executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                else {
                    this.normalResult[name] = betResult[name];
                }
            }
            console.log(`${fcc.type.ServerEventType.BET_RESULT} : ${this.normalResult}`);
            fcc.notificationMgr()
                .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
                .notify(true);
        }, true);
    }
    /**
     * server 回傳freeResult答案時的事件接收器
     * @private
     */
    freeResultEvenResponse() {
        fcc.eventMgr.eventListener(fcc.type.ServerEventType.FREE_SPIN_RESULT, (freeResult) => {
            for (let name of Object.keys(freeResult)) {
                if (this.freeResult[name] === undefined) {
                    try {
                        fcc.errorMgr
                            .executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`);
                    }
                    catch (e) {
                        console.log(e);
                    }
                }
                else {
                    this.freeResult[name] = freeResult[name];
                }
            }
            console.log(`${fcc.type.ServerEventType.BET_RESULT} : ${this.normalResult}`);
            fcc.notificationMgr()
                .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
                .notify(true);
        }, true);
    }
}

/**
 * @Author 蕭立品
 * @Description 打包入口
 * @Date 2021-07-06 下午 01:55
 * @Version 0.03
 */
const VERSION = "0.03"; //版本號
/*遊戲 SERVER TABLE INFO MODEL*/
/*遊戲 SERVER NORMAL MODEL*/
/*遊戲 SERVER FREE MODEL*/
/*當前版本號*/
globalThis.TCC_VERSION = VERSION;

export { AConfigTemplate, AErrorFrameTemplate, AGenericTemplate, ALoadingFrameTemplate, ALoadingTemplate, ALookAtTemplate, AMainGameButtonTemplate, AMainGameDoubleButtonTemplate, AMainGameOnlyButtonTemplate, AMainInitTemplate, AMenuButtonTemplate, AMenuDoubleButtonTemplate, AMenuOnlyButtonTemplate, ARecordButtonTemplate, ARecordDoubleButtonTemplate, ARecordOnlyButtonTemplate, ASlotInitializeTemplate, ASlotTemplate, AutoStateChangeNotification, AutoStateChangeObserver, NoLineSlotTemplate, OverrideComponent, ResponseResultNotification, ResponseResultObserver, ScrollFocusStateNotification, ScrollFocusStateObserver, SpeedStateChangeNotification, SpeedStateChangeObserver, StopNowStateNotification, StopNowStateObserver, UserMoneyChangeNotification, UserMoneyChangeObserver, UserTotalBetChangeNotification, UserTotalBetChangeObserver, UserWinPointStateNotification, UserWinPointStateObserver };
