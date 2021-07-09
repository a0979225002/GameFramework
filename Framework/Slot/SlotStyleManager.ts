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
        private template: new(styleData: IF.ISlotSetting,configManager:IF.IConfigManager) => IF.ISlot
        private _slot: IF.ISlot;

        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
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
         * 添加執行流程的class 需繼承 ISlot
         * @param {ASlot} slotTemplate
         * @return {this}
         */
        public setSlotTemplate<T extends new(styleData: IF.ISlotSetting,configManager:IF.IConfigManager) => IF.ISlot>(slotTemplate: T): this {
            this.template = slotTemplate;
            return this;
        }

        /**
         * 添加slot主事件樣式設定
         * @param {{new(slotStyleManager: fcc.IF.ISlotStyleManager): T}} slotSetting
         * @return {T}
         */
        setSlotStyle<T extends IF.ISlotSetting>(slotSetting?: new(slotStyleManager: IF.ISlotStyleManager) => T): T {
            return new slotSetting(this);
        }

        /**
         * 初始化Slot : 將Slot設定參數給予Slot做初始處理
         */
        build(slotSetting: IF.ISlotSetting) {
            if (!this.template) {
                ErrorManager
                    .instance
                    .executeError(type.ErrorType.UNDEFINED_FW,
                        "Slot Template 未賦予,需幫定或實做一個SlotTemplate")
            }
            this._slot = new this.template(slotSetting,this.configManager);
        }

        public get slot(): IF.ISlot {
            return this._slot;
        }
    }
}