
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/Procress/GameProcess.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd30a60CfN5Hp5WI+8SeT5VG', 'GameProcess');
// script/Framework/Process/Procress/GameProcess.ts

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
 * @Description 任何遊戲皆可用流程
 * @Date 2021-05-14 下午 03:07
 * @Version 1.0
 */
var GameProcess = /** @class */ (function () {
    function GameProcess(container) {
        this._executionContainer = container;
        this.process = new Set();
    }
    GameProcess.prototype.onCreate = function () {
        this.process.add(this._executionContainer.onCreate);
        return this;
    };
    GameProcess.prototype.onExecution = function () {
        this.process.add(this._executionContainer.onExecution);
        return this;
    };
    GameProcess.prototype.onEnd = function () {
        this.process.add(this._executionContainer.onEnd);
        return this;
    };
    GameProcess.prototype.onChangeStatus = function () {
        this.process.add(this._executionContainer.onChangeStatus);
        return this;
    };
    GameProcess.prototype.start = function () {
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
    return GameProcess;
}());
exports.default = GameProcess;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXFByb2NyZXNzXFxHYW1lUHJvY2Vzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSDtJQWdCSSxxQkFBWSxTQUE4QjtRQUN0QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBNkMsQ0FBQztRQUN6RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0lBQ2xELENBQUM7SUFFRCw4QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBRUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXZELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxvQ0FBYyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzFELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFWSwyQkFBSyxHQUFsQjt1Q0FBc0IsT0FBTzs7Ozs7Ozt3QkFDTixLQUFBLFNBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQTs7Ozt3QkFBdEIsTUFBTTt3QkFDWCxxQkFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFBOzt3QkFBNUMsU0FBNEMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFcEQ7SUFDTCxrQkFBQztBQUFELENBaERBLEFBZ0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24g5Lu75L2V6YGK5oiy55qG5Y+v55So5rWB56iLXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTQg5LiL5Y2IIDAzOjA3XHJcbiAqIEBWZXJzaW9uIDEuMFxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVByb2Nlc3MgaW1wbGVtZW50cyBJR2FtZVByb2Nlc3Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y5L2/55So6ICF5rWB56iLXHJcbiAgICAgKiBAdHlwZSB7U2V0PEZ1bmN0aW9uPn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJvY2VzczogU2V0PCgpID0+IFByb21pc2U8dm9pZD58dm9pZD47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmtYHnqIvln7fooYxcclxuICAgICAqIEB0eXBlIHtJR2FtZVByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2V4ZWN1dGlvbkNvbnRhaW5lcjogSUdhbWVQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBJRXhlY3V0aW9uQ29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyID0gY29udGFpbmVyIGFzIElHYW1lUHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucHJvY2VzcyA9IG5ldyBTZXQ8KCkgPT4gUHJvbWlzZTx2b2lkPj4oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNyZWF0ZSgpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnByb2Nlc3MuYWRkKHRoaXMuX2V4ZWN1dGlvbkNvbnRhaW5lci5vbkNyZWF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25FeGVjdXRpb24oKTogdGhpcyB7XHJcblxyXG4gICAgICAgIHRoaXMucHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uRXhlY3V0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmQoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzLmFkZCh0aGlzLl9leGVjdXRpb25Db250YWluZXIub25FbmQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlU3RhdHVzKCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzcy5hZGQodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyLm9uQ2hhbmdlU3RhdHVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgZm9yIChsZXQgbWV0aG9kIG9mIHRoaXMucHJvY2Vzcykge1xyXG4gICAgICAgICAgICBhd2FpdCBtZXRob2QuYXBwbHkodGhpcy5fZXhlY3V0aW9uQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=