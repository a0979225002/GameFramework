
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Audio/IAudio/IAudioFactory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7628b6eXRFAz7Pvro9DWdFP', 'IAudioFactory');
// script/Framework/Audio/IAudio/IAudioFactory.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvXFxJQXVkaW9cXElBdWRpb0ZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVkaW9TdGF0ZVR5cGV9IGZyb20gXCIuLi9FbnVtL0F1ZGlvU3RhdGVUeXBlXCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gKOS7i+mdoinpn7PmqILlt6Xlu6DpoZ4s5rS+55m86Z+z5qiC5LqL5Lu2XHJcbiAqIEBEYXRlIDIwMjEtMDUtMTMg5LiK5Y2IIDEwOjI0XHJcbiAqIEBWZXJzaW9uIDEuMVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIElBdWRpb0ZhY3Rvcnkge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5L+d5a2Y6Kmy6IOM5pmv6Z+z5qiC5pKl5pS+5qih5byP6Kit5a6aXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSA66Z+z5qiC5qqU5ZCN56ixXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdm9sdW1lIDog6Z+z6YePXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGxvb3AgOiDmmK/lkKblvqrnkrBcclxuICAgICAqL1xyXG4gICAgc2V0dGluZ011c2ljKG5hbWU6IHN0cmluZywgdm9sdW1lPzogbnVtYmVyLCBsb29wPzogYm9vbGVhbik6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS/neWtmOipsuaViOaenOmfs+aViOaSpeaUvuaooeW8j+ioreWumlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgOumfs+aoguaqlOWQjeeosVxyXG4gICAgICogQHBhcmFtIHtBdWRpb1N0YXRlVHlwZX0gY2FuU3VwZXJpbXBvc2UgOiDmmK/lkKbnlorliqDmkqXmlL5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2b2x1bWUgOiDpn7Pph49cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbG9vcCA6IOaYr+WQpuW+queSsFxyXG4gICAgICovXHJcbiAgICBzZXR0aW5nRWZmZWN0KG5hbWU6IHN0cmluZywgY2FuU3VwZXJpbXBvc2U/OiBBdWRpb1N0YXRlVHlwZSwgdm9sdW1lPzogbnVtYmVyLCBsb29wPzogYm9vbGVhbik6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSpeaUvuiDjOaZr+mfs+aoglxyXG4gICAgICog5aaC5p6c5ou/5Y+W5LiN5Yiw5Lqr5YWD5pKl5pS+6LOH5paZLOWwh+aLv+WPlumgkOioreizh+aWmVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqL1xyXG4gICAgbXVzaWNQbGF5KG5hbWU6IHN0cmluZyk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSpeaUvuaViOaenOmfs+aViFxyXG4gICAgICog5aaC5p6c5ou/5Y+W5LiN5Yiw5Lqr5YWD5pKl5pS+6LOH5paZLOWwh+aLv+WPlumgkOioreizh+aWmVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqL1xyXG4gICAgZWZmZWN0UGxheShuYW1lOiBzdHJpbmcpOnZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlgZzmraLog4zmma/pn7PmqIJcclxuICAgICAqL1xyXG4gICAgbXVzaWNTdG9wKCk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaq+WBnOiDjOaZr+mfs+aoglxyXG4gICAgICovXHJcbiAgICBtdXNpY1BhdXNlKCk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWBnOatouaViOaenOmfs+agoVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqL1xyXG4gICAgZWZmZWN0U3RvcChuYW1lOiBzdHJpbmcpO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5YGc5q2i5omA5pyJ5pWI5p6c6Z+z5pWIXHJcbiAgICAgKi9cclxuICAgIGVmZmVjdFN0b3BBbGwoKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog542y5Y+W6Kmy6Z+z5qiC5pKl5pS+5qih5byPLOWmguaenOi/lOWbnk5VbGzlsIfnhafljp/poJDoqK1cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7TWFwPHN0cmluZywgc3RyaW5nIHwgYm9vbGVhbiB8IG51bWJlcj59XHJcbiAgICAgKi9cclxuICAgIGdldE11c2ljU3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPiA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnjbLlj5boqbLpn7PmlYjmkqXmlL7mqKHlvI8s5aaC5p6c6L+U5ZueTlVsbOWwh+eFp+WOn+mgkOiorVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICAgICAqIEByZXR1cm5zIHtNYXA8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuIHwgbnVtYmVyPn1cclxuICAgICAqL1xyXG4gICAgZ2V0RWZmZWN0U3RhdGUobmFtZTogc3RyaW5nKTogTWFwPHN0cmluZywgc3RyaW5nIHwgQXVkaW9TdGF0ZVR5cGUgfCBib29sZWFuIHwgbnVtYmVyPiA7XHJcbn0iXX0=