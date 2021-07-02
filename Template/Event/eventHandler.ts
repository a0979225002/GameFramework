namespace tcc {

    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-06-30 下午 06:52
     * @Version 1.0
     */

    export function getEvent<T extends fcc.IF.IBaseNotification >(eventName:string | fcc.type.NotificationType) : T{
        return fcc.NotificationHandler.instance<T>().getNotification(eventName);
    }

}

tcc.getEvent<tcc.event.AutoStateNTF>("")