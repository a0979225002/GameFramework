namespace fcc {

    export namespace IF {


        export interface ISlotStyleManager {

            readonly slot: Map<string, fcc.IF.IBaseSlotTemplate<IF.IBaseSlotSetting>>;

            readonly slotStyle: Map<string, IF.IBaseSlotSetting>;

            /**
             * 添加老虎機主流程 需繼承 ISlot
             * @param {T} slotTemplate
             * @return {this}
             */
            setSlotTemplate<T extends ABaseSlotTemplate<fcc.IF.IBaseSlotSetting>>(slotTemplate: new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => T): this;

            /**
             * 添加slot主事件樣式設定
             * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
             * @return {T}
             */
            setSlotStyle<T extends IF.IBaseSlotSetting>(slotSetting?: new(slotStyleManager: IF.ISlotStyleManager) => T): T;

            /**
             * 初始所有操作,並實例化  綁定的 slot Class
             */
            build(slotSetting: IF.IBaseSlotSetting): void;
        }
    }
}
