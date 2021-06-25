import SlotConfigManager from '../../Config/SlotConfigManager'
import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import ALoadScriptType from '../ILoad/ALoadScriptType'
import LoadResManager from '../LoadResManager'

export default class CSSLoad extends ALoadScriptType {

    private readonly linkElem: HTMLLinkElement

    constructor(scriptName: string, type: string, url: string) {
        super(scriptName, type, url)

        this.linkElem = document.createElement("link");

    }

    loadScript() {

        let url = `${SlotConfigManager.instance.externallyLoadURL}/${this.url}/${this.scriptName}.css`;
        if (LoadResManager.instance.scriptRes.has(url)) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `請勿重複加載已有的外部腳本 : ${url}`)
        }
        this.linkElem.rel = "stylesheet";
        this.linkElem.type = this.type;
        this.linkElem.href = url;
        ALoadScriptType.head.appendChild(this.linkElem);

        LoadResManager.instance.scriptRes.add(url);
    }

}