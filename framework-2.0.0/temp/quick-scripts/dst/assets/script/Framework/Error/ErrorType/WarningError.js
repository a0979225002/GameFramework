
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorType/WarningError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbe7cg/SmlNsr9rrffjVXA2', 'WarningError');
// script/Framework/Error/ErrorType/WarningError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../ErrorManager");
var WarningError = /** @class */ (function () {
    function WarningError() {
        this.timeout = null;
    }
    WarningError.prototype.checkErrorType = function (permanentState, message, buttonText) {
        if (this.timeout != null)
            clearTimeout(this.timeout);
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.warningNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager warningNode為空");
        if (!ErrorManager_1.default.instance.warningLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager warningLabel為空");
        if (ErrorManager_1.default.instance.warningDelayTime == 0) {
            ErrorManager_1.default.instance.executeError("\u7576\u524DDelayTime = 0 : \u8ACB\u7D66\u4E88\u503C", ErrorManager_1.default.instance.errorDelayTime);
        }
        ErrorManager_1.default.warningState = true;
        ErrorManager_1.default.instance.warningNode.active = true;
        ErrorManager_1.default.instance.warningLabel.string = message;
        if (permanentState)
            return;
        this.timeout = window.setTimeout(function () {
            ErrorManager_1.default.warningState = false;
            ErrorManager_1.default.instance.warningNode.active = false;
        }, ErrorManager_1.default.instance.warningDelayTime);
    };
    /**
     * 顯示金額不足無法下注
     * @param obj 顯示在label的文字
     */
    WarningError.prototype.showErrorBet = function (obj) {
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.errorNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorNode為空");
        if (!ErrorManager_1.default.instance.errorLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorLabel為空");
        if (!ErrorManager_1.default.instance.errorButton)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorButton為空");
        if (ErrorManager_1.default.instance.errorDelayTime == 0) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorDelayTime為空 無法顯示");
        }
        if (ErrorManager_1.default.errorState)
            return;
        ErrorManager_1.default.errorState = true;
        ErrorManager_1.default.instance.errorNode.active = true;
        ErrorManager_1.default.instance.errorLabel.string = obj;
        window.setTimeout(function () {
            ErrorManager_1.default.errorState = false;
            ErrorManager_1.default.instance.errorNode.active = false;
        }, ErrorManager_1.default.instance.errorDelayTime);
    };
    return WarningError;
}());
exports.default = WarningError;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvclR5cGVcXFdhcm5pbmdFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUFtRDtBQUNuRCxnREFBMkM7QUFFM0M7SUFJSTtRQUVJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXhCLENBQUM7SUFFRCxxQ0FBYyxHQUFkLFVBQWUsY0FBdUIsRUFBRSxPQUFlLEVBQUUsVUFBa0I7UUFFdkUsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUk7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJELDJCQUEyQjtRQUUzQixJQUFJLENBQUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUNsQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUU1RixJQUFJLENBQUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUNuQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztRQUU3RixJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLGdCQUFnQixJQUFJLENBQUMsRUFBRTtZQUU3QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsc0RBQXdCLEVBQUUsc0JBQVksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7U0FFdEc7UUFFRCxzQkFBWSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDakMsc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDaEQsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFcEQsSUFBSSxjQUFjO1lBQUUsT0FBTztRQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFFN0Isc0JBQVksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRXJELENBQUMsRUFBRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7O09BR0c7SUFDSCxtQ0FBWSxHQUFaLFVBQWEsR0FBVztRQUVwQiwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDaEMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFFMUYsSUFBSSxDQUFDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDakMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFFM0YsSUFBSSxDQUFDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVc7WUFDbEMsc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsV0FBVyxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFFNUYsSUFBSSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO1lBQzNDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLFdBQVcsRUFBRSxvQ0FBb0MsQ0FBQyxDQUFDO1NBQ25HO1FBRUQsSUFBSSxzQkFBWSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXBDLHNCQUFZLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUMvQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM5QyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUU5QyxNQUFNLENBQUMsVUFBVSxDQUFDO1lBRWQsc0JBQVksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBRW5ELENBQUMsRUFBRSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gXCIuLi9FbnVtL0Vycm9yTWFuYWdlckVudW1cIjtcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tIFwiLi4vRXJyb3JNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXYXJuaW5nRXJyb3Ige1xyXG5cclxuICAgIHByaXZhdGUgdGltZW91dDogbnVtYmVyXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGltZW91dCA9IG51bGw7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRXJyb3JUeXBlKHBlcm1hbmVudFN0YXRlOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcsIGJ1dHRvblRleHQ6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lb3V0ICE9IG51bGwpIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG5cclxuICAgICAgICAvL+eiuuiqjeeVtuWJjeacieeEoeipsueJqeS7tizlpoLnhKHoqbLnianku7Ys5bCH5pyDdGhyb3fkuK3mlrdcclxuXHJcbiAgICAgICAgaWYgKCFFcnJvck1hbmFnZXIuaW5zdGFuY2Uud2FybmluZ05vZGUpXHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLlVuZGVmaW5lZEZXLCBcIkVycm9yTWFuYWdlciB3YXJuaW5nTm9kZeeCuuepulwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFFcnJvck1hbmFnZXIuaW5zdGFuY2Uud2FybmluZ0xhYmVsKVxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5VbmRlZmluZWRGVywgXCJFcnJvck1hbmFnZXIgd2FybmluZ0xhYmVs54K656m6XCIpO1xyXG5cclxuICAgICAgICBpZiAoRXJyb3JNYW5hZ2VyLmluc3RhbmNlLndhcm5pbmdEZWxheVRpbWUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihg55W25YmNRGVsYXlUaW1lID0gMCA6IOiri+e1puS6iOWAvGAsIEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvckRlbGF5VGltZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLndhcm5pbmdTdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLndhcm5pbmdOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLndhcm5pbmdMYWJlbC5zdHJpbmcgPSBtZXNzYWdlO1xyXG5cclxuICAgICAgICBpZiAocGVybWFuZW50U3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLndhcm5pbmdTdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2Uud2FybmluZ05vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sIEVycm9yTWFuYWdlci5pbnN0YW5jZS53YXJuaW5nRGVsYXlUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhr+ekuumHkemhjeS4jei2s+eEoeazleS4i+azqFxyXG4gICAgICogQHBhcmFtIG9iaiDpoa/npLrlnKhsYWJlbOeahOaWh+Wtl1xyXG4gICAgICovXHJcbiAgICBzaG93RXJyb3JCZXQob2JqOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgLy/norroqo3nlbbliY3mnInnhKHoqbLnianku7Ys5aaC54Sh6Kmy54mp5Lu2LOWwh+acg3Rocm935Lit5pa3XHJcbiAgICAgICAgaWYgKCFFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JOb2RlKVxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5VbmRlZmluZWRGVywgXCJFcnJvck1hbmFnZXIgZXJyb3JOb2Rl54K656m6XCIpO1xyXG5cclxuICAgICAgICBpZiAoIUVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvckxhYmVsKVxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5VbmRlZmluZWRGVywgXCJFcnJvck1hbmFnZXIgZXJyb3JMYWJlbOeCuuepulwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JCdXR0b24pXHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLlVuZGVmaW5lZEZXLCBcIkVycm9yTWFuYWdlciBlcnJvckJ1dHRvbueCuuepulwiKTtcclxuXHJcbiAgICAgICAgaWYgKEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvckRlbGF5VGltZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLlVuZGVmaW5lZEZXLCBcIkVycm9yTWFuYWdlciBlcnJvckRlbGF5VGltZeeCuuepuiDnhKHms5Xpoa/npLpcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoRXJyb3JNYW5hZ2VyLmVycm9yU3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLmVycm9yU3RhdGUgPSB0cnVlO1xyXG4gICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvck5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JMYWJlbC5zdHJpbmcgPSBvYmo7XHJcblxyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5lcnJvclN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvck5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH0sIEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvckRlbGF5VGltZSlcclxuICAgIH1cclxufSJdfQ==