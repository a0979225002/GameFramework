class OverrideComponent extends cc.Component {
    constructor() {
        super(), this.scheduleTag = new Array
    }

    getScheduleTag() {
        return this.scheduleTag
    }

    getScheduleAmount() {
        return this.scheduleTag.length
    }

    schedule(t, e, s, o) {
        super.schedule(this.checkScheduleRepeat(t, s), e, s, o), this.scheduleTag.push(t)
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
        let e;
        if (-1 != this.getScheduleTag().indexOf(t)) e = this.scheduleTag.indexOf(t); else {
            if (-1 == this.getScheduleTag().indexOf(t.prototype)) return -1;
            e = this.scheduleTag.indexOf(t.prototype)
        }
        return e
    }

    checkScheduleTag(t) {
        let e = void 0;
        t = this.checkScheduleCallFunIndex(t);
        return -1 < t && (e = this.scheduleTag[t]), e
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

class AutoStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.AUTO_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e, s) {
        if (0 < this.observer.size) for (var o of this.observer) o.pushNotification(t, e, s), o.isPermanent || this.unsubscribe(o)
    }
}

class ScrollFocusStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.SCROLL_FOCUS_STATE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) for (var s of this.observer) s.pushNotification(t, e), s.isPermanent || this.unsubscribe(s)
    }
}

class SpeedStateChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.SPEED_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) for (var e of this.observer) e.pushNotification(t), e.isPermanent || this.unsubscribe(e)
    }
}

class StopNowStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.SCENE_DIRECTION_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify() {
        if (0 < this.observer.size) for (var t of this.observer) t.pushNotification(), t.isPermanent || this.unsubscribe(t)
    }
}

class UserMoneyChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.USER_MONEY_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) for (var e of this.observer) e.pushNotification(t), e.isPermanent || this.unsubscribe(e)
    }
}

class UserTotalBetChangeNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.USER_BET_CHANGE
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) for (var s of this.observer) s.pushNotification(t, e), s.isPermanent || this.unsubscribe(s)
    }
}

class UserWinPointStateNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.USER_GET_WIN
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t, e) {
        if (0 < this.observer.size) for (var s of this.observer) s.pushNotification(t, e), s.isPermanent || this.unsubscribe(s)
    }
}

class ResponseResultNotification extends fcc.ABS.ABaseNotification {
    constructor() {
        super(), this.TAG_NAME = fcc.type.NotificationType.RESPONSE_RESULT
    }

    subscribe(t, e) {
        super.subscribe(t, e)
    }

    notify(t) {
        if (0 < this.observer.size) for (var e of this.observer) e.pushNotification(t), e.isPermanent || this.unsubscribe(e)
    }
}

class AutoStateChangeObserver extends fcc.ABS.ABaseObserver {
    constructor(t, e) {
        super(t, e)
    }

    pushNotification(t, e, s) {
        super.pushNotification(t, e, s)
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

function __awaiter(t, c, r, a) {
    return new (r = r || Promise)(function (s, e) {
        function o(t) {
            try {
                n(a.next(t))
            } catch (t) {
                e(t)
            }
        }

        function i(t) {
            try {
                n(a.throw(t))
            } catch (t) {
                e(t)
            }
        }

        function n(t) {
            var e;
            t.done ? s(t.value) : ((e = t.value) instanceof r ? e : new r(function (t) {
                t(e)
            })).then(o, i)
        }

        n((a = a.apply(t, c || [])).next())
    })
}

class AMainGameButtonTemplate extends AGenericTemplate {
    onLoad() {
        this.isShowTotalBetFrame = !1, this.keyboardListener = !1, this.nowAutoType = fcc.configMgr.autoCount, this.longTouchTime = .5, this.nowSpeed = fcc.configMgr.isSpeedUp, this.addNotification(), this.makeTotalBetButtonToListener(), this.onCreate()
    }

    start() {
        this.languageSetting()
    }

    addNotification() {
        fcc.notificationMgr().hasNotification(fcc.type.NotificationType.AUTO_CHANGE) ? fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).subscribe(this.getAutoStateChangeObserver(), !0) : fcc.errorMgr.executeError(fcc.type.ErrorType.TEMPLATE_FW, "你尚未綁定AutoStateChangeNotification"), fcc.notificationMgr().hasNotification(fcc.type.NotificationType.USER_MONEY_CHANGE) ? fcc.notificationMgr().getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE).subscribe(this.getUserMoneyChangeObserver(), !0) : fcc.errorMgr.executeError(fcc.type.ErrorType.TEMPLATE_FW, "你尚未綁定UserMoneyChangeNotification")
    }

    startButtonOnTouchStart() {
        this.unschedule(this.longTouchTimer), this.isAutoState ? this.autoNotify(!1, this.nowAutoType) : this.scheduleOnce(this.longTouchTimer, this.longTouchTime)
    }

    longTouchTimer() {
        return __awaiter(this, void 0, void 0, function* () {
            this.autoNotify(!0, this.nowAutoType), yield this.startButtonEvent()
        })
    }

    autoNotify(t, e) {
        fcc.notificationMgr().getNotification(fcc.type.NotificationType.AUTO_CHANGE).notify(t, e, e)
    }

    startButtonOnTouchEnd() {
        return __awaiter(this, void 0, void 0, function* () {
            this.unschedule(this.longTouchTimer), yield this.startButtonEvent()
        })
    }

    keyboardSpaceTouchStart(t) {
        t.keyCode === cc.macro.KEY.space && (this.keyboardListener || (this.keyboardListener = !0, this.startButtonOnTouchStart()))
    }

    keyboardSpaceTouchEnd(t) {
        return __awaiter(this, void 0, void 0, function* () {
            t.keyCode === cc.macro.KEY.space && (yield this.startButtonOnTouchEnd(), this.keyboardListener = !1)
        })
    }

    getAutoStateChangeObserver() {
        return this._autoStateChangeObserver || (this._autoStateChangeObserver = new AutoStateChangeObserver((t, e, s) => __awaiter(this, void 0, void 0, function* () {
            this.nowAutoType = s, this.isAutoState = t, this.autoEvent(t, s), t && (yield this.startButtonEvent())
        }), this)), this._autoStateChangeObserver
    }

    getUserMoneyChangeObserver() {
        return this._userMoneyChangeObserver || (this._userMoneyChangeObserver = new UserMoneyChangeObserver(t => {
            this.userMoney = t
        }, this)), this._userMoneyChangeObserver
    }

    startButtonEvent() {
        return __awaiter(this, void 0, void 0, function* () {
            do {
                if (this.isShowTotalBetFrame) return this.isShowTotalBetFrame = !this.isShowTotalBetFrame, void this.totalBetFrameTouchEvent(!1);
                if (fcc.processMgr.gameState != fcc.type.GameStateType.STANDBY && fcc.processMgr.gameState != fcc.type.GameStateType.FREEING) return void fcc.notificationMgr().getNotification(fcc.type.NotificationType.STOP_NOW).notify();
                var t = this.userBetPoint.LineBet, t = this.tableInfo.LineTotalBet[t];
                if (this.userMoney - t < 0) return void fcc.errorMgr.serverError(!1, fcc.languageMgr.getText("S_9003"))
            } while (this.startEvent(), yield fcc.processMgr.play(), this.endEvent(), this.isAutoState || fcc.processMgr.gameState === fcc.type.GameStateType.FREEING)
        })
    }

    autoButtonEventListener() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.unschedule(this.longTouchTimer), this.isShowTotalBetFrame ? (this.isShowTotalBetFrame = !this.isShowTotalBetFrame, void this.totalBetFrameTouchEvent(!1)) : (this.isAutoState = !this.isAutoState, void this.autoNotify(this.isAutoState, this.nowAutoType))
        })
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
        fcc.global.Button.addButtonEvent(this.startButton, "startButtonEventListener", this), fcc.global.Button.addButtonEvent(this.autoButton, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButton, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButton, "betSelectionButtonEventListener", this), fcc.global.Button.addButtonEvent(this.menuButton, "menuButtonEventListener", this)
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
        super.onLoad(), fcc.global.Button.addButtonEvent(this.autoButtonH, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.autoButtonV, "autoButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonH, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.speedUpButtonV, "speedUpButtonEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonH, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.betSelectionButtonV, "totalBetFrameTouchEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonH, "menuButtonEventListener", this), fcc.global.Button.addButtonEvent(this.menuButtonV, "menuButtonEventListener", this)
    }

    startButtonOnEnable() {
        this.startButtonH.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.on(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }

    startButtonDisable() {
        this.startButtonH.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_START, this.startButtonOnTouchStart, this), this.startButtonH.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), this.startButtonV.node.off(cc.Node.EventType.TOUCH_END, this.startButtonOnTouchEnd, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.keyboardSpaceTouchStart, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.keyboardSpaceTouchEnd, this)
    }
}

export {
    AGenericTemplate,
    AMainGameButtonTemplate,
    AMainGameDoubleButtonTemplate,
    AMainGameOnlyButtonTemplate,
    AutoStateChangeNotification,
    AutoStateChangeObserver,
    OverrideComponent,
    ResponseResultNotification,
    ResponseResultObserver,
    ScrollFocusStateNotification,
    ScrollFocusStateObserver,
    SpeedStateChangeNotification,
    SpeedStateChangeObserver,
    StopNowStateNotification,
    StopNowStateObserver,
    UserMoneyChangeNotification,
    UserMoneyChangeObserver,
    UserTotalBetChangeNotification,
    UserTotalBetChangeObserver,
    UserWinPointStateNotification,
    UserWinPointStateObserver
};