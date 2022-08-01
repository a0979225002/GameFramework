/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2022-06-13 下午 02:24
 * @Version 1.0
 */

namespace fcc {
    export namespace IF {
        export interface ILoadConfig {

            type: type.LoadType;

            /**
             * 要拿取資源的key
             */
            dataName: string,

            /**
             * 當前要獲取的資源類型
             */
            ccType: any,

            /**
             * 獲取的地址
             */
            url: string,

            /**
             * 父資料夾名稱
             */
            folder: string,

            /**
             * 是否是主資源,判斷用
             */
            isMainLoad: boolean,
        }

    }
}
