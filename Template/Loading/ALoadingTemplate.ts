import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import UserMoneyChangeNotification from "../Event/Notification/GameNotification/UserMoneyChangeNotification";
import IBaseTableInfoModel from "../NetWork/ISeverDataModel/ITableInfoResult/IBaseTableInfoModel";

/**
 * @Author XIAO-LI-PIN
 * @Description (模板)登入遊戲內進入主遊戲
 * @Date 2021-07-07 上午 10:55
 * @Version 0.0.3
 */
export default abstract class ALoadingTemplate extends AGenericTemplate {

    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    private _canPlayGame: boolean;

    /**
     * tableInfo Model
     * @type {IBaseTableInfoModel}
     * @protected
     */
    protected abstract tableInfo: IBaseTableInfoModel;

    /**
     * 載入主資源
     */
    protected abstract onLoadResources(): void;

    /**
     * 載入次資源
     */
    protected abstract loadAssetBundle(): void;

    /**
     * 載入外部資源
     */
    protected abstract loadExternalScript(): void;

    /**
     * 更新讀取條文字動畫
     */
    protected abstract updateProgressText(): void;

    /**
     * 當前scene模式,更新當前畫面是配寬高
     */
    protected abstract sceneStyle(): void;


    protected onLoad() {

        this._canPlayGame = false;                          //由 Server TableInfo Event 改變狀態
        this.tableInfoEvent.apply(this);             //TableInfo Event 事件
        ALoadingTemplate.updateUserIp();                    //如果是正式上線,將自動更新拿取外部資源的IP
        this.onCreate();                                    //自訂義初始 例:拿取node...

    }

    protected start() {
        super.start();
        this.sceneStyle();                  //當前scene模式,更新當前畫面是配寬高
        this.loadExternalScript();          //外部資源
        this.onLoadResources();             //載入資源方法
        this.loadAssetBundle();             //次資源
        this.updateProgressText();          //更新讀取條文字
    }


    /**
     * 如果為上線模式,將會獲取外部IP,自動更新遊戲配置Config內的URL
     */
    private static updateUserIp() {
        if (!window.test) {
            let path =
                window.libraryPath && window.libraryPath != ""
                    ? window.libraryPath.replace(/\/([^\/]+\/[^\/]+)$/, "")
                    : "../..";
            // 打包與測試讀取不同路徑
            fcc.configMgr.setExternallyLoadURL(path);
        }
    }

    /**
     * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
     */
    private tableInfoEvent() {
        fcc.eventMgr.eventListener(
            fcc.type.ServerEventType.TABLE_INFO, (tableInfo) => {
                for (let name of Object.keys(tableInfo)) {
                    if (this.tableInfo[name] === undefined) {
                        try {
                            fcc.errorMgr.executeError(
                                fcc.type.ErrorType.WEB_RESPONSE_FW,
                                `無 ${name} 參數,請更換 TableInfo Type`
                            );
                        } catch (e) {
                            console.log(e);
                        }
                    } else {
                        this.tableInfo[name] = tableInfo[name];
                    }
                }
                console.log(`${fcc.type.ServerEventType.TABLE_INFO} : ${this.tableInfo}`);

                fcc.notificationMgr<UserMoneyChangeNotification>()
                    .getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE)
                    .notify(this.tableInfo.UserPoint);
                this._canPlayGame = true;

            }, true)
    }

    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    get canPlayGame(): boolean {
        return this._canPlayGame
    }
}