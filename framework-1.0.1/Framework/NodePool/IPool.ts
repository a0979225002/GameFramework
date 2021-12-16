namespace fcc {
    export namespace IF {

        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021-10-29 下午 02:36
         * @Version 1.0
         */
        export interface IPool {

            /**
             * 獲取緩存池內物件
             * @return {cc.Node}
             */
            get(): cc.Node;

            /**
             * 獲取該對象池內物件大小
             * @return {number}
             */
            size(): number;

            /**
             * 將物件返回對象池中
             * @param node - 要返回的物件
             * @param nodePool 是否放入NodePool中
             */
            put(node: cc.Node, nodePool?: boolean);

            clear(): void;
        }
    }
}
