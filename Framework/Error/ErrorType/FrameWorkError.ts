/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./UnknownError.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為框架錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class FrameWorkError {

        private unknownError: UnknownError;
        private configManager: IF.IConfigManager;

        constructor(configManager: IF.IConfigManager) {
            this.unknownError = new UnknownError(configManager);
            this.configManager = configManager;
        }

        checkErrorType(message: string | type.ErrorType, obj: any) {
            if (this.configManager.isFrameworkDebug) {
                switch (message) {
                    case type.ErrorType.IS_RUNNING_FW:
                        throw new Error(`${type.ErrorType.IS_RUNNING_FW} ${obj}`);
                    case type.ErrorType.UNDEFINED_FW:
                        throw new Error(`${type.ErrorType.UNDEFINED_FW} ${obj}`);
                    case type.ErrorType.TYPE_FW:
                        throw new Error(`${type.ErrorType.TYPE_FW} ${obj}`);
                    case type.ErrorType.ANIMATION_FW:
                        throw new Error(`${type.ErrorType.ANIMATION_FW} ${obj}`);
                    case type.ErrorType.LOAD_FW:
                        throw new Error(`${type.ErrorType.LOAD_FW} ${obj}`);
                    case type.ErrorType.WEB_REQUEST_FW:
                        throw new Error(`${type.ErrorType.WEB_REQUEST_FW} ${obj}`);
                    case type.ErrorType.PREFAB_FW:
                        throw new Error(`${type.ErrorType.PREFAB_FW} ${obj}`);
                    case type.ErrorType.AUDIO_FW:
                        throw new Error(`${type.ErrorType.AUDIO_FW} ${obj}`);
                    case type.ErrorType.WEB_RESPONSE_FW:
                        throw new Error(`${type.ErrorType.WEB_RESPONSE_FW} ${obj}`);
                    case type.ErrorType.SCENE_FW:
                        throw new Error(`${type.ErrorType.SCENE_FW} ${obj}`);
                    case type.ErrorType.PROCESS_FW:
                        throw new Error(`${type.ErrorType.PROCESS_FW} ${obj}`);
                    case type.ErrorType.LISTENER_FW:
                        throw new Error(`${type.ErrorType.LISTENER_FW} ${obj}`);
                    case type.ErrorType.SlotStyleFW:
                        throw new Error(`${type.ErrorType.SlotStyleFW} ${obj}`);
                    default :
                        this.unknownError.checkErrorType(message);
                }
            } else {
                console.log("有例外錯誤,但你未開啟框架Debug,無法查看");
            }
        }
    }
}