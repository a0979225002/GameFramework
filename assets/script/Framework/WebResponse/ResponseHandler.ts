import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {FreeResultType} from './Enum/FreeResultType'
import {ResultType} from './Enum/ResultType'
import {TableInfoType} from './Enum/TableInfoType'
import IResponseHandler from './ISlotWebResponse/IResponseHandler'
import NoLineFreeResult from './Model/FreeResult/NoLineFreeResult'
import NoLineResult from './Model/NormalResult/NoLineResult'
import NoLineTableInfo from './Model/TableInfo/NoLineTableInfo'

export default class ResponseHandler implements IResponseHandler {

    private webResponseManager: IWebResponseManager;

    constructor(webResponseManager: IWebResponseManager) {
        this.webResponseManager = webResponseManager;
    }


    setResultModel(resultType: ResultType) {

        switch (resultType) {

            case ResultType.NoLine:
                this.webResponseManager.setResultModel(new NoLineResult());
                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版resultModel 請詢問創作者")
        }

    }

    setFreeResultModel(freeResultType: FreeResultType) {


        switch (freeResultType) {

            case FreeResultType.NoLine:
                this.webResponseManager.setFreeResultModel(new NoLineFreeResult());
                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版freeResultModel 請詢問創作者");
        }

    }

    setTableInfo(tableInfoType: TableInfoType) {

        switch (tableInfoType) {
            case TableInfoType.NoLine:
                this.webResponseManager.setTableInfoModel(new NoLineTableInfo());
                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版freeResultModel 請詢問創作者");
        }

    }

}