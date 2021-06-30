namespace fcc {

    export namespace IF {


        export interface ISlotStyleManager {

            readonly slot: IF.ISlot;

            /**
             * 添加老虎機主流程 需繼承 ISlot
             * @return {this}
             */
            setSlotTemplate<T extends new(styleData: IF.ISlotSetting) => IF.ISlot>(slotTemplate: T): this;

            /**
             * 添加slot主事件樣式設定
             */
            setSlotStyle<T extends IF.ISlotSetting>(slotSetting?: new(slotStyleManager: IF.ISlotStyleManager) => T): T;

            /**
             * 初始所有操作,並實例化  綁定的 slot Class
             */
            build(slotSetting: IF.ISlotSetting): void;
        }
    }
}