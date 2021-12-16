"use strict";
cc._RF.push(module, '39858prYOJCwJVepkReZRJV', 'ErrorManagerEnum');
// script/Framework/Error/Enum/ErrorManagerEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorType = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["server"] = 0] = "server";
    ErrorType[ErrorType["warning"] = 1] = "warning";
    ErrorType[ErrorType["bet"] = 2] = "bet";
    ErrorType[ErrorType["unknown"] = 3] = "unknown";
    ErrorType["TypeFW"] = "\u50B3\u5165\u7684Type \u932F\u8AA4 ,\u8ACB\u6AA2\u5BDF\u8A72Type\u662F\u5426\u975EFarmWork\u5167\u7684Type";
    ErrorType["IsRunningFW"] = "\u904A\u6232\u6B63\u5728\u57F7\u884C\u4E2D,\u8ACB\u52FF\u91CD\u8907\u547C\u53EB";
    ErrorType["UndefinedFW"] = "\u8B8A\u6578\u70BAundefined,\u6D41\u7A0B\u7121\u6CD5\u7E7C\u7E8C";
    ErrorType["LoadErrorFW"] = "\u52A0\u8F09\u7684\u8CC7\u6E90\u6709\u554F\u984C";
    ErrorType["AnimationErrorFW"] = "Animation \u985E\u4E2D\u65B9\u6CD5\u6709\u932F\u8AA4 : ";
    ErrorType["WebRequestErrorFW"] = "WebRequest \u985E\u6709\u932F\u8AA4 : ";
    ErrorType["WebResponseErrorFW"] = "WebResponse \u985E\u6709\u932F\u8AA4 : ";
    ErrorType["PrefabFW"] = "Prefab \u985E\u6709\u932F\u8AA4 :";
    ErrorType["MusicFW"] = "Music \u985E\u6709\u932F\u8AA4 :";
    ErrorType["SceneFW"] = "Scene \u985E\u6709\u932F\u8AA4 :";
    ErrorType["ProcedureFW"] = "Procedure \u985E\u6709\u932F\u8AA4 :";
    ErrorType["ListenerFW"] = "Event \u985E\u6709\u932F\u8AA4 :";
    ErrorType["GameProcessFW"] = "GameProcess\u985E\u6709\u932F\u8AA4 : ";
    ErrorType["SlotStyleFW"] = "SlotStyleFW\u985E\u6709\u932F\u8AA4 : ";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));

cc._RF.pop();