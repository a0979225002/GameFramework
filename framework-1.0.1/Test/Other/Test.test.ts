/**
 * @Author XIAO-LI-PIN
 * @Description TODO
 * @Date 2021-06-15 上午 11:04
 * @Version 1.0
 */
const enum TestTest {
    TEST1 = "TEST1",
    TEST2 = "TEST2",
    TEST3 = "TEST3",
    TEST4 = "TEST4",
}


const buffer = new ArrayBuffer(2048*2048);

test("byte",()=>{

    const  bytes = 2048*2048;
    const buffer  = new ArrayBuffer(bytes);
    const dataView = new DataView(buffer);
    const bugInt = BigInt(3141112222333334444);
    dataView.setBigUint64(0,bugInt);
    console.log(dataView.getBigUint64(0));
})