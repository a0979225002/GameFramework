import IResponseHandler from './IWebResponse/IResponseHandler'
import ResponseHandler from './ResponseHandler'

export class WebResponseManager implements IWebResponseManager {

    private static _instance: WebResponseManager;
    private _tableInfo: ITableInfoModel;
    private _result: IResultModel;
    private _freeResult: IFreeResultModel;
    private readonly _handler: IResponseHandler;

    constructor() {

        this._handler = new ResponseHandler();

    }

    public static get instance(): WebResponseManager {

        if (!this._instance) {

            this._instance = new WebResponseManager();

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