import {ErrorType} from "../Enum/ErrorManagerEnum";

export default class UnknownError {

    constructor(configManager:IConfigManager) {
    }

    checkErrorType(message?: string | ErrorType, obj?: any) {
        throw new Error(`例外錯誤 : ${message}`);
    }
}