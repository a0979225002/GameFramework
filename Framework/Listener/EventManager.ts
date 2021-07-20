/// <reference path="../Error/Enum/ErrorType.ts" />
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="./IEventManager.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 事件管理器,當前綁定的事件,事件數量
     * @Date 2021-04-14 下午 20:24
     * @Version 1.1
     */
    export class EventManager implements IF.IEventManager {

        private static _instance: IF.IEventManager;

        private configManager: IF.IConfigManager;

        /**
         * 事件總數量
         */
        private _eventCount: number

        /**
         * 遊戲內事件
         */
        public target: cc.EventTarget

        /**
         * 當前正在監聽那些事件;
         */
        private readonly _eventsCurrentlyBeing: Map<string, string>

        private constructor(configManager: IF.IConfigManager) {
            this.configManager = configManager;
            this._eventCount = 0;
            this._eventsCurrentlyBeing = new Map<string, string>();
            this.target = new cc.EventTarget();
        }

        /**
         *  懶漢加載
         *  初始化,只讓一個專案產生一次該class
         */
        public static setInstance(configManager: IF.IConfigManager) {
            if (!this._instance) {
                this._instance = new EventManager(configManager);
                eventMgr = this._instance;
            }
        }

        /**
         *  獲取已經初始化的靜態實例class
         */
        public static get instance(): IF.IEventManager {
            if (!this._instance) {
                ErrorManager.instance.executeError(type.ErrorType.LISTENER_FW, "該類尚未實例化");
                return;
            }
            return this._instance;
        }

        /**
         * 添加事件
         * @param {string} eventName - 事件名稱
         * @param {any} any : 要回傳的物件
         */
        public emitEvent(eventName: type.ServerEventType | string, ...any: any): void {
            this.target.emit(eventName, ...any);
        }

        /**
         * server監聽回傳接收
         * @param {string} eventName- 事件名稱
         * @param {Function} callFun - 返回方法
         * @param isPermanent - 是否常駐
         */
        public eventListener(eventName: string, callFun: (...parameter: any) => void, isPermanent: boolean) {
            this._eventCount += 1;
            this._eventsCurrentlyBeing.set("severEvent", eventName);
            if (isPermanent) {
                this.target.on(eventName, callFun);
            } else {
                this.target.once(eventName, callFun);
            }
        }

        /**
         * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
         * @param {ServerEventType | GameEventType} eventName - 事件名稱
         * @param callFun?{Function} - 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
         */
        public destroyEvent(eventName: string, callFun?: Function) {
            this.target.off(eventName, callFun, this.target);
        }

        /**
         * 是否該事件持續監聽中
         * @param {string} eventName - 事件名稱
         * @return {boolean}
         */
        public hasListening(eventName: string): boolean {
            return this.target.hasEventListener(eventName);
        }

        public get eventCount(): number {
            return this._eventCount
        }

        public get eventsCurrentlyBeing(): Map<string, string> {
            return this._eventsCurrentlyBeing
        }
    }
}
