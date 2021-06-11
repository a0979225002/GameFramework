import {ErrorType} from "./Enum/ErrorManagerEnum";

export default interface IErrorHandler {

    checkErrorType(message?: string | ErrorType, obj?: any): void;

    checkServerError(permanentState: boolean, message: string, buttonText?: string): void;

    checkWarning(permanentState: boolean, message: string, buttonText?: string): void;

}