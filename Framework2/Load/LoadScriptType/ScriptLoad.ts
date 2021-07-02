import SlotConfigManager from '../../Config/SlotConfigManager'
import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import ALoadScriptType from '../ILoad/ALoadScriptType'
import LoadResManager from '../LoadResManager'


export default class ScriptLoad extends ALoadScriptType {

    private readonly linkElem: HTMLScriptElement

    constructor(scriptName: string, type: string, url: string) {
        super(scriptName, type, url)

        this.linkElem = document.createElement("script");

    }

    loadScript() {
        let url = `${SlotConfigManager.instance.externallyLoadURL}/${this.url}/${this.scriptName}.js`;

        if (LoadResManager.instance.scriptRes.has(url)) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `請勿重複加載已有的外部腳本 : ${url}`)
        }

        this.linkElem.type = this.type;
        this.linkElem.src = url;
        ALoadScriptType.head.appendChild(this.linkElem);

        LoadResManager.instance.scriptRes.add(url);

    }

}