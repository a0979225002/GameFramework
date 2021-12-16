/**
 * @Author 蕭立品
 * @Description TODO
 * @Date 2021-08-24 下午 12:12
 * @Version 1.0
 */

class AWinLinTemplateTest {

    private static gridRow: number;
    private static gridCont: number;

    constructor() {
        AWinLinTemplateTest.gridRow = 5;
        AWinLinTemplateTest.gridCont = 3;
    }

    /**
     * 數據測試,待刪除
     * @param {number} quantity
     * @return {Array<Array<number>>}
     * @protected
     */
    static test(quantity: number): Array<Array<number>> {
        let json: Array<Array<number>> = new Array<Array<number>>();
        for (let i = 0; i < quantity; i++) {
            let array: Array<number> = [];
            for (let j = 0; j < this.gridRow; j++) {
                let random = Math.floor(Math.random() * (this.gridCont) + j * this.gridCont);
                array.push(random);
            }
            json.push(array);
        }
        return json;
    }
}

test("數據", () => {
    AWinLinTemplateTest.test(20);
})
