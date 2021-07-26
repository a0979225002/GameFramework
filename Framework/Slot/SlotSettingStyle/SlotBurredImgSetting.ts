namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時使用模糊圖片
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class SlotBurredImgSetting extends ABS.ASlotSetting {

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
         * slot 所有模糊圖片
         * @type {Map<string, cc.SpriteFrame>}
         * @private
         */
        private _gridBurredImg: Map<string, cc.SpriteFrame>;

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
         * slot 所有模糊圖片
         * @return {this}
         * @param img
         */
        public setGridBurredImg(img: Map<string, cc.SpriteFrame>): this {
            this._gridBurredImg = img;
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

        get gridBurredImg(): Map<string, cc.SpriteFrame> {
            return this._gridBurredImg;
        }
    }
}
