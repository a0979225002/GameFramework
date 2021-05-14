import ConfigManager from "../../Config/ConfigManager";
import {ErrorType} from "../Enum/ErrorManagerEnum";
import UnknownError from "./UnknownError";


export default class FrameWorkError {

    private unknownError: UnknownError;

    constructor() {

        this.unknownError = new UnknownError

    }

    checkErrorType(message: string | ErrorType, obj: any) {

        if (ConfigManager.instance.isFrameworkDebug) {

            switch (message) {
                case ErrorType.IsRunningFW:
                    throw new Error(`${ErrorType.IsRunningFW} ${obj}`);
                case ErrorType.UndefinedFW:
                    throw new Error(`${ErrorType.UndefinedFW} ${obj}`);
                case ErrorType.TypeFW:
                    throw new Error(`${ErrorType.TypeFW} ${obj}`);
                case ErrorType.AnimationErrorFW:
                    throw new Error(`${ErrorType.AnimationErrorFW} ${obj}`);
                case ErrorType.LoadErrorFW:
                    throw new Error(`${ErrorType.LoadErrorFW} ${obj}`);
                case ErrorType.WebRequestErrorFW:
                    throw new Error(`${ErrorType.WebRequestErrorFW} ${obj}`);
                case ErrorType.PrefabFW:
                    throw new Error(`${ErrorType.PrefabFW} ${obj}`);
                case ErrorType.MusicFW:
                    throw new Error(`${ErrorType.MusicFW} ${obj}`);
                case ErrorType.WebResponseErrorFW:
                    throw new Error(`${ErrorType.WebResponseErrorFW} ${obj}`);
                case ErrorType.SceneFW:
                    throw new Error(`${ErrorType.SceneFW} ${obj}`);
                case ErrorType.ProcedureFW:
                    throw new Error(`${ErrorType.ProcedureFW} ${obj}`);
                case ErrorType.ListenerFW:
                    throw new Error(`${ErrorType.ListenerFW} ${obj}`);
                case ErrorType.GameProcedureFW:
                    throw new Error(`${ErrorType.GameProcedureFW} ${obj}`);
                case ErrorType.SlotStyleFW:
                    throw new Error(`${ErrorType.SlotStyleFW} ${obj}`);
                default :
                    this.unknownError.checkErrorType(message);
            }

        } else {

            console.log("有例外錯誤,但你未開啟框架Debug,無法查看");

        }
    }
}