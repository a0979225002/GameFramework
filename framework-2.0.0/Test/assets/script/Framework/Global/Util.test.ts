import Util = fcc.global.Util;


class aa{


    private index :number;
    private indexs:number[];

    fun(a:number){
        this.indexs.forEach((e)=>{

        })
    }



}

test("數字轉KILO格式化測試",()=>{
    expect(Util.numberFormat(100)).toBe("100");
    expect(Util.numberFormat(999)).toBe( "999");
    expect(Util.numberFormat(1500)).toBe("1.5K");
    expect(Util.numberFormat(1333)).toBe("1.333K");
    expect(Util.numberFormat(15000)).toBe("15K");
    expect(Util.numberFormat(300000)).toBe("300K");
    expect(Util.numberFormat(5000000)).toBe("5000K");
    expect(Util.numberFormat(90000000)).toBe("90000K");
    expect(Util.numberFormat(3333333333)).toBe("3333333.333K");
})
