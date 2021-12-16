
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Test/Generics/Test01.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c550GVT1tG86YHL9H8bPp0', 'Test01');
// Test/Generics/Test01.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test03 = exports.Test02 = void 0;
var NoLineResult_1 = require("../../script/Framework/WebResponse/SeverDataModel/NormalResult/NoLineResult");
/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-31 下午 01:37
 * @Version 1.0
 */
var Test01 = /** @class */ (function () {
    function Test01() {
    }
    Object.defineProperty(Test01.prototype, "module", {
        get: function () {
            return this._module;
        },
        set: function (value) {
            this._module = value;
        },
        enumerable: false,
        configurable: true
    });
    return Test01;
}());
exports.default = Test01;
var Test02 = /** @class */ (function () {
    function Test02() {
    }
    Test02.setResult = function (module) {
        this.module = new module();
    };
    Test02.getResult = function () {
        return this.module;
    };
    return Test02;
}());
exports.Test02 = Test02;
var Test03 = /** @class */ (function () {
    function Test03() {
        Test02.setResult(NoLineResult_1.default);
        Test02.getResult();
    }
    return Test03;
}());
exports.Test03 = Test03;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcVGVzdFxcR2VuZXJpY3NcXFRlc3QwMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0R0FBdUc7QUFFdkc7Ozs7O0dBS0c7QUFDSDtJQUdJO0lBR0EsQ0FBQztJQUVELHNCQUFJLDBCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVcsS0FBUTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUpBO0lBS0wsYUFBQztBQUFELENBZkEsQUFlQyxJQUFBOztBQUVEO0lBQUE7SUFXQSxDQUFDO0lBUFUsZ0JBQVMsR0FBaEIsVUFBNkMsTUFBbUI7UUFDNUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFTSxnQkFBUyxHQUFoQjtRQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksd0JBQU07QUFhbkI7SUFDSTtRQUNJLE1BQU0sQ0FBQyxTQUFTLENBQWUsc0JBQVksQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxTQUFTLEVBQWdCLENBQUE7SUFDcEMsQ0FBQztJQUVMLGFBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vTGluZVJlc3VsdCBmcm9tIFwiLi4vLi4vc2NyaXB0L0ZyYW1ld29yay9XZWJSZXNwb25zZS9TZXZlckRhdGFNb2RlbC9Ob3JtYWxSZXN1bHQvTm9MaW5lUmVzdWx0XCI7XHJcblxyXG4vKipcclxuICogQEF1dGhvciBYSUFPLUxJLVBJTlxyXG4gKiBARGVzY3JpcHRpb24gVE9ET1xyXG4gKiBARGF0ZSAyMDIxLTA1LTMxIOS4i+WNiCAwMTozN1xyXG4gKiBAVmVyc2lvbiAxLjBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlc3QwMTxUIGV4dGVuZHMgSVNsb3RSZXN1bHRNb2RlbD4ge1xyXG4gICAgcHJpdmF0ZSBfbW9kdWxlOiBUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZHVsZSgpOiBUIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9kdWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBtb2R1bGUodmFsdWU6IFQpIHtcclxuICAgICAgICB0aGlzLl9tb2R1bGUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3QwMiB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBtb2R1bGU7XHJcblxyXG4gICAgc3RhdGljIHNldFJlc3VsdDxUIGV4dGVuZHMgSVNsb3RSZXN1bHRNb2RlbD4obW9kdWxlOiBuZXcgKCkgPT4gVCkge1xyXG4gICAgICAgIHRoaXMubW9kdWxlID0gbmV3IG1vZHVsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRSZXN1bHQ8VCBleHRlbmRzIElTbG90UmVzdWx0TW9kZWw+KCk6IFQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1vZHVsZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRlc3QwMyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBUZXN0MDIuc2V0UmVzdWx0PE5vTGluZVJlc3VsdD4oTm9MaW5lUmVzdWx0KTtcclxuICAgICAgICBUZXN0MDIuZ2V0UmVzdWx0PE5vTGluZVJlc3VsdD4oKVxyXG4gICAgfVxyXG5cclxufSJdfQ==