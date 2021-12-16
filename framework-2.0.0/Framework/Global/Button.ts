namespace fcc {

    export namespace global {

        /**
         * @Author XIAO-LI-PIN
         * @Description 共用:按鈕類方法
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export class Button {

            /**
             * 對該button添加監聽事件
             * @param {cc.Button} buttonNode - 按鈕組件
             * @param {string} methodName - 該按鈕綁定的方法名稱
             * @param self - 該方法存在的位置
             * @param customEventData - 回傳值
             */
            static addButtonEvent(buttonNode: cc.Button, methodName: string, self: any, customEventData?: any) {
                //手動添加監聽事件
                let thisNode = self.node;
                let scriptName = cc.js.getClassName(self);
                let click_event = new cc.Component.EventHandler(); //給予一個事件
                click_event.target = thisNode; //父類節點,注意父類size不能為(0,0)
                click_event.component = scriptName; //該父類的script
                click_event.handler = methodName; //對事件添加function,名稱是字串
                if (customEventData || customEventData == 0) {
                    click_event.customEventData = customEventData; //添加回調參數
                }
                // this.node.clickEvents = [click_event];//一次添加多個監聽事件
                buttonNode.clickEvents.push(click_event); //當點擊後觸發事件
            }

            /**
             * 禁用button
             * @param {cc.Button} button - 按鈕組件
             */
            static disableButton(button: cc.Button) {
                button.interactable = false;
            }

            /**
             * 啟用button
             * @param {cc.Button}button - 按鈕組件
             */
            static enableButton(button: cc.Button) {
                button.interactable = true;
            }

            /**
             * 對該node 添加 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture : "是否關閉多點觸控功能"
             */
            static addTouchStartEvent(node: cc.Node, method: Function, self: any, useCapture?: boolean) {
                node.on(cc.Node.EventType.TOUCH_START, method, self, useCapture);
            }

            /**
             * 對該node 關閉 TOUCH_START 事件
             * @param {cc.Node} node - 要綁定的事件物件
             * @param {Function} method - 觸發事件的方法
             * @param {this} self - 該方法存在的位置
             * @param {boolean} useCapture - 是否關閉多點觸控功能
             */
            static offTouchStartEvent(node: cc.Node, method: Function, self: any, useCapture?: boolean) {
                node.off(cc.Node.EventType.TOUCH_START, method, self, useCapture);
            }
        }
    }
}