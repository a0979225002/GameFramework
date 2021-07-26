namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時與顯示答案時的圖片一致
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class SlotImgSetting extends ABS.ASlotSetting {

        /**
         * 更換圖片的所有格子
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        private _gridSpriteToMap: Map<number, Array<cc.Sprite>>;

        /**
         * slot 所有靜態格子圖片
         * @param {Map<string, cc.SpriteFrame>} img
         * @return {this}
         */
        private _gridImg: Map<string, cc.SpriteFrame>;

        /**
         * slot 所有靜態格子圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        public setGridImg(img: Map<string, cc.SpriteFrame>): this {

            this._gridImg = img;

            return this;
        }

        /**
         * 所有格子的圖片,做循環老虎雞時,需更動的圖片
         * @param {Map<number, Array<cc.Sprite>>} sprite
         * @return {this}
         */
        public setGirdSpriteToMap(sprite: Map<number, Array<cc.Sprite>>): this {

            this._gridSpriteToMap = sprite;

            return this;
        }


        get gridSpriteToMap(): Map<number, Array<cc.Sprite>> {
            return this._gridSpriteToMap;
        }

        get gridImg(): Map<string, cc.SpriteFrame> {
            return this._gridImg;
        }
    }
}
