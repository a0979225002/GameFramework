/// <reference path="./IPool.ts" />
/// <reference path="./CCNodePool.ts" />
namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-10-29 下午 02:33
     * @Version 1.0
     */
    export class SelfPool implements IF.IPool {

        private list: cc.Node[] = []

        private readonly pool: CCNodePool;

        constructor(pool: CCNodePool) {
            this.pool = pool;
        }

        get(): cc.Node {
            return this.list.length > 0 ? this.list.shift() : this.pool.get();
        }

        getPool(): CCNodePool {
            return this.pool
        }

        size(): number {
            return this.pool.size() + this.list.length;
        }

        /**
         * 將物件返回對象池中
         * @param node
         * @param nodePool 是否放入NodePool中
         */
        put(node: cc.Node, nodePool: boolean = false): void {
            if (nodePool) {
                this.pool.put(node)
            } else {
                this.list.push(node);
                node.stopAllActions();
                node.active = false;
            }
        }

        clear(): void {
            this.pool.clear();
            this.list.length = 0;
        }
    }
}
