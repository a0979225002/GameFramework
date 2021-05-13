export default class Util {

    /**
     * 四捨五入到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要四捨五入到哪一位
     */
    static myRound(float: number, number: number): number {
        return Math.round(Math.round(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 無條件捨去到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件捨去到哪一位
     */
    static myFloor(float: number, number: number): number {
        return Math.floor(Math.floor(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 無條件進位到小數點第N位
     * @param {number} float : 浮點數
     * @param {number} number : 要無條件進位到哪一位
     */
    static myCeil(float: number, number: number): number {
        return Math.ceil(Math.ceil(float * Math.pow(10, (number || 0) + 1)) / 10) / Math.pow(10, (number || 0));
    }

    /**
     * 檢查該數字為小數有幾位
     * @param {number}float : 浮點數
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
}