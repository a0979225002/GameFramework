/// <reference path="../../Config/SlotConfigManager.ts" />
/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadScriptType.ts" />
/// <reference path="../LoadResManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 加載外部css資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class CSSLoad extends ABS.ALoadScriptType {

        private readonly linkElem: HTMLLinkElement

        constructor(scriptName: string, type: string, url: string, parameter: string) {
            super(scriptName, type, url,parameter)
            this.linkElem = document.createElement("link");
        }

        loadScript() {
            let url = `${SlotConfigManager.instance.externallyLoadURL}/${this.url}/${this.scriptName}.css${this.parameter}`;
            if (LoadResManager.instance.scriptRes.has(url)) {
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `請勿重複加載已有的外部腳本 : ${url}`)
            }
            this.linkElem.rel = "stylesheet";
            this.linkElem.type = this.type;
            this.linkElem.href = url;
            this.linkElem.onload = ()=>{
                LoadResManager.instance.scriptRes.add(url);
                ABS.ALoadScriptType.head.appendChild(this.linkElem);
                LoadResManager.instance.loadScriptEventCallback(this.scriptName,false);
            };
            this.linkElem.onerror = ()=>{
                LoadResManager.instance.loadScriptEventCallback(this.scriptName, true);
            }
            ABS.ALoadScriptType.head.appendChild(this.linkElem);
        }
    }
}
