import {ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {ServerEventType} from "../Listener/Enum/ServerEventType";
import EventManager from "../Listener/EventManager";
import SlotGameManager from "../Process/SlotGameManager";
import {ResponseType} from "./Enum/ResponseType";
import IResponseHandler from "./ISlotWebResponse/IResponseHandler";
import {IWebResponseManager} from "./ISlotWebResponse/IWebResponseManager";

export class WebResponseManager<T> implements IWebResponseManager<T> {

    private static _instance: IWebResponseManager<any>;
    private configManager: ISlotConfigManager;
    private _handlerToMap: Map<ResponseType, IResponseHandler<T>>;

    private constructor(configManager: ISlotConfigManager) {
        this.configManager = configManager;
        this.normalResultResponse();
        this.freeResultEvenResponse();
        this._handlerToMap = new Map<ResponseType, IResponseHandler<T>>();
    }

    //單例
    public static setInstance(configManager: ISlotConfigManager) {
        if (!this._instance) {
            this._instance = new WebResponseManager(configManager);
        }
    }

    public static instance<T>(): IWebResponseManager<T> {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    public setResponseModule(type: ResponseType, model: IResponseHandler<T>) {
        this._handlerToMap.set(type,model);
    }

    public getResult(type: ResponseType): T {
        if(!this._handlerToMap.has(type)){
            ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW,`${type} 該類型 module你尚未創建`);
            return;
        }
        return this._handlerToMap.get(type).getResult();
    }

    /**
     * 一般狀態回傳事件接收器
     */
    private normalResultResponse(): void {
        EventManager.instance.serverEventListener(ServerEventType.BET_RESULT, (target: object) => {
            for (let name of Object.keys(target)) {
                if (this.getResult(ResponseType.NORMAL)[name] === undefined) {
                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`)
                } else {
                    this.getResult(ResponseType.NORMAL)[name] = target[name];
                }
            }
            SlotGameManager.instance.isResultOk = true;
        }, false);
    }

    /**
     * free回傳 game 事件接收器
     * @private
     */
    private freeResultEvenResponse() {
        EventManager.instance.serverEventListener(ServerEventType.FREE_SPIN_RESULT, (target: object) => {
            for (let name of Object.keys(target)) {
                if (this.getResult(ResponseType.FREE)[name] === undefined) {
                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`)
                } else {
                    this.getResult(ResponseType.FREE)[name] = target[name];
                }
            }
            SlotGameManager.instance.isResultOk = true;
        }, false);
    }
}