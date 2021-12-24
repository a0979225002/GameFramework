/**
 * @Author 蕭立品
 * @Description 狀態內容
 * @Date 2021-12-22 下午 04:54
 * @Version 1.0
 */
namespace fcc {
    export namespace IF {

        export interface IStateAction {

            /**
             * 初始化
             */
            onCreate():void;

            /**
             * 離開狀態時
             */
            onExit():void;

            /**
             * 開始執行
             */
            onExecution():void;

            /**
             * 強制結束
             */
            onForcedEnd():void;
        }
    }
}
