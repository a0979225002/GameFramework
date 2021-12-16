
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Scene/SceneStyle/HorizontalStyle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lXFxTY2VuZVN0eWxlXFxIb3Jpem9udGFsU3R5bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMENBLENBQUM7SUFyQ1Usd0NBQWMsR0FBckIsVUFBc0IsS0FBYSxFQUFFLE1BQWM7UUFFL0MsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDL0IsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3BDLElBQUk7WUFDSiwrQkFBK0I7WUFDL0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDckIsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsV0FBVztZQUNYLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ25CLE1BQU0sR0FBRyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQztTQUM3QjthQUFNO1lBQ0gsSUFBSTtZQUNKLCtCQUErQjtZQUMvQixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNwQixXQUFXO1lBQ1gsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbEIsTUFBTSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDO1NBQzdCO1FBQ0QsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN4QixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxTdHlsZSBpbXBsZW1lbnRzIElTY2VuZVN0eWxlIHtcclxuXHJcbiAgICAvL+eVtuWJjWNhdmVyc+WvrOmrmFxyXG4gICAgcHJpdmF0ZSBjdXJEUjogYW55O1xyXG5cclxuICAgIHB1YmxpYyBleGVjdXRpb25TdHlsZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG5cclxuICAgICAgICBsZXQgY3ZzID0gY2MuZmluZCgnQ2FudmFzJykuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XHJcblxyXG4gICAgICAgIC8v5L+d5a2Y5Y6f5aeL6Kit6KiI5YiG6L6o546H77yM5L6b5bGP5bmV5aSn5bCP6K6K5YyW5pmC5L2/55SoXHJcbiAgICAgICAgaWYgKCF0aGlzLmN1ckRSKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyRFIgPSBjYy5zaXplKHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZHIgPSB0aGlzLmN1ckRSO1xyXG4gICAgICAgIGxldCBzID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICBsZXQgcncgPSBzLndpZHRoO1xyXG4gICAgICAgIGxldCByaCA9IHMuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBmaW5hbFcgPSBydztcclxuICAgICAgICBsZXQgZmluYWxIID0gcmg7XHJcblxyXG4gICAgICAgIGlmICgocncgLyByaCkgPiAoZHIud2lkdGggLyBkci5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIC8v5qmr5ZCRXHJcbiAgICAgICAgICAgIC8vISN6aDog5piv5ZCm5YSq5YWI5bCH6Kit6KiI5YiG6L6o546H6auY5bqm5pKQ5ru/6KaW5ZyW6auY5bqmIOOAgiAqL1xyXG4gICAgICAgICAgICBjdnMuZml0SGVpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY3ZzLmZpdFdpZHRoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5pu06ZW377yM5YmH55So5a6a6auYXHJcbiAgICAgICAgICAgIGZpbmFsSCA9IGRyLmhlaWdodDtcclxuICAgICAgICAgICAgZmluYWxXID0gZmluYWxIICogcncgLyByaDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL+ebtOWQkVxyXG4gICAgICAgICAgICAvKiEjemg6IOaYr+WQpuWEquWFiOWwh+ioreioiOWIhui+qOeOh+WvrOW6puaSkOa7v+imluWcluWvrOW6piDjgIIgKi9cclxuICAgICAgICAgICAgY3ZzLmZpdEhlaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjdnMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgICAgICAgICAvL+WmguaenOabtOefre+8jOWJh+eUqOWumuWvrFxyXG4gICAgICAgICAgICBmaW5hbFcgPSBkci53aWR0aDtcclxuICAgICAgICAgICAgZmluYWxIID0gcmggLyBydyAqIGZpbmFsVztcclxuICAgICAgICB9XHJcbiAgICAgICAgY3ZzLmRlc2lnblJlc29sdXRpb24gPSBjYy5zaXplKGZpbmFsVywgZmluYWxIKTtcclxuICAgICAgICBjdnMubm9kZS53aWR0aCA9IGZpbmFsVztcclxuICAgICAgICBjdnMubm9kZS5oZWlnaHQgPSBmaW5hbEg7XHJcbiAgICB9XHJcblxyXG59Il19