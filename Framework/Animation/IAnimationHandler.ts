namespace fcc {

    export namespace IF {
        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 動畫類處理
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IAnimationHandler {

            /**
             * 更新動畫管理器內的spine數據
             * @param resName
             * @param keyName
             * @param spineName
             */
            updateSpineAnimationName(resName: string, keyName: string, spineName: string);

        }
    }
}