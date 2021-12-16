"use strict";
cc._RF.push(module, 'b3d8cew3stJ6p+6B3hmBaZw', 'TextLoad');
// script/Framework/LoadResources/LoadType/TextLoad.ts

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
var ALoadType_1 = require("../ILoad/ALoadType");
var LoadResManager_1 = require("../LoadResManager");
var TextLoad = /** @class */ (function (_super) {
    __extends(TextLoad, _super);
    function TextLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    /**
     *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
     *  因此需自行檢查回傳資料是否正確
     * @param key
     * @param asset
     */
    TextLoad.prototype.setResToManager = function (key, asset) {
        var e_1, _a;
        //清除回車
        var textArray = asset[0]["text"].split(/[\s\n]/);
        var textMap = new Map();
        try {
            for (var textArray_1 = __values(textArray), textArray_1_1 = textArray_1.next(); !textArray_1_1.done; textArray_1_1 = textArray_1.next()) {
                var texts = textArray_1_1.value;
                //切割 CSV特有的 ,
                var array = texts.split(',');
                //你可以在第三格放入註解,我只抓前兩格資料
                var key_1 = array[0];
                var value = array[1];
                if (key_1 == "") {
                    continue;
                }
                //清除所有包含的 "" '' 等特殊符號
                var processingvalue = value.replace(/['"]/g, '');
                textMap.set(key_1, processingvalue);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (textArray_1_1 && !textArray_1_1.done && (_a = textArray_1.return)) _a.call(textArray_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        LoadResManager_1.default.instance.readFileRes.set(key, textMap);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    TextLoad.prototype.updateManagerState = function (key, state, update) {
        if (this.folder === "resources") {
            LoadResManager_1.default.instance.initialLoadState.set(this.dataName, state);
        }
        else {
            LoadResManager_1.default.instance.secondaryLoadState.set(this.dataName, state);
        }
        LoadResManager_1.default.instance.loadMainEventCallback(key, update, state);
    };
    return TextLoad;
}(ALoadType_1.default));
exports.default = TextLoad;

cc._RF.pop();