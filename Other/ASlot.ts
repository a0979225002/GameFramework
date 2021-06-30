// // import SpeedStateChangeNotification from "../Listener/NotificationType/GameNotification/SpeedStateChangeNotification";
// // import SpeedStateChangeObserver from "../Listener/ObserverType/GameObserver/SpeedStateChangeObserver";
// // import SlotProcessManager from '../Process/SlotProcessManager'
// // import StopNowStateNotification from "../Listener/NotificationType/GameNotification/StopNowStateNotification";
// // import StopNowStateObserver from "../Listener/ObserverType/GameObserver/StopNowStateObserver";
// // import {StyleData} from './SlotStyleManager'
//
// namespace fcc {
//
//     export namespace ABS {
//
//         /**
//          * @Author XIAO-LI-PIN
//          * @Description (抽象類)老虎機遊戲主執行
//          * @Date 2021-04-14 下午 20:24
//          * @Version 1.1
//          */
//         export abstract class ASlot implements IF.ISlot {
//
//             protected styleData: IF.ISlotSetting;
//
//             /**
//              * 使否需要即停
//              * @type {boolean}
//              * @protected
//              */
//             protected isSlotImmediateStop: boolean;
//
//             /**
//              * 當前的加速狀態
//              * @type {boolean}
//              * @protected
//              */
//             protected isSpeedUp: boolean;
//
//             /**
//              * 加速速率 : 無加速狀態 = 1
//              * @type {number}
//              * @protected
//              */
//             protected speed: number;
//
//             /**
//              * 即停狀態通知時,該事件推播給綁定者
//              * @type {StopNowStateObserver}
//              * @protected
//              */
//             protected stopNowStateObserver: StopNowStateObserver;
//
//             /**
//              * 遊戲加速狀態改變時,當有事件推送時,將會將該事件推播給綁定者
//              * @type {SpeedStateChangeObserver}
//              * @protected
//              */
//             protected speedStateChangeObserver: SpeedStateChangeObserver;
//
//             protected configManager: IF.IConfigManager;
//
//             /**
//              * Loop 老虎機方法
//              * @return {Promise<void>}
//              */
//             public abstract runSlotAnimation(): Promise<void>;
//
//             /**
//              * 啟動老虎機時過場動畫方法
//              * @return {Promise<void>}
//              */
//             public abstract sineInSlot(): Promise<void>;
//
//             protected constructor(styleData: IF.ISlotSetting, configManager: IF.IConfigManager) {
//
//                 this.configManager = configManager;
//                 this.isSpeedUp = ProcessManager.instance.isSpeedUp;
//                 this.styleData = styleData
//                 this.speed = 1;
//
//                 StopNowStateNotification
//                     .instance.subscribe(this.getStopNowStateObserver(), true);
//                 SpeedStateChangeNotification
//                     .instance.subscribe(this.getSpeedStateChangeObserver(), true);
//
//             }
//
//             /**
//              * 即停監聽事件
//              * @returns {StopNowStateObserver}
//              * @private
//              */
//             private getStopNowStateObserver(): StopNowStateObserver {
//                 if (!this.isSlotImmediateStop) {
//                     this.stopNowStateObserver = new StopNowStateObserver(() => {
//                         this.isSlotImmediateStop = true;
//                     }, this);
//                 }
//                 return this.stopNowStateObserver;
//             }
//
//             /**
//              * 加速按鈕監聽事件
//              * @private
//              */
//             private getSpeedStateChangeObserver(): SpeedStateChangeObserver {
//                 if (!this.speedStateChangeObserver) {
//                     this.speedStateChangeObserver = new SpeedStateChangeObserver((isSpeedUp) => {
//                         isSpeedUp ? this.speed = this.styleData.speedUpMultiple : this.speed = 1;
//                     }, this);
//                 }
//                 return this.speedStateChangeObserver;
//             }
//         }
//     }
// }