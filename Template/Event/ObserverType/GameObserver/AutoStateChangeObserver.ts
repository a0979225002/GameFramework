namespace tcc {

    export namespace event {
        /**
         * @Author XIAO-LI-PIN
         * @Description 自動狀態改變時,當有事件推送時,將會將該事件推播給綁定者
         * @Date 2021-05-20 下午 05:08
         * @Version 1.0
         */
        export class AutoStateChangeObserver extends fcc.ABaseObserver {

            constructor(callFun: (isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType) => void, self) {
                super(callFun, self);
            }

            public pushNotification(isAutomaticState: boolean, beforeAutoCount: fcc.type.AutoType, afterAutoCount: fcc.type.AutoType) {
                super.pushNotification(isAutomaticState, beforeAutoCount, afterAutoCount);
            }
        }
    }

}