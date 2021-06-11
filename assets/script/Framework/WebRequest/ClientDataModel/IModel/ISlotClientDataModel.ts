import {LanguageType} from "../../../Config/Enum/ConfigEnum";

/**
 * @Author XIAO-LI-PIN
 * @Description (目前暫時不清楚slot與棋牌類差距 IClientDataModel 為空資料):client登入時資料
 * @Date 2021-06-07 下午 01:57
 * @Version 1.0
 */
export interface ISlotClientDataModel extends IClientDataModel {

    /**
     * sever URL
     */
    serverHost: string;

    /**
     * server Port
     */
    serverPort: number;

    /**
     * 帳號
     */
    account: string;

    /**
     * 密碼
     */
    password: string;

    /**
     * 0:註冊 1:登入 2:遊客 3:測試人員記錄測試
     */
    loginState: number;

    /**
     * server房間
     */
    whereRoom: string;

    /**
     * 環境:H5Demo(試玩),H5Game(正式)
     */
    serverZone: string;

    /**
     * Index.php 設定 : TODO
     */
    userCode: string;

    /**
     * Index.php 設定 : TODO
     */
    userChannelID: string;

    /**
     * Index.php 設定 : TODO
     */
    userGameID: string;

    /**
     * 玩家Token
     */
    userToken: string;

    /**
     * Index.php 設定 : 語系
     */
    userLang: string;

    /**
     * Index.php 設定 : TODO
     */
    userGameMaker: string;

    /**
     * Index.php 設定 : 返回頁面URL
     */
    backHomeURL: string;

    /**
     * 初始加載遊戲語系:路徑
     */
    loadLanguageDefaultURL: string;

    /**
     * 二次加載主遊戲語系:路徑
     */
    loadLanguageURL: string;

    /**
     *  Index.php 設定 : 當前語系
     */
    userLanguage: LanguageType;

    /**
     * 測試使用 : sever URL
     * @param {string} serverHost
     * @returns {this}
     */
    setServerHost(serverHost: string): this;

    /**
     * 測試使用 : server Port
     * @param {number} serverPort
     * @returns {this}
     */
    setServerPort(serverPort: number): this;

    /**
     * 測試使用 : 測試帳號 " ppg015~020"
     * @param {string} account
     * @returns {this}
     */
    setAccount(account: string): this;

    /**
     * 測試使用 : 密碼 "123456"
     * @param {string} password
     * @returns {this}
     */
    setPassword(password: string): this;

    /**
     * 測試使用 : 0:註冊 1:登入 2:遊客 3:測試人員記錄測試
     * @param {number} loginState
     * @returns {this}
     */
    setLoginState(loginState: number): this;

    /**
     * 測試使用 : server房間
     * @param {string} whereRoom
     * @returns {this}
     */
    setWhereRoom(whereRoom: string): this;

    /**
     * 測試使用 : 環境:H5Demo(試玩),H5Game(正式)
     * @param {string} serverZone
     * @returns {this}
     */
    setServerZone(serverZone: string): this;

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @param {string} userCode
     * @returns {this}
     */
    setUserCode(userCode: string): this;

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @param {string} userChannelID
     * @returns {this}
     */
    setUserChannelID(userChannelID: string): this;

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @param {string} userGameID
     * @returns {this}
     */
    setUserGameID(userGameID: string): this;

    /**
     * 測試使用 : 玩家Token
     * @param {string} userToken
     * @returns {this}
     */
    setUserToken(userToken: string): this;

    /**
     * 測試使用 : Index.php 設定 : 語系
     * @param {string} userLang
     * @returns {this}
     */
    setUserLang(userLang: string): this;

    /**
     * 測試使用 : Index.php 設定 : TODO
     * @param {string} userGameMaker
     * @returns {this}
     */
    setUserGameMaker(userGameMaker: string): this;

    /**
     * 測試使用 : Index.php 設定 : 返回頁面URL
     * @param {string} backHomeURL
     * @returns {this}
     */
    setBackHomeURL(backHomeURL: string): this;

    /**
     * 測試使用 : 初始加載遊戲語系:路徑
     * @param {string} loadLanguageDefaultURL
     * @returns {this}
     */
    setLoadLanguageDefaultURL(loadLanguageDefaultURL: string): this;

    /**
     * 測試使用 : 二次加載主遊戲語系:路徑
     * @param {string} loadLanguageURL
     * @returns {this}
     */
    setLoadLanguageURL(loadLanguageURL: string): this;

    /**
     * 測試使用 : Index.php 設定 : 當前語系
     * @param {LanguageType} userLanguage
     * @returns {this}
     */
    setUserLanguage(userLanguage: LanguageType): this;

}