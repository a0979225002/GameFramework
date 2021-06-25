import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {ServerEventType} from './Enum/ServerEventType'
import IEventManager from './IEventManager'

export default class EventManager implements IEventManager {

    private static _instance: IEventManager;

    private configManager: IConfigManager;

    /**
     * 事件總數量
     */
    private _eventCount: number

    /**
     * 遊戲內事件
     */
    public static serverTarget: cc.EventTarget
    /**
     * 伺服器回傳事件
     */
    public static gameTarget: cc.EventTarget

    /**
     * 當前正在監聽那些事件;
     */
    private readonly _eventsCurrentlyBeing: Map<string, ServerEventType | string>

    private constructor(configManager: IConfigManager) {
        this.configManager = configManager;
        this._eventCount = 0;
        this._eventsCurrentlyBeing = new Map<string, ServerEventType | string>();
        EventManager.serverTarget = new cc.EventTarget();
        EventManager.gameTarget = new cc.EventTarget();
    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new EventManager(configManager);
        }
    }

    /**
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): IEventManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.LISTENER_FW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * 添加事件
     * @param eventTarget
     * @param {string} eventName
     * @param {any} any : 要回傳的物件
     */
    public setEvent(eventTarget: cc.EventTarget, eventName: ServerEventType | string, ...any: any) {
        any ? eventTarget.emit(eventName, ...any) : eventTarget.emit(eventName);
    }

    /**
     * game監聽回傳接收
     * @param {string} eventName
     * @param {Function} callFun
     * @param isOnce
     */
    public gameEventListener(eventName: string, callFun: (...target: any) => void, isOnce: boolean) {
        this._eventCount += 1;
        this._eventsCurrentlyBeing.set("gameEvent", eventName);
        if (isOnce) {
            EventManager.gameTarget.once(eventName, callFun);
        } else {
            EventManager.gameTarget.on(eventName, callFun);
        }
    }

    /**
     * server監聽回傳接收
     * @param {string} eventName
     * @param {Function} callFun
     * @param isOnce
     */
    public serverEventListener(eventName: ServerEventType, callFun: (...target: any) => void, isOnce: boolean) {
        this._eventCount += 1;
        this._eventsCurrentlyBeing.set("severEvent", eventName);
        if (isOnce) {
            EventManager.serverTarget.once(eventName, callFun);
        } else {
            EventManager.serverTarget.on(eventName, callFun);
        }
    }

    /**
     * 刪除之前用同類型，回調，目標或 useCapture 註冊的事件監聽器，如果只傳遞 type，將會刪除 type 類型的所有事件監聽器。
     * @param {ServerEventType | GameEventType} eventName
     * @param {cc.EventTarget} eventTarget
     * @param callFun?{Function} : 要刪除的方法,如果未傳參數,將默認全部相關的callFun一並刪除
     * @param target?{Object}:調用回調的目標（此對象），如果未指定，則僅刪除沒有目標的回調
     */
    public destroyEvent(eventName: ServerEventType | string, eventTarget: cc.EventTarget, callFun?: Function, target?: Object) {
        eventTarget.off(eventName, callFun, target);
    }

    /**
     * 是否該事件持續監聽中
     */
    public hasListening(eventName: ServerEventType | string, eventTarget: cc.EventTarget): boolean {
        return eventTarget.hasEventListener(eventName);
    }

    public get eventCount(): number {
        return this._eventCount
    }

    public get eventsCurrentlyBeing(): Map<string, ServerEventType | string> {
        return this._eventsCurrentlyBeing
    }
}