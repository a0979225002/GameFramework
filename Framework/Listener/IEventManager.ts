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
             * 發射事件
             * @param eventTarget
             * @param {string} eventName
             * @param {any} any : 要回傳的物件
             */
            emit(eventName: string, ...any: any): void;

            /**
             * server監聽回傳接收
             * @param {string} eventName
             * @param {Function} callFun
             * @param isPermanent - 是否常駐
             */
            eventListener(eventName: string, callFun: (target?: any) => void, isPermanent: boolean): void;

            /**
             * 刪除事件,綁定的回傳也一並刪除
             * @param {ServerEventType | GameEventType} eventName
             * @param {cc.EventTarget} eventTarget
             * @param callFun
             * @param target
             */
            destroyEvent(eventName: string, callFun?: Function, target?: Object): void;

            /**
             * 該事件是否持續監聽中
             * @param {ServerEventType | GameEventType} eventName
             * @param eventTarget
             * @return {boolean}
             */
            hasListening(eventName: type.ServerEventType | string, eventTarget): boolean;

        }
    }
}