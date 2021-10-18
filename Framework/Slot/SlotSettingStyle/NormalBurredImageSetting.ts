/// <reference path="./NormalSetting.ts" />

namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時使用模糊圖片,且可對各列分別給予停軸時間
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class NormalBurredImageSetting extends NormalSetting {

        /**
         * slot 所有模糊圖片
         * @type {Map<string, cc.SpriteFrame>}
         * @private
         */
        private _gridBurredImg: Map<string, cc.SpriteFrame>;


        /**
         * slot 所有模糊圖片
         * @param {Array<cc.SpriteFrame>} img
         * @return {this}
         */
        public setGridBurredImg(img: Map<string, cc.SpriteFrame>): this {

            this._gridBurredImg = img;

            return this;
        }

        get gridBurredImg(): Map<string, cc.SpriteFrame> {
            return this._gridBurredImg;
        }
    }
}
