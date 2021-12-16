
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Slot/ISlotStyleManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dfd7946vyxENLffolzXFGGN', 'ISlotStyleManager');
// script/Framework/Slot/ISlotStyleManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNsb3RcXElTbG90U3R5bGVNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVNsb3QgZnJvbSAnLi9BU2xvdCdcclxuaW1wb3J0IHtTdHlsZURhdGF9IGZyb20gJy4vU2xvdFN0eWxlTWFuYWdlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJU2xvdFN0eWxlTWFuYWdlciB7XHJcblxyXG4gICAgcmVhZG9ubHkgc2xvdDogQVNsb3Q7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmt7vliqDln7fooYzmtYHnqIvnmoRjbGFzcyDpnIDnubzmib8gSVNsb3RcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNsb3RUZW1wbGF0ZTxUIGV4dGVuZHMgbmV3KHN0eWxlRGF0YTogU3R5bGVEYXRhKSA9PiBBU2xvdD4oc2xvdFRlbXBsYXRlOiBUKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOiAgeiZjuapn+mhr+ekuuetlOahiOWJjeeahOacgOWwkei9ieWLleasoeaVuFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTbG90VHVybkNvdW50KGNvdW50OiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5pmC6ICB6JmO5qmf6aGv56S6562U5qGI5YmN55qE5pyA5bCR6L2J5YuV5qyh5pW4XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY291bnRcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNsb3RTcGVlZFVwVHVybkNvdW50KGNvdW50OiBudW1iZXIpOiB0aGlzO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ICB6JmO5qmf5q+P6ZqU5qC85a2Q6auY5bqmXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTbG90R3JpZEhlaWdodChoZWlnaHQ6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDogIHomY7mqZ/kuIDoiKzni4DmhYvpgJ/luqZcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTbG90R2lyZFNwZWVkKHRpbWU6IG51bWJlcik6IHRoaXM7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDoqbLogIHomY7mqZ8g5q+P5YiX55qE5qC85a2Q5pW46YePXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZ3JpZENvdW50XHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRTbG90Um93R3JpZENvdW50KGdyaWRDb3VudDogbnVtYmVyKTogdGhpc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqg6YCf5pmC55qE5Yqg6YCf6KKr546HXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbXVsdGlwbGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldFNwZWVkVXBNdWx0aXBsZShtdWx0aXBsZTogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOimgeWft+ihjOi8quaSreWLleWMlui9ieWLleiAgeiZjuapn+eahG5vZGVcclxuICAgICAqIEBwYXJhbSB7QXJyYXk8Y2MuTm9kZT59IG5vZGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNsb3RDb2x1bW5Ub1R3ZWVuKG5vZGU6IEFycmF5PGNjLk5vZGU+KTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmdnuWKoOmAn+aooeW8jyzmr4/liJflgZzmraLnmoTmmYLplpPplpPmoLxcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRDb2x1bW5JbnRlcnZhbFRpbWUodGltZTogbnVtYmVyKTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOacieagvOWtkCzlgZrlvqrnkrDogIHomY7mqZ/mmYIs6ZyA5pu05YuV6KmyTm9kZeeahOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtNYXA8bnVtYmVyLCBBcnJheTxjYy5Ob2RlPj59IG5vZGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEdyaWROb2RlVG9NYXAobm9kZTogTWFwPG51bWJlciwgQXJyYXk8Y2MuTm9kZT4+KTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaJgOacieagvOWtkOeahOWclueJhyzlgZrlvqrnkrDogIHomY7pm57mmYIs6ZyA5pu05YuV55qE5ZyW54mHXHJcbiAgICAgKiBAcGFyYW0ge01hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+fSBzcHJpdGVcclxuICAgICAqIEByZXR1cm4ge3RoaXN9XHJcbiAgICAgKi9cclxuICAgIHNldEdpcmRTcHJpdGVUb01hcChzcHJpdGU6IE1hcDxudW1iZXIsIEFycmF5PGNjLlNwcml0ZT4+KTogdGhpcztcclxuXHJcbiAgICAvKipcclxuICAgICAqIHNsb3Qg5omA5pyJ6Z2c5oWL5qC85a2Q5ZyW54mHXHJcbiAgICAgKiBAcGFyYW0ge01hcDxzdHJpbmcsIGNjLlNwcml0ZUZyYW1lPn0gaW1nXHJcbiAgICAgKiBAcmV0dXJuIHt0aGlzfVxyXG4gICAgICovXHJcbiAgICBzZXRHcmlkSW1nKGltZzogTWFwPHN0cmluZywgY2MuU3ByaXRlRnJhbWU+KTogdGhpc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5omA5pyJ5pON5L2cLOS4puWvpuS+i+WMliAg57aB5a6a55qEIHNsb3QgQ2xhc3NcclxuICAgICAqL1xyXG4gICAgYnVpbGQoKTp2b2lkO1xyXG59Il19