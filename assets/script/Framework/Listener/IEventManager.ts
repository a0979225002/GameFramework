import {GameEventType} from './Enum/gameEventType'
import {ServerEventType} from './Enum/ServerEventType'

export default interface IEventManager {

    /**
     * 事件總數量
     */
    eventCount: number;

    /**
     * 當前正在監聽那些事件;
     */
    eventsCurrentlyBeing: Map<string, ServerEventType | GameEventType>;

    /**
     * 添加事件
     * @param eventTarget
     * @param {string} eventName
     * @param {any} any : 要回傳的物件
     */
    setEvent(eventTarget: cc.EventTarget, eventName: ServerEventType | GameEventType, ...any: any)

    /**
     * game接收監聽事件
     * @param {string} eventName
     * @param {Function} callFun
     * @param {boolean} isOnce : 是否使用一次性監聽
     */
    gameEventListener(eventName: GameEventType, callFun: (...target: any) => void, isOnce: boolean);

    /**
     * server監聽回傳接收
     * @param {string} eventName
     * @param {Function} callFun
     * @param {boolean} isOnce : 是否使用一次性監聽
     */
    serverEventListener(eventName: ServerEventType, callFun: (target?: any) => void, isOnce: boolean);

    /**
     * 刪除事件,綁定的回傳也一並刪除
     * @param {ServerEventType | GameEventType} eventName
     * @param {cc.EventTarget} eventTarget
     * @param callFun?
     * @param target?
     */
    destroyEvent(eventName: ServerEventType | GameEventType, eventTarget: cc.EventTarget, callFun?: Function, target?: Object);

    /**
     * 該事件是否持續監聽中
     * @param {ServerEventType | GameEventType} eventName
     * @param eventTarget
     * @return {boolean}
     */
    hasListening(eventName: ServerEventType | GameEventType, eventTarget): boolean;

}