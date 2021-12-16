"use strict";
cc._RF.push(module, 'aa107MBRdRE942iZidp7UBi', 'ImgLoad');
// script/Framework/LoadResources/LoadType/ImgLoad.ts

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
var ImgLoad = /** @class */ (function (_super) {
    __extends(ImgLoad, _super);
    function ImgLoad(dataName, type, url, folder) {
        return _super.call(this, dataName, type, url, folder) || this;
    }
    //@Override
    ImgLoad.prototype.setResToManager = function (dataName, asset) {
        var e_1, _a;
        var spriteMap = new Map();
        try {
            for (var _b = __values(asset[0].getSpriteFrames()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var sprite = _c.value;
                //將鍵值轉小寫,如果有使用grid key 作為搜尋資源
                //將無條件將 key 轉成 純數字 例如 : symbol0~10 = 0~10
                var lowerCase = dataName.toLowerCase();
                if (lowerCase.match("grid")) {
                    var gridName = sprite.name.replace(/[a-z A-Z]/g, '');
                    spriteMap.set(gridName, sprite);
                }
                else {
                    var spriteName = sprite.name;
                    spriteMap.set(spriteName, sprite);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        LoadResManager_1.default.instance.imgRes.set(dataName, spriteMap);
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    };
    return ImgLoad;
}(ALoadType_1.default));
exports.default = ImgLoad;

cc._RF.pop();