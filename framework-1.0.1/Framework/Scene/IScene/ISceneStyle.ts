namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 對應該樣式,更新當前場景
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface ISceneStyle {

            executionStyle(width: number, height: number): void;

        }
    }
}