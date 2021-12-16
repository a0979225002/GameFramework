
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Socket/Socket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c75e17uDMJGc66OKAUFiopN', 'Socket');
// script/Socket/Socket.js

"use strict";

exports.__esModule = true;
exports.socketJS = void 0;

var _SocketSetting = _interopRequireDefault(require("./SocketSetting"));

var _ResultSortOut = _interopRequireDefault(require("./ResultSortOut"));

var _WebRequestManager = _interopRequireDefault(require("../Framework/WebRequest/WebRequestManager"));

var _ConfigEnum = require("../Framework/Config/Enum/ConfigEnum");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socketJS = null;
exports.socketJS = socketJS;
var obj_socket = {};
cc.Class({
  "extends": cc.Component,
  onLoad: function onLoad() {
    if (_SocketSetting["default"].setboolean === true) {
      return;
    }

    exports.socketJS = socketJS = this.node.getComponent("Socket");
    cc.game.addPersistRootNode(this.node);
    _SocketSetting["default"].setboolean = true;
    obj_socket.self = this;
    _SocketSetting["default"].ClientSetObject.serverhost = "210.241.243.205"; //serverIP //210.241.243.206
    // socketSetting.ClientSetObject.serverhost = "210.241.243.206";//serverIP //210.241.243.206

    _SocketSetting["default"].ClientSetObject.serverport = 8080;
    _SocketSetting["default"].ClientSetObject.account = "ppg018"; //ppg015~020
    // socketSetting.ClientSetObject.account                = "ppg018";//ppg015~020

    _SocketSetting["default"].ClientSetObject.password = "123456"; //123456

    _SocketSetting["default"].ClientSetObject.CocosDebug = true; //--------!!!-------//

    _SocketSetting["default"].ClientSetObject.CocosDebug2 = 1; //--------!!!-------//

    _SocketSetting["default"].ClientSetObject.LoginState = "3"; // 0註冊 1登入 2遊客 3 測試人員記錄測試
    // socketSetting.ClientSetObject.LoginState             = "3"; // 0註冊 1登入 2遊客 3 測試人員記錄測試

    _SocketSetting["default"].ClientSetObject.whereRoom = "lobby";
    _SocketSetting["default"].ClientSetObject.serverZone = "H5Game"; //server的樓

    _SocketSetting["default"].ClientSetObject.usercode = "";
    _SocketSetting["default"].ClientSetObject.userchannel_id = "0";
    _SocketSetting["default"].ClientSetObject.usergame_id = "";
    _SocketSetting["default"].ClientSetObject.usertoken = "021387939f47ee31a94d8eefc400ccf12f13a198815be47555611a1b80bb61a25e576f367c71e76ac5fe40c11e84283ed579df648444f16b"; // socketSetting.ClientSetObject.usertoken              = "69190146c53e471b0029411571d09dffbb04cdef508904c8d07ec504241372ea183003e4fb67461185f4ffe69affed098aeeca1097b239c7";

    _SocketSetting["default"].ClientSetObject.userlang = "";
    _SocketSetting["default"].ClientSetObject.usergameMaker = "";
    _SocketSetting["default"].ClientSetObject.backHomeURL = "http://va-game.com/pc/VA-index"; // socketSetting.ClientSetObject.backHomeURL = "";
    // socketSetting.ClientSetObject.loadLanguageDefaultURL = "http://210.241.243.206/VAWebsite/game/ce_game_h5/lib/language/";

    _SocketSetting["default"].ClientSetObject.loadLanguageDefaultURL = "http://10.10.0.47/games/lib/language/";
    _SocketSetting["default"].ClientSetObject.loadLanguage = _SocketSetting["default"].ClientSetObject.loadLanguageDefaultURL;
    _SocketSetting["default"].ClientSetObject.loadLanguageCount = 0; //--------!!!-------//

    _SocketSetting["default"].ClientSetObject.LoginData = ""; //--------!!!-------//

    _SocketSetting["default"].ClientSetObject.UserLanguage = _ConfigEnum.LanguageType.Chinese; //語言
    //TODO

    _WebRequestManager["default"].instance.serverHost = _SocketSetting["default"].ClientSetObject.serverhost;
    _WebRequestManager["default"].instance.UserLanguage = _SocketSetting["default"].ClientSetObject.UserLanguage;
    _WebRequestManager["default"].instance.backHomeURL = _SocketSetting["default"].ClientSetObject.backHomeURL; // API參數

    cc.log("測試打包文件參數:", window.GameServerSocket);

    if (window.GameServerSocket != null) {
      _SocketSetting["default"].ClientSetObject.serverhost = window.GameServerSocket;
      _SocketSetting["default"].ClientSetObject.LoginState = window.loginType;
      _SocketSetting["default"].ClientSetObject.account = window.accountName.toLowerCase();
      _SocketSetting["default"].ClientSetObject.usercode = window.code;
      _SocketSetting["default"].ClientSetObject.userchannel_id = window.channelId;
      _SocketSetting["default"].ClientSetObject.usergame_id = window.gameId;
      _SocketSetting["default"].ClientSetObject.usertoken = window.token;
      _SocketSetting["default"].ClientSetObject.userlang = window.lang;
      _SocketSetting["default"].ClientSetObject.UserLanguage = window.lang;
      _SocketSetting["default"].ClientSetObject.usergameMaker = window.gameMaker;
      _SocketSetting["default"].ClientSetObject.backHomeURL = window.homeURL;
      console.log(_SocketSetting["default"].ClientSetObject.backHomeURL);
      _SocketSetting["default"].ClientSetObject.CocosDebug2 = 0;
      _SocketSetting["default"].ClientSetObject.loadLanguage = window.libraryPath && window.libraryPath != "" ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "") + "/lib/language/" : "../../lib/language/"; //TODO

      _WebRequestManager["default"].instance.UserLanguage = window.lang;
      _WebRequestManager["default"].instance.backHomeURL = window.homeURL;
      _WebRequestManager["default"].instance.serverHost = window.GameServerSocket;
    }

    if (_SocketSetting["default"].ClientSetObject.LoginState == "2") {
      _SocketSetting["default"].ClientSetObject.serverZone = "H5Demo"; //server的樓
    } // 遊戲端底層預設參數


    _SocketSetting["default"].ClientSetObject.serverExtensionID = "game"; //server的房(讀取Server的哪個資料夾)

    _SocketSetting["default"].ClientSetObject.servergameID = 0; //遊戲編號

    _SocketSetting["default"].ClientSetObject.serverExtensionsClass = ""; //(讀取Server的資料夾內的哪個檔)

    _SocketSetting["default"].ClientSetObject.serverGameGroupID = ""; //server的桌

    _SocketSetting["default"].ClientSetObject.RoomName = ""; //房間名稱

    _SocketSetting["default"].ClientSetObject.RoomBetRange = 0; //房間區間

    _SocketSetting["default"].ClientSetObject.WarningText = ""; //底層警告文字

    _SocketSetting["default"].ClientSetObject.WarningBoolean = false; //底層警告文字是否常駐

    _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕是否顯示

    _SocketSetting["default"].ClientSetObject.Ratio = 100; //比值

    _SocketSetting["default"].ClientSetObject.PingPong = 0; //Ping參數

    _SocketSetting["default"].ClientSetObject.SFSLoadStart = false; //是否已呼過

    _SocketSetting["default"].ClientSetObject.languageLoaded = false;
    _SocketSetting["default"].ClientSetObject.ConnectionType = "0"; //預設連線狀態

    _SocketSetting["default"].ClientSetObject.SendWarning = false; //避免錯誤訊息被覆蓋

    _SocketSetting["default"].ClientSetObject.ErrorMessageCode = ""; //錯誤訊息代號

    cc.debug._resetDebugSetting(_SocketSetting["default"].ClientSetObject.CocosDebug2);

    this.otherLang();

    _SocketSetting["default"].firstLoad(_SocketSetting["default"].ClientSetObject.UserLanguage);
  },
  LoadLanguage: function LoadLanguage(_language) {
    var URL_Random = new Date().getTime();
    loadScript(_SocketSetting["default"].ClientSetObject.loadLanguage + _language + ".js?=" + URL_Random, obj_socket.self.loadLanguageEnd, obj_socket.self.loadLanguageError);
  },
  loadLanguageEnd: function loadLanguageEnd() {
    _SocketSetting["default"].init(_SocketSetting["default"].ClientSetObject.UserLanguage); //設定語言
    // ResultSortOut.SFSToGame('languageOnLoad');


    obj_socket.self.realSFSLoad();
  },
  loadLanguageError: function loadLanguageError() {
    _SocketSetting["default"].ClientSetObject.loadLanguageCount = 0;
    loadScript(_SocketSetting["default"].ClientSetObject.loadLanguageDefaultURL + _SocketSetting["default"].ClientSetObject.UserLanguage + ".js", obj_socket.self.loadLanguageEnd, obj_socket.self.loadLanguageErrorAgain);
  },
  loadLanguageErrorAgain: function loadLanguageErrorAgain() {
    _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9077"); //"语言包下载失败请通知客服";

    _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true;

    _ResultSortOut["default"].instance.SFSToGame("Warning");

    obj_socket.self.realSFSLoad();
  },
  SFSLoad: function SFSLoad(GameNumber) {
    // cc.log("SFSLoad",GameNumber);
    if (_SocketSetting["default"].ClientSetObject.SFSLoadStart == true) {
      return;
    }

    _SocketSetting["default"].ClientSetObject.SFSLoadStart = true;
    _SocketSetting["default"].ClientSetObject.servergameID = GameNumber; //遊戲編號

    _SocketSetting["default"].ClientSetObject.serverExtensionsClass = "com.game" + _SocketSetting["default"].ClientSetObject.servergameID + ".sfs2x.Entrance"; //(讀取Server的資料夾內的哪個檔)

    _SocketSetting["default"].ClientSetObject.serverGameGroupID = "game" + _SocketSetting["default"].ClientSetObject.servergameID; //server的桌

    _SocketSetting["default"].ClientSetObject.usergame_id = GameNumber.toString(); //20190704優先載入語言包後再登入

    obj_socket.self.LoadLanguage(_SocketSetting["default"].ClientSetObject.UserLanguage);
  },
  realSFSLoad: function realSFSLoad() {
    this.otherserver();
    var config = {}; // socketSetting.ClientSetObject.serverport = (config.useSSL = 'https:' == document.location.protocol) ? 8443: 8080;

    if (typeof window.ReturnPort == 'function') {
      _SocketSetting["default"].ClientSetObject.serverport = window.ReturnPort().userport;
      config.useSSL = window.ReturnPort().useSSL;
    } else {
      _SocketSetting["default"].ClientSetObject.serverport = (config.useSSL = 'https:' == document.location.protocol) ? 8443 : 8080;
    }

    config.host = _SocketSetting["default"].ClientSetObject.serverhost;
    config.port = _SocketSetting["default"].ClientSetObject.serverport;
    config.zone = _SocketSetting["default"].ClientSetObject.serverZone;
    _SocketSetting["default"].serverSfs = new SFS2X.SmartFox(config);
    cc.log(config); // Add event listeners

    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection, this); //連線


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost, this); //連線中斷


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin, this); //登入


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.serverreturnError, this); //登入錯誤


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout, this); //登出


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoined, this); //加入房


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.serverreturnError, this); //加入錯誤


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.PING_PONG, this.onPING_PONG, this); //玩家手機與伺服器的延遲時間


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage, this); //公訊(類似廣播)


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, this.onPrivateMessage, this); //私訊(類似密語)


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.onAdminMessage, this); //GM廣播(Zone)


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage, this); //單幣別廣播(Zone)


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage, this); //單幣別廣播(Zone)
    //下注監聽器


    _SocketSetting["default"].serverSfs.addEventListener(SFS2X.SFSEvent.EXTENSION_RESPONSE, this.SFSBuffer, this);

    _SocketSetting["default"].serverSfs.connect();
  },
  //連線成功
  onConnection: function onConnection(event) {
    if (event.success) {
      console.log("Socket Connected", event); //登入

      this.SFSLogin();
    } else {
      _SocketSetting["default"].ClientSetObject.SFSLoadStart = false;
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9009");
      _SocketSetting["default"].ClientSetObject.WarningBoolean = true;

      _ResultSortOut["default"].instance.SFSToGame("Warning");
    }
  },
  //連線遺失
  onConnectionLost: function onConnectionLost(event) {
    _SocketSetting["default"].ClientSetObject.SFSLoadStart = false;

    _SocketSetting["default"].serverSfs.enableLagMonitor(false); //關閉Ping功能


    console.log(event); //http://docs2x.smartfoxserver.com/api-docs/jsdoc/symbols/SFS2X.Utils.ClientDisconnectionReason.html

    var reason = event.reason;
    _SocketSetting["default"].ClientSetObject.WarningBoolean = true;
    _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true;
    cc.log(SFS2X.ClientDisconnectionReason.BAN);

    if (reason == SFS2X.ClientDisconnectionReason.BAN) {
      //Client was banned from the server. Banning can occur automatically (i.e. for flooding, if the flood filter is active) or due to the intervention of a user with enough privileges (i.e. an administrator or a moderator).
      //被Server阻擋
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9009") + '!';

      _ResultSortOut["default"].instance.SFSToGame("GameClose");

      _ResultSortOut["default"].instance.SFSToGame("Warning");
    } else if (reason == SFS2X.ClientDisconnectionReason.IDLE) {
      //Client was disconnected because it was idle for too long. The connection timeout depends on the server settings.
      //閒置過久斷開
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9005") + '!!';

      _ResultSortOut["default"].instance.SFSToGame("GameClose");

      _ResultSortOut["default"].instance.SFSToGame("Warning");
    } else if (reason == SFS2X.ClientDisconnectionReason.KICK) {
      //Client was kicked out of the server. Kicking can occur automatically (i.e. for swearing, if the words filter is active) or due to the intervention of a user with enough privileges (i.e. an administrator or a moderator).
      //Client被Server踢出
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9009") + '!!!';

      if (!_SocketSetting["default"].ClientSetObject.SendWarning) {
        _ResultSortOut["default"].instance.SFSToGame("GameClose");

        _ResultSortOut["default"].instance.SFSToGame("Warning");
      }
    } else if (reason == SFS2X.ClientDisconnectionReason.MANUAL) {
      //The client manually disconnected from the server. The disconnect method on the SmartFox class was called.
      //Client自斷
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9009") + '!!!!';
    } else if (reason == SFS2X.ClientDisconnectionReason.UNKNOWN) {
      //A generic network error occurred, and the client is unable to determine the cause of the disconnection. The server-side log should be checked for possible error messages or warnings.
      //客戶端無法得知的錯誤，需查server 的 Log
      _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9009") + '!!!!!';

      if (!_SocketSetting["default"].ClientSetObject.SendWarning) {
        _ResultSortOut["default"].instance.SFSToGame("GameClose");

        _ResultSortOut["default"].instance.SFSToGame("Warning");
      }
    }

    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnection); //連線


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnectionLost); //連線中斷


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.LOGIN, this.onLogin); //登入


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.LOGIN_ERROR, this.serverreturnError); //登入錯誤


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.LOGOUT, this.onLogout); //登出


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN, this.onRoomJoined); //加入房


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.ROOM_JOIN_ERROR, this.serverreturnError); //加入錯誤


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.PING_PONG, this.onPING_PONG); //玩家手機與伺服器的延遲時間


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.PUBLIC_MESSAGE, this.onPublicMessage); //公訊(類似廣播)


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.PRIVATE_MESSAGE, this.onPrivateMessage); //私訊(類似密語)


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.ADMIN_MESSAGE, this.onAdminMessage); //GM廣播(Zone)


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.OBJECT_MESSAGE, this.onObjectMessage); //單幣別廣播(Zone)


    _SocketSetting["default"].serverSfs.removeEventListener(SFS2X.SFSEvent.MODERATOR_MESSAGE, this.onModeratorMessage); //單幣別廣播(Zone)

  },
  //SmartFox Login 登入
  SFSLogin: function SFSLogin() {
    _SocketSetting["default"].ClientSetObject.LoginData = new SFS2X.SFSObject();

    _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("LoginState", _SocketSetting["default"].ClientSetObject.LoginState);

    if (_SocketSetting["default"].ClientSetObject.LoginState == "0") {
      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CreatAccount", _SocketSetting["default"].Creat.CreatAccount);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CreatPassword", _SocketSetting["default"].Creat.CreatPassword);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CreatNickName", _SocketSetting["default"].Creat.CreatNickName);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CreatEmail", _SocketSetting["default"].Creat.CreatEmail);

      _SocketSetting["default"].serverSfs.send(new SFS2X.LoginRequest(null, _SocketSetting["default"].Creat.CreatPassword, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].serverZone));

      _SocketSetting["default"].ClientSetObject.LoginData = new SFS2X.SFSObject();
    } else if (_SocketSetting["default"].ClientSetObject.LoginState == "1" || _SocketSetting["default"].ClientSetObject.LoginState == "3" || _SocketSetting["default"].ClientSetObject.LoginState == "4") {
      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CheckPW", _SocketSetting["default"].ClientSetObject.password);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserCode", _SocketSetting["default"].ClientSetObject.usercode);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserChannelID", _SocketSetting["default"].ClientSetObject.userchannel_id);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserGameID", _SocketSetting["default"].ClientSetObject.usergame_id);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserToken", _SocketSetting["default"].ClientSetObject.usertoken);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserLang", _SocketSetting["default"].ClientSetObject.userlang);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("APIUserGameMaker", _SocketSetting["default"].ClientSetObject.usergameMaker);

      cc.log(_SocketSetting["default"].ClientSetObject.password, _SocketSetting["default"].ClientSetObject.usercode, _SocketSetting["default"].ClientSetObject.userchannel_id, _SocketSetting["default"].ClientSetObject.usergame_id, _SocketSetting["default"].ClientSetObject.usertoken, _SocketSetting["default"].ClientSetObject.userlang, _SocketSetting["default"].ClientSetObject.usergameMaker);
      cc.log(_SocketSetting["default"].ClientSetObject.account, _SocketSetting["default"].ClientSetObject.password, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].ClientSetObject.serverZone);

      _SocketSetting["default"].serverSfs.send(new SFS2X.LoginRequest(_SocketSetting["default"].ClientSetObject.account, _SocketSetting["default"].ClientSetObject.password, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].ClientSetObject.serverZone));
    } else if (_SocketSetting["default"].ClientSetObject.LoginState == "2") {
      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CheckPW", ""); // socketSetting.serverSfs.send(new SFS2X.LoginRequest("test001",null,socketSetting.ClientSetObject.LoginData,socketSetting.serverZone));


      if (window.test) {
        // socketSetting.serverSfs.send(new SFS2X.LoginRequest("test002",null,socketSetting.ClientSetObject.LoginData,socketSetting.serverZone));
        _SocketSetting["default"].serverSfs.send(new SFS2X.LoginRequest(null, null, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].serverZone));
      } else {
        _SocketSetting["default"].serverSfs.send(new SFS2X.LoginRequest(null, null, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].serverZone));
      }
    }

    cc.log("ddddd", _SocketSetting["default"].ClientSetObject.LoginState);
  },
  //登入成功
  onLogin: function onLogin(event) {
    _SocketSetting["default"].ServerReturnData.stateValue = event.data.get("State");

    switch (event.data.get("LoginState")) {
      case "0":
        break;

      case "1":
      case "2":
        switch (_SocketSetting["default"].ServerReturnData.stateValue) {
          case 0:
            _SocketSetting["default"].ClientSetObject.password = "";
            _SocketSetting["default"].ClientSetObject.LoginData = new SFS2X.SFSObject();
            break;

          case 1:
            _ResultSortOut["default"].instance.SFSToGame("loginError");

            break;
        }

        break;
    }
  },
  //登出成功的事件
  onLogout: function onLogout(event) {
    _SocketSetting["default"].ClientSetObject.SFSLoadStart = false;

    _SocketSetting["default"].serverSfs.disconnect(); //註冊事件登入


    if (_SocketSetting["default"].ServerReturnData.stateValue == 0 && _SocketSetting["default"].ClientSetObject.LoginState == "0") {
      _SocketSetting["default"].ClientSetObject.LoginState = "1";

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("LoginState", _SocketSetting["default"].ClientSetObject.LoginState);

      _SocketSetting["default"].ClientSetObject.LoginData.putUtfString("CheckPW", _SocketSetting["default"].Creat.CreatPassword);

      _SocketSetting["default"].serverSfs.send(new SFS2X.LoginRequest(_SocketSetting["default"].Creat.CreatAccount, _SocketSetting["default"].Creat.CreatPassword, _SocketSetting["default"].ClientSetObject.LoginData, _SocketSetting["default"].serverZone));

      _SocketSetting["default"].ClientSetObject.LoginData = new SFS2X.SFSObject();
      _SocketSetting["default"].Creat = {};
    }
  },
  //Clinet要求登出的function
  GameLogout: function GameLogout() {
    // Logout
    //給遊戲端呼叫的登出function
    _SocketSetting["default"].serverSfs.send(new SFS2X.Requests.System.LogoutRequest());
  },
  //Clinet要求加入房的function
  SFSJoinRoom: function SFSJoinRoom(_roomName) {
    //入房
    _SocketSetting["default"].serverSfs.send(new SFS2X.JoinRoomRequest(_roomName));
  },
  //加入房成功事件
  onRoomJoined: function onRoomJoined(evtParams) {
    _SocketSetting["default"].ClientSetObject.whereRoom = evtParams.room.groupId;

    switch (_SocketSetting["default"].ClientSetObject.whereRoom) {
      case "Lobby":
        _ResultSortOut["default"].instance.SFSToGame("LeaveGame");

        break;

      case "GameLobby":
        _ResultSortOut["default"].instance.SFSToGame("GameLobby");

        break;

      case _SocketSetting["default"].ClientSetObject.serverGameGroupID:
        _SocketSetting["default"].serverSfs.enableLagMonitor(true, 5);

        _ResultSortOut["default"].instance.SFSToGame("CanPlayGame");

        break;
    }
  },
  BufferParsing: function BufferParsing(obj, params, paramskeyArray) {
    for (var key in paramskeyArray) {
      var keyName = paramskeyArray[key];

      if (typeof params.get(keyName) === "object" && Array.isArray(params.get(keyName)) === false) {
        var dataparams = params.get(keyName);

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
  BufferObjParsing: function BufferObjParsing(obj, params) {
    var paramskeyArray = params.getKeysArray();
    this.BufferParsing(obj, params, paramskeyArray);
  },
  BufferArrParsing: function BufferArrParsing(obj, dataparams) {
    var dataparamsSize = dataparams.size();

    for (var paramsIndex = 0; paramsIndex < dataparamsSize; paramsIndex++) {
      var detailparams = dataparams.getSFSObject(paramsIndex);
      var dataparamskeyArray = detailparams.getKeysArray();
      obj[paramsIndex] = {};
      this.BufferParsing(obj[paramsIndex], detailparams, dataparamskeyArray);
    }
  },
  //伺服器回傳接收器
  SFSBuffer: function SFSBuffer(event) {
    // console.log("=========收=========");
    // console.log(event);
    // console.log("=========收=========");
    // 第一層
    var cmd = event.cmd;
    var params = event.params;
    var paramskeyArray = params.getKeysArray();
    _SocketSetting["default"].ServerReturnData[cmd] = {};
    cc.log(event);
    obj_socket.self.BufferParsing(_SocketSetting["default"].ServerReturnData[cmd], params, paramskeyArray);

    switch (cmd) {
      //=======================================================大廳用封包====================================================
      case "LobbyInfo":
        // cc.log("LobbyInfo");
        //大廳房
        _SocketSetting["default"].ServerReturnData.LobbyName = params.getUtfString("LobbyName");

        _SocketSetting["default"].serverSfs.send(new SFS2X.JoinRoomRequest(_SocketSetting["default"].ServerReturnData.LobbyName));

        break;

      case "MemberInfo":
        //玩家資訊
        _SocketSetting["default"].ClientSetObject.Ratio = params.getInt("Ratio");
        var buf = {};
        buf.GameID = _SocketSetting["default"].ClientSetObject.serverGameGroupID;
        obj_socket.self.SFSToServer("GameLobbyInfo", buf);
        break;

      case "GameLobbyInfoResult":
        _SocketSetting["default"].ServerReturnData.GameLobbyName = params.getUtfString("GameLobbyName");

        _SocketSetting["default"].serverSfs.send(new SFS2X.JoinRoomRequest(_SocketSetting["default"].ServerReturnData.GameLobbyName));

        break;

      case "DisconnetException":
        // 帳號重複登入，已中斷連線，請自行關閉遊戲
        _SocketSetting["default"].ClientSetObject.ConnectionType = _SocketSetting["default"].ServerReturnData[cmd].Reason;
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9023");
        _SocketSetting["default"].ClientSetObject.ErrorMessageCode = "S_9023";
        _SocketSetting["default"].ClientSetObject.WarningBoolean = true; //底層警告文字是否常駐

        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕是否顯示

        _ResultSortOut["default"].instance.SFSToGame("Warning");

        _SocketSetting["default"].ClientSetObject.SendWarning = true;
        break;

      case "KickMsg":
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].ServerReturnData[cmd].Msg;
        _SocketSetting["default"].ClientSetObject.WarningBoolean = true; //底層警告文字是否常駐

        _ResultSortOut["default"].instance.SFSToGame("Warning");

        _SocketSetting["default"].ClientSetObject.SendWarning = true;
        break;

      case "UpdatePoints":
        _ResultSortOut["default"].instance.SFSToGame("UpdatePoints");

        break;
    }

    _ResultSortOut["default"].instance.SFSToGame(cmd);
  },
  //各種失敗回傳 代碼及訊息
  serverreturnError: function serverreturnError(event) {
    _SocketSetting["default"].ClientSetObject.SFSLoadStart = false;
    console.log(event);
    _SocketSetting["default"].ClientSetObject.WarningBoolean = true;
    _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = false;

    switch (event.errorCode) {
      case 3:
        // 帳號重複登入，已中斷連線，請自行關閉遊戲
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9023");
        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕顯示

        break;

      case 4:
        // 帳號遭到鎖定
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9025");
        break;

      case 6:
        // 帳號已登入該房間
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9029");
        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕顯示

        _SocketSetting["default"].ClientSetObject.ErrorMessageCode = "S_9029";
        break;

      case 9:
        // 帳號名稱有無法接受的字元
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9027");
        break;

      case 11:
        // IP遭到封鎖
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9028");
        break;

      case 12:
        _SocketSetting["default"].serverSfs.send(new SFS2X.JoinRoomRequest(_SocketSetting["default"].ClientSetObject.RoomName));

        break;
      //     socketSetting.ClientSetObject.WarningText = "錯誤參數造成創房失敗";
      // break;

      case 19:
        // 帳號已登入該房間
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9029");
        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕顯示

        _SocketSetting["default"].ClientSetObject.ErrorMessageCode = "S_9029";
        break;

      case 20:
      case 23:
        // 房間已滿無法加入
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9031");
        _SocketSetting["default"].ClientSetObject.WarningBoolean = false;
        break;

      case 0:
        //"連接逾時，請重新登入"
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9024");
        _SocketSetting["default"].ClientSetObject.WarningBoolean = true; //底層警告文字常駐

        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕不顯示

        _SocketSetting["default"].ClientSetObject.SendWarning = true;
        break;

      case 2:
        // 登入失敗請聯繫客服E：
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9902") + event.errorCode;
        _SocketSetting["default"].ClientSetObject.WarningBoolean = true; //底層警告文字常駐

        _SocketSetting["default"].ClientSetObject.WarningBtnBoolean = true; //警告文字的按鈕不顯示

        _SocketSetting["default"].ClientSetObject.SendWarning = true;
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
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9901") + event.errorCode;
        break;

      default:
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9901") + "9999!!";
        break;
    }

    _ResultSortOut["default"].instance.SFSToGame("Warning");
  },
  //給客端呼叫送值給server
  SFSToServer: function SFSToServer(PackName, DataObject) {
    // console.log("送",PackName,DataObject);
    var params = new SFS2X.SFSObject();

    for (var key in DataObject) {
      params.putUtfString(key, String(DataObject[key]));
    }

    if (_SocketSetting["default"].serverSfs.isConnected) _SocketSetting["default"].serverSfs.send(new SFS2X.ExtensionRequest(PackName, params, _SocketSetting["default"].serverSfs.lastJoinedRoom));
  },
  // =============訊息類=============
  //公用訊息
  onPublicMessage: function onPublicMessage(event) {
    var sender = event.sender.isItMe ? "You" : event.sender.name;
    var msg = "<b>" + sender + " said:</b><br/>" + event.message;
  },
  //私有訊息
  onPrivateMessage: function onPrivateMessage(event) {},
  onAdminMessage: function onAdminMessage(event) {
    //console.log("onAdminMessage",event.message);
    _SocketSetting["default"].ServerReturnData.Message = "<color=#ffffff><b>" + event.message + "</b></c>";

    _ResultSortOut["default"].instance.SFSToGame("Marquee");
  },
  onObjectMessage: function onObjectMessage(event) {
    //console.log("onObjectMessage",event.message);
    _SocketSetting["default"].ServerReturnData.Message = "<color=#ffffff><b>" + event.message + "</b></c>";

    _ResultSortOut["default"].instance.SFSToGame("Marquee");
  },
  onModeratorMessage: function onModeratorMessage(event) {
    console.log("onModeratorMessage", event.message);

    switch (event.message.replace('Kick@#$', '')) {
      case "0":
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9091");
        break;

      case "1":
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9089");
        break;

      case "2":
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9015");
        break;

      case "3":
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9092");
        break;

      case "4":
        // 閒置過長斷線
        _SocketSetting["default"].ClientSetObject.WarningText = _SocketSetting["default"].t("S_9005");
        break;
    }

    _SocketSetting["default"].ClientSetObject.WarningBoolean = true; //底層警告文字是否常駐

    _ResultSortOut["default"].instance.SFSToGame("Warning");

    _SocketSetting["default"].ClientSetObject.SendWarning = true;
  },
  // =============訊息類=============
  //延遲值(Ping)
  onPING_PONG: function onPING_PONG(event) {
    //console.log(event.lagValue);
    _SocketSetting["default"].ClientSetObject.PingPong = event.lagValue;

    if (_SocketSetting["default"].ClientSetObject.joinRoom === true && _SocketSetting["default"].ClientSetObject.joinLobbyRoom === false) {
      _ResultSortOut["default"].instance.SFSToGame("ShowPing");
    }
  },
  otherserver: function otherserver() {
    // server可自改伺服器
    if (window.location.search.length > 0) {
      var getsearch = window.location.search.split('?')[1];
      var searchList = getsearch.split('&');
      var urldata = {};

      for (var key in searchList) {
        urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];
      }

      for (var datakey in urldata) {
        if (datakey == "S") {
          _SocketSetting["default"].ClientSetObject.serverhost = urldata[datakey];

          cc.debug._resetDebugSetting(1);
        } else if (datakey == "P") {
          _SocketSetting["default"].ClientSetObject.serverport = parseInt(urldata[datakey]);
        }
      }
    }
  },
  otherLang: function otherLang() {
    // server可自改語言與伺服器
    if (window.location.search.length > 0) {
      var getsearch = window.location.search.split('?');
      var urldata = {};

      for (var getsearchKey in getsearch) {
        if (getsearch[getsearchKey] != "") {
          var searchList = getsearch[getsearchKey].split('&');

          for (var key in searchList) {
            urldata[searchList[key].split('=')[0]] = searchList[key].split('=')[1];

            for (var datakey in urldata) {
              // cc.log(datakey);
              if (datakey == "L") {
                _SocketSetting["default"].ClientSetObject.UserLanguage = urldata[datakey];
              } else if (datakey == "S") {
                _SocketSetting["default"].ClientSetObject.serverhost = urldata[datakey];

                cc.debug._resetDebugSetting(1);
              }
            }
          }
        }
      }
    }
  },
  // 回官網
  backHome: function backHome() {
    if (_SocketSetting["default"].ClientSetObject.backHomeURL != "") {
      document.location.href = _SocketSetting["default"].ClientSetObject.backHomeURL;
    } else {
      this.closeWindow();
    }
  },
  // 關閉視窗
  closeWindow: function closeWindow() {
    window.open('', '_self', '');
    window.close();
  },
  // 音效
  setEffectVolume: function setEffectVolume(_volume) {
    _SocketSetting["default"].ClientSetObject.effectspoint = _volume;
  },
  switchEffect: function switchEffect() {
    cc.audioEngine.stop(_SocketSetting["default"].ClientSetObject.effectID);
    _SocketSetting["default"].ClientSetObject.effectsBoolean = !_SocketSetting["default"].ClientSetObject.effectsBoolean;
    return _SocketSetting["default"].ClientSetObject.effectsBoolean;
  },
  getEffect: function getEffect() {
    return _SocketSetting["default"].ClientSetObject.effectsBoolean;
  },
  effectPlay: function effectPlay(_effectName, _playLoop, _volume) {
    if (_playLoop === void 0) {
      _playLoop = false;
    }

    if (_volume === void 0) {
      _volume = _SocketSetting["default"].ClientSetObject.effectspoint;
    }

    if (_SocketSetting["default"].ClientSetObject.effectsBoolean == false || !cc.isValid(_effectName)) return;
    _SocketSetting["default"].ClientSetObject.effectID = cc.audioEngine.playEffect(_effectName, _playLoop, _volume);
    return _SocketSetting["default"].ClientSetObject.effectID;
  },
  effectStopThenPlay: function effectStopThenPlay(_effectName, _playLoop, _effectID, _volume) {
    if (_playLoop === void 0) {
      _playLoop = false;
    }

    if (_volume === void 0) {
      _volume = _SocketSetting["default"].ClientSetObject.effectspoint;
    }

    if (_SocketSetting["default"].ClientSetObject.effectsBoolean == false) return;
    cc.audioEngine.stop(_effectID);
    _SocketSetting["default"].ClientSetObject.effectID = cc.audioEngine.playEffect(_effectName, _playLoop, _volume);
    return _SocketSetting["default"].ClientSetObject.effectID;
  },
  effectStop: function effectStop(_effectID) {
    cc.log("停止音樂:", _effectID);
    cc.audioEngine.stop(_effectID);
  },
  // 音樂音量設定
  setMusicVolume: function setMusicVolume(_volume) {
    if (!_SocketSetting["default"].ClientSetObject.musicBoolean) return;
    _SocketSetting["default"].ClientSetObject.musicpoint = _volume;
    cc.audioEngine.setMusicVolume(_SocketSetting["default"].ClientSetObject.musicpoint);
  },
  switchMusic: function switchMusic() {
    _SocketSetting["default"].ClientSetObject.musicBoolean = !_SocketSetting["default"].ClientSetObject.musicBoolean;
    cc.audioEngine.setMusicVolume(_SocketSetting["default"].ClientSetObject.musicBoolean ? _SocketSetting["default"].ClientSetObject.musicpoint : 0);
    return _SocketSetting["default"].ClientSetObject.musicBoolean;
  },
  getMusic: function getMusic() {
    return _SocketSetting["default"].ClientSetObject.musicBoolean;
  },
  musicPlay: function musicPlay(_musicName, _playLoop, _volume) {
    if (_playLoop === void 0) {
      _playLoop = true;
    }

    if (_volume === void 0) {
      _volume = _SocketSetting["default"].ClientSetObject.musicpoint;
    }

    if (_SocketSetting["default"].ClientSetObject.musicBoolean == false || !cc.isValid(_musicName)) return;
    _SocketSetting["default"].ClientSetObject.musicPlayVal.musicName = _musicName;
    _SocketSetting["default"].ClientSetObject.musicPlayVal.playLoop = _playLoop;
    _SocketSetting["default"].ClientSetObject.musicPlayVal.volume = _volume;
    cc.audioEngine.stopMusic();
    _SocketSetting["default"].ClientSetObject.musicID = cc.audioEngine.playMusic(_musicName, _playLoop);
    cc.audioEngine.setMusicVolume(_SocketSetting["default"].ClientSetObject.musicBoolean ? _SocketSetting["default"].ClientSetObject.musicpoint : 0);
    return _SocketSetting["default"].ClientSetObject.musicID;
  },
  musicStop: function musicStop() {
    cc.audioEngine.stopMusic();
  },
  // 音樂+音效
  switchAllSound: function switchAllSound() {
    _SocketSetting["default"].ClientSetObject.soundBoolean = !_SocketSetting["default"].ClientSetObject.soundBoolean;

    if (_SocketSetting["default"].ClientSetObject.soundBoolean) {
      _SocketSetting["default"].ClientSetObject.effectsBoolean = true;
      _SocketSetting["default"].ClientSetObject.musicBoolean = true;
      cc.audioEngine.setMusicVolume(_SocketSetting["default"].ClientSetObject.musicpoint);
      obj_socket.self.musicPlay(_SocketSetting["default"].ClientSetObject.musicPlayVal.musicName, _SocketSetting["default"].ClientSetObject.musicPlayVal.playLoop, _SocketSetting["default"].ClientSetObject.musicPlayVal.volume);
    } else {
      _SocketSetting["default"].ClientSetObject.effectsBoolean = false;
      _SocketSetting["default"].ClientSetObject.musicBoolean = false;
      cc.audioEngine.stopAll();
      cc.audioEngine.setMusicVolume(0);
    }

    return _SocketSetting["default"].ClientSetObject.soundBoolean;
  }
});

function loadScript(url, callback, callBackError) {
  var script = document.createElement("script");
  script.type = "text/javascript"; // if(socketSetting.ClientSetObject.loadLanguageCount == "error"){
  //     return;
  // }

  if (typeof callback != "undefined") {
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = function () {
        callback();
      };

      script.onerror = function () {
        if (_SocketSetting["default"].ClientSetObject.loadLanguageCount < 1) {
          loadScript(url, callback, callBackError);
          _SocketSetting["default"].ClientSetObject.loadLanguageCount++;
        } else {
          callBackError();
        }
      };
    }
  }

  script.src = url;
  document.body.appendChild(script);
} // module.exports = {
//
//     /**
//      * 回傳登入
//      * @param GameNumber
//      * @constructor
//      */
//     SFSLoad : function (GameNumber){
//         module_Socket.SFSLoad(GameNumber);
//     },
//
//     /**
//      * //給客端呼叫送值給server
//      * @param PackName(String)  回傳哪個資訊
//      * @param DataObject(Object) 回傳資料
//      * @constructor
//      */
//     SFSToServer : function (PackName,DataObject){
//         module_Socket.SFSToServer(PackName,DataObject);
//     },
//
//     /**
//      *  // 回官網
//      */
//     backHome:function(){
//         module_Socket.backHome();
//     },
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxTb2NrZXRcXFNvY2tldC5qcyJdLCJuYW1lcyI6WyJzb2NrZXRKUyIsIm9ial9zb2NrZXQiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwic29ja2V0U2V0dGluZyIsInNldGJvb2xlYW4iLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsInNlbGYiLCJDbGllbnRTZXRPYmplY3QiLCJzZXJ2ZXJob3N0Iiwic2VydmVycG9ydCIsImFjY291bnQiLCJwYXNzd29yZCIsIkNvY29zRGVidWciLCJDb2Nvc0RlYnVnMiIsIkxvZ2luU3RhdGUiLCJ3aGVyZVJvb20iLCJzZXJ2ZXJab25lIiwidXNlcmNvZGUiLCJ1c2VyY2hhbm5lbF9pZCIsInVzZXJnYW1lX2lkIiwidXNlcnRva2VuIiwidXNlcmxhbmciLCJ1c2VyZ2FtZU1ha2VyIiwiYmFja0hvbWVVUkwiLCJsb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMIiwibG9hZExhbmd1YWdlIiwibG9hZExhbmd1YWdlQ291bnQiLCJMb2dpbkRhdGEiLCJVc2VyTGFuZ3VhZ2UiLCJMYW5ndWFnZVR5cGUiLCJDaGluZXNlIiwiV2ViUmVxdWVzdE1hbmFnZXIiLCJpbnN0YW5jZSIsInNlcnZlckhvc3QiLCJsb2ciLCJ3aW5kb3ciLCJHYW1lU2VydmVyU29ja2V0IiwibG9naW5UeXBlIiwiYWNjb3VudE5hbWUiLCJ0b0xvd2VyQ2FzZSIsImNvZGUiLCJjaGFubmVsSWQiLCJnYW1lSWQiLCJ0b2tlbiIsImxhbmciLCJnYW1lTWFrZXIiLCJob21lVVJMIiwiY29uc29sZSIsImxpYnJhcnlQYXRoIiwicmVwbGFjZSIsInNlcnZlckV4dGVuc2lvbklEIiwic2VydmVyZ2FtZUlEIiwic2VydmVyRXh0ZW5zaW9uc0NsYXNzIiwic2VydmVyR2FtZUdyb3VwSUQiLCJSb29tTmFtZSIsIlJvb21CZXRSYW5nZSIsIldhcm5pbmdUZXh0IiwiV2FybmluZ0Jvb2xlYW4iLCJXYXJuaW5nQnRuQm9vbGVhbiIsIlJhdGlvIiwiUGluZ1BvbmciLCJTRlNMb2FkU3RhcnQiLCJsYW5ndWFnZUxvYWRlZCIsIkNvbm5lY3Rpb25UeXBlIiwiU2VuZFdhcm5pbmciLCJFcnJvck1lc3NhZ2VDb2RlIiwiZGVidWciLCJfcmVzZXREZWJ1Z1NldHRpbmciLCJvdGhlckxhbmciLCJmaXJzdExvYWQiLCJMb2FkTGFuZ3VhZ2UiLCJfbGFuZ3VhZ2UiLCJVUkxfUmFuZG9tIiwiRGF0ZSIsImdldFRpbWUiLCJsb2FkU2NyaXB0IiwibG9hZExhbmd1YWdlRW5kIiwibG9hZExhbmd1YWdlRXJyb3IiLCJpbml0IiwicmVhbFNGU0xvYWQiLCJsb2FkTGFuZ3VhZ2VFcnJvckFnYWluIiwidCIsIlJlc3VsdFNvcnRPdXQiLCJTRlNUb0dhbWUiLCJTRlNMb2FkIiwiR2FtZU51bWJlciIsInRvU3RyaW5nIiwib3RoZXJzZXJ2ZXIiLCJjb25maWciLCJSZXR1cm5Qb3J0IiwidXNlcnBvcnQiLCJ1c2VTU0wiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsInpvbmUiLCJzZXJ2ZXJTZnMiLCJTRlMyWCIsIlNtYXJ0Rm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlNGU0V2ZW50IiwiQ09OTkVDVElPTiIsIm9uQ29ubmVjdGlvbiIsIkNPTk5FQ1RJT05fTE9TVCIsIm9uQ29ubmVjdGlvbkxvc3QiLCJMT0dJTiIsIm9uTG9naW4iLCJMT0dJTl9FUlJPUiIsInNlcnZlcnJldHVybkVycm9yIiwiTE9HT1VUIiwib25Mb2dvdXQiLCJST09NX0pPSU4iLCJvblJvb21Kb2luZWQiLCJST09NX0pPSU5fRVJST1IiLCJQSU5HX1BPTkciLCJvblBJTkdfUE9ORyIsIlBVQkxJQ19NRVNTQUdFIiwib25QdWJsaWNNZXNzYWdlIiwiUFJJVkFURV9NRVNTQUdFIiwib25Qcml2YXRlTWVzc2FnZSIsIkFETUlOX01FU1NBR0UiLCJvbkFkbWluTWVzc2FnZSIsIk9CSkVDVF9NRVNTQUdFIiwib25PYmplY3RNZXNzYWdlIiwiTU9ERVJBVE9SX01FU1NBR0UiLCJvbk1vZGVyYXRvck1lc3NhZ2UiLCJFWFRFTlNJT05fUkVTUE9OU0UiLCJTRlNCdWZmZXIiLCJjb25uZWN0IiwiZXZlbnQiLCJzdWNjZXNzIiwiU0ZTTG9naW4iLCJlbmFibGVMYWdNb25pdG9yIiwicmVhc29uIiwiQ2xpZW50RGlzY29ubmVjdGlvblJlYXNvbiIsIkJBTiIsIklETEUiLCJLSUNLIiwiTUFOVUFMIiwiVU5LTk9XTiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJTRlNPYmplY3QiLCJwdXRVdGZTdHJpbmciLCJDcmVhdCIsIkNyZWF0QWNjb3VudCIsIkNyZWF0UGFzc3dvcmQiLCJDcmVhdE5pY2tOYW1lIiwiQ3JlYXRFbWFpbCIsInNlbmQiLCJMb2dpblJlcXVlc3QiLCJ0ZXN0IiwiU2VydmVyUmV0dXJuRGF0YSIsInN0YXRlVmFsdWUiLCJkYXRhIiwiZ2V0IiwiZGlzY29ubmVjdCIsIkdhbWVMb2dvdXQiLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxvZ291dFJlcXVlc3QiLCJTRlNKb2luUm9vbSIsIl9yb29tTmFtZSIsIkpvaW5Sb29tUmVxdWVzdCIsImV2dFBhcmFtcyIsInJvb20iLCJncm91cElkIiwiQnVmZmVyUGFyc2luZyIsIm9iaiIsInBhcmFtcyIsInBhcmFtc2tleUFycmF5Iiwia2V5Iiwia2V5TmFtZSIsIkFycmF5IiwiaXNBcnJheSIsImRhdGFwYXJhbXMiLCJnZXRLZXlzQXJyYXkiLCJCdWZmZXJPYmpQYXJzaW5nIiwiQnVmZmVyQXJyUGFyc2luZyIsImRhdGFwYXJhbXNTaXplIiwic2l6ZSIsInBhcmFtc0luZGV4IiwiZGV0YWlscGFyYW1zIiwiZ2V0U0ZTT2JqZWN0IiwiZGF0YXBhcmFtc2tleUFycmF5IiwiY21kIiwiTG9iYnlOYW1lIiwiZ2V0VXRmU3RyaW5nIiwiZ2V0SW50IiwiYnVmIiwiR2FtZUlEIiwiU0ZTVG9TZXJ2ZXIiLCJHYW1lTG9iYnlOYW1lIiwiUmVhc29uIiwiTXNnIiwiZXJyb3JDb2RlIiwiUGFja05hbWUiLCJEYXRhT2JqZWN0IiwiU3RyaW5nIiwiaXNDb25uZWN0ZWQiLCJFeHRlbnNpb25SZXF1ZXN0IiwibGFzdEpvaW5lZFJvb20iLCJzZW5kZXIiLCJpc0l0TWUiLCJuYW1lIiwibXNnIiwibWVzc2FnZSIsIk1lc3NhZ2UiLCJsYWdWYWx1ZSIsImpvaW5Sb29tIiwiam9pbkxvYmJ5Um9vbSIsInNlYXJjaCIsImxlbmd0aCIsImdldHNlYXJjaCIsInNwbGl0Iiwic2VhcmNoTGlzdCIsInVybGRhdGEiLCJkYXRha2V5IiwicGFyc2VJbnQiLCJnZXRzZWFyY2hLZXkiLCJiYWNrSG9tZSIsImhyZWYiLCJjbG9zZVdpbmRvdyIsIm9wZW4iLCJjbG9zZSIsInNldEVmZmVjdFZvbHVtZSIsIl92b2x1bWUiLCJlZmZlY3RzcG9pbnQiLCJzd2l0Y2hFZmZlY3QiLCJhdWRpb0VuZ2luZSIsInN0b3AiLCJlZmZlY3RJRCIsImVmZmVjdHNCb29sZWFuIiwiZ2V0RWZmZWN0IiwiZWZmZWN0UGxheSIsIl9lZmZlY3ROYW1lIiwiX3BsYXlMb29wIiwiaXNWYWxpZCIsInBsYXlFZmZlY3QiLCJlZmZlY3RTdG9wVGhlblBsYXkiLCJfZWZmZWN0SUQiLCJlZmZlY3RTdG9wIiwic2V0TXVzaWNWb2x1bWUiLCJtdXNpY0Jvb2xlYW4iLCJtdXNpY3BvaW50Iiwic3dpdGNoTXVzaWMiLCJnZXRNdXNpYyIsIm11c2ljUGxheSIsIl9tdXNpY05hbWUiLCJtdXNpY1BsYXlWYWwiLCJtdXNpY05hbWUiLCJwbGF5TG9vcCIsInZvbHVtZSIsInN0b3BNdXNpYyIsIm11c2ljSUQiLCJwbGF5TXVzaWMiLCJtdXNpY1N0b3AiLCJzd2l0Y2hBbGxTb3VuZCIsInNvdW5kQm9vbGVhbiIsInN0b3BBbGwiLCJ1cmwiLCJjYWxsYmFjayIsImNhbGxCYWNrRXJyb3IiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInJlYWR5U3RhdGUiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJvbmxvYWQiLCJvbmVycm9yIiwic3JjIiwi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OUI7QUFDSCxTQUhELE1BR087QUFDSDZPLFVBQUFBLGFBQWE7QUFDaEI7QUFDSixPQVBEO0FBUUg7QUFDSjs7QUFDREMsRUFBQUEsTUFBTSxDQUFDTyxHQUFQLEdBQWFWLEdBQWI7QUFDQXpLLEVBQUFBLFFBQVEsQ0FBQ29MLElBQVQsQ0FBY0MsV0FBZCxDQUEwQlQsTUFBMUI7QUFDSCxFQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0U2V0dGluZyBmcm9tICcuL1NvY2tldFNldHRpbmcnO1xyXG5pbXBvcnQgUmVzdWx0U29ydE91dCBmcm9tIFwiLi9SZXN1bHRTb3J0T3V0XCI7XHJcbmltcG9ydCBXZWJSZXF1ZXN0TWFuYWdlciBmcm9tIFwiLi4vRnJhbWV3b3JrL1dlYlJlcXVlc3QvV2ViUmVxdWVzdE1hbmFnZXJcIjtcclxuaW1wb3J0IHtMYW5ndWFnZVR5cGV9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uZmlnL0VudW0vQ29uZmlnRW51bVwiO1xyXG5cclxubGV0IHNvY2tldEpTID0gbnVsbDtcclxubGV0IG9ial9zb2NrZXQgPSB7fTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuc2V0Ym9vbGVhbiA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvY2tldEpTID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChcIlNvY2tldFwiKTtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2V0Ym9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgb2JqX3NvY2tldC5zZWxmID0gdGhpcztcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJob3N0ID0gXCIyMTAuMjQxLjI0My4yMDVcIjsvL3NlcnZlcklQIC8vMjEwLjI0MS4yNDMuMjA2XHJcbiAgICAgICAgLy8gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVyaG9zdCA9IFwiMjEwLjI0MS4yNDMuMjA2XCI7Ly9zZXJ2ZXJJUCAvLzIxMC4yNDEuMjQzLjIwNlxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcnBvcnQgPSA4MDgwO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmFjY291bnQgPSBcInBwZzAxOFwiOy8vcHBnMDE1fjAyMFxyXG4gICAgICAgIC8vIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmFjY291bnQgICAgICAgICAgICAgICAgPSBcInBwZzAxOFwiOy8vcHBnMDE1fjAyMFxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnBhc3N3b3JkID0gXCIxMjM0NTZcIjsvLzEyMzQ1NlxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkNvY29zRGVidWcgPSB0cnVlOy8vLS0tLS0tLS0hISEtLS0tLS0tLy9cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Db2Nvc0RlYnVnMiA9IDE7Ly8tLS0tLS0tLSEhIS0tLS0tLS0vL1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luU3RhdGUgPSBcIjNcIjsgLy8gMOiou+WGiiAx55m75YWlIDLpgYrlrqIgMyDmuKzoqabkurrlk6HoqJjpjITmuKzoqaZcclxuICAgICAgICAvLyBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlICAgICAgICAgICAgID0gXCIzXCI7IC8vIDDoqLvlhoogMeeZu+WFpSAy6YGK5a6iIDMg5ris6Kmm5Lq65ZOh6KiY6YyE5ris6KmmXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Qud2hlcmVSb29tID0gXCJsb2JieVwiO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlclpvbmUgPSBcIkg1R2FtZVwiOy8vc2VydmVy55qE5qiTXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmNvZGUgPSBcIlwiO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJjaGFubmVsX2lkID0gXCIwXCI7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmdhbWVfaWQgPSBcIlwiO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJ0b2tlbiA9IFwiMDIxMzg3OTM5ZjQ3ZWUzMWE5NGQ4ZWVmYzQwMGNjZjEyZjEzYTE5ODgxNWJlNDc1NTU2MTFhMWI4MGJiNjFhMjVlNTc2ZjM2N2M3MWU3NmFjNWZlNDBjMTFlODQyODNlZDU3OWRmNjQ4NDQ0ZjE2YlwiO1xyXG4gICAgICAgIC8vIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJ0b2tlbiAgICAgICAgICAgICAgPSBcIjY5MTkwMTQ2YzUzZTQ3MWIwMDI5NDExNTcxZDA5ZGZmYmIwNGNkZWY1MDg5MDRjOGQwN2VjNTA0MjQxMzcyZWExODMwMDNlNGZiNjc0NjExODVmNGZmZTY5YWZmZWQwOThhZWVjYTEwOTdiMjM5YzdcIjtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VybGFuZyA9IFwiXCI7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmdhbWVNYWtlciA9IFwiXCI7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuYmFja0hvbWVVUkwgPSBcImh0dHA6Ly92YS1nYW1lLmNvbS9wYy9WQS1pbmRleFwiO1xyXG4gICAgICAgIC8vIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmJhY2tIb21lVVJMID0gXCJcIjtcclxuICAgICAgICAvLyBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMID0gXCJodHRwOi8vMjEwLjI0MS4yNDMuMjA2L1ZBV2Vic2l0ZS9nYW1lL2NlX2dhbWVfaDUvbGliL2xhbmd1YWdlL1wiO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmxvYWRMYW5ndWFnZURlZmF1bHRVUkwgPSBcImh0dHA6Ly8xMC4xMC4wLjQ3L2dhbWVzL2xpYi9sYW5ndWFnZS9cIjtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5sb2FkTGFuZ3VhZ2UgPSBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5sb2FkTGFuZ3VhZ2VEZWZhdWx0VVJMO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmxvYWRMYW5ndWFnZUNvdW50ID0gMDsvLy0tLS0tLS0tISEhLS0tLS0tLS8vXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhID0gXCJcIjsvLy0tLS0tLS0tISEhLS0tLS0tLS8vXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuVXNlckxhbmd1YWdlID0gTGFuZ3VhZ2VUeXBlLkNoaW5lc2U7Ly/oqp7oqIBcclxuXHJcbiAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgV2ViUmVxdWVzdE1hbmFnZXIuaW5zdGFuY2Uuc2VydmVySG9zdCA9IHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcmhvc3Q7XHJcbiAgICAgICAgV2ViUmVxdWVzdE1hbmFnZXIuaW5zdGFuY2UuVXNlckxhbmd1YWdlID0gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuVXNlckxhbmd1YWdlO1xyXG4gICAgICAgIFdlYlJlcXVlc3RNYW5hZ2VyLmluc3RhbmNlLmJhY2tIb21lVVJMID0gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuYmFja0hvbWVVUkw7XHJcblxyXG4gICAgICAgIC8vIEFQSeWPg+aVuFxyXG4gICAgICAgIGNjLmxvZyhcIua4rOippuaJk+WMheaWh+S7tuWPg+aVuDpcIiwgd2luZG93LkdhbWVTZXJ2ZXJTb2NrZXQpO1xyXG4gICAgICAgIGlmICh3aW5kb3cuR2FtZVNlcnZlclNvY2tldCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcmhvc3QgPSB3aW5kb3cuR2FtZVNlcnZlclNvY2tldDtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5TdGF0ZSA9IHdpbmRvdy5sb2dpblR5cGU7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmFjY291bnQgPSB3aW5kb3cuYWNjb3VudE5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmNvZGUgPSB3aW5kb3cuY29kZTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmNoYW5uZWxfaWQgPSB3aW5kb3cuY2hhbm5lbElkO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VyZ2FtZV9pZCA9IHdpbmRvdy5nYW1lSWQ7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJ0b2tlbiA9IHdpbmRvdy50b2tlbjtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmxhbmcgPSB3aW5kb3cubGFuZztcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuVXNlckxhbmd1YWdlID0gd2luZG93Lmxhbmc7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJnYW1lTWFrZXIgPSB3aW5kb3cuZ2FtZU1ha2VyO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5iYWNrSG9tZVVSTCA9IHdpbmRvdy5ob21lVVJMO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5iYWNrSG9tZVVSTCk7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkNvY29zRGVidWcyID0gMDtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubG9hZExhbmd1YWdlID0gd2luZG93LmxpYnJhcnlQYXRoICYmIHdpbmRvdy5saWJyYXJ5UGF0aCAhPSBcIlwiID8gd2luZG93LmxpYnJhcnlQYXRoLnJlcGxhY2UoL1xcLyhbXlxcL10rXFwvW15cXC9dKykkLywgXCJcIikgKyBcIi9saWIvbGFuZ3VhZ2UvXCIgOiBcIi4uLy4uL2xpYi9sYW5ndWFnZS9cIjtcclxuICAgICAgICAgICAgLy9UT0RPXHJcbiAgICAgICAgICAgIFdlYlJlcXVlc3RNYW5hZ2VyLmluc3RhbmNlLlVzZXJMYW5ndWFnZSA9IHdpbmRvdy5sYW5nO1xyXG4gICAgICAgICAgICBXZWJSZXF1ZXN0TWFuYWdlci5pbnN0YW5jZS5iYWNrSG9tZVVSTCA9IHdpbmRvdy5ob21lVVJMO1xyXG4gICAgICAgICAgICBXZWJSZXF1ZXN0TWFuYWdlci5pbnN0YW5jZS5zZXJ2ZXJIb3N0ID0gd2luZG93LkdhbWVTZXJ2ZXJTb2NrZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlclpvbmUgPSBcIkg1RGVtb1wiOy8vc2VydmVy55qE5qiTXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmBiuaIsuerr+W6leWxpOmgkOioreWPg+aVuFxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlckV4dGVuc2lvbklEID0gXCJnYW1lXCI7Ly9zZXJ2ZXLnmoTmiL8o6K6A5Y+WU2VydmVy55qE5ZOq5YCL6LOH5paZ5aS+KVxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcmdhbWVJRCA9IDA7Ly/pgYrmiLLnt6jomZ9cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJFeHRlbnNpb25zQ2xhc3MgPSBcIlwiOy8vKOiugOWPllNlcnZlcueahOizh+aWmeWkvuWFp+eahOWTquWAi+aqlClcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJHYW1lR3JvdXBJRCA9IFwiXCI7Ly9zZXJ2ZXLnmoTmoYxcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Sb29tTmFtZSA9IFwiXCI7Ly/miL/plpPlkI3nqLFcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Sb29tQmV0UmFuZ2UgPSAwOy8v5oi/6ZaT5Y2A6ZaTXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBcIlwiOy8v5bqV5bGk6K2m5ZGK5paH5a2XXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0Jvb2xlYW4gPSBmYWxzZTsvL+W6leWxpOitpuWRiuaWh+Wtl+aYr+WQpuW4uOmnkFxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCdG5Cb29sZWFuID0gdHJ1ZTsvL+itpuWRiuaWh+Wtl+eahOaMiemIleaYr+WQpumhr+ekulxyXG5cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5SYXRpbyA9IDEwMDsvL+avlOWAvFxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlBpbmdQb25nID0gMDsvL1Bpbmflj4PmlbhcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TRlNMb2FkU3RhcnQgPSBmYWxzZTsvL+aYr+WQpuW3suWRvOmBjlxyXG5cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5sYW5ndWFnZUxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkNvbm5lY3Rpb25UeXBlID0gXCIwXCI7IC8v6aCQ6Kit6YCj57ea54uA5oWLXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuU2VuZFdhcm5pbmcgPSBmYWxzZTsvL+mBv+WFjemMr+iqpOioiuaBr+iiq+imhuiTi1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkVycm9yTWVzc2FnZUNvZGUgPSBcIlwiOy8v6Yyv6Kqk6KiK5oGv5Luj6JmfXHJcblxyXG5cclxuICAgICAgICBjYy5kZWJ1Zy5fcmVzZXREZWJ1Z1NldHRpbmcoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuQ29jb3NEZWJ1ZzIpO1xyXG4gICAgICAgIHRoaXMub3RoZXJMYW5nKCk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5maXJzdExvYWQoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuVXNlckxhbmd1YWdlKTtcclxuXHJcbiAgICB9LFxyXG4gICAgTG9hZExhbmd1YWdlOiBmdW5jdGlvbiAoX2xhbmd1YWdlKSB7XHJcbiAgICAgICAgbGV0IFVSTF9SYW5kb20gPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBsb2FkU2NyaXB0KHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmxvYWRMYW5ndWFnZSArIF9sYW5ndWFnZSArIFwiLmpzPz1cIiArIFVSTF9SYW5kb20sIG9ial9zb2NrZXQuc2VsZi5sb2FkTGFuZ3VhZ2VFbmQsIG9ial9zb2NrZXQuc2VsZi5sb2FkTGFuZ3VhZ2VFcnJvcik7XHJcbiAgICB9LFxyXG4gICAgbG9hZExhbmd1YWdlRW5kKCkge1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuaW5pdChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Vc2VyTGFuZ3VhZ2UpOy8v6Kit5a6a6Kqe6KiAXHJcbiAgICAgICAgLy8gUmVzdWx0U29ydE91dC5TRlNUb0dhbWUoJ2xhbmd1YWdlT25Mb2FkJyk7XHJcbiAgICAgICAgb2JqX3NvY2tldC5zZWxmLnJlYWxTRlNMb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgbG9hZExhbmd1YWdlRXJyb3IoKSB7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubG9hZExhbmd1YWdlQ291bnQgPSAwO1xyXG4gICAgICAgIGxvYWRTY3JpcHQoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubG9hZExhbmd1YWdlRGVmYXVsdFVSTCArIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlVzZXJMYW5ndWFnZSArIFwiLmpzXCIsIG9ial9zb2NrZXQuc2VsZi5sb2FkTGFuZ3VhZ2VFbmQsIG9ial9zb2NrZXQuc2VsZi5sb2FkTGFuZ3VhZ2VFcnJvckFnYWluKTtcclxuICAgIH0sXHJcbiAgICBsb2FkTGFuZ3VhZ2VFcnJvckFnYWluKCkge1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDc3XCIpOy8vXCLor63oqIDljIXkuIvovb3lpLHotKXor7fpgJrnn6XlrqLmnI1cIjtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQnRuQm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgUmVzdWx0U29ydE91dC5pbnN0YW5jZS5TRlNUb0dhbWUoXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgIG9ial9zb2NrZXQuc2VsZi5yZWFsU0ZTTG9hZCgpO1xyXG4gICAgfSxcclxuICAgIFNGU0xvYWQ6IGZ1bmN0aW9uIChHYW1lTnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiU0ZTTG9hZFwiLEdhbWVOdW1iZXIpO1xyXG4gICAgICAgIGlmIChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TRlNMb2FkU3RhcnQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlNGU0xvYWRTdGFydCA9IHRydWU7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVyZ2FtZUlEID0gR2FtZU51bWJlcjsvL+mBiuaIsue3qOiZn1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlckV4dGVuc2lvbnNDbGFzcyA9IFwiY29tLmdhbWVcIiArIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcmdhbWVJRCArIFwiLnNmczJ4LkVudHJhbmNlXCI7Ly8o6K6A5Y+WU2VydmVy55qE6LOH5paZ5aS+5YWn55qE5ZOq5YCL5qqUKVxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlckdhbWVHcm91cElEID0gXCJnYW1lXCIgKyBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJnYW1lSUQ7Ly9zZXJ2ZXLnmoTmoYxcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VyZ2FtZV9pZCA9IEdhbWVOdW1iZXIudG9TdHJpbmcoKTtcclxuICAgICAgICAvLzIwMTkwNzA05YSq5YWI6LyJ5YWl6Kqe6KiA5YyF5b6M5YaN55m75YWlXHJcbiAgICAgICAgb2JqX3NvY2tldC5zZWxmLkxvYWRMYW5ndWFnZShzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Vc2VyTGFuZ3VhZ2UpO1xyXG5cclxuICAgIH0sXHJcbiAgICByZWFsU0ZTTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub3RoZXJzZXJ2ZXIoKTtcclxuICAgICAgICB2YXIgY29uZmlnID0ge307XHJcbiAgICAgICAgLy8gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVycG9ydCA9IChjb25maWcudXNlU1NMID0gJ2h0dHBzOicgPT0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wpID8gODQ0MzogODA4MDtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5SZXR1cm5Qb3J0ID09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVycG9ydCA9IHdpbmRvdy5SZXR1cm5Qb3J0KCkudXNlcnBvcnQ7XHJcbiAgICAgICAgICAgIGNvbmZpZy51c2VTU0wgPSB3aW5kb3cuUmV0dXJuUG9ydCgpLnVzZVNTTDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJwb3J0ID0gKGNvbmZpZy51c2VTU0wgPSAnaHR0cHM6JyA9PSBkb2N1bWVudC5sb2NhdGlvbi5wcm90b2NvbCkgPyA4NDQzIDogODA4MDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5ob3N0ID0gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVyaG9zdDtcclxuICAgICAgICBjb25maWcucG9ydCA9IHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlcnBvcnQ7XHJcbiAgICAgICAgY29uZmlnLnpvbmUgPSBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJab25lO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzID0gbmV3IFNGUzJYLlNtYXJ0Rm94KGNvbmZpZyk7XHJcbiAgICAgICAgY2MubG9nKGNvbmZpZyk7XHJcbiAgICAgICAgLy8gQWRkIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLmFkZEV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuQ09OTkVDVElPTiwgdGhpcy5vbkNvbm5lY3Rpb24sIHRoaXMpOy8v6YCj57eaXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5DT05ORUNUSU9OX0xPU1QsIHRoaXMub25Db25uZWN0aW9uTG9zdCwgdGhpcyk7Ly/pgKPnt5rkuK3mlrdcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkxPR0lOLCB0aGlzLm9uTG9naW4sIHRoaXMpOy8v55m75YWlXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5MT0dJTl9FUlJPUiwgdGhpcy5zZXJ2ZXJyZXR1cm5FcnJvciwgdGhpcyk7Ly/nmbvlhaXpjK/oqqRcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkxPR09VVCwgdGhpcy5vbkxvZ291dCwgdGhpcyk7Ly/nmbvlh7pcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LlJPT01fSk9JTiwgdGhpcy5vblJvb21Kb2luZWQsIHRoaXMpOy8v5Yqg5YWl5oi/XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5ST09NX0pPSU5fRVJST1IsIHRoaXMuc2VydmVycmV0dXJuRXJyb3IsIHRoaXMpOy8v5Yqg5YWl6Yyv6KqkXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5QSU5HX1BPTkcsIHRoaXMub25QSU5HX1BPTkcsIHRoaXMpOy8v546p5a625omL5qmf6IiH5Ly65pyN5Zmo55qE5bu26YGy5pmC6ZaTXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5QVUJMSUNfTUVTU0FHRSwgdGhpcy5vblB1YmxpY01lc3NhZ2UsIHRoaXMpOy8v5YWs6KiKKOmhnuS8vOW7o+aSrSlcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LlBSSVZBVEVfTUVTU0FHRSwgdGhpcy5vblByaXZhdGVNZXNzYWdlLCB0aGlzKTsvL+engeioiijpoZ7kvLzlr4boqp4pXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5BRE1JTl9NRVNTQUdFLCB0aGlzLm9uQWRtaW5NZXNzYWdlLCB0aGlzKTsvL0dN5buj5pKtKFpvbmUpXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5PQkpFQ1RfTUVTU0FHRSwgdGhpcy5vbk9iamVjdE1lc3NhZ2UsIHRoaXMpOy8v5Zau5bmj5Yil5buj5pKtKFpvbmUpXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuYWRkRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5NT0RFUkFUT1JfTUVTU0FHRSwgdGhpcy5vbk1vZGVyYXRvck1lc3NhZ2UsIHRoaXMpOy8v5Zau5bmj5Yil5buj5pKtKFpvbmUpXHJcbiAgICAgICAgLy/kuIvms6jnm6Pogb3lmahcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5hZGRFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkVYVEVOU0lPTl9SRVNQT05TRSwgdGhpcy5TRlNCdWZmZXIsdGhpcyk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuY29ubmVjdCgpO1xyXG4gICAgfSxcclxuICAgIC8v6YCj57ea5oiQ5YqfXHJcbiAgICBvbkNvbm5lY3Rpb246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29ja2V0IENvbm5lY3RlZFwiLCBldmVudCk7XHJcbiAgICAgICAgICAgIC8v55m75YWlXHJcbiAgICAgICAgICAgIHRoaXMuU0ZTTG9naW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TRlNMb2FkU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMDlcIik7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCb29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgUmVzdWx0U29ydE91dC5pbnN0YW5jZS5TRlNUb0dhbWUoXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+mAo+e3mumBuuWksVxyXG4gICAgb25Db25uZWN0aW9uTG9zdDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuU0ZTTG9hZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuZW5hYmxlTGFnTW9uaXRvcihmYWxzZSk7Ly/pl5zplolQaW5n5Yqf6IO9XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vaHR0cDovL2RvY3MyeC5zbWFydGZveHNlcnZlci5jb20vYXBpLWRvY3MvanNkb2Mvc3ltYm9scy9TRlMyWC5VdGlscy5DbGllbnREaXNjb25uZWN0aW9uUmVhc29uLmh0bWxcclxuICAgICAgICB2YXIgcmVhc29uID0gZXZlbnQucmVhc29uO1xyXG5cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBjYy5sb2coU0ZTMlguQ2xpZW50RGlzY29ubmVjdGlvblJlYXNvbi5CQU4pO1xyXG4gICAgICAgIGlmIChyZWFzb24gPT0gU0ZTMlguQ2xpZW50RGlzY29ubmVjdGlvblJlYXNvbi5CQU4pIHtcclxuICAgICAgICAgICAgLy9DbGllbnQgd2FzIGJhbm5lZCBmcm9tIHRoZSBzZXJ2ZXIuIEJhbm5pbmcgY2FuIG9jY3VyIGF1dG9tYXRpY2FsbHkgKGkuZS4gZm9yIGZsb29kaW5nLCBpZiB0aGUgZmxvb2QgZmlsdGVyIGlzIGFjdGl2ZSkgb3IgZHVlIHRvIHRoZSBpbnRlcnZlbnRpb24gb2YgYSB1c2VyIHdpdGggZW5vdWdoIHByaXZpbGVnZXMgKGkuZS4gYW4gYWRtaW5pc3RyYXRvciBvciBhIG1vZGVyYXRvcikuXHJcbiAgICAgICAgICAgIC8v6KKrU2VydmVy6Zi75pOLXHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDA5XCIpICsgJyEnO1xyXG4gICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkdhbWVDbG9zZVwiKTtcclxuICAgICAgICAgICAgUmVzdWx0U29ydE91dC5pbnN0YW5jZS5TRlNUb0dhbWUoXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09IFNGUzJYLkNsaWVudERpc2Nvbm5lY3Rpb25SZWFzb24uSURMRSkge1xyXG4gICAgICAgICAgICAvL0NsaWVudCB3YXMgZGlzY29ubmVjdGVkIGJlY2F1c2UgaXQgd2FzIGlkbGUgZm9yIHRvbyBsb25nLiBUaGUgY29ubmVjdGlvbiB0aW1lb3V0IGRlcGVuZHMgb24gdGhlIHNlcnZlciBzZXR0aW5ncy5cclxuICAgICAgICAgICAgLy/plpLnva7pgY7kuYXmlrfplotcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMDVcIikgKyAnISEnO1xyXG4gICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkdhbWVDbG9zZVwiKTtcclxuICAgICAgICAgICAgUmVzdWx0U29ydE91dC5pbnN0YW5jZS5TRlNUb0dhbWUoXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09IFNGUzJYLkNsaWVudERpc2Nvbm5lY3Rpb25SZWFzb24uS0lDSykge1xyXG4gICAgICAgICAgICAvL0NsaWVudCB3YXMga2lja2VkIG91dCBvZiB0aGUgc2VydmVyLiBLaWNraW5nIGNhbiBvY2N1ciBhdXRvbWF0aWNhbGx5IChpLmUuIGZvciBzd2VhcmluZywgaWYgdGhlIHdvcmRzIGZpbHRlciBpcyBhY3RpdmUpIG9yIGR1ZSB0byB0aGUgaW50ZXJ2ZW50aW9uIG9mIGEgdXNlciB3aXRoIGVub3VnaCBwcml2aWxlZ2VzIChpLmUuIGFuIGFkbWluaXN0cmF0b3Igb3IgYSBtb2RlcmF0b3IpLlxyXG4gICAgICAgICAgICAvL0NsaWVudOiiq1NlcnZlcui4ouWHulxyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTAwOVwiKSArICchISEnO1xyXG4gICAgICAgICAgICBpZiAoIXNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlNlbmRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkdhbWVDbG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UuU0ZTVG9HYW1lKFwiV2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09IFNGUzJYLkNsaWVudERpc2Nvbm5lY3Rpb25SZWFzb24uTUFOVUFMKSB7XHJcbiAgICAgICAgICAgIC8vVGhlIGNsaWVudCBtYW51YWxseSBkaXNjb25uZWN0ZWQgZnJvbSB0aGUgc2VydmVyLiBUaGUgZGlzY29ubmVjdCBtZXRob2Qgb24gdGhlIFNtYXJ0Rm94IGNsYXNzIHdhcyBjYWxsZWQuXHJcbiAgICAgICAgICAgIC8vQ2xpZW506Ieq5pa3XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDA5XCIpICsgJyEhISEnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmVhc29uID09IFNGUzJYLkNsaWVudERpc2Nvbm5lY3Rpb25SZWFzb24uVU5LTk9XTikge1xyXG4gICAgICAgICAgICAvL0EgZ2VuZXJpYyBuZXR3b3JrIGVycm9yIG9jY3VycmVkLCBhbmQgdGhlIGNsaWVudCBpcyB1bmFibGUgdG8gZGV0ZXJtaW5lIHRoZSBjYXVzZSBvZiB0aGUgZGlzY29ubmVjdGlvbi4gVGhlIHNlcnZlci1zaWRlIGxvZyBzaG91bGQgYmUgY2hlY2tlZCBmb3IgcG9zc2libGUgZXJyb3IgbWVzc2FnZXMgb3Igd2FybmluZ3MuXHJcbiAgICAgICAgICAgIC8v5a6i5oi256uv54Sh5rOV5b6X55+l55qE6Yyv6Kqk77yM6ZyA5p+lc2VydmVyIOeahCBMb2dcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMDlcIikgKyAnISEhISEnO1xyXG4gICAgICAgICAgICBpZiAoIXNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlNlbmRXYXJuaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkdhbWVDbG9zZVwiKTtcclxuICAgICAgICAgICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UuU0ZTVG9HYW1lKFwiV2FybmluZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihTRlMyWC5TRlNFdmVudC5DT05ORUNUSU9OLCB0aGlzLm9uQ29ubmVjdGlvbik7Ly/pgKPnt5pcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkNPTk5FQ1RJT05fTE9TVCwgdGhpcy5vbkNvbm5lY3Rpb25Mb3N0KTsvL+mAo+e3muS4reaWt1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuTE9HSU4sIHRoaXMub25Mb2dpbik7Ly/nmbvlhaVcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkxPR0lOX0VSUk9SLCB0aGlzLnNlcnZlcnJldHVybkVycm9yKTsvL+eZu+WFpemMr+iqpFxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuTE9HT1VULCB0aGlzLm9uTG9nb3V0KTsvL+eZu+WHulxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuUk9PTV9KT0lOLCB0aGlzLm9uUm9vbUpvaW5lZCk7Ly/liqDlhaXmiL9cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LlJPT01fSk9JTl9FUlJPUiwgdGhpcy5zZXJ2ZXJyZXR1cm5FcnJvcik7Ly/liqDlhaXpjK/oqqRcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LlBJTkdfUE9ORywgdGhpcy5vblBJTkdfUE9ORyk7Ly/njqnlrrbmiYvmqZ/oiIfkvLrmnI3lmajnmoTlu7bpgbLmmYLplpNcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LlBVQkxJQ19NRVNTQUdFLCB0aGlzLm9uUHVibGljTWVzc2FnZSk7Ly/lhazoqIoo6aGe5Ly85buj5pKtKVxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnJlbW92ZUV2ZW50TGlzdGVuZXIoU0ZTMlguU0ZTRXZlbnQuUFJJVkFURV9NRVNTQUdFLCB0aGlzLm9uUHJpdmF0ZU1lc3NhZ2UpOy8v56eB6KiKKOmhnuS8vOWvhuiqnilcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50LkFETUlOX01FU1NBR0UsIHRoaXMub25BZG1pbk1lc3NhZ2UpOy8vR03lu6Pmkq0oWm9uZSlcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50Lk9CSkVDVF9NRVNTQUdFLCB0aGlzLm9uT2JqZWN0TWVzc2FnZSk7Ly/llq7luaPliKXlu6Pmkq0oWm9uZSlcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5yZW1vdmVFdmVudExpc3RlbmVyKFNGUzJYLlNGU0V2ZW50Lk1PREVSQVRPUl9NRVNTQUdFLCB0aGlzLm9uTW9kZXJhdG9yTWVzc2FnZSk7Ly/llq7luaPliKXlu6Pmkq0oWm9uZSlcclxuXHJcbiAgICB9LFxyXG4gICAgLy9TbWFydEZveCBMb2dpbiDnmbvlhaVcclxuICAgIFNGU0xvZ2luOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhID0gbmV3IFNGUzJYLlNGU09iamVjdCgpO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YS5wdXRVdGZTdHJpbmcoXCJMb2dpblN0YXRlXCIsIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luU3RhdGUpO1xyXG4gICAgICAgIGlmIChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlID09IFwiMFwiKSB7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiQ3JlYXRBY2NvdW50XCIsIHNvY2tldFNldHRpbmcuQ3JlYXQuQ3JlYXRBY2NvdW50KTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkNyZWF0UGFzc3dvcmRcIiwgc29ja2V0U2V0dGluZy5DcmVhdC5DcmVhdFBhc3N3b3JkKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkNyZWF0Tmlja05hbWVcIiwgc29ja2V0U2V0dGluZy5DcmVhdC5DcmVhdE5pY2tOYW1lKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkNyZWF0RW1haWxcIiwgc29ja2V0U2V0dGluZy5DcmVhdC5DcmVhdEVtYWlsKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuc2VuZChuZXcgU0ZTMlguTG9naW5SZXF1ZXN0KG51bGwsIHNvY2tldFNldHRpbmcuQ3JlYXQuQ3JlYXRQYXNzd29yZCwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLCBzb2NrZXRTZXR0aW5nLnNlcnZlclpvbmUpKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhID0gbmV3IFNGUzJYLlNGU09iamVjdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5TdGF0ZSA9PSBcIjFcIiB8fCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlID09IFwiM1wiIHx8IHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luU3RhdGUgPT0gXCI0XCIpIHtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkNoZWNrUFdcIiwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QucGFzc3dvcmQpO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiQVBJVXNlckNvZGVcIiwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmNvZGUpO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiQVBJVXNlckNoYW5uZWxJRFwiLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VyY2hhbm5lbF9pZCk7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YS5wdXRVdGZTdHJpbmcoXCJBUElVc2VyR2FtZUlEXCIsIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJnYW1lX2lkKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkFQSVVzZXJUb2tlblwiLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VydG9rZW4pO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiQVBJVXNlckxhbmdcIiwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmxhbmcpO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiQVBJVXNlckdhbWVNYWtlclwiLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VyZ2FtZU1ha2VyKTtcclxuICAgICAgICAgICAgY2MubG9nKFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QucGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VyY29kZSxcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJjaGFubmVsX2lkLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QudXNlcmdhbWVfaWQsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VydG9rZW4sXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC51c2VybGFuZyxcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnVzZXJnYW1lTWFrZXJcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY2MubG9nKFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuYWNjb3VudCxcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVyWm9uZVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnNlbmQobmV3IFNGUzJYLkxvZ2luUmVxdWVzdChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5hY2NvdW50LCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5wYXNzd29yZCwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJab25lKSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlID09IFwiMlwiKSB7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YS5wdXRVdGZTdHJpbmcoXCJDaGVja1BXXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAvLyBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5zZW5kKG5ldyBTRlMyWC5Mb2dpblJlcXVlc3QoXCJ0ZXN0MDAxXCIsbnVsbCxzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEsc29ja2V0U2V0dGluZy5zZXJ2ZXJab25lKSk7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cudGVzdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuc2VuZChuZXcgU0ZTMlguTG9naW5SZXF1ZXN0KFwidGVzdDAwMlwiLG51bGwsc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLHNvY2tldFNldHRpbmcuc2VydmVyWm9uZSkpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuc2VuZChuZXcgU0ZTMlguTG9naW5SZXF1ZXN0KG51bGwsIG51bGwsIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YSwgc29ja2V0U2V0dGluZy5zZXJ2ZXJab25lKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5zZW5kKG5ldyBTRlMyWC5Mb2dpblJlcXVlc3QobnVsbCwgbnVsbCwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLCBzb2NrZXRTZXR0aW5nLnNlcnZlclpvbmUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2coXCJkZGRkZFwiLHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luU3RhdGUpO1xyXG4gICAgfSxcclxuICAgIC8v55m75YWl5oiQ5YqfXHJcbiAgICBvbkxvZ2luOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhLnN0YXRlVmFsdWUgPSBldmVudC5kYXRhLmdldChcIlN0YXRlXCIpO1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5nZXQoXCJMb2dpblN0YXRlXCIpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCIwXCI6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgY2FzZSBcIjJcIjpcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhLnN0YXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnBhc3N3b3JkID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhID0gbmV3IFNGUzJYLlNGU09iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UuU0ZTVG9HYW1lKFwibG9naW5FcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/nmbvlh7rmiJDlip/nmoTkuovku7ZcclxuICAgIG9uTG9nb3V0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TRlNMb2FkU3RhcnQgPSBmYWxzZTtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5kaXNjb25uZWN0KClcclxuICAgICAgICAvL+iou+WGiuS6i+S7tueZu+WFpVxyXG4gICAgICAgIGlmIChzb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGEuc3RhdGVWYWx1ZSA9PSAwICYmIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luU3RhdGUgPT0gXCIwXCIpIHtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5TdGF0ZSA9IFwiMVwiO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpbkRhdGEucHV0VXRmU3RyaW5nKFwiTG9naW5TdGF0ZVwiLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Mb2dpblN0YXRlKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuTG9naW5EYXRhLnB1dFV0ZlN0cmluZyhcIkNoZWNrUFdcIiwgc29ja2V0U2V0dGluZy5DcmVhdC5DcmVhdFBhc3N3b3JkKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuc2VuZChuZXcgU0ZTMlguTG9naW5SZXF1ZXN0KHNvY2tldFNldHRpbmcuQ3JlYXQuQ3JlYXRBY2NvdW50LCBzb2NrZXRTZXR0aW5nLkNyZWF0LkNyZWF0UGFzc3dvcmQsIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YSwgc29ja2V0U2V0dGluZy5zZXJ2ZXJab25lKSk7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkxvZ2luRGF0YSA9IG5ldyBTRlMyWC5TRlNPYmplY3QoKTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DcmVhdCA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL0NsaW5ldOimgeaxgueZu+WHuueahGZ1bmN0aW9uXHJcbiAgICBHYW1lTG9nb3V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gTG9nb3V0XHJcbiAgICAgICAgLy/ntabpgYrmiLLnq6/lkbzlj6vnmoTnmbvlh7pmdW5jdGlvblxyXG4gICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnNlbmQobmV3IFNGUzJYLlJlcXVlc3RzLlN5c3RlbS5Mb2dvdXRSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIC8vQ2xpbmV06KaB5rGC5Yqg5YWl5oi/55qEZnVuY3Rpb25cclxuICAgIFNGU0pvaW5Sb29tOiBmdW5jdGlvbiAoX3Jvb21OYW1lKSB7XHJcbiAgICAgICAgLy/lhaXmiL9cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5zZW5kKG5ldyBTRlMyWC5Kb2luUm9vbVJlcXVlc3QoX3Jvb21OYW1lKSk7XHJcbiAgICB9LFxyXG4gICAgLy/liqDlhaXmiL/miJDlip/kuovku7ZcclxuICAgIG9uUm9vbUpvaW5lZDogZnVuY3Rpb24gKGV2dFBhcmFtcykge1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LndoZXJlUm9vbSA9IGV2dFBhcmFtcy5yb29tLmdyb3VwSWQ7XHJcbiAgICAgICAgc3dpdGNoIChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC53aGVyZVJvb20pIHtcclxuICAgICAgICAgICAgY2FzZSBcIkxvYmJ5XCI6XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkxlYXZlR2FtZVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR2FtZUxvYmJ5XCI6XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIkdhbWVMb2JieVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNlcnZlckdhbWVHcm91cElEOlxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuZW5hYmxlTGFnTW9uaXRvcih0cnVlLCA1KTtcclxuICAgICAgICAgICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UuU0ZTVG9HYW1lKFwiQ2FuUGxheUdhbWVcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQnVmZmVyUGFyc2luZyhvYmosIHBhcmFtcywgcGFyYW1za2V5QXJyYXkpIHtcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcGFyYW1za2V5QXJyYXkpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5TmFtZSA9IHBhcmFtc2tleUFycmF5W2tleV07XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHBhcmFtcy5nZXQoa2V5TmFtZSkpID09PSBcIm9iamVjdFwiICYmIEFycmF5LmlzQXJyYXkocGFyYW1zLmdldChrZXlOYW1lKSkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhcGFyYW1zID0gcGFyYW1zLmdldChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhcGFyYW1zLmdldEtleXNBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXlOYW1lXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuQnVmZmVyT2JqUGFyc2luZyhvYmpba2V5TmFtZV0sIGRhdGFwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5TmFtZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJ1ZmZlckFyclBhcnNpbmcob2JqW2tleU5hbWVdLCBkYXRhcGFyYW1zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9ialtrZXlOYW1lXSA9IHBhcmFtcy5nZXQoa2V5TmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgQnVmZmVyT2JqUGFyc2luZyhvYmosIHBhcmFtcykge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtc2tleUFycmF5ID0gcGFyYW1zLmdldEtleXNBcnJheSgpO1xyXG4gICAgICAgIHRoaXMuQnVmZmVyUGFyc2luZyhvYmosIHBhcmFtcywgcGFyYW1za2V5QXJyYXkpO1xyXG4gICAgfSxcclxuICAgIEJ1ZmZlckFyclBhcnNpbmcob2JqLCBkYXRhcGFyYW1zKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YXBhcmFtc1NpemUgPSBkYXRhcGFyYW1zLnNpemUoKTtcclxuICAgICAgICBmb3IgKHZhciBwYXJhbXNJbmRleCA9IDA7IHBhcmFtc0luZGV4IDwgZGF0YXBhcmFtc1NpemU7IHBhcmFtc0luZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlscGFyYW1zID0gZGF0YXBhcmFtcy5nZXRTRlNPYmplY3QocGFyYW1zSW5kZXgpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhcGFyYW1za2V5QXJyYXkgPSBkZXRhaWxwYXJhbXMuZ2V0S2V5c0FycmF5KCk7XHJcbiAgICAgICAgICAgIG9ialtwYXJhbXNJbmRleF0gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5CdWZmZXJQYXJzaW5nKG9ialtwYXJhbXNJbmRleF0sIGRldGFpbHBhcmFtcywgZGF0YXBhcmFtc2tleUFycmF5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/kvLrmnI3lmajlm57lgrPmjqXmlLblmahcclxuICAgIFNGU0J1ZmZlcjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCI9PT09PT09PT3mlLY9PT09PT09PT1cIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPT09PT09PT095pS2PT09PT09PT09XCIpO1xyXG4gICAgICAgIC8vIOesrOS4gOWxpFxyXG4gICAgICAgIHZhciBjbWQgPSBldmVudC5jbWQ7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IGV2ZW50LnBhcmFtcztcclxuICAgICAgICB2YXIgcGFyYW1za2V5QXJyYXkgPSBwYXJhbXMuZ2V0S2V5c0FycmF5KCk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW2NtZF0gPSB7fTtcclxuXHJcbiAgICAgICAgY2MubG9nKGV2ZW50KVxyXG4gICAgICAgIG9ial9zb2NrZXQuc2VsZi5CdWZmZXJQYXJzaW5nKHNvY2tldFNldHRpbmcuU2VydmVyUmV0dXJuRGF0YVtjbWRdLCBwYXJhbXMsIHBhcmFtc2tleUFycmF5KTtcclxuICAgICAgICBzd2l0Y2ggKGNtZCkge1xyXG4gICAgICAgICAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3lpKflu7PnlKjlsIHljIU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGNhc2UgXCJMb2JieUluZm9cIjpcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIkxvYmJ5SW5mb1wiKTtcclxuICAgICAgICAgICAgICAgIC8v5aSn5buz5oi/XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGEuTG9iYnlOYW1lID0gcGFyYW1zLmdldFV0ZlN0cmluZyhcIkxvYmJ5TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnNlbmQobmV3IFNGUzJYLkpvaW5Sb29tUmVxdWVzdChzb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGEuTG9iYnlOYW1lKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIk1lbWJlckluZm9cIjpcclxuICAgICAgICAgICAgICAgIC8v546p5a626LOH6KiKXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5SYXRpbyA9IHBhcmFtcy5nZXRJbnQoXCJSYXRpb1wiKTtcclxuICAgICAgICAgICAgICAgIHZhciBidWYgPSB7fTtcclxuICAgICAgICAgICAgICAgIGJ1Zi5HYW1lSUQgPSBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJHYW1lR3JvdXBJRDtcclxuICAgICAgICAgICAgICAgIG9ial9zb2NrZXQuc2VsZi5TRlNUb1NlcnZlcihcIkdhbWVMb2JieUluZm9cIiwgYnVmKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiR2FtZUxvYmJ5SW5mb1Jlc3VsdFwiOlxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhLkdhbWVMb2JieU5hbWUgPSBwYXJhbXMuZ2V0VXRmU3RyaW5nKFwiR2FtZUxvYmJ5TmFtZVwiKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnNlbmQobmV3IFNGUzJYLkpvaW5Sb29tUmVxdWVzdChzb2NrZXRTZXR0aW5nLlNlcnZlclJldHVybkRhdGEuR2FtZUxvYmJ5TmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiRGlzY29ubmV0RXhjZXB0aW9uXCI6XHJcbiAgICAgICAgICAgICAgICAvLyDluLPomZ/ph43opIfnmbvlhaXvvIzlt7LkuK3mlrfpgKPnt5rvvIzoq4voh6rooYzpl5zplonpgYrmiLJcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LkNvbm5lY3Rpb25UeXBlID0gc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhW2NtZF0uUmVhc29uO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMjNcIik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5FcnJvck1lc3NhZ2VDb2RlID0gXCJTXzkwMjNcIjtcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCb29sZWFuID0gdHJ1ZTsvL+W6leWxpOitpuWRiuaWh+Wtl+aYr+WQpuW4uOmnkFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSB0cnVlOy8v6K2m5ZGK5paH5a2X55qE5oyJ6YiV5piv5ZCm6aGv56S6XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIldhcm5pbmdcIik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TZW5kV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgXCJLaWNrTXNnXCI6XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcuU2VydmVyUmV0dXJuRGF0YVtjbWRdLk1zZztcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCb29sZWFuID0gdHJ1ZTsvL+W6leWxpOitpuWRiuaWh+Wtl+aYr+WQpuW4uOmnkFxyXG4gICAgICAgICAgICAgICAgUmVzdWx0U29ydE91dC5pbnN0YW5jZS5TRlNUb0dhbWUoXCJXYXJuaW5nXCIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuU2VuZFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFwiVXBkYXRlUG9pbnRzXCI6XHJcbiAgICAgICAgICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIlVwZGF0ZVBvaW50c1wiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShjbWQpO1xyXG4gICAgfSxcclxuICAgIC8v5ZCE56iu5aSx5pWX5Zue5YKzIOS7o+eivOWPiuioiuaBr1xyXG4gICAgc2VydmVycmV0dXJuRXJyb3I6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlNGU0xvYWRTdGFydCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICAvLyDluLPomZ/ph43opIfnmbvlhaXvvIzlt7LkuK3mlrfpgKPnt5rvvIzoq4voh6rooYzpl5zplonpgYrmiLJcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDIzXCIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSB0cnVlOy8v6K2m5ZGK5paH5a2X55qE5oyJ6YiV6aGv56S6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICAgICAgLy8g5biz6Jmf6YGt5Yiw6Y6W5a6aXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTAyNVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgICAgICAvLyDluLPomZ/lt7LnmbvlhaXoqbLmiL/plpNcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDI5XCIpO1xyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSB0cnVlOy8v6K2m5ZGK5paH5a2X55qE5oyJ6YiV6aGv56S6XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5FcnJvck1lc3NhZ2VDb2RlID0gXCJTXzkwMjlcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDk6XHJcbiAgICAgICAgICAgICAgICAvLyDluLPomZ/lkI3nqLHmnInnhKHms5XmjqXlj5fnmoTlrZflhYNcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDI3XCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMTE6XHJcbiAgICAgICAgICAgICAgICAvLyBJUOmBreWIsOWwgemOllxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMjhcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuc2VydmVyU2ZzLnNlbmQobmV3IFNGUzJYLkpvaW5Sb29tUmVxdWVzdChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Sb29tTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IFwi6Yyv6Kqk5Y+D5pW46YCg5oiQ5Ym15oi/5aSx5pWXXCI7XHJcbiAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE5OlxyXG4gICAgICAgICAgICAgICAgLy8g5biz6Jmf5bey55m75YWl6Kmy5oi/6ZaTXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTAyOVwiKTtcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCdG5Cb29sZWFuID0gdHJ1ZTsvL+itpuWRiuaWh+Wtl+eahOaMiemIlemhr+ekulxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuRXJyb3JNZXNzYWdlQ29kZSA9IFwiU185MDI5XCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyMDpcclxuICAgICAgICAgICAgY2FzZSAyMzpcclxuICAgICAgICAgICAgICAgIC8vIOaIv+mWk+W3sua7v+eEoeazleWKoOWFpVxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMzFcIik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIC8vXCLpgKPmjqXpgL7mmYLvvIzoq4vph43mlrDnmbvlhaVcIlxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwMjRcIik7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQm9vbGVhbiA9IHRydWU7Ly/lupXlsaTorablkYrmloflrZfluLjpp5BcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCdG5Cb29sZWFuID0gdHJ1ZTsvL+itpuWRiuaWh+Wtl+eahOaMiemIleS4jemhr+ekulxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuU2VuZFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICAvLyDnmbvlhaXlpLHmlZfoq4voga/nuavlrqLmnI1F77yaXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTkwMlwiKSArIGV2ZW50LmVycm9yQ29kZTtcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdCb29sZWFuID0gdHJ1ZTsvL+W6leWxpOitpuWRiuaWh+Wtl+W4uOmnkFxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ0J0bkJvb2xlYW4gPSB0cnVlOy8v6K2m5ZGK5paH5a2X55qE5oyJ6YiV5LiN6aGv56S6XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5TZW5kV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIGNhc2UgNzpcclxuICAgICAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgICBjYXNlIDEwOlxyXG4gICAgICAgICAgICBjYXNlIDEzOlxyXG4gICAgICAgICAgICBjYXNlIDE0OlxyXG4gICAgICAgICAgICBjYXNlIDE1OlxyXG4gICAgICAgICAgICBjYXNlIDE2OlxyXG4gICAgICAgICAgICBjYXNlIDE3OlxyXG4gICAgICAgICAgICBjYXNlIDE4OlxyXG4gICAgICAgICAgICBjYXNlIDIxOlxyXG4gICAgICAgICAgICBjYXNlIDIyOlxyXG4gICAgICAgICAgICBjYXNlIDI0OlxyXG4gICAgICAgICAgICBjYXNlIDI1OlxyXG4gICAgICAgICAgICBjYXNlIDI2OlxyXG4gICAgICAgICAgICBjYXNlIDI3OlxyXG4gICAgICAgICAgICBjYXNlIDI4OlxyXG4gICAgICAgICAgICBjYXNlIDI5OlxyXG4gICAgICAgICAgICBjYXNlIDMwOlxyXG4gICAgICAgICAgICBjYXNlIDMxOlxyXG4gICAgICAgICAgICBjYXNlIDMyOlxyXG4gICAgICAgICAgICBjYXNlIDMzOlxyXG4gICAgICAgICAgICBjYXNlIDM0OlxyXG4gICAgICAgICAgICBjYXNlIDM1OlxyXG4gICAgICAgICAgICBjYXNlIDM2OlxyXG4gICAgICAgICAgICBjYXNlIDM3OlxyXG4gICAgICAgICAgICBjYXNlIDM4OlxyXG4gICAgICAgICAgICBjYXNlIDM5OlxyXG4gICAgICAgICAgICBjYXNlIDQwOlxyXG4gICAgICAgICAgICBjYXNlIDQxOlxyXG4gICAgICAgICAgICBjYXNlIDQyOlxyXG4gICAgICAgICAgICAgICAgLy8g6YGK5oiy55Ww5bi46KuL6IGv57mr5a6i5pyNRe+8mlxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzk5MDFcIikgKyBldmVudC5lcnJvckNvZGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185OTAxXCIpICsgXCI5OTk5ISFcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIldhcm5pbmdcIik7XHJcbiAgICB9LFxyXG4gICAgLy/ntablrqLnq6/lkbzlj6vpgIHlgLzntaZzZXJ2ZXJcclxuICAgIFNGU1RvU2VydmVyOiBmdW5jdGlvbiAoUGFja05hbWUsIERhdGFPYmplY3QpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumAgVwiLFBhY2tOYW1lLERhdGFPYmplY3QpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXcgU0ZTMlguU0ZTT2JqZWN0KCk7XHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIERhdGFPYmplY3QpIHtcclxuICAgICAgICAgICAgcGFyYW1zLnB1dFV0ZlN0cmluZyhrZXksIFN0cmluZyhEYXRhT2JqZWN0W2tleV0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5pc0Nvbm5lY3RlZClcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5zZXJ2ZXJTZnMuc2VuZChuZXcgU0ZTMlguRXh0ZW5zaW9uUmVxdWVzdChQYWNrTmFtZSwgcGFyYW1zLCBzb2NrZXRTZXR0aW5nLnNlcnZlclNmcy5sYXN0Sm9pbmVkUm9vbSkpO1xyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT3oqIrmga/poZ49PT09PT09PT09PT09XHJcbiAgICAvL+WFrOeUqOioiuaBr1xyXG4gICAgb25QdWJsaWNNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICB2YXIgc2VuZGVyID0gKGV2ZW50LnNlbmRlci5pc0l0TWUgPyBcIllvdVwiIDogZXZlbnQuc2VuZGVyLm5hbWUpO1xyXG4gICAgICAgIHZhciBtc2cgPSBcIjxiPlwiICsgc2VuZGVyICsgXCIgc2FpZDo8L2I+PGJyLz5cIiArIGV2ZW50Lm1lc3NhZ2U7XHJcbiAgICB9LFxyXG4gICAgLy/np4HmnInoqIrmga9cclxuICAgIG9uUHJpdmF0ZU1lc3NhZ2U6IGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkFkbWluTWVzc2FnZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm9uQWRtaW5NZXNzYWdlXCIsZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhLk1lc3NhZ2UgPSBcIjxjb2xvcj0jZmZmZmZmPjxiPlwiICsgZXZlbnQubWVzc2FnZSArIFwiPC9iPjwvYz5cIjtcclxuICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIk1hcnF1ZWVcIik7XHJcbiAgICB9LFxyXG4gICAgb25PYmplY3RNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwib25PYmplY3RNZXNzYWdlXCIsZXZlbnQubWVzc2FnZSk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5TZXJ2ZXJSZXR1cm5EYXRhLk1lc3NhZ2UgPSBcIjxjb2xvcj0jZmZmZmZmPjxiPlwiICsgZXZlbnQubWVzc2FnZSArIFwiPC9iPjwvYz5cIjtcclxuICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIk1hcnF1ZWVcIik7XHJcbiAgICB9LFxyXG4gICAgb25Nb2RlcmF0b3JNZXNzYWdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm9uTW9kZXJhdG9yTWVzc2FnZVwiLCBldmVudC5tZXNzYWdlKTtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50Lm1lc3NhZ2UucmVwbGFjZSgnS2lja0AjJCcsICcnKSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiIDpcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDkxXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIxXCIgOlxyXG4gICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuV2FybmluZ1RleHQgPSBzb2NrZXRTZXR0aW5nLnQoXCJTXzkwODlcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjJcIiA6XHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTAxNVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiM1wiIDpcclxuICAgICAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lldhcm5pbmdUZXh0ID0gc29ja2V0U2V0dGluZy50KFwiU185MDkyXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCIgOlxyXG4gICAgICAgICAgICAgICAgLy8g6ZaS572u6YGO6ZW35pa357eaXHJcbiAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nVGV4dCA9IHNvY2tldFNldHRpbmcudChcIlNfOTAwNVwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5XYXJuaW5nQm9vbGVhbiA9IHRydWU7Ly/lupXlsaTorablkYrmloflrZfmmK/lkKbluLjpp5BcclxuICAgICAgICBSZXN1bHRTb3J0T3V0Lmluc3RhbmNlLlNGU1RvR2FtZShcIldhcm5pbmdcIik7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuU2VuZFdhcm5pbmcgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIC8vID09PT09PT09PT09PT3oqIrmga/poZ49PT09PT09PT09PT09XHJcbiAgICAvL+W7tumBsuWAvChQaW5nKVxyXG4gICAgb25QSU5HX1BPTkc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coZXZlbnQubGFnVmFsdWUpO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LlBpbmdQb25nID0gZXZlbnQubGFnVmFsdWU7XHJcbiAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmpvaW5Sb29tID09PSB0cnVlICYmIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmpvaW5Mb2JieVJvb20gPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIFJlc3VsdFNvcnRPdXQuaW5zdGFuY2UuU0ZTVG9HYW1lKFwiU2hvd1BpbmdcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG90aGVyc2VydmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc2VydmVy5Y+v6Ieq5pS55Ly65pyN5ZmoXHJcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBnZXRzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc/JylbMV07XHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hMaXN0ID0gZ2V0c2VhcmNoLnNwbGl0KCcmJyk7XHJcbiAgICAgICAgICAgIHZhciB1cmxkYXRhID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWFyY2hMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB1cmxkYXRhW3NlYXJjaExpc3Rba2V5XS5zcGxpdCgnPScpWzBdXSA9IHNlYXJjaExpc3Rba2V5XS5zcGxpdCgnPScpWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAodmFyIGRhdGFrZXkgaW4gdXJsZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFrZXkgPT0gXCJTXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJob3N0ID0gdXJsZGF0YVtkYXRha2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWJ1Zy5fcmVzZXREZWJ1Z1NldHRpbmcoMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFrZXkgPT0gXCJQXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zZXJ2ZXJwb3J0ID0gcGFyc2VJbnQodXJsZGF0YVtkYXRha2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb3RoZXJMYW5nOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gc2VydmVy5Y+v6Ieq5pS56Kqe6KiA6IiH5Ly65pyN5ZmoXHJcbiAgICAgICAgaWYgKCh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBnZXRzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KCc/Jyk7XHJcbiAgICAgICAgICAgIHZhciB1cmxkYXRhID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGdldHNlYXJjaEtleSBpbiBnZXRzZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnZXRzZWFyY2hbZ2V0c2VhcmNoS2V5XSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlYXJjaExpc3QgPSBnZXRzZWFyY2hbZ2V0c2VhcmNoS2V5XS5zcGxpdCgnJicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWFyY2hMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybGRhdGFbc2VhcmNoTGlzdFtrZXldLnNwbGl0KCc9JylbMF1dID0gc2VhcmNoTGlzdFtrZXldLnNwbGl0KCc9JylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGRhdGFrZXkgaW4gdXJsZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGFrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFrZXkgPT0gXCJMXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5Vc2VyTGFuZ3VhZ2UgPSB1cmxkYXRhW2RhdGFrZXldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRha2V5ID09IFwiU1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc2VydmVyaG9zdCA9IHVybGRhdGFbZGF0YWtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVidWcuX3Jlc2V0RGVidWdTZXR0aW5nKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWbnuWumOe2slxyXG4gICAgYmFja0hvbWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuYmFja0hvbWVVUkwgIT0gXCJcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuYmFja0hvbWVVUkw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbG9zZVdpbmRvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyDpl5zplonoppbnqpdcclxuICAgIGNsb3NlV2luZG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgd2luZG93Lm9wZW4oJycsICdfc2VsZicsICcnKTtcclxuICAgICAgICB3aW5kb3cuY2xvc2UoKTtcclxuICAgIH0sXHJcbiAgICAvLyDpn7PmlYhcclxuICAgIHNldEVmZmVjdFZvbHVtZShfdm9sdW1lKSB7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0c3BvaW50ID0gX3ZvbHVtZTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hFZmZlY3QoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5lZmZlY3RJRCk7XHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0c0Jvb2xlYW4gPSAhc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0c0Jvb2xlYW47XHJcbiAgICAgICAgcmV0dXJuIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmVmZmVjdHNCb29sZWFuO1xyXG4gICAgfSxcclxuICAgIGdldEVmZmVjdCgpIHtcclxuICAgICAgICByZXR1cm4gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0c0Jvb2xlYW47XHJcbiAgICB9LFxyXG4gICAgZWZmZWN0UGxheShfZWZmZWN0TmFtZSwgX3BsYXlMb29wID0gZmFsc2UsIF92b2x1bWUgPSBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5lZmZlY3RzcG9pbnQpIHtcclxuXHJcbiAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmVmZmVjdHNCb29sZWFuID09IGZhbHNlIHx8ICFjYy5pc1ZhbGlkKF9lZmZlY3ROYW1lKSkgcmV0dXJuO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmVmZmVjdElEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChfZWZmZWN0TmFtZSwgX3BsYXlMb29wLCBfdm9sdW1lKTtcclxuICAgICAgICByZXR1cm4gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0SUQ7XHJcbiAgICB9LFxyXG4gICAgZWZmZWN0U3RvcFRoZW5QbGF5KF9lZmZlY3ROYW1lLCBfcGxheUxvb3AgPSBmYWxzZSwgX2VmZmVjdElELCBfdm9sdW1lID0gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0c3BvaW50KSB7XHJcbiAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmVmZmVjdHNCb29sZWFuID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AoX2VmZmVjdElEKTtcclxuXHJcbiAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QuZWZmZWN0SUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KF9lZmZlY3ROYW1lLCBfcGxheUxvb3AsIF92b2x1bWUpO1xyXG4gICAgICAgIHJldHVybiBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5lZmZlY3RJRDtcclxuICAgIH0sXHJcbiAgICBlZmZlY3RTdG9wKF9lZmZlY3RJRCkge1xyXG4gICAgICAgIGNjLmxvZyhcIuWBnOatoumfs+aogjpcIiwgX2VmZmVjdElEKTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKF9lZmZlY3RJRCk7XHJcbiAgICB9LFxyXG4gICAgLy8g6Z+z5qiC6Z+z6YeP6Kit5a6aXHJcbiAgICBzZXRNdXNpY1ZvbHVtZShfdm9sdW1lKSB7XHJcbiAgICAgICAgaWYgKCFzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0Jvb2xlYW4pIHJldHVybjtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY3BvaW50ID0gX3ZvbHVtZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZShzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY3BvaW50KTtcclxuICAgIH0sXHJcbiAgICBzd2l0Y2hNdXNpYygpIHtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0Jvb2xlYW4gPSAhc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNCb29sZWFuO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lm11c2ljQm9vbGVhbiA/IHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lm11c2ljcG9pbnQgOiAwKTtcclxuICAgICAgICByZXR1cm4gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNCb29sZWFuO1xyXG4gICAgfSxcclxuICAgIGdldE11c2ljKCkge1xyXG4gICAgICAgIHJldHVybiBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0Jvb2xlYW47XHJcbiAgICB9LFxyXG4gICAgbXVzaWNQbGF5KF9tdXNpY05hbWUsIF9wbGF5TG9vcCA9IHRydWUsIF92b2x1bWUgPSBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY3BvaW50KSB7XHJcbiAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lm11c2ljQm9vbGVhbiA9PSBmYWxzZSB8fCAhY2MuaXNWYWxpZChfbXVzaWNOYW1lKSkgcmV0dXJuO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lm11c2ljUGxheVZhbC5tdXNpY05hbWUgPSBfbXVzaWNOYW1lO1xyXG4gICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0Lm11c2ljUGxheVZhbC5wbGF5TG9vcCA9IF9wbGF5TG9vcDtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY1BsYXlWYWwudm9sdW1lID0gX3ZvbHVtZTtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0lEID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKF9tdXNpY05hbWUsIF9wbGF5TG9vcCk7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNCb29sZWFuID8gc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNwb2ludCA6IDApO1xyXG4gICAgICAgIHJldHVybiBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0lEO1xyXG4gICAgfSxcclxuICAgIG11c2ljU3RvcCgpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH0sXHJcbiAgICAvLyDpn7PmqIIr6Z+z5pWIXHJcbiAgICBzd2l0Y2hBbGxTb3VuZCgpIHtcclxuICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5zb3VuZEJvb2xlYW4gPSAhc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc291bmRCb29sZWFuO1xyXG5cclxuICAgICAgICBpZiAoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3Quc291bmRCb29sZWFuKSB7XHJcbiAgICAgICAgICAgIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmVmZmVjdHNCb29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNCb29sZWFuID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0TXVzaWNWb2x1bWUoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNwb2ludCk7XHJcbiAgICAgICAgICAgIG9ial9zb2NrZXQuc2VsZi5tdXNpY1BsYXkoc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNQbGF5VmFsLm11c2ljTmFtZSwgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubXVzaWNQbGF5VmFsLnBsYXlMb29wLCBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY1BsYXlWYWwudm9sdW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5lZmZlY3RzQm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzb2NrZXRTZXR0aW5nLkNsaWVudFNldE9iamVjdC5tdXNpY0Jvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LnNvdW5kQm9vbGVhbjtcclxuICAgIH0sXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwsIGNhbGxiYWNrLCBjYWxsQmFja0Vycm9yKSB7XHJcbiAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcclxuICAgIC8vIGlmKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmxvYWRMYW5ndWFnZUNvdW50ID09IFwiZXJyb3JcIil7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gfVxyXG4gICAgaWYgKHR5cGVvZiAoY2FsbGJhY2spICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBpZiAoc2NyaXB0LnJlYWR5U3RhdGUpIHtcclxuICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzY3JpcHQucmVhZHlTdGF0ZSA9PSBcImxvYWRlZFwiIHx8IHNjcmlwdC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNvY2tldFNldHRpbmcuQ2xpZW50U2V0T2JqZWN0LmxvYWRMYW5ndWFnZUNvdW50IDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRTY3JpcHQodXJsLCBjYWxsYmFjaywgY2FsbEJhY2tFcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0U2V0dGluZy5DbGllbnRTZXRPYmplY3QubG9hZExhbmd1YWdlQ291bnQrKztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbEJhY2tFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2NyaXB0LnNyYyA9IHVybDtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufVxyXG5leHBvcnQge3NvY2tldEpTfTtcclxuXHJcbi8vIG1vZHVsZS5leHBvcnRzID0ge1xyXG4vL1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiDlm57lgrPnmbvlhaVcclxuLy8gICAgICAqIEBwYXJhbSBHYW1lTnVtYmVyXHJcbi8vICAgICAgKiBAY29uc3RydWN0b3JcclxuLy8gICAgICAqL1xyXG4vLyAgICAgU0ZTTG9hZCA6IGZ1bmN0aW9uIChHYW1lTnVtYmVyKXtcclxuLy8gICAgICAgICBtb2R1bGVfU29ja2V0LlNGU0xvYWQoR2FtZU51bWJlcik7XHJcbi8vICAgICB9LFxyXG4vL1xyXG4vLyAgICAgLyoqXHJcbi8vICAgICAgKiAvL+e1puWuouerr+WRvOWPq+mAgeWAvOe1pnNlcnZlclxyXG4vLyAgICAgICogQHBhcmFtIFBhY2tOYW1lKFN0cmluZykgIOWbnuWCs+WTquWAi+izh+ioilxyXG4vLyAgICAgICogQHBhcmFtIERhdGFPYmplY3QoT2JqZWN0KSDlm57lgrPos4fmlplcclxuLy8gICAgICAqIEBjb25zdHJ1Y3RvclxyXG4vLyAgICAgICovXHJcbi8vICAgICBTRlNUb1NlcnZlciA6IGZ1bmN0aW9uIChQYWNrTmFtZSxEYXRhT2JqZWN0KXtcclxuLy8gICAgICAgICBtb2R1bGVfU29ja2V0LlNGU1RvU2VydmVyKFBhY2tOYW1lLERhdGFPYmplY3QpO1xyXG4vLyAgICAgfSxcclxuLy9cclxuLy8gICAgIC8qKlxyXG4vLyAgICAgICogIC8vIOWbnuWumOe2slxyXG4vLyAgICAgICovXHJcbi8vICAgICBiYWNrSG9tZTpmdW5jdGlvbigpe1xyXG4vLyAgICAgICAgIG1vZHVsZV9Tb2NrZXQuYmFja0hvbWUoKTtcclxuLy8gICAgIH0sXHJcbi8vIH1cclxuIl19