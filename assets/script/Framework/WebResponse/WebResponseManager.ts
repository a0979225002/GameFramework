import {IConfigManager} from "../Config/IConfigManager";
import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import IResponseHandler from './IWebResponse/IResponseHandler'
import ResponseHandler from './ResponseHandler'

export class WebResponseManager implements IWebResponseManager {

    private static _instance: IWebResponseManager;
    private configManager: IConfigManager;
    private _tableInfo: ITableInfoModel;
    private _result: IResultModel;
    private _freeResult: IFreeResultModel;
    private readonly _handler: IResponseHandler;

    private constructor(configManager: IConfigManager) {
        this._handler = new ResponseHandler();
        this.configManager = configManager;
        this._handler.setTableInfo(this.configManager.tableInfoType);
        this._handler.setResultModel(this.configManager.resultType);
        this._handler.setFreeResultModel(this.configManager.freeResultType);
    }

    //單例
    public static setInstance(configManager: IConfigManager) {
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

    public setResultModel(model: IResultModel) {

        this._result = model;

    }

    public get tableInfo() {
        return this._tableInfo
    }

    public get result() {
        return this._result
    }

    public get freeResult() {
        return this._freeResult
    }

    public get handler(): IResponseHandler {
        return this._handler
    }
}