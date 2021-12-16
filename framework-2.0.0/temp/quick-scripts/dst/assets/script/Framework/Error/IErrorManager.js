
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Error/IErrorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f99ewU0ylAK4QIbI1tJ75c', 'IErrorManager');
// script/Framework/Error/IErrorManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEVycm9yXFxJRXJyb3JNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Vycm9yVHlwZX0gZnJvbSBcIi4vRW51bS9FcnJvck1hbmFnZXJFbnVtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgSUVycm9yTWFuYWdlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntoHlrpropoHpoa/npLpFcnJvcue1hOS7tueahOeJqeS7tlxyXG4gICAgICovXHJcbiAgICBlcnJvck5vZGU6IGNjLk5vZGU7XHJcbiAgICAvKipcclxuICAgICAq57aB5a6a6K2m5ZGK6KiK5oGvXHJcbiAgICAgKi9cclxuICAgIHdhcm5pbmdOb2RlOiBjYy5Ob2RlO1xyXG4gICAgLyoqXHJcbiAgICAgKue2geWumkVycm9yQnV0dG9uXHJcbiAgICAgKi9cclxuICAgIGVycm9yQnV0dG9uOiBjYy5Ob2RlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog57aB5a6a6K2m5ZGK6KaB6aGv56S655qE6Yyv6Kqk6KiK5oGvXHJcbiAgICAgKi9cclxuICAgIHdhcm5pbmdMYWJlbDogY2MuTGFiZWw7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDntoHlrpropoHpoa/npLrpjK/oqqToqIrmga/nmoRMYWJlbFxyXG4gICAgICovXHJcbiAgICBlcnJvckxhYmVsOiBjYy5MYWJlbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOe2geWumumMr+iqpOioiuaBr+eahOaMiemIlVxyXG4gICAgICovXHJcbiAgICBlcnJvckJ1dHRvbkxhYmVsOiBjYy5MYWJlbDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhr+ekuuimgemhr+ekuumMr+iqpOioiuaBr+eahOaZgumWk1xyXG4gICAgICovXHJcbiAgICBlcnJvckRlbGF5VGltZTogbnVtYmVyO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGv56S66K2m5ZGK6KiK5oGv55qE5pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIHdhcm5pbmdEZWxheVRpbWU6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYr+WQpumhr+ekuui/lOWbnkJ1dHRvblxyXG4gICAgICovXHJcbiAgICBpc1Nob3dCYWNrSG9tZUJ1dHRvbjogYm9vbGVhbjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiyrOS7u+mPiOaooeW8j1xyXG4gICAgICog6aGv56S66Yyv6Kqk6KiK5oGvLOiDveWBmuWkmuWAi+eJqeS7tuaqoua4rFxyXG4gICAgICogQHBhcmFte3N0cmluZyB8IH1tZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0gb2JqXHJcbiAgICAgKi9cclxuICAgIGV4ZWN1dGVFcnJvcihtZXNzYWdlOiBzdHJpbmcgfCBFcnJvclR5cGUsIG9iaj86IGFueSk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmhr+ekuumMr+iqpOimlueql1xyXG4gICAgICogQHBhcmFtIHtib29sZWFufSBwZXJtYW5lbnRTdGF0ZSA6IOaYr+WQpuW4uOmnkFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgIDog6Yyv6Kqk6KiK5oGvXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYnV0dG9uVGV4dCA6IGJ1dHRvbuaWh+Wtl1xyXG4gICAgICovXHJcbiAgICBzZXJ2ZXJFcnJvcihwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6aGv56S66K2m5ZGKLOWwh+acg+iqv+eUqOW3suS/neWtmOeahOitpuWRik5vZGVcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVybWFuZW50U3RhdGUgOiDmmK/lkKbluLjpp5BcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlICA6IOmMr+iqpOioiuaBr1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJ1dHRvblRleHQgOiBidXR0b27mloflrZdcclxuICAgICAqL1xyXG4gICAgd2FybmluZyhwZXJtYW5lbnRTdGF0ZTogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nLCBidXR0b25UZXh0Pzogc3RyaW5nKTp2b2lkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6KaB57aB5a6a55qERXJyb3LntYTku7ZcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHNldEVycm9yTm9kZShub2RlOiBjYy5Ob2RlKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekukVycm9y6KiK5oGv55qETGFiZWxcclxuICAgICAqIEBwYXJhbSBsYWJlbFxyXG4gICAgICovXHJcbiAgICBzZXRFcnJvckxhYmVsKGxhYmVsOiBjYy5MYWJlbCk6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqBlcnJvckJ1dHRvbue2geWumlxyXG4gICAgICogQHBhcmFtIG5vZGVcclxuICAgICAqL1xyXG4gICAgc2V0RXJyb3JCdXR0b24obm9kZTogY2MuTm9kZSk6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDopoHpoa/npLrnmoTmmYLplpMs55uu5YmN5Y+q5bCNKEVycm9yVHlwZS5iZXQp55Sf5pWIXHJcbiAgICAgKiBAcGFyYW0gdGltZVxyXG4gICAgICovXHJcbiAgICBzZXRFcnJvckRlbGF5VGltZSh0aW1lOiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6K2m5ZGK6KaB6aGv56S655qE5pmC6ZaTXHJcbiAgICAgKi9cclxuICAgIHNldFdhcm5pbmdEZWxheVRpbWUodGltZTogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOimgemhr+ekuuitpuWRiueahE5vZGVcclxuICAgICAqIEBwYXJhbSBub2RlXHJcbiAgICAgKi9cclxuICAgIHNldFdhcm5pbmdOb2RlKG5vZGU6IGNjLk5vZGUpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6KaB6aGv56S66K2m5ZGK55qETm9kZVxyXG4gICAgICogQHBhcmFtIGxhYmVsXHJcbiAgICAgKi9cclxuICAgIHNldFdhcm5pbmdMYWJlbChsYWJlbDogY2MuTGFiZWwpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg6KaB6aGv56S66Yyv6Kqk6KaW56qX5Lit5oyJ6YiV55qEbGFiZWxcclxuICAgICAqIEBwYXJhbSB7Y2MuTGFiZWx9IGxhYmVsXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRFcnJvckJ1dHRvbkxhYmVsKGxhYmVsOiBjYy5MYWJlbCk6IHRoaXM7XHJcbn0iXX0=