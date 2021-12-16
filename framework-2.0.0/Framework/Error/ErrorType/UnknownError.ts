/// <reference path="../Enum/ErrorType.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 無從判斷該錯誤類型
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class UnknownError {

        private configManager: IF.IConfigManager;

        constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
        }

        checkErrorType(message?: string | type.ErrorType, obj?: any) {
            throw new Error(`例外錯誤 : ${message}`);
        }
    }
}