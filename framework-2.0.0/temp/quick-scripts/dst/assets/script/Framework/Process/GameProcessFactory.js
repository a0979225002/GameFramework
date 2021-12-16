
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Process/GameProcessFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79d7eye33JHKaBHAtfFDfTQ', 'GameProcessFactory');
// script/Framework/Process/GameProcessFactory.ts

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
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
/**
 * @Author XIAO-LI-PIN
 * @Description 流程工廠 : 更新,獲取,加入,變更等..
 * @Date 2021-05-13 下午 06:17
 * @Version 1.1
 */
var GameProcessFactory = /** @class */ (function () {
    function GameProcessFactory(gameManager) {
        this.gameManager = gameManager;
        this.processToMap = new Map();
    }
    /**
     * 添加流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     */
    GameProcessFactory.prototype.setProcess = function (processName, process) {
        this.processToMap.set(processName, process);
    };
    /**
     * 獲取該流程
     * @param {string | GameType} processName
     * @param {IProcess} process
     * @returns {IProcess}
     */
    GameProcessFactory.prototype.getProcess = function (processName, process) {
        return this.processToMap.get(processName);
    };
    /**
     * 改變流程
     * @param {string | GameType} processName
     */
    GameProcessFactory.prototype.changeProcess = function (processName) {
        if (!this.processToMap.has(processName)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.GameProcessFW, processName + " \u641C\u5C0B\u4E0D\u5230\u6B64\u6D41\u7A0B,\u8ACB\u6AA2\u67E5\u6D41\u7A0B\u662F\u5426\u6DFB\u52A0");
            return;
        }
        this.process = this.processToMap.get(processName);
    };
    /**
     * 執行流程
     * @returns {Promise<void>}
     */
    GameProcessFactory.prototype.useProcess = function () {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.process.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return GameProcessFactory;
}());
exports.default = GameProcessFactory;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFByb2Nlc3NcXEdhbWVQcm9jZXNzRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUF5RDtBQUN6RCxzREFBaUQ7QUFLakQ7Ozs7O0dBS0c7QUFDSDtJQU1JLDRCQUFZLFdBQTZCO1FBQ3JDLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEVBQW9CLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx1Q0FBVSxHQUFWLFVBQVcsV0FBOEIsRUFBRSxPQUFpQjtRQUN4RCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUNBQVUsR0FBVixVQUFXLFdBQThCLEVBQUUsT0FBaUI7UUFDeEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsMENBQWEsR0FBYixVQUFjLFdBQThCO1FBQ3hDLElBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBQztZQUNuQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxhQUFhLEVBQUksV0FBVyx1R0FBb0IsQ0FBQyxDQUFDO1lBQy9GLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7T0FHRztJQUNHLHVDQUFVLEdBQWhCO3VDQUFvQixPQUFPOzs7NEJBQ3ZCLHFCQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUExQixTQUEwQixDQUFDOzs7OztLQUM5QjtJQUNMLHlCQUFDO0FBQUQsQ0FqREEsQUFpREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vRXJyb3IvRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uL0Vycm9yL0Vycm9yTWFuYWdlclwiO1xyXG5pbXBvcnQge0dhbWVUeXBlfSBmcm9tIFwiLi9FbnVtL0dhbWVTdGF0ZVwiO1xyXG5pbXBvcnQgSVNsb3RHYW1lTWFuYWdlciBmcm9tIFwiLi9JU2xvdEdhbWVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7SUdhbWVQcm9jZXNzRmFjdG9yeX0gZnJvbSBcIi4vSUdhbWVQcm9jZXNzRmFjdG9yeVwiO1xyXG5cclxuLyoqXHJcbiAqIEBBdXRob3IgWElBTy1MSS1QSU5cclxuICogQERlc2NyaXB0aW9uIOa1geeoi+W3peW7oCA6IOabtOaWsCznjbLlj5Ys5Yqg5YWlLOiuiuabtOetiS4uXHJcbiAqIEBEYXRlIDIwMjEtMDUtMTMg5LiL5Y2IIDA2OjE3XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVByb2Nlc3NGYWN0b3J5IGltcGxlbWVudHMgSUdhbWVQcm9jZXNzRmFjdG9yeSB7XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lTWFuYWdlcjogSVNsb3RHYW1lTWFuYWdlcjsgICAgICAgICAgICAgIC8v6YGK5oiy5o6n5Yi25ZmoLOmbmeWQkee2geWumlxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzVG9NYXA6IE1hcDxzdHJpbmcsIElQcm9jZXNzPjsgICAgICAgIC8v5omA5pyJ5rWB56iL5re75Yqg5L+d5a2YXHJcbiAgICBwdWJsaWMgcHJvY2VzczogSVByb2Nlc3M7ICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/nlbbliY3kvb/nlKjnmoTmtYHnqItcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlcjogSVNsb3RHYW1lTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBnYW1lTWFuYWdlcjtcclxuICAgICAgICB0aGlzLnByb2Nlc3NUb01hcCA9IG5ldyBNYXA8c3RyaW5nLCBJUHJvY2Vzcz4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOa1geeoi1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBHYW1lVHlwZX0gcHJvY2Vzc05hbWVcclxuICAgICAqIEBwYXJhbSB7SVByb2Nlc3N9IHByb2Nlc3NcclxuICAgICAqL1xyXG4gICAgc2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgR2FtZVR5cGUsIHByb2Nlc3M6IElQcm9jZXNzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzVG9NYXAuc2V0KHByb2Nlc3NOYW1lLCBwcm9jZXNzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeNsuWPluipsua1geeoi1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBHYW1lVHlwZX0gcHJvY2Vzc05hbWVcclxuICAgICAqIEBwYXJhbSB7SVByb2Nlc3N9IHByb2Nlc3NcclxuICAgICAqIEByZXR1cm5zIHtJUHJvY2Vzc31cclxuICAgICAqL1xyXG4gICAgZ2V0UHJvY2Vzcyhwcm9jZXNzTmFtZTogc3RyaW5nIHwgR2FtZVR5cGUsIHByb2Nlc3M6IElQcm9jZXNzKTogSVByb2Nlc3Mge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NUb01hcC5nZXQocHJvY2Vzc05hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pS56K6K5rWB56iLXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IEdhbWVUeXBlfSBwcm9jZXNzTmFtZVxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VQcm9jZXNzKHByb2Nlc3NOYW1lOiBzdHJpbmcgfCBHYW1lVHlwZSkge1xyXG4gICAgICAgIGlmKCF0aGlzLnByb2Nlc3NUb01hcC5oYXMocHJvY2Vzc05hbWUpKXtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuR2FtZVByb2Nlc3NGVyxgJHtwcm9jZXNzTmFtZX0g5pCc5bCL5LiN5Yiw5q2k5rWB56iLLOiri+aqouafpea1geeoi+aYr+WQpua3u+WKoGApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2VzcyA9IHRoaXMucHJvY2Vzc1RvTWFwLmdldChwcm9jZXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDln7fooYzmtYHnqItcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAgICovXHJcbiAgICBhc3luYyB1c2VQcm9jZXNzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzcy5zdGFydCgpO1xyXG4gICAgfVxyXG59Il19