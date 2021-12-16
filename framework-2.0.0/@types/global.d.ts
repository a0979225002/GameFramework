/**
 * 外部異步導入js全域變數
 */
interface Window{
    /**
     * 語系語言
     */
    language_Mode : object;

    //當前語言
    lang : string;

    /**
     * 開發時測試參數
     * @example - (true) 為本地端
     * @example - (false) 外部
     */
    test : boolean;

    /**
     * 熱加載地址
     */
    libraryPath : string;

    /**
     *
     */
    screenLock:any;


}
declare var window:Window;

declare module "socketJS" {
    import Socket = require("../assets/script/Socket/Socket");
    export {Socket};
}