
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Test/GameProcess/FreeOpenProcess.test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1880faK7CBOM4WYWAJOJvW0', 'FreeOpenProcess.test');
// Test/GameProcess/FreeOpenProcess.test.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @Author XIAO-LI-PIN
 * @Description (測試)free開場動畫顯示狀態
 * @Date 2021-06-01 下午 05:43
 * @Version 1.0
 */
var GameState_1 = require("../../script/Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../script/Framework/Process/SlotGameManager");
var FreeOpenController_1 = require("../../script/MainGameScript/Controller/FreeOpenController");
var FreeOpenProcessTest = /** @class */ (function () {
    function FreeOpenProcessTest() {
    }
    FreeOpenProcessTest.prototype.onCreate = function () {
        return Promise.resolve(undefined);
    };
    FreeOpenProcessTest.prototype.onExecution = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SlotGameManager_1.default.instance.gameState = GameState_1.GameState.PLAYING;
                        return [4 /*yield*/, FreeOpenController_1.default.instance.showFreeOpeningAnimation(20)];
                    case 1:
                        _a.sent();
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FreeOpenProcessTest.prototype.onEnd = function () {
        SlotGameManager_1.default.instance.gameState = GameState_1.GameState.STANDBY;
        return Promise.resolve(undefined);
    };
    FreeOpenProcessTest.prototype.onChangeStatus = function () {
    };
    return FreeOpenProcessTest;
}());
exports.default = FreeOpenProcessTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdFxcR2FtZVByb2Nlc3NcXEZyZWVPcGVuUHJvY2Vzcy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0dBS0c7QUFDSCwyRUFBd0U7QUFDeEUsa0ZBQTZFO0FBQzdFLGdHQUEyRjtBQUUzRjtJQUFBO0lBcUJBLENBQUM7SUFuQkcsc0NBQVEsR0FBUjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQseUNBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFNLE9BQU87Ozs7d0JBQ2xDLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQzt3QkFDdkQscUJBQU0sNEJBQWtCLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQyxFQUFBOzt3QkFBOUQsU0FBOEQsQ0FBQzt3QkFDL0QsT0FBTyxFQUFFLENBQUM7Ozs7YUFDYixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQUssR0FBTDtRQUNJLHlCQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBUyxDQUFDLE9BQU8sQ0FBQztRQUN2RCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRDQUFjLEdBQWQ7SUFDQSxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQXJCQSxBQXFCQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uICjmuKzoqaYpZnJlZemWi+WgtOWLleeVq+mhr+ekuueLgOaFi1xyXG4gKiBARGF0ZSAyMDIxLTA2LTAxIOS4i+WNiCAwNTo0M1xyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmltcG9ydCB7R2FtZVN0YXRlfSBmcm9tIFwiLi4vLi4vc2NyaXB0L0ZyYW1ld29yay9Qcm9jZXNzL0VudW0vR2FtZVN0YXRlXCI7XHJcbmltcG9ydCBTbG90R2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvUHJvY2Vzcy9TbG90R2FtZU1hbmFnZXJcIjtcclxuaW1wb3J0IEZyZWVPcGVuQ29udHJvbGxlciBmcm9tIFwiLi4vLi4vc2NyaXB0L01haW5HYW1lU2NyaXB0L0NvbnRyb2xsZXIvRnJlZU9wZW5Db250cm9sbGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlT3BlblByb2Nlc3NUZXN0IGltcGxlbWVudHMgSUdhbWVQcm9jZWR1cmVFeGVjdXRpb25Db250YWluZXIge1xyXG5cclxuICAgIG9uQ3JlYXRlKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkV4ZWN1dGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS5nYW1lU3RhdGUgPSBHYW1lU3RhdGUuUExBWUlORztcclxuICAgICAgICAgICAgYXdhaXQgRnJlZU9wZW5Db250cm9sbGVyLmluc3RhbmNlLnNob3dGcmVlT3BlbmluZ0FuaW1hdGlvbigyMCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlNUQU5EQlk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlU3RhdHVzKCkge1xyXG4gICAgfVxyXG59Il19