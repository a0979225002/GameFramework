/// <reference path="./SlotImgSetting.ts" />

namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時使用模糊圖片
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class SlotBurredImgSetting extends SlotImgSetting{

        /**
         * slot 所有模糊圖片
         * @type {Map<string, cc.SpriteFrame>}
         * @private
         */
        private _gridBurredImg: Map<string, cc.SpriteFrame>;

        get gridBurredImg(): Map<string, cc.SpriteFrame> {
            return this._gridBurredImg;
        }
    }
}
