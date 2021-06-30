/// <reference path="../../../Scene/Enum/SceneDirectionType.ts" />
/// <reference path="../../ABaseNotification.ts" />
/// <reference path="../../Enum/NotificationType.ts" />
/// <reference path="../../ObserverType/SceneObserver/SceneDirectionChangeObserver.ts" />
namespace fcc {

    /**
     * @Author XIAO-LI-PIN
     * @Description 場景方向改變通知管理器
     * @Date 2021-05-19 下午 01:57
     * @Version 1.0
     */
    export class SceneDirectionChangeNotification extends ABS.ABaseNotification {

        /**
         * NotificationHandler 用來獲取這個class的標籤
         * @type {string}
         */
        public readonly TAG_NAME: string;

        /**
         * 懶漢加載
         * @type {SceneDirectionChangeNotification}
         * @private
         */
        private static _instance: SceneDirectionChangeNotification;

        private constructor() {
            super();
            this.TAG_NAME = type.NotificationType.SCENE_DIRECTION_CHANGE
        }

        /**
         * 懶漢加載,單例模式
         * @returns {SceneDirectionChangeNotification}
         */
        public static get instance(): SceneDirectionChangeNotification {
            if (!this._instance) {
                this._instance = new SceneDirectionChangeNotification();
            }
            return this._instance;
        }

        subscribe(observer: SceneDirectionChangeObserver, isPermanent: boolean) {
            super.subscribe(observer, isPermanent);
        }

        /**
         * 用戶更換方向時推送通知
         * @param {SceneDirectionType} type : 當前用戶方向
         */
        notify(type: type.SceneDirectionType) {
            if (this.observer.size > 0) {
                for (let observer of this.observer) {
                    observer.pushNotification(type);
                    if (!observer.isPermanent) {
                        this.unsubscribe(observer);
                    }
                }
            }
        }
    }
}