/// <reference path="./IPool.ts" />
namespace fcc {
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-10-29 下午 02:35
     * @Version 1.0
     */
    export class CCNodePool implements IF.IPool {

        private pool: cc.NodePool;

        private readonly prefab: cc.Prefab | cc.Node;

        private readonly name: string;

        /**
         *
         * @param {string} name
         * @param {cc.Prefab | cc.Node} nodeOrPrefab - 要建立的物件
         * @param {number} count 初始化個數
         */
        constructor(name: string, nodeOrPrefab: cc.Prefab | cc.Node, count: number) {
            this.name = name
            this.pool = new cc.NodePool();
            this.prefab = nodeOrPrefab;
            for (let i = 0; i < count; i++) {
                let obj: cc.Node = this.getNode() as cc.Node;
                this.pool.put(obj);
            }
        }

        getName() {
            return this.name
        }

        get(): cc.Node {
            return this.pool.size() > 0 ? this.pool.get() : this.getNode() as cc.Node;
        }

        getNode() {
            if (this.prefab) {
                return cc.instantiate<cc.Node | cc.Prefab>(this.prefab);
            } else {
                console.error(' 預製體沒有賦值 ')
                return null;
            }
        }

        size() {
            return this.pool.size();
        }

        put(node: cc.Node) {
            this.pool.put(node);
        }

        clear() {
            this.pool.clear();
        }

    }
}
