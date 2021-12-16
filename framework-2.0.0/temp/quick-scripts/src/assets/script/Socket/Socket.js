"use strict";
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