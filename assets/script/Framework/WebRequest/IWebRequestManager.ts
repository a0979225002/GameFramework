interface IWebRequestManager {

    /**
     * 添加ClientModel
     * 測試環境:可自行添加參數測試
     * 正式環境:會蓋過測試環境資料
     * @param {IClientDataModel} clientModel
     */
    setClientModel(clientModel: IClientDataModel): this;

    /**
     * 載入語系
     */
    loadingLanguage(): this;

    /**
     * 添加連線監聽事件
     */
    addNetWorkEventListener(fun: () => void): this;

    /**
     * 正式與websocket交握連線
     */
    smartFoxConnect(): this;

    /**
     * SmartFox Login 登入
     * @return {this}
     */
    smartFoxLogin(): this;

    /**
     * 向server獲取資料
     * @param {string} key - 回傳 server 的 key
     * @param data - 傳給server 的 資料
     */
    request(key: string, data: any);

    /**
     * 執行連線流程
     */
    build();

    /**
     * 返回首頁
     */

    /**
     *
     */
}