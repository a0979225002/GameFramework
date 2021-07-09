/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-09 上午 11:11
 * @Version 1.0
  */

export class Class0 {

    load(){
        console.log("0");
    }

}

export class Class1 extends Class0{

    load() {
        super.load();
        console.log("1")
    }
}

export class Class2 extends Class1{

    load() {
        console.log("2");
        super.load();
    }
}


test("父類引用測試",()=>{

    let class2 = new Class2();

    class2.load()
})