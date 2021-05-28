/**
 * @Author XIAO-LI-PIN
 * @Description (Override)計時器方法,讓該class保存當前被計時器綁定且尚未釋放的方法
 * @Date 2021-05-28 上午 10:11
 * @Version 1.0
 */

export default class OverrideComponent extends cc.Component {

    private readonly scheduleTag: Array<Function>;

    constructor() {
        super();
        this.scheduleTag = new Array<Function>();
    }

    getScheduleTag(): Array<Function> {
        return this.scheduleTag;
    }

    getScheduleAmount(): number {
        return this.scheduleTag.length;
    }

    schedule(callback: Function, interval?: number, repeat?: number, delay?: number) {
        super.schedule(callback, interval, repeat, delay);
        this.scheduleTag.push(callback);
    }

    @Callback()
    scheduleOnce(callback: Function, delay?: number) {
        this.schedule(callback, 0, 0, delay);
    }


    unschedule(callback_fn: Function) {
        super.unschedule(callback_fn);
        let index = this.scheduleTag.indexOf(callback_fn);
        this.scheduleTag.splice(index, 1);
    }


    unscheduleAllCallbacks() {
        super.unscheduleAllCallbacks();
        this.scheduleTag.length = 0;
    }
}

function Callback(){
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = true;
        const method = descriptor.value;
        descriptor.value = function (...any) {
            let i : Function;
            for(let fun of any){
                if(typeof fun === "function"){

                    break;
                }
            }
        }
    }
}