namespace fcc {

    export namespace IF {

        /**
         * @Author XIAO-LI-PIN
         * @Description (介面) 動畫類管理器
         * @Date 2021-04-14 下午 20:24
         * @Version 1.1
         */
        export interface IAnimationManager {

            handler: IAnimationHandler;

            spineName: Map<string, Map<string, string>>;

            getSpineName(resName: string, key: string): string;
        }
    }
}