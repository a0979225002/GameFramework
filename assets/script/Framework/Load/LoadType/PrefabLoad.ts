import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import ALoadType from "../ILoad/ALoadType";
import LoadResManager from "../LoadResManager";

export default class PrefabLoad extends ALoadType {

    constructor(dataName: string, type: any, url: string, folder: string) {
        super(dataName, type, url, folder);

    }

    setResToManager(key: string, asset: Array<cc.Prefab>) {

        for (let prefab of asset) {

            if (LoadResManager.instance.prefabRes.has(prefab.name)) {

                ErrorManager.instance.executeError(ErrorType.LOAD_FW, `${prefab.name} prefab名稱重複,請檢查是否有相同名稱prefab`)
                return;
            } else {
                LoadResManager.instance.prefabRes.set(prefab.name, prefab);
            }
        }

        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();

    }
}