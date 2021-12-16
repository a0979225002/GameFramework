"use strict";
cc._RF.push(module, '182f9YskpdA3oaCoZVT4S92', 'HorizontalStyle');
// script/Framework/Scene/SceneStyle/HorizontalStyle.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HorizontalStyle = /** @class */ (function () {
    function HorizontalStyle() {
    }
    HorizontalStyle.prototype.executionStyle = function (width, height) {
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        //保存原始設計分辨率，供屏幕大小變化時使用
        if (!this.curDR) {
            this.curDR = cc.size(width, height);
        }
        var dr = this.curDR;
        var s = cc.view.getFrameSize();
        var rw = s.width;
        var rh = s.height;
        var finalW = rw;
        var finalH = rh;
        if ((rw / rh) > (dr.width / dr.height)) {
            //橫向
            //!#zh: 是否優先將設計分辨率高度撐滿視圖高度 。 */
            cvs.fitHeight = true;
            cvs.fitWidth = false;
            //如果更長，則用定高
            finalH = dr.height;
            finalW = finalH * rw / rh;
        }
        else {
            //直向
            /*!#zh: 是否優先將設計分辨率寬度撐滿視圖寬度 。 */
            cvs.fitHeight = false;
            cvs.fitWidth = true;
            //如果更短，則用定寬
            finalW = dr.width;
            finalH = rh / rw * finalW;
        }
        cvs.designResolution = cc.size(finalW, finalH);
        cvs.node.width = finalW;
        cvs.node.height = finalH;
    };
    return HorizontalStyle;
}());
exports.default = HorizontalStyle;

cc._RF.pop();