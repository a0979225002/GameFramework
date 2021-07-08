import ALoadType from "../ILoad/ALoadType";
import LoadResManager from "../LoadResManager";

export default class TextLoad extends ALoadType {

    constructor(dataName: string, type: any, url: string, folder: string) {
        super(dataName, type, url, folder);

    }

    /**
     *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
     *  因此需自行檢查回傳資料是否正確
     * @param key
     * @param asset
     */
    setResToManager(key: string, asset: cc.TextAsset) {

        //清除回車
        let textArray: Array<string> = asset[0]["text"].split(/[\s\n]/);
        let textMap = new Map<string, string>();

        for (let texts of textArray) {

            //切割 CSV特有的 ,
            let array: Array<string> = texts.split(',');

            //你可以在第三格放入註解,我只抓前兩格資料
            let key = array[0];
            let value = array[1];

            if (key == "") {
                continue;
            }

            //清除所有包含的 "" '' 等特殊符號
            let processingvalue = value.replace(/['"]/g, '');

            textMap.set(key, processingvalue);
        }

        LoadResManager.instance.readFileRes.set(key, textMap);

        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        this.updateProgressEnd();
    }

    updateManagerState(key: string, state: number, update: number) {

        if (this.folder === "resources") {
            LoadResManager.instance.initialLoadState.set(this.dataName, state);
        } else {
            LoadResManager.instance.secondaryLoadState.set(this.dataName, state);
        }

        LoadResManager.instance.loadMainEventCallback(key, update, state);

    }
}