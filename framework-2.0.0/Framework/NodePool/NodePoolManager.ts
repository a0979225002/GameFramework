/// <reference path="./CCNodePool.ts" />
/// <reference path="./SelfPool.ts" />
namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 緩存池管理器
     * @Date 2021-10-29 下午 02:28
     * @Version 1.0
     */
    export class NodePoolManager {

        private static _instance: NodePoolManager;

        static get instance(): NodePoolManager {
            if (!this._instance) {
                this._instance = new NodePoolManager();
            }
            return this._instance;
        }

        /**
         * 對象池表
         * @type {Map<string, SelfPool>}
         * @private
         */
        private pools: Map<string, SelfPool> = new Map<string, SelfPool>();

        /**
         * 保存node物件name名,使清除物件時,可透過該node物件的name名,查找對應的pool池的key
         * @type {Map<cc.Node, string>}
         * @private
         */
        private nameMap: Map<cc.Node, string> = new Map<cc.Node, string>();

        /**
         * 初始該物件保存至緩存池中
         * @param {string} name 自訂物件名稱
         * @param {cc.Prefab | cc.Node} nodeOrPrefab - 要建立的物件
         * @param {number} count - 數量
         */
        init(name: string, nodeOrPrefab: cc.Prefab | cc.Node, count: number) {
            if (!this.pools.has(name)) {
                this.pools.set(name, new SelfPool(new CCNodePool(name, nodeOrPrefab, count)));
            }
        }

        /**
         * 獲取該緩存池
         * @param {string} key
         * @return {CCNodePool}
         */
        getPool(key: string): CCNodePool {
            return this.pools.get(key).getPool();
        }

        /**
         * 獲取緩存池內物件
         * @param {string} key - 當初自訂義名稱
         * @return {cc.Node}
         */
        get(key: string): cc.Node {
            if (this.pools.has(key)) {
                let node: cc.Node = this.pools.get(key).get();
                if (!this.nameMap.has(node)) {
                    this.nameMap.set(node, key);
                }
                return node;
            }
            return null;
        }

        /**
         * 回收進對象池
         * @param {cc.Node} node - 要回收的物件
         * @param {boolean} nodePool - 是否要回收進對象池
         */
        put(node: cc.Node, nodePool: boolean = false): void {
            let key = this.nameMap.get(node);
            if (!this.pools.has(key)) {
                cc.warn(" not have name ", key, ' ,go.name ', node.name);
                return;
            }
            this.pools.get(key).put(node, nodePool);
            this.nameMap.delete(node);
        }

        /**
         * 清除該對象池內所有物件
         * @param {string} name
         */
        clear(name: string) {
            if (this.pools.has(name)) {
                this.pools.get(name).clear();
                this.pools.delete(name);
            }
        }

        /**
         * 清除所有緩存池內所有物件
         */
        clearAll() {
            for (const key in this.pools) {
                this.clear(key);
            }
            this.pools.clear();
        }
    }
}
