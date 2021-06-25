import {ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {ResponseType} from "./Enum/ResponseType";
import IResponseHandler from "./ISeverDataModel/IResponseHandler";
import {IWebResponseManager} from "./ISeverDataModel/IWebResponseManager";
import ResponseResultObserver from "../Listener/ObserverType/ResponseObserver/ResponseResultObserver";
import ResponseResultNotification from "../Listener/NotificationType/ResponseNotifivation/ResponseResultNotification";

export class WebResponseManager<T> implements IWebResponseManager<T> {

    private static _instance: IWebResponseManager<any>;
    private configManager: ISlotConfigManager;
    private _handlerToMap: Map<ResponseType, IResponseHandler<T>>;
    private _isResultOk: boolean;                                           //是否已經回傳該局資料
    private responseOkObserver: ResponseResultObserver;                         //等待推撥,是否已回傳這局遊戲結果:觀察者

    private constructor(configManager: ISlotConfigManager) {
        this.configManager = configManager;
        this._isResultOk = false;                                           //初始是否已經回傳該局資料
        this._handlerToMap = new Map<ResponseType, IResponseHandler<T>>();  //處理WebResponse與各Model間連結
        ResponseResultNotification                                              //等待推撥,是否已回傳這局遊戲結果:觀察者
            .instance.subscribe(this.getResponseOkObserver(), true);
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
            ErrorManager.instance.executeError(ErrorType.WEB_RESPONESE_FW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * 獲取是否已經回傳該局資料框架監聽者
     * @return {ResponseResultObserver}
     */
    public getResponseOkObserver(): ResponseResultObserver {
        if (!this.responseOkObserver) {
            this.responseOkObserver = new ResponseResultObserver((isResultOk) => {
                this._isResultOk = isResultOk;
            }, this);
        }
        return this.responseOkObserver;
    }

    /**
     * 綁定該type需要的model
     * @param {ResponseType} type
     * @param {IResponseHandler<any>} model
     */
    public setResponseModule(type: ResponseType, model: IResponseHandler<T>) {
        this._handlerToMap.set(type, model);
    }

    /**
     * 獲取該type以綁定的model
     * @param {ResponseType} type
     * @return {any}
     */
    public getResult(type: ResponseType): T {
        if (!this._handlerToMap.has(type)) {
            ErrorManager.instance.executeError(ErrorType.WEB_RESPONESE_FW, `${type} 該類型 module你尚未創建`);
            return;
        }
        return this._handlerToMap.get(type).getResult();
    }


    get isResultOk(): boolean {
        return this._isResultOk;
    }
}