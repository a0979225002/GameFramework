/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-07-19 下午 05:53
 * @Version 1.0
 */

test("Map",()=>{

    let a:Map<string,number> = new Map<string,number>();

    a.set("10",50);

    a.clear();

    a.set("20",60);

    console.log(a)


})