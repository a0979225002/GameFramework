import {ErrorType} from "./Enum/ErrorManagerEnum";
import ObjectError from "./ErrorType/ObjectError";
import ServerError from './ErrorType/ServerError'
import WarningError from './ErrorType/WarningError'
import IErrorHandler from "./IErrorHandler";

/**
 * Error 中介者
 */
export default class ErrorHandler implements IErrorHandler {

    private objectError: ObjectError;
    private serverError: ServerError;
    private warningError: WarningError;

    constructor(configManager:IConfigManager) {
        this.objectError = new ObjectError(configManager);
    }

    checkErrorType(message: string | ErrorType, obj?: any) {

        return this.objectError.checkErrorType(message, obj);

    }

    public checkServerError(permanentState: boolean, message: string, buttonText?: string) {

        this.serverError.checkErrorType(permanentState, message, buttonText);

    }

    public checkWarning(permanentState: boolean, message: string, buttonText?: string) {

        this.warningError.checkErrorType(permanentState, message, buttonText);

    }

}