
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/Enum/ErrorManagerEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxFbnVtXFxFcnJvck1hbmFnZXJFbnVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQVksU0FxQlg7QUFyQkQsV0FBWSxTQUFTO0lBRWpCLDZDQUFNLENBQUE7SUFDTiwrQ0FBTyxDQUFBO0lBQ1AsdUNBQUcsQ0FBQTtJQUNILCtDQUFPLENBQUE7SUFDUCxtSUFBZ0QsQ0FBQTtJQUNoRCw0R0FBOEIsQ0FBQTtJQUM5Qiw2RkFBbUMsQ0FBQTtJQUNuQyw2RUFBd0IsQ0FBQTtJQUN4Qix5RkFBeUMsQ0FBQTtJQUN6Qyx5RUFBd0MsQ0FBQTtJQUN4QywyRUFBMEMsQ0FBQTtJQUMxQywyREFBMEIsQ0FBQTtJQUMxQix5REFBd0IsQ0FBQTtJQUN4Qix5REFBd0IsQ0FBQTtJQUN4QixpRUFBZ0MsQ0FBQTtJQUNoQyw0REFBMkIsQ0FBQTtJQUMzQixxRUFBb0MsQ0FBQTtJQUNwQyxtRUFBa0MsQ0FBQTtBQUV0QyxDQUFDLEVBckJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBcUJwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEVycm9yVHlwZSB7XHJcblxyXG4gICAgc2VydmVyLFxyXG4gICAgd2FybmluZyxcclxuICAgIGJldCxcclxuICAgIHVua25vd24sXHJcbiAgICBUeXBlRlcgPSBcIuWCs+WFpeeahFR5cGUg6Yyv6KqkICzoq4vmqqLlr5/oqbJUeXBl5piv5ZCm6Z2eRmFybVdvcmvlhafnmoRUeXBlXCIsXHJcbiAgICBJc1J1bm5pbmdGVyA9IFwi6YGK5oiy5q2j5Zyo5Z+36KGM5LitLOiri+WLv+mHjeikh+WRvOWPq1wiLFxyXG4gICAgVW5kZWZpbmVkRlcgPSBcIuiuiuaVuOeCunVuZGVmaW5lZCzmtYHnqIvnhKHms5XnubznuoxcIixcclxuICAgIExvYWRFcnJvckZXID0gXCLliqDovInnmoTos4fmupDmnInllY/poYxcIixcclxuICAgIEFuaW1hdGlvbkVycm9yRlcgPSBcIkFuaW1hdGlvbiDpoZ7kuK3mlrnms5XmnInpjK/oqqQgOiBcIixcclxuICAgIFdlYlJlcXVlc3RFcnJvckZXID0gXCJXZWJSZXF1ZXN0IOmhnuaciemMr+iqpCA6IFwiLFxyXG4gICAgV2ViUmVzcG9uc2VFcnJvckZXID0gXCJXZWJSZXNwb25zZSDpoZ7mnInpjK/oqqQgOiBcIixcclxuICAgIFByZWZhYkZXID0gXCJQcmVmYWIg6aGe5pyJ6Yyv6KqkIDpcIixcclxuICAgIE11c2ljRlcgPSBcIk11c2ljIOmhnuaciemMr+iqpCA6XCIsXHJcbiAgICBTY2VuZUZXID0gXCJTY2VuZSDpoZ7mnInpjK/oqqQgOlwiLFxyXG4gICAgUHJvY2VkdXJlRlcgPSBcIlByb2NlZHVyZSDpoZ7mnInpjK/oqqQgOlwiLFxyXG4gICAgTGlzdGVuZXJGVyA9IFwiRXZlbnQg6aGe5pyJ6Yyv6KqkIDpcIixcclxuICAgIEdhbWVQcm9jZXNzRlcgPSBcIkdhbWVQcm9jZXNz6aGe5pyJ6Yyv6KqkIDogXCIsXHJcbiAgICBTbG90U3R5bGVGVyA9IFwiU2xvdFN0eWxlRlfpoZ7mnInpjK/oqqQgOiBcIixcclxuXHJcbn0iXX0=