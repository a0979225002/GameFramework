namespace fcc {
    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)EventTarget 事件
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IEventManager {

            /**
             * 事件總數量
             */
            eventCount: number;

            /**
             * 當前正在監聽那些事件;
             */
            eventsCurrentlyBeing: Map<string, string>;

            /**
             * 添加事件
             * @param {string} eventName - 事件名稱
             * @param parameter
             */
            emitEvent(eventName: type.ServerEventType | string, ...parameter: any):void

            /**
             * server監聽回傳接收
             * @param {string} eventName - 事件名稱
             * @param {Function} callFun - 返回方法
             * @param isPermanent - 是否常駐
             */
            eventListener(eventName: string, callFun: (...parameter: any) => void, isPermanent: boolean): void;

            /**
             * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
             * @param {ServerEventType | GameEventType} eventName - 事件名稱
             * @param callFun?{Function} - 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
             */
            destroyEvent(eventName: string, callFun?: Function): void;

            /**
             * 是否該事件持續監聽中
             * @param {string} eventName - 事件名稱
             * @return {boolean}
             */
            hasListening(eventName: type.ServerEventType | string): boolean;

        }
    }
}
