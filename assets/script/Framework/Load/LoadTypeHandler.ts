import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {LoadType} from "./Enum/LoadEnum";
import ILoadFactory from "./ILoad/ILoadFactory";
import LoadResManager from "./LoadResManager";
import LoadTypeFactory from "./LoadTypeFactory";

export default class LoadTypeHandler implements ILoadFactory {

    private factory: LoadTypeFactory;

    constructor() {

        this.factory = new LoadTypeFactory();

    }

    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param name
     * @param type
     * @param url
     */
    public executeLoad(name: string, type: LoadType, url: string) {

        this.checkRepeatTheName(name);

        LoadResManager.instance.initialLoadState.set(name, null);

        this.factory.executeLoad(name, type, url);

    }

    /**
     * 執行Bundle載入動作
     * @param name
     * @param type
     * @param url
     */
    public async executeLoadBundle(name: string, type: LoadType, url: string) {

        this.checkRepeatTheName(name);

        LoadResManager.instance.secondaryLoadState.set(name, null);
        await this.factory.executeLoadBundle(name, type, url);
    }

    private checkRepeatTheName(name: string) {

        if (LoadResManager.instance.initialLoadState.has(name)) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `${name} 此(主資源)已載入過了,或名稱重複,請檢察`);
        }
        if (LoadResManager.instance.secondaryLoadState.has(name)) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `${name} 此(次資源)已載入過了,或名稱重複,請檢察`);
        }
    }

    /**
     * 加載外部腳本
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     */
    executeLoadExternalScript(name: string, type: LoadType, url: string) {

        this.factory.executeLoadExternalScript(name, type, url);

    }

}