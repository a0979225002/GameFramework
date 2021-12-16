
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/IScene/ISceneManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc550ZY9sJF3Zqv8WlLiF/9', 'ISceneManager');
// script/Framework/Scene/IScene/ISceneManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxJU2NlbmVcXElTY2VuZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2NlbmVTdHlsZSwgU2NlbmVEaXJlY3Rpb25UeXBlfSBmcm9tIFwiLi4vRW51bS9TY2VuZVN0eWxlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElTY2VuZU1hbmFnZXIge1xyXG5cclxuICAgIHNjZW5lRGlyZWN0aW9uOiBTY2VuZURpcmVjdGlvblR5cGU7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjYXZlcnMg6Kit6KiI5a+s5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXREZXNpZ25XaWR0aCh3aWR0aDogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIGNhdmVycyDoqK3oqIjpq5jluqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldERlc2lnbkhlaWdodChoZWlnaHQ6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDnlbbliY3npLrphY3lr6zpq5gs5pyD5L+d5a2Y5LiK5qyh55qEc2NlbmXmm7Tli5XmqKHlvI9cclxuICAgICAqIOWmguS4jea3u+WKoCBzdHlsZSDlj4PmlbggLOesrOS4gOasoeWwh+acg+S9v+eUqOmgkOioreaooeW8j+abtOWLlSxcclxuICAgICAqIOWmguaenOW3sue2k+abtOWLlemBjizlsIfmnIPkvb/nlKjkvaDkuIrmrKHnmoRzdHlsZeaoo+W8j1xyXG4gICAgICogQHBhcmFtIHtTY2VuZVN0eWxlIHwgRnVuY3Rpb259IHN0eWxlIDog5Y+v6Ieq5a6a576p5pu05YuV5qij5byPLOS9huWvpuS9nCjku4vpnaIpSVNjZW5lU3R5bGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVNpemUoc3R5bGU/OiBTY2VuZVN0eWxlIHwgSVNjZW5lU3R5bGUpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog55uj6IG955W25YmNY2F2ZXJz5piv5ZCm5pyJ5pu05YuV5aSn5bCPLOWmguaenOacieWwh+acg+iHquWLleabtOaWsOeVtuWJjeaYr+mFjeWvrOmrmFxyXG4gICAgICog5bCH5pyD5q+U54Wn5LiK5qyh5pu05YuV55qE5qij5byP6YCy6KGM5pu05YuVXHJcbiAgICAgKiDlpoLmnpzpnIDmsYLmm7Tli5XmqKPlvI8s6aCI5YWI5pu05pawIHVwZGF0ZVNpemUoKVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWUgOiDmm7TmlrDnmoTpoLvnjocg5Zau5L2N5q+r56eSIG1zXHJcbiAgICAgKi9cclxuICAgIGRlc2lnblNjZW5lU2l6ZUxpc3RlbmVyQXV0b1N0YXJ0KHRpbWU6IG51bWJlcik6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOabtOaPm+WgtOaZr1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOiDloLTmma/os4fmupDlkI3nqLHngrrkvaBSZXPli5XmhYvliqDovInnmoToh6roqILnvqnnmoRzY2VuZeWQjeeosVxyXG4gICAgICovXHJcbiAgICBjaGFuZ2VTY2VuZShuYW1lOiBzdHJpbmcpOnZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXpmaToqbJzY2VuZeaJgOacieWLleS9nFxyXG4gICAgICogQHBhcmFtIHNjZW5le2FueX0gOiDopoHmuIXpmaTnmoRzY2VuZSBjbGFzc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVTY2VuZShzY2VuZTogYW55KTp2b2lkO1xyXG5cclxufSJdfQ==