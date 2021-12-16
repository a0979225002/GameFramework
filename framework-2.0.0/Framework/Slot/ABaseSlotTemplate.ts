namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 執行老虎機主要方法(基礎類)
     * @Date 2021-10-18 下午 20:24
     * @Version 1.1
     */
    export abstract class ABaseSlotTemplate<T extends fcc.IF.IBaseSlotSetting> implements fcc.IF.IBaseSlotTemplate<T> {

        protected constructor(styleData: T, configManager: fcc.IF.IConfigManager) {}

        /**
         * 初始化該輪所有狀態
         */
        abstract initializeState(): void;

        /**
         * Loop 老虎機方法
         * @return {Promise<void>}
         */
        abstract runSlotAnimation(): Promise<void>;

        /**
         * 啟動老虎機時過場動畫方法
         * @return {Promise<void>}
         */
        abstract sineInSlot(): Promise<void>;
    }
}
