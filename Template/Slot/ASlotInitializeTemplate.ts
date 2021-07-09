import AGenericTemplate from "../BaseTemplate/AGenericTemplate";
import ResponseResultNotification from "../Event/Notification/ResponseNotifivation/ResponseResultNotification";

/**
 * @Author XIAO-LI-PIN
 * @Description 各種類型資源
 * @NOTE: 需事前綁定 ResponseResultNotification
 * @Date 2021-04-14 下午 20:24
 * @Version 1.1
 */
export default abstract class ASlotInitializeTemplate extends AGenericTemplate {

    /**
     * Slot 一般答案回傳結果
     * @type {ISlotBaseResultModel}
     * @protected
     */
    protected abstract normalResult: ISlotBaseResultModel;

    /**
     * Slot 免費答案回傳結果
     * @type {ISlotFreeBaseResultModel}
     * @protected
     */
    protected abstract freeResult: ISlotFreeBaseResultModel;

    /**
     * 執行老虎機動畫的列 所有列
     * @type {Array<cc.Node>}
     * @protected
     */
    protected abstract slotRow: Array<cc.Node>;

    /**
     * 執行動畫的所有格子
     * @type {Map<number, Array<cc.Node>>}
     * @protected
     */
    protected abstract gridNodeToMap: Map<number, Array<cc.Node>>;

    /**
     * 更換圖片的所有格子
     * @type {Map<number, Array<cc.Sprite>>}
     * @protected
     */
    protected abstract girdSpriteToMap: Map<number, Array<cc.Sprite>>;

    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected abstract slotStyleSetting(): void;

    /**
     * 更新所有grid初始圖案,TableInfo答案以外的格子使用隨機圖案
     * @private
     */
    protected abstract slotInitialize(): void;

    /**
     * 拿取要跑grid輪播的所有Node
     * @return {Map<number, Array<cc.Node>>}
     * @protected
     */
    protected abstract getAllGridNode(): Map<number, Array<cc.Node>>;

    /**
     * 拿取要更換grid圖片的所有Node
     * @return {Map<number, Array<cc.Sprite>>}
     * @protected
     */
    protected abstract getAllGridSprite(): Map<number, Array<cc.Sprite>>;

    protected onLoad() {
        this.slotInitialize();              //初始化slot
        this.slotStyleSetting();            //設定 slot 樣式,並綁定
        this.normalResultResponse();        //添加一般答案回傳監聽
        this.freeResultEvenResponse();      //添加免費答案回傳監聽
        super.onLoad();
    }

    /**
     * server 回傳normalResult答案時的事件接收器
     */
    private normalResultResponse(): void {

        fcc.eventMgr.eventListener(
            fcc.type.ServerEventType.BET_RESULT,
            (betResult: object) => {
                for (let name of Object.keys(betResult)) {
                    if (this.normalResult[name] === undefined) {
                        try {
                            fcc.errorMgr
                                .executeError(
                                    fcc.type.ErrorType.WEB_RESPONSE_FW,
                                    `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`
                                );
                        } catch (e) {
                            console.log(e);
                        }
                    } else {
                        this.normalResult[name] = betResult[name];
                    }
                }
                console.log(`${fcc.type.ServerEventType.BET_RESULT} : ${this.normalResult}`);

                fcc.notificationMgr<ResponseResultNotification>()
                    .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
                    .notify(true);

            }, true);
    }

    /**
     * server 回傳freeResult答案時的事件接收器
     * @private
     */
    private freeResultEvenResponse() {

        fcc.eventMgr.eventListener(
            fcc.type.ServerEventType.FREE_SPIN_RESULT,
            (freeResult: object) => {
                for (let name of Object.keys(freeResult)) {
                    if (this.freeResult[name] === undefined) {
                        try {
                            fcc.errorMgr
                                .executeError(
                                    fcc.type.ErrorType.WEB_RESPONSE_FW,
                                    `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`
                                );
                        } catch (e) {
                            console.log(e);
                        }
                    } else {
                        this.freeResult[name] = freeResult[name];
                    }
                }
                console.log(`${fcc.type.ServerEventType.BET_RESULT} : ${this.normalResult}`);

                fcc.notificationMgr<ResponseResultNotification>()
                    .getNotification(fcc.type.NotificationType.RESPONSE_RESULT)
                    .notify(true);
            }, true);
    }
}