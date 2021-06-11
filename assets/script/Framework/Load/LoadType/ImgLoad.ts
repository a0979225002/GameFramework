import ALoadType from "../ILoad/ALoadType";
import LoadResManager from "../LoadResManager";

export default class ImgLoad extends ALoadType {

    constructor(dataName: string, type: any, url: string, folder: string) {
        super(dataName, type, url, folder);

    }

    //@Override
    setResToManager(dataName: string, asset: cc.SpriteAtlas) {

        let spriteMap: Map<string, cc.SpriteFrame> = new Map<string, cc.SpriteFrame>();
        for (let sprite of asset[0].getSpriteFrames()) {

            //將鍵值轉小寫,如果有使用grid key 作為搜尋資源
            //將無條件將 key 轉成 純數字 例如 : symbol0~10 = 0~10
            let lowerCase = dataName.toLowerCase();
            if (lowerCase.match("grid")) {
                let gridName = sprite.name.replace(/[a-z A-Z]/g, '');
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