import {LoadType} from "../Enum/LoadEnum";

export default interface ILoadResManager {

    /**
     * 初始加載物件
     */
    initialLoadState: Map<string, number>;

    /**
     * 次加載,可以在還未加載完成時,也能進入MainGame Scene
     */
    secondaryLoadState: Map<string, number>;

    /**
     * img物件保存
     */
    imgRes: Map<string, Map<string, cc.SpriteFrame>>;

    /**
     * spine 物件保存
     */
    spineRes: Map<string, sp.SkeletonData>;

    /**
     * 讀取後的文件檔案,保存位置
     */
    readFileRes: Map<string, Map<string, string>>;

    /**
     * 讀取後的Prefab,保存位置
     */
    prefabRes: Map<string, cc.Prefab>;

    /**
     * 音樂保存位置
     */
    musicRes: Map<string, cc.AudioClip>;

    /**
     * 場景保存位置
     */
    sceneRes: Map<string, cc.SceneAsset>;


    /**
     * 外部腳本保存URL地址,單存判斷是否重複加載
     * @type {Set<string>}
     */
    scriptRes: Set<string>;

    /**
     * 主資源加載物件,監聽是否有callback,隨之返回該狀態
     * @param name
     * @param progress 又加載了多少
     * @param state 該物件加載到幾趴
     */
    loadMainEventCallback(name: string, progress: number, state: number): void;

    /**
     * 次資源加載物件,監聽是否有callback,隨之返回該狀態
     * 注意,該狀態無總資源監聽回傳事件
     * @param {string} name
     * @param {number} state
     */
    loadSecondaryEventCallback(name: string, state: number): void;

    /**
     * 加載該資料夾底下所有資源
     * 注意: 需存放於 resources中
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     * @param {boolean} isLanguageUsed
     * @returns {this}
     */
    loadAsset(name: string, type: LoadType, url: string, isLanguageUsed?: boolean): this;


    /**
     * 加載該 assetBundle 底下資源
     * 使用此方法者,加載狀態存放次加載中 secondaryLoadState
     * 注意:須於UI勾選配置為Bundle資料夾
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     * @returns {this}
     */
    loadBundle(name: string, type: LoadType, url: string): this;

    /**
     * 保存使用者要callback的方法,當有回傳進度時將透過 loadEventCallback方法回傳進度
     * @param {(progress: number) => void} callFun
     * @param {string} methodName
     * @returns {this}: methodName 未使用情況,回傳 void
     */
    callback(callFun: (progress: number) => void, methodName?: string): this;

    /**
     * 載入外部腳本
     * @param {string} name
     * @param {LoadType} type
     * @param {string} url
     * @returns {this}
     */
    loadExternalScript(name: string, type: LoadType, url: string): this;

    /**
     * 查看該資源是否已加載完畢
     * @param name
     * @param isMainResources
     */
    getLoadState(name: string, isMainResources: boolean): boolean;

    /**
     * 重置
     */
    reset(): void;

}