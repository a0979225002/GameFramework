import {IConfigManager} from "../Config/IConfig/IConfigManager";
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import LoadResManager from '../LoadResources/LoadResManager'
import {SceneStyle, SceneDirectionType} from './Enum/SceneStyle'
import {ISceneManager} from "./IScene/ISceneManager";
import SceneDirectionChangeNotification from "./SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "./SceneDirectionChangeObserver";
import SceneSizeChangeListener from './SceneSizeChangeListener'
import SceneStyleHandler from './SceneStyleHandler'

export default class SceneManager implements ISceneManager {

    private configManager: IConfigManager;
    private static _instance: ISceneManager;
    private style: SceneStyle | ISceneStyle;
    private _designWidth: number;
    private _designHeight: number;
    private sceneSizeChangeListener: SceneSizeChangeListener;
    private sceneStyleHandler: SceneStyleHandler;
    private _sceneDirection: SceneDirectionType;
    private sceneDirectionChangeNotification: SceneDirectionChangeNotification;

    private constructor(configManager: IConfigManager) {
        this.configManager = configManager;
        this._designWidth = 1280;                                                   //初始預設寬度
        this._designHeight = 720;                                                   //初始預設高度
        this.sceneSizeChangeListener = new SceneSizeChangeListener();                         //實例化監聽器
        this.sceneStyleHandler = new SceneStyleHandler();                           //實例化scene樣式導向器
        this.style = SceneStyle.Horizontal;                                         //初始預設scene畫面調整的模式
    }

    /**
     *  懶漢加載
     *  初始化,只讓一個專案產生一次該class
     */
    public static setInstance(configManager: IConfigManager) {
        if (!this._instance) {
            this._instance = new SceneManager(configManager);
        }
    }

    /**
     *  獲取已經單例加載後的實例化class
     */
    public static get instance(): ISceneManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, "該類尚未實例化");
            return;
        }
        return this._instance;
    }

    /**
     * cavers 設計寬度
     * @param {number} width
     * @return {this}
     */
    setDesignWidth(width: number): this {

        this._designWidth = width;

        return this;
    }

    /**
     * cavers 設計高度
     * @param {number} height
     * @return {this}
     */
    setDesignHeight(height: number): this {

        this._designHeight = height;

        return this;
    }

    /**
     * 更新當前示配寬高,會保存上次的scene更動模式
     * 如不添加參數,第一次將會使用預設模式更動
     * @param {SceneStyle | Function} style : 可自定義更動樣式,但實作(介面)ISceneStyle
     * @return {this}
     */
    updateSize(style?: SceneStyle | ISceneStyle): this {
        if (style) {
            this.style = style;
            switch (style) {
                case SceneStyle.Horizontal:
                    this._sceneDirection = SceneDirectionType.PORTRAIT;
                    break;
                case SceneStyle.Vertical:
                    this._sceneDirection = SceneDirectionType.LANDSCAPE;
                    break;
                case SceneStyle.AUTO:
                default:
                    if (!this.sceneDirectionChangeNotification) {
                        this.sceneChangeDirectionEventListener();
                    }
                    break;
            }
        }
        this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);
        return this;
    }

    /**
     * 自發監聽,當用戶開啟AUTO樣式,或自訂樣式時才會開啟
     * 當推波發送過來時將會更新當前 sceneDirectionType
     * @private
     */
    private sceneChangeDirectionEventListener() {
        this.sceneDirectionChangeNotification = SceneDirectionChangeNotification.instance;
        this.sceneDirectionChangeNotification.subscribe(this.sceneChangeDirectionObserver())
    }

    /**
     * 建立scene方向改變觀察者,並綁定改變scene方向時,更新當前遊戲方向狀態
     * @returns {SceneDirectionChangeObserver}
     * @private
     */
    private sceneChangeDirectionObserver(): SceneDirectionChangeObserver {
        return new SceneDirectionChangeObserver((type) => {
            this.updateSceneDirection(type);
        }, this);
    }

    /**
     * 更新當前遊戲方向
     * @param {SceneDirectionType} direction
     */
    private updateSceneDirection(direction: SceneDirectionType) {
        this._sceneDirection = direction;
    }

    /**
     * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
     * 將會比照上次更動的樣式進行更動
     * 如果需求更動樣式,須先更新 updateSize()
     * @param {number} time : 更新的頻率 單位毫秒 ms
     */
    designSceneSizeListenerAutoStart(time: number) {
        this.sceneSizeChangeListener.designSceneEventListener(time);
    }

    /**
     * 更換場景
     * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
     */
    changeScene(name: string) {

        if (!LoadResManager.instance.sceneRes.has(name)) {
            ErrorManager.instance.executeError(ErrorType.SceneFW, "加載不到你的Scene資源,請檢查該資源名是否正確");
        }
        cc.director.runScene(LoadResManager.instance.sceneRes.get(name));
    }

    /**
     * 清除該scene所有動作
     * @param scene
     */
    removeScene(scene: any) {
        scene.destroy();
    }

    public get sceneDirection(): SceneDirectionType {
        return this._sceneDirection
    }
}