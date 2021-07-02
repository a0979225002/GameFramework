export default class Util {

    private static formatting = new Intl.NumberFormat();

    /**
     * 四捨五入到小數點第N位
     * @param {number} float - 浮點數
     * @param {number} number - 要四捨五入到哪一位
     * @return {number}
     */
    static roundOff(float: number, number: number): number {
        return Math.round(Math.round(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 無條件捨去到小數點第N位
     * @param {number} float - 浮點數
     * @param {number} number - 要無條件捨去到哪一位
     * @return {number}
     */
    static roundDown(float: number, number: number): number {
        return Math.floor(Math.floor(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 無條件進位到小數點第N位
     * @param {number} float - 浮點數
     * @param {number} number - 要無條件進位到哪一位
     * @return {number}
     */
    static roundUp(float: number, number: number): number {
        return Math.ceil(Math.ceil(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 檢查該數字為小數有幾位
     * @example input(1.03) -> output(2)
     * @param {number}float - 浮點數
     * @return {number}
     */
    static decimalsCount(float: number): number {
        let decimalsIndex = String(float).indexOf('.') + 1;
        let count = String(float).length - decimalsIndex;
        if (decimalsIndex == 0) {
            return 0;
        } else {
            return count;
        }
    }

    /**
     * 將該數字轉字串並判斷是否能使用(K)單位取代零
     * @example input(1000) -> output(1K)
     * @param {number} number 需要格式化的數字
     * @return {string} - 格式化後的字串數字
     */
    static numberFormat(number: number): string {
        if (number < 1000) {
            return number + "";
        }
        if (number > 1000) {
            return `${number / 1000}K`;
        }
    }

    /**
     * 將該數字格式化,每三個0前方給予','標記
     * @example input(1000000) -> output(1,000,000)
     * @param {number} number - 需要格式化的數字
     * @return {string} - 格式化後的字串數字
     */
    static format(number: number): string {
        return this.formatting.format(number);
    }
}