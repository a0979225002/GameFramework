
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Test/GameProcess/FreeEndProcess.test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6f74XKtMtMWa4k9ejjVEdk', 'FreeEndProcess.test');
// Test/GameProcess/FreeEndProcess.test.ts

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
var FreeEndController_1 = require("../../script/MainGameScript/Controller/FreeEndController");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-01 下午 05:50
 * @Version 1.0
 */
var FreeEndProcessTest = /** @class */ (function () {
    function FreeEndProcessTest() {
    }
    FreeEndProcessTest.prototype.onCreate = function () {
        return Promise.resolve(undefined);
    };
    FreeEndProcessTest.prototype.onExecution = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, FreeEndController_1.default.instance.showFreeEnd(1500000.579, 4)];
                    case 1:
                        _a.sent();
                        cc.log("我結束?");
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    FreeEndProcessTest.prototype.onEnd = function () {
        return Promise.resolve(undefined);
    };
    FreeEndProcessTest.prototype.onChangeStatus = function () {
    };
    return FreeEndProcessTest;
}());
exports.default = FreeEndProcessTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdFxcR2FtZVByb2Nlc3NcXEZyZWVFbmRQcm9jZXNzLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RkFBeUY7QUFFekY7Ozs7O0dBS0c7QUFDSDtJQUFBO0lBb0JBLENBQUM7SUFsQkcscUNBQVEsR0FBUjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsd0NBQVcsR0FBWDtRQUFBLGlCQU1DO1FBTEcsT0FBTyxJQUFJLE9BQU8sQ0FBTyxVQUFNLE9BQU87Ozs0QkFDbEMscUJBQU0sMkJBQWlCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUE7O3dCQUE1RCxTQUE0RCxDQUFDO3dCQUM3RCxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dCQUNkLE9BQU8sRUFBRSxDQUFDOzs7O2FBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFLLEdBQUw7UUFDSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDJDQUFjLEdBQWQ7SUFDQSxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZyZWVFbmRDb250cm9sbGVyIGZyb20gXCIuLi8uLi9zY3JpcHQvTWFpbkdhbWVTY3JpcHQvQ29udHJvbGxlci9GcmVlRW5kQ29udHJvbGxlclwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIFRPRE9cclxuICogQERhdGUgMjAyMS0wNi0wMSDkuIvljYggMDU6NTBcclxuICogQFZlcnNpb24gMS4wXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVlRW5kUHJvY2Vzc1Rlc3QgaW1wbGVtZW50cyBJR2FtZVByb2NlZHVyZUV4ZWN1dGlvbkNvbnRhaW5lciB7XHJcblxyXG4gICAgb25DcmVhdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXhlY3V0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgRnJlZUVuZENvbnRyb2xsZXIuaW5zdGFuY2Uuc2hvd0ZyZWVFbmQoMTUwMDAwMC41NzksIDQpO1xyXG4gICAgICAgICAgICBjYy5sb2coXCLmiJHntZDmnZ8/XCIpXHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2VTdGF0dXMoKSB7XHJcbiAgICB9XHJcbn0iXX0=