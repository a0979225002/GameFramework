"use strict";
cc._RF.push(module, '79b1fCJQBxM2atBso1tRWQj', 'WebResponseManager');
// script/Framework/WebResponse/WebResponseManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebResponseManager = void 0;
var ErrorManagerEnum_1 = require("../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../Error/ErrorManager");
var WebResponseManager = /** @class */ (function () {
    function WebResponseManager(configManager) {
        this.configManager = configManager;
        this._handlerToMap = new Map();
    }
    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    WebResponseManager.setInstance = function (configManager) {
        if (!this._instance) {
            this._instance = new WebResponseManager(configManager);
        }
    };
    /**
     *  獲取已經初始化的靜態實例class
     */
    WebResponseManager.instance = function () {
        if (!this._instance) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    };
    WebResponseManager.prototype.setResponseModule = function (type, model) {
        this._handlerToMap.set(type, model);
    };
    WebResponseManager.prototype.getResult = function (type) {
        if (!this._handlerToMap.has(type)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.WebResponseErrorFW, type + " \u8A72\u985E\u578B module\u4F60\u5C1A\u672A\u5275\u5EFA");
            return;
        }
        return this._handlerToMap.get(type).getResult();
    };
    return WebResponseManager;
}());
exports.WebResponseManager = WebResponseManager;

cc._RF.pop();