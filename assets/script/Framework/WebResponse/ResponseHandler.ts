import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {FreeResultType} from './Enum/FreeResultType'
import {ResultType} from './Enum/ResultType'
import {TableInfoType} from './Enum/TableInfoType'
import IResponseHandler from './IWebResponse/IResponseHandler'
import NoLineFreeResult from './Model/FreeResultType/NoLineFreeResult'
import NoLineResult from './Model/ResultType/NoLineResult'
import NoLineTableInfo from './Model/TableInfoType/NoLineTableInfo'
import {WebResponseManager} from './WebResponseManager'

export default class ResponseHandler implements IResponseHandler {


    setResultModel(resultType: ResultType) {

        switch (resultType) {

            case ResultType.NoLine:
                WebResponseManager.instance.setResultModel(new NoLineResult());

                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版resultModel 請詢問創作者")
        }

    }

    setFreeResultModel(freeResultType: FreeResultType) {


        switch (freeResultType) {

            case FreeResultType.NoLine:
                WebResponseManager.instance.setFreeResultModel(new NoLineFreeResult());
                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版freeResultModel 請詢問創作者");
        }

    }

    setTableInfo(tableInfoType: TableInfoType) {

        switch (tableInfoType) {
            case TableInfoType.NoLine:
                WebResponseManager.instance.setTableInfoModel(new NoLineTableInfo());

                break;
            default:
                ErrorManager.instance.executeError(ErrorType.WebResponseErrorFW, "尚未有此版freeResultModel 請詢問創作者");
        }

    }

}