import {SmartFox, SFSObject} from "../../../sfs2x-api-1.7.17";

let data: { [x: string]: any; } | null;
export default class SocketSetting {

    private static _serverSfs : SmartFox //Socket連線用
    static setBoolean = false;//讓設定值只設定一次
    static ServerReturnData = {}//Server回傳所有參數

    //客端底層所有參數存放位置
    static ClientSetObject: {
        serverhost: string,
        serverport: number,
        account: string,
        password: string,
        CocosDebug: boolean,
        CocosDebug2: number,
        LoginState: string,
        whereRoom: string,
        serverZone: string,
        usercode: string,
        userchannel_id: string,
        usergame_id: string,
        usertoken: string,
        userlang: string,
        usergameMaker: string,
        backHomeURL: string,
        loadLanguageDefaultURL: string,
        loadLanguage: string,
        loadLanguageCount: string,
        LoginData: SFSObject,
        UserLanguage: string,
        WarningText: string
        Ratio: number,
        serverGameGroupID: string,
    } = {
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
    }

    //初始加載數據
    static firstLoad(language: string) {
        data = window.language_Mode[language];
    }

    //登入成功時重新加載 另一個language.js檔
    static init(language: string) {
        data = window.language_Mode[language];
    }

    //回傳該語系的字串
    static t(option: string) {
        if (data == null) {
            return option;
        }
        return data[option] == null ? option : data[option];
    }

    static get serverSfs(): SmartFox {
        return this._serverSfs;
    }

    static set serverSfs(value: SmartFox) {
        this._serverSfs = value;
    }
}