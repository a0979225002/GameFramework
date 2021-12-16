
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GlobalMethod/ButtonMethod.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64b037pJ6xB2IpDgvi+oHFe', 'ButtonMethod');
// script/Framework/GlobalMethod/ButtonMethod.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonMethod = /** @class */ (function () {
    function ButtonMethod() {
    }
    /**
     * 對該button添加監聽事件
     * @param {cc.Button} buttonNode : 按鈕組件
     * @param {string} methodName : 事件方法名稱
     * @param self{this} : 在哪裡開啟監聽的
     * @param customEventData{any} : 回傳值
     */
    ButtonMethod.addButtonEvent = function (buttonNode, methodName, self, customEventData) {
        //手動添加監聽事件
        var thisNode = self.node;
        var scriptName = cc.js.getClassName(self);
        var click_event = new cc.Component.EventHandler(); //給予一個事件
        click_event.target = thisNode; //父類節點,注意父類size不能為(0,0)
        click_event.component = scriptName; //該父類的script
        click_event.handler = methodName; //對事件添加function,名稱是字串
        if (customEventData || customEventData == 0) {
            click_event.customEventData = customEventData; //添加回調參數
        }
        // this.node.clickEvents = [click_event];//一次添加多個監聽事件
        buttonNode.clickEvents.push(click_event); //當點擊後觸發事件
    };
    /**
     * //TITLE:禁用button
     * @param {cc.Button}button
     */
    ButtonMethod.disableButton = function (button) {
        button.interactable = false;
    };
    /**
     * //TITLE:啟用button
     * @param {cc.Button}button
     */
    ButtonMethod.enableButton = function (button) {
        button.interactable = true;
    };
    /**
     * 對該node 添加 on 事件
     * @param {cc.Node} node
     * @param {function} method
     * @param {this} thisJs
     * @param {boolean} useCapture : "可關閉多點觸控更能"
     */
    ButtonMethod.addTouchStartEvent = function (node, method, thisJs, useCapture) {
        node.on(cc.Node.EventType.TOUCH_START, method, thisJs, useCapture);
    };
    /**
     * 對該node 關閉 off 事件
     * @param {cc.Node} node
     * @param {Function} method
     * @param {this} thisJs
     * @param {boolean} useCapture : "可關閉多點觸控更能"
     */
    ButtonMethod.offTouchStartEvent = function (node, method, thisJs, useCapture) {
        node.off(cc.Node.EventType.TOUCH_START, method, thisJs, useCapture);
    };
    return ButtonMethod;
}());
exports.default = ButtonMethod;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdsb2JhbE1ldGhvZFxcQnV0dG9uTWV0aG9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQTZEQSxDQUFDO0lBM0RHOzs7Ozs7T0FNRztJQUNJLDJCQUFjLEdBQXJCLFVBQXNCLFVBQXFCLEVBQUUsVUFBa0IsRUFBRSxJQUFTLEVBQUUsZUFBcUI7UUFDN0YsVUFBVTtRQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDekIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUMsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsUUFBUTtRQUMzRCxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLHVCQUF1QjtRQUN0RCxXQUFXLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLFlBQVk7UUFDaEQsV0FBVyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxxQkFBcUI7UUFDdkQsSUFBSSxlQUFlLElBQUksZUFBZSxJQUFJLENBQUMsRUFBRTtZQUN6QyxXQUFXLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQyxDQUFDLFFBQVE7U0FDMUQ7UUFDRCxxREFBcUQ7UUFDckQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxVQUFVO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSSwwQkFBYSxHQUFwQixVQUFxQixNQUFpQjtRQUNsQyxNQUFNLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0kseUJBQVksR0FBbkIsVUFBb0IsTUFBaUI7UUFDakMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLCtCQUFrQixHQUF6QixVQUEwQixJQUFhLEVBQUUsTUFBZ0IsRUFBRSxNQUFXLEVBQUUsVUFBb0I7UUFDeEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksK0JBQWtCLEdBQXpCLFVBQTBCLElBQWEsRUFBRSxNQUFnQixFQUFFLE1BQVcsRUFBRSxVQUFvQjtRQUN4RixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFDTCxtQkFBQztBQUFELENBN0RBLEFBNkRDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b25NZXRob2Qge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCN6KmyYnV0dG9u5re75Yqg55uj6IG95LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge2NjLkJ1dHRvbn0gYnV0dG9uTm9kZSA6IOaMiemIlee1hOS7tlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgOiDkuovku7bmlrnms5XlkI3nqLFcclxuICAgICAqIEBwYXJhbSBzZWxme3RoaXN9IDog5Zyo5ZOq6KOh6ZaL5ZWf55uj6IG955qEXHJcbiAgICAgKiBAcGFyYW0gY3VzdG9tRXZlbnREYXRhe2FueX0gOiDlm57lgrPlgLxcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZEJ1dHRvbkV2ZW50KGJ1dHRvbk5vZGU6IGNjLkJ1dHRvbiwgbWV0aG9kTmFtZTogc3RyaW5nLCBzZWxmOiBhbnksIGN1c3RvbUV2ZW50RGF0YT86IGFueSkge1xyXG4gICAgICAgIC8v5omL5YuV5re75Yqg55uj6IG95LqL5Lu2XHJcbiAgICAgICAgbGV0IHRoaXNOb2RlID0gc2VsZi5ub2RlO1xyXG4gICAgICAgIGxldCBzY3JpcHROYW1lID0gY2MuanMuZ2V0Q2xhc3NOYW1lKHNlbGYpO1xyXG4gICAgICAgIGxldCBjbGlja19ldmVudCA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7IC8v57Wm5LqI5LiA5YCL5LqL5Lu2XHJcbiAgICAgICAgY2xpY2tfZXZlbnQudGFyZ2V0ID0gdGhpc05vZGU7IC8v54i26aGe56+A6bueLOazqOaEj+eItumhnnNpemXkuI3og73ngrooMCwwKVxyXG4gICAgICAgIGNsaWNrX2V2ZW50LmNvbXBvbmVudCA9IHNjcmlwdE5hbWU7IC8v6Kmy54i26aGe55qEc2NyaXB0XHJcbiAgICAgICAgY2xpY2tfZXZlbnQuaGFuZGxlciA9IG1ldGhvZE5hbWU7IC8v5bCN5LqL5Lu25re75YqgZnVuY3Rpb24s5ZCN56ix5piv5a2X5LiyXHJcbiAgICAgICAgaWYgKGN1c3RvbUV2ZW50RGF0YSB8fCBjdXN0b21FdmVudERhdGEgPT0gMCkge1xyXG4gICAgICAgICAgICBjbGlja19ldmVudC5jdXN0b21FdmVudERhdGEgPSBjdXN0b21FdmVudERhdGE7IC8v5re75Yqg5Zue6Kq/5Y+D5pW4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMubm9kZS5jbGlja0V2ZW50cyA9IFtjbGlja19ldmVudF07Ly/kuIDmrKHmt7vliqDlpJrlgIvnm6Pogb3kuovku7ZcclxuICAgICAgICBidXR0b25Ob2RlLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tfZXZlbnQpOyAvL+eVtum7nuaTiuW+jOinuOeZvOS6i+S7tlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLy9USVRMRTrnpoHnlKhidXR0b25cclxuICAgICAqIEBwYXJhbSB7Y2MuQnV0dG9ufWJ1dHRvblxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgZGlzYWJsZUJ1dHRvbihidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIC8vVElUTEU65ZWf55SoYnV0dG9uXHJcbiAgICAgKiBAcGFyYW0ge2NjLkJ1dHRvbn1idXR0b25cclxuICAgICAqL1xyXG4gICAgc3RhdGljIGVuYWJsZUJ1dHRvbihidXR0b246IGNjLkJ1dHRvbikge1xyXG4gICAgICAgIGJ1dHRvbi5pbnRlcmFjdGFibGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5bCN6Kmybm9kZSDmt7vliqAgb24g5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5vZGVcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxyXG4gICAgICogQHBhcmFtIHt0aGlzfSB0aGlzSnNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSA6IFwi5Y+v6Zec6ZaJ5aSa6bue6Ke45o6n5pu06IO9XCJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFkZFRvdWNoU3RhcnRFdmVudChub2RlOiBjYy5Ob2RlLCBtZXRob2Q6IEZ1bmN0aW9uLCB0aGlzSnM6IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBtZXRob2QsIHRoaXNKcywgdXNlQ2FwdHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsI3oqbJub2RlIOmXnOmWiSBvZmYg5LqL5Lu2XHJcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5vZGVcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG1ldGhvZFxyXG4gICAgICogQHBhcmFtIHt0aGlzfSB0aGlzSnNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQ2FwdHVyZSA6IFwi5Y+v6Zec6ZaJ5aSa6bue6Ke45o6n5pu06IO9XCJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIG9mZlRvdWNoU3RhcnRFdmVudChub2RlOiBjYy5Ob2RlLCBtZXRob2Q6IEZ1bmN0aW9uLCB0aGlzSnM6IGFueSwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pIHtcclxuICAgICAgICBub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgbWV0aG9kLCB0aGlzSnMsIHVzZUNhcHR1cmUpO1xyXG4gICAgfVxyXG59Il19