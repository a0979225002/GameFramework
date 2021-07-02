import {ErrorType} from "../Error/Enum/ErrorManagerEnum";
import ErrorManager from "../Error/ErrorManager";
import Util from "../Global/Util";
import WebRequestManager from '../WebRequest/WebRequestManager'
import {LoadType} from "./Enum/LoadEnum";
import ILoadResManager from "./ILoad/ILoadResManager";
import LoadTypeHandler from "./LoadTypeHandler";

export default class LoadResManager implements ILoadResManager {

    private configManager: IConfigManager;
    private static _instance: ILoadResManager;

    /**
     * 初始加載物件進度
     */
    private _initialLoadState: Map<string, number>;
    /**
     * 次加載,可以在還未加載完成時,也能進入MainGame Scene
     */
    private _secondaryLoadState: Map<string, number>;
    /**
     * img物件保存
     */
    private _imgRes: Map<string, Map<string, cc.SpriteFrame>>;
    /**
     * spine 物件保存
     */
    private _spineRes: Map<string, sp.SkeletonData>;
    /**
     * 讀取後的文件檔案,保存位置
     */
    private _readFileRes: Map<string, Map<string, string>>;
    /**
     * 讀取後的Prefab,保存位置
     */
    private _prefabRes: Map<string, cc.Prefab>;
    /**
     * 音樂保存位置
     */
    private _musicRes: Map<string, cc.AudioClip>;
    /**
     * 外部腳本保存URL地址,單存判斷是否重複加載
     * @type {Set<string>}
     */
    private _scriptRes: Set<string>;

    /**
     * 場景保存位置
     */
    private _sceneRes: Map<string, cc.SceneAsset>

    private readonly loadTypeHandler: LoadTypeHandler;
    private callFun: Map<string, (progress: number) => void>;
    private count: number;
    private allProgress: number;
    private beforeProgress: number;
    private allProgressEndCount: number;

    private constructor(configManager: IConfigManager) {
        this.configManager = configManager;
        this.loadTypeHandler = new LoadTypeHandler();                       //配發要用哪個class執行載入動作
        this._initialLoadState = new Map<string, number>();                 //主加載狀態
        this._secondaryLoadState = new Map<string, number>();               //次加載狀態
        this._imgRes = new Map<string, Map<string, cc.SpriteFrame>>();      //圖片
        this._spineRes = new Map<string, sp.SkeletonData>();                //骨架
        this._readFileRes = new Map<string, Map<string, string>>();         //text文件
        this._prefabRes = new Map<string, cc.Prefab>();                     //預載體
        this.callFun = new Map<string, (progress: number) => void>();       //callback方法
        this._musicRes = new Map<string, cc.AudioClip>();                   //音樂
        this._scriptRes = new Set<string>();                                //外部腳本保存URL地址,單存判斷是否重複加載
        this._sceneRes = new Map<string, cc.SceneAsset>();                  //保存scene場場景資源
        this.count = 0;                                                     //初始要載入數量
        this.allProgress = 0;                                               //初始加載進度
        this.beforeProgress = 0;                                            //初始上次加載的進度
        this.allProgressEndCount = 0;                                       //因精準度問題,額外判斷是否所有資源都加載完畢
    }


    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new LoadResManager(configManager);
        }
    }


    /**
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): ILoadResManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.LOAD_FW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * 主資源加載物件,監聽是否有callback,隨之返回該狀態
     * @param name
     * @param progress 又加載了多少
     * @param state 該物件加載到幾趴
     */
    loadMainEventCallback(name: string, progress: number, state: number) {

        this.onlyResEventCallback(name, state);
        //當前總加載進度
        this.allProgress += progress / this.count;
        if (this.allProgress >= 1) this.allProgress = 0.99;//精度問題,不回傳1

        //因為浮點數精度,由這裏額外判斷所有資源已加載完畢時,加載進度等於1
        if (state == 1) {
            this.allProgressEndCount += 1;
            if (this.allProgressEndCount == this.count) {
                this.allProgress = 1;
            }
        }

        //當前所有加載的總進度
        if (this.callFun.has(null)) {

            //預防多個重複進度回傳
            //判斷與上一個進度是一樣的話,將不執行回傳,等待有新進度近來
            if (Util.roundDown(this.beforeProgress, 2) == Util.roundDown(this.allProgress, 2)) {
                return
            } else {
                this.beforeProgress = this.allProgress;
                //回傳當前進度,將精度將低為小數點後兩位
                this.callFun.get(null)(Util.roundDown(this.allProgress, 2));
                if (this.allProgress >= 1) {
                    //當全部加載完後,清除當前加載多少件東西的計數
                    this.count = 0;
                    //事件結束,清除該是保存的function
                    this.callFun.delete(null);
                }
            }
        }
    }

    /**
     * 次資源加載物件,監聽是否有callback,隨之返回該狀態
     * 注意,該狀態無總資源監聽回傳事件
     * @param {string} name
     * @param {number} state
     */
    public loadSecondaryEventCallback(name: string, state: number) {
        this.onlyResEventCallback(name, state);
    }

    /**
     * 單一資源返回判斷,用戶是否有添加callback參數
     * @param {string} name
     * @param {number} state
     * @private
     */
    private onlyResEventCallback(name: string, state: number) {

        //如果有綁訂的回傳方法時,將回傳該資源當前的加載進度
        if (this.callFun.has(name)) {

            this.callFun.get(name)(state);

            if (state == 1) {
                //事件結束,清除該是保存的function
                this.callFun.delete(name);
            }

        }
    }

    /**
     * 加載該資料夾底下所有資源 注意: 需存放於 resources中
     * @param {string} name : 自訂義拿取資源時的名稱
     * @param {LoadType} type : 要獲取的資源類型
     * @param {string} url : 要獲取的資源位置
     * @param {boolean} isLanguageUsed : 是否要使用語系位置
     * @return {this}
     */
    loadAsset(name: string, type: LoadType, url: string, isLanguageUsed?: boolean): this {
        this.count += 1;
        if (isLanguageUsed) {
            url = `${url}/${WebRequestManager.instance.UserLanguage}`;
        }
        this.loadTypeHandler.executeLoad(name, type, url);
        return this;
    }

    /**
     * 加載 該 assetBundle 底下資源
     * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
     * 注意:須於UI勾選配置為Bundle資料夾
     * @param {string} name : 自訂義拿取資源時的名稱
     * @param {LoadType} type : 要獲取的資源類型
     * @param {string} url : 要獲取的資源位置
     * @param {boolean} isLanguageUsed : 是否要使用語系位置
     */
    loadBundle(name: string, type: LoadType, url: string, isLanguageUsed?: boolean): this {

        if (isLanguageUsed) {

            url = `${url}/${WebRequestManager.instance.UserLanguage}`

        }

        this.loadTypeHandler.executeLoadBundle(name, type, url).then();

        return this;
    }

    /**
     * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
     * @param callFun
     * @param resName
     */
    callback(callFun: (progress: number) => void, resName?: string) {
        if (resName) {
            if (this.callFun.has(resName)) {
                ErrorManager.instance.executeError(ErrorType.LOAD_FW, "如果拿取該資源進度,請勿重複callback");
                return;
            }
            this.callFun.set(resName, callFun);
            return this;
        } else {
            if (this.callFun.has(null)) {
                ErrorManager.instance.executeError(ErrorType.LOAD_FW, "如果拿取總進度,請勿在之前資源尚未加載完前,重複callback");
                return;
            }
            this.callFun.set(null, callFun);
        }
    }

    /**
     * 查看該資源是否已加載完畢
     * @param name
     * @param isMainResources
     */
    getLoadState(name: string, isMainResources: boolean): boolean {

        if (isMainResources) {

            return this._initialLoadState.get(name) == 1;

        } else {

            return this._initialLoadState.get(name) == 1;

        }
    }

    /**
     * 加載外部腳本
     * @param name
     * @param type
     * @param url
     */
    loadExternalScript(name: string, type: LoadType, url: string) {

        this.loadTypeHandler.executeLoadExternalScript(name, type, url);

        return this;
    }

    /**
     * 重置
     */
    reset() {

        LoadResManager._instance = null;

    }

    //--------------------------------------setter------------------------------------

    set initialLoadState(value: Map<string, number>) {
        this._initialLoadState = value
    }

    set secondaryLoadState(value: Map<string, number>) {
        this._secondaryLoadState = value
    }

    set imgRes(value: Map<string, Map<string, cc.SpriteFrame>>) {
        this._imgRes = value
    }

    set spineRes(value: Map<string, sp.SkeletonData>) {
        this._spineRes = value
    }

    set readFileRes(value: Map<string, Map<string, string>>) {
        this._readFileRes = value
    }

    set prefabRes(value: Map<string, cc.Prefab>) {
        this._prefabRes = value
    }

    set musicRes(value: Map<string, cc.AudioClip>) {
        this._musicRes = value
    }

    set scriptRes(value: Set<string>) {
        this._scriptRes = value
    }

    set sceneRes(value: Map<string, cc.SceneAsset>) {
        this._sceneRes = value
    }

    //--------------------------------------getter------------------------------------

    get initialLoadState(): Map<string, number> {
        return this._initialLoadState
    }

    get secondaryLoadState(): Map<string, number> {
        return this._secondaryLoadState
    }

    get imgRes(): Map<string, Map<string, cc.SpriteFrame>> {
        return this._imgRes
    }

    get spineRes(): Map<string, sp.SkeletonData> {
        return this._spineRes
    }

    get readFileRes(): Map<string, Map<string, string>> {
        return this._readFileRes
    }

    get prefabRes(): Map<string, cc.Prefab> {
        return this._prefabRes
    }

    get musicRes(): Map<string, cc.AudioClip> {
        return this._musicRes
    }

    get scriptRes(): Set<string> {
        return this._scriptRes
    }

    get sceneRes(): Map<string, cc.SceneAsset> {
        return this._sceneRes
    }
}