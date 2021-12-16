
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Listener/Enum/gameEventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c5dadw3DCpOQ6OyVz2ascEt', 'gameEventType');
// script/Framework/Listener/Enum/gameEventType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEventType = void 0;
/**
 * 代刪除
 */
var GameEventType;
(function (GameEventType) {
    GameEventType["TEST"] = "TEST";
    // /**
    //  * 加速按鈕監聽
    //  * @type {GameEventType.SPEED_UP}
    //  */
    // SPEED_UP = "SPEED_UP",
    //
    // /**
    //  * 即停監聽
    //  * @type {GameEventType.IMMEDIATE_STOP}
    //  */
    // IMMEDIATE_STOP = "IMMEDIATE_STOP",
    //
    // /**
    //  * 瞇排事件
    //  * @type {GameEventType.LOOK_AT}
    //  */
    // LOOK_AT = 'LOOK_AT',
    //
    // /**
    //  * 玩家金額不足
    //  * @type {GameEventType.USER_POINT_INSUFFICIENT}
    //  */
    // USER_POINT_INSUFFICIENT = "USER_POINT_INSUFFICIENT",
    // /**
    //  * 該次贏分時
    //  */
    // WIN_POINT = 'WIN_POINT',
    //
    // /**
    //  * USER押注面額監聽
    //  */
    // USER_TOTAL_BET = 'USER_TOTAL_BET',
    //
    // /**
    //  * auto事件
    //  */
    // AUTO = 'AUTO',
})(GameEventType = exports.GameEventType || (exports.GameEventType = {}));

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExpc3RlbmVyXFxFbnVtXFxnYW1lRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsSUFBWSxhQXVDWDtBQXZDRCxXQUFZLGFBQWE7SUFDckIsOEJBQWEsQ0FBQTtJQUNiLE1BQU07SUFDTixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLE1BQU07SUFDTix5QkFBeUI7SUFDekIsRUFBRTtJQUNGLE1BQU07SUFDTixVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLE1BQU07SUFDTixxQ0FBcUM7SUFDckMsRUFBRTtJQUNGLE1BQU07SUFDTixVQUFVO0lBQ1YsbUNBQW1DO0lBQ25DLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsRUFBRTtJQUNGLE1BQU07SUFDTixZQUFZO0lBQ1osbURBQW1EO0lBQ25ELE1BQU07SUFDTix1REFBdUQ7SUFDdkQsTUFBTTtJQUNOLFdBQVc7SUFDWCxNQUFNO0lBQ04sMkJBQTJCO0lBQzNCLEVBQUU7SUFDRixNQUFNO0lBQ04sZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixxQ0FBcUM7SUFDckMsRUFBRTtJQUNGLE1BQU07SUFDTixZQUFZO0lBQ1osTUFBTTtJQUNOLGlCQUFpQjtBQUNyQixDQUFDLEVBdkNXLGFBQWEsR0FBYixxQkFBYSxLQUFiLHFCQUFhLFFBdUN4QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDku6PliKrpmaRcclxuICovXHJcbmV4cG9ydCBlbnVtIEdhbWVFdmVudFR5cGUge1xyXG4gICAgVEVTVCA9IFwiVEVTVFwiLFxyXG4gICAgLy8gLyoqXHJcbiAgICAvLyAgKiDliqDpgJ/mjInpiJXnm6Pogb1cclxuICAgIC8vICAqIEB0eXBlIHtHYW1lRXZlbnRUeXBlLlNQRUVEX1VQfVxyXG4gICAgLy8gICovXHJcbiAgICAvLyBTUEVFRF9VUCA9IFwiU1BFRURfVVBcIixcclxuICAgIC8vXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIOWNs+WBnOebo+iBvVxyXG4gICAgLy8gICogQHR5cGUge0dhbWVFdmVudFR5cGUuSU1NRURJQVRFX1NUT1B9XHJcbiAgICAvLyAgKi9cclxuICAgIC8vIElNTUVESUFURV9TVE9QID0gXCJJTU1FRElBVEVfU1RPUFwiLFxyXG4gICAgLy9cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICog556H5o6S5LqL5Lu2XHJcbiAgICAvLyAgKiBAdHlwZSB7R2FtZUV2ZW50VHlwZS5MT09LX0FUfVxyXG4gICAgLy8gICovXHJcbiAgICAvLyBMT09LX0FUID0gJ0xPT0tfQVQnLFxyXG4gICAgLy9cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICog546p5a626YeR6aGN5LiN6LazXHJcbiAgICAvLyAgKiBAdHlwZSB7R2FtZUV2ZW50VHlwZS5VU0VSX1BPSU5UX0lOU1VGRklDSUVOVH1cclxuICAgIC8vICAqL1xyXG4gICAgLy8gVVNFUl9QT0lOVF9JTlNVRkZJQ0lFTlQgPSBcIlVTRVJfUE9JTlRfSU5TVUZGSUNJRU5UXCIsXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIOipsuasoei0j+WIhuaZglxyXG4gICAgLy8gICovXHJcbiAgICAvLyBXSU5fUE9JTlQgPSAnV0lOX1BPSU5UJyxcclxuICAgIC8vXHJcbiAgICAvLyAvKipcclxuICAgIC8vICAqIFVTRVLmirzms6jpnaLpoY3nm6Pogb1cclxuICAgIC8vICAqL1xyXG4gICAgLy8gVVNFUl9UT1RBTF9CRVQgPSAnVVNFUl9UT1RBTF9CRVQnLFxyXG4gICAgLy9cclxuICAgIC8vIC8qKlxyXG4gICAgLy8gICogYXV0b+S6i+S7tlxyXG4gICAgLy8gICovXHJcbiAgICAvLyBBVVRPID0gJ0FVVE8nLFxyXG59Il19