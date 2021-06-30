namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)所有執行容器接繼承於他
         * @Date 2021-05-14 下午 03:50
         * @Version 1.0
         */
        export interface IExecutionContainer {

            /**
             * 更換流程
             */
            onChangeStatus(): void;


            /**
             * 初始化流程
             * @returns {Promise<void>}
             */
            onCreate();

        }
    }
}