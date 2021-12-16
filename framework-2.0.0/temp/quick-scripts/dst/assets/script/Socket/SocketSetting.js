
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Socket/SocketSetting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '855f4+qf3dEX51B/xBIqCfC', 'SocketSetting');
// script/Socket/SocketSetting.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data;
var SocketSetting = /** @class */ (function () {
    function SocketSetting() {
    }
    //初始加載數據
    SocketSetting.firstLoad = function (language) {
        data = window.language_Mode[language];
    };
    //登入成功時重新加載 另一個language.js檔
    SocketSetting.init = function (language) {
        data = window.language_Mode[language];
    };
    //回傳該語系的字串
    SocketSetting.t = function (option) {
        if (data == null) {
            return option;
        }
        return data[option] == null ? option : data[option];
    };
    Object.defineProperty(SocketSetting, "serverSfs", {
        get: function () {
            return this._serverSfs;
        },
        set: function (value) {
            cc.log(value);
            this._serverSfs = value;
        },
        enumerable: false,
        configurable: true
    });
    SocketSetting.setBoolean = false; //讓設定值只設定一次
    SocketSetting.ServerReturnData = {}; //Server回傳所有參數
    //客端底層所有參數存放位置
    SocketSetting.ClientSetObject = {
        serverhost: "",
        serverport: 0,
        account: "",
        password: "",
        CocosDebug: true,
        CocosDebug2: 0,
        LoginState: "",
        whereRoom: "",
        serverZone: "",
        usercode: "",
        userchannel_id: "",
        usergame_id: "",
        usertoken: "",
        userlang: "",
        usergameMaker: "",
        backHomeURL: "",
        loadLanguageDefaultURL: "",
        loadLanguage: "",
        loadLanguageCount: "",
        LoginData: undefined,
        UserLanguage: "",
        WarningText: "",
        Ratio: 0,
        serverGameGroupID: "",
    };
    return SocketSetting;
}());
exports.default = SocketSetting;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb2NrZXRcXFNvY2tldFNldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJLElBQWtDLENBQUM7QUFDdkM7SUFBQTtJQXNGQSxDQUFDO0lBMUJHLFFBQVE7SUFDRCx1QkFBUyxHQUFoQixVQUFpQixRQUFnQjtRQUM3QixJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsMkJBQTJCO0lBQ3BCLGtCQUFJLEdBQVgsVUFBWSxRQUFnQjtRQUN4QixJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVTtJQUNILGVBQUMsR0FBUixVQUFTLE1BQWM7UUFDbkIsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsT0FBTyxNQUFNLENBQUM7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzQkFBVywwQkFBUzthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO2FBRUQsVUFBcUIsS0FBZTtZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BTEE7SUE3RU0sd0JBQVUsR0FBRyxLQUFLLENBQUMsQ0FBQSxXQUFXO0lBQzlCLDhCQUFnQixHQUFHLEVBQUUsQ0FBQSxDQUFBLGNBQWM7SUFFMUMsY0FBYztJQUNQLDZCQUFlLEdBMEJsQjtRQUNBLFVBQVUsRUFBRSxFQUFFO1FBQ2QsVUFBVSxFQUFFLENBQUM7UUFDYixPQUFPLEVBQUUsRUFBRTtRQUNYLFFBQVEsRUFBRSxFQUFFO1FBQ1osVUFBVSxFQUFFLElBQUk7UUFDaEIsV0FBVyxFQUFFLENBQUM7UUFDZCxVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEVBQUU7UUFDZCxRQUFRLEVBQUUsRUFBRTtRQUNaLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLFdBQVcsRUFBRSxFQUFFO1FBQ2Ysc0JBQXNCLEVBQUUsRUFBRTtRQUMxQixZQUFZLEVBQUUsRUFBRTtRQUNoQixpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLFlBQVksRUFBRSxFQUFFO1FBQ2hCLFdBQVcsRUFBRSxFQUFFO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixpQkFBaUIsRUFBRSxFQUFFO0tBQ3hCLENBQUE7SUE0Qkwsb0JBQUM7Q0F0RkQsQUFzRkMsSUFBQTtrQkF0Rm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1NtYXJ0Rm94LCBTRlNPYmplY3R9IGZyb20gXCIuL3NmczJ4LWFwaS0xLjcuMTdcIjtcclxuXHJcbmxldCBkYXRhOiB7IFt4OiBzdHJpbmddOiBhbnk7IH0gfCBudWxsO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb2NrZXRTZXR0aW5nIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc2VydmVyU2ZzIDogU21hcnRGb3ggLy9Tb2NrZXTpgKPnt5rnlKhcclxuICAgIHN0YXRpYyBzZXRCb29sZWFuID0gZmFsc2U7Ly/orpPoqK3lrprlgLzlj6roqK3lrprkuIDmrKFcclxuICAgIHN0YXRpYyBTZXJ2ZXJSZXR1cm5EYXRhID0ge30vL1NlcnZlcuWbnuWCs+aJgOacieWPg+aVuFxyXG5cclxuICAgIC8v5a6i56uv5bqV5bGk5omA5pyJ5Y+D5pW45a2Y5pS+5L2N572uXHJcbiAgICBzdGF0aWMgQ2xpZW50U2V0T2JqZWN0OiB7XHJcbiAgICAgICAgc2VydmVyaG9zdDogc3RyaW5nLFxyXG4gICAgICAgIHNlcnZlcnBvcnQ6IG51bWJlcixcclxuICAgICAgICBhY2NvdW50OiBzdHJpbmcsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZyxcclxuICAgICAgICBDb2Nvc0RlYnVnOiBib29sZWFuLFxyXG4gICAgICAgIENvY29zRGVidWcyOiBudW1iZXIsXHJcbiAgICAgICAgTG9naW5TdGF0ZTogc3RyaW5nLFxyXG4gICAgICAgIHdoZXJlUm9vbTogc3RyaW5nLFxyXG4gICAgICAgIHNlcnZlclpvbmU6IHN0cmluZyxcclxuICAgICAgICB1c2VyY29kZTogc3RyaW5nLFxyXG4gICAgICAgIHVzZXJjaGFubmVsX2lkOiBzdHJpbmcsXHJcbiAgICAgICAgdXNlcmdhbWVfaWQ6IHN0cmluZyxcclxuICAgICAgICB1c2VydG9rZW46IHN0cmluZyxcclxuICAgICAgICB1c2VybGFuZzogc3RyaW5nLFxyXG4gICAgICAgIHVzZXJnYW1lTWFrZXI6IHN0cmluZyxcclxuICAgICAgICBiYWNrSG9tZVVSTDogc3RyaW5nLFxyXG4gICAgICAgIGxvYWRMYW5ndWFnZURlZmF1bHRVUkw6IHN0cmluZyxcclxuICAgICAgICBsb2FkTGFuZ3VhZ2U6IHN0cmluZyxcclxuICAgICAgICBsb2FkTGFuZ3VhZ2VDb3VudDogc3RyaW5nLFxyXG4gICAgICAgIExvZ2luRGF0YTogU0ZTT2JqZWN0LFxyXG4gICAgICAgIFVzZXJMYW5ndWFnZTogc3RyaW5nLFxyXG4gICAgICAgIFdhcm5pbmdUZXh0OiBzdHJpbmdcclxuICAgICAgICBSYXRpbzogbnVtYmVyLFxyXG4gICAgICAgIHNlcnZlckdhbWVHcm91cElEOiBzdHJpbmcsXHJcblxyXG4gICAgfSA9IHtcclxuICAgICAgICBzZXJ2ZXJob3N0OiBcIlwiLFxyXG4gICAgICAgIHNlcnZlcnBvcnQ6IDAsXHJcbiAgICAgICAgYWNjb3VudDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgICAgICBDb2Nvc0RlYnVnOiB0cnVlLFxyXG4gICAgICAgIENvY29zRGVidWcyOiAwLFxyXG4gICAgICAgIExvZ2luU3RhdGU6IFwiXCIsXHJcbiAgICAgICAgd2hlcmVSb29tOiBcIlwiLFxyXG4gICAgICAgIHNlcnZlclpvbmU6IFwiXCIsXHJcbiAgICAgICAgdXNlcmNvZGU6IFwiXCIsXHJcbiAgICAgICAgdXNlcmNoYW5uZWxfaWQ6IFwiXCIsXHJcbiAgICAgICAgdXNlcmdhbWVfaWQ6IFwiXCIsXHJcbiAgICAgICAgdXNlcnRva2VuOiBcIlwiLFxyXG4gICAgICAgIHVzZXJsYW5nOiBcIlwiLFxyXG4gICAgICAgIHVzZXJnYW1lTWFrZXI6IFwiXCIsXHJcbiAgICAgICAgYmFja0hvbWVVUkw6IFwiXCIsXHJcbiAgICAgICAgbG9hZExhbmd1YWdlRGVmYXVsdFVSTDogXCJcIixcclxuICAgICAgICBsb2FkTGFuZ3VhZ2U6IFwiXCIsXHJcbiAgICAgICAgbG9hZExhbmd1YWdlQ291bnQ6IFwiXCIsXHJcbiAgICAgICAgTG9naW5EYXRhOiB1bmRlZmluZWQsXHJcbiAgICAgICAgVXNlckxhbmd1YWdlOiBcIlwiLFxyXG4gICAgICAgIFdhcm5pbmdUZXh0OiBcIlwiLFxyXG4gICAgICAgIFJhdGlvOiAwLFxyXG4gICAgICAgIHNlcnZlckdhbWVHcm91cElEOiBcIlwiLFxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5Yqg6LyJ5pW45pOaXHJcbiAgICBzdGF0aWMgZmlyc3RMb2FkKGxhbmd1YWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBkYXRhID0gd2luZG93Lmxhbmd1YWdlX01vZGVbbGFuZ3VhZ2VdO1xyXG4gICAgfVxyXG5cclxuICAgIC8v55m75YWl5oiQ5Yqf5pmC6YeN5paw5Yqg6LyJIOWPpuS4gOWAi2xhbmd1YWdlLmpz5qqUXHJcbiAgICBzdGF0aWMgaW5pdChsYW5ndWFnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGF0YSA9IHdpbmRvdy5sYW5ndWFnZV9Nb2RlW2xhbmd1YWdlXTtcclxuICAgIH1cclxuXHJcbiAgICAvL+WbnuWCs+ipsuiqnuezu+eahOWtl+S4slxyXG4gICAgc3RhdGljIHQob3B0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhW29wdGlvbl0gPT0gbnVsbCA/IG9wdGlvbiA6IGRhdGFbb3B0aW9uXTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHNlcnZlclNmcygpOiBTbWFydEZveCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlclNmcztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0IHNlcnZlclNmcyh2YWx1ZTogU21hcnRGb3gpIHtcclxuICAgICAgICBjYy5sb2codmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3NlcnZlclNmcyA9IHZhbHVlO1xyXG4gICAgfVxyXG59Il19