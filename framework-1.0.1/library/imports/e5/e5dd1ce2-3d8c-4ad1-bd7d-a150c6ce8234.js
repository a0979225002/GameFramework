"use strict";
cc._RF.push(module, 'e5dd1ziPYxK0b19oVDGzoI0', 'ALoadScriptType');
// script/Framework/LoadResources/ILoad/ALoadScriptType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ALoadScriptType = /** @class */ (function () {
    function ALoadScriptType(scriptName, type, url) {
        this.scriptName = scriptName;
        this.type = type;
        this.url = url;
    }
    ALoadScriptType.head = document.getElementsByTagName("head")[0];
    return ALoadScriptType;
}());
exports.default = ALoadScriptType;

cc._RF.pop();