/// <reference path="./ABaseSlotSetting.ts" />

namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時與顯示答案時的圖片一致,且可對各列分別給予停軸時間
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class NormalSetting extends ABS.ABaseSlotSetting {

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
         * 添加儲存SERVER答案的Model
         * @type {fcc.IF.IBaseSlotResultModel}
         * @private
         */
        protected _resultModule: fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult;

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

        /**
         * 更換圖片的所有格子
         * @return {Map<number, Array<cc.Sprite>>}
         */
        get gridSpriteToMap(): Map<number, Array<cc.Sprite>> {
            return this._gridSpriteToMap;
        }

        /**
         * 添加儲存SERVER答案的Model
         * @param {fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult} resultModel
         * @return {this}
         */
        setResultModel(resultModel: fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult): this {
            return super.setResultModel(resultModel);
        }


        /**
         * slot 所有靜態格子圖片
         * @return {Map<string, cc.SpriteFrame>}
         */
        get gridImg(): Map<string, cc.SpriteFrame> {
            return this._gridImg;
        }

        /**
         * 添加儲存SERVER答案的Model
         * @return {fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult}
         */
        get resultModule(): fcc.IF.INoLineResultModel | fcc.IF.IHasLineResultModule | fcc.IF.INoLineFreeResultModel | fcc.IF.IHasLineFreeResultModule | fcc.IF.IExtendHasLineResult | fcc.IF.IExtendHasLineFreeResult {
            return this._resultModule;
        }
    }
}
