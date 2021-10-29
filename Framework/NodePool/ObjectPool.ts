namespace fcc{
    /**
     * @Author 蕭立品
     * @Description 通用對象池
     * @Date 2021-10-29 下午 02:34
     * @Version 1.0
     */
    export class ObjectPool<T>{

        private buffList: T[] = []

        private key: string;

        constructor(key: string) {
            this.key = key;
        }

        get(func: () => T) {
            return this.buffList.length > 0 ? this.buffList.shift() : func();
        }

        put(obj: T) {
            this.buffList.push(obj)
        }

        size() {
            return this.buffList.length
        }

        destroy() {
            this.buffList.length = 0;

        }
    }
}
