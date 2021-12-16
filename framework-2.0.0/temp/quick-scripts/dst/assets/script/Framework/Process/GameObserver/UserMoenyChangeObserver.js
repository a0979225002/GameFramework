
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameObserver/UserMoenyChangeObserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '269c7ULkGJFqoF7DUHPZ3oh', 'UserMoenyChangeObserver');
// script/Framework/Process/GameObserver/UserMoenyChangeObserver.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 當有用戶金額變更,發送推波事件進來時,將會將該事件推播給綁定者
 * @Date 2021-05-20 下午 03:02
 * @Version 1.0
 */
var UserMoneyChangeObserver = /** @class */ (function () {
    function UserMoneyChangeObserver(callFun, self) {
        this._isPermanent = false;
        this.self = self;
        this.callFun = callFun;
    }
    UserMoneyChangeObserver.prototype.pushNotification = function (money) {
        this.callFun.call(this.self, money);
    };
    Object.defineProperty(UserMoneyChangeObserver.prototype, "isPermanent", {
        get: function () {
            return this._isPermanent;
        },
        set: function (value) {
            this._isPermanent = value;
        },
        enumerable: false,
        configurable: true
    });
    return UserMoneyChangeObserver;
}());
exports.default = UserMoneyChangeObserver;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVPYnNlcnZlclxcVXNlck1vZW55Q2hhbmdlT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7R0FLRztBQUNIO0lBTUksaUNBQVksT0FBZ0MsRUFBRSxJQUFJO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxzQkFBSSxnREFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFnQixLQUFjO1lBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBS0wsOEJBQUM7QUFBRCxDQXZCQSxBQXVCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOeVtuacieeUqOaItumHkemhjeiuiuabtCznmbzpgIHmjqjms6Lkuovku7bpgLLkvobmmYIs5bCH5pyD5bCH6Kmy5LqL5Lu25o6o5pKt57Wm57aB5a6a6ICFXHJcbiAqIEBEYXRlIDIwMjEtMDUtMjAg5LiL5Y2IIDAzOjAyXHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1vbmV5Q2hhbmdlT2JzZXJ2ZXIgaW1wbGVtZW50cyBJT2JzZXJ2ZXIge1xyXG4gICAgcHJpdmF0ZSBfaXNQZXJtYW5lbnQ6IGJvb2xlYW47XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzZWxmOiBhbnk7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNhbGxGdW46IChtb25leTogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNhbGxGdW46IChtb25leTogbnVtYmVyKSA9PiB2b2lkLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5faXNQZXJtYW5lbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgICAgIHRoaXMuY2FsbEZ1biA9IGNhbGxGdW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaE5vdGlmaWNhdGlvbihtb25leTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsRnVuLmNhbGwodGhpcy5zZWxmLCBtb25leSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUGVybWFuZW50KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1Blcm1hbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaXNQZXJtYW5lbnQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9pc1Blcm1hbmVudCA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19