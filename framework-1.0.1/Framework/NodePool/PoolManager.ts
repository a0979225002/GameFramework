/// <reference path="./ObjectPool.ts" />
namespace fcc {
    /**
     * @Author 蕭立品
     * @Description 對象池管理器
     * @Date 2021-10-29 下午 02:33
     * @Version 1.0
     */
    export class PoolManager {

        private static _instance: PoolManager
        static get instance() {
            if (!this._instance) {
                this._instance = new PoolManager();
            }
            return this._instance;
        }

        private map: Map<string, ObjectPool<any>> = new Map<string, ObjectPool<any>>();

        get(key: any, func: () => any) {
            if (!this.map.has(key)) {
                this.map.set(key, new ObjectPool(key))
            }
            return this.map.get(key).get(func)
        }

        put(key: any, obj: any) {
            if (this.map.has(key)) {
                this.map.get(key).put(obj)
            } else {
            }
        }

        size(key: string) {
            if (this.map.has(key)) {
                return this.map.get(key).size()
            }
            return 0;
        }

        destroy() {
            this.map.clear();
        }
    }
}
