namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)一般流程
         * @Date 2021-05-14 下午 03:08
         * @Version 1.0
         */
        export interface IGameProcess extends IProcess {

            /**
             * 執行流程
             * @returns {this}
             */
            onExecution(): this;

            /**
             * 流程結束時
             * @returns {this}
             */
            onEnd(): this;

        }
    }
}