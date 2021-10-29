/// <reference path="./Audio/AudioManager.ts" />
/// <reference path="./Config/SlotConfigManager.ts" />
/// <reference path="./Error/ErrorManager.ts" />
/// <reference path="./Language/LanguageManager.ts" />
/// <reference path="./Event/EventManager.ts" />
/// <reference path="./Load/LoadResManager.ts" />
/// <reference path="./Process/ProcessManager.ts" />
/// <reference path="./Scene/SceneManager.ts" />
/// <reference path="./Slot/SlotStyleManager.ts" />
/// <reference path="./Notification/NotificationManager.ts" />

namespace fcc {

    /**
     * 遊戲初始設定,並透過builder加載所有Manager
     * @return {fcc.IF.IConfigManager}
     * @private
     */
    export const configMgr: IF.ISlotConfigManager = SlotConfigManager.instance;


    /**
     * 物件池管理器
     */
    export let nodePoolMgr;

    /**
     * 音樂管理器,初始設定各音樂狀態,保存當前撥放音量
     * @return {fcc.IF.IAudioManager}
     */
    export let audioMgr: IF.IAudioManager;

    /**
     * 框架錯誤管理
     * @return {fcc.IF.IErrorManager}
     */
    export let errorMgr: IF.IErrorManager;

    /**
     * 語系管理器 : 保存當前語言本,語系樣式
     * @return {fcc.IF.ILanguageManager}
     */
    export let languageMgr: IF.ILanguageManager;

    /**
     * 事件管理器,當前綁定的事件,事件數量
     * @return {fcc.IF.IEventManager}
     */
    export let eventMgr: IF.IEventManager;

    /**
     * 資源管理者 : 加載資源,保存資源,獲取當前加載進度
     * @return {fcc.IF.ILoadResManager}
     */
    export let loadMgr: IF.ILoadResManager;

    /**
     * 遊戲流程管理器 : 管理當前流程,執行當前流程
     * @return {fcc.IF.IProcessManager}
     */
    export let processMgr: IF.IProcessManager;

    /**
     * 場景管理器 : 自動匹配遊戲寬高,監聽當前玩家遊玩模式(橫式or直式)
     * @return {fcc.IF.ISceneManager}
     */
    export let sceneMgr: IF.ISceneManager;

    /**
     * 老虎機管理器 : 管理老虎機樣式,執行速度,效果
     */
    export let slotStyleMgr: IF.ISlotStyleManager;

    /**
     * 自訂義通知事件管理器,當前綁定的通知,通知數量
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

/**
 * 框架版本
 * @type {string}
 */
globalThis.FCC_VERSION = "1.0.1";
