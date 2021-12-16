namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)所有的流程父類
         * @Date 2021-05-14 下午 03:44
         * @Version 1.0
         */
        export interface IProcess {

            /**
             * 儲存使用者綁定的流程方法
             */
            readonly process: Set<() => Promise<void> | void>

            /**
             * 流程容器
             */
            readonly executionContent: IF.IExecutionContent;

            /**
             * 更換流程
             */
            onChangeStatus(): this;

            /**
             * 將所有綁定的流程方法依序執行
             * @returns {Promise<void>}
             */
            start(): Promise<void>;

        }
    }
}