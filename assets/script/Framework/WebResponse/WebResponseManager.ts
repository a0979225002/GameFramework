import {ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {ResponseType} from "./Enum/ResponseType";
import IResponseHandler from "./ISeverDataModel/IResponseHandler";
import {IWebResponseManager} from "./ISeverDataModel/IWebResponseManager";

export class WebResponseManager<T> implements IWebResponseManager<T> {

    private static _instance: IWebResponseManager<any>;
    private configManager: ISlotConfigManager;
    private _handlerToMap: Map<ResponseType, IResponseHandler<T>>;

    private constructor(configManager: ISlotConfigManager) {
        this.configManager = configManager;
        this._handlerToMap = new Map<ResponseType, IResponseHandler<T>>();
    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    public static setInstance(configManager: ISlotConfigManager) {
        if (!this._instance) {
            this._instance = new WebResponseManager(configManager);
        }
    }

    /**
     *  獲取已經初始化的靜態實例class
     */
    public static instance<T>(): IWebResponseManager<T> {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    public setResponseModule(type: ResponseType, model: IResponseHandler<T>) {
        this._handlerToMap.set(type, model);
    }

    public getResult(type: ResponseType): T {
        if (!this._handlerToMap.has(type)) {
            ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${type} 該類型 module你尚未創建`);
            return;
        }
        return this._handlerToMap.get(type).getResult();
    }
}