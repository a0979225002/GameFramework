namespace fcc {
    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)執行老虎機主要方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IBaseSlotTemplate<T extends fcc.IF.IBaseSlotSetting> {

            /**
             * 初始化該輪所有狀態
             */
            initializeState(): void;

            /**
             * Loop 老虎機方法
             * @return {Promise<void>}
             */
            runSlotAnimation(): Promise<void>;

            /**
             * 啟動老虎機時過場動畫方法
             * @return {Promise<void>}
             */
            sineInSlot(): Promise<void>;
        }
    }
}
