namespace fcc{
    /**
     * @Author 蕭立品
     * @Description TODO
     * @Date 2021-10-29 下午 02:36
     * @Version 1.0
     */
    export class TSObjectPool<T> {

        private pool:any [] = []

        private readonly className:string;

        constructor(className:string,type: { new(): T ;},count:number = 0){
            this.className = className;
            for (let index = 0; index < count; index++) {
                this.pool.push(new type());
            }
        }

        getClassName(){
            return this.className;
        }

        get<T>(type: { new(): T ;} ): T {
            let go = this.pool.length > 0 ? this.pool.shift() : null;
            if(!go){
                go = new type();
            }
            return go;
        }

        put(instance:T){
            this.pool.push(instance);

        }

        clear(){
            this.pool = [];
        }

    }

}
