/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./ISlotStyleManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class SlotStyleManager implements IF.ISlotStyleManager {

        private static _instance: IF.ISlotStyleManager;
        private readonly configManager: IF.IConfigManager;
        private template: new(styleData: IF.IBaseSlotSetting, configManager: IF.IConfigManager) => ABaseSlotTemplate<IF.IBaseSlotSetting>
        private readonly _slot: Map<string, fcc.IF.IBaseSlotTemplate<IF.IBaseSlotSetting>>;
        private readonly _slotStyle: Map<string, IF.IBaseSlotSetting>;


        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this._slot = new Map<string, IF.IBaseSlotTemplate<IF.IBaseSlotSetting>>();
            this._slotStyle = new Map<string, fcc.IF.IBaseSlotSetting>();
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new SlotStyleManager(configManager);
                slotStyleMgr = this._instance;
            }
        }

        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.ISlotStyleManager {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.SLOT_STYLE_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }

        /**
         * 添加執行流程的class 需繼承 ABaseSlotTemplate
         * @param {{new(styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager): T}} slotTemplate
         * @return {this}
         */
        setSlotTemplate<T extends ABaseSlotTemplate<fcc.IF.IBaseSlotSetting>>(slotTemplate: new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => T): this {
            this.template = slotTemplate;
            return this;
        }

        /**
         * 添加slot主事件樣式設定
         * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
         * @return {T}
         */
        setSlotStyle<T extends IF.IBaseSlotSetting>(slotSetting?: new(slotStyleManager: IF.ISlotStyleManager) => T): T {
            return new slotSetting(this);
        }

        /**
         * 初始化Slot : 將Slot設定參數給予Slot做初始處理
         */
        build(slotSetting: IF.IBaseSlotSetting) {
            if (!this.template) {
                ErrorManager
                    .instance
                    .executeError(type.ErrorType.UNDEFINED_FW,
                        "Slot Template 未賦予,需實做一個SlotTemplate")
            }

            const template = new this.template(slotSetting, this.configManager)
            this._slot.set(slotSetting.tag, template)
            this._slotStyle.set(slotSetting.tag, slotSetting);
        }


        get slot(): Map<string, fcc.IF.IBaseSlotTemplate<IF.IBaseSlotSetting>> {
            return this._slot;
        }

        get slotStyle(): Map<string, fcc.IF.IBaseSlotSetting> {
            return this._slotStyle;
        }
    }
}
