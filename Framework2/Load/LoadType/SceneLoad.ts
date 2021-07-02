import {ErrorType} from '../../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../../Error/ErrorManager'
import ALoadType from '../ILoad/ALoadType'
import LoadResManager from '../LoadResManager'

export default class SceneLoad extends ALoadType {

    constructor(dataName: string, type: any, url: string, folder: string) {
        super(dataName, type, url, folder)
    }

    setResToManager(key: string, asset: any) {

        if (LoadResManager.instance.scriptRes.has(key))
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `${key} 鍵值重複,請檢查該資源是否已加載過`)

        LoadResManager.instance.sceneRes.set(key, asset);

        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();

    }
}