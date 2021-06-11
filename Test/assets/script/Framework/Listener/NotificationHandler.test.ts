import NotificationHandler from "../../../../../assets/script/Framework/Listener/NotificationHandler";
import UserTotalBetChangeObserver
    from "../../../../../assets/script/Framework/Listener/ObserverType/GameObserver/UserTotalBetChangeObserver";
import {NotificationType} from "../../../../../assets/script/Framework/Listener/Enum/NotificationType";
import SpeedStateChangeNotification
    from "../../../../../assets/script/Framework/Listener/NotificationType/GameNotification/SpeedStateChangeNotification";
import SpeedStateChangeObserver
    from "../../../../../assets/script/Framework/Listener/ObserverType/GameObserver/SpeedStateChangeObserver";
import SlotConfigManager from "../../../../../assets/script/Framework/Config/SlotConfigManager";
import ErrorManager from "../../../../../assets/script/Framework/Error/ErrorManager";
import ScrollFocusStateNotification
    from "../../../../../assets/script/Framework/Listener/NotificationType/GameNotification/ScrollFocusStateNotification";
import AutoStateChangeNotification
    from "../../../../../assets/script/Framework/Listener/NotificationType/GameNotification/AutoStateChangeNotification";
import AutoStateChangeObserver
    from "../../../../../assets/script/Framework/Listener/ObserverType/GameObserver/AutoStateChangeObserver";
import {AutoType} from "../../../../../assets/script/Framework/Config/Enum/ConfigEnum";

/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-10 下午 01:46
 * @Version 1.0
 */
class NotificationTestClass {
    private int: number;
    private autoStateChangeObserver: AutoStateChangeObserver;

    constructor() {
        this.int = 0;
        NotificationHandler
            .instance()
            .setNotification(SpeedStateChangeNotification.instance)
            .setNotification(AutoStateChangeNotification.instance);

        NotificationHandler
            .instance<SpeedStateChangeNotification>()
            .getNotification(NotificationType.SPEED_CHANGE)
            .subscribe(this.getObserver1(), true);

        NotificationHandler
            .instance<SpeedStateChangeNotification>()
            .getNotification(NotificationType.SPEED_CHANGE)
            .subscribe(this.getObserver1(), true);

        NotificationHandler
            .instance<SpeedStateChangeNotification>()
            .getNotification(NotificationType.SPEED_CHANGE)
            .subscribe(this.getObserver1(), true);

        NotificationHandler
            .instance<SpeedStateChangeNotification>()
            .getNotification(NotificationType.SPEED_CHANGE)
            .subscribe(this.getObserver1(), true);

        NotificationHandler
            .instance<AutoStateChangeNotification>()
            .getNotification(NotificationType.AUTO_CHANGE)
            .subscribe(this.getAutoObserver(), true);

    }

    getAutoObserver(): AutoStateChangeObserver {
        if (!this.autoStateChangeObserver) {
            this.autoStateChangeObserver = new AutoStateChangeObserver((isAutomaticState, beforeAutoCount, afterAutoCount) => {
                console.log(isAutomaticState, beforeAutoCount, afterAutoCount)
            }, this);
        }
        return this.autoStateChangeObserver;
    }

    getObserver(): IBaseObserver {
        return new UserTotalBetChangeObserver((beforeIndex, afterIndex) => {
            console.log(beforeIndex, afterIndex);
        }, this)
    }

    getObserver1(): SpeedStateChangeObserver {
        return new SpeedStateChangeObserver((isSpeedUp) => {
            this.int++;
            console.log(`推播次數: ${this.int} 當前回傳參數:${isSpeedUp}`);
        }, this)
    }
}

ErrorManager.setInstance(SlotConfigManager.instance);
new NotificationTestClass();

test("推播事件測試", () => {
    NotificationHandler
        .instance<SpeedStateChangeNotification>()
        .getNotification(NotificationType.SPEED_CHANGE)
        .notify(true);

    NotificationHandler
        .instance<AutoStateChangeNotification>()
        .getNotification(NotificationType.AUTO_CHANGE)
        .notify(false, AutoType.freeEnd, AutoType.auto100);

    console.log(
        NotificationHandler
            .instance()
            .checkAllNotifications()
    );

    console.log(
        NotificationHandler
            .instance()
            .getNotification(NotificationType.AUTO_CHANGE)
            .getAllSubscribe()
    )
})

test("推播錯誤使用測試", () => {

    SlotConfigManager.instance.setFrameWorkDebug(true);
    let notificationType = NotificationType.AUTO_CHANGE;
    expect(() => {
        NotificationHandler
            .instance<ScrollFocusStateNotification>()
            .getNotification(notificationType)
            ?.notify(3, false);
    }).toThrow(`Event 類有錯誤 : ${notificationType} :  該key尚未加入推撥事件中,你需先執行 setNotification(type:IBaseNotification)方法`);
})