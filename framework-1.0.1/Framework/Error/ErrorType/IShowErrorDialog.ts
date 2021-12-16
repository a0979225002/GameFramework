
namespace fcc {
    export namespace IF{
        /**
         * @Author 蕭立品
         * @Description TODO
         * @Date 2021-06-25 下午 02:11
         * @Version 1.0
         */
        export interface IShowErrorDialog {

            /**
             * 顯示錯誤
             * @param {boolean} permanentState - 是否持續顯示
             * @param {string} message - 顯示錯誤訊息文字
             * @param {string} buttonText - 按鈕文字
             */
            showError(permanentState: boolean, message: string, buttonText: string);
        }
    }
}