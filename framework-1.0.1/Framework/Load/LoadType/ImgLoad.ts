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
    export class ImgLoad extends ABS.ALoadType {

        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SpriteAtlas} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.SpriteFrame[]): void {
            let spriteMap: Map<string, cc.SpriteFrame> = new Map<string, cc.SpriteFrame>();
            for (let spriteFrame of asset) {
                spriteMap.set(spriteFrame.name, spriteFrame);
            }
            LoadResManager.instance.imgRes.set(dataName, spriteMap);
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        }
    }
}
