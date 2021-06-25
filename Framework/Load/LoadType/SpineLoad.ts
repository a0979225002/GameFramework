/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入骨骼动画資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class SpineLoad extends ABS.ALoadType {

        constructor(dataName: string, type: any, url: string, folder: string) {
            super(dataName, type, url, folder);

        }

        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SkeletonData} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: Array<sp.SkeletonData>) {

            if (LoadResManager.instance.spineRes.has(dataName)) {
                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, "請檢察資源是否以載入過,鍵值重複");
            }

            LoadResManager.instance.spineRes.set(dataName, asset[0]);

            let lowerCase = dataName.toLowerCase();
            let checkGrid = lowerCase.match("grid");
            for (let spine of asset) {

                let spineNames: Array<string> = Object.keys(spine.skeletonJson.animations);
                let spineToMap: Map<string, string> = new Map<string, string>();
                //取出spine動畫名稱
                for (let spineName of spineNames) {
                    //檢查是否有grid關鍵字,將把取spineName 的key 更換為數字
                    if (checkGrid) {
                        let spineNameToNumber = spineName.replace(/[^0-9]/ig, '');
                        //如果動畫內包含不含數字的的動畫名,將直接將動畫名整個保存成key
                        if (spineNameToNumber === "") {
                            spineToMap.set(spineName, spineName);
                        } else {
                            if (spineToMap.has(spineNameToNumber)) {
                                ErrorManager.instance.executeError(type.ErrorType.LOAD_FW, `${spineName} spine動畫取number有誤,請檢查該spine Animetion是否有重複數字情況`);
                            }
                            spineToMap.set(spineNameToNumber, spineName);
                        }
                    } else {
                        spineToMap.set(spineName, spineName);
                    }
                }
                //TODO:尚未想到要把grid動換資源放在哪
            }

            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        }
    }
}