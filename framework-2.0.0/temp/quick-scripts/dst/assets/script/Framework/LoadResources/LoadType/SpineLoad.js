
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/LoadResources/LoadType/SpineLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a787foKi+lABZe4fMkTokVT', 'SpineLoad');
// script/Framework/LoadResources/LoadType/SpineLoad.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorManagerEnum_1 = require("../../Error/Enum/ErrorManagerEnum");
var ErrorManager_1 = require("../../Error/ErrorManager");
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var SpineLoad = /** @class */ (function (_super) {
    __extends(SpineLoad, _super);
    function SpineLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    SpineLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a, e_2, _b;
        if (LoadResManager_1.default.instance.spineRes.has(key)) {
            ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, "請檢察資源是否以載入過,鍵值重複");
        }
        LoadResManager_1.default.instance.spineRes.set(key, asset[0]);
        var lowerCase = key.toLowerCase();
        var checkGrid = lowerCase.match("grid");
        try {
            for (var asset_1 = __values(asset), asset_1_1 = asset_1.next(); !asset_1_1.done; asset_1_1 = asset_1.next()) {
                var spine = asset_1_1.value;
                var spineNames = Object.keys(spine.skeletonJson.animations);
                var spineToMap = new Map();
                try {
                    //取出spine動畫名稱
                    for (var spineNames_1 = (e_2 = void 0, __values(spineNames)), spineNames_1_1 = spineNames_1.next(); !spineNames_1_1.done; spineNames_1_1 = spineNames_1.next()) {
                        var spineName = spineNames_1_1.value;
                        //檢查是否有grid關鍵字,將把取spineName 的key 更換為數字
                        if (checkGrid) {
                            var spineNameToNumber = spineName.replace(/[^0-9]/ig, '');
                            //如果動畫內包含不含數字的的動畫名,將直接將動畫名整個保存成key
                            if (spineNameToNumber === "") {
                                spineToMap.set(spineName, spineName);
                            }
                            else {
                                if (spineToMap.has(spineNameToNumber)) {
                                    ErrorManager_1.default.instance.executeError(ErrorManagerEnum_1.ErrorType.LoadErrorFW, spineName + " spine\u52D5\u756B\u53D6number\u6709\u8AA4,\u8ACB\u6AA2\u67E5\u8A72spine Animetion\u662F\u5426\u6709\u91CD\u8907\u6578\u5B57\u60C5\u6CC1");
                                }
                                spineToMap.set(spineNameToNumber, spineName);
                            }
                        }
                        else {
                            spineToMap.set(spineName, spineName);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (spineNames_1_1 && !spineNames_1_1.done && (_b = spineNames_1.return)) _b.call(spineNames_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                //TODO:尚未想到要把grid動換資源放在哪
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (asset_1_1 && !asset_1_1.done && (_a = asset_1.return)) _a.call(asset_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return SpineLoad;
}(ALoadType_1.default));
exports.default = SpineLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExvYWRSZXNvdXJjZXNcXExvYWRUeXBlXFxTcGluZUxvYWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzRUFBMkQ7QUFDM0QseURBQW1EO0FBQ25ELGdEQUEyQztBQUMzQyxvREFBK0M7QUFFL0M7SUFBdUMsNkJBQVM7SUFFNUMsbUJBQVksUUFBZ0IsRUFBRSxJQUFTLEVBQUUsR0FBVyxFQUFFLE1BQWM7ZUFDaEUsa0JBQU0sUUFBUSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDO0lBRXRDLENBQUM7SUFFRCxtQ0FBZSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxLQUE2Qjs7UUFFdEQsSUFBSSx3QkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pGO1FBRUQsd0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsSUFBSSxTQUFTLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7O1lBQ3hDLEtBQWtCLElBQUEsVUFBQSxTQUFBLEtBQUssQ0FBQSw0QkFBQSwrQ0FBRTtnQkFBcEIsSUFBSSxLQUFLLGtCQUFBO2dCQUVWLElBQUksVUFBVSxHQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzNFLElBQUksVUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQzs7b0JBQ2hFLGFBQWE7b0JBQ2IsS0FBc0IsSUFBQSw4QkFBQSxTQUFBLFVBQVUsQ0FBQSxDQUFBLHNDQUFBLDhEQUFFO3dCQUE3QixJQUFJLFNBQVMsdUJBQUE7d0JBQ2Qsc0NBQXNDO3dCQUN0QyxJQUFJLFNBQVMsRUFBRTs0QkFDWCxJQUFJLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDOzRCQUMxRCxrQ0FBa0M7NEJBQ2xDLElBQUksaUJBQWlCLEtBQUssRUFBRSxFQUFFO2dDQUMxQixVQUFVLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQzs2QkFDeEM7aUNBQU07Z0NBQ0gsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0NBQ25DLHNCQUFZLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyw0QkFBUyxDQUFDLFdBQVcsRUFBSyxTQUFTLDZJQUFnRCxDQUFDLENBQUM7aUNBQzNIO2dDQUNELFVBQVUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7NkJBQ2hEO3lCQUNKOzZCQUFNOzRCQUNILFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO3lCQUN4QztxQkFDSjs7Ozs7Ozs7O2dCQUNILHdCQUF3QjthQUN6Qjs7Ozs7Ozs7O1FBRUQsVUFBVTtRQUNWLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQTlDQSxBQThDQyxDQTlDc0MsbUJBQVMsR0E4Qy9DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFcnJvclR5cGV9IGZyb20gJy4uLy4uL0Vycm9yL0VudW0vRXJyb3JNYW5hZ2VyRW51bSdcclxuaW1wb3J0IEVycm9yTWFuYWdlciBmcm9tICcuLi8uLi9FcnJvci9FcnJvck1hbmFnZXInXHJcbmltcG9ydCBBTG9hZFR5cGUgZnJvbSBcIi4uL0lMb2FkL0FMb2FkVHlwZVwiO1xyXG5pbXBvcnQgTG9hZFJlc01hbmFnZXIgZnJvbSBcIi4uL0xvYWRSZXNNYW5hZ2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGluZUxvYWQgZXh0ZW5kcyBBTG9hZFR5cGUge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRhdGFOYW1lOiBzdHJpbmcsIHR5cGU6IGFueSwgdXJsOiBzdHJpbmcsIGZvbGRlcjogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZGF0YU5hbWUsIHR5cGUsIHVybCwgZm9sZGVyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmVzVG9NYW5hZ2VyKGtleTogc3RyaW5nLCBhc3NldDogQXJyYXk8c3AuU2tlbGV0b25EYXRhPikge1xyXG5cclxuICAgICAgICBpZiAoTG9hZFJlc01hbmFnZXIuaW5zdGFuY2Uuc3BpbmVSZXMuaGFzKGtleSkpIHtcclxuICAgICAgICAgICAgRXJyb3JNYW5hZ2VyLmluc3RhbmNlLmV4ZWN1dGVFcnJvcihFcnJvclR5cGUuTG9hZEVycm9yRlcsIFwi6KuL5qqi5a+f6LOH5rqQ5piv5ZCm5Lul6LyJ5YWl6YGOLOmNteWAvOmHjeikh1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIExvYWRSZXNNYW5hZ2VyLmluc3RhbmNlLnNwaW5lUmVzLnNldChrZXksIGFzc2V0WzBdKTtcclxuXHJcbiAgICAgICAgbGV0IGxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGxldCBjaGVja0dyaWQgPSBsb3dlckNhc2UubWF0Y2goXCJncmlkXCIpO1xyXG4gICAgICAgIGZvciAobGV0IHNwaW5lIG9mIGFzc2V0KSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3BpbmVOYW1lczogQXJyYXk8c3RyaW5nPiA9IE9iamVjdC5rZXlzKHNwaW5lLnNrZWxldG9uSnNvbi5hbmltYXRpb25zKTtcclxuICAgICAgICAgICAgbGV0IHNwaW5lVG9NYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xyXG4gICAgICAgICAgICAvL+WPluWHunNwaW5l5YuV55Wr5ZCN56ixXHJcbiAgICAgICAgICAgIGZvciAobGV0IHNwaW5lTmFtZSBvZiBzcGluZU5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aqouafpeaYr+WQpuaciWdyaWTpl5zpjbXlrZcs5bCH5oqK5Y+Wc3BpbmVOYW1lIOeahGtleSDmm7Tmj5vngrrmlbjlrZdcclxuICAgICAgICAgICAgICAgIGlmIChjaGVja0dyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3BpbmVOYW1lVG9OdW1iZXIgPSBzcGluZU5hbWUucmVwbGFjZSgvW14wLTldL2lnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpzli5XnlavlhafljIXlkKvkuI3lkKvmlbjlrZfnmoTnmoTli5XnlavlkI0s5bCH55u05o6l5bCH5YuV55Wr5ZCN5pW05YCL5L+d5a2Y5oiQa2V5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNwaW5lTmFtZVRvTnVtYmVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lVG9NYXAuc2V0KHNwaW5lTmFtZSwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BpbmVUb01hcC5oYXMoc3BpbmVOYW1lVG9OdW1iZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFcnJvck1hbmFnZXIuaW5zdGFuY2UuZXhlY3V0ZUVycm9yKEVycm9yVHlwZS5Mb2FkRXJyb3JGVywgYCR7c3BpbmVOYW1lfSBzcGluZeWLleeVq+WPlm51bWJlcuacieiqpCzoq4vmqqLmn6XoqbJzcGluZSBBbmltZXRpb27mmK/lkKbmnInph43opIfmlbjlrZfmg4Xms4FgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluZVRvTWFwLnNldChzcGluZU5hbWVUb051bWJlciwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwaW5lVG9NYXAuc2V0KHNwaW5lTmFtZSwgc3BpbmVOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLy9UT0RPOuWwmuacquaDs+WIsOimgeaKimdyaWTli5Xmj5vos4fmupDmlL7lnKjlk6pcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v55uu55qE6Kej5rG655Ww5q2l5pON5L2cXHJcbiAgICAgICAgLy/nlbbos4fmupDpg73ovInlhaXliLBMb2FkTWFuYWdlcuaZguaJjeWbnuWCs+S7pei8ieWFpeWujOaIkOeahOeLgOaFi1xyXG4gICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NFbmQoKTtcclxuICAgIH1cclxufSJdfQ==