import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import LoadResManager from '../Load/LoadResManager'
import {SceneStyle, SceneDirectionType} from './Enum/SceneStyle'
import {ISceneManager} from "./IScene/ISceneManager";
import SceneDirectionChangeNotification
    from "../Listener/NotificationType/SceneNotification/SceneDirectionChangeNotification";
import SceneDirectionChangeObserver from "../Listener/ObserverType/SceneObserver/SceneDirectionChangeObserver";
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
    private sceneChangeDirectionObserver: SceneDirectionChangeObserver;

    private constructor(configManager: IConfigManager) {
        this.configManager = configManager;
        this._designWidth = 1280;                                                   //初始預設寬度
        this._designHeight = 720;                                                   //初始預設高度
        this.sceneSizeChangeListener = new SceneSizeChangeListener();
        //實例化監聽器
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
     *  獲取已經初始化的靜態實例class
     */
    public static get instance(): ISceneManager {
        if (!this._instance) {
            ErrorManager.instance.executeError(ErrorType.SCENE_FW, "該類尚未實例化");
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
                    this.removeSceneChangeDirectionEventListener();
                    this._sceneDirection = SceneDirectionType.PORTRAIT;
                    break;
                case SceneStyle.Vertical:
                    this.removeSceneChangeDirectionEventListener();
                    this._sceneDirection = SceneDirectionType.LANDSCAPE;
                    break;
                case SceneStyle.AUTO:
                default:
                    this.sceneChangeDirectionEventListener();
                    break;
            }
        }
        this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);
        return this;
    }

    /**
     * 如果使用者更改螢幕式配度時,判斷當前是否開啟SceneChangeDirectionEventListener監聽
     * 如果有,且並不是SceneStyle.AUTO類型,將自動關閉訂閱
     * @private
     */
    private removeSceneChangeDirectionEventListener() {
        if (this.sceneChangeDirectionObserver) {
            SceneDirectionChangeNotification
                .instance.unsubscribe(this.sceneChangeDirectionObserver);
            this.sceneChangeDirectionObserver = null;
        }
    }

    /**
     * 自發監聽,當用戶開啟AUTO樣式,或自訂樣式時才會開啟
     * 當推波發送過來時將會更新當前 sceneDirectionType
     * @private
     */
    private sceneChangeDirectionEventListener() {
        //如果sceneChangeDirectionObserver以創建過,代表已開始監聽中,將直接離開,不重複訂閱
        if (this.sceneChangeDirectionObserver) return;
        SceneDirectionChangeNotification
            .instance.subscribe(this.getSceneChangeDirectionObserver(), true)
    }

    /**
     * 建立scene方向改變觀察者,並綁定改變scene方向時,更新當前遊戲方向狀態
     * @returns {SceneDirectionChangeObserver}
     * @private
     */
    private getSceneChangeDirectionObserver(): SceneDirectionChangeObserver {
        this.sceneChangeDirectionObserver = new SceneDirectionChangeObserver((type => {
            this.updateSceneDirection(type);
        }), true);
        return this.sceneChangeDirectionObserver;
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
    startListener(time: number) {
        this.sceneSizeChangeListener.designSceneEventListener(time);
    }

    /**
     * 更換場景
     * @param {string} name : 場景資源名稱為你Res動態加載的自訂義的scene名稱
     */
    changeScene(name: string) {
        if (!LoadResManager.instance.sceneRes.has(name)) {
            ErrorManager.instance.executeError(ErrorType.SCENE_FW, "加載不到你的Scene資源,請檢查該資源名是否正確");
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


    get sceneDirection(): SceneDirectionType {
        return this._sceneDirection;
    }

    set sceneDirection(value: SceneDirectionType) {
        this._sceneDirection = value;
    }
}