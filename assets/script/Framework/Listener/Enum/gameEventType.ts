enum GameEventType {

    /**
     * 加速按鈕監聽
     * @type {GameEventType.SPEED_UP}
     */
    SPEED_UP = "SPEED_UP",

    /**
     * 即停監聽
     * @type {GameEventType.IMMEDIATE_STOP}
     */
    IMMEDIATE_STOP = "IMMEDIATE_STOP",
    /**
     * 玩家金額不足
     * @type {GameEventType.USER_POINT_INSUFFICIENT}
     */
    USER_POINT_INSUFFICIENT = "USER_POINT_INSUFFICIENT",

    /**
     * 螢幕直向: Scene 類  只有使用 SceneStyle.AUTO 才會有監聽事件
     * @type {GameEventType.PORTRAIT}
     */
    PORTRAIT = 'PORTRAIT',

    /**
     * 螢幕橫向 : Scene 類  只有使用 SceneStyle.AUTO 才會有監聽事件
     * @type {GameEventType.LANDSCAPE}
     */
    LANDSCAPE = 'LANDSCAPE',

    /**
     * 該次贏分時
     */
    WIN_POINT = 'WIN_POINT',

    /**
     * USER押注面額監聽
     */
    USER_TOTAL_BET = 'USER_TOTAL_BET',

    /**
     * 瞇排事件
     * @type {GameEventType.LOOK_AT}
     */
    LOOK_AT = 'LOOK_AT',

    /**
     * auto事件
     */
    AUTO = 'AUTO',

}


export {GameEventType};