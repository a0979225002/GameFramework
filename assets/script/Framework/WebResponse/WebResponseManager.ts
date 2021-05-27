import {ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {ServerEventType} from "../Listener/Enum/ServerEventType";
import EventManager from "../Listener/EventManager";
import SlotGameManager from "../Process/SlotGameManager";
import IResponseHandler from './ISlotWebResponse/IResponseHandler'
import ResponseHandler from './ResponseHandler'

export class WebResponseManager implements IWebResponseManager {

    private static _instance: IWebResponseManager;
    private configManager: ISlotConfigManager;
    private _tableInfo: ITableInfoModel;
    private _result: ISlotResultModel;
    private _freeResult: IFreeResultModel;
    private readonly _handler: IResponseHandler;

    private constructor(configManager: ISlotConfigManager) {

        this._handler = new ResponseHandler(this);
        this.configManager = configManager;
        this._handler.setTableInfo(this.configManager.tableInfoType);
        this._handler.setResultModel(this.configManager.resultType);
        this._handler.setFreeResultModel(this.configManager.freeResultType);
        this.normalResultResponse();
        this.freeResultEvenResponse();

    }

    //單例
    public static setInstance(configManager: ISlotConfigManager) {
        if (!this._instance) {
            this._instance = new WebResponseManager(configManager);
        }
    }

    public static get instance(): IWebResponseManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }


    public setTableInfoModel(model: ITableInfoModel) {

        this._tableInfo = model;

    }

    public setFreeResultModel(model: IFreeResultModel) {

        this._freeResult = model;

    }

    public setResultModel(model: ISlotResultModel) {

        this._result = model;

    }

    /**
     * 一般狀態回傳事件接收器
     */
    private normalResultResponse(): void {
        EventManager.instance.serverEventListener(ServerEventType.BET_RESULT, (target: object) => {
            for (let name of Object.keys(target)) {
                if (WebResponseManager.instance.result[name] === undefined) {
                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換BetResultModule Type`)
                } else {
                    WebResponseManager.instance.result[name] = target[name];
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

                if (WebResponseManager.instance.freeResult[name] === undefined) {
                    ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, `${name}參數未宣告:無法保存回傳值,如果該參數為必要,請更換FreeResultModule Type`)
                } else {
                    WebResponseManager.instance.freeResult[name] = target[name];
                }
            }
            SlotGameManager.instance.isResultOk = true;
        }, false);
    }


    get tableInfo(): ITableInfoModel {
        return this._tableInfo;
    }

    get result(): ISlotResultModel {
        return this._result;
    }

    get freeResult(): IFreeResultModel {
        return this._freeResult;
    }

    get handler(): IResponseHandler {
        return this._handler;
    }
}