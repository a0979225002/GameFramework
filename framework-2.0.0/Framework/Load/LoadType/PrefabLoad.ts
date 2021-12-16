/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />

namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class PrefabLoad extends ABS.ALoadType {

        constructor(dataName: string, type: any, url: string, folder: string) {
            super(dataName, type, url, folder);

        }

        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<cc.Prefab>) {

            for (let prefab of asset) {

                if (LoadResManager.instance.prefabRes.has(prefab.name)) {
                    ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `${prefab.name} prefab名稱重複,請檢查是否有相同名稱prefab`)
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
}