'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * @Author XIAO-LI-PIN
 * @Description (Override)擴展cc.Component
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */
class OverrideComponent extends cc.Component {
  /**
   * 保存當前使用中的計時器方法,如果該計時器執行完,會自動清空該方法
   * @type {Array<Function>}
   * @private
   */
  constructor() {
    super();

    _defineProperty(this, "scheduleTag", void 0);

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
        if (repeat < 0) this.unschedule(callback);
        callback.apply(this);
      };
    } else {
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
    var index = this.checkScheduleCallFunIndex(callback);

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
    var index;

    if (this.getScheduleTag().indexOf(callback) != -1) {
      index = this.scheduleTag.indexOf(callback);
    } else if (this.getScheduleTag().indexOf(callback.prototype) != -1) {
      index = this.scheduleTag.indexOf(callback.prototype);
    } else {
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
    var fun = undefined;
    var index = this.checkScheduleCallFunIndex(callback);

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
  languageSetting() {}

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

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 自動狀態改變時事件推播管理器
 * @Date 2021-05-20 下午 05:05
 * @Version 1.0
 */
class AutoStateChangeNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 瞇牌時的狀態事件推播管理
 * @Date 2021-05-21 下午 12:08
 * @Version 1.0
 */
class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$1(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(index, isShow);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 :當前遊戲速度狀態改變時事件推播管理器
 * @Date 2021-05-21 上午 11:56
 * @Version 1.0
 */
class SpeedStateChangeNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$2(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(isSpeedUp);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 即停事件推播管理器
 * @Date 2021-05-21 上午 11:59
 * @Version 1.0
 */
class StopNowStateNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$3(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification();

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶金額變更時事件推播管理器
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
class UserMoneyChangeNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$4(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(money);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶更換的押住金額事件推播管理器
 * @Date 2021-05-20 下午 04:11
 * @Version 1.0
 */
class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$5(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(beforeIndex, afterIndex);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : 用戶贏分時事件推播管理器
 * @Date 2021-05-20 下午 04:38
 * @Version 1.0
 */
class UserWinPointStateNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$6(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(winPoint, level);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

}

function _createForOfIteratorHelper$7(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }

function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * @Author XIAO-LI-PIN
 * @Description 通知管理器 : server 對該局遊戲回傳結果時
 * @Date 2021-06-09 下午 05:48
 * @Version 1.0
 */
class ResponseResultNotification extends fcc.ABS.ABaseNotification {
  /**
   * NotificationManager 用來獲取這個class的標籤
   * @type {string}
   */
  constructor() {
    super();

    _defineProperty(this, "TAG_NAME", void 0);

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
      var _iterator = _createForOfIteratorHelper$7(this.observer),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.pushNotification(isResultOk);

          if (!observer.isPermanent) {
            this.unsubscribe(observer);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var Op = Object.prototype;
var hasOwn = Op.hasOwnProperty;
var undefined$1; // More compressible than void 0.

var $Symbol = typeof Symbol === "function" ? Symbol : {};
var iteratorSymbol = $Symbol.iterator || "@@iterator";
var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

function wrap(innerFn, outerFn, self, tryLocsList) {
  // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
  var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
  var generator = Object.create(protoGenerator.prototype);
  var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
  // .throw, and .return methods.

  generator._invoke = makeInvokeMethod(innerFn, self, context);
  return generator;
} // Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.


function tryCatch(fn, obj, arg) {
  try {
    return {
      type: "normal",
      arg: fn.call(obj, arg)
    };
  } catch (err) {
    return {
      type: "throw",
      arg: err
    };
  }
}

var GenStateSuspendedStart = "suspendedStart";
var GenStateSuspendedYield = "suspendedYield";
var GenStateExecuting = "executing";
var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
// breaking out of the dispatch switch statement.

var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.

function Generator() {}

function GeneratorFunction() {}

function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.


var IteratorPrototype = {};

IteratorPrototype[iteratorSymbol] = function () {
  return this;
};

var getProto = Object.getPrototypeOf;
var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
  // This environment has a native %IteratorPrototype%; use it instead
  // of the polyfill.
  IteratorPrototype = NativeIteratorPrototype;
}

var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
GeneratorFunctionPrototype.constructor = GeneratorFunction;
GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.

function defineIteratorMethods(prototype) {
  ["next", "throw", "return"].forEach(function (method) {
    prototype[method] = function (arg) {
      return this._invoke(method, arg);
    };
  });
}

function isGeneratorFunction(genFun) {
  var ctor = typeof genFun === "function" && genFun.constructor;
  return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
  // do is to check its .name property.
  (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
}

function mark(genFun) {
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
  } else {
    genFun.__proto__ = GeneratorFunctionPrototype;

    if (!(toStringTagSymbol in genFun)) {
      genFun[toStringTagSymbol] = "GeneratorFunction";
    }
  }

  genFun.prototype = Object.create(Gp);
  return genFun;
}
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.

function awrap(arg) {
  return {
    __await: arg
  };
}

function AsyncIterator(generator, PromiseImpl) {
  function invoke(method, arg, resolve, reject) {
    var record = tryCatch(generator[method], generator, arg);

    if (record.type === "throw") {
      reject(record.arg);
    } else {
      var result = record.arg;
      var value = result.value;

      if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
        return PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        });
      }

      return PromiseImpl.resolve(value).then(function (unwrapped) {
        // When a yielded Promise is resolved, its final value becomes
        // the .value of the Promise<{value,done}> result for the
        // current iteration.
        result.value = unwrapped;
        resolve(result);
      }, function (error) {
        // If a rejected Promise was yielded, throw the rejection back
        // into the async generator function so it can be handled there.
        return invoke("throw", error, resolve, reject);
      });
    }
  }

  var previousPromise;

  function enqueue(method, arg) {
    function callInvokeWithMethodAndArg() {
      return new PromiseImpl(function (resolve, reject) {
        invoke(method, arg, resolve, reject);
      });
    }

    return previousPromise = // If enqueue has been called before, then we want to wait until
    // all previous Promises have been resolved before calling invoke,
    // so that results are always delivered in the correct order. If
    // enqueue has not been called before, then it is important to
    // call invoke immediately, without waiting on a callback to fire,
    // so that the async generator function has the opportunity to do
    // any necessary setup in a predictable way. This predictability
    // is why the Promise constructor synchronously invokes its
    // executor callback, and why async functions synchronously
    // execute code before the first await. Since we implement simple
    // async functions in terms of async generators, it is especially
    // important to get this right, even though it requires care.
    previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
    // invocations of the iterator.
    callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
  } // Define the unified helper method that is used to implement .next,
  // .throw, and .return (see defineIteratorMethods).


  this._invoke = enqueue;
}

defineIteratorMethods(AsyncIterator.prototype);

AsyncIterator.prototype[asyncIteratorSymbol] = function () {
  return this;
}; // Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.


function async(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
  if (PromiseImpl === void 0) PromiseImpl = Promise;
  var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
  return isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
  : iter.next().then(function (result) {
    return result.done ? result.value : iter.next();
  });
}

function makeInvokeMethod(innerFn, self, context) {
  var state = GenStateSuspendedStart;
  return function invoke(method, arg) {
    if (state === GenStateExecuting) {
      throw new Error("Generator is already running");
    }

    if (state === GenStateCompleted) {
      if (method === "throw") {
        throw arg;
      } // Be forgiving, per 25.3.3.3.3 of the spec:
      // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


      return doneResult();
    }

    context.method = method;
    context.arg = arg;

    while (true) {
      var delegate = context.delegate;

      if (delegate) {
        var delegateResult = maybeInvokeDelegate(delegate, context);

        if (delegateResult) {
          if (delegateResult === ContinueSentinel) continue;
          return delegateResult;
        }
      }

      if (context.method === "next") {
        // Setting context._sent for legacy support of Babel's
        // function.sent implementation.
        context.sent = context._sent = context.arg;
      } else if (context.method === "throw") {
        if (state === GenStateSuspendedStart) {
          state = GenStateCompleted;
          throw context.arg;
        }

        context.dispatchException(context.arg);
      } else if (context.method === "return") {
        context.abrupt("return", context.arg);
      }

      state = GenStateExecuting;
      var record = tryCatch(innerFn, self, context);

      if (record.type === "normal") {
        // If an exception is thrown from innerFn, we leave state ===
        // GenStateExecuting and loop back for another invocation.
        state = context.done ? GenStateCompleted : GenStateSuspendedYield;

        if (record.arg === ContinueSentinel) {
          continue;
        }

        return {
          value: record.arg,
          done: context.done
        };
      } else if (record.type === "throw") {
        state = GenStateCompleted; // Dispatch the exception by looping back around to the
        // context.dispatchException(context.arg) call above.

        context.method = "throw";
        context.arg = record.arg;
      }
    }
  };
} // Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.


function maybeInvokeDelegate(delegate, context) {
  var method = delegate.iterator[context.method];

  if (method === undefined$1) {
    // A .throw or .return when the delegate iterator has no .throw
    // method always terminates the yield* loop.
    context.delegate = null;

    if (context.method === "throw") {
      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined$1;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }

      context.method = "throw";
      context.arg = new TypeError("The iterator does not provide a 'throw' method");
    }

    return ContinueSentinel;
  }

  var record = tryCatch(method, delegate.iterator, context.arg);

  if (record.type === "throw") {
    context.method = "throw";
    context.arg = record.arg;
    context.delegate = null;
    return ContinueSentinel;
  }

  var info = record.arg;

  if (!info) {
    context.method = "throw";
    context.arg = new TypeError("iterator result is not an object");
    context.delegate = null;
    return ContinueSentinel;
  }

  if (info.done) {
    // Assign the result of the finished delegate to the temporary
    // variable specified by delegate.resultName (see delegateYield).
    context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

    context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
    // exception, let the outer generator proceed normally. If
    // context.method was "next", forget context.arg since it has been
    // "consumed" by the delegate iterator. If context.method was
    // "return", allow the original .return call to continue in the
    // outer generator.

    if (context.method !== "return") {
      context.method = "next";
      context.arg = undefined$1;
    }
  } else {
    // Re-yield the result returned by the delegate method.
    return info;
  } // The delegate iterator is finished, so forget it and continue with
  // the outer generator.


  context.delegate = null;
  return ContinueSentinel;
} // Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.


defineIteratorMethods(Gp);
Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.

Gp[iteratorSymbol] = function () {
  return this;
};

Gp.toString = function () {
  return "[object Generator]";
};

function pushTryEntry(locs) {
  var entry = {
    tryLoc: locs[0]
  };

  if (1 in locs) {
    entry.catchLoc = locs[1];
  }

  if (2 in locs) {
    entry.finallyLoc = locs[2];
    entry.afterLoc = locs[3];
  }

  this.tryEntries.push(entry);
}

function resetTryEntry(entry) {
  var record = entry.completion || {};
  record.type = "normal";
  delete record.arg;
  entry.completion = record;
}

function Context(tryLocsList) {
  // The root entry object (effectively a try statement without a catch
  // or a finally block) gives us a place to store values thrown from
  // locations where there is no enclosing try statement.
  this.tryEntries = [{
    tryLoc: "root"
  }];
  tryLocsList.forEach(pushTryEntry, this);
  this.reset(true);
}

function keys(object) {
  var keys = [];

  for (var key in object) {
    keys.push(key);
  }

  keys.reverse(); // Rather than returning an object with a next method, we keep
  // things simple and return the next function itself.

  return function next() {
    while (keys.length) {
      var key = keys.pop();

      if (key in object) {
        next.value = key;
        next.done = false;
        return next;
      }
    } // To avoid creating an additional object, we just hang the .value
    // and .done properties off the next function object itself. This
    // also ensures that the minifier will not anonymize the function.


    next.done = true;
    return next;
  };
}

function values(iterable) {
  if (iterable) {
    var iteratorMethod = iterable[iteratorSymbol];

    if (iteratorMethod) {
      return iteratorMethod.call(iterable);
    }

    if (typeof iterable.next === "function") {
      return iterable;
    }

    if (!isNaN(iterable.length)) {
      var i = -1,
          next = function next() {
        while (++i < iterable.length) {
          if (hasOwn.call(iterable, i)) {
            next.value = iterable[i];
            next.done = false;
            return next;
          }
        }

        next.value = undefined$1;
        next.done = true;
        return next;
      };

      return next.next = next;
    }
  } // Return an iterator with no values.


  return {
    next: doneResult
  };
}

function doneResult() {
  return {
    value: undefined$1,
    done: true
  };
}

Context.prototype = {
  constructor: Context,
  reset: function reset(skipTempReset) {
    this.prev = 0;
    this.next = 0; // Resetting context._sent for legacy support of Babel's
    // function.sent implementation.

    this.sent = this._sent = undefined$1;
    this.done = false;
    this.delegate = null;
    this.method = "next";
    this.arg = undefined$1;
    this.tryEntries.forEach(resetTryEntry);

    if (!skipTempReset) {
      for (var name in this) {
        // Not sure about the optimal order of these conditions:
        if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
          this[name] = undefined$1;
        }
      }
    }
  },
  stop: function stop() {
    this.done = true;
    var rootEntry = this.tryEntries[0];
    var rootRecord = rootEntry.completion;

    if (rootRecord.type === "throw") {
      throw rootRecord.arg;
    }

    return this.rval;
  },
  dispatchException: function dispatchException(exception) {
    if (this.done) {
      throw exception;
    }

    var context = this;

    function handle(loc, caught) {
      record.type = "throw";
      record.arg = exception;
      context.next = loc;

      if (caught) {
        // If the dispatched exception was caught by a catch block,
        // then let that catch block handle the exception normally.
        context.method = "next";
        context.arg = undefined$1;
      }

      return !!caught;
    }

    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];
      var record = entry.completion;

      if (entry.tryLoc === "root") {
        // Exception thrown outside of any try block that could handle
        // it, so set the completion value of the entire function to
        // throw the exception.
        return handle("end");
      }

      if (entry.tryLoc <= this.prev) {
        var hasCatch = hasOwn.call(entry, "catchLoc");
        var hasFinally = hasOwn.call(entry, "finallyLoc");

        if (hasCatch && hasFinally) {
          if (this.prev < entry.catchLoc) {
            return handle(entry.catchLoc, true);
          } else if (this.prev < entry.finallyLoc) {
            return handle(entry.finallyLoc);
          }
        } else if (hasCatch) {
          if (this.prev < entry.catchLoc) {
            return handle(entry.catchLoc, true);
          }
        } else if (hasFinally) {
          if (this.prev < entry.finallyLoc) {
            return handle(entry.finallyLoc);
          }
        } else {
          throw new Error("try statement without catch or finally");
        }
      }
    }
  },
  abrupt: function abrupt(type, arg) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];

      if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
        var finallyEntry = entry;
        break;
      }
    }

    if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
      // Ignore the finally entry if control is not jumping to a
      // location outside the try/catch block.
      finallyEntry = null;
    }

    var record = finallyEntry ? finallyEntry.completion : {};
    record.type = type;
    record.arg = arg;

    if (finallyEntry) {
      this.method = "next";
      this.next = finallyEntry.finallyLoc;
      return ContinueSentinel;
    }

    return this.complete(record);
  },
  complete: function complete(record, afterLoc) {
    if (record.type === "throw") {
      throw record.arg;
    }

    if (record.type === "break" || record.type === "continue") {
      this.next = record.arg;
    } else if (record.type === "return") {
      this.rval = this.arg = record.arg;
      this.method = "return";
      this.next = "end";
    } else if (record.type === "normal" && afterLoc) {
      this.next = afterLoc;
    }

    return ContinueSentinel;
  },
  finish: function finish(finallyLoc) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];

      if (entry.finallyLoc === finallyLoc) {
        this.complete(entry.completion, entry.afterLoc);
        resetTryEntry(entry);
        return ContinueSentinel;
      }
    }
  },
  "catch": function _catch(tryLoc) {
    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
      var entry = this.tryEntries[i];

      if (entry.tryLoc === tryLoc) {
        var record = entry.completion;

        if (record.type === "throw") {
          var thrown = record.arg;
          resetTryEntry(entry);
        }

        return thrown;
      }
    } // The context.catch method must only be called with a location
    // argument that corresponds to a known catch block.


    throw new Error("illegal catch attempt");
  },
  delegateYield: function delegateYield(iterable, resultName, nextLoc) {
    this.delegate = {
      iterator: values(iterable),
      resultName: resultName,
      nextLoc: nextLoc
    };

    if (this.method === "next") {
      // Deliberately forget the last sent value so that we don't
      // accidentally pass it on to the delegate.
      this.arg = undefined$1;
    }

    return ContinueSentinel;
  }
}; // Export a default namespace that plays well with Rollup

var _regeneratorRuntime = {
  wrap,
  isGeneratorFunction,
  AsyncIterator,
  mark,
  awrap,
  async,
  keys,
  values
};

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
  constructor() {
    super(...arguments);

    _defineProperty(this, "isShowTotalBetFrame", void 0);

    _defineProperty(this, "keyboardListener", void 0);

    _defineProperty(this, "_autoStateChangeObserver", void 0);

    _defineProperty(this, "nowSpeed", void 0);

    _defineProperty(this, "isAutoState", void 0);

    _defineProperty(this, "nowAutoType", void 0);

    _defineProperty(this, "longTouchTime", void 0);

    _defineProperty(this, "userMoney", void 0);

    _defineProperty(this, "_userMoneyChangeObserver", void 0);
  }

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
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).subscribe(this.getAutoStateChangeObserver(), true);
    /*玩家金額更新推播事件*/

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE).subscribe(this.getUserMoneyChangeObserver(), true);
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
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //推播auto事件
              _this.autoNotify(true, _this.nowAutoType);

              if (!(fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY)) {
                _context.next = 4;
                break;
              }

              _context.next = 4;
              return _this.startButtonEvent();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
  /**
   * 推播auto事件
   * @param {boolean} isAutoState - 當前自動狀態
   * @param {AutoType} autoType - 當前 auto類型
   * @private
   */


  autoNotify(isAutoState, autoType) {
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(isAutoState, autoType, autoType);
  }
  /**
   * start監聽抬起時狀態
   * 取消長壓計時器事件,並進入開始遊戲事件
   * @private
   */


  startButtonOnTouchEnd() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this2.unschedule(_this2.longTouchTimer);

              if (!(fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY)) {
                _context2.next = 4;
                break;
              }

              _context2.next = 4;
              return _this2.startButtonEvent();

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
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
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = event.keyCode;
              _context3.next = _context3.t0 === cc.macro.KEY.space ? 3 : 7;
              break;

            case 3:
              _context3.next = 5;
              return _this3.startButtonOnTouchEnd();

            case 5:
              _this3.keyboardListener = false;
              return _context3.abrupt("break", 7);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  }
  /**
   * 自動狀態監聽者
   * 如有需求可自行override or 獲取監聽對象做關閉操作
   * @returns {AutoStateChangeObserver}
   * @protected
   */


  getAutoStateChangeObserver() {
    var _this4 = this;

    if (!this._autoStateChangeObserver) {
      this._autoStateChangeObserver = new AutoStateChangeObserver( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(isAutomaticState, beforeAutoCount, afterAutoCount) {
          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _this4.nowAutoType = afterAutoCount;
                  _this4.isAutoState = isAutomaticState;

                  _this4.autoEvent(isAutomaticState, afterAutoCount);

                  if (!(isAutomaticState && fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY)) {
                    _context4.next = 6;
                    break;
                  }

                  _context4.next = 6;
                  return _this4.startButtonEvent();

                case 6:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }(), this);
    }

    return this._autoStateChangeObserver;
  }
  /**
   * 更新玩家金額
   */


  getUserMoneyChangeObserver() {
    if (!this._userMoneyChangeObserver) {
      this._userMoneyChangeObserver = new UserMoneyChangeObserver(money => {
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
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
      var nowUserBetIndex, userBet;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (!_this5.isShowTotalBetFrame) {
                _context5.next = 4;
                break;
              }

              _this5.isShowTotalBetFrame = !_this5.isShowTotalBetFrame;

              _this5.totalBetFrameTouchEvent(false);

              return _context5.abrupt("return");

            case 4:
              if (!(fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY && fcc.processMgr.gameState != fcc.type.GameStateType.FREEING)) {
                _context5.next = 7;
                break;
              }

              //推播即停事件
              fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).notify();
              return _context5.abrupt("return");

            case 7:
              //判斷當前是金額足夠
              nowUserBetIndex = _this5.userBetPoint.LineBet;
              userBet = _this5.tableInfo.LineTotalBet[nowUserBetIndex]; //如果用戶金額不足的情況

              if (!(_this5.userMoney - userBet < 0)) {
                _context5.next = 12;
                break;
              }

              fcc.errorMgr.serverError(false, fcc.languageMgr.getText("S_9003"));
              return _context5.abrupt("return");

            case 12:
              _this5.startEvent();

              _context5.next = 15;
              return fcc.processMgr.play();

            case 15:
              _this5.endEvent();

            case 16:
              if (_this5.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
                _context5.next = 0;
                break;
              }

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  }
  /**
   * 自動按鈕監聽事件
   * 如果當前押注視窗開啟中,將更換為關閉視窗方法
   * 正常情況,推播當前auto狀態事件
   * @private
   */


  autoButtonEventListener() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6() {
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this6.unschedule(_this6.longTouchTimer); //將長案事件失效
              //如果當前押注視窗開啟中,將更換為關閉視窗方法


              if (!_this6.isShowTotalBetFrame) {
                _context6.next = 5;
                break;
              }

              _this6.isShowTotalBetFrame = !_this6.isShowTotalBetFrame;

              _this6.totalBetFrameTouchEvent(false);

              return _context6.abrupt("return");

            case 5:
              _this6.isAutoState = !_this6.isAutoState;

              _this6.autoNotify(_this6.isAutoState, _this6.nowAutoType);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
  /**
   * 加速按鈕監聽事件
   * @protected
   */


  speedUpButtonEventListener() {
    this.nowSpeed = !this.nowSpeed;
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).notify(this.nowSpeed);
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
    fcc.global.Button.addButtonEvent( //自動按鈕監聽添加
    this.autoButton, "autoButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //加速按鈕監聽添加
    this.speedUpButton, "speedUpButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
    this.betSelectionButton, "totalBetFrameTouchEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
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
    fcc.global.Button.addButtonEvent( //自動按鈕監聽添加
    this.autoButtonH, "autoButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //自動按鈕監聽添加
    this.autoButtonV, "autoButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //加速按鈕監聽添加
    this.speedUpButtonH, "speedUpButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //加速按鈕監聽添加
    this.speedUpButtonV, "speedUpButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
    this.betSelectionButtonH, "totalBetFrameTouchEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
    this.betSelectionButtonV, "totalBetFrameTouchEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
    this.menuButtonH, "menuButtonEventListener", this);
    fcc.global.Button.addButtonEvent( //押注金額選擇按鈕監聽添加
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
  constructor() {
    super(...arguments);

    _defineProperty(this, "userTotalBetChangeObserver", void 0);

    _defineProperty(this, "autoStateChangeObserver", void 0);

    _defineProperty(this, "nowAutoType", void 0);
  }

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
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).subscribe(this.getAutoStateChangeObserver(), true);
    /*用戶更換的押住金額事件*/

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).subscribe(this.getUserTotalBetChangeObserver(), true);
  }
  /**
   * 自動更新當前是否靜音背景音樂
   * 注意:update靜音狀態會依照config初始設定做更新
   * @protected
   */


  musicEventListener() {
    var isOnMute = fcc.audioMgr.updateMusicOnMute();
    this.musicEvent(isOnMute);
  }
  /**
   * 自動更新當前是否靜音效果音樂
   * 注意:update靜音狀態會依照config初始設定做更新
   * @protected
   */


  effectEventListener() {
    var isOnMute = fcc.audioMgr.updateEffectOnMute();
    this.effectEvent(isOnMute);
  }
  /**
   * 用戶點擊按鈕增加押注點數事件
   * 注意:當用戶增加的押注點數超過最大值,將會自動跳回最小值
   * @protected
   */


  betUpEventListener() {
    var afterBetIndex = this.nowBetIndex + 1;

    if (afterBetIndex > this.tableInfo.LineBet.length - 1) {
      afterBetIndex = 0;
    }

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, afterBetIndex);
  }
  /**
   * 用戶點擊按鈕增加押注點數事件
   * 注意:當用戶增加的押注點數超過最小值,將會自動跳回最大值
   * @protected
   */


  betDownEventListener() {
    var afterBetIndex = this.nowBetIndex - 1;

    if (afterBetIndex < 0) {
      afterBetIndex = this.tableInfo.LineBet.length - 1;
    }

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, afterBetIndex);
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
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(true, this.nowAutoType, callbackType);
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
    fcc.global.Button.addButtonEvent(this.musicButtonH, "musicEventListener", this);
    fcc.global.Button.addButtonEvent(this.musicButtonV, "musicEventListener", this);
    /*效果音樂按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.effectButtonH, "effectEventListener", this);
    fcc.global.Button.addButtonEvent(this.effectButtonV, "effectEventListener", this);
    /*押住籌碼提高按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.betUpButtonH, "betUpEventListener", this);
    fcc.global.Button.addButtonEvent(this.betUpButtonV, "betUpEventListener", this);
    /*押住籌碼降低按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.betDownButtonH, "betDownEventListener", this);
    fcc.global.Button.addButtonEvent(this.betDownButtonV, "betDownEventListener", this);
    /*自動50次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto50ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
    fcc.global.Button.addButtonEvent(this.auto50ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
    /*自動100次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto100ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
    fcc.global.Button.addButtonEvent(this.auto100ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
    /*自動500次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto500ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
    fcc.global.Button.addButtonEvent(this.auto500ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
    /*自動1000次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto1000ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
    fcc.global.Button.addButtonEvent(this.auto1000ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
    /*自動直到免費後停止按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.autoFreeEndButtonH, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
    fcc.global.Button.addButtonEvent(this.autoFreeEndButtonV, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
    /*自動按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
    fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
    /*返回上一頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
    fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);
    /*返回首頁事件綁定*/

    fcc.global.Button.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this);
    fcc.global.Button.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this);
    /*紀錄頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this);
    fcc.global.Button.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this);
    /*設定頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this);
    fcc.global.Button.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this);
    /*說明頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this);
    fcc.global.Button.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this);
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
    fcc.global.Button.addButtonEvent(this.musicButton, "musicEventListener", this);
    /*效果音樂按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.effectButton, "effectEventListener", this);
    /*押住籌碼提高按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.betUpButton, "betUpEventListener", this);
    /*押住籌碼降低按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.betDownButton, "betDownEventListener", this);
    /*自動50次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto50Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50);
    /*自動100次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto100Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100);
    /*自動500次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto500Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500);
    /*自動1000次按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.auto1000Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000);
    /*自動直到免費後停止按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.autoFreeEndButton, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END);
    /*自動按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this, fcc.type.AutoType.AUTO);
    /*返回上一頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this);
    /*返回首頁事件綁定*/

    fcc.global.Button.addButtonEvent(this.goHomeButton, "goHomeTouchEvent", this);
    /*紀錄頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.recordButton, "recordPageTouchEvent", this);
    /*設定頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.settingButton, "settingPageTouchEvent", this);
    /*說明頁按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.descriptionPageButton, "descriptionPageEvent", this);
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
  constructor() {
    super(...arguments);

    _defineProperty(this, "isHistoryResultOK", void 0);
  }

  onLoad() {
    this.isHistoryResultOK = false;
    this.gameHistoryResultEventListener();
    super.onLoad();
  }
  /**
   * 遊戲紀錄server回傳監聽
   */


  gameHistoryResultEventListener() {
    fcc.eventMgr.eventListener(fcc.type.ServerEventType.GET_GAME_HISTORY_RESULT, gameHistoryData => {
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
    fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this);
    fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this);
    /*查看一日內紀錄鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY);
    fcc.global.Button.addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY);
    /*查看五日內紀錄鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
    fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY);
    /*查看十日內紀錄鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY);
    fcc.global.Button.addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY);
    /*前往下一頁紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
    fcc.global.Button.addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
    /*前往下一頁紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
    fcc.global.Button.addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
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
    fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this);
    /*查看一日內紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.oneDayRecordButton, "daysRecordTouchEventH", this, DayType.ONE_DAY);
    /*查看五日內紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.fiveDayRecordButton, "daysRecordTouchEventH", this, DayType.FIVE_DAY);
    /*查看十日內紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.tenDayRecordButton, "daysRecordTouchEventH", this, DayType.TEN_DAY);
    /*前往下一頁紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.nextRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT);
    /*前往下一頁紀錄按鈕事件綁定*/

    fcc.global.Button.addButtonEvent(this.previousRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS);
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
    fcc.global.Button.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this);
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
  constructor() {
    super(...arguments);

    _defineProperty(this, "_canPlayGame", void 0);
  }

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
      var path = window.libraryPath && window.libraryPath != "" ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "") : "../.."; // 打包與測試讀取不同路徑

      fcc.configMgr.setExternallyLoadURL(path);
    }
  }
  /**
   * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
   */


  tableInfoEvent() {
    fcc.eventMgr.eventListener(fcc.type.ServerEventType.TABLE_INFO, tableInfo => {
      for (var _i = 0, _Object$keys = Object.keys(tableInfo); _i < _Object$keys.length; _i++) {
        var name = _Object$keys[_i];

        if (this.tableInfo[name] === undefined) {
          try {
            fcc.errorMgr.executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, "\u7121 ".concat(name, " \u53C3\u6578,\u8ACB\u66F4\u63DB TableInfo Type"));
          } catch (e) {
            console.log(e);
          }
        } else {
          this.tableInfo[name] = tableInfo[name];
        }
      }

      console.log("".concat(fcc.type.ServerEventType.TABLE_INFO, " : ").concat(this.tableInfo));
      fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE).notify(this.tableInfo.UserPoint);
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
  constructor() {
    super(...arguments);

    _defineProperty(this, "progressValue", void 0);

    _defineProperty(this, "timeOut", void 0);

    _defineProperty(this, "addProgressValue", void 0);

    _defineProperty(this, "timer", void 0);
  }

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
      if (!this.checkHasRes(resName, resolve)) return;
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

        if (this.addProgressValue != 0.1) this.addProgressValue = 0.05;
      }
    }, this.timeOut);
  }

  closeLoadingDiaLog(resolve) {
    cc.tween(this.loadingDialogNode).to(0.2, {
      opacity: 0
    }).call(() => {
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
      fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, "".concat(resName, "\u8A72\u7121\u8A72\u8CC7\u6E90"));
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
  constructor() {
    super(...arguments);

    _defineProperty(this, "_scrollFocusStateObserver", void 0);
  }

  onLoad() {
    this.addNotification(); //綁定推播接收事件

    super.onLoad();
  }
  /**
   * 添加推撥的接收事件
   */


  addNotification() {
    /*瞇排事件觸發時,推撥至此*/
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).subscribe(this.getScrollFocusStateObserver(), true);
  }
  /**
   * 瞇排事件訂閱者
   * @private
   */


  getScrollFocusStateObserver() {
    if (!this._scrollFocusStateObserver) {
      this._scrollFocusStateObserver = new ScrollFocusStateObserver((index, isShow) => {
        if (isShow) {
          if (this.allLookAtEffect[index].node.active) return;
          this.showLookAtEffect(index);
        } else {
          if (!this.allLookAtEffect[index].node.active) return;
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
  /**
   * 由 fcc.slotStyleMgr build 實現
   * @type {fcc.IF.ISlotSetting}
   * @protected
   */

  /**
   * 使否需要即停
   * @type {boolean}
   * @protected
   */

  /**
   * 當前的加速狀態
   * @type {boolean}
   * @protected
   */

  /**
   * 當前加速速率 : 無加速狀態 = 1
   * @type {number}
   * @protected
   */

  /**
   * 即停狀態通知時,該事件推播給綁定者
   * @type {StopNowStateObserver}
   * @protected
   */

  /**
   * 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
   * @type {SpeedStateChangeObserver}
   * @protected
   */

  /**
   * 當server回傳該局答案時,當有事件推送時,將會將該事件推播給綁定者
   * @type {ResponseResultObserver}
   * @private
   */

  /**
   * 是否server已經回傳結果
   * @type {boolean}
   * @protected
   */
  constructor(styleData, configManager) {
    _defineProperty(this, "styleData", void 0);

    _defineProperty(this, "isSlotImmediateStop", void 0);

    _defineProperty(this, "isSpeedUp", void 0);

    _defineProperty(this, "speedRatio", void 0);

    _defineProperty(this, "stopNowStateObserver", void 0);

    _defineProperty(this, "speedStateChangeObserver", void 0);

    _defineProperty(this, "responseResultObserver", void 0);

    _defineProperty(this, "isResultOK", void 0);

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
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).subscribe(this.getStopNowStateObserver(), true);
    /*當前加速倍率監聽*/

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).subscribe(this.getSpeedStateChangeObserver(), true);
    /*當前server是否已經回傳結果*/

    fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).subscribe(this.getResponseResultObserver(), true);
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
      this.speedStateChangeObserver = new SpeedStateChangeObserver(isSpeedUp => {
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
      this.responseResultObserver = new ResponseResultObserver(isResultOk => {
        this.isResultOK = isResultOk;
      }, this);
    }

    return this.responseResultObserver;
  }

}

function _createForOfIteratorHelper$8(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$8(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$8(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$8(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$8(o, minLen); }

function _arrayLikeToArray$8(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
  /**
   * 一般停止最少轉動次數
   * @type {number}
   * @private
   */

  /**
   * 遊戲每格格子間的速度
   * @type {number}
   * @private
   */

  /**
   * 遊戲每列的格子數量
   * @type {number}
   * @private
   */

  /**
   * 老虎機格子高度
   * @type {number}
   * @private
   */

  /**
   * 確認該軸是否有 free 圖標
   * @param index
   */

  /**
   * 加速倍率
   * @type {number}
   * @private
   */

  /**
   * 執行老虎機動畫的列
   * @type {Array<cc.Node>}
   * @private
   */

  /**
   * 跑遊戲更換位置的grid 節點
   * @type {Map<number, Array<cc.Node>>}
   * @private
   */

  /**
   * 跑遊戲更換答案的grid 節點
   * @type {Map<number, Array<cc.Sprite>>}
   * @private
   */

  /**
   * 遊戲中所有靜態grid圖片
   * @param {StyleData} styleData
   */

  /**
   * 遊戲每列是否已經結束
   * @type {Array<boolean>}
   * @private
   */

  /**
   * ["當前要跑幾個格子","slot高度"]
   * @type {Array<number>}
   * @private
   */

  /**
   * 一般狀態回傳 model
   * @type {NoLineResult}
   * @private
   */

  /**
   * 免費結果回傳 model
   * @type {NoLineFreeResult}
   * @private
   */
  constructor(styleData, configManager) {
    super(styleData, configManager);

    _defineProperty(this, "slotTurnCount", void 0);

    _defineProperty(this, "slotGirdSpeed", void 0);

    _defineProperty(this, "slotRowGridCount", void 0);

    _defineProperty(this, "slotGridHeight", void 0);

    _defineProperty(this, "freeIconCount", void 0);

    _defineProperty(this, "speedUpMultiple", void 0);

    _defineProperty(this, "slotColumnToTween", void 0);

    _defineProperty(this, "gridNodeToMap", void 0);

    _defineProperty(this, "gridSpriteToMap", void 0);

    _defineProperty(this, "gridImg", void 0);

    _defineProperty(this, "isSlotEnd", void 0);

    _defineProperty(this, "rowData", void 0);

    _defineProperty(this, "normalResult", void 0);

    _defineProperty(this, "freeResult", void 0);

    if (!styleData) return;
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
    var sineInHeight = Math.floor(this.styleData.slotGridHeight / 2);
    return new Promise(resolve => {
      var index = 0;

      var _iterator = _createForOfIteratorHelper$8(this.slotColumnToTween),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var columnNode = _step.value;
          //開始執行動畫
          cc.tween(columnNode).to(this.slotGirdSpeed * 1.5, {
            y: columnNode.y + sineInHeight
          }, {
            easing: 'quadOut'
          }).by(this.slotGirdSpeed, {
            y: -sineInHeight
          }).call(() => {
            index++;

            if (index === this.slotColumnToTween.length) {
              resolve();
            }
          }).start();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }
  /**
   * Loop 老虎機方法
   * @return {Promise<void>}
   */


  runSlotAnimation() {
    return new Promise(resolve => {
      //拿取該slot有幾列
      var columnLength = this.slotColumnToTween.length; //播放slot轉動音校

      fcc.audioMgr.effectPlay("SlotTrun");

      for (var i = 0; i < columnLength; i++) {
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


  executeSlotAnimation(index, resolve) {
    var numberOfTimes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)
    var duration = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio;
    var node = this.slotColumnToTween[index]; //跑老虎機的每列

    cc.tween(node).to(duration, {
      y: node.y - this.rowData[1]
    }).call(() => {
      //如果該列不是第一列,且有瞇排事件,當他的上一輪轉完,推撥打開瞇排的事件
      if (index != 0 && this.checkLookAt(index) && this.isSlotEnd[index - 1]) {
        this.notifyLookAtEvent(true, index);
      } //更新被Mask的Grid,將之移動到原位子


      this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index); //如果server有回傳答案,將可進入停軸判斷

      if (this.isResultOK) {
        // 假如當前需要即停,將直接停止slot
        if (this.isCanStop(index, resolve)) return;
        numberOfTimes++;

        if (index == 0 && numberOfTimes == this.getSlotTurnCount(index)) {
          //如果當前是第一列,將判斷是否已達到需轉動的次數
          this.showAnswer(index);
          this.isSlotEnd[index] = true;
        } else if (index != 0 && this.isSlotEnd[index - 1] && numberOfTimes == this.getSlotTurnCount(index)) {
          //如果當前不是第一列,且上一列已經停止時,將判斷該列是否已達到需轉動的次數
          this.showAnswer(index, resolve);
          this.isSlotEnd[index] = true; //判斷該列是否有瞇排事件,如果有,將推播關閉瞇排事件

          if (this.checkLookAt(index)) {
            this.notifyLookAtEvent(false, index);
          }

          fcc.audioMgr.effectPlay("SlotStop");
        } else {
          //無達成上述條件,持續轉動
          this.executeSlotAnimation(index, resolve, numberOfTimes);
        }
      } else {
        //server還沒回傳答案,持續轉動
        this.executeSlotAnimation(index, resolve, numberOfTimes);
      }
    }).start();
  }
  /**
   * 拿取該要跑的次數
   * @param index - 哪一列
   * @return {number} - 該列要Loop的數字
   * @private
   */


  getSlotTurnCount(index) {
    var count;

    if (this.isSpeedUp) {
      //如果是加速狀態,全軸一起停止
      count = this.slotTurnCount;
    } else if (this.checkLookAt(index)) {
      //如果有瞇排事件,增加該軸的轉動次數
      count = index * 4 + this.slotTurnCount;
    } else {
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
    fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).notify(index, isShow);
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
      } else {
        //其他輪只傳index
        this.showAnswer(index);
      } //將該軸狀態更新為結束


      this.isSlotEnd[index] = true; //如果有瞇排事件,關閉瞇排事件

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
    var rowLength = rowNodes.length - 1; //隨機數字

    var random; //最後一個sprite

    var lastSprite;

    for (var i = 0; i < this.rowData[0]; i++) {
      //獲取該列最後一個sprite
      lastSprite = this.gridSpriteToMap.get(columnIndex)[rowLength]; //將該列的陣列中的最後一個sprite,複製到該陣列的第一個位置

      this.gridSpriteToMap.get(columnIndex).unshift(lastSprite); //刪除陣列中的最後一個 sprite 節點

      this.gridSpriteToMap.get(columnIndex).pop(); //隨機一個數字

      random = Math.floor(Math.random() * this.gridImg.size);
      this.gridSpriteToMap.get(columnIndex)[0].spriteFrame = this.gridImg.get(String(random)); //重新給予最後一個陣列中的node 更新 y 位置

      rowNodes[rowLength].y = rowNodes[0].y + this.slotGridHeight; //將該列的陣列中的最後一個node 節點 更新到該陣列的第一個位置

      rowNodes.unshift(rowNodes[rowLength]); //刪除陣列中的最後一個 node 節點

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
    this.updateGridAnswer(index); //緩動時間 = 當前一個格子的跑速 * 有幾個格子 * 當前是否加速(無加速 = 1)

    var duration = this.slotGirdSpeed * this.rowData[0] / this.speedRatio;
    var node = this.slotColumnToTween[index]; //跑老虎機的每列

    cc.tween(node).to(duration, {
      y: node.y - this.rowData[1]
    }).call(() => {
      //更新被Mask的Grid,將之移動到原位子
      this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(index), index); //給予彈跳動畫

      this.sineOutAnimation(index, resolve);
    }).start();
  }
  /**
   * 檢查是否需要瞇牌
   * @param index{number}:檢查該列是否需要瞇牌
   * @return {boolean} : 如果需要瞇牌,返回true
   * @private
   */


  checkLookAt(index) {
    var lookAt;
    var isShowLookAt;

    if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
      lookAt = this.freeResult.LookAt;
    } else {
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
    if ((this.isSpeedUp || this.isSlotImmediateStop) && index == this.slotColumnToTween.length - 1) {
      //如果當前是瞇排或是即停狀態,將只對最後一軸結束時才播放停軸音效
      fcc.audioMgr.effectPlay("SlotStop");
    } else {
      //各軸停止皆有音效
      fcc.audioMgr.effectPlay("SlotStop");
    } //獲取該Slot格子高度的一半


    var sineOutHeight = Math.floor(this.styleData.slotGridHeight / 2);
    var node = this.slotColumnToTween[index];
    cc.tween(node).to(this.slotGirdSpeed, {
      y: node.y - sineOutHeight
    }).by(this.slotGirdSpeed * 6, {
      y: +sineOutHeight
    }, {
      easing: 'bounceOut'
    }).call(() => {
      this.checkFreeIcon(index);

      if (index === this.slotColumnToTween.length - 1) {
        fcc.audioMgr.effectStop("SlotTrun");
        resolve();
      }
    }).start();
  }
  /**
   * 確認當前答案是否有Free圖標,如果有將播放該數量的音效
   * @param index
   */


  checkFreeIcon(index) {
    var gridAnswer;

    if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
      gridAnswer = this.freeResult.Grid;
    } else {
      gridAnswer = this.normalResult.Grid;
    }

    var start = index * this.slotRowGridCount;
    var end = start + this.slotRowGridCount;

    for (start; start < end; start++) {
      if (gridAnswer[start] == 10) {
        this.freeIconCount++; //如果非加速模式,對個別列疊播放數量增加時的音樂

        if (!this.isSpeedUp || !this.isSlotImmediateStop) {
          fcc.audioMgr.effectPlay("getFreeIcon".concat(this.freeIconCount));
        }
      }
    } //如果是加速模式,直接拿取該slot中Free總數量需播放的音樂


    if (this.isSpeedUp && this.freeIconCount >= 1 && index == this.slotColumnToTween.length - 1) {
      fcc.audioMgr.effectPlay("getFreeIcon".concat(this.freeIconCount));
    }
  }
  /**
   * 更新正確答案
   * 答案更新再每列最上面位置,等待掉下來,顯示正確答案給USER
   * @param {number} index : 要更新哪一列最上面三個grid 為正確答案
   * @private
   */


  updateGridAnswer(index) {
    var gridAnswer;

    if (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
      gridAnswer = this.freeResult.Grid;
    } else {
      gridAnswer = this.normalResult.Grid;
    }

    var start = index * this.slotRowGridCount;
    var end = start + this.slotRowGridCount;
    var gridIndex = 0;

    for (start; start < end; start++) {
      var answer = String(gridAnswer[start]);
      this.gridSpriteToMap.get(index)[gridIndex].spriteFrame = this.gridImg.get(answer);
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
      for (var i = 0; i < this.slotColumnToTween.length; i++) {
        this.isSlotEnd.push(false);
      }
    } else {
      for (var _i = 0; _i < this.slotColumnToTween.length; _i++) {
        this.isSlotEnd[_i] = false;
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
    fcc.eventMgr.eventListener(fcc.type.ServerEventType.BET_RESULT, betResult => {
      for (var _i = 0, _Object$keys = Object.keys(betResult); _i < _Object$keys.length; _i++) {
        var name = _Object$keys[_i];

        if (this.normalResult[name] === undefined) {
          try {
            fcc.errorMgr.executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, "".concat(name, "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBBetResultModule Type"));
          } catch (e) {
            console.log(e);
          }
        } else {
          this.normalResult[name] = betResult[name];
        }
      }

      console.log("".concat(fcc.type.ServerEventType.BET_RESULT, " : ").concat(this.normalResult));
      fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).notify(true);
    }, true);
  }
  /**
   * server 回傳freeResult答案時的事件接收器
   * @private
   */


  freeResultEvenResponse() {
    fcc.eventMgr.eventListener(fcc.type.ServerEventType.FREE_SPIN_RESULT, freeResult => {
      for (var _i2 = 0, _Object$keys2 = Object.keys(freeResult); _i2 < _Object$keys2.length; _i2++) {
        var name = _Object$keys2[_i2];

        if (this.freeResult[name] === undefined) {
          try {
            fcc.errorMgr.executeError(fcc.type.ErrorType.WEB_RESPONSE_FW, "".concat(name, "\u53C3\u6578\u672A\u5BA3\u544A:\u7121\u6CD5\u4FDD\u5B58\u56DE\u50B3\u503C,\u5982\u679C\u8A72\u53C3\u6578\u70BA\u5FC5\u8981,\u8ACB\u66F4\u63DBFreeResultModule Type"));
          } catch (e) {
            console.log(e);
          }
        } else {
          this.freeResult[name] = freeResult[name];
        }
      }

      console.log("".concat(fcc.type.ServerEventType.BET_RESULT, " : ").concat(this.normalResult));
      fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).notify(true);
    }, true);
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線免費狀態封包
 * @Date 2021-06-03 下午 04:51
 * @Version 1.0
 */
class ExtendHasLineFreeResult {
  /**
   * 0: 押注成功 1: 非免費時間押注
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 黏性圖標編號
   * @type {number}
   */

  /**
   * 黏性圖標位置
   * @type {Array<number>}
   */

  /**
   * 每條線贏分
   * @type {Array<number>}
   */

  /**
   * 每條線贏幾格
   * @type {Array<number>}
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 剩餘免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲累計贏分
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 再中免費遊戲次數 0:無 1~99:次
   * @type {number}
   * @private
   */

  /**
   * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_StickySymbol", void 0);

    _defineProperty(this, "_StickyChange", void 0);

    _defineProperty(this, "_LineWin", void 0);

    _defineProperty(this, "_LineGrid", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_Count", void 0);

    _defineProperty(this, "_FreeSpinWin", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_FreeToFree", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    _defineProperty(this, "_FreeLevelWin", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._StickySymbol = 0;
    this._StickyChange = new Array();
    this._LineWin = new Array();
    this._LineGrid = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._Count = 0;
    this._FreeSpinWin = 0;
    this._LookAt = new Array();
    this._FreeToFree = 0;
    this._BaseLevelWin = 0;
    this._FreeLevelWin = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get StickySymbol() {
    return this._StickySymbol;
  }

  set StickySymbol(value) {
    this._StickySymbol = value;
  }

  get StickyChange() {
    return this._StickyChange;
  }

  set StickyChange(value) {
    this._StickyChange = value;
  }

  get LineWin() {
    return this._LineWin;
  }

  set LineWin(value) {
    this._LineWin = value;
  }

  get LineGrid() {
    return this._LineGrid;
  }

  set LineGrid(value) {
    this._LineGrid = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get Count() {
    return this._Count;
  }

  set Count(value) {
    this._Count = value;
  }

  get FreeSpinWin() {
    return this._FreeSpinWin;
  }

  set FreeSpinWin(value) {
    this._FreeSpinWin = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get FreeToFree() {
    return this._FreeToFree;
  }

  set FreeToFree(value) {
    this._FreeToFree = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

  get FreeLevelWin() {
    return this._FreeLevelWin;
  }

  set FreeLevelWin(value) {
    this._FreeLevelWin = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 有線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
class HasLineFreeResult {
  /**
   * 0: 押注成功 1: 非免費時間押注
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 是否有鬼牌 0:沒有 1:有
   * @type {number}
   * @private
   */

  /**
   * 15格的資料 換圖 0:不換 1:換
   * @type {Array<number>}
   * @private
   */

  /**
   * 每條線贏分
   * @type {Array<number>}
   */

  /**
   * 每條線贏幾格
   * @type {Array<number>}
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 剩餘免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲累計贏分
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 再中免費遊戲次數 0:無 1~99:次
   * @type {number}
   * @private
   */

  /**
   * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_ChangeState", void 0);

    _defineProperty(this, "_Change", void 0);

    _defineProperty(this, "_LineWin", void 0);

    _defineProperty(this, "_LineGrid", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_Count", void 0);

    _defineProperty(this, "_FreeSpinWin", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_LevelWin", void 0);

    _defineProperty(this, "_FreeToFree", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    _defineProperty(this, "_FreeLevelWin", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._ChangeState = 0;
    this._Change = new Array();
    this._LineWin = new Array();
    this._LineGrid = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._Count = 0;
    this._FreeSpinWin = 0;
    this._LookAt = new Array();
    this._LevelWin = 0;
    this._FreeToFree = 0;
    this._BaseLevelWin = 0;
    this._FreeLevelWin = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get ChangeState() {
    return this._ChangeState;
  }

  set ChangeState(value) {
    this._ChangeState = value;
  }

  get Change() {
    return this._Change;
  }

  set Change(value) {
    this._Change = value;
  }

  get LineWin() {
    return this._LineWin;
  }

  set LineWin(value) {
    this._LineWin = value;
  }

  get LineGrid() {
    return this._LineGrid;
  }

  set LineGrid(value) {
    this._LineGrid = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get Count() {
    return this._Count;
  }

  set Count(value) {
    this._Count = value;
  }

  get FreeSpinWin() {
    return this._FreeSpinWin;
  }

  set FreeSpinWin(value) {
    this._FreeSpinWin = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get LevelWin() {
    return this._LevelWin;
  }

  set LevelWin(value) {
    this._LevelWin = value;
  }

  get FreeToFree() {
    return this._FreeToFree;
  }

  set FreeToFree(value) {
    this._FreeToFree = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

  get FreeLevelWin() {
    return this._FreeLevelWin;
  }

  set FreeLevelWin(value) {
    this._FreeLevelWin = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 無線免費狀態封包
 * @Date 2021-06-03 下午 12:04
 * @Version 1.0
 */
class NoLineFreeResult {
  /**
   * 0: 押注成功 1: 非免費時間押注
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 是否有鬼牌 0:沒有 1:有
   * @type {number}
   * @private
   */

  /**
   * 15格的資料 換圖 0:不換 1:換
   * @type {Array<number>}
   * @private
   */

  /**
   * 哪幾格贏 0:沒贏 1:贏
   * @type {Array<number>}
   * @private
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 剩餘免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲累計贏分
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  10:免費-無 11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 20:小遊戲-無 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 再中免費遊戲次數 0:無 1~99:次
   * @type {number}
   * @private
   */

  /**
   * 各局主遊戲 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲結果 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_ChangeState", void 0);

    _defineProperty(this, "_Change", void 0);

    _defineProperty(this, "_GridWin", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_Count", void 0);

    _defineProperty(this, "_FreeSpinWin", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_LevelWin", void 0);

    _defineProperty(this, "_FreeToFree", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    _defineProperty(this, "_FreeLevelWin", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._ChangeState = 0;
    this._Change = new Array();
    this._GridWin = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._Count = 0;
    this._FreeSpinWin = 0;
    this._LookAt = new Array();
    this._LevelWin = 0;
    this._FreeToFree = 0;
    this._BaseLevelWin = 0;
    this._FreeLevelWin = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get ChangeState() {
    return this._ChangeState;
  }

  set ChangeState(value) {
    this._ChangeState = value;
  }

  get Change() {
    return this._Change;
  }

  set Change(value) {
    this._Change = value;
  }

  get GridWin() {
    return this._GridWin;
  }

  set GridWin(value) {
    this._GridWin = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get Count() {
    return this._Count;
  }

  set Count(value) {
    this._Count = value;
  }

  get FreeSpinWin() {
    return this._FreeSpinWin;
  }

  set FreeSpinWin(value) {
    this._FreeSpinWin = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get LevelWin() {
    return this._LevelWin;
  }

  set LevelWin(value) {
    this._LevelWin = value;
  }

  get FreeToFree() {
    return this._FreeToFree;
  }

  set FreeToFree(value) {
    this._FreeToFree = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

  get FreeLevelWin() {
    return this._FreeLevelWin;
  }

  set FreeLevelWin(value) {
    this._FreeLevelWin = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 擴展類有線一般狀態封包
 * @Date 2021-06-03 下午 04:50
 * @Version 1.0
 */
class ExtendHasLineResult {
  /**
   * 0: 押注成功 1:遊戲狀態不符 2:超過
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 是否有神秘寶箱 0:沒有 1:有
   * @type {number}
   */

  /**
   * 神秘寶箱位置 0:沒有 1:有神秘寶箱位置 0:沒有 1:有
   * @type {Array<number>}
   */

  /**
   * 神秘寶箱格子圖案
   */

  /**
   * 每條線贏分
   * @type {Array<number>}
   * @private
   */

  /**
   * 每條線贏幾格
   * @type {Array<number>}
   * @private
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 玩家現有金額(押注後)
   * @type {number}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 活動轉數
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_SecretState", void 0);

    _defineProperty(this, "_SecretChange", void 0);

    _defineProperty(this, "_SecretSymbol", void 0);

    _defineProperty(this, "_LineWin", void 0);

    _defineProperty(this, "_LineGrid", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_FreeSpinCount", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_UserPointBefore", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    _defineProperty(this, "_BonusEventCount", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._SecretState = 0;
    this._SecretChange = new Array();
    this._SecretSymbol = 0;
    this._LineWin = new Array();
    this._LineGrid = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._FreeSpinCount = 0;
    this._LookAt = new Array();
    this._UserPointBefore = 0;
    this._BaseLevelWin = 0;
    this._BonusEventCount = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get SecretState() {
    return this._SecretState;
  }

  set SecretState(value) {
    this._SecretState = value;
  }

  get SecretChange() {
    return this._SecretChange;
  }

  set SecretChange(value) {
    this._SecretChange = value;
  }

  get SecretSymbol() {
    return this._SecretSymbol;
  }

  set SecretSymbol(value) {
    this._SecretSymbol = value;
  }

  get LineWin() {
    return this._LineWin;
  }

  set LineWin(value) {
    this._LineWin = value;
  }

  get LineGrid() {
    return this._LineGrid;
  }

  set LineGrid(value) {
    this._LineGrid = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get FreeSpinCount() {
    return this._FreeSpinCount;
  }

  set FreeSpinCount(value) {
    this._FreeSpinCount = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get UserPointBefore() {
    return this._UserPointBefore;
  }

  set UserPointBefore(value) {
    this._UserPointBefore = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

  get BonusEventCount() {
    return this._BonusEventCount;
  }

  set BonusEventCount(value) {
    this._BonusEventCount = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 有線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
class HasLineResult {
  /**
   * 0: 押注成功 1:遊戲狀態不符 2:超過
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 是否有鬼牌擴展 0:沒有 1:有
   * @type {Array<number>}
   * @private
   */

  /**
   * 15格的資料 換圖 0:不換 1:換
   * @type {number}
   * @private
   */

  /**
   * 每條線贏分
   * @type {Array<number>}
   * @private
   */

  /**
   * 每條線贏幾格
   * @type {Array<number>}
   * @private
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 玩家現有金額(押注後)
   * @type {number}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_Change", void 0);

    _defineProperty(this, "_ChangeState", void 0);

    _defineProperty(this, "_LineWin", void 0);

    _defineProperty(this, "_LineGrid", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_FreeSpinCount", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_UserPointBefore", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._Change = new Array();
    this._ChangeState = 0;
    this._LineWin = new Array();
    this._LineGrid = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._FreeSpinCount = 0;
    this._LookAt = new Array();
    this._UserPointBefore = 0;
    this._BaseLevelWin = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get Change() {
    return this._Change;
  }

  set Change(value) {
    this._Change = value;
  }

  get ChangeState() {
    return this._ChangeState;
  }

  set ChangeState(value) {
    this._ChangeState = value;
  }

  get LineWin() {
    return this._LineWin;
  }

  set LineWin(value) {
    this._LineWin = value;
  }

  get LineGrid() {
    return this._LineGrid;
  }

  set LineGrid(value) {
    this._LineGrid = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get FreeSpinCount() {
    return this._FreeSpinCount;
  }

  set FreeSpinCount(value) {
    this._FreeSpinCount = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get UserPointBefore() {
    return this._UserPointBefore;
  }

  set UserPointBefore(value) {
    this._UserPointBefore = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 無線一般狀態封包
 * @Date 2021-05-31 下午 01:41
 * @Version 1.0
 */
class NoLineResult {
  /**
   * 0: 押注成功 1:遊戲狀態不符 2:超過
   * @type {number}
   * @private
   */

  /**
   * 15格的資料
   * @type {Array<number>}
   * @private
   */

  /**
   * 是否有鬼牌擴展 0:沒有 1:有
   * @type {number}
   * @private
   */

  /**
   * 15格的資料 換圖 0:不換 1:換
   * @type {Array<number>}
   * @private
   */

  /**
   * 哪幾格贏 0:沒贏 1:贏
   * @type {Array<number>}
   * @private
   */

  /**
   * 總贏得金額 (0:輸了 大於0:贏了 )
   * @type {number}
   * @private
   */

  /**
   * 玩家現有金額(贏分後)
   * @type {number}
   * @private
   */

  /**
   * 接下來遊戲狀態(0:一般 1:免費遊戲 2:小遊戲)
   * @type {number}
   * @private
   */

  /**
   * 免費遊戲次數 (0:沒有 1~99次)
   * @type {number}
   * @private
   */

  /**
   * 瞇牌0:不用 1:瞇牌效果
   * @type {Array<number>}
   * @private
   */

  /**
   * 玩家現有金額(押注後)
   * @type {number}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎  11:免費-大獎 12:免費-巨獎 13:免費-超級巨獎 21:小遊戲-大獎 22:小遊戲-巨獎 23:小遊戲-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 噴錢效果 0:無 1:一般-大獎 2:一般-巨獎 3:一般-超級巨獎
   * @type {number}
   * @private
   */

  /**
   * 活動轉數
   * @type {number}
   * @private
   */
  constructor() {
    _defineProperty(this, "_State", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_ChangeState", void 0);

    _defineProperty(this, "_Change", void 0);

    _defineProperty(this, "_GridWin", void 0);

    _defineProperty(this, "_TotalWinPoint", void 0);

    _defineProperty(this, "_UserPointAfter", void 0);

    _defineProperty(this, "_GameState", void 0);

    _defineProperty(this, "_FreeSpinCount", void 0);

    _defineProperty(this, "_LookAt", void 0);

    _defineProperty(this, "_UserPointBefore", void 0);

    _defineProperty(this, "_LevelWin", void 0);

    _defineProperty(this, "_BaseLevelWin", void 0);

    _defineProperty(this, "_BonusEventCount", void 0);

    this._State = 0;
    this._Grid = new Array();
    this._ChangeState = 0;
    this._Change = new Array();
    this._GridWin = new Array();
    this._TotalWinPoint = 0;
    this._UserPointAfter = 0;
    this._GameState = 0;
    this._FreeSpinCount = 0;
    this._LookAt = new Array();
    this._UserPointBefore = 0;
    this._LevelWin = 0;
    this._BaseLevelWin = 0;
    this._BonusEventCount = 0;
    Object.preventExtensions(this);
  }

  get State() {
    return this._State;
  }

  set State(value) {
    this._State = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get ChangeState() {
    return this._ChangeState;
  }

  set ChangeState(value) {
    this._ChangeState = value;
  }

  get Change() {
    return this._Change;
  }

  set Change(value) {
    this._Change = value;
  }

  get GridWin() {
    return this._GridWin;
  }

  set GridWin(value) {
    this._GridWin = value;
  }

  get TotalWinPoint() {
    return this._TotalWinPoint;
  }

  set TotalWinPoint(value) {
    this._TotalWinPoint = value;
  }

  get UserPointAfter() {
    return this._UserPointAfter;
  }

  set UserPointAfter(value) {
    this._UserPointAfter = value;
  }

  get GameState() {
    return this._GameState;
  }

  set GameState(value) {
    this._GameState = value;
  }

  get FreeSpinCount() {
    return this._FreeSpinCount;
  }

  set FreeSpinCount(value) {
    this._FreeSpinCount = value;
  }

  get LookAt() {
    return this._LookAt;
  }

  set LookAt(value) {
    this._LookAt = value;
  }

  get UserPointBefore() {
    return this._UserPointBefore;
  }

  set UserPointBefore(value) {
    this._UserPointBefore = value;
  }

  get LevelWin() {
    return this._LevelWin;
  }

  set LevelWin(value) {
    this._LevelWin = value;
  }

  get BaseLevelWin() {
    return this._BaseLevelWin;
  }

  set BaseLevelWin(value) {
    this._BaseLevelWin = value;
  }

  get BonusEventCount() {
    return this._BonusEventCount;
  }

  set BonusEventCount(value) {
    this._BonusEventCount = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 有線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
class HasLineTableInfo {
  /**
   * 是否為線遊戲(0:無線 1:有線)
   * @type {number}
   */

  /**
   * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
   * @type {number}
   */

  /**
   * 幾線遊戲
   * @type {string}
   */

  /**
   * 賠率表
   * @type {object}
   */

  /**
   * 賠率表
   * @type {Object}
   */

  /**
   * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
   * @type {Array<number>}
   */

  /**
   * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
   * @type {Array<number>}
   */

  /**
   * 是否為線遊戲(0:無線 1:有線)
   * @type {Array<number>}
   */

  /**
   * 玩家現有金額
   * @type {number}
   */

  /**
   * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
   * @type {Array<number>}
   */
  constructor() {
    _defineProperty(this, "_IsLines", void 0);

    _defineProperty(this, "_BetTimes", void 0);

    _defineProperty(this, "_Line", void 0);

    _defineProperty(this, "_PayTable", void 0);

    _defineProperty(this, "_LineGridPos", void 0);

    _defineProperty(this, "_LineBet", void 0);

    _defineProperty(this, "_LineTotalBet", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_UserPoint", void 0);

    _defineProperty(this, "_LevelWinPoint", void 0);

    this._IsLines = 0;
    this._BetTimes = 0;
    this._Line = "";
    this._PayTable = {};
    this._LineGridPos = {};
    this._LineBet = new Array();
    this._LineTotalBet = new Array();
    this._Grid = new Array();
    this._UserPoint = 0;
    this._LevelWinPoint = new Array();
    Object.preventExtensions(this);
  }

  get IsLines() {
    return this._IsLines;
  }

  set IsLines(value) {
    this._IsLines = value;
  }

  get BetTimes() {
    return this._BetTimes;
  }

  set BetTimes(value) {
    this._BetTimes = value;
  }

  get Line() {
    return this._Line;
  }

  set Line(value) {
    this._Line = value;
  }

  get PayTable() {
    return this._PayTable;
  }

  set PayTable(value) {
    this._PayTable = value;
  }

  get LineGridPos() {
    return this._LineGridPos;
  }

  set LineGridPos(value) {
    this._LineGridPos = value;
  }

  get LineBet() {
    return this._LineBet;
  }

  set LineBet(value) {
    this._LineBet = value;
  }

  get LineTotalBet() {
    return this._LineTotalBet;
  }

  set LineTotalBet(value) {
    this._LineTotalBet = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get UserPoint() {
    return this._UserPoint;
  }

  set UserPoint(value) {
    this._UserPoint = value;
  }

  get LevelWinPoint() {
    return this._LevelWinPoint;
  }

  set LevelWinPoint(value) {
    this._LevelWinPoint = value;
  }

}

/**
 * @Author XIAO-LI-PIN
 * @Description 無線類遊戲資訊
 * @Date 2021-06-03 下午 12:01
 * @Version 1.0
 */
class NoLineTableInfo {
  /**
   * 是否為線遊戲(0:無線 1:有線)
   * @type {number}
   */

  /**
   * 押注 乘以的倍數(有線版本為自己的線數 無限版本為固定倍數)
   * @type {number}
   */

  /**
   * 幾線遊戲
   * @type {string}
   */

  /**
   * 賠率表
   * @type {object}
   */

  /**
   * 每線押注[0.1、0.2、0.3、0.4、0.5、1、2、3、4、5]
   * @type {Array<number>}
   */

  /**
   * 總押注[2.5、5、7.5、10、12.5、25、50、75、100、125]
   * @type {Array<number>}
   */

  /**
   * 15格的資料 顯示用
   * @type {Array<number>}
   */

  /**
   * 玩家現有金額
   * @type {number}
   */

  /**
   * 0:大獎 總押注倍數 1:巨獎 總押注倍數 2:超級巨獎 總押注倍數
   * @type {Array<number>}
   */

  /**
   * 活動模式 0 沒有 11 轉盤
   * @type {number}
   */

  /**
   * 活動轉數需求
   * @type {number}
   */
  constructor() {
    _defineProperty(this, "_IsLines", void 0);

    _defineProperty(this, "_BetTimes", void 0);

    _defineProperty(this, "_Line", void 0);

    _defineProperty(this, "_PayTable", void 0);

    _defineProperty(this, "_LineBet", void 0);

    _defineProperty(this, "_LineTotalBet", void 0);

    _defineProperty(this, "_Grid", void 0);

    _defineProperty(this, "_UserPoint", void 0);

    _defineProperty(this, "_LevelWinPoint", void 0);

    _defineProperty(this, "_EventMode", void 0);

    _defineProperty(this, "_EventRequire", void 0);

    this._IsLines = 0;
    this._BetTimes = 0;
    this._Line = "";
    this._PayTable = {};
    this._LineBet = new Array();
    this._LineTotalBet = new Array();
    this._Grid = new Array();
    this._UserPoint = 0;
    this._LevelWinPoint = new Array();
    this._EventMode = 0;
    this._EventRequire = 0;
    Object.preventExtensions(this);
  }

  get IsLines() {
    return this._IsLines;
  }

  set IsLines(value) {
    this._IsLines = value;
  }

  get BetTimes() {
    return this._BetTimes;
  }

  set BetTimes(value) {
    this._BetTimes = value;
  }

  get Line() {
    return this._Line;
  }

  set Line(value) {
    this._Line = value;
  }

  get PayTable() {
    return this._PayTable;
  }

  set PayTable(value) {
    this._PayTable = value;
  }

  get LineBet() {
    return this._LineBet;
  }

  set LineBet(value) {
    this._LineBet = value;
  }

  get LineTotalBet() {
    return this._LineTotalBet;
  }

  set LineTotalBet(value) {
    this._LineTotalBet = value;
  }

  get Grid() {
    return this._Grid;
  }

  set Grid(value) {
    this._Grid = value;
  }

  get UserPoint() {
    return this._UserPoint;
  }

  set UserPoint(value) {
    this._UserPoint = value;
  }

  get LevelWinPoint() {
    return this._LevelWinPoint;
  }

  set LevelWinPoint(value) {
    this._LevelWinPoint = value;
  }

  get EventMode() {
    return this._EventMode;
  }

  set EventMode(value) {
    this._EventMode = value;
  }

  get EventRequire() {
    return this._EventRequire;
  }

  set EventRequire(value) {
    this._EventRequire = value;
  }

}

/**
 * @Author 蕭立品
 * @Description 打包入口
 * @Date 2021-07-06 下午 01:55
 * @Version 0.03
 */
var VERSION = "0.03"; //版本號
/*當前版本號*/

globalThis.TCC_VERSION = VERSION;

exports.AConfigTemplate = AConfigTemplate;
exports.AErrorFrameTemplate = AErrorFrameTemplate;
exports.AGenericTemplate = AGenericTemplate;
exports.ALoadingFrameTemplate = ALoadingFrameTemplate;
exports.ALoadingTemplate = ALoadingTemplate;
exports.ALookAtTemplate = ALookAtTemplate;
exports.AMainGameButtonTemplate = AMainGameButtonTemplate;
exports.AMainGameDoubleButtonTemplate = AMainGameDoubleButtonTemplate;
exports.AMainGameOnlyButtonTemplate = AMainGameOnlyButtonTemplate;
exports.AMainInitTemplate = AMainInitTemplate;
exports.AMenuButtonTemplate = AMenuButtonTemplate;
exports.AMenuDoubleButtonTemplate = AMenuDoubleButtonTemplate;
exports.AMenuOnlyButtonTemplate = AMenuOnlyButtonTemplate;
exports.ARecordButtonTemplate = ARecordButtonTemplate;
exports.ARecordDoubleButtonTemplate = ARecordDoubleButtonTemplate;
exports.ARecordOnlyButtonTemplate = ARecordOnlyButtonTemplate;
exports.ASlotInitializeTemplate = ASlotInitializeTemplate;
exports.ASlotTemplate = ASlotTemplate;
exports.AutoStateChangeNotification = AutoStateChangeNotification;
exports.AutoStateChangeObserver = AutoStateChangeObserver;
exports.ExtendHasLineFreeResult = ExtendHasLineFreeResult;
exports.ExtendHasLineResult = ExtendHasLineResult;
exports.HasLineFreeResult = HasLineFreeResult;
exports.HasLineResult = HasLineResult;
exports.HasLineTableInfo = HasLineTableInfo;
exports.NoLineFreeResult = NoLineFreeResult;
exports.NoLineResult = NoLineResult;
exports.NoLineSlotTemplate = NoLineSlotTemplate;
exports.NoLineTableInfo = NoLineTableInfo;
exports.OverrideComponent = OverrideComponent;
exports.ResponseResultNotification = ResponseResultNotification;
exports.ResponseResultObserver = ResponseResultObserver;
exports.ScrollFocusStateNotification = ScrollFocusStateNotification;
exports.ScrollFocusStateObserver = ScrollFocusStateObserver;
exports.SpeedStateChangeNotification = SpeedStateChangeNotification;
exports.SpeedStateChangeObserver = SpeedStateChangeObserver;
exports.StopNowStateNotification = StopNowStateNotification;
exports.StopNowStateObserver = StopNowStateObserver;
exports.UserMoneyChangeNotification = UserMoneyChangeNotification;
exports.UserMoneyChangeObserver = UserMoneyChangeObserver;
exports.UserTotalBetChangeNotification = UserTotalBetChangeNotification;
exports.UserTotalBetChangeObserver = UserTotalBetChangeObserver;
exports.UserWinPointStateNotification = UserWinPointStateNotification;
exports.UserWinPointStateObserver = UserWinPointStateObserver;
