namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)綁定自己需要的所有推撥者
         * @Date 2021-06-10 下午 04:03
         * @Version 1.0
         */
        export interface INotificationManager<T extends IBaseNotification> {

            /**
             * 添加推撥者
             * @param {T} notification - 推撥者
             * @return {this}
             */
            setNotification(notification: T): this;

            /**
             * 獲取以綁定的推播者
             * @param {string} type - 事件名稱
             * @return
             */
            getNotification(type: string): T;

            /**
             * 查看該事件是否已經加入管理器中
             * @param {string} type - 事件名稱
             * @return {boolean}
             */
            hasNotification(type: string): boolean

            /**
             * 查看當前所有以綁定的通知
             */
            getAllNotifications(): Map<String, T>;
        }
    }
}