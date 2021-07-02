import {ErrorType} from "../../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../../Error/ErrorManager";
import Util from "../../Global/Util";
import LoadResManager from "../LoadResManager";

export default abstract class ALoadType implements ILoadType {

    protected type: any;
    protected url: string;
    protected dataName: string;
    protected folder: string
    private beforeProgress: number;
    private assetBundle: cc.AssetManager.Bundle

    protected constructor(dataName: string, type: any, url: string, folder: string) {

        this.type = type;               //當前要獲取的資源類型
        this.url = url;                 //獲取的地址
        this.dataName = dataName;       //要拿取資源的key
        this.folder = folder            //父資料夾名稱,默認 resources
        this.beforeProgress = 0;        //當前上次的載入進度
        this.assetBundle = cc.assetManager.getBundle(this.folder);
    }

    /**
     * 加載資源方法
     */
    public loadResources() {
        if (this.type !== cc.SceneAsset) {
            this.assetBundle.loadDir(this.url, this.type, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
        } else {
            //載入scene資源,如果名稱錯誤會scene名稱錯誤會無法拿取資源
            //載入scene資源,無須URL地址,但是2.4.X需要放在Resource底下
            this.assetBundle.loadScene(this.dataName, cc.SceneAsset, this.loadResProgress.bind(this), this.loadResCallBack.bind(this));
        }
    }

    private loadResCallBack(error: Error, assets: [] | cc.SceneAsset) {
        if (error) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, error);
        } else if (!(assets instanceof cc.SceneAsset) && assets.length == 0) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, `無載入任何資源 ${this.url} `);
        }

        this.setResToManager(this.dataName, assets);

    }

    private loadResProgress(complete: number, TotalAmount: number) {

        //獲取百分比
        let progress = Util.roundDown((complete / TotalAmount), 2);

        if (progress > this.beforeProgress) {

            //不從這裡判斷狀態,目的解決異步操作
            //當資源都載入到LoadManager時才回傳以載入完成的狀態
            if (progress >= 1) {
                progress = 0.99
            }

            //回傳上次與這次之間增加了多少進度
            this.updateManagerState(this.dataName, progress, (progress - this.beforeProgress));
            this.beforeProgress = progress;
        }
    }

    protected updateProgressEnd() {
        //目的解決異步操作
        //當資源都載入到LoadManager時才回傳以載入完成的狀態
        if (this.folder === "resources") {
            LoadResManager.instance.initialLoadState.set(this.dataName, 1);
            LoadResManager.instance.loadMainEventCallback(this.dataName, 0.01, 1);
        } else {
            LoadResManager.instance.secondaryLoadState.set(this.dataName, 1);
            LoadResManager.instance.loadSecondaryEventCallback(this.dataName, 1);
        }
    }

    protected updateManagerState(key: string, state: number, update: number) {
        if (this.folder === "resources") {
            LoadResManager.instance.initialLoadState.set(key, state);
            LoadResManager.instance.loadMainEventCallback(key, update, state);
        } else {
            LoadResManager.instance.secondaryLoadState.set(key, state);
            LoadResManager.instance.loadSecondaryEventCallback(key, state);
        }
    }

    protected abstract setResToManager(dataName: string, asset: any): void;

}