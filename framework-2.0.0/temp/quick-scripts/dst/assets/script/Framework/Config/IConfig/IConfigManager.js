
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Config/IConfig/IConfigManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fa33eE/BUNEMq8sexUonZdc', 'IConfigManager');
// script/Framework/Config/IConfig/IConfigManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvbmZpZ1xcSUNvbmZpZ1xcSUNvbmZpZ01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TGFuZ3VhZ2VUeXBlfSBmcm9tIFwiLi4vRW51bS9Db25maWdFbnVtXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29uZmlnTWFuYWdlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDovInlhaXlpJbpg6jos4fmupBVUkwo5Y+q5pyJ6ZaL55m85qih5byP5Lit5pyJ5pWIKVxyXG4gICAgICogQHR5cGUge3N0cmluZ31cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGV4dGVybmFsbHlMb2FkVVJMOiBzdHJpbmc7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3pgYrmiLLlkI3nqLFcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBnYW1lTnVtYmVyOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vog4zmma/pn7PmqILpn7Pph48o6Kmy6Z+z6YeP5bCH5pyD5oiQ54K6QXVkaW9NYW5hZ2Vy5YWn6aCQ6Kit6Z+z6YePKVxyXG4gICAgICogQHR5cGUge251bWJlcn1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIG11c2ljVm9sdW1lOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vlsIfog4zmma/pn7PmqILpnZzpn7NcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaXNNdXNpY09uTXV0ZTogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+aViOaenOmfs+mHjyjoqbLpn7Pph4/lsIfmnIPmiJDngrpBdWRpb01hbmFnZXLlhafpoJDoqK3pn7Pph48pXHJcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgZWZmZWN0Vm9sdW1lOiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vlsIfmlYjmnpzpn7PmlYjpnZzpn7NcclxuICAgICAqIEB0eXBlIHtib29sZWFufVxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaXNFZmZlY3RPbk11dGU6IGJvb2xlYW47XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vnlbbliY3oqp7ns7so5Y+q5pyJ6ZaL55m85qih5byP5Lit5pyJ5pWIKVxyXG4gICAgICog5rOo5oSPOuebruWJjeatpOaWueazleWkseaViFxyXG4gICAgICogQHR5cGUge0xhbmd1YWdlVHlwZX1cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGxhbmd1YWdlOiBMYW5ndWFnZVR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57pppbpoIFVUkxcclxuICAgICAqL1xyXG4gICAgYmFja0hvbWVVUkw6IHN0cmluZztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpuimgemWi+WVn0ZyYW1ld29yayBEZWJ1Z+aooeW8j1xyXG4gICAgICog5rOo5oSPOumBiuaIsuato+W8j+S4iue3mumgiOmXnOmWiVxyXG4gICAgICogQHR5cGUge2Jvb2xlYW59XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpc0ZyYW1ld29ya0RlYnVnOiBib29sZWFuO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOmBiuaIsuWQjeeosVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG5hbWUgOiDpgYrmiLLlkI3nqLFcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRHYW1lTnVtYmVyKG5hbWU6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqK3nva7liJ3lp4vpoJDoqK3pn7Pph49cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgOiDpn7Pph48gMH4xXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cclxuICAgICAqL1xyXG4gICAgc2V0TXVzaWNWb2x1bWUobnVtYmVyOiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6Kit572u5Yid5aeL6aCQ6Kit5pWI5p6c6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIDog6Z+z6YePIDB+MVxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEVmZmVjdFZvbHVtZShudW1iZXI6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vopoHlvp7lpJbpg6jmi7/lj5bos4fmupDnmoRVUkxcclxuICAgICAqIOazqOaEjzrmraRVUkzngrrplovnmbzkuK3nlJ/mlYhcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgOiDnjbLlj5blpJbpg6jos4fmupDnmoRVUkxcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRFeHRlcm5hbGx5TG9hZFVSTCh1cmw6IHN0cmluZyk6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDosqvnqb/mlbTlgIvpgYrmiLIs5YiwZGVzdHJveeWJjemBiuaIsuiqnuezu1xyXG4gICAgICog5rOo5oSPOueVtuWJjeS9v+eUqOeEoeaViFxyXG4gICAgICogQHBhcmFtIHtMYW5ndWFnZVR5cGV9IGxhbmd1YWdlVHlwZSA6IOiqnuezu1xyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldExhbmd1YWdlKGxhbmd1YWdlVHlwZTogTGFuZ3VhZ2VUeXBlKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+Wwh+iDjOaZr+mfs+aogumdnOmfs1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBPbk11dGUgOiDmmK/lkKbpnZzpn7NcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRNdXNpY09uTXV0ZShPbk11dGU6IGJvb2xlYW4pOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5piv5ZCm5bCH5pWI5p6c6Z+z5pWI6Z2c6Z+zXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IE9uTXV0ZSA6IOaYr+WQpumdnOmfs1xyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEVmZmVjdE9uTXV0ZShPbk11dGU6IGJvb2xlYW4pOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5piv5ZCm6KaB6ZaL5ZWfRnJhbWV3b3JrIERlYnVn5qih5byPXHJcbiAgICAgKiDms6jmhI866YGK5oiy5q2j5byP5LiK57ea6aCI6Zec6ZaJXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVxyXG4gICAgICogQHJldHVybnMge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEZyYW1lV29ya0RlYnVnKHVzZTogYm9vbGVhbik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov5Tlm57pppbpoIFVUkxcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRCYWNrSG9tZVVSTCh1cmw6IHN0cmluZyk6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlr6bkvovljJbmiYDmnIlNYW5hZ2VyIGNsYXNzO1xyXG4gICAgICovXHJcbiAgICBidWlsZGVyKCk6dm9pZDtcclxuXHJcbn0iXX0=