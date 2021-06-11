export default class Button {

    /**
     * 對該button添加監聽事件
     * @param {cc.Button} buttonNode : 按鈕組件
     * @param {string} methodName : 事件方法名稱
     * @param self{this} : 在哪裡開啟監聽的
     * @param customEventData{any} : 回傳值
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
     * //TITLE:禁用button
     * @param {cc.Button}button
     */
    static disableButton(button: cc.Button) {
        button.interactable = false;
    }

    /**
     * //TITLE:啟用button
     * @param {cc.Button}button
     */
    static enableButton(button: cc.Button) {
        button.interactable = true;
    }

    /**
     * 對該node 添加 on 事件
     * @param {cc.Node} node
     * @param {function} method
     * @param {this} thisJs
     * @param {boolean} useCapture : "可關閉多點觸控更能"
     */
    static addTouchStartEvent(node: cc.Node, method: Function, thisJs: any, useCapture?: boolean) {
        node.on(cc.Node.EventType.TOUCH_START, method, thisJs, useCapture);
    }

    /**
     * 對該node 關閉 off 事件
     * @param {cc.Node} node
     * @param {Function} method
     * @param {this} thisJs
     * @param {boolean} useCapture : "可關閉多點觸控更能"
     */
    static offTouchStartEvent(node: cc.Node, method: Function, thisJs: any, useCapture?: boolean) {
        node.off(cc.Node.EventType.TOUCH_START, method, thisJs, useCapture);
    }
}