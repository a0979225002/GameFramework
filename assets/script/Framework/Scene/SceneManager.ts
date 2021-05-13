import ConfigManager from '../Config/ConfigManager'
import {ErrorType} from '../Error/Enum/ErrorManagerEnum'
import ErrorManager from '../Error/ErrorManager'
import {GameEventType} from '../Listener/Enum/gameEventType'
import EventManager from '../Listener/EventManager'
import LoadResManager from '../LoadResources/LoadResManager'
import {SceneStyle, SceneDirection} from './Enum/SceneStyle'
import SceneListener from './SceneListener'
import SceneStyleHandler from './SceneStyleHandler'

export default class SceneManager implements ISceneManager {

    private static _instance: SceneManager;
    private style: SceneStyle | Function;
    private _designWidth: number;
    private _designHeight: number;
    private sceneListener: SceneListener;
    private sceneStyleHandler: SceneStyleHandler;
    private readonly _mainGameSceneName: string;
    private _sceneDirection: SceneDirection;


    private constructor() {

        this._designWidth = 1280;                                       //初始預設寬度
        this._designHeight = 720;                                       //初始預設高度
        this._mainGameSceneName = ConfigManager.instance.mainScene;     //獲取當初config設定的主畫面名稱
        this.sceneListener = new SceneListener();                       //實例化監聽器
        this.sceneStyleHandler = new SceneStyleHandler();               //實例化scene導向器
        this.style = SceneStyle.Horizontal;                             //初始預設scene畫面調整的模式
        this._sceneDirection = SceneDirection.LANDSCAPE
    }


    //單例
    public static get instance(): SceneManager {

        if (!this._instance) {

            this._instance = new SceneManager();

        }

        return this._instance;
    }

    /**
     * cavers 設計原寬度
     * @param {number} width
     * @return {this}
     */
    setDesignWidth(width: number): this {

        this._designWidth = width;

        return this;
    }

    /**
     * cavers 設計原高度
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
     * @param {SceneStyle | Function} style : 可自定義更動樣式
     * @return {this}
     */
    updateSize(style?: SceneStyle | Function): this {

        if (style) {
            this.style = style;

            switch (style) {
                case SceneStyle.Horizontal:
                    this._sceneDirection = SceneDirection.PORTRAIT;
                    break;
                case SceneStyle.Vertical:
                    this._sceneDirection = SceneDirection.LANDSCAPE;
                    break;
            }
        }

        this.sceneStyleHandler.getStyle(this.style, this._designWidth, this._designHeight);

        return this;
    }

    sceneDirectionEventListener(callFun: (type: SceneDirection) => void) {

        EventManager.instance.gameEventListener(GameEventType.LANDSCAPE, callFun, false);
        EventManager.instance.gameEventListener(GameEventType.PORTRAIT, callFun, false);

    }

    /**
     * 監聽當前cavers是否有更動大小,如果有將會自動更新當前是配寬高
     * 將會比照上次更動的樣式進行更動
     * 如果需求更動樣式,須先更新 updateSize()
     * @param {number} time : 更新的頻率 單位毫秒 ms
     */
    autoListenerStart(time: number) {

        this.sceneListener.designSceneEventListener(time);

    }

    /**
     * 更換場景
     * @param {string} name : 如果不寫參數,將使用Config內的MainGameScene 名稱
     */
    changeScene(name?: string) {

        if (!name) {

            name = this._mainGameSceneName;
        }
        if (!LoadResManager.instance.sceneRes.has(name)) {

            ErrorManager.instance.executeError(ErrorType.SceneFW, "加載不到你的Scene資源,請檢查該資源名是否正確");
        }

        cc.director.runScene(LoadResManager.instance.sceneRes.get(name));

    }

    /**
     * 更新當前遊戲方向
     * @param {SceneDirection} direction
     */
    updateSceneDirection(direction: SceneDirection) {
        this._sceneDirection = direction;
    }

    /**
     * 清除該scene所有動作
     * @param scene
     */
    removeScene(scene: any) {
        scene.destroy();
    }

    public get sceneDirection(): SceneDirection {
        return this._sceneDirection
    }
}