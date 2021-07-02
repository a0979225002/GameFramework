import {LoadType} from "../Enum/LoadEnum";

export default interface ILoadFactory {

    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param name
     * @param type
     * @param url
     */
    executeLoad(name: string, type: LoadType, url: string): void;


    /**
     * 執行Bundle載入動作
     * @param name
     * @param type
     * @param url
     */
    executeLoadBundle(name: string, type: LoadType, url: string): void;

    /**
     * 加載外部腳本
     * @param name
     * @param type
     * @param url
     */
    executeLoadExternalScript(name: string, type: LoadType, url: string): void;

}