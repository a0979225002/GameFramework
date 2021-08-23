/// <reference path="./SlotImgSetting.ts" />

namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 老虎機轉動時與顯示答案時的圖片一致,且可對各列分別給予停軸時間
     * @Date 2021-06-28 下午 06:41
     * @Version 1.0
     */
    export class SlotImgSpecialSetting extends SlotImgSetting {

        /**
         * slot 停軸間格
         * 依照你SLOT 列數 各列間的停軸間格
         */
        private _slotRowTime: number;

        /**
         * 各軸瞇排時間
         * @type {number}
         * @private
         */
        private _lookAtTime: number;

        /**
         * slot 各列停軸時間
         * 依照你SLOT 列數 各列間的停軸間格
         * @param {Array<number>} time - 各軸間格時間
         * @return {this}
         */
        public setSlotRowTime(time: number): this {
            this._slotRowTime = time;
            return this;
        }

        /**
         * 瞇排時間
         * @param {number} time
         * @return {this}
         */
        public setLookAtTime(time: number): this {
            this._lookAtTime = time;
            return this;
        }

        get slotRowTime(): number {
            return this._slotRowTime;
        }

        get lookAtTime(): number {
            return this._lookAtTime;
        }
    }
}
