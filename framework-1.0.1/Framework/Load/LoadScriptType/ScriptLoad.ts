/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />

namespace fcc {

    export class ScriptLoad extends ABS.ALoadScriptType {

        /**
         * @Author XIAO-LI-PIN
         * @Description 載入外部 js 腳本
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        private readonly linkElem: HTMLScriptElement

        constructor(scriptName: string, type: string, url: string, parameter: string) {
            super(scriptName, type, url, parameter)
            this.linkElem = document.createElement("script");

        }

        loadScript() {
            let url = `${SlotConfigManager.instance.externallyLoadURL}/${this.url}/${this.scriptName}.js${this.parameter}`;
            if (LoadResManager.instance.scriptRes.has(url)) {
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `請勿重複加載已有的外部腳本 : ${url}`)
            }
            this.linkElem.type = this.type;
            this.linkElem.src = url;
            this.linkElem.onload = () => {
                LoadResManager.instance.scriptRes.add(url);
                LoadResManager.instance.loadScriptEventCallback(this.scriptName, false);
            };
            this.linkElem.onerror = () => {
                LoadResManager.instance.loadScriptEventCallback(this.scriptName, true);
            }
            ABS.ALoadScriptType.head.appendChild(this.linkElem);
        }
    }
}
