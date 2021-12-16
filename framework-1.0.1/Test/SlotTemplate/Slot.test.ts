/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-10-15 下午 04:39
 * @Version 1.0
 */

interface ISlotConstructor {
    new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager): ISlot;
}

interface ISlot{
    initializeState(): void;
    runSlotAnimation(): Promise<void>;
    sineInSlot(): Promise<void>;
}

class SlotTest implements ISlot{

    constructor(styleData: fcc.NormalSetting, configManager: fcc.IF.IConfigManager) {

    }

    initializeState(): void {
    }

    runSlotAnimation(): Promise<void> {
        return Promise.resolve(undefined);
    }

    sineInSlot(): Promise<void> {
        return Promise.resolve(undefined);
    }
}

class SlotManager {
    build<S extends fcc.IF.IBaseSlotSetting,B extends ISlot>(SLOT:new (styleData: S, configManager: fcc.IF.IConfigManager)=>B):ISlot {
        return new SLOT(null,null);
    }
}
let a = new SlotManager();
a.build<fcc.IF.IBaseSlotSetting,SlotTest>(SlotTest)




interface ClockConstructor {
    new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour:  fcc.IF.IBaseSlotSetting, minute: fcc.IF.IConfigManager): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}



//
// // a.build<fcc.NormalSetting, SlotTest<any,any>>(SlotTest)
//
//
// class User {
//     constructor(styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) { }
// }
//
// // add constructor function type constraint for T
// interface IConstruct<T extends new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => SlotTest> {
//     // we can use built-in InstanceType to infer instance type from class type
//     type: new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager) => InstanceType<T>;
//     initializeState(): void;
//     runSlotAnimation(): Promise<void>;
//     sineInSlot(): Promise<void>;
// }
//
// type UserConstruct = IConstruct<typeof SlotTest>
//
// class t1 implements IConstruct<typeof t1>{
//
//
//     build<S,T extends new (styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager)=> UserConstruct>(T){
//         return T;
//     }
//
//     initializeState(): void {
//     }
//
//     runSlotAnimation(): Promise<void> {
//         return Promise.resolve(undefined);
//     }
//
//     sineInSlot(): Promise<void> {
//         return Promise.resolve(undefined);
//     }
//
//     type: { new(styleData: fcc.IF.IBaseSlotSetting, configManager: fcc.IF.IConfigManager): InstanceType<typeof t1> };
// }
// let b = new t1();
// b.build<fcc.NormalSetting,SlotTest>(SlotTest)












// const constr: UserConstruct = {
//     type: User
// }
//
// constr.type // new (name: string) => User
//
// const userInstance = new constr.type("John") // userInstance: User
//
// console.log(userInstance.name) // John
