
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Test/GameProcess/NormalBigWinProcess.test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '660a9exph5NKrXxdJ9dxmPD', 'NormalBigWinProcess.test');
// Test/GameProcess/NormalBigWinProcess.test.ts

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
var GameState_1 = require("../../script/Framework/Process/Enum/GameState");
var SlotGameManager_1 = require("../../script/Framework/Process/SlotGameManager");
var SlotStyleManager_1 = require("../../script/Framework/Slot/SlotStyleManager");
var ResponseType_1 = require("../../script/Framework/WebResponse/Enum/ResponseType");
var WebResponseManager_1 = require("../../script/Framework/WebResponse/WebResponseManager");
var WinLevelController_1 = require("../../script/MainGameScript/Controller/WinLevelController");
var Socket_1 = require("../../script/Socket/Socket");
var NormalBigWinProcessTest = /** @class */ (function () {
    function NormalBigWinProcessTest() {
        this.normalResult =
            WebResponseManager_1.WebResponseManager
                .instance()
                .getResult(ResponseType_1.ResponseType.NORMAL);
    }
    NormalBigWinProcessTest.prototype.onCreate = function () {
        if (!this.slotStyle) {
            this.slotStyle = SlotStyleManager_1.default.instance.slot;
        }
    };
    NormalBigWinProcessTest.prototype.onCustomizeEnd = function () {
        return Promise.resolve(undefined);
    };
    NormalBigWinProcessTest.prototype.onCustomizeStart = function () {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.onCreate();
                Socket_1.socketJS.SFSToServer("Bet", SlotGameManager_1.default.instance.userBetPoint);
                //測試BigWin
                WinLevelController_1.default.instance.showWinAboveState(1580, resolve);
                return [2 /*return*/];
            });
        }); });
    };
    NormalBigWinProcessTest.prototype.onRunGrid = function () {
        return Promise.resolve(undefined);
    };
    NormalBigWinProcessTest.prototype.onShowAnswer = function () {
        return Promise.resolve(undefined);
    };
    NormalBigWinProcessTest.prototype.onSineOutGrid = function () {
        return Promise.resolve(undefined);
    };
    NormalBigWinProcessTest.prototype.onSineInGrid = function () {
        return Promise.resolve(undefined);
    };
    NormalBigWinProcessTest.prototype.onChangeStatus = function () {
        //如果一般模式中response的免費次數不等於0,進入free狀態
        if (this.normalResult.FreeSpinCount > 0) {
            SlotGameManager_1.default.instance.gameState = GameState_1.GameState.FREEING;
            SlotGameManager_1.default.instance.changeProcess(GameState_1.GameType.FREE);
            return;
        }
    };
    return NormalBigWinProcessTest;
}());
exports.default = NormalBigWinProcessTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdFxcR2FtZVByb2Nlc3NcXE5vcm1hbEJpZ1dpblByb2Nlc3MudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJFQUFpRjtBQUNqRixrRkFBNEU7QUFDNUUsaUZBQTJFO0FBRTNFLHFGQUFrRjtBQUVsRiw0RkFBd0Y7QUFDeEYsZ0dBQTJGO0FBQzNGLHFEQUFtRDtBQUVuRDtJQUtJO1FBQ0ksSUFBSSxDQUFDLFlBQVk7WUFDYix1Q0FBa0I7aUJBQ2IsUUFBUSxFQUFnQjtpQkFDeEIsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVPLDBDQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBa0IsQ0FBQztTQUNqRTtJQUNMLENBQUM7SUFFTSxnREFBYyxHQUFyQjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sa0RBQWdCLEdBQXZCO1FBQUEsaUJBUUM7UUFORyxPQUFPLElBQUksT0FBTyxDQUFPLFVBQU8sT0FBTzs7Z0JBQ25DLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDaEIsaUJBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLHlCQUFlLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNuRSxVQUFVO2dCQUNWLDRCQUFrQixDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7OzthQUNoRSxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sMkNBQVMsR0FBaEI7UUFDSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVNLDhDQUFZLEdBQW5CO1FBQ0ksT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSwrQ0FBYSxHQUFwQjtRQUNJLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sOENBQVksR0FBbkI7UUFDSSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdEQUFjLEdBQWQ7UUFDSSxtQ0FBbUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUU7WUFDckMseUJBQWUsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLHFCQUFTLENBQUMsT0FBTyxDQUFDO1lBQ3ZELHlCQUFlLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDVjtJQUNMLENBQUM7SUFDTCw4QkFBQztBQUFELENBeERBLEFBd0RDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVTdGF0ZSwgR2FtZVR5cGV9IGZyb20gJy4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvUHJvY2Vzcy9FbnVtL0dhbWVTdGF0ZSdcclxuaW1wb3J0IFNsb3RHYW1lTWFuYWdlciBmcm9tICcuLi8uLi9zY3JpcHQvRnJhbWV3b3JrL1Byb2Nlc3MvU2xvdEdhbWVNYW5hZ2VyJ1xyXG5pbXBvcnQgU2xvdFN0eWxlTWFuYWdlciBmcm9tICcuLi8uLi9zY3JpcHQvRnJhbWV3b3JrL1Nsb3QvU2xvdFN0eWxlTWFuYWdlcidcclxuaW1wb3J0IE5vTGluZVNsb3QgZnJvbSAnLi4vLi4vc2NyaXB0L0ZyYW1ld29yay9TbG90L1Nsb3RUeXBlL05vTGluZVNsb3QnXHJcbmltcG9ydCB7UmVzcG9uc2VUeXBlfSBmcm9tIFwiLi4vLi4vc2NyaXB0L0ZyYW1ld29yay9XZWJSZXNwb25zZS9FbnVtL1Jlc3BvbnNlVHlwZVwiO1xyXG5pbXBvcnQgTm9MaW5lUmVzdWx0IGZyb20gXCIuLi8uLi9zY3JpcHQvRnJhbWV3b3JrL1dlYlJlc3BvbnNlL1NldmVyRGF0YU1vZGVsL05vcm1hbFJlc3VsdC9Ob0xpbmVSZXN1bHRcIjtcclxuaW1wb3J0IHtXZWJSZXNwb25zZU1hbmFnZXJ9IGZyb20gJy4uLy4uL3NjcmlwdC9GcmFtZXdvcmsvV2ViUmVzcG9uc2UvV2ViUmVzcG9uc2VNYW5hZ2VyJ1xyXG5pbXBvcnQgV2luTGV2ZWxDb250cm9sbGVyIGZyb20gXCIuLi8uLi9zY3JpcHQvTWFpbkdhbWVTY3JpcHQvQ29udHJvbGxlci9XaW5MZXZlbENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHtzb2NrZXRKU30gZnJvbSAnLi4vLi4vc2NyaXB0L1NvY2tldC9Tb2NrZXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxCaWdXaW5Qcm9jZXNzVGVzdCBpbXBsZW1lbnRzIElTbG90UHJvY2VkdXJlRXhlY3V0aW9uQ29udGFpbmVyIHtcclxuXHJcbiAgICBwcml2YXRlIHNsb3RTdHlsZTogTm9MaW5lU2xvdDtcclxuICAgIHByaXZhdGUgbm9ybWFsUmVzdWx0OiBOb0xpbmVSZXN1bHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub3JtYWxSZXN1bHQgPVxyXG4gICAgICAgICAgICBXZWJSZXNwb25zZU1hbmFnZXJcclxuICAgICAgICAgICAgICAgIC5pbnN0YW5jZTxOb0xpbmVSZXN1bHQ+KClcclxuICAgICAgICAgICAgICAgIC5nZXRSZXN1bHQoUmVzcG9uc2VUeXBlLk5PUk1BTCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2xvdFN0eWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2xvdFN0eWxlID0gU2xvdFN0eWxlTWFuYWdlci5pbnN0YW5jZS5zbG90IGFzIE5vTGluZVNsb3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkN1c3RvbWl6ZUVuZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ3VzdG9taXplU3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ3JlYXRlKCk7XHJcbiAgICAgICAgICAgIHNvY2tldEpTLlNGU1RvU2VydmVyKFwiQmV0XCIsIFNsb3RHYW1lTWFuYWdlci5pbnN0YW5jZS51c2VyQmV0UG9pbnQpO1xyXG4gICAgICAgICAgICAvL+a4rOippkJpZ1dpblxyXG4gICAgICAgICAgICBXaW5MZXZlbENvbnRyb2xsZXIuaW5zdGFuY2Uuc2hvd1dpbkFib3ZlU3RhdGUoMTU4MCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUnVuR3JpZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2hvd0Fuc3dlcigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2luZU91dEdyaWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNpbmVJbkdyaWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlU3RhdHVzKCkge1xyXG4gICAgICAgIC8v5aaC5p6c5LiA6Iis5qih5byP5LitcmVzcG9uc2XnmoTlhY3osrvmrKHmlbjkuI3nrYnmlrwwLOmAsuWFpWZyZWXni4DmhYtcclxuICAgICAgICBpZiAodGhpcy5ub3JtYWxSZXN1bHQuRnJlZVNwaW5Db3VudCA+IDApIHtcclxuICAgICAgICAgICAgU2xvdEdhbWVNYW5hZ2VyLmluc3RhbmNlLmdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5GUkVFSU5HO1xyXG4gICAgICAgICAgICBTbG90R2FtZU1hbmFnZXIuaW5zdGFuY2UuY2hhbmdlUHJvY2VzcyhHYW1lVHlwZS5GUkVFKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==