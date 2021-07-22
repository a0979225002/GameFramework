import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import ResponseResultNotification from "../Event/Notification/ResponseNotifivation/ResponseResultNotification";
import ResponseResultObserver from "../Event/Observer/ResponseObserver/ResponseResultObserver";

/**
 * @Author XIAO-LI-PIN
 * @Description (模板)登入遊戲內進入主遊戲
 *```
 *      事件:
 *          接收 {ResponseResultNotification} : 當server  已成功回傳 TableInfo 會觸發打開 isGetTableInfoResponse = true
 *             可在update監聽,並給予前往主畫面事件
 *             callback :  this.autoEvent(isAutomaticState, afterAutoCount);
 *                          if (isAutomaticState) {
 *                              await this.startButtonEvent();
 *                          }
 * ```
 * @Date 2021-07-07 上午 10:55
 * @Version 0.0.3
 */
export default abstract class ALoadingTemplate extends AGenericTemplate {

    /**
     * 是否Server已經回傳TableInfo信息
     * @type {boolean}
     * @default false
     * @private
     */
    private _isGetTableInfoResponse: boolean;

    /**
     * 進度條組件
     * @type {cc.ProgressBar}
     * @private
     */
    protected abstract progressBar: cc.ProgressBar;

    /**
     * 進入主遊戲場景按鈕
     * @type {cc.Button}
     * @protected
     */
    protected abstract intoMainGameButton: cc.Button;

    /**
     * 讀取條內所有文字的父類
     * @type {cc.Node}
     * @protected
     */
    protected abstract progressTextParent: cc.Node;

    /**
     * 讀取條內所有文字
     */
    protected abstract progressTextLabel: cc.Label[];

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
     * 當前scene模式,更新當前畫面是配寬高
     */
    protected abstract sceneStyle(): void;

    /**
     * 更新讀取條文字動畫
     */
    protected abstract updateProgressTextAnimation(): void

    /**
     * 進入主遊戲按鈕事件
     * @protected
     */
    protected abstract intoMainGameButtonEvent;

    protected constructor() {
        super();
        this._isGetTableInfoResponse = false;          //是否Server已經回傳TableInfo信息
    }

    protected onLoad() {
        /*response 回傳監聽*/
        this.responseNotification();
        /*進入主遊戲按鈕事件*/
        fcc.global.Button.addButtonEvent(
            this.intoMainGameButton,
            "intoMainGameButtonEvent",
            this
        )
        super.onLoad();
    }

    protected start() {
        super.start();
        this.sceneStyle();                          //當前scene模式,更新當前畫面是配寬高
        this.loadExternalScript();                  //外部資源
        this.onLoadResources();                     //載入資源方法
        this.loadAssetBundle();                     //次資源
        this.updateProgressTextAnimation();         //更新讀取條文字
    }

    protected responseNotification() {
        fcc.notificationMgr<ResponseResultNotification>()
            .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
            .subscribe(new ResponseResultObserver((responseType) => {
                if (responseType == fcc.type.ServerEventType.TABLE_INFO) {
                    this._isGetTableInfoResponse = true;
                }
            }, this), false);
    }

    //
    // /**
    //  * 當Server 回傳tableInfo 資訊,將更動canPlayGame布林值,且保存tableInfo資源
    //  */
    // private tableInfoEvent() {
    //     fcc.eventMgr.eventListener(
    //         fcc.type.ServerEventType.TABLE_INFO, (tableInfo) => {
    //             for (let name of Object.keys(tableInfo)) {
    //                 if (this.tableInfo[name] === undefined) {
    //                     try {
    //                         fcc.errorMgr.executeError(
    //                             fcc.type.ErrorType.WEB_RESPONSE_FW,
    //                             `無 ${name} 參數,請更換 TableInfo Type`
    //                         );
    //                     } catch (e) {
    //                         console.log(e);
    //                     }
    //                 } else {
    //                     this.tableInfo[name] = tableInfo[name];
    //                 }
    //             }
    //             console.log(`${fcc.type.ServerEventType.TABLE_INFO} : ${this.tableInfo}`);
    //
    //             fcc.notificationMgr<UserMoneyChangeNotification>()
    //                 .getNotification(fcc.type.NotificationType.USER_MONEY_CHANGE)
    //                 .notify(this.tableInfo.UserPoint);
    //             this._canPlayGame = true;
    //
    //         }, true)
    // }

    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    get isGetTableInfoResponse(): boolean {
        return this._isGetTableInfoResponse
    }
}
