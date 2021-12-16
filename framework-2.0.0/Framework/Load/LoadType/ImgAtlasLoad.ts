/// <reference path="../../Error/Enum/ErrorType.ts" />
/// <reference path="../../Error/ErrorManager.ts" />
/// <reference path="../ILoad/ALoadType.ts" />
/// <reference path="../LoadResManager.ts" />
/// <reference path="../LoadResManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 載入圖片資源
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class ImgAtlasLoad extends ABS.ALoadType {

        constructor(dataName: string, type: any, url: string, folder: string) {
            super(dataName, type, url, folder);
        }

        /**
         * 將資源保存在管理器中
         * @param {string} dataName - 自訂義該資源名稱
         * @param {cc.SpriteAtlas} asset - 資源
         * @protected
         */
        setResToManager(dataName: string, asset: cc.SpriteAtlas): void {
            let spriteMap: Map<string, cc.SpriteFrame> = new Map<string, cc.SpriteFrame>();
            for (let sprite of asset[0].getSpriteFrames()) {
                //將鍵值轉小寫,如果有使用grid key 作為搜尋資源
                //將無條件將 key 轉成 純數字 例如 : symbol0~10 = 0~10
                let lowerCase = dataName.toLowerCase();
                if (lowerCase.indexOf("grid") != -1) {
                    let gridName = sprite.name.replace(/[^0-9]/ig, '');
                    spriteMap.set(gridName, sprite);
                } else {
                    let spriteName = sprite.name;
                    spriteMap.set(spriteName, sprite);
                }
            }
            LoadResManager.instance.imgRes.set(dataName, spriteMap);
            //目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            this.updateProgressEnd();
        }
    }
}
