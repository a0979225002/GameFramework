/**
 * @Author 蕭立品
 * @Description 打包入口
 * @Date 2021-07-06 下午 01:55
 * @Version 0.03
 */
const VERSION = "0.03"//版本號

/*所有模板繼承之對象*/
export {default as AGenericTemplate} from './BaseTemplate/AGenericTemplate';
export {default as OverrideComponent} from './BaseTemplate/OverrideComponent';

/*遊戲初始設定模板*/
export {default as AConfigTemplate} from './Config/AConfigTemplate';

/*通用 Notification 管理器*/
export {default as AutoStateChangeNotification} from './Event/Notification/GameNotification/AutoStateChangeNotification';
export {default as ScrollFocusStateNotification} from './Event/Notification/GameNotification/ScrollFocusStateNotification';
export {default as SpeedStateChangeNotification} from './Event/Notification/GameNotification/SpeedStateChangeNotification';
export {default as StopNowStateNotification} from './Event/Notification/GameNotification/StopNowStateNotification';
export {default as UserMoneyChangeNotification} from './Event/Notification/GameNotification/UserMoneyChangeNotification';
export {default as UserTotalBetChangeNotification} from './Event/Notification/GameNotification/UserTotalBetChangeNotification';
export {default as UserWinPointStateNotification} from './Event/Notification/GameNotification/UserWinPointStateNotification';
export {default as ResponseResultNotification} from './Event/Notification/ResponseNotifivation/ResponseResultNotification';

/*通用 Observer 事件*/
export {default as AutoStateChangeObserver} from './Event/Observer/GameObserver/AutoStateChangeObserver';
export {default as ScrollFocusStateObserver} from './Event/Observer/GameObserver/ScrollFocusStateObserver';
export {default as SpeedStateChangeObserver} from './Event/Observer/GameObserver/SpeedStateChangeObserver';
export {default as StopNowStateObserver} from './Event/Observer/GameObserver/StopNowStateObserver';
export {default as UserMoneyChangeObserver} from './Event/Observer/GameObserver/UserMoenyChangeObserver';
export {default as UserTotalBetChangeObserver} from './Event/Observer/GameObserver/UserTotalBetChangeObserver';
export {default as UserWinPointStateObserver} from './Event/Observer/GameObserver/UserWinPointStateObserver';
export {default as ResponseResultObserver} from './Event/Observer/ResponseObserver/ResponseResultObserver';

/*主遊戲按鈕 controller 模板*/
export {default as AMainGameButtonTemplate} from './Button/MainButton/AMainGameButtonTemplate';
export {default as AMainGameOnlyButtonTemplate} from './Button/MainButton/AMainGameOnlyButtonTemplate';
export {default as AMainGameDoubleButtonTemplate} from './Button/MainButton/AMainGameDoubleButtonTemplate';

/*菜單頁按鈕 controller 模板*/
export {default as AMenuButtonTemplate} from './Button/MenuButton/AMenuButtonTemplate';
export {default as AMenuDoubleButtonTemplate} from './Button/MenuButton/AMenuDoubleButtonTemplate';
export {default as AMenuOnlyButtonTemplate} from './Button/MenuButton/AMenuOnlyButtonTemplate';

/*紀錄頁按鈕 controller 模板*/
export {default as ARecordButtonTemplate} from './Button/RecordButton/ARecordButtonTemplate';
export {default as ARecordDoubleButtonTemplate} from './Button/RecordButton/ARecordDoubleButtonTemplate';
export {default as ARecordOnlyButtonTemplate} from './Button/RecordButton/ARecordOnlyButtonTemplate';

/*錯誤提示視窗 模板*/
export {default as AErrorFrameTemplate} from './ErrorFrame/AErrorFrameTemplate';

/*載入SCENE 模板*/
export {default as ALoadingTemplate} from './Loading/ALoadingTemplate';

/*載入DIALOG框 模板*/
export {default as ALoadingFrameTemplate} from './LoadingFrame/ALoadingFrameTemplate';

/*瞇排效果 模板*/
export {default as ALookAtTemplate} from './LookAtFrame/ALookAtTemplate';

/*主遊戲進入初始化動作 模板*/
export {default as AMainInitTemplate} from './MainInit/AMainInitTemplate';

/*SLOT樣式 模板*/
export {default as ASlotTemplate} from './Slot/Style/ASlotTemplate';
export {default as NoLineSlotTemplate} from './Slot/Style/NoLineSlotTemplate';

/*SLOT初始設定 模板*/
export {default as ASlotInitializeTemplate} from './Slot/ASlotInitializeTemplate';

/*遊戲 SERVER TABLE INFO MODEL*/


/*遊戲 SERVER NORMAL MODEL*/


/*遊戲 SERVER FREE MODEL*/

/*當前版本號*/
globalThis.TCC_VERSION = VERSION;