"use strict";
Object.defineProperty(exports, "__esModule", {value: !0});
var fcc = globalThis.fcc;

function _defineProperty(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n, t
}

class OverrideComponent extends cc.Component {
    constructor() {
        super(), _defineProperty(this, "scheduleTag", void 0), this.scheduleTag = new Array
    }

    getScheduleTag() {
        return this.scheduleTag
    }

    getScheduleAmount() {
        return this.scheduleTag.length
    }

    schedule(t, e, n, r) {
        super.schedule(this.checkScheduleRepeat(t, n), e, n, r), this.scheduleTag.push(t)
    }

    checkScheduleRepeat(t, e) {
        return 0 < e ? (t.prototype = () => {
            --e < 0 && this.unschedule(t), t.apply(this)
        }, t.prototype) : t
    }

    scheduleOnce(t, e) {
        t.prototype = () => {
            this.unschedule(t.prototype), t.apply(this)
        }, this.schedule(t.prototype, 0, 0, e)
    }

    unschedule(t) {
        super.unschedule(this.checkScheduleTag(t));
        t = this.checkScheduleCallFunIndex(t);
        -1 < t && this.scheduleTag.splice(t, 1)
    }

    checkScheduleCallFunIndex(t) {
        var e;
        if (-1 != this.getScheduleTag().indexOf(t)) e = this.scheduleTag.indexOf(t); else {
            if (-1 == this.getScheduleTag().indexOf(t.prototype)) return -1;
            e = this.scheduleTag.indexOf(t.prototype)
        }
        return e
    }

    checkScheduleTag(t) {
        var e = void 0, t = this.checkScheduleCallFunIndex(t);
        return e = -1 < t ? this.scheduleTag[t] : e
    }

    unscheduleAllCallbacks() {
        super.unscheduleAllCallbacks(), this.scheduleTag.length = 0
    }
}

class AGenericTemplate extends OverrideComponent {
    languageSetting() {
    }

    onLoad() {
        this.onCreate()
    }

    start() {
        this.languageSetting()
    }
}

class ACenterTemplate extends AGenericTemplate {
    onLoad() {
        this.initClient(), this.configSetting(), this.audioSetting(), this.processCreate(), this.notificationSetting(), super.onLoad()
    }
}

function _createForOfIteratorHelper(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class AutoStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.AUTO_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e, n) {
        if (0 < this.observer.size) {
            var r, i = _createForOfIteratorHelper(this.observer);
            try {
                for (i.s(); !(r = i.n()).done;) {
                    var o = r.value;
                    o.pushNotification(t, e, n), o.isPermanent || this.unsubscribe(o)
                }
            } catch (t) {
                i.e(t)
            } finally {
                i.f()
            }
        }
    }
}

function _createForOfIteratorHelper$1(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$1(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$1(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$1(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$1(t, e) : void 0
    }
}

function _arrayLikeToArray$1(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.SCROLL_FOCUS_STATE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) {
            var n, r = _createForOfIteratorHelper$1(this.observer);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    i.pushNotification(t, e), i.isPermanent || this.unsubscribe(i)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
}

function _createForOfIteratorHelper$2(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$2(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$2(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$2(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$2(t, e) : void 0
    }
}

function _arrayLikeToArray$2(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class SpeedStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.SPEED_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) {
            var e, n = _createForOfIteratorHelper$2(this.observer);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var r = e.value;
                    r.pushNotification(t), r.isPermanent || this.unsubscribe(r)
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }
    }
}

function _createForOfIteratorHelper$3(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$3(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$3(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$3(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$3(t, e) : void 0
    }
}

function _arrayLikeToArray$3(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class StopNowStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.STOP_NOW
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify() {
        if (0 < this.observer.size) {
            var t, e = _createForOfIteratorHelper$3(this.observer);
            try {
                for (e.s(); !(t = e.n()).done;) {
                    var n = t.value;
                    n.pushNotification(), n.isPermanent || this.unsubscribe(n)
                }
            } catch (t) {
                e.e(t)
            } finally {
                e.f()
            }
        }
    }
}

function _createForOfIteratorHelper$4(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$4(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$4(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$4(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$4(t, e) : void 0
    }
}

function _arrayLikeToArray$4(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class UserMoneyChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.USER_MONEY_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) {
            var e, n = _createForOfIteratorHelper$4(this.observer);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var r = e.value;
                    r.pushNotification(t), r.isPermanent || this.unsubscribe(r)
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }
    }
}

function _createForOfIteratorHelper$5(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$5(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$5(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$5(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$5(t, e) : void 0
    }
}

function _arrayLikeToArray$5(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.USER_BET_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) {
            var n, r = _createForOfIteratorHelper$5(this.observer);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    i.pushNotification(t, e), i.isPermanent || this.unsubscribe(i)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
}

function _createForOfIteratorHelper$6(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$6(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$6(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$6(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$6(t, e) : void 0
    }
}

function _arrayLikeToArray$6(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class UserWinPointStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.USER_GET_WIN
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) {
            var n, r = _createForOfIteratorHelper$6(this.observer);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    i.pushNotification(t, e), i.isPermanent || this.unsubscribe(i)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
}

function _createForOfIteratorHelper$7(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$7(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$7(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$7(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$7(t, e) : void 0
    }
}

function _arrayLikeToArray$7(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class ResponseResultNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.RESPONSE_RESULT
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) {
            var e, n = _createForOfIteratorHelper$7(this.observer);
            try {
                for (n.s(); !(e = n.n()).done;) {
                    var r = e.value;
                    r.pushNotification(t), r.isPermanent || this.unsubscribe(r)
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
        }
    }
}

function _createForOfIteratorHelper$8(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$8(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$8(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$8(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$8(t, e) : void 0
    }
}

function _arrayLikeToArray$8(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class SlotRowEndNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), _defineProperty(this, "TAG_NAME", void 0), this.TAG_NAME = fcc.type.NotificationType.SLOT_ROW_END
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) {
            var n, r = _createForOfIteratorHelper$8(this.observer);
            try {
                for (r.s(); !(n = r.n()).done;) {
                    var i = n.value;
                    i.pushNotification(t, e), i.isPermanent || this.unsubscribe(i)
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        }
    }
}

class AutoStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e, n) {
        super.pushNotification(t, e, n)
    }
}

class ScrollFocusStateObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e) {
        super.pushNotification(t, e)
    }
}

class SpeedStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t) {
        super.pushNotification(t)
    }
}

class StopNowStateObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification() {
        super.pushNotification()
    }
}

class UserMoneyChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t) {
        super.pushNotification(t)
    }
}

class UserTotalBetChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e) {
        super.pushNotification(t, e)
    }
}

class UserWinPointStateObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e) {
        super.pushNotification(t, e)
    }
}

class ResponseResultObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t) {
        super.pushNotification(t)
    }
}

class SlotRowEndObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e) {
        super.pushNotification(t, e)
    }
}

function asyncGeneratorStep(t, e, n, r, i, o, s) {
    try {
        var a = t[o](s), u = a.value
    } catch (t) {
        return void n(t)
    }
    a.done ? e(u) : Promise.resolve(u).then(r, i)
}

function _asyncToGenerator(a) {
    return function () {
        var t = this, s = arguments;
        return new Promise(function (e, n) {
            var r = a.apply(t, s);

            function i(t) {
                asyncGeneratorStep(r, e, n, i, o, "next", t)
            }

            function o(t) {
                asyncGeneratorStep(r, e, n, i, o, "throw", t)
            }

            i(void 0)
        })
    }
}

var undefined$1, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

function wrap(t, e, n, r) {
    e = e && e.prototype instanceof Generator ? e : Generator, e = Object.create(e.prototype), r = new Context(r || []);
    return e._invoke = makeInvokeMethod(t, n, r), e
}

function tryCatch(t, e, n) {
    try {
        return {type: "normal", arg: t.call(e, n)}
    } catch (t) {
        return {type: "throw", arg: t}
    }
}

var GenStateSuspendedStart = "suspendedStart", GenStateSuspendedYield = "suspendedYield",
    GenStateExecuting = "executing", GenStateCompleted = "completed", ContinueSentinel = {};

function Generator() {
}

function GeneratorFunction() {
}

function GeneratorFunctionPrototype() {
}

var IteratorPrototype = {};
IteratorPrototype[iteratorSymbol] = function () {
    return this
};
var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([])));
NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
        t[e] = function (t) {
            return this._invoke(e, t)
        }
    })
}

function isGeneratorFunction(t) {
    t = "function" == typeof t && t.constructor;
    return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
}

function mark(t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, toStringTagSymbol in t || (t[toStringTagSymbol] = "GeneratorFunction")), t.prototype = Object.create(Gp), t
}

function awrap(t) {
    return {__await: t}
}

function AsyncIterator(s, a) {
    var e;
    this._invoke = function (n, r) {
        function t() {
            return new a(function (t, e) {
                !function e(t, n, r, i) {
                    t = tryCatch(s[t], s, n);
                    if ("throw" !== t.type) {
                        var o = t.arg;
                        return (n = o.value) && "object" == typeof n && hasOwn.call(n, "__await") ? a.resolve(n.__await).then(function (t) {
                            e("next", t, r, i)
                        }, function (t) {
                            e("throw", t, r, i)
                        }) : a.resolve(n).then(function (t) {
                            o.value = t, r(o)
                        }, function (t) {
                            return e("throw", t, r, i)
                        })
                    }
                    i(t.arg)
                }(n, r, t, e)
            })
        }

        return e = e ? e.then(t, t) : t()
    }
}

function async(t, e, n, r, i) {
    void 0 === i && (i = Promise);
    var o = new AsyncIterator(wrap(t, e, n, r), i);
    return isGeneratorFunction(e) ? o : o.next().then(function (t) {
        return t.done ? t.value : o.next()
    })
}

function makeInvokeMethod(i, o, s) {
    var a = GenStateSuspendedStart;
    return function (t, e) {
        if (a === GenStateExecuting) throw new Error("Generator is already running");
        if (a === GenStateCompleted) {
            if ("throw" === t) throw e;
            return doneResult()
        }
        for (s.method = t, s.arg = e; ;) {
            var n = s.delegate;
            if (n) {
                var r = maybeInvokeDelegate(n, s);
                if (r) {
                    if (r === ContinueSentinel) continue;
                    return r
                }
            }
            if ("next" === s.method) s.sent = s._sent = s.arg; else if ("throw" === s.method) {
                if (a === GenStateSuspendedStart) throw a = GenStateCompleted, s.arg;
                s.dispatchException(s.arg)
            } else "return" === s.method && s.abrupt("return", s.arg);
            a = GenStateExecuting;
            r = tryCatch(i, o, s);
            if ("normal" === r.type) {
                if (a = s.done ? GenStateCompleted : GenStateSuspendedYield, r.arg !== ContinueSentinel) return {
                    value: r.arg,
                    done: s.done
                }
            } else "throw" === r.type && (a = GenStateCompleted, s.method = "throw", s.arg = r.arg)
        }
    }
}

function maybeInvokeDelegate(t, e) {
    var n = t.iterator[e.method];
    if (n === undefined$1) {
        if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = undefined$1, maybeInvokeDelegate(t, e), "throw" === e.method)) return ContinueSentinel;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
        }
        return ContinueSentinel
    }
    n = tryCatch(n, t.iterator, e.arg);
    if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, ContinueSentinel;
    n = n.arg;
    return n ? n.done ? (e[t.resultName] = n.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = undefined$1), e.delegate = null, ContinueSentinel) : n : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, ContinueSentinel)
}

function pushTryEntry(t) {
    var e = {tryLoc: t[0]};
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
}

function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e
}

function Context(t) {
    this.tryEntries = [{tryLoc: "root"}], t.forEach(pushTryEntry, this), this.reset(!0)
}

function keys(n) {
    var t, r = [];
    for (t in n) r.push(t);
    return r.reverse(), function t() {
        for (; r.length;) {
            var e = r.pop();
            if (e in n) return t.value = e, t.done = !1, t
        }
        return t.done = !0, t
    }
}

function values(e) {
    if (e) {
        var t = e[iteratorSymbol];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
            var n = -1, t = function t() {
                for (; ++n < e.length;) if (hasOwn.call(e, n)) return t.value = e[n], t.done = !1, t;
                return t.value = undefined$1, t.done = !0, t
            };
            return t.next = t
        }
    }
    return {next: doneResult}
}

function doneResult() {
    return {value: undefined$1, done: !0}
}

(GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype).constructor = GeneratorFunction, GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction", defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this
}, defineIteratorMethods(Gp), Gp[toStringTagSymbol] = "Generator", Gp[iteratorSymbol] = function () {
    return this
}, Gp.toString = function () {
    return "[object Generator]"
}, Context.prototype = {
    constructor: Context, reset: function (t) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined$1, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined$1, this.tryEntries.forEach(resetTryEntry), !t) for (var e in this) "t" === e.charAt(0) && hasOwn.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = undefined$1)
    }, stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ("throw" === t.type) throw t.arg;
        return this.rval
    }, dispatchException: function (n) {
        if (this.done) throw n;
        var r = this;

        function t(t, e) {
            return o.type = "throw", o.arg = n, r.next = t, e && (r.method = "next", r.arg = undefined$1), !!e
        }

        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var i = this.tryEntries[e], o = i.completion;
            if ("root" === i.tryLoc) return t("end");
            if (i.tryLoc <= this.prev) {
                var s = hasOwn.call(i, "catchLoc"), a = hasOwn.call(i, "finallyLoc");
                if (s && a) {
                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                } else if (s) {
                    if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                } else {
                    if (!a) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                }
            }
        }
    }, abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc <= this.prev && hasOwn.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                var i = r;
                break
            }
        }
        var o = (i = i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc ? null : i) ? i.completion : {};
        return o.type = t, o.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, ContinueSentinel) : this.complete(o)
    }, complete: function (t, e) {
        if ("throw" === t.type) throw t.arg;
        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), ContinueSentinel
    }, finish: function (t) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), resetTryEntry(n), ContinueSentinel
        }
    }, catch: function (t) {
        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
                var r, i = n.completion;
                return "throw" === i.type && (r = i.arg, resetTryEntry(n)), r
            }
        }
        throw new Error("illegal catch attempt")
    }, delegateYield: function (t, e, n) {
        return this.delegate = {
            iterator: values(t),
            resultName: e,
            nextLoc: n
        }, "next" === this.method && (this.arg = undefined$1), ContinueSentinel
    }
};
var PageChangeType, DayType, _regeneratorRuntime = {
    wrap: wrap,
    isGeneratorFunction: isGeneratorFunction,
    AsyncIterator: AsyncIterator,
    mark: mark,
    awrap: awrap,
    async: async,
    keys: keys,
    values: values
};

class AMainGameButtonTemplate extends AGenericTemplate {
    constructor() {
        super(...arguments), _defineProperty(this, "isShowTotalBetFrame", void 0), _defineProperty(this, "keyboardListener", void 0), _defineProperty(this, "_autoStateChangeObserver", void 0), _defineProperty(this, "nowSpeed", void 0), _defineProperty(this, "isAutoState", void 0), _defineProperty(this, "nowAutoType", void 0), _defineProperty(this, "longTouchTime", void 0), _defineProperty(this, "userMoney", void 0), _defineProperty(this, "_userMoneyChangeObserver", void 0)
    }

    onLoad() {
        this.isShowTotalBetFrame = !1, this.keyboardListener = !1, this.nowAutoType = fcc.configMgr.autoCount, this.longTouchTime = .5, this.nowSpeed = fcc.configMgr.isSpeedUp, this.addNotification(), super.onLoad()
    }

    addNotification() {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).subscribe(this.getAutoStateChangeObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE).subscribe(this.getUserMoneyChangeObserver(), !0)
    }

    startButtonOnTouchStart() {
        this.unschedule(this.longTouchTimer), this.isAutoState ? this.autoNotify(!1, this.nowAutoType) : this.scheduleOnce(this.longTouchTimer, this.longTouchTime)
    }

    longTouchTimer() {
        var e = this;
        return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
            return _regeneratorRuntime.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (e.autoNotify(!0, e.nowAutoType), fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) return t.next = 4, e.startButtonEvent();
                        t.next = 4;
                        break;
                    case 4:
                    case"end":
                        return t.stop()
                }
            }, t)
        }))()
    }

    autoNotify(t, e) {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(t, e, e)
    }

    startButtonOnTouchEnd() {
        var e = this;
        return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
            return _regeneratorRuntime.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (e.unschedule(e.longTouchTimer), e.isAutoState) return t.abrupt("return");
                        t.next = 3;
                        break;
                    case 3:
                        return t.next = 5, e.startButtonEvent();
                    case 5:
                    case"end":
                        return t.stop()
                }
            }, t)
        }))()
    }

    keyboardSpaceTouchStart(t) {
        t.keyCode === cc.macro.KEY.space && (this.keyboardListener || (this.keyboardListener = !0, this.startButtonOnTouchStart()))
    }

    keyboardSpaceTouchEnd(e) {
        var n = this;
        return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
            return _regeneratorRuntime.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        t.t0 = e.keyCode, t.next = t.t0 === cc.macro.KEY.space ? 3 : 7;
                        break;
                    case 3:
                        return t.next = 5, n.startButtonOnTouchEnd();
                    case 5:
                        return n.keyboardListener = !1, t.abrupt("break", 7);
                    case 7:
                    case"end":
                        return t.stop()
                }
            }, t)
        }))()
    }

    getAutoStateChangeObserver() {
        var i = this;
        return this._autoStateChangeObserver || (this._autoStateChangeObserver = new AutoStateChangeObserver(function () {
            var r = _asyncToGenerator(_regeneratorRuntime.mark(function t(e, n, r) {
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            if (i.nowAutoType = r, i.isAutoState = e, i.autoEvent(e, r), e && fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY) return t.next = 6, i.startButtonEvent();
                            t.next = 6;
                            break;
                        case 6:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }));
            return function (t, e, n) {
                return r.apply(this, arguments)
            }
        }(), this)), this._autoStateChangeObserver
    }

    getUserMoneyChangeObserver() {
        return this._userMoneyChangeObserver || (this._userMoneyChangeObserver = new UserMoneyChangeObserver(t => {
            this.userMoney = t
        }, this)), this._userMoneyChangeObserver
    }

    startButtonEvent() {
        var e = this;
        return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
            return _regeneratorRuntime.wrap(function (t) {
                for (; ;) switch (t.prev = t.next) {
                    case 0:
                        if (e.isShowTotalBetFrame) return e.isShowTotalBetFrame = !e.isShowTotalBetFrame, e.totalBetFrameTouchEvent(!1), t.abrupt("return");
                        t.next = 4;
                        break;
                    case 4:
                        if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY && fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) return fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).notify(), t.abrupt("return");
                        t.next = 7;
                        break;
                    case 7:
                        if (e.checkUserPointCanPlayGame()) {
                            t.next = 9;
                            break
                        }
                        return t.abrupt("return");
                    case 9:
                        return e.startEvent(), t.next = 12, fcc.processMgr.play();
                    case 12:
                        e.endEvent();
                    case 13:
                        if (e.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING) {
                            t.next = 0;
                            break
                        }
                    case 14:
                    case"end":
                        return t.stop()
                }
            }, t)
        }))()
    }

    autoButtonEventListener() {
        if (this.unschedule(this.longTouchTimer), this.isShowTotalBetFrame) return this.isShowTotalBetFrame = !this.isShowTotalBetFrame, void this.totalBetFrameTouchEvent(!1);
        this.isAutoState = !this.isAutoState, this.autoNotify(this.isAutoState, this.nowAutoType)
    }

    speedUpButtonEventListener() {
        this.nowSpeed = !this.nowSpeed, fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).notify(this.nowSpeed), this.speedUpEvent(this.nowSpeed)
    }

    totalBetFrameTouchEventListener() {
        fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY ? (this.isShowTotalBetFrame = !this.isShowTotalBetFrame, this.totalBetFrameTouchEvent(this.isShowTotalBetFrame)) : this.warningEvent()
    }

    menuButtonEventListener() {
        fcc.processMgr.gameState == fcc.type.GameStateType.STANDBY ? this.menuEvent() : this.warningEvent()
    }
}

class AMainGameOnlyButtonTemplate extends AMainGameButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButton, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButton, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.menuButton, "menuButtonEventListener", this), super.onLoad()
    }

    startButtonOnEnable() {
        this.startButton.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButton.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }

    startButtonDisable() {
        this.startButton.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButton.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }
}

class AMainGameDoubleButtonTemplate extends AMainGameButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonH, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonV, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonH, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonV, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonH, "menuButtonEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonV, "menuButtonEventListener", this), super.onLoad()
    }

    startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }

    startButtonDisable() {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }
}

class AMenuButtonTemplate extends AGenericTemplate {
    constructor() {
        super(...arguments), _defineProperty(this, "userTotalBetChangeObserver", void 0), _defineProperty(this, "autoStateChangeObserver", void 0), _defineProperty(this, "nowAutoType", void 0)
    }

    onLoad() {
        this.nowAutoType = fcc.configMgr.autoCount, this.addNotification(), super.onLoad()
    }

    addNotification() {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).subscribe(this.getUserTotalBetChangeObserver(), !0)
    }

    musicEventListener() {
        var t = fcc.audioMgr.updateMusicOnMute();
        this.musicEvent(t)
    }

    effectEventListener() {
        var t = fcc.audioMgr.updateEffectOnMute();
        this.effectEvent(t)
    }

    betUpEventListener() {
        var t = this.nowBetIndex + 1;
        t > this.tableInfo.LineBet.length - 1 && (t = 0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, t)
    }

    betDownEventListener() {
        var t = this.nowBetIndex - 1;
        t < 0 && (t = this.tableInfo.LineBet.length - 1), fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_BET_CHANGE).notify(this.nowBetIndex, t)
    }

    getUserTotalBetChangeObserver() {
        return this.userTotalBetChangeObserver || (this.userTotalBetChangeObserver = new UserTotalBetChangeObserver((t, e) => {
            this.nowBetIndex = e, this.totalBetChangeEvent(t, e)
        }, this)), this.userTotalBetChangeObserver
    }

    autoButtonEventListener(t, e) {
        this.autoEvent(this.nowAutoType, e), fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(!0, this.nowAutoType, e), this.nowAutoType = e
    }
}

class AMenuDoubleButtonTemplate extends AMenuButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.musicButtonH, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.musicButtonV, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.effectButtonH, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.effectButtonV, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButtonH, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButtonV, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButtonH, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButtonV, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.auto50ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto50ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto100ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto100ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto500ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto500ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto1000ButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.auto1000ButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.autoFreeEndButtonH, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoFreeEndButtonV, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButtonH, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButtonV, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButtonH, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButtonV, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButtonH, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButtonV, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButtonH, "descriptionPageEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButtonV, "descriptionPageEvent", this), super.onLoad()
    }
}

class AMenuOnlyButtonTemplate extends AMenuButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.musicButton, "musicEventListener", this), fcc.global.Button.addButtonEvent(this.effectButton, "effectEventListener", this), fcc.global.Button.addButtonEvent(this.betUpButton, "betUpEventListener", this), fcc.global.Button.addButtonEvent(this.betDownButton, "betDownEventListener", this), fcc.global.Button.addButtonEvent(this.auto50Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_50), fcc.global.Button.addButtonEvent(this.auto100Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_100), fcc.global.Button.addButtonEvent(this.auto500Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_500), fcc.global.Button.addButtonEvent(this.auto1000Button, "autoButtonEventListener", this, fcc.type.AutoType.AUTO_1000), fcc.global.Button.addButtonEvent(this.autoFreeEndButton, "autoButtonEventListener", this, fcc.type.AutoType.FREE_END), fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this, fcc.type.AutoType.AUTO), fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goHomeButton, "goHomeTouchEvent", this), fcc.global.Button.addButtonEvent(this.recordButton, "recordPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.settingButton, "settingPageTouchEvent", this), fcc.global.Button.addButtonEvent(this.descriptionPageButton, "descriptionPageEvent", this), super.onLoad()
    }
}

!function (t) {
    t.NEXT = "NEXT", t.PREVIOUS = "PREVIOUS"
}(PageChangeType = PageChangeType || {}), function (t) {
    t.ONE_DAY = "ONE_DAY", t.FIVE_DAY = "FIVE_DAY", t.TEN_DAY = "TEN_DAY"
}(DayType = DayType || {});

class ARecordButtonTemplate extends AGenericTemplate {
    onLoad() {
        super.onLoad()
    }
}

class ARecordDoubleButtonTemplate extends ARecordButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.goBackButtonH, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.goBackButtonV, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.oneDayRecordButtonH, "daysRecordTouchEventH", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.oneDayRecordButtonV, "daysRecordTouchEventV", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonH, "daysRecordTouchEventH", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButtonV, "daysRecordTouchEventV", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButtonH, "daysRecordTouchEventH", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButtonV, "daysRecordTouchEventV", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.nextRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.nextRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.previousRecordButtonH, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), fcc.global.Button.addButtonEvent(this.previousRecordButtonV, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), super.onLoad()
    }
}

class ARecordOnlyButtonTemplate extends ARecordButtonTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.goBackButton, "goBackTouchEvent", this), fcc.global.Button.addButtonEvent(this.oneDayRecordButton, "daysRecordTouchEventH", this, DayType.ONE_DAY), fcc.global.Button.addButtonEvent(this.fiveDayRecordButton, "daysRecordTouchEventH", this, DayType.FIVE_DAY), fcc.global.Button.addButtonEvent(this.tenDayRecordButton, "daysRecordTouchEventH", this, DayType.TEN_DAY), fcc.global.Button.addButtonEvent(this.nextRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.NEXT), fcc.global.Button.addButtonEvent(this.previousRecordButton, "nextAndLastButtonTouchEvent", this, PageChangeType.PREVIOUS), super.onLoad()
    }
}

class AErrorFrameTemplate extends AGenericTemplate {
    onLoad() {
        fcc.global.Button.addButtonEvent(this.errorButton, "errorButtonTouchEvent", this), super.onLoad()
    }
}

class ALoadingTemplate extends AGenericTemplate {
    constructor() {
        super(), _defineProperty(this, "_isGetTableInfoResponse", void 0), this._isGetTableInfoResponse = !1
    }

    onLoad() {
        this.responseNotification(), fcc.global.Button.addButtonEvent(this.intoMainGameButton, "intoMainGameButtonEvent", this), super.onLoad()
    }

    start() {
        super.start(), this.sceneStyle(), this.loadExternalScript(), this.loadResources(), this.loadAssetBundle(), this.updateProgressTextAnimation()
    }

    responseNotification() {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).subscribe(new ResponseResultObserver(t => {
            t == fcc.type.ServerEventType.TABLE_INFO && (this._isGetTableInfoResponse = !0)
        }, this), !1)
    }

    get isGetTableInfoResponse() {
        return this._isGetTableInfoResponse
    }
}

class ALoadingFrameTemplate extends AGenericTemplate {
    constructor() {
        super(...arguments), _defineProperty(this, "progressValue", void 0), _defineProperty(this, "timeOut", void 0), _defineProperty(this, "addProgressValue", void 0), _defineProperty(this, "timer", void 0)
    }

    onLoad() {
        this.loadingInitialize(), super.onLoad()
    }

    loadingInitialize() {
        this.loadingDialogNode.active = !0, this.loadingDialogNode.opacity = 255, this.timer = null, this.progressText.string = "", this.progressValue = 0, this.timeOut = 50, this.addProgressValue = .005
    }

    runProgress(e) {
        return this.loadingInitialize(), new Promise(t => {
            this.checkHasRes(e, t) && this.progressTimer("", e, t)
        })
    }

    progressTimer(t, e, n) {
        this.timer = window.setInterval(() => {
            1 < this.progressValue && (this.progressValue = 0), 3 < t.length && (t = ""), this.progressText.string = t, this.progressBar.progress = this.progressValue, this.progressValue = this.progressValue + this.progressValue, t += ".", 1 == fcc.loadMgr.secondaryLoadState.get(e) && (1 <= this.progressValue && this.closeLoadingDiaLog(n), .1 != this.addProgressValue && (this.addProgressValue = .05))
        }, this.timeOut)
    }

    closeLoadingDiaLog(t) {
        cc.tween(this.loadingDialogNode).to(.2, {opacity: 0}).call(() => {
            this.loadingDialogNode.active = !1, t()
        })
    }

    checkHasRes(t, e) {
        return fcc.loadMgr.secondaryLoadState.has(t) ? 1 != fcc.loadMgr.secondaryLoadState.get(t) || (this.loadingDialogNode.active = !1, e(), !1) : (fcc.errorMgr.executeError(fcc.type.ErrorType.UNDEFINED_FW, "".concat(t, "該無該資源")), this.loadingDialogNode.active = !1, e(), !1)
    }
}

class ALookAtTemplate extends AGenericTemplate {
    constructor() {
        super(...arguments), _defineProperty(this, "_scrollFocusStateObserver", void 0)
    }

    onLoad() {
        this.addNotification(), super.onLoad()
    }

    addNotification() {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).subscribe(this.getScrollFocusStateObserver(), !0)
    }

    getScrollFocusStateObserver() {
        return this._scrollFocusStateObserver || (this._scrollFocusStateObserver = new ScrollFocusStateObserver((t, e) => {
            e ? this.allLookAtEffect[t].node.active || this.showLookAtEffect(t) : this.allLookAtEffect[t].node.active && this.removeLookAtEffect(t)
        }, this)), this._scrollFocusStateObserver
    }
}

function __decorate(t, e, n, r) {
    var i, o = arguments.length, s = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r); else for (var a = t.length - 1; 0 <= a; a--) (i = t[a]) && (s = (o < 3 ? i(s) : 3 < o ? i(e, n, s) : i(e, n)) || s);
    return 3 < o && s && Object.defineProperty(e, n, s), s
}

function _createForOfIteratorHelper$9(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$9(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$9(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$9(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$9(t, e) : void 0
    }
}

function _arrayLikeToArray$9(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

var ccclass = cc._decorator.ccclass, LINE_CONTAINER = "LINE_CONTAINER",
    AWinLinTemplate = class extends AGenericTemplate {
        constructor() {
            super(...arguments), _defineProperty(this, "winLinAllPosition", void 0), _defineProperty(this, "allWinLine", void 0), _defineProperty(this, "isStop", void 0), _defineProperty(this, "vector", void 0), _defineProperty(this, "angle", void 0), _defineProperty(this, "runLineSpeed", void 0), _defineProperty(this, "containerIndex", void 0), _defineProperty(this, "_container", void 0)
        }

        onCreate() {
            this.containerIndex = -1, this.runLineSpeed = .2, this.angle = -90, this.vector = cc.Vec2.UP, this.isStop = !1
        }

        start() {
            super.start(), this.buildWinLineContainer(), this._container = this.lineSprite.node.parent.getChildByName(LINE_CONTAINER), this.winLinAllPosition = this.initWinLinPosition(), this.allWinLine = new Array
        }

        restoreLines(t) {
            if (t) {
                var e, n = _createForOfIteratorHelper$9(this.allWinLine[t].values());
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var r = e.value;
                        r.active = !1, r.height = 0
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
            } else {
                var i, o = _createForOfIteratorHelper$9(this._container.children);
                try {
                    for (o.s(); !(i = o.n()).done;) {
                        var s = i.value;
                        s.active = !1, s.height = 0
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
            }
        }

        buildWinLineContainer() {
            var t = this.lineSprite.node.parent, e = new cc.Node;
            e.name = LINE_CONTAINER, t.addChild(e, this.containerIndex, LINE_CONTAINER)
        }

        play(e) {
            var n = this;
            return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, n.runLine(e);
                        case 2:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }))()
        }

        runLine(s) {
            var a = this;
            return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
                var e, n, r, i, o;
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            e = s.length, n = 0;
                        case 2:
                            for (n == e && (n = 0), a.showWinPoint(n), r = s[n], i = 0; i < r.length + 1; i++) o = null !== (o = r[i - 1]) && void 0 !== o ? o : r[0], a.initLinePosition(n, i, o);
                            return t.next = 8, a.runLineToAsync(n, r);
                        case 8:
                            return t.next = 10, a.hideNode(n);
                        case 10:
                            n++;
                        case 11:
                            if (!a.isStop) {
                                t.next = 2;
                                break
                            }
                        case 12:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }))()
        }

        playAll(e) {
            var n = this;
            return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return n.showWinPoint(), t.next = 3, n.runAllLine(e);
                        case 3:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }))()
        }

        runAllLine(o) {
            var s = this;
            return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
                var e, n, r, i;
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            e = 0;
                        case 1:
                            if (!(e < o.length)) {
                                t.next = 13;
                                break
                            }
                            for (n = o[e], r = 0; r < n.length + 1; r++) i = null !== (i = n[r - 1]) && void 0 !== i ? i : n[0], s.initLinePosition(e, r, i);
                            if (e == o.length - 1) return t.next = 7, s.runLineToAsync(e, n);
                            t.next = 9;
                            break;
                        case 7:
                            t.next = 10;
                            break;
                        case 9:
                            s.runLineToAsync(e, n).then();
                        case 10:
                            e++, t.next = 1;
                            break;
                        case 13:
                            return t.next = 15, s.hideNode();
                        case 15:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }))()
        }

        initLinePosition(t, e, n) {
            var r = 0 == e ? this.gridRow[0].x - this.gridRow[0].width / 2 : this.winLinAllPosition[n].keys().next().value,
                n = this.winLinAllPosition[n].values().next().value;
            this.allWinLine[t].get(e).x = r, this.allWinLine[t].get(e).y = n
        }

        getPosition(t, e, n) {
            var r, i = this.winLinAllPosition[n].values().next().value;
            return 0 == e ? (r = this.gridRow[0].x - this.gridRow[0].width / 2, cc.v2(r, i)) : e == this.gridRow.length + 1 ? (e = this.gridRow[this.gridRow.length - 1].x + this.gridRow[this.gridRow.length - 1].width / 2, cc.v2(e, i)) : cc.v2(this.winLinAllPosition[n].keys().next().value, i)
        }

        runLineToAsync(e, n) {
            var r = this;
            return _asyncToGenerator(_regeneratorRuntime.mark(function t() {
                return _regeneratorRuntime.wrap(function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.abrupt("return", new Promise(t => {
                                r.lineAndGridAnimationLoop(e, n, t)
                            }));
                        case 1:
                        case"end":
                            return t.stop()
                    }
                }, t)
            }))()
        }

        lineAndGridAnimationLoop(t, e, n) {
            var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                i = null !== (o = e[r - 1]) && void 0 !== o ? o : e[0],
                o = null !== (o = e[r]) && void 0 !== o ? o : e[e.length - 1], i = this.getPosition(t, r, i),
                o = this.getPosition(t, r + 1, o);
            this.allWinLine[t].get(r).angle = this.getAngleBetweenTwoPoints(i, o);
            o = this.getDistanceBetweenTwoPoints(i, o);
            this.allWinLine[t].get(r).active = !0, cc.tween(this.allWinLine[t].get(r)).to(this.runLineSpeed, {height: o}).call(() => {
                this.isStop || r == this.gridRow.length ? n() : (this.showWinGrid(e[r], t), r++, this.lineAndGridAnimationLoop(t, e, n, r))
            }).start()
        }

        copyWinLinToContainer(t) {
            for (var e = 0; e < t; e++) {
                for (var n = new Map, r = 0; r < this.gridRow.length + 1; r++) {
                    var i = cc.instantiate(this.lineSprite.node);
                    i.active = !1, this._container.addChild(i, e, "".concat("LINE").concat(e, "_").concat(r)), n.set(r, i)
                }
                this.allWinLine.push(n)
            }
            return this
        }

        initWinLinPosition() {
            var t, e = new Array, n = _createForOfIteratorHelper$9(this.gridRow);
            try {
                for (n.s(); !(t = n.n()).done;) for (var r = t.value, i = r.x, o = r.y + this.gridHeight, s = 0; s < this.gridCont; s++) {
                    var a = new Map;
                    a.set(i, o), e.push(a), o -= this.gridHeight
                }
            } catch (t) {
                n.e(t)
            } finally {
                n.f()
            }
            return e
        }

        calculationAverageSpeed() {
        }

        getDistanceBetweenTwoPoints(t, e) {
            var n = Math.pow(e.x - t.x, 2), t = Math.pow(e.y - t.y, 2);
            return Math.sqrt(n + t) + 1
        }

        getAngleBetweenTwoPoints(t, e) {
            var n = e.x - t.x, t = e.y - t.y;
            return cc.v2(n, t).signAngle(this.vector) * (180 / Math.PI) * -1
        }

        clear() {
            cc.Tween.stopAllByTarget(this._container), this.allWinLine.length = 0, this.lineSprite.node.parent.getChildByName(LINE_CONTAINER).destroyAllChildren()
        }

        test(t) {
            for (var e = new Array, n = 0; n < t; n++) {
                for (var r = [], i = 0; i < this.gridRow.length; i++) {
                    var o = Math.floor(Math.random() * this.gridCont + i * this.gridCont);
                    r.push(o)
                }
                e.push(r)
            }
            return e
        }

        get container() {
            return this._container
        }
    }, AWinLinTemplate$1 = AWinLinTemplate = __decorate([ccclass], AWinLinTemplate);

class AMainInitTemplate extends AGenericTemplate {
    onLoad() {
        this.setHistoryDetail(), this.prefabInstantiate(), super.onLoad()
    }
}

class ASlotTemplate {
    constructor(t, e) {
        _defineProperty(this, "styleData", void 0), _defineProperty(this, "isSlotImmediateStop", void 0), _defineProperty(this, "isSpeedUp", void 0), _defineProperty(this, "speedRatio", void 0), _defineProperty(this, "stopNowStateObserver", void 0), _defineProperty(this, "speedStateChangeObserver", void 0), _defineProperty(this, "responseResultObserver", void 0), _defineProperty(this, "isResultOK", void 0), this.isSpeedUp = e.isSpeedUp, this.styleData = t, this.speedRatio = this.isSpeedUp ? t.speedUpMultiple : 1, this.isResultOK = !1, this.addNotification()
    }

    addNotification() {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).subscribe(this.getStopNowStateObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.SPEED_CHANGE).subscribe(this.getSpeedStateChangeObserver(), !0), fcc.notificationMgr().getNotification(fcc.type.NotificationType.RESPONSE_RESULT).subscribe(this.getResponseResultObserver(), !0)
    }

    getStopNowStateObserver() {
        return this.isSlotImmediateStop || (this.stopNowStateObserver = new StopNowStateObserver(() => {
            this.isSlotImmediateStop = !0
        }, this)), this.stopNowStateObserver
    }

    getSpeedStateChangeObserver() {
        return this.speedStateChangeObserver || (this.speedStateChangeObserver = new SpeedStateChangeObserver(t => {
            this.speedRatio = t ? this.styleData.speedUpMultiple : 1
        }, this)), this.speedStateChangeObserver
    }

    getResponseResultObserver() {
        return this.responseResultObserver || (this.responseResultObserver = new ResponseResultObserver(t => {
            t != fcc.type.ServerEventType.BET_RESULT && t != fcc.type.ServerEventType.FREE_SPIN_RESULT || (this.isResultOK = !0)
        }, this)), this.responseResultObserver
    }
}

function _createForOfIteratorHelper$a(t, e) {
    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
    if (!n) {
        if (Array.isArray(t) || (n = _unsupportedIterableToArray$a(t)) || e && t && "number" == typeof t.length) {
            n && (t = n);
            var r = 0, e = function () {
            };
            return {
                s: e, n: function () {
                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                }, e: function (t) {
                    throw t
                }, f: e
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var i, o = !0, s = !1;
    return {
        s: function () {
            n = n.call(t)
        }, n: function () {
            var t = n.next();
            return o = t.done, t
        }, e: function (t) {
            s = !0, i = t
        }, f: function () {
            try {
                o || null == n.return || n.return()
            } finally {
                if (s) throw i
            }
        }
    }
}

function _unsupportedIterableToArray$a(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray$a(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return "Map" === (n = "Object" === n && t.constructor ? t.constructor.name : n) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$a(t, e) : void 0
    }
}

function _arrayLikeToArray$a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r
}

class NormalSlotTemplate extends ASlotTemplate {
    constructor(t, e) {
        super(t, e), _defineProperty(this, "slotTurnCount", void 0), _defineProperty(this, "slotGirdSpeed", void 0), _defineProperty(this, "slotRowGridCount", void 0), _defineProperty(this, "slotGridHeight", void 0), _defineProperty(this, "freeIconCount", void 0), _defineProperty(this, "speedUpMultiple", void 0), _defineProperty(this, "slotColumnToTween", void 0), _defineProperty(this, "gridNodeToMap", void 0), _defineProperty(this, "gridSpriteToMap", void 0), _defineProperty(this, "gridImg", void 0), _defineProperty(this, "isSlotEnd", void 0), _defineProperty(this, "rowData", void 0), _defineProperty(this, "normalResult", void 0), _defineProperty(this, "freeResult", void 0), _defineProperty(this, "lookAtCount", void 0), _defineProperty(this, "rowTurnCount", void 0), t && (this.styleData = t, this.slotTurnCount = t.slotTurnCount, this.slotGirdSpeed = t.slotGirdSpeed, this.slotRowGridCount = t.slotRowGridCount, this.slotGridHeight = t.slotGridHeight, this.speedUpMultiple = t.speedUpMultiple, this.slotColumnToTween = t.slotColumnToTween, this.gridNodeToMap = t.gridNodeToMap, this.gridSpriteToMap = t.gridSpriteToMap, this.gridImg = t.gridImg, this.normalResult = t.normalResult, this.freeResult = t.freeResult, this.rowData = new Array, this.lookAtCount = t.lookAtCount, this.isSlotEnd = [], this.rowData.push(this.slotRowGridCount, this.getCalculateSlotHeight()), this.rowTurnCount = new Array, this.initializeState())
    }

    getCalculateSlotHeight() {
        return this.slotRowGridCount * this.slotGridHeight
    }

    sineInSlot() {
        var o = Math.floor(this.styleData.slotGridHeight / 2);
        return new Promise(t => {
            var e, n = 0, r = _createForOfIteratorHelper$a(this.slotColumnToTween);
            try {
                for (r.s(); !(e = r.n()).done;) {
                    var i = e.value;
                    cc.tween(i).to(1.5 * this.slotGirdSpeed, {y: i.y + o}, {easing: "quadOut"}).by(this.slotGirdSpeed, {y: -o}).call(() => {
                        ++n === this.slotColumnToTween.length && t()
                    }).start()
                }
            } catch (t) {
                r.e(t)
            } finally {
                r.f()
            }
        })
    }

    runSlotAnimation() {
        return new Promise(t => {
            var e = this.slotColumnToTween.length;
            fcc.audioMgr.effectPlay("SlotTurn");
            for (var n = 0; n < e; n++) {
                if (n == e - 1) return void this.executeSlotAnimation(n, t);
                this.executeSlotAnimation(n)
            }
        })
    }

    executeSlotAnimation(t, e) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
            r = this.slotGirdSpeed * this.slotRowGridCount / this.speedRatio, i = this.slotColumnToTween[t];
        cc.tween(i).to(r, {y: i.y - this.rowData[1]}).call(() => {
            0 != t && this.checkLookAt(t) && this.isSlotEnd[t - 1] && (this.isSpeedUp || this.notifyLookAtEvent(!0, t)), this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(t), t), this.isResultOK ? this.isCanStop(t, e) || (n++, 0 == t && n == this.getSlotTurnCount(t) ? (this.showAnswer(t), this.isSlotEnd[t] = !0) : 0 != t && this.isSlotEnd[t - 1] && n == this.getSlotTurnCount(t) ? (this.showAnswer(t, e), this.isSlotEnd[t] = !0, this.checkLookAt(t) && (this.isSpeedUp || this.notifyLookAtEvent(!1, t))) : this.executeSlotAnimation(t, e, n)) : this.executeSlotAnimation(t, e, n)
        }).start()
    }

    getSlotTurnCount(t) {
        var e = this.isSpeedUp ? this.slotTurnCount : this.checkLookAt(t) ? ((e = 0) != t && (e = this.rowTurnCount[t - 1]), this.lookAtCount + e) : this.slotTurnCount + t;
        return this.rowTurnCount[t] || (this.rowTurnCount[t] = e), e
    }

    notifyLookAtEvent(t, e) {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.SCROLL_FOCUS_STATE).notify(e, t)
    }

    isCanStop(t, e) {
        return !!this.isSlotImmediateStop && (t == this.slotColumnToTween.length - 1 ? this.showAnswer(t, e) : this.showAnswer(t), this.isSlotEnd[t] = !0, this.checkLookAt(t) && this.notifyLookAtEvent(!1, t), !0)
    }

    updateGridPositionAndRandomImg(t, e) {
        for (var n, r = t.length - 1, i = 0; i < this.rowData[0]; i++) n = this.gridSpriteToMap.get(e)[r], this.gridSpriteToMap.get(e).unshift(n), this.gridSpriteToMap.get(e).pop(), n = Math.floor(Math.random() * this.gridImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridImg.get(String(n)), t[r].y = t[0].y + this.slotGridHeight, t.unshift(t[r]), t.pop()
    }

    showAnswer(t, e) {
        this.updateGridAnswer(t);
        var n = this.slotGirdSpeed * this.rowData[0] / this.speedRatio, r = this.slotColumnToTween[t];
        cc.tween(r).to(n, {y: r.y - this.rowData[1]}).call(() => {
            this.updateGridPositionAndRandomImg(this.gridNodeToMap.get(t), t), this.sineOutAnimation(t, e)
        }).start()
    }

    checkLookAt(t) {
        var e = (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING ? this.freeResult : this.normalResult).LookAt;
        return !!e[t]
    }

    sineOutAnimation(t, e) {
        (this.isSpeedUp || this.isSlotImmediateStop) && t != this.slotColumnToTween.length - 1 || fcc.audioMgr.effectPlay("SlotStop"), t === this.slotColumnToTween.length - 1 && fcc.audioMgr.effectStop("SlotTurn");
        var n = Math.floor(this.styleData.slotGridHeight / 2), r = this.slotColumnToTween[t], i = !1;
        (this.isSlotImmediateStop || this.isSpeedUp) && (i = !0), cc.tween(r).to(this.slotGirdSpeed, {y: r.y - n}).by(6 * this.slotGirdSpeed, {y: +n}, {easing: "bounceOut"}).call(() => {
            this.checkFreeIconToMusic(t), fcc.notificationMgr().getNotification(fcc.type.NotificationType.SLOT_ROW_END).notify(t, i), t === this.slotColumnToTween.length - 1 && e()
        }).start()
    }

    checkFreeIconToMusic(t) {
        for (var e = (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING ? this.freeResult : this.normalResult).Grid, n = t * this.slotRowGridCount, r = n + this.slotRowGridCount; n < r; n++) 10 == e[n] && (this.freeIconCount++, this.isSpeedUp && this.isSlotImmediateStop || fcc.audioMgr.effectPlay("getFreeIcon".concat(this.freeIconCount)));
        this.isSpeedUp && 1 <= this.freeIconCount && t == this.slotColumnToTween.length - 1 && fcc.audioMgr.effectPlay("getFreeIcon".concat(this.freeIconCount))
    }

    updateGridAnswer(t) {
        for (var e = (fcc.processMgr.gameState === fcc.type.GameStateType.FREEING ? this.freeResult : this.normalResult).Grid, n = t * this.slotRowGridCount, r = n + this.slotRowGridCount, i = 0; n < r; n++) {
            var o = String(e[n]);
            this.gridSpriteToMap.get(t)[i].spriteFrame = this.gridImg.get(o), i++
        }
    }

    initializeState() {
        if (this.isSlotImmediateStop = !1, this.isSpeedUp = 1 < this.speedRatio, this.freeIconCount = 0, this.isResultOK = !1, this.rowTurnCount.length = 0, this.isSlotEnd) for (var t = 0; t < this.slotColumnToTween.length; t++) this.isSlotEnd[t] = !1; else for (var e = 0; e < this.slotColumnToTween.length; e++) this.isSlotEnd.push(!1)
    }
}

class SlotBurredImgTemplate extends NormalSlotTemplate {
    constructor(t, e) {
        super(t, e), _defineProperty(this, "gridBurredImg", void 0), this.gridBurredImg = t.gridBurredImg
    }

    updateGridPositionAndRandomImg(t, e) {
        for (var n, r = t.length - 1, i = 0; i < this.rowData[0]; i++) n = this.gridSpriteToMap.get(e)[r], this.gridSpriteToMap.get(e).unshift(n), this.gridSpriteToMap.get(e).pop(), n = Math.floor(Math.random() * this.gridBurredImg.size), this.gridSpriteToMap.get(e)[0].spriteFrame = this.gridBurredImg.get(String(n)), t[r].y = t[0].y + this.slotGridHeight, t.unshift(t[r]), t.pop()
    }
}

class ASlotInitializeTemplate extends AGenericTemplate {
    onLoad() {
        super.onLoad()
    }

    start() {
        super.start(), this.slotStyleSetting()
    }
}

class ExtendHasLineFreeResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_StickySymbol", void 0), _defineProperty(this, "_StickyChange", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array, this._StickySymbol = 0, this._StickyChange = new Array, this._LineWin = new Array, this._LineGrid = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array, this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get StickySymbol() {
        return this._StickySymbol
    }

    set StickySymbol(t) {
        this._StickySymbol = t
    }

    get StickyChange() {
        return this._StickyChange
    }

    set StickyChange(t) {
        this._StickyChange = t
    }

    get LineWin() {
        return this._LineWin
    }

    set LineWin(t) {
        this._LineWin = t
    }

    get LineGrid() {
        return this._LineGrid
    }

    set LineGrid(t) {
        this._LineGrid = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get Count() {
        return this._Count
    }

    set Count(t) {
        this._Count = t
    }

    get FreeSpinWin() {
        return this._FreeSpinWin
    }

    set FreeSpinWin(t) {
        this._FreeSpinWin = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get FreeToFree() {
        return this._FreeToFree
    }

    set FreeToFree(t) {
        this._FreeToFree = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }

    get FreeLevelWin() {
        return this._FreeLevelWin
    }

    set FreeLevelWin(t) {
        this._FreeLevelWin = t
    }
}

class HasLineFreeResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array, this._ChangeState = 0, this._Change = new Array, this._LineWin = new Array, this._LineGrid = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array, this._LevelWin = 0, this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get ChangeState() {
        return this._ChangeState
    }

    set ChangeState(t) {
        this._ChangeState = t
    }

    get Change() {
        return this._Change
    }

    set Change(t) {
        this._Change = t
    }

    get LineWin() {
        return this._LineWin
    }

    set LineWin(t) {
        this._LineWin = t
    }

    get LineGrid() {
        return this._LineGrid
    }

    set LineGrid(t) {
        this._LineGrid = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get Count() {
        return this._Count
    }

    set Count(t) {
        this._Count = t
    }

    get FreeSpinWin() {
        return this._FreeSpinWin
    }

    set FreeSpinWin(t) {
        this._FreeSpinWin = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get LevelWin() {
        return this._LevelWin
    }

    set LevelWin(t) {
        this._LevelWin = t
    }

    get FreeToFree() {
        return this._FreeToFree
    }

    set FreeToFree(t) {
        this._FreeToFree = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }

    get FreeLevelWin() {
        return this._FreeLevelWin
    }

    set FreeLevelWin(t) {
        this._FreeLevelWin = t
    }
}

class NoLineFreeResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_GridWin", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_Count", void 0), _defineProperty(this, "_FreeSpinWin", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_FreeToFree", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_FreeLevelWin", void 0), this._State = 0, this._Grid = new Array, this._ChangeState = 0, this._Change = new Array, this._GridWin = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._Count = 0, this._FreeSpinWin = 0, this._LookAt = new Array, this._LevelWin = 0, this._FreeToFree = 0, this._BaseLevelWin = 0, this._FreeLevelWin = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get ChangeState() {
        return this._ChangeState
    }

    set ChangeState(t) {
        this._ChangeState = t
    }

    get Change() {
        return this._Change
    }

    set Change(t) {
        this._Change = t
    }

    get GridWin() {
        return this._GridWin
    }

    set GridWin(t) {
        this._GridWin = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get Count() {
        return this._Count
    }

    set Count(t) {
        this._Count = t
    }

    get FreeSpinWin() {
        return this._FreeSpinWin
    }

    set FreeSpinWin(t) {
        this._FreeSpinWin = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get LevelWin() {
        return this._LevelWin
    }

    set LevelWin(t) {
        this._LevelWin = t
    }

    get FreeToFree() {
        return this._FreeToFree
    }

    set FreeToFree(t) {
        this._FreeToFree = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }

    get FreeLevelWin() {
        return this._FreeLevelWin
    }

    set FreeLevelWin(t) {
        this._FreeLevelWin = t
    }
}

class ExtendHasLineResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_SecretState", void 0), _defineProperty(this, "_SecretChange", void 0), _defineProperty(this, "_SecretSymbol", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_BonusEventCount", void 0), this._State = 0, this._Grid = new Array, this._SecretState = 0, this._SecretChange = new Array, this._SecretSymbol = 0, this._LineWin = new Array, this._LineGrid = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array, this._UserPointBefore = 0, this._BaseLevelWin = 0, this._BonusEventCount = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get SecretState() {
        return this._SecretState
    }

    set SecretState(t) {
        this._SecretState = t
    }

    get SecretChange() {
        return this._SecretChange
    }

    set SecretChange(t) {
        this._SecretChange = t
    }

    get SecretSymbol() {
        return this._SecretSymbol
    }

    set SecretSymbol(t) {
        this._SecretSymbol = t
    }

    get LineWin() {
        return this._LineWin
    }

    set LineWin(t) {
        this._LineWin = t
    }

    get LineGrid() {
        return this._LineGrid
    }

    set LineGrid(t) {
        this._LineGrid = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get FreeSpinCount() {
        return this._FreeSpinCount
    }

    set FreeSpinCount(t) {
        this._FreeSpinCount = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get UserPointBefore() {
        return this._UserPointBefore
    }

    set UserPointBefore(t) {
        this._UserPointBefore = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }

    get BonusEventCount() {
        return this._BonusEventCount
    }

    set BonusEventCount(t) {
        this._BonusEventCount = t
    }
}

class HasLineResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_LineWin", void 0), _defineProperty(this, "_LineGrid", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_BaseLevelWin", void 0), this._State = 0, this._Grid = new Array, this._Change = new Array, this._ChangeState = 0, this._LineWin = new Array, this._LineGrid = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array, this._UserPointBefore = 0, this._BaseLevelWin = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get Change() {
        return this._Change
    }

    set Change(t) {
        this._Change = t
    }

    get ChangeState() {
        return this._ChangeState
    }

    set ChangeState(t) {
        this._ChangeState = t
    }

    get LineWin() {
        return this._LineWin
    }

    set LineWin(t) {
        this._LineWin = t
    }

    get LineGrid() {
        return this._LineGrid
    }

    set LineGrid(t) {
        this._LineGrid = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get FreeSpinCount() {
        return this._FreeSpinCount
    }

    set FreeSpinCount(t) {
        this._FreeSpinCount = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get UserPointBefore() {
        return this._UserPointBefore
    }

    set UserPointBefore(t) {
        this._UserPointBefore = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }
}

class NoLineResult {
    constructor() {
        _defineProperty(this, "_State", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_ChangeState", void 0), _defineProperty(this, "_Change", void 0), _defineProperty(this, "_GridWin", void 0), _defineProperty(this, "_TotalWinPoint", void 0), _defineProperty(this, "_UserPointAfter", void 0), _defineProperty(this, "_GameState", void 0), _defineProperty(this, "_FreeSpinCount", void 0), _defineProperty(this, "_LookAt", void 0), _defineProperty(this, "_UserPointBefore", void 0), _defineProperty(this, "_LevelWin", void 0), _defineProperty(this, "_BaseLevelWin", void 0), _defineProperty(this, "_BonusEventCount", void 0), this._State = 0, this._Grid = new Array, this._ChangeState = 0, this._Change = new Array, this._GridWin = new Array, this._TotalWinPoint = 0, this._UserPointAfter = 0, this._GameState = 0, this._FreeSpinCount = 0, this._LookAt = new Array, this._UserPointBefore = 0, this._LevelWin = 0, this._BaseLevelWin = 0, this._BonusEventCount = 0
    }

    get State() {
        return this._State
    }

    set State(t) {
        this._State = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get ChangeState() {
        return this._ChangeState
    }

    set ChangeState(t) {
        this._ChangeState = t
    }

    get Change() {
        return this._Change
    }

    set Change(t) {
        this._Change = t
    }

    get GridWin() {
        return this._GridWin
    }

    set GridWin(t) {
        this._GridWin = t
    }

    get TotalWinPoint() {
        return this._TotalWinPoint
    }

    set TotalWinPoint(t) {
        this._TotalWinPoint = t
    }

    get UserPointAfter() {
        return this._UserPointAfter
    }

    set UserPointAfter(t) {
        this._UserPointAfter = t
    }

    get GameState() {
        return this._GameState
    }

    set GameState(t) {
        this._GameState = t
    }

    get FreeSpinCount() {
        return this._FreeSpinCount
    }

    set FreeSpinCount(t) {
        this._FreeSpinCount = t
    }

    get LookAt() {
        return this._LookAt
    }

    set LookAt(t) {
        this._LookAt = t
    }

    get UserPointBefore() {
        return this._UserPointBefore
    }

    set UserPointBefore(t) {
        this._UserPointBefore = t
    }

    get LevelWin() {
        return this._LevelWin
    }

    set LevelWin(t) {
        this._LevelWin = t
    }

    get BaseLevelWin() {
        return this._BaseLevelWin
    }

    set BaseLevelWin(t) {
        this._BaseLevelWin = t
    }

    get BonusEventCount() {
        return this._BonusEventCount
    }

    set BonusEventCount(t) {
        this._BonusEventCount = t
    }
}

class HasLineTableInfo {
    constructor() {
        _defineProperty(this, "_IsLines", void 0), _defineProperty(this, "_BetTimes", void 0), _defineProperty(this, "_Line", void 0), _defineProperty(this, "_PayTable", void 0), _defineProperty(this, "_LineGridPos", void 0), _defineProperty(this, "_LineBet", void 0), _defineProperty(this, "_LineTotalBet", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_UserPoint", void 0), _defineProperty(this, "_LevelWinPoint", void 0), _defineProperty(this, "_EventMode", void 0), _defineProperty(this, "_EventRequire", void 0), _defineProperty(this, "_DefaultBetIndex", void 0), this._IsLines = 0, this._BetTimes = 0, this._Line = "", this._PayTable = {}, this._LineGridPos = {}, this._LineBet = new Array, this._LineTotalBet = new Array, this._Grid = new Array, this._UserPoint = 0, this._LevelWinPoint = new Array, this._EventMode = 0, this._EventRequire = 0, this._DefaultBetIndex = 0
    }

    get IsLines() {
        return this._IsLines
    }

    set IsLines(t) {
        this._IsLines = t
    }

    get BetTimes() {
        return this._BetTimes
    }

    set BetTimes(t) {
        this._BetTimes = t
    }

    get Line() {
        return this._Line
    }

    set Line(t) {
        this._Line = t
    }

    get PayTable() {
        return this._PayTable
    }

    set PayTable(t) {
        this._PayTable = t
    }

    get LineGridPos() {
        return this._LineGridPos
    }

    set LineGridPos(t) {
        this._LineGridPos = t
    }

    get LineBet() {
        return this._LineBet
    }

    set LineBet(t) {
        this._LineBet = t
    }

    get LineTotalBet() {
        return this._LineTotalBet
    }

    set LineTotalBet(t) {
        this._LineTotalBet = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get UserPoint() {
        return this._UserPoint
    }

    set UserPoint(t) {
        this._UserPoint = t
    }

    get LevelWinPoint() {
        return this._LevelWinPoint
    }

    set LevelWinPoint(t) {
        this._LevelWinPoint = t
    }

    get DefaultBetIndex() {
        return this._DefaultBetIndex
    }

    set DefaultBetIndex(t) {
        this._DefaultBetIndex = t
    }

    get EventMode() {
        return this._EventMode
    }

    set EventMode(t) {
        this._EventMode = t
    }

    get EventRequire() {
        return this._EventRequire
    }

    set EventRequire(t) {
        this._EventRequire = t
    }
}

class NoLineTableInfo {
    constructor() {
        _defineProperty(this, "_IsLines", void 0), _defineProperty(this, "_BetTimes", void 0), _defineProperty(this, "_Line", void 0), _defineProperty(this, "_PayTable", void 0), _defineProperty(this, "_LineBet", void 0), _defineProperty(this, "_LineTotalBet", void 0), _defineProperty(this, "_Grid", void 0), _defineProperty(this, "_UserPoint", void 0), _defineProperty(this, "_LevelWinPoint", void 0), _defineProperty(this, "_EventMode", void 0), _defineProperty(this, "_EventRequire", void 0), _defineProperty(this, "DefaultBetIndex", void 0), this._IsLines = 0, this._BetTimes = 0, this._Line = "", this._PayTable = {}, this._LineBet = new Array, this._LineTotalBet = new Array, this._Grid = new Array, this._UserPoint = 0, this._LevelWinPoint = new Array, this._EventMode = 0, this._EventRequire = 0, this.DefaultBetIndex = 0
    }

    get IsLines() {
        return this._IsLines
    }

    set IsLines(t) {
        this._IsLines = t
    }

    get BetTimes() {
        return this._BetTimes
    }

    set BetTimes(t) {
        this._BetTimes = t
    }

    get Line() {
        return this._Line
    }

    set Line(t) {
        this._Line = t
    }

    get PayTable() {
        return this._PayTable
    }

    set PayTable(t) {
        this._PayTable = t
    }

    get LineBet() {
        return this._LineBet
    }

    set LineBet(t) {
        this._LineBet = t
    }

    get LineTotalBet() {
        return this._LineTotalBet
    }

    set LineTotalBet(t) {
        this._LineTotalBet = t
    }

    get Grid() {
        return this._Grid
    }

    set Grid(t) {
        this._Grid = t
    }

    get UserPoint() {
        return this._UserPoint
    }

    set UserPoint(t) {
        this._UserPoint = t
    }

    get LevelWinPoint() {
        return this._LevelWinPoint
    }

    set LevelWinPoint(t) {
        this._LevelWinPoint = t
    }

    get EventMode() {
        return this._EventMode
    }

    set EventMode(t) {
        this._EventMode = t
    }

    get EventRequire() {
        return this._EventRequire
    }

    set EventRequire(t) {
        this._EventRequire = t
    }
}

var VERSION = "0.04";
globalThis.TCC_VERSION = VERSION, exports.ACenterTemplate = ACenterTemplate, exports.AErrorFrameTemplate = AErrorFrameTemplate, exports.AGenericTemplate = AGenericTemplate, exports.ALoadingFrameTemplate = ALoadingFrameTemplate, exports.ALoadingTemplate = ALoadingTemplate, exports.ALookAtTemplate = ALookAtTemplate, exports.AMainGameButtonTemplate = AMainGameButtonTemplate, exports.AMainGameDoubleButtonTemplate = AMainGameDoubleButtonTemplate, exports.AMainGameOnlyButtonTemplate = AMainGameOnlyButtonTemplate, exports.AMainInitTemplate = AMainInitTemplate, exports.AMenuButtonTemplate = AMenuButtonTemplate, exports.AMenuDoubleButtonTemplate = AMenuDoubleButtonTemplate, exports.AMenuOnlyButtonTemplate = AMenuOnlyButtonTemplate, exports.ARecordButtonTemplate = ARecordButtonTemplate, exports.ARecordDoubleButtonTemplate = ARecordDoubleButtonTemplate, exports.ARecordOnlyButtonTemplate = ARecordOnlyButtonTemplate, exports.ASlotInitializeTemplate = ASlotInitializeTemplate, exports.ASlotTemplate = ASlotTemplate, exports.AWinLinTemplate = AWinLinTemplate$1, exports.AutoStateChangeNotification = AutoStateChangeNotification, exports.AutoStateChangeObserver = AutoStateChangeObserver, exports.ExtendHasLineFreeResult = ExtendHasLineFreeResult, exports.ExtendHasLineResult = ExtendHasLineResult, exports.HasLineFreeResult = HasLineFreeResult, exports.HasLineResult = HasLineResult, exports.HasLineTableInfo = HasLineTableInfo, exports.NoLineFreeResult = NoLineFreeResult, exports.NoLineResult = NoLineResult, exports.NoLineTableInfo = NoLineTableInfo, exports.NormalSlotTemplate = NormalSlotTemplate, exports.OverrideComponent = OverrideComponent, exports.ResponseResultNotification = ResponseResultNotification, exports.ResponseResultObserver = ResponseResultObserver, exports.ScrollFocusStateNotification = ScrollFocusStateNotification, exports.ScrollFocusStateObserver = ScrollFocusStateObserver, exports.SlotBurredImgTemplate = SlotBurredImgTemplate, exports.SlotRowEndNotification = SlotRowEndNotification, exports.SlotRowEndObserver = SlotRowEndObserver, exports.SpeedStateChangeNotification = SpeedStateChangeNotification, exports.SpeedStateChangeObserver = SpeedStateChangeObserver, exports.StopNowStateNotification = StopNowStateNotification, exports.StopNowStateObserver = StopNowStateObserver, exports.UserMoneyChangeNotification = UserMoneyChangeNotification, exports.UserMoneyChangeObserver = UserMoneyChangeObserver, exports.UserTotalBetChangeNotification = UserTotalBetChangeNotification, exports.UserTotalBetChangeObserver = UserTotalBetChangeObserver, exports.UserWinPointStateNotification = UserWinPointStateNotification, exports.UserWinPointStateObserver = UserWinPointStateObserver, exports.fcc = fcc;
