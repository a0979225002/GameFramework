
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/WebResponse/ResponseHandler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37e0fg5aYpEJbYOxFsHPhHi', 'ResponseHandler');
// script/Framework/WebResponse/ResponseHandler.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler(module) {
        this.module = new module();
    }
    ResponseHandler.prototype.setResultModel = function (module) {
        this.module = new module();
    };
    ResponseHandler.prototype.getResult = function () {
        return this.module;
    };
    return ResponseHandler;
}());
exports.default = ResponseHandler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFdlYlJlc3BvbnNlXFxSZXNwb25zZUhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUlJLHlCQUFZLE1BQW1CO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLE1BQWtCO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJUmVzcG9uc2VIYW5kbGVyIGZyb20gJy4vSVNldmVyRGF0YU1vZGVsL0lSZXNwb25zZUhhbmRsZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb25zZUhhbmRsZXI8VD4gaW1wbGVtZW50cyBJUmVzcG9uc2VIYW5kbGVyPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIG1vZHVsZTogVFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG1vZHVsZTogbmV3ICgpID0+IFQpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZSA9IG5ldyBtb2R1bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSZXN1bHRNb2RlbChtb2R1bGU6IG5ldygpID0+IFQpIHtcclxuICAgICAgICB0aGlzLm1vZHVsZSA9IG5ldyBtb2R1bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSZXN1bHQoKTogVCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9kdWxlO1xyXG4gICAgfVxyXG59Il19