import {FreeResultType} from '../Enum/FreeResultType'
import {ResultType} from '../Enum/ResultType'
import {TableInfoType} from '../Enum/TableInfoType'

export default interface IResponseHandler {

    setResultModel(resultType: ResultType);

    setFreeResultModel(freeResultType: FreeResultType);

    setTableInfo(tableInfoType: TableInfoType);
}