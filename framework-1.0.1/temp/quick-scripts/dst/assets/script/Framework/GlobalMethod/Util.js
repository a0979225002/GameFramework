
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GlobalMethod/Util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44849e7N+1M3qrtrh6NfHts', 'Util');
// script/Framework/GlobalMethod/Util.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    /**
     * 四捨五入到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要四捨五入到哪一位
     */
    Util.myRound = function (float, number) {
        return Math.round(Math.round(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 無條件捨去到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件捨去到哪一位
     */
    Util.myFloor = function (float, number) {
        return Math.floor(Math.floor(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 無條件進位到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件進位到哪一位
     */
    Util.myCeil = function (float, number) {
        return Math.ceil(Math.ceil(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    };
    /**
     * 檢查該數字為小數有幾位
     * @param {number}float : 浮點數
     */
    Util.decimalsCount = function (float) {
        var decimalsIndex = String(float).indexOf('.') + 1;
        var count = String(float).length - decimalsIndex;
        if (decimalsIndex == 0) {
            return 0;
        }
        else {
            return count;
        }
    };
    return Util;
}());
exports.default = Util;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdsb2JhbE1ldGhvZFxcVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUE2Q0EsQ0FBQztJQTNDRzs7OztPQUlHO0lBQ0ksWUFBTyxHQUFkLFVBQWUsS0FBYSxFQUFFLE1BQWM7UUFDeEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFlBQU8sR0FBZCxVQUFlLEtBQWEsRUFBRSxNQUFjO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxXQUFNLEdBQWIsVUFBYyxLQUFhLEVBQUUsTUFBYztRQUN2QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVHLENBQUM7SUFFRDs7O09BR0c7SUFDSSxrQkFBYSxHQUFwQixVQUFxQixLQUFhO1FBRTlCLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5ELElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDO1FBRWpELElBQUksYUFBYSxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPLENBQUMsQ0FBQztTQUNaO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0E3Q0EsQUE2Q0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWwge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zub5o2o5LqU5YWl5Yiw5bCP5pW46bue56ysTuS9jVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGZsb2F0IDog5rWu6bue5pW4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIDog6KaB5Zub5o2o5LqU5YWl5Yiw5ZOq5LiA5L2NXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBteVJvdW5kKGZsb2F0OiBudW1iZXIsIG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJvdW5kKGZsb2F0ICogTWF0aC5wb3coMTAsIChudW1iZXIgfHwgMCkgKyAxKSkgLyAxMCkgLyBNYXRoLnBvdygxMCwgKG51bWJlciB8fCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnhKHmop3ku7bmjajljrvliLDlsI/mlbjpu57nrKxO5L2NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZmxvYXQgOiDmta7pu57mlbhcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgOiDopoHnhKHmop3ku7bmjajljrvliLDlk6rkuIDkvY1cclxuICAgICAqL1xyXG4gICAgc3RhdGljIG15Rmxvb3IoZmxvYXQ6IG51bWJlciwgbnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGguZmxvb3IoZmxvYXQgKiBNYXRoLnBvdygxMCwgKG51bWJlciB8fCAwKSArIDEpKSAvIDEwKSAvIE1hdGgucG93KDEwLCAobnVtYmVyIHx8IDApKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOeEoeaineS7tumAsuS9jeWIsOWwj+aVuOm7nuesrE7kvY1cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmbG9hdCA6IOa1rum7nuaVuFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciA6IOimgeeEoeaineS7tumAsuS9jeWIsOWTquS4gOS9jVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgbXlDZWlsKGZsb2F0OiBudW1iZXIsIG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE1hdGguY2VpbChmbG9hdCAqIE1hdGgucG93KDEwLCAobnVtYmVyIHx8IDApICsgMSkpIC8gMTApIC8gTWF0aC5wb3coMTAsIChudW1iZXIgfHwgMCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qqi5p+l6Kmy5pW45a2X54K65bCP5pW45pyJ5bm+5L2NXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn1mbG9hdCA6IOa1rum7nuaVuFxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGVjaW1hbHNDb3VudChmbG9hdDogbnVtYmVyKTogbnVtYmVyIHtcclxuXHJcbiAgICAgICAgbGV0IGRlY2ltYWxzSW5kZXggPSBTdHJpbmcoZmxvYXQpLmluZGV4T2YoJy4nKSArIDE7XHJcblxyXG4gICAgICAgIGxldCBjb3VudCA9IFN0cmluZyhmbG9hdCkubGVuZ3RoIC0gZGVjaW1hbHNJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKGRlY2ltYWxzSW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19