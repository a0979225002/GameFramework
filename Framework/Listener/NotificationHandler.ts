﻿
/// <reference path="../Error/ErrorManager.ts" />
/// <reference path="../Error/Enum/ErrorType.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 綁定自己需要的所有推撥者
     * @Date 2021-06-10 上午 11:02
     * @Version 1.0
     */
    export class NotificationHandler<T extends IF.IBaseNotification> implements IF.INotificationHandler<T> {

        /**
         * 保存使用中的推撥者
         * @type {Map<string, IBaseNotification>}
         * @protected
         */
        protected readonly notificationToMap: Map<string, T>;

        /**
         * 懶漢加載
         * @type {NotificationHandler<any>}
         * @private
         */
        private static _instance: IF.INotificationHandler<any>;

        private constructor() {
            this.notificationToMap = new Map<string, T>();
        }

        /**
         * 懶漢加載
         * @return {INotificationHandler<T>}
         */
        public static instance<T extends IF.IBaseNotification>(): IF.INotificationHandler<T> {
            if (!this._instance) {
                this._instance = new NotificationHandler<T>();
            }
            return this._instance;
        }

        /**
         * 添加推撥者
         * @param {IBaseNotification} notification
         * @return {this}
         */
        setNotification(notification: T): this {
            if (!this.notificationToMap.has(notification.TAG_NAME)) {
                this.notificationToMap.set(notification.TAG_NAME, notification);
            }
            return this;
        }

        /**
         * 獲取以綁定的推播者
         * @param {string} type
         * @return {IBaseNotification}
         */
        getNotification(type: string): T {
            if (this.notificationToMap.has(type)) {
                return this.notificationToMap.get(type);
            } else {
                ErrorManager.instance.executeError(fcc.type.ErrorType.LISTENER_FW, `${type} :  該key尚未加入推撥事件中,你需先執行 setNotification(type:IBaseNotification)方法`)
                // throw new Error(`${type} :  該class尚未加入推撥事件中,你需先執行 setNotification(IBaseNotification)方法`);
                return undefined;
            }
        }

        checkAllNotifications(): Map<String, T> {
            return this.notificationToMap;
        }
    }
}