import {ErrorType} from "./Enum/ErrorManagerEnum";

export default interface IErrorHandler {

    checkErrorType(message?: string | ErrorType, obj?: any);

    checkServerError(permanentState: boolean, message: string, buttonText?: string);

    checkWarning(permanentState: boolean, message: string, buttonText?: string);

}