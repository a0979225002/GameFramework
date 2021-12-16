
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Config/IConfig/ISlotConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39bc44nziFPQZRTE7V+D6Lq', 'ISlotConfigManager');
// script/Framework/Config/IConfig/ISlotConfigManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvbmZpZ1xcSUNvbmZpZ1xcSVNsb3RDb25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gVE9ET1xyXG4gKiBARGF0ZSAyMDIxLTA1LTE3IOS4iuWNiCAxMTo0MVxyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmltcG9ydCB7QXV0b1R5cGV9IGZyb20gXCIuLi9FbnVtL0NvbmZpZ0VudW1cIjtcclxuaW1wb3J0IHtJQ29uZmlnTWFuYWdlcn0gZnJvbSBcIi4vSUNvbmZpZ01hbmFnZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlckJldFBvaW50IHtcclxuICAgIExpbmVCZXQ6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTbG90Q29uZmlnTWFuYWdlciBleHRlbmRzIElDb25maWdNYW5hZ2VyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuWcqOmBiuaIsumAsuWFpeW+jOmWi+WVn2F1dG/ni4DmhYtcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaXNBdXRvOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+mBiuaIsuacgOWIneeahGF1dG/mrKHmlbhcclxuICAgICAqIEB0eXBlIHtBdXRvVHlwZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGF1dG9Db3VudDogbnVtYmVyO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+mWi+Wni+mBiuaIsuWJjeaYr+WQpuaYr+WKoOmAn+eLgOaFi1xyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpc1NwZWVkVXA6IGJvb2xlYW47XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL6YGK5oiy6ZaL5aeL5YmN55qE55So5oi25oq85rOo5YCN546HXHJcbiAgICAgKiBAdHlwZSB7VXNlckJldFBvaW50fVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgdXNlckJldDogVXNlckJldFBvaW50O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL6YGK5oiy5pyA5Yid55qEYXV0b+asoeaVuFxyXG4gICAgICogQHBhcmFtIHtBdXRvVHlwZX0gdHlwZVxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEF1dG9Db250KHR5cGU6IEF1dG9UeXBlKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOioree9ruWIneWni1VzZXLlgI3njodcclxuICAgICAqIEBwYXJhbSB7VXNlckJldFBvaW50IHwgbnVtYmVyfSBsaW5lQmV0IDog5Y+D5pW45Y+v5Lul55u05o6l5L2/55So5YCN546H55qEaW5kZXggb3Ig57Wm5LqIIOWvpuS+i+WMlueahFVzZXJCZXRQb2ludCBPYmplY3RcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRVc2VyQmV0KGxpbmVCZXQ6IFVzZXJCZXRQb2ludCB8IG51bWJlcik6IHRoaXM7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL6YCy5YWl6YGK5oiy5pmCQXV0b+eLgOaFi1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc0F1dG8gOiDmmK/lkKblnKjpgYrmiLLpgLLlhaXlvozplovllZ9hdXRv54uA5oWLXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0QXV0b1N0YXRlKGlzQXV0bzogYm9vbGVhbik6IHRoaXM7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm5Zyo6YGK5oiy6YCy5YWl5b6M5piv5Yqg6YCf55qE54uA5oWLXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU3BlZWRVcFxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNwZWVkU3RhdGUoaXNTcGVlZFVwOiBib29sZWFuKTogdGhpcztcclxufSJdfQ==