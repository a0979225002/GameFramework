"use strict";
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