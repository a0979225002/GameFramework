/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-01 下午 06:18
 * @Version 1.0
 */
class Class01 {

    constructor() {
    }

    public t1ToArray: Array<number>;
    public t2ToNumber: number;
}

test("測試01", () => {

    let obj = {
        aaa: undefined
    }

    let class01 = new Class01();
    tt("t1ToArray", 105);
    tt("t2ToNumber", "我是誰");
    console.log(class01.t1ToArray);
    console.log(class01.t2ToNumber);

    function tt(key: string, any: any) {
        class01[key] = any;
    }

})