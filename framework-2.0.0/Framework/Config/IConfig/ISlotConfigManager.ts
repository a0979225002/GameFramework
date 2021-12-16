namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 老虎機類遊戲初期設定
         * @Date 2021-05-17 上午 11:41
         * @Version 1.0
         */
        export interface ISlotConfigManager extends IConfigManager {

            /**
             * 是否在遊戲進入後開啟auto狀態
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isAuto: boolean;

            /**
             * 初始遊戲最初的auto次數
             * @type {AutoType}
             * @default type.AutoType.AUTO
             * @private
             */
            readonly autoCount: number;

            /**
             * 初始開始遊戲前是否是加速狀態
             * @type {boolean}
             * @default false
             * @private
             */
            readonly isSpeedUp: boolean;

            /**
             * 初始遊戲最初的auto次數
             * @param {AutoType} type
             * @default type.AutoType.AUTO
             * @returns {this}
             */
            setAutoCont(type: number): this;

            /**
             * 初始進入遊戲時Auto狀態
             * @param {boolean} isAuto - 是否在遊戲進入後開啟auto狀態
             * @default false
             * @returns {this}
             */
            setAutoState(isAuto: boolean): this;

            /**
             * 是否在遊戲進入後是加速的狀態
             * @param {boolean} isSpeedUp
             * @default false
             * @returns {this}
             */
            setSpeedState(isSpeedUp: boolean): this;
        }
    }
}