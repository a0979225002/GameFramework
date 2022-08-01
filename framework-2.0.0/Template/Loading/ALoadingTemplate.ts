import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import ResponseResultNotification from "../Event/Notification/ResponseNotifivation/ResponseResultNotification";
import ResponseResultObserver from "../Event/Observer/ResponseObserver/ResponseResultObserver";
import {fcc} from "../System/FCCSystem";

/**
 * @Author XIAO-LI-PIN
 * @Description (模板)登入遊戲內進入主遊戲
 * ```
 *      事件:
 *          接收 {ResponseResultNotification} :
 *          當server  已成功回傳 TableInfo 會觸發打開 isGetTableInfoResponse = true
 *          可在update監聽,並給予前往主畫面事件
 *
 * ```
 * @Date 2021-07-07 上午 10:55
 * @Version 0.0.3
 */
export default abstract class ALoadingTemplate extends AGenericTemplate {

    /**
     * 是否Server已經回傳TableInfo信息
     *
     *
     *
     * @type {boolean}
     * @default false
     * @private
     */
    private _isGetTableInfoResponse: boolean;

    /**
     * 當前是否已經連線了
     * @type {boolean}
     * @private
     */
    private _hasConnect: boolean;

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
    protected abstract loadResources(): void;

    /**
     * 載入次資源
     */
    protected abstract loadAssetBundle(): void;


    /**
     * 更新讀取條文字動畫
     */
    protected abstract updateProgressTextAnimation(): void;


    /**
     * 當前綁定server回傳的關注者
     * @type {ResponseResultObserver}
     * @private
     */
    protected responseResultObserver: ResponseResultObserver;

    protected constructor() {
        super();
        this._isGetTableInfoResponse = false;          //是否Server已經回傳TableInfo信息
        this._hasConnect = false;
    }

    protected onLoad() {

        this.responseResultObserver = this.buildResponseResultObserver();

        /*response 回傳監聽*/
        this.responseNotification(this.responseResultObserver);

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
        this.loadExternalScript();                  //外部資源
        this.loadResources();                       //載入資源方法
        this.loadAssetBundle();                     //次資源
        this.updateProgressTextAnimation();         //更新讀取條文字
    }

    private buildResponseResultObserver(): ResponseResultObserver {
        return new ResponseResultObserver((responseType: string) => {
            if (responseType == fcc.type.ServerEventType.CAN_PLAY_GAME) {
                this._hasConnect = true;
            }
            if (responseType == fcc.type.ServerEventType.TABLE_INFO) {
                this._isGetTableInfoResponse = true;
            }
        }, this)
    }

    protected responseNotification(responseResultObserver: ResponseResultObserver) {
        fcc.notificationMgr<ResponseResultNotification>()
            .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
            .subscribe(responseResultObserver, true);
    }

    /**
     * 是否可以進入主遊戲,由server回傳tableInfo後此class改變狀態
     * @type {boolean}
     * @default false
     * @private
     */
    get isGetTableInfoResponse(): boolean {
        return this._isGetTableInfoResponse
    }

    /**
     * 當前是否已經連線了
     * @returns {boolean}
     */
    get hasConnect(): boolean {
        return this._hasConnect;
    }

    /**
     * 載入外部資源
     */
    protected loadExternalScript(): void {
    };
}
