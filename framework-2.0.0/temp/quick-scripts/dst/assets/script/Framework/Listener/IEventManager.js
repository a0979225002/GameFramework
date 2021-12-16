
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Listener/IEventManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59b2beZaPxKJpzk2q27qYc/', 'IEventManager');
// script/Framework/Listener/IEventManager.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXExpc3RlbmVyXFxJRXZlbnRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dhbWVFdmVudFR5cGV9IGZyb20gJy4vRW51bS9nYW1lRXZlbnRUeXBlJ1xyXG5pbXBvcnQge1NlcnZlckV2ZW50VHlwZX0gZnJvbSAnLi9FbnVtL1NlcnZlckV2ZW50VHlwZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBJRXZlbnRNYW5hZ2VyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tue4veaVuOmHj1xyXG4gICAgICovXHJcbiAgICBldmVudENvdW50OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnlbbliY3mraPlnKjnm6Pogb3pgqPkupvkuovku7Y7XHJcbiAgICAgKi9cclxuICAgIGV2ZW50c0N1cnJlbnRseUJlaW5nOiBNYXA8c3RyaW5nLCBTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlPjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOa3u+WKoOS6i+S7tlxyXG4gICAgICogQHBhcmFtIGV2ZW50VGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FueX0gYW55IDog6KaB5Zue5YKz55qE54mp5Lu2XHJcbiAgICAgKi9cclxuICAgIHNldEV2ZW50KGV2ZW50VGFyZ2V0OiBjYy5FdmVudFRhcmdldCwgZXZlbnROYW1lOiBTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlLCAuLi5hbnk6IGFueSk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGdhbWXmjqXmlLbnm6Pogb3kuovku7ZcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxGdW5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIDog5piv5ZCm5L2/55So5LiA5qyh5oCn55uj6IG9XHJcbiAgICAgKi9cclxuICAgIGdhbWVFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogR2FtZUV2ZW50VHlwZSwgY2FsbEZ1bjogKC4uLnRhcmdldDogYW55KSA9PiB2b2lkLCBpc09uY2U6IGJvb2xlYW4pOnZvaWQ7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXJ2ZXLnm6Pogb3lm57lgrPmjqXmlLZcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxGdW5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIDog5piv5ZCm5L2/55So5LiA5qyh5oCn55uj6IG9XHJcbiAgICAgKi9cclxuICAgIHNlcnZlckV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBTZXJ2ZXJFdmVudFR5cGUsIGNhbGxGdW46ICh0YXJnZXQ/OiBhbnkpID0+IHZvaWQsIGlzT25jZTogYm9vbGVhbik6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIqumZpOS6i+S7tizntoHlrprnmoTlm57lgrPkuZ/kuIDkuKbliKrpmaRcclxuICAgICAqIEBwYXJhbSB7U2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZX0gZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2NjLkV2ZW50VGFyZ2V0fSBldmVudFRhcmdldFxyXG4gICAgICogQHBhcmFtIGNhbGxGdW5cclxuICAgICAqIEBwYXJhbSB0YXJnZXRcclxuICAgICAqL1xyXG4gICAgZGVzdHJveUV2ZW50KGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZSwgZXZlbnRUYXJnZXQ6IGNjLkV2ZW50VGFyZ2V0LCBjYWxsRnVuPzogRnVuY3Rpb24sIHRhcmdldD86IE9iamVjdCk6dm9pZDtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOipsuS6i+S7tuaYr+WQpuaMgee6jOebo+iBveS4rVxyXG4gICAgICogQHBhcmFtIHtTZXJ2ZXJFdmVudFR5cGUgfCBHYW1lRXZlbnRUeXBlfSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSBldmVudFRhcmdldFxyXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cclxuICAgICAqL1xyXG4gICAgaGFzTGlzdGVuaW5nKGV2ZW50TmFtZTogU2VydmVyRXZlbnRUeXBlIHwgR2FtZUV2ZW50VHlwZSwgZXZlbnRUYXJnZXQpOiBib29sZWFuO1xyXG5cclxufSJdfQ==