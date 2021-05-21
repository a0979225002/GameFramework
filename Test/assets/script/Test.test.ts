/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-05-21 上午 10:32
 * @Version 1.0
 */
interface test1 {
    aa: number;
}

test("測試", () => {
    class Person implements test1 {
        aa: number;
        bb: number;

        constructor() {
            this.test();
        }

        test() {
            this.aa = 1000;
            this.bb = 50;
        }
    }

    class Person2 extends Person {
        constructor() {
            super();
        }
        test() {
            super.test();
        }
    }

    let person = new Person();
    let person2 = new Person2();
    console.log("person", person.aa);
    console.log("person2", person2.aa, person2.bb);
})