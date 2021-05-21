import {ISlotConfigManager} from "../Config/IConfig/ISlotConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
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