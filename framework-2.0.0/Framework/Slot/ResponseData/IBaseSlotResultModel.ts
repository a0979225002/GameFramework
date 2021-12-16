namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面)所有類型Slot接收封包的父類
         * @Date 2021-05-31 下午 03:45
         * @Version 1.0
         */
        export interface IBaseSlotResultModel {

            /**
             * 0: 押注成功 1: 非免費時間押注
             */
            State: number;
        }
    }
}
