/// <reference path="../Enum/ErrorType.ts" />
/// <reference path="./FrameWorkError.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 檢測該錯誤是否為物件錯誤
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class ObjectError {

        private frameWorkError: FrameWorkError;

        constructor(configManager: IF.IConfigManager) {
            this.frameWorkError = new FrameWorkError(configManager);
        }

        checkErrorType(message: string | type.ErrorType, obj?: any): any {

            if (typeof message === "string") {

                this.frameWorkError.checkErrorType(message, obj);

            } else if (message === null) {

                return this.checkObjectType(obj);

            }

        }

        checkObjectType(obj: any) {
            if (obj && obj != 0) {
                return typeof obj;

            } else {
                throw new Error(`該物件為null`);
            }
        }
    }
}