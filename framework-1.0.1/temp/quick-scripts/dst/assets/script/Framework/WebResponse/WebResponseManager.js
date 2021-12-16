
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/WebResponseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxXZWJSZXNwb25zZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsbUVBQXlEO0FBQ3pELHNEQUFpRDtBQUtqRDtJQU1JLDRCQUFvQixhQUFpQztRQUNqRCxJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUFxQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7O09BR0c7SUFDVyw4QkFBVyxHQUF6QixVQUEwQixhQUFpQztRQUN2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUQ7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDVywyQkFBUSxHQUF0QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLGtCQUFrQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVFLE9BQU87U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRU0sOENBQWlCLEdBQXhCLFVBQXlCLElBQWtCLEVBQUUsS0FBMEI7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxzQ0FBUyxHQUFoQixVQUFpQixJQUFrQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0Isc0JBQVksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLDRCQUFTLENBQUMsa0JBQWtCLEVBQUssSUFBSSw2REFBa0IsQ0FBQyxDQUFDO1lBQzVGLE9BQU87U0FDVjtRQUNELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0EzQ0EsQUEyQ0MsSUFBQTtBQTNDWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lTbG90Q29uZmlnTWFuYWdlcn0gZnJvbSBcIi4uL0NvbmZpZy9JQ29uZmlnL0lTbG90Q29uZmlnTWFuYWdlclwiO1xyXG5pbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bVwiO1xyXG5pbXBvcnQgRXJyb3JNYW5hZ2VyIGZyb20gXCIuLi9FcnJvci9FcnJvck1hbmFnZXJcIjtcclxuaW1wb3J0IHtSZXNwb25zZVR5cGV9IGZyb20gXCIuL0VudW0vUmVzcG9uc2VUeXBlXCI7XHJcbmltcG9ydCBJUmVzcG9uc2VIYW5kbGVyIGZyb20gXCIuL0lTZXZlckRhdGFNb2RlbC9JUmVzcG9uc2VIYW5kbGVyXCI7XHJcbmltcG9ydCB7SVdlYlJlc3BvbnNlTWFuYWdlcn0gZnJvbSBcIi4vSVNldmVyRGF0YU1vZGVsL0lXZWJSZXNwb25zZU1hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXZWJSZXNwb25zZU1hbmFnZXI8VD4gaW1wbGVtZW50cyBJV2ViUmVzcG9uc2VNYW5hZ2VyPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IElXZWJSZXNwb25zZU1hbmFnZXI8YW55PjtcclxuICAgIHByaXZhdGUgY29uZmlnTWFuYWdlcjogSVNsb3RDb25maWdNYW5hZ2VyO1xyXG4gICAgcHJpdmF0ZSBfaGFuZGxlclRvTWFwOiBNYXA8UmVzcG9uc2VUeXBlLCBJUmVzcG9uc2VIYW5kbGVyPFQ+PjtcclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKGNvbmZpZ01hbmFnZXI6IElTbG90Q29uZmlnTWFuYWdlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnTWFuYWdlciA9IGNvbmZpZ01hbmFnZXI7XHJcbiAgICAgICAgdGhpcy5faGFuZGxlclRvTWFwID0gbmV3IE1hcDxSZXNwb25zZVR5cGUsIElSZXNwb25zZUhhbmRsZXI8VD4+KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5oe25ryi5Yqg6LyJXHJcbiAgICAgKiAg5Yid5aeL5YyWLOWPquiuk+S4gOWAi+WwiOahiOeUoueUn+S4gOasoeipsmNsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0SW5zdGFuY2UoY29uZmlnTWFuYWdlcjogSVNsb3RDb25maWdNYW5hZ2VyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBXZWJSZXNwb25zZU1hbmFnZXIoY29uZmlnTWFuYWdlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIOeNsuWPluW3sue2k+WIneWni+WMlueahOmdnOaFi+WvpuS+i2NsYXNzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgaW5zdGFuY2U8VD4oKTogSVdlYlJlc3BvbnNlTWFuYWdlcjxUPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5XZWJSZXNwb25zZUVycm9yRlcsIFwi6Kmy6aGe5bCa5pyq5a+m5L6L5YyWXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UmVzcG9uc2VNb2R1bGUodHlwZTogUmVzcG9uc2VUeXBlLCBtb2RlbDogSVJlc3BvbnNlSGFuZGxlcjxUPikge1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZXJUb01hcC5zZXQodHlwZSwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXN1bHQodHlwZTogUmVzcG9uc2VUeXBlKTogVCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9oYW5kbGVyVG9NYXAuaGFzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgIEVycm9yTWFuYWdlci5pbnN0YW5jZS5leGVjdXRlRXJyb3IoRXJyb3JUeXBlLldlYlJlc3BvbnNlRXJyb3JGVywgYCR7dHlwZX0g6Kmy6aGe5Z6LIG1vZHVsZeS9oOWwmuacquWJteW7umApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9oYW5kbGVyVG9NYXAuZ2V0KHR5cGUpLmdldFJlc3VsdCgpO1xyXG4gICAgfVxyXG59Il19