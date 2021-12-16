/// <reference path="./TSObjectPool.ts" />
namespace fcc{
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-10-29 下午 02:34
     * @Version 1.0
     */
    export class TSPoolManager {
        //对象池表
        private pools: Map<string, TSObjectPool<any>> = new Map<string, TSObjectPool<any>>();

        private static _instance: TSPoolManager;

        static get instance(): TSPoolManager {
            if (!this._instance) {
                this._instance = new TSPoolManager();
            }
            return this._instance;
        }

        init<T>(key: string, type: { new(): T; }, count: number = 1): void {
            if (!this.pools[key]) {
                this.pools.set(key, new TSObjectPool(key, type, count));
            }
        }

        /**
         * 获得被销毁的对象
         * @param key
         */
        get<T>(key: string, type: { new(): T; }, count: number = 1): T {
            if (!this.pools.has(key)) {
                this.pools.set(key,new TSObjectPool(key, type, count));
            }
            return this.pools.get(key).get(type);
        }

        put(key: string, obj) {
            let pool = this.pools.get(key);
            if (pool) {
                pool.put(obj);
            }
        }
    }

}
