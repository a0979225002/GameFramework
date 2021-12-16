/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />

namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入文本資源,目前只能載入.CSV 檔案
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class TextLoad extends ABS.ALoadType {

        constructor(dataName: string, type: any, url: string, folder: string) {
            super(dataName, type, url, folder);
        }

        /**
         *  目前只能傳入 .CSV 檔案,目前無從判斷該檔案副檔名
         *  因此需自行檢查回傳資料是否正確
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.TextAsset) {

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

            LoadResManager.instance.readFileRes.set(dataName, textMap);

            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        }
    }
}