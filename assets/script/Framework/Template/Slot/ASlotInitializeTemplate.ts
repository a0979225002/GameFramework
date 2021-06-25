import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import {ServerEventType} from "../../Listener/Enum/ServerEventType";
import EventManager from "../../Listener/EventManager";
import {ResponseType} from "../../WebResponse/Enum/ResponseType";
import {WebResponseManager} from "../../WebResponse/WebResponseManager";
import OverrideComponent from "../OverrideComponent";
import ResponseResultNotification
    from "../../Listener/NotificationType/ResponseNotifivation/ResponseResultNotification";

export default abstract class ASlotInitializeTemplate extends OverrideComponent {

    //slot 的列
    protected abstract slotRow: Array<cc.Node>;
    protected abstract gridNodeToMap: Map<number, Array<cc.Node>>;
    protected abstract girdSpriteToMap: Map<number, Array<cc.Sprite>>;
    protected normalResult: ISlotResultModel;
    protected freeResult: ISlotFreeResultModel;

    protected abstract onCreate();

    /**
     * SlotStyle 初設定,如無符合的功能樣式 可繼承抽象類 ASlot 自定義使用
     */
    protected abstract slotStyleSetting();

    /**
     * 更新所有grid 隨機圖片
     * 如果每列的3~5格格子需要顯示 TableInfo 回傳回來的初始grid答案
     * @private
     */
    protected abstract slotInitialize();

    protected abstract getAllGridNode(): Map<number, Array<cc.Node>>;

    protected abstract getAllGridSprite(): Map<number, Array<cc.Sprite>>;

    protected onLoad() {
        this.normalResult =
            WebResponseManager
                .instance<ISlotResultModel>()
                .getResult(ResponseType.NORMAL);

        this.freeResult =
            WebResponseManager
                .instance<ISlotFreeResultModel>()
                .getResult(ResponseType.FREE);
        this.onCreate();
        this.slotInitialize();
        this.slotStyleSetting();
        this.normalResultResponse();
        this.freeResultEvenResponse();
    }

    /**
     * 一般狀態回傳事件接收器
     */
    private normalResultResponse(): void {
        EventManager.instance.serverEventListener(ServerEventType.BET_RESULT, (target: object) => {
            for (let name of Object.keys(target)) {
                if (this.normalResult[name] === undefined) {
                    try {
                        ErrorManager.instance.executeError(ErrorType.WEB_RESPONESE_FW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`)
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    this.normalResult[name] = target[name];
                }
            }
            ResponseResultNotification.instance.notify(true);
        }, false);
    }

    /**
     * free回傳 game 事件接收器
     * @private
     */
    private freeResultEvenResponse() {
        EventManager.instance.serverEventListener(ServerEventType.FREE_SPIN_RESULT, (target: object) => {
            for (let name of Object.keys(target)) {
                if (this.freeResult[name] === undefined) {
                    try {
                        ErrorManager.instance.executeError(ErrorType.WEB_RESPONESE_FW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`);
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    this.freeResult[name] = target[name];
                }
            }
            cc.log(this.freeResult);
            ResponseResultNotification.instance.notify(true);
        }, false);
    }

}