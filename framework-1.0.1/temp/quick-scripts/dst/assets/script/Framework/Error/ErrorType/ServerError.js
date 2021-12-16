
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/ErrorType/ServerError.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8d7f1Tad/RDbJP3iaIUitQz', 'ServerError');
// script/Framework/Error/ErrorType/ServerError.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../ErrorManager");
var ServerError = /** @class */ (function () {
    function ServerError() {
        this.timeOut = null;
    }
    ServerError.prototype.checkErrorType = function (permanentState, message, buttonText) {
        var _this = this;
        if (this.timeOut != null)
            clearTimeout(this.timeOut);
        //確認當前有無該物件,如無該物件,將會throw中斷
        if (!ErrorManager_1.default.instance.errorNode)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorNode為空");
        if (!ErrorManager_1.default.instance.errorLabel)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorLabel為空");
        if (!ErrorManager_1.default.instance.errorButton)
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.UndefinedFW, "ErrorManager errorButton為空");
        ErrorManager_1.default.errorState = true;
        ErrorManager_1.default.instance.errorNode.active = true;
        ErrorManager_1.default.instance.errorLabel.string = message;
        ErrorManager_1.default.instance.errorButton.active = ErrorManager_1.default.instance.isShowBackHomeButton;
        if (ErrorManager_1.default.instance.errorButton.active) {
            ErrorManager_1.default.instance.errorButtonLabel.string = buttonText;
        }
        if (!permanentState) {
            this.timeOut = window.setTimeout(function () {
                ErrorManager_1.default.errorState = false;
                ErrorManager_1.default.instance.errorNode.active = false;
                ErrorManager_1.default.instance.errorButton.active = false;
                _this.timeOut = null;
            }, ErrorManager_1.default.instance.errorDelayTime);
        }
    };
    return ServerError;
}());
exports.default = ServerError;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFcnJvclR5cGVcXFNlcnZlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQW1EO0FBQ25ELGdEQUEyQztBQUUzQztJQUdJO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFeEIsQ0FBQztJQUVELG9DQUFjLEdBQWQsVUFBZSxjQUF1QixFQUFFLE9BQWUsRUFBRSxVQUFrQjtRQUEzRSxpQkFrQ0M7UUFoQ0csSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUk7WUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJELDJCQUEyQjtRQUMzQixJQUFJLENBQUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUztZQUNoQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztRQUUxRixJQUFJLENBQUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsVUFBVTtZQUNqQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsMkJBQTJCLENBQUMsQ0FBQztRQUUzRixJQUFJLENBQUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVztZQUNsQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsNEJBQVMsQ0FBQyxXQUFXLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztRQUU1RixzQkFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0Isc0JBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDOUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDbEQsc0JBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQztRQUV0RixJQUFJLHNCQUFZLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDMUMsc0JBQVksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztTQUM5RDtRQUVELElBQUksQ0FBQyxjQUFjLEVBQUU7WUFFakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO2dCQUU3QixzQkFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUMvQyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDakQsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFeEIsQ0FBQyxFQUFFLHNCQUFZLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzVDO0lBQ0wsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXJyb3JUeXBlfSBmcm9tIFwiLi4vRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcbmltcG9ydCBFcnJvck1hbmFnZXIgZnJvbSBcIi4uL0Vycm9yTWFuYWdlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmVyRXJyb3Ige1xyXG4gICAgcHJpdmF0ZSB0aW1lT3V0OiBudW1iZXJcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lT3V0ID0gbnVsbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tFcnJvclR5cGUocGVybWFuZW50U3RhdGU6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZywgYnV0dG9uVGV4dDogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVPdXQgIT0gbnVsbCkgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dCk7XHJcblxyXG4gICAgICAgIC8v56K66KqN55W25YmN5pyJ54Sh6Kmy54mp5Lu2LOWmgueEoeipsueJqeS7tizlsIfmnIN0aHJvd+S4reaWt1xyXG4gICAgICAgIGlmICghRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmVycm9yTm9kZSlcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuVW5kZWZpbmVkRlcsIFwiRXJyb3JNYW5hZ2VyIGVycm9yTm9kZeeCuuepulwiKTtcclxuXHJcbiAgICAgICAgaWYgKCFFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JMYWJlbClcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuVW5kZWZpbmVkRlcsIFwiRXJyb3JNYW5hZ2VyIGVycm9yTGFiZWzngrrnqbpcIik7XHJcblxyXG4gICAgICAgIGlmICghRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmVycm9yQnV0dG9uKVxyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5VbmRlZmluZWRGVywgXCJFcnJvck1hbmFnZXIgZXJyb3JCdXR0b27ngrrnqbpcIik7XHJcblxyXG4gICAgICAgIEVycm9yTWFuYWdlci5lcnJvclN0YXRlID0gdHJ1ZTtcclxuICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmVycm9yTGFiZWwuc3RyaW5nID0gbWVzc2FnZTtcclxuICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JCdXR0b24uYWN0aXZlID0gRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmlzU2hvd0JhY2tIb21lQnV0dG9uO1xyXG5cclxuICAgICAgICBpZiAoRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmVycm9yQnV0dG9uLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JCdXR0b25MYWJlbC5zdHJpbmcgPSBidXR0b25UZXh0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFwZXJtYW5lbnRTdGF0ZSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lT3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIEVycm9yTWFuYWdlci5lcnJvclN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXJyb3JOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmVycm9yQnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lT3V0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIH0sIEVycm9yTWFuYWdlci5pbnN0YW5jZS5lcnJvckRlbGF5VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19