import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import ALoadType from "../ILoad/ALoadType";
import LoadResManager from "../LoadResManager";

export default class MusicLoad extends ALoadType {

    constructor(dataName: string, type: any, url: string, folder: string) {

        super(dataName, type, url, folder);

    }

    //@Override
    setResToManager(key: string, asset: Array<cc.AudioClip>) {
        //拿取音樂檔名,當作鍵值
        for (let value of asset) {

            let key: string = value.name;

            if (LoadResManager.instance.musicRes.has(key))
                ErrorManager.instance.executeError(ErrorType.LOAD_FW, `${key} 鍵值重複,請檢查該音樂資源是否已加載過`)

            LoadResManager.instance.musicRes.set(key, value);

        }
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    }
}