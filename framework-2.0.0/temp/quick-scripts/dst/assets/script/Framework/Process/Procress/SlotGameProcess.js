
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/Procress/SlotGameProcess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef0b4wbg+VB5pMLrS7Xak6P', 'SlotGameProcess');
// script/Framework/Process/Procress/SlotGameProcess.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description 老虎機流程
 * @Date 2021-05-14 下午 03:07
 * @Version 1.0
 */
var SlotGameProcess = /** @class */ (function () {
    function SlotGameProcess(container) {
        this._executionContainer = container;
        this.process = new Set(); //初始化,存放要執行的方法
    }
    SlotGameProcess.prototype.onCustomizeStart = function () {
        this.process.add(this._executionContainer.onCustomizeStart);
        return this;
    };
    SlotGameProcess.prototype.onSineInGrid = function () {
        this.process.add(this._executionContainer.onSineInGrid);
        return this;
    };
    SlotGameProcess.prototype.onRunning = function () {
        this.process.add(this._executionContainer.onRunGrid);
        return this;
    };
    SlotGameProcess.prototype.onSineOutGrid = function () {
        this.process.add(this._executionContainer.onSineOutGrid);
        return this;
    };
    SlotGameProcess.prototype.onCustomizeEnd = function () {
        this.process.add(this._executionContainer.onCustomizeEnd);
        return this;
    };
    SlotGameProcess.prototype.onShowAnswer = function () {
        this.process.add(this._executionContainer.onShowAnswer);
        return this;
    };
    SlotGameProcess.prototype.onChangeStatus = function () {
        this.process.add(this._executionContainer.onChangeStatus);
        return this;
    };
    SlotGameProcess.prototype.start = function () {
        return __awaiter(this, void 0, Promise, function () {
            var _a, _b, method, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.process), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        method = _b.value;
                        return [4 /*yield*/, method.apply(this._executionContainer)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return SlotGameProcess;
}());
exports.default = SlotGameProcess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXFByb2NyZXNzXFxTbG90R2FtZVByb2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztHQUtHO0FBQ0g7SUFhSSx5QkFBWSxTQUEyQztRQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBNkMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBYyxjQUFjO0lBQ3pELENBQUM7SUFFTSwwQ0FBZ0IsR0FBdkI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUU1RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sc0NBQVksR0FBbkI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFeEQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLG1DQUFTLEdBQWhCO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXJELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUVJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRU0sd0NBQWMsR0FBckI7UUFFSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFMUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLHNDQUFZLEdBQW5CO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXhELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx3Q0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFWSwrQkFBSyxHQUFsQjt1Q0FBc0IsT0FBTzs7Ozs7Ozt3QkFDTixLQUFBLFNBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQTs7Ozt3QkFBdEIsTUFBTTt3QkFDWCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcEQ7SUFDTCxzQkFBQztBQUFELENBdEVBLEFBc0VDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g6ICB6JmO5qmf5rWB56iLXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjA3XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdEdhbWVQcm9jZXNzIGltcGxlbWVudHMgSVNsb3RHYW1lUHJvY2VzcyB7XHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOS9v+eUqOiAhea1geeoi1xyXG4gICAgICogQHR5cGUge1NldDxGdW5jdGlvbj59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb2Nlc3M6IFNldDwoKSA9PiBQcm9taXNlPHZvaWQ+fHZvaWQ+O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqIvln7fooYxcclxuICAgICAqIEB0eXBlIHtJU2xvdFByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4ZWN1dGlvbkNvbnRhaW5lcjogSVNsb3RQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IElTbG90UHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyID0gY29udGFpbmVyIGFzIElTbG90UHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBTZXQoKTsgICAgICAgICAgICAgIC8v5Yid5aeL5YyWLOWtmOaUvuimgeWft+ihjOeahOaWueazlVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkN1c3RvbWl6ZVN0YXJ0KCk6IHRoaXMge1xyXG5cclxuICAgICAgICB0aGlzLnByb2Nlc3MuYWRkKHRoaXMuX2V4ZWN1dGlvbkNvbnRhaW5lci5vbkN1c3RvbWl6ZVN0YXJ0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2luZUluR3JpZCgpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25TaW5lSW5HcmlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUnVubmluZygpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25SdW5HcmlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2luZU91dEdyaWQoKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uU2luZU91dEdyaWQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DdXN0b21pemVFbmQoKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uQ3VzdG9taXplRW5kKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2hvd0Fuc3dlcigpOiB0aGlzIHtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25TaG93QW5zd2VyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTdGF0dXMoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25DaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBmb3IgKGxldCBtZXRob2Qgb2YgdGhpcy5wcm9jZXNzKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IG1ldGhvZC5hcHBseSh0aGlzLl9leGVjdXRpb25Db250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==