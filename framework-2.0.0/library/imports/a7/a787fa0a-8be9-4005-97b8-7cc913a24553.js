"use strict";
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