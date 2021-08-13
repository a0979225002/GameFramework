/// <reference path="./Animation/AnimationManager.ts" />
/// <reference path="./Audio/AudioManager.ts" />
/// <reference path="./Config/SlotConfigManager.ts" />
/// <reference path="./Error/ErrorManager.ts" />
/// <reference path="./Language/LanguageManager.ts" />
/// <reference path="./Listener/EventManager.ts" />
/// <reference path="./Load/LoadResManager.ts" />
/// <reference path="./Process/ProcessManager.ts" />
/// <reference path="./Scene/SceneManager.ts" />
/// <reference path="./Slot/SlotStyleManager.ts" />
/// <reference path="./Listener/NotificationManager.ts" />

const FCC_VERSION = 0.04;

namespace fcc {


    /**
     * 遊戲初始設定,並透過builder加載所有Manager
     * @return {fcc.IF.IConfigManager}
     * @private
     */
    export let configMgr: IF.ISlotConfigManager = SlotConfigManager.instance;
    // export function configMgr(): IF.IConfigManager {
    //     return SlotConfigManager.instance;
    // }

    /**
     * TODO : 動畫管理器
     * @return {fcc.IF.IAnimationManager}
     * @private
     */
    export let animationMgr: IF.IAnimationManager;
    //  export function animationMgr(): IF.IAnimationManager {
    //     return AnimationManager.instance;
    // }

    /**
     * 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @return {fcc.IF.IAudioManager}
     * @private
     */
    export let audioMgr: IF.IAudioManager;
    // export function audioMgr(): IF.IAudioManager {
    //     return AudioManager.instance;
    // }

    /**
     * 框架錯誤管理
     * @return {fcc.IF.IErrorManager}
     * @private
     */
    export let errorMgr: IF.IErrorManager;
    // export function errorMgr(): IF.IErrorManager {
    //     return ErrorManager.instance;
    // }

    /**
     * 語系管理器 : 保存當前語言本,語系樣式
     * @return {fcc.IF.ILanguageManager}
     * @private
     */
    export let languageMgr: IF.ILanguageManager;
    // export function languageMgr(): IF.ILanguageManager {
    //     return LanguageManager.instance;
    // }

    /**
     * 事件管理器,當前綁定的事件,事件數量
     * @return {fcc.IF.IEventManager}
     * @private
     */
    export let eventMgr: IF.IEventManager;
    // export function eventMgr(): IF.IEventManager {
    //     return EventManager.instance;
    // }

    /**
     * 資源管理者 : 加載資源,保存資源,獲取當前加載進度
     * @return {fcc.IF.ILoadResManager}
     * @constructor
     * @private
     */
    export let loadMgr: IF.ILoadResManager;
    // export function LoadMgr(): IF.ILoadResManager {
    //     return LoadResManager.instance;
    // }

    /**
     * 網路管理 : 傳送封包,接收封包
     * @return {fcc.IF.ILoadResManager}
     * @private
     */
    export function networkMgr(): null {
        return null;
    }

    /**
     * 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @return {fcc.IF.IProcessManager}
     * @private
     */
    export let processMgr: IF.IProcessManager;
    // export function processMgr(): IF.IProcessManager {
    //     return ProcessManager.instance;
    // }

    /**
     * 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @return {fcc.IF.ISceneManager}
     * @private
     */
    export let sceneMgr: IF.ISceneManager;
    // export function sceneMgr(): IF.ISceneManager {
    //     return SceneManager.instance;
    // }

    /**
     * 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     */
    export let slotStyleMgr: IF.ISlotStyleManager;

    /**
     * 推撥者綁定與拿取
     * @return {fcc.IF.INotificationManager<T>}
     */
    export function notificationMgr<T extends IF.IBaseNotification>(): IF.INotificationManager<T> {
        return NotificationManager.instance<T>();
    }
}

/**
 * 擴展至全域,cocos規定
 * @type {fcc}
 */
globalThis.fcc = fcc;
