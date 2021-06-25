import socketSetting from './SocketSetting';
import ResultSortOut from "./ResultSortOut";
import WebRequestManager from "../Framework/WebRequest/WebRequestManager";
import {LanguageType} from "../Framework/Config/Enum/LanguageType";

let socketJS = null;
let obj_socket = {};
cc.Class({
    extends: cc.Component,

    //初始客戶端參數
    onLoad: function () {
        if (socketSetting.setboolean === true) {
            return;
        }
        socketJS = this.node.getComponent("Socket");
        cc.game.addPersistRootNode(this.node);
        socketSetting.setboolean = true;
        obj_socket.self = this;
        socketSetting.ClientSetObject.serverhost = "210.241.243.206";//serverIP //210.241.243.206
        // socketSetting.ClientSetObject.serverhost = "210.241.243.206";//serverIP //210.241.243.206
        socketSetting.ClientSetObject.serverport = 8080;
        socketSetting.ClientSetObject.account = "";//ppg015~020
        // socketSetting.ClientSetObject.account                = "ppg018";//ppg015~020
        socketSetting.ClientSetObject.password = "123456";//123456
        socketSetting.ClientSetObject.CocosDebug = true;//--------!!!-------//
        socketSetting.ClientSetObject.CocosDebug2 = 1;//--------!!!-------//
        socketSetting.ClientSetObject.LoginState = "2"; // 0註冊 1登入 2遊客 3 測試人員記錄測試
        // socketSetting.ClientSetObject.LoginState             = "3"; // 0註冊 1登入 2遊客 3 測試人員記錄測試
        socketSetting.ClientSetObject.whereRoom = "lobby";
        socketSetting.ClientSetObject.serverZone = "H5Game";//server的樓
        socketSetting.ClientSetObject.usercode = "";
        socketSetting.ClientSetObject.userchannel_id = "0";
        socketSetting.ClientSetObject.usergame_id = "";
        socketSetting.ClientSetObject.usertoken = "ef673226f18053130fa2bbe10f7aaf25fcb26297001309a15a76b3f2ef8cc076861815d15c0da724aca66c684ed96e46135c7e6cc1a7337f";
        // socketSetting.ClientSetObject.usertoken              = "69190146c53e471b0029411571d09dffbb04cdef508904c8d07ec504241372ea183003e4fb67461185f4ffe69affed098aeeca1097b239c7";
        socketSetting.ClientSetObject.userlang = "";
        socketSetting.ClientSetObject.usergameMaker = "";
        socketSetting.ClientSetObject.backHomeURL = "http://va-game.com/pc/VA-index";
        // socketSetting.ClientSetObject.backHomeURL = "";
        // socketSetting.ClientSetObject.loadLanguageDefaultURL = "http://210.241.243.206/VAWebsite/game/ce_game_h5/lib/language/";
        socketSetting.ClientSetObject.loadLanguageDefaultURL = "http://10.10.0.47/games/lib/language/";
        socketSetting.ClientSetObject.loadLanguage = socketSetting.ClientSetObject.loadLanguageDefaultURL;
        socketSetting.ClientSetObject.loadLanguageCount = 0;//--------!!!-------//
        socketSetting.ClientSetObject.LoginData = "";//--------!!!-------//
        socketSetting.ClientSetObject.UserLanguage = LanguageType.CHINESE;//語言

        //TODO
        WebRequestManager.instance.serverHost = socketSetting.ClientSetObject.serverhost;
        WebRequestManager.instance.UserLanguage = socketSetting.ClientSetObject.UserLanguage;
        WebRequestManager.instance.backHomeURL = socketSetting.ClientSetObject.backHomeURL;

        // 上線,獲取index.php API參數
        cc.log("測試打包文件參數:", window.GameServerSocket);
        if (window.GameServerSocket != null) {
            socketSetting.ClientSetObject.serverhost = window.GameServerSocket;
            socketSetting.ClientSetObject.LoginState = window.loginType;
            socketSetting.ClientSetObject.account = window.accountName.toLowerCase();
            socketSetting.ClientSetObject.usercode = window.code;
            socketSetting.ClientSetObject.userchannel_id = window.channelId;
            socketSetting.ClientSetObject.usergame_id = window.gameId;
            socketSetting.ClientSetObject.usertoken = window.token;
            socketSetting.ClientSetObject.userlang = window.lang;
            socketSetting.ClientSetObject.UserLanguage = window.lang;
            socketSetting.ClientSetObject.usergameMaker = window.gameMaker;
            socketSetting.ClientSetObject.backHomeURL = window.homeURL;
            console.log(socketSetting.ClientSetObject.backHomeURL);
            socketSetting.ClientSetObject.CocosDebug2 = 0;
            socketSetting.ClientSetObject.loadLanguage = window.libraryPath && window.libraryPath != "" ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "") + "/lib/language/" : "../../lib/language/";
            //TODO
            WebRequestManager.instance.UserLanguage = window.lang;
            WebRequestManager.instance.backHomeURL = window.homeURL;
            WebRequestManager.instance.serverHost = window.GameServerSocket;
        }
        if (socketSetting.ClientSetObject.LoginState == "2") {
            socketSetting.ClientSetObject.serverZone = "H5Demo";//server的樓
        }
        // 遊戲端底層預設參數
        socketSetting.ClientSetObject.serverExtensionID = "game";//server的房(讀取Server的哪個資料夾)
        socketSetting.ClientSetObject.servergameID = 0;//遊戲編號
        socketSetting.ClientSetObject.serverExtensionsClass = "";//(讀取Server的資料夾內的哪個檔)
        socketSetting.ClientSetObject.serverGameGroupID = "";//server的桌
        socketSetting.ClientSetObject.RoomName = "";//房間名稱
        socketSetting.ClientSetObject.RoomBetRange = 0;//房間區間
        socketSetting.ClientSetObject.WarningText = "";//底層警告文字
        socketSetting.ClientSetObject.WarningBoolean = false;//底層警告文字是否常駐
        socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕是否顯示

        socketSetting.ClientSetObject.Ratio = 100;//比值
        socketSetting.ClientSetObject.PingPong = 0;//Ping參數
        socketSetting.ClientSetObject.SFSLoadStart = false;//是否已呼過

        socketSetting.ClientSetObject.languageLoaded = false;
        socketSetting.ClientSetObject.ConnectionType = "0"; //預設連線狀態
        socketSetting.ClientSetObject.SendWarning = false;//避免錯誤訊息被覆蓋
        socketSetting.ClientSetObject.ErrorMessageCode = "";//錯誤訊息代號


        this.otherLang();
        socketSetting.firstLoad(socketSetting.ClientSetObject.UserLanguage);

    },
    //載入語言,request 參數url/?=當前時間
    LoadLanguage: function (_language) {
        let URL_Random = new Date().getTime();
        let url = socketSetting.ClientSetObject.loadLanguage + _language + ".js?=" + URL_Random
        loadScript(
            url,
            obj_socket.self.loadLanguageEnd,
            obj_socket.self.loadLanguageError
        );
    },
    //載入成功,直接進入登入流程
    loadLanguageEnd() {
        socketSetting.init(socketSetting.ClientSetObject.UserLanguage);//設定語言
        obj_socket.self.realSFSLoad();
    },
    //初始載入語系失敗,以不代request參數的方式在載入一次
    loadLanguageError() {
        socketSetting.ClientSetObject.loadLanguageCount = 0;
        let url = socketSetting.ClientSetObject.loadLanguageDefaultURL + socketSetting.ClientSetObject.UserLanguage + ".js";
        loadScript(
            url,
            obj_socket.self.loadLanguageEnd,
            obj_socket.self.loadLanguageErrorAgain
        );
    },
    //如果第二次載入還是失敗,進入錯誤訊息狀態
    loadLanguageErrorAgain() {
        socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9077");//"语言包下载失败请通知客服";
        socketSetting.ClientSetObject.WarningBtnBoolean = true;
        ResultSortOut.instance.SFSToGame("Warning");
        obj_socket.self.realSFSLoad();
    },

    /**
     * 會先載入語系,載入成功後,才與websocket連線
     * @param GameNumber
     * @constructor
     */
    SFSLoad: function (GameNumber) {
        // cc.log("SFSLoad",GameNumber);
        if (socketSetting.ClientSetObject.SFSLoadStart == true) {
            return;
        }
        socketSetting.ClientSetObject.SFSLoadStart = true;

        //沒作用
        socketSetting.ClientSetObject.servergameID = GameNumber;//遊戲編號
        //沒作用???
        socketSetting.ClientSetObject.serverExtensionsClass = "com.game" + socketSetting.ClientSetObject.servergameID + ".sfs2x.Entrance";//(讀取Server的資料夾內的哪個檔)
        socketSetting.ClientSetObject.serverGameGroupID = `game${GameNumber}`;//server的桌
        socketSetting.ClientSetObject.usergame_id = GameNumber.toString();
        //20190704優先載入語言包後再登入
        obj_socket.self.LoadLanguage(socketSetting.ClientSetObject.UserLanguage);

    },

    /**
     * 正式交握連線,並添加監聽事件
     */
    realSFSLoad: function () {
        this.otherserver();
        var config = {};
        // socketSetting.ClientSetObject.serverport = (config.useSSL = 'https:' == document.location.protocol) ? 8443: 8080;
        if (typeof window.ReturnPort == 'function') {
            socketSetting.ClientSetObject.serverport = window.ReturnPort().userport;
            config.useSSL = window.ReturnPort().useSSL;
        } else {
            socketSetting.ClientSetObject.serverport = (config.useSSL = 'https:' == document.location.protocol) ? 8443 : 8080;
        }

        config.host = socketSetting.ClientSetObject.serverhost;
        config.port = socketSetting.ClientSetObject.serverport;
        config.zone = socketSetting.ClientSetObject.serverZone;
        socketSetting.serverSfs = new SFS2X.SmartFox(config);
        // Add event listeners
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this);//連線
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this);//連線中斷
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this);//登入
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.serverreturnError, this);//登入錯誤
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout, this);//登出
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoined, this);//加入房
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.serverreturnError, this);//加入錯誤
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.PING_PONG, this.onPING_PONG, this);//玩家手機與伺服器的延遲時間
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this);//公訊(類似廣播)
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, this.onPrivateMessage, this);//私訊(類似密語)
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.onAdminMessage, this);//GM廣播(Zone)
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage, this);//單幣別廣播(Zone)
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage, this);//單幣別廣播(Zone)
        //下注監聽器
        socketSetting.serverSfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.SFSBuffer, this);
        socketSetting.serverSfs.connect();
    },
    //連線成功
    onConnection: function (event) {
        if (event.success) {
            console.log("Socket Connected", event);
            //登入
            this.SFSLogin();
        } else {
            socketSetting.ClientSetObject.SFSLoadStart = false;
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9009");
            socketSetting.ClientSetObject.WarningBoolean = true;
            ResultSortOut.instance.SFSToGame("Warning");
        }
    },
    //連線遺失
    onConnectionLost: function (event) {
        socketSetting.ClientSetObject.SFSLoadStart = false;
        socketSetting.serverSfs.enableLagMonitor(false);//關閉Ping功能
        console.log(event);
        //http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Utils.ClientDisconnectionReason.html
        var reason = event.reason;
        socketSetting.ClientSetObject.WarningBoolean = true;
        socketSetting.ClientSetObject.WarningBtnBoolean = true;

        cc.log(SFS2X.ClientDisconnectionReason.BAN);
        if (reason == SFS2X.ClientDisconnectionReason.BAN) {
            //Client was banned from the server. Banning can occur automatically (i.e. for flooding, if the flood filter is active) or due to the intervention of a user with enough privileges (i.e. an administrator or a moderator).
            //被Server阻擋
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9009") + '!';
            ResultSortOut.instance.SFSToGame("GameClose");
            ResultSortOut.instance.SFSToGame("Warning");
        } else if (reason == SFS2X.ClientDisconnectionReason.IDLE) {
            //Client was disconnected because it was idle for too long. The connection timeout depends on the server settings.
            //閒置過久斷開
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9005") + '!!';
            ResultSortOut.instance.SFSToGame("GameClose");
            ResultSortOut.instance.SFSToGame("Warning");
        } else if (reason == SFS2X.ClientDisconnectionReason.KICK) {
            //Client was kicked out of the server. Kicking can occur automatically (i.e. for swearing, if the words filter is active) or due to the intervention of a user with enough privileges (i.e. an administrator or a moderator).
            //Client被Server踢出
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9009") + '!!!';
            if (!socketSetting.ClientSetObject.SendWarning) {
                ResultSortOut.instance.SFSToGame("GameClose");
                ResultSortOut.instance.SFSToGame("Warning");
            }
        } else if (reason == SFS2X.ClientDisconnectionReason.MANUAL) {
            //The client manually disconnected from the server. The disconnect method on the SmartFox class was called.
            //Client自斷
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9009") + '!!!!';
        } else if (reason == SFS2X.ClientDisconnectionReason.UNKNOWN) {
            //A generic network error occurred, and the client is unable to determine the cause of the disconnection. The server-side log should be checked for possible error messages or warnings.
            //客戶端無法得知的錯誤，需查server 的 Log
            socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9009") + '!!!!!';
            if (!socketSetting.ClientSetObject.SendWarning) {
                ResultSortOut.instance.SFSToGame("GameClose");
                ResultSortOut.instance.SFSToGame("Warning");
            }
        }

        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection);//連線
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost);//連線中斷
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin);//登入
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.serverreturnError);//登入錯誤
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout);//登出
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoined);//加入房
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.serverreturnError);//加入錯誤
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.PING_PONG, this.onPING_PONG);//玩家手機與伺服器的延遲時間
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage);//公訊(類似廣播)
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, this.onPrivateMessage);//私訊(類似密語)
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.onAdminMessage);//GM廣播(Zone)
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage);//單幣別廣播(Zone)
        socketSetting.serverSfs.removeEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage);//單幣別廣播(Zone)

    },
    //SmartFox Login 登入
    SFSLogin: function () {
        socketSetting.ClientSetObject.LoginData = new SFS2X.SFSObject();
        socketSetting.ClientSetObject.LoginData.putUtfString("LoginState", socketSetting.ClientSetObject.LoginState);
        if (socketSetting.ClientSetObject.LoginState == "0") {

            socketSetting.ClientSetObject.LoginData.putUtfString("CreatAccount", socketSetting.Creat.CreatAccount);
            socketSetting.ClientSetObject.LoginData.putUtfString("CreatPassword", socketSetting.Creat.CreatPassword);
            socketSetting.ClientSetObject.LoginData.putUtfString("CreatNickName", socketSetting.Creat.CreatNickName);
            socketSetting.ClientSetObject.LoginData.putUtfString("CreatEmail", socketSetting.Creat.CreatEmail);
            socketSetting.serverSfs.send(new SFS2X.LoginRequest(null, socketSetting.Creat.CreatPassword, socketSetting.ClientSetObject.LoginData, socketSetting.serverZone));
            socketSetting.ClientSetObject.LoginData = new SFS2X.SFSObject();
        } else if (socketSetting.ClientSetObject.LoginState == "1" || socketSetting.ClientSetObject.LoginState == "3" || socketSetting.ClientSetObject.LoginState == "4") {
            socketSetting.ClientSetObject.LoginData.putUtfString("CheckPW", socketSetting.ClientSetObject.password);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserCode", socketSetting.ClientSetObject.usercode);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserChannelID", socketSetting.ClientSetObject.userchannel_id);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserGameID", socketSetting.ClientSetObject.usergame_id);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserToken", socketSetting.ClientSetObject.usertoken);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserLang", socketSetting.ClientSetObject.userlang);
            socketSetting.ClientSetObject.LoginData.putUtfString("APIUserGameMaker", socketSetting.ClientSetObject.usergameMaker);
            socketSetting.serverSfs.send(new SFS2X.LoginRequest(socketSetting.ClientSetObject.account, socketSetting.ClientSetObject.password, socketSetting.ClientSetObject.LoginData, socketSetting.ClientSetObject.serverZone));
        } else if (socketSetting.ClientSetObject.LoginState == "2") {
            socketSetting.ClientSetObject.LoginData.putUtfString("CheckPW", "");
            // socketSetting.serverSfs.send(new SFS2X.LoginRequest("test001",null,socketSetting.ClientSetObject.LoginData,socketSetting.serverZone));
            if (window.test) {
                // socketSetting.serverSfs.send(new SFS2X.LoginRequest("test002",null,socketSetting.ClientSetObject.LoginData,socketSetting.serverZone));
                socketSetting.serverSfs.send(new SFS2X.LoginRequest(null, null, socketSetting.ClientSetObject.LoginData, socketSetting.serverZone));
            } else {
                socketSetting.serverSfs.send(new SFS2X.LoginRequest(null, null, socketSetting.ClientSetObject.LoginData, socketSetting.serverZone));
            }
        }
        cc.log("ddddd", socketSetting.ClientSetObject.LoginState);
    },
    //登入成功
    onLogin: function (event) {
        socketSetting.ServerReturnData.stateValue = event.data.get("State");
        switch (event.data.get("LoginState")) {
            case "0":
                break;
            case "1":
            case "2":
                switch (socketSetting.ServerReturnData.stateValue) {
                    case 0:
                        socketSetting.ClientSetObject.password = "";
                        socketSetting.ClientSetObject.LoginData = new SFS2X.SFSObject();
                        break;
                    case 1:
                        ResultSortOut.instance.SFSToGame("loginError");
                        break;
                }
                break;
        }
    },
    //登出成功的事件
    onLogout: function (event) {
        socketSetting.ClientSetObject.SFSLoadStart = false;
        socketSetting.serverSfs.disconnect()
        if (socketSetting.ServerReturnData.stateValue == 0 && socketSetting.ClientSetObject.LoginState == "0") {
            socketSetting.ClientSetObject.LoginState = "1";
            socketSetting.ClientSetObject.LoginData.putUtfString("LoginState", socketSetting.ClientSetObject.LoginState);
            socketSetting.ClientSetObject.LoginData.putUtfString("CheckPW", socketSetting.Creat.CreatPassword);
            socketSetting.serverSfs.send(new SFS2X.LoginRequest(socketSetting.Creat.CreatAccount, socketSetting.Creat.CreatPassword, socketSetting.ClientSetObject.LoginData, socketSetting.serverZone));
            socketSetting.ClientSetObject.LoginData = new SFS2X.SFSObject();
            socketSetting.Creat = {};
        }
    },
    //Clinet要求登出的function
    GameLogout: function () {
        // Logout
        //給遊戲端呼叫的登出function
        socketSetting.serverSfs.send(new SFS2X.Requests.System.LogoutRequest());
    },
    //Clinet要求加入房的function
    SFSJoinRoom: function (_roomName) {
        //入房
        socketSetting.serverSfs.send(new SFS2X.JoinRoomRequest(_roomName));
    },
    //加入房成功事件
    onRoomJoined: function (evtParams) {
        socketSetting.ClientSetObject.whereRoom = evtParams.room.groupId;
        switch (socketSetting.ClientSetObject.whereRoom) {
            case "Lobby":
                ResultSortOut.instance.SFSToGame("LeaveGame");
                break;
            case "GameLobby":
                ResultSortOut.instance.SFSToGame("GameLobby");
                break;
            case socketSetting.ClientSetObject.serverGameGroupID:
                socketSetting.serverSfs.enableLagMonitor(true, 5);//開啟Ping功能
                ResultSortOut.instance.SFSToGame("CanPlayGame");
                break;
        }
    },
    BufferParsing(obj, params, paramskeyArray) {
        for (var key in paramskeyArray) {
            const keyName = paramskeyArray[key];
            if (typeof (params.get(keyName)) === "object" && Array.isArray(params.get(keyName)) === false) {
                const dataparams = params.get(keyName);
                if (dataparams.getKeysArray) {
                    obj[keyName] = {};
                    this.BufferObjParsing(obj[keyName], dataparams);
                } else {
                    obj[keyName] = [];
                    this.BufferArrParsing(obj[keyName], dataparams);
                }
            } else {
                obj[keyName] = params.get(keyName);
            }
        }
    },
    BufferObjParsing(obj, params) {
        const paramskeyArray = params.getKeysArray();
        this.BufferParsing(obj, params, paramskeyArray);
    },
    BufferArrParsing(obj, dataparams) {
        const dataparamsSize = dataparams.size();
        for (var paramsIndex = 0; paramsIndex < dataparamsSize; paramsIndex++) {
            const detailparams = dataparams.getSFSObject(paramsIndex);
            const dataparamskeyArray = detailparams.getKeysArray();
            obj[paramsIndex] = {};
            this.BufferParsing(obj[paramsIndex], detailparams, dataparamskeyArray);
        }
    },
    //伺服器回傳接收器
    SFSBuffer: function (event) {
        console.log("=========收=========");
        console.log(event);
        console.log("=========收=========");
        // 第一層
        var cmd = event.cmd;
        var params = event.params;
        var paramskeyArray = params.getKeysArray();
        socketSetting.ServerReturnData[cmd] = {};
        obj_socket.self.BufferParsing(socketSetting.ServerReturnData[cmd], params, paramskeyArray);
        switch (cmd) {
            //=======================================================大廳用封包====================================================
            case "LobbyInfo":
                // cc.log("LobbyInfo");
                //大廳房
                socketSetting.ServerReturnData.LobbyName = params.getUtfString("LobbyName");
                socketSetting.serverSfs.send(new SFS2X.JoinRoomRequest(socketSetting.ServerReturnData.LobbyName));
                break;
            case "MemberInfo":
                //玩家資訊
                socketSetting.ClientSetObject.Ratio = params.getInt("Ratio");
                var buf = {};
                buf.GameID = socketSetting.ClientSetObject.serverGameGroupID;
                obj_socket.self.SFSToServer("GameLobbyInfo", buf);
                if (window.windows != 1) {
                    try {
                        window.CocosLoadEnd();
                    } catch (e) {
                        console.log(e);
                    }
                }
                break;
            case "GameLobbyInfoResult":
                socketSetting.ServerReturnData.GameLobbyName = params.getUtfString("GameLobbyName");
                socketSetting.serverSfs.send(new SFS2X.JoinRoomRequest(socketSetting.ServerReturnData.GameLobbyName));
                break;

            case "DisconnetException":
                // 帳號重複登入，已中斷連線，請自行關閉遊戲
                socketSetting.ClientSetObject.ConnectionType = socketSetting.ServerReturnData[cmd].Reason;
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9023");
                socketSetting.ClientSetObject.ErrorMessageCode = "S_9023";
                socketSetting.ClientSetObject.WarningBoolean = true;//底層警告文字是否常駐
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕是否顯示
                ResultSortOut.instance.SFSToGame("Warning");
                socketSetting.ClientSetObject.SendWarning = true;
                break;

            case "KickMsg":
                socketSetting.ClientSetObject.WarningText = socketSetting.ServerReturnData[cmd].Msg;
                socketSetting.ClientSetObject.WarningBoolean = true;//底層警告文字是否常駐
                ResultSortOut.instance.SFSToGame("Warning");
                socketSetting.ClientSetObject.SendWarning = true;
                break;

            case "UpdatePoints":
                ResultSortOut.instance.SFSToGame("UpdatePoints");
                break;
        }
        ResultSortOut.instance.SFSToGame(cmd);
    },
    //各種失敗回傳 代碼及訊息
    serverreturnError: function (event) {
        socketSetting.ClientSetObject.SFSLoadStart = false;
        console.log(event);
        socketSetting.ClientSetObject.WarningBoolean = true;
        socketSetting.ClientSetObject.WarningBtnBoolean = false;
        switch (event.errorCode) {
            case 3:
                // 帳號重複登入，已中斷連線，請自行關閉遊戲
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9023");
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕顯示
                break;
            case 4:
                // 帳號遭到鎖定
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9025");
                break;
            case 6:
                // 帳號已登入該房間
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9029");
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕顯示
                socketSetting.ClientSetObject.ErrorMessageCode = "S_9029";
                break;
            case 9:
                // 帳號名稱有無法接受的字元
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9027");
                break;
            case 11:
                // IP遭到封鎖
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9028");
                break;
            case 12:
                socketSetting.serverSfs.send(new SFS2X.JoinRoomRequest(socketSetting.ClientSetObject.RoomName));
                break;
            //     socketSetting.ClientSetObject.WarningText = "錯誤參數造成創房失敗";
            // break;
            case 19:
                // 帳號已登入該房間
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9029");
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕顯示
                socketSetting.ClientSetObject.ErrorMessageCode = "S_9029";
                break;
            case 20:
            case 23:
                // 房間已滿無法加入
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9031");
                socketSetting.ClientSetObject.WarningBoolean = false;
                break;
            case 0:
                //"連接逾時，請重新登入"
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9024");
                socketSetting.ClientSetObject.WarningBoolean = true;//底層警告文字常駐
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕不顯示
                socketSetting.ClientSetObject.SendWarning = true;
                break;

            case 2:
                // 登入失敗請聯繫客服E：
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9902") + event.errorCode;
                socketSetting.ClientSetObject.WarningBoolean = true;//底層警告文字常駐
                socketSetting.ClientSetObject.WarningBtnBoolean = true;//警告文字的按鈕不顯示
                socketSetting.ClientSetObject.SendWarning = true;
                break;
            case 1:
            case 5:
            case 7:
            case 8:
            case 10:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 21:
            case 22:
            case 24:
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
            case 30:
            case 31:
            case 32:
            case 33:
            case 34:
            case 35:
            case 36:
            case 37:
            case 38:
            case 39:
            case 40:
            case 41:
            case 42:
                // 遊戲異常請聯繫客服E：
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9901") + event.errorCode;
                break;
            default:
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9901") + "9999!!";
                break;
        }
        ResultSortOut.instance.SFSToGame("Warning");
    },
    //給客端呼叫送值給server
    SFSToServer: function (PackName, DataObject) {
        // console.log("送",PackName,DataObject);
        var params = new SFS2X.SFSObject();
        for (let key in DataObject) {
            params.putUtfString(key, String(DataObject[key]));
        }

        if (socketSetting.serverSfs.isConnected)
            socketSetting.serverSfs.send(new SFS2X.ExtensionRequest(PackName, params, socketSetting.serverSfs.lastJoinedRoom));
    },
    // =============訊息類=============
    //公用訊息
    onPublicMessage: function (event) {
        var sender = (event.sender.isItMe ? "You" : event.sender.name);
        var msg = "<b>" + sender + " said:</b><br/>" + event.message;
    },
    //私有訊息
    onPrivateMessage: function (event) {

    },
    onAdminMessage: function (event) {
        //console.log("onAdminMessage",event.message);
        socketSetting.ServerReturnData.Message = "<color=#ffffff><b>" + event.message + "</b></c>";
        ResultSortOut.instance.SFSToGame("Marquee");
    },
    onObjectMessage: function (event) {
        //console.log("onObjectMessage",event.message);
        socketSetting.ServerReturnData.Message = "<color=#ffffff><b>" + event.message + "</b></c>";
        ResultSortOut.instance.SFSToGame("Marquee");
    },
    onModeratorMessage: function (event) {
        console.log("onModeratorMessage", event.message);
        switch (event.message.replace('Kick@#$', '')) {
            case "0" :
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9091");
                break;
            case "1" :
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9089");
                break;
            case "2" :
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9015");
                break;
            case "3" :
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9092");
                break;
            case "4" :
                // 閒置過長斷線
                socketSetting.ClientSetObject.WarningText = socketSetting.t("S_9005");
                break;
        }
        socketSetting.ClientSetObject.WarningBoolean = true;//底層警告文字是否常駐
        ResultSortOut.instance.SFSToGame("Warning");
        socketSetting.ClientSetObject.SendWarning = true;
    },
    // =============訊息類=============
    //延遲值(Ping)
    onPING_PONG: function (event) {
        //console.log(event.lagValue);
        socketSetting.ClientSetObject.PingPong = event.lagValue;
        if (socketSetting.ClientSetObject.joinRoom === true && socketSetting.ClientSetObject.joinLobbyRoom === false) {
            ResultSortOut.instance.SFSToGame("ShowPing");
        }
    },
    otherserver: function () {
        // server可自改伺服器
        if ((window.location.search).length > 0) {
            var getsearch = window.location.search.split('?')[1];
            var searchList = getsearch.split('&');
            var urldata = {};
            for (var key in searchList) {
                urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];
            }
            for (var datakey in urldata) {
                if (datakey == "S") {
                    socketSetting.ClientSetObject.serverhost = urldata[datakey];
                    cc.debug._resetDebugSetting(1);
                } else if (datakey == "P") {
                    socketSetting.ClientSetObject.serverport = parseInt(urldata[datakey]);
                }
            }
        }
    },
    otherLang: function () {
        // server可自改語言與伺服器
        if ((window.location.search).length > 0) {
            var getsearch = window.location.search.split('?');
            var urldata = {};
            for (var getsearchKey in getsearch) {
                if (getsearch[getsearchKey] != "") {
                    let searchList = getsearch[getsearchKey].split('&');
                    for (var key in searchList) {
                        urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];
                        for (var datakey in urldata) {
                            // cc.log(datakey);
                            if (datakey == "L") {
                                socketSetting.ClientSetObject.UserLanguage = urldata[datakey];
                            } else if (datakey == "S") {
                                socketSetting.ClientSetObject.serverhost = urldata[datakey];
                                cc.debug._resetDebugSetting(1);
                            }
                        }
                    }
                }
            }
        }
    },
    // 回官網
    backHome: function () {
        if (socketSetting.ClientSetObject.backHomeURL != "") {
            document.location.href = socketSetting.ClientSetObject.backHomeURL;
        } else {
            this.closeWindow();
        }
    },
    // 關閉視窗
    closeWindow: function () {
        window.open('', '_self', '');
        window.close();
    },
});

function loadScript(url, callback, callBackError) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    // if(socketSetting.ClientSetObject.loadLanguageCount == "error"){
    //     return;
    // }

    if (typeof (callback) != "undefined") {
        cc.log("0", script.readyState, script)
        if (script.readyState) {
            cc.log("1")
            document.onreadystatechange
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    cc.log("2")
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            cc.log("3")
            script.onload = function () {
                cc.log("4")
                callback();
            };
            script.onerror = function () {
                if (socketSetting.ClientSetObject.loadLanguageCount < 1) {
                    loadScript(url, callback, callBackError);
                    socketSetting.ClientSetObject.loadLanguageCount++;
                } else {
                    callBackError();
                }
            }
        }
    }
    script.src = url;
    cc.log(script)
    document.body.appendChild(script);
}
export {socketJS};