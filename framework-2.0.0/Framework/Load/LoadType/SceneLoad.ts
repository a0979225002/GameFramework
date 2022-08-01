/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />

namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入場景資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export  class SceneLoad extends ABS.ALoadType {

        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.AudioClip} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: any) {

            if (LoadResManager.instance.scriptRes.has(dataName))
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `${dataName} 鍵值重複,請檢查該資源是否已加載過`)

            LoadResManager.instance.sceneRes.set(dataName, asset);

            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();

        }
    }
}
