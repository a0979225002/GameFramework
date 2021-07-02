import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import {LoadType} from "./Enum/LoadEnum";
import ILoadFactory from "./ILoad/ILoadFactory";
import CSSLoad from './LoadScriptType/CSSLoad'
import ScriptLoad from './LoadScriptType/ScriptLoad'
import ImgLoad from "./LoadType/ImgLoad";
import MusicLoad from "./LoadType/MusicLoad";
import PrefabLoad from "./LoadType/PrefabLoad";
import SceneLoad from './LoadType/SceneLoad'
import SpineLoad from "./LoadType/SpineLoad";
import TextLoad from "./LoadType/TextLoad";

export default class LoadTypeFactory implements ILoadFactory {

    private isLoadBundle: boolean;
    private assetBundle: cc.AssetManager.Bundle
    private promise: Promise<unknown>
    private readonly assetMethod: Array<Function>;


    constructor() {
        this.assetMethod = new Array<Function>();
    }

    loadBundle(dataName: string, type: LoadType, url: string) {

        if (this.assetBundle) return;
        this.promise = new Promise<void>(() => {
        });

        //加載Bundle資源時須先加載Bundle清單
        return new Promise<void>((resolve) => {
            if (!this.isLoadBundle) {
                this.isLoadBundle = true;
                cc.assetManager.loadBundle("secondaryRes", (error, bundle) => {
                    if (error) {
                        ErrorManager.instance.executeError(ErrorType.LOAD_FW, error)
                    }
                    this.assetBundle = bundle;
                    resolve();
                })
            } else if (!this.assetBundle && this.isLoadBundle) {

                this.assetMethod.push(this.checkLoadType.bind(this, dataName, type, url, "secondaryRes"));

            }
        });
    }

    /**
     * 檢測當前Type,做各自對應的加載動作
     * @param dataName
     * @param type
     * @param url
     */
    public executeLoad(dataName: string, type: LoadType, url: string) {

        this.checkLoadType(dataName, type, url, "resources");

    }

    /**
     * 執行Bundle載入動作
     * @param dataName
     * @param type
     * @param url
     */
    async executeLoadBundle(dataName: string, type: LoadType, url: string) {

        await this.loadBundle(dataName, type, url);
        this.checkLoadType(dataName, type, url, "secondaryRes");

        if (this.assetMethod.length != 0) {
            while (this.assetMethod.length) {
                this.assetMethod[0]();
                this.assetMethod.shift();
            }
        }
    }

    //確認當前type
    checkLoadType(dataName: string, type: LoadType, url: string, folder: string) {
        switch (type) {

            case LoadType.img:
                new ImgLoad(dataName, cc.SpriteAtlas, url, folder).loadResources();
                break;
            case LoadType.music:
                new MusicLoad(dataName, cc.AudioClip, url, folder).loadResources();
                break;
            case LoadType.prefab:
                new PrefabLoad(dataName, cc.Prefab, url, folder).loadResources();
                break;
            case LoadType.spine:
                new SpineLoad(dataName, sp.SkeletonData, url, folder).loadResources();
                break;
            case LoadType.scene:
                new SceneLoad(dataName, cc.SceneAsset, null, folder).loadResources();
                break;
            case LoadType.text:
                new TextLoad(dataName, cc.TextAsset, url, folder).loadResources();
                break;
            default :
                ErrorManager.instance.executeError(ErrorType.TYPE_FW, "LoadType 無法偵測");
        }

    }

    /**
     * 加載外部腳本
     * @param name
     * @param type
     * @param url
     */
    executeLoadExternalScript(name: string, type: LoadType, url: string) {
        switch (type) {
            case LoadType.css:
                new CSSLoad(name, "text/css", url).loadScript();
                break
            case LoadType.script:
                new ScriptLoad(name, "text/javascript", url).loadScript();
                break
            default:
                ErrorManager.instance.executeError(ErrorType.TYPE_FW, "LoadType 無法偵測");
        }
    }
}